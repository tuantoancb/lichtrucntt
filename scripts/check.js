const fs = require('fs');
const path = require('path');
const required = [
  'index.html', 'css/style.css', 'js/config.js', 'js/app.js',
  'api/sheet.js', 'api/health.js', 'vercel.json', 'package.json'
];
let failed = false;
for (const f of required) {
  const p = path.join(__dirname, '..', f);
  if (!fs.existsSync(p) || fs.statSync(p).size === 0) {
    console.error('THIẾU:', f); failed = true;
  } else console.log('OK:', f);
}
for (const f of ['js/config.js', 'js/app.js', 'api/sheet.js', 'api/health.js']) {
  const p = path.join(__dirname, '..', f);
  try { new Function(fs.readFileSync(p, 'utf8')); console.log('CÚ PHÁP OK:', f); }
  catch (e) { console.error('LỖI CÚ PHÁP:', f, e.message); failed = true; }
}
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
for (const ref of ['./css/style.css?v=6.8', './js/config.js?v=6.8', './js/app.js?v=6.8']) {
  if (!html.includes(ref)) { console.error('INDEX CHƯA GỌI:', ref); failed = true; }
}
if (failed) process.exit(1);
console.log('\nKiểm tra dự án hoàn tất.');
