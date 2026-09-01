const crypto = require('crypto');

const SHEET_ID = '1ID3MbbT2bMxc_-C_cWBXJi2fcrSij8voQnbdXJ_5fkE';
const ALLOWED_SHEETS = new Set(['LichTruc', 'LichDuKien', 'DanhSachLuanPhien']);

function b64url(value) {
  return Buffer.from(value).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

async function getAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  if (!email || !rawKey) {
    const err = new Error('GOOGLE_SERVICE_ACCOUNT_NOT_CONFIGURED');
    err.statusCode = 503;
    throw err;
  }
  const privateKey = rawKey.replace(/\\n/g, '\n');
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const claim = b64url(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  }));
  const unsigned = `${header}.${claim}`;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(unsigned);
  sign.end();
  const signature = sign.sign(privateKey).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  const assertion = `${unsigned}.${signature}`;
  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion
  });
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body
  });
  const data = await response.json();
  if (!response.ok || !data.access_token) {
    const err = new Error(data.error_description || data.error || 'GOOGLE_TOKEN_ERROR');
    err.statusCode = 502;
    throw err;
  }
  return data.access_token;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  const sheet = String(req.query?.sheet || '');
  if (!ALLOWED_SHEETS.has(sheet)) {
    return res.status(400).json({ error: 'SHEET_NOT_ALLOWED' });
  }
  try {
    const token = await getAccessToken();
    const range = encodeURIComponent(`${sheet}!A:Z`);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?majorDimension=ROWS`;
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: 'GOOGLE_SHEETS_ERROR', detail: data });
    return res.status(200).json({ values: data.values || [] });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message || 'SERVER_ERROR' });
  }
};
