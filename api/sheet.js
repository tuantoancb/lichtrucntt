const { google } = require('googleapis');

const SPREADSHEET_ID = '1ID3MbbT2bMxc_-C_cWBXJi2fcrSij8voQnbdXJ_5fkE';
const ALLOWED = new Set(['LichTruc','LichDuKien','DanhSachLuanPhien']);

module.exports = async (req, res) => {
  try {
    const sheet = String(req.query.sheet || '');
    if (!ALLOWED.has(sheet)) return res.status(400).json({error:'sheet_not_allowed'});
    const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const key = (process.env.GOOGLE_PRIVATE_KEY || '').replace(/\\n/g, '\n');
    if (!email || !key) return res.status(503).json({error:'google_credentials_not_configured'});
    const auth = new google.auth.JWT({email, key, scopes:['https://www.googleapis.com/auth/spreadsheets.readonly']});
    const sheets = google.sheets({version:'v4', auth});
    const out = await sheets.spreadsheets.values.get({spreadsheetId:SPREADSHEET_ID, range:`${sheet}!A1:Z1000`});
    res.setHeader('Cache-Control','no-store');
    return res.status(200).json({values: out.data.values || []});
  } catch (err) {
    console.error(err);
    return res.status(500).json({error:'sheet_read_failed'});
  }
};
