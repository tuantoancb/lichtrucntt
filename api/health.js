module.exports = function handler(_req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({ ok: true, app: 'lich-truc-noi-tru', version: '6.8' });
};
