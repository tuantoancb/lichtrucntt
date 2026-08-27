
const SHEET_ID='1ID3MbbT2bMxc_-C_cWBXJi2fcrSij8voQnbdXJ_5fkE';
const FALLBACK=[
{date:'2026-08-16',day:'CN',leader:'Nông Thị Thu Bằng',manager:'Ma Thị Anh',classroom:'Nghỉ',outside:[['07:00','09:00','Nghỉ'],['09:00','11:00','Nghỉ'],['14:00','16:00','Nghỉ'],['16:00','18:00','Nguyễn Thị Liễu']]},
{date:'2026-08-17',day:'Thứ 2',leader:'Vũ Huyền Chi',manager:'Trần Thị Vân Anh',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Lưu Công Tuấn']]},
{date:'2026-08-18',day:'Thứ 3',leader:'Vi Thị Diệp',manager:'Hoàng Khánh Diệp',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Trần Thị Vân Anh']]},
{date:'2026-08-19',day:'Thứ 4',leader:'Lý Thu Hiền',manager:'Đàm Thị Diệp',classroom:'Ma Thị Anh',outside:[['16:30','18:30','Nguyễn Thanh Tuấn']]},
{date:'2026-08-20',day:'Thứ 5',leader:'Hà Thị Thu Oanh',manager:'Triệu Thị Đàn',classroom:'Nông Trung Hiếu',outside:[['16:30','18:30','Lê Kim Thoa']]},
{date:'2026-08-21',day:'Thứ 6',leader:'Nông Trung Hiếu',manager:'Hà Thị Phương Dung',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Hoàng Lệ Thủy']]},
{date:'2026-08-22',day:'Thứ 7',leader:'Nông Hồng Lanh',manager:'Hoàng Thị Ngọc Hà',classroom:'Trần Chiến Thắng',outside:[['16:30','18:30','Nông Thị Huệ']]},
{date:'2026-08-23',day:'CN',leader:'Nông Thị Bích Ngọc',manager:'Nông Thị Huệ',classroom:'Nghỉ',outside:[['07:00','09:00','Nông Hồng Lanh'],['09:00','11:00','Nguyễn Thị Ngọc Liễu'],['14:00','16:00','Lê Thị Mai'],['16:00','18:00','Nguyễn Thị Na']]},
{date:'2026-08-24',day:'Thứ 2',leader:'Nguyễn Thế Phong',manager:'Lâm Thị Thu Hương',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Hoàng Khánh Diệp']]},
{date:'2026-08-25',day:'Thứ 3',leader:'Nguyễn Hồng Quyên',manager:'Nguyễn Thị Liễu',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Ma Thị Anh']]},
{date:'2026-08-26',day:'Thứ 4',leader:'Lê Kim Thoa',manager:'Nguyễn Thị Ngọc Liễu',classroom:'Hoàng Lệ Thủy',outside:[['16:30','18:30','Lương Vũ Long']]},
{date:'2026-08-27',day:'Thứ 5',leader:'Lương Thị Thanh Thủy',manager:'Lương Vũ Long',classroom:'Nguyễn Thị Ngọc Liễu',outside:[['16:30','18:30','Lương Thị Thanh Thủy']]},
{date:'2026-08-28',day:'Thứ 6',leader:'Lê Thị Lan Phương',manager:'Lê Thị Mai',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Trần Chiến Thắng']]},
{date:'2026-08-29',day:'Thứ 7',leader:'Nông Thị Thu Bằng',manager:'Nguyễn Thị Na',classroom:'Ma Thị Anh',outside:[['16:30','18:30','Lý Thu Hiền']]},
{date:'2026-08-30',day:'CN',leader:'Vũ Huyền Chi',manager:'Trương Thị Mỹ Ngọc',classroom:'Nghỉ',outside:[['07:00','09:00','Nông Thị Bích Ngọc'],['09:00','11:00','Trương Thị Mỹ Ngọc'],['14:00','16:00','Triệu Thị Đàn'],['16:00','18:00','Đàm Thị Diệp']]},
{date:'2026-08-31',day:'Thứ 2',leader:'Vi Thị Diệp',manager:'Trần Kim Oanh',classroom:'Lương Vũ Long',outside:[['16:30','18:30','Hà Thị Phương Dung']]}
];
const ROT={"leader":["Nông Thị Thu Bằng","Vũ Huyền Chi","Vi Thị Diệp","Lý Thu Hiền","Hà Thị Thu Oanh","Nông Trung Hiếu","Nông Hồng Lanh","Nông Thị Bích Ngọc","Nguyễn Thế Phong","Nguyễn Hồng Quyên","Lê Kim Thoa","Lương Thị Thanh Thủy","Lê Thị Lan Phương"],"manager":["Ma Thị Anh","Trần Thị Vân Anh","Hoàng Khánh Diệp","Đàm Thị Diệp","Triệu Thị Đàn","Hà Thị Phương Dung","Hoàng Thị Ngọc Hà","Nông Thị Huệ","Lâm Thị Thu Hương","Nguyễn Thị Liễu","Nguyễn Thị Ngọc Liễu","Lương Vũ Long","Lê Thị Mai","Nguyễn Thị Na","Trương Thị Mỹ Ngọc","Trần Kim Oanh","Trần Chiến Thắng","Hoàng Lệ Thủy","Lưu Công Tuấn","Nguyễn Thanh Tuấn","Hoàng Thị Thanh Vân"],"classroom":["Lương Vũ Long","Ma Thị Anh","Nông Trung Hiếu","Trần Chiến Thắng","Hoàng Lệ Thủy","Nguyễn Thị Ngọc Liễu"],"outside":["Nguyễn Thị Liễu","Lưu Công Tuấn","Trần Thị Vân Anh","Nguyễn Thanh Tuấn","Lê Kim Thoa","Hoàng Lệ Thủy","Nông Thị Huệ","Nông Hồng Lanh","Nguyễn Thị Ngọc Liễu","Lê Thị Mai","Nguyễn Thị Na","Hoàng Khánh Diệp","Ma Thị Anh","Lương Vũ Long","Lương Thị Thanh Thủy","Trần Chiến Thắng","Lý Thu Hiền","Nông Thị Bích Ngọc","Trương Thị Mỹ Ngọc","Triệu Thị Đàn","Đàm Thị Diệp","Hà Thị Phương Dung","Nông Thị Thu Bằng","Vũ Huyền Chi","Vi Thị Diệp","Nông Trung Hiếu","Nguyễn Hồng Quyên","Hoàng Thị Ngọc Hà","Lâm Thị Thu Hương","Trần Kim Oanh","Hoàng Thị Thanh Vân"]};
const DRAFT_FALLBACK=[{"date":"2026-09-01","day":"Thứ 3","leader":"Lý Thu Hiền","manager":"Trần Chiến Thắng","classroom":"Ma Thị Anh","outside":[["16:30","18:30","Nông Thị Thu Bằng"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-02","day":"Thứ 4","leader":"Hà Thị Thu Oanh","manager":"Hoàng Lệ Thủy","classroom":"Nông Trung Hiếu","outside":[["16:30","18:30","Vũ Huyền Chi"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-03","day":"Thứ 5","leader":"Nông Trung Hiếu","manager":"Lưu Công Tuấn","classroom":"Trần Chiến Thắng","outside":[["16:30","18:30","Vi Thị Diệp"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-04","day":"Thứ 6","leader":"Nông Hồng Lanh","manager":"Nguyễn Thanh Tuấn","classroom":"Hoàng Lệ Thủy","outside":[["16:30","18:30","Nông Trung Hiếu"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-05","day":"Thứ 7","leader":"Nông Thị Bích Ngọc","manager":"Hoàng Thị Thanh Vân","classroom":"Nguyễn Thị Ngọc Liễu","outside":[["16:30","18:30","Nguyễn Hồng Quyên"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-06","day":"CN","leader":"Nguyễn Thế Phong","manager":"Ma Thị Anh","classroom":"Nghỉ","outside":[["07:00","09:00","Hoàng Thị Ngọc Hà"],["09:00","11:00","Lâm Thị Thu Hương"],["14:00","16:00","Trần Kim Oanh"],["16:00","18:00","Hoàng Thị Thanh Vân"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-07","day":"Thứ 2","leader":"Nguyễn Hồng Quyên","manager":"Trần Thị Vân Anh","classroom":"Lương Vũ Long","outside":[["16:30","18:30","Nông Thị Thu Bằng"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-08","day":"Thứ 3","leader":"Lê Kim Thoa","manager":"Hoàng Khánh Diệp","classroom":"Ma Thị Anh","outside":[["16:30","18:30","Vũ Huyền Chi"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-09","day":"Thứ 4","leader":"Lương Thị Thanh Thủy","manager":"Đàm Thị Diệp","classroom":"Nông Trung Hiếu","outside":[["16:30","18:30","Trần Chiến Thắng"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-10","day":"Thứ 5","leader":"Lê Thị Lan Phương","manager":"Triệu Thị Đàn","classroom":"Trần Chiến Thắng","outside":[["16:30","18:30","Lương Thị Thanh Thủy"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-11","day":"Thứ 6","leader":"Nông Thị Thu Bằng","manager":"Hà Thị Phương Dung","classroom":"Hoàng Lệ Thủy","outside":[["16:30","18:30","Lý Thu Hiền"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-12","day":"Thứ 7","leader":"Vũ Huyền Chi","manager":"Hoàng Thị Ngọc Hà","classroom":"Nguyễn Thị Ngọc Liễu","outside":[["16:30","18:30","Hà Thị Phương Dung"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-13","day":"CN","leader":"Vi Thị Diệp","manager":"Nông Thị Huệ","classroom":"Nghỉ","outside":[["07:00","09:00","Lưu Công Tuấn"],["09:00","11:00","Trần Thị Vân Anh"],["14:00","16:00","Nguyễn Thanh Tuấn"],["16:00","18:00","Lê Kim Thoa"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-14","day":"Thứ 2","leader":"Lý Thu Hiền","manager":"Lâm Thị Thu Hương","classroom":"Lương Vũ Long","outside":[["16:30","18:30","Nguyễn Thị Liễu"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-15","day":"Thứ 3","leader":"Hà Thị Thu Oanh","manager":"Nguyễn Thị Liễu","classroom":"Ma Thị Anh","outside":[["16:30","18:30","Nông Hồng Lanh"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-16","day":"Thứ 4","leader":"Nông Trung Hiếu","manager":"Nguyễn Thị Ngọc Liễu","classroom":"Nông Trung Hiếu","outside":[["16:30","18:30","Lê Thị Mai"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-17","day":"Thứ 5","leader":"Nông Hồng Lanh","manager":"Lương Vũ Long","classroom":"Trần Chiến Thắng","outside":[["16:30","18:30","Nguyễn Thị Ngọc Liễu"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-18","day":"Thứ 6","leader":"Nông Thị Bích Ngọc","manager":"Lê Thị Mai","classroom":"Hoàng Lệ Thủy","outside":[["16:30","18:30","Nguyễn Thị Na"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-19","day":"Thứ 7","leader":"Nguyễn Thế Phong","manager":"Nguyễn Thị Na","classroom":"Nguyễn Thị Ngọc Liễu","outside":[["16:30","18:30","Nông Thị Bích Ngọc"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-20","day":"CN","leader":"Nguyễn Hồng Quyên","manager":"Trương Thị Mỹ Ngọc","classroom":"Nghỉ","outside":[["07:00","09:00","Hoàng Lệ Thủy"],["09:00","11:00","Nông Thị Huệ"],["14:00","16:00","Hoàng Khánh Diệp"],["16:00","18:00","Ma Thị Anh"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-21","day":"Thứ 2","leader":"Lê Kim Thoa","manager":"Trần Kim Oanh","classroom":"Lương Vũ Long","outside":[["16:30","18:30","Trương Thị Mỹ Ngọc"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-22","day":"Thứ 3","leader":"Lương Thị Thanh Thủy","manager":"Trần Chiến Thắng","classroom":"Ma Thị Anh","outside":[["16:30","18:30","Triệu Thị Đàn"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-23","day":"Thứ 4","leader":"Lê Thị Lan Phương","manager":"Hoàng Lệ Thủy","classroom":"Nông Trung Hiếu","outside":[["16:30","18:30","Đàm Thị Diệp"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-24","day":"Thứ 5","leader":"Nông Thị Thu Bằng","manager":"Lưu Công Tuấn","classroom":"Trần Chiến Thắng","outside":[["16:30","18:30","Hoàng Thị Ngọc Hà"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-25","day":"Thứ 6","leader":"Vũ Huyền Chi","manager":"Nguyễn Thanh Tuấn","classroom":"Hoàng Lệ Thủy","outside":[["16:30","18:30","Lâm Thị Thu Hương"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-26","day":"Thứ 7","leader":"Vi Thị Diệp","manager":"Hoàng Thị Thanh Vân","classroom":"Nguyễn Thị Ngọc Liễu","outside":[["16:30","18:30","Trần Kim Oanh"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-27","day":"CN","leader":"Lý Thu Hiền","manager":"Ma Thị Anh","classroom":"Nghỉ","outside":[["07:00","09:00","Lương Vũ Long"],["09:00","11:00","Vi Thị Diệp"],["14:00","16:00","Nông Trung Hiếu"],["16:00","18:00","Nguyễn Hồng Quyên"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-28","day":"Thứ 2","leader":"Hà Thị Thu Oanh","manager":"Trần Thị Vân Anh","classroom":"Lương Vũ Long","outside":[["16:30","18:30","Hoàng Thị Thanh Vân"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-29","day":"Thứ 3","leader":"Nông Trung Hiếu","manager":"Hoàng Khánh Diệp","classroom":"Ma Thị Anh","outside":[["16:30","18:30","Nông Thị Thu Bằng"]],"generated":true,"status":"Dự kiến"},{"date":"2026-09-30","day":"Thứ 4","leader":"Nông Hồng Lanh","manager":"Đàm Thị Diệp","classroom":"Nông Trung Hiếu","outside":[["16:30","18:30","Vũ Huyền Chi"]],"generated":true,"status":"Dự kiến"}];
let RAW=JSON.parse(JSON.stringify(FALLBACK)); let GENERATED=JSON.parse(JSON.stringify(DRAFT_FALLBACK)); let MINE_FILTER='all'; let PERSON_MODE='all';
const $=s=>document.querySelector(s); const pad=n=>String(n).padStart(2,'0');
const localIso=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; const fmt=iso=>new Intl.DateTimeFormat('vi-VN').format(new Date(iso+'T12:00:00'));
function vnDay(d){return ['CN','Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7'][d.getDay()]}
function events(r){let a=[{role:'Trực lãnh đạo',person:r.leader,time:'Buổi tối'},{role:'Trực quản sinh',person:r.manager,time:'Buổi tối'},{role:'Quản lí giờ học',person:r.classroom,time:''}];r.outside.forEach(x=>a.push({role:'Trực ngoài giờ',person:x[2],time:`${x[0]}-${x[1]}`}));return a}
function allRows(){return [...RAW,...GENERATED].sort((a,b)=>a.date.localeCompare(b.date))}
function people(){let s=new Set();allRows().forEach(r=>events(r).forEach(e=>{if(e.person&&e.person!=='Nghỉ')s.add(e.person)}));return [...s].sort((a,b)=>a.localeCompare(b,'vi'))}
function duties(name){let o=[];allRows().forEach(r=>events(r).forEach(e=>{if(e.person===name)o.push({...e,date:r.date,day:r.day,row:r})}));return o.sort((a,b)=>a.date.localeCompare(b.date)||a.time.localeCompare(b.time))}
function pairHTML(r){return `<div class="duty pair"><div class="icon">🌙</div><div><div class="role">TRỰC BUỔI TỐI • CẶP TRỰC</div><div class="pairgrid"><div class="pairbox"><b>🟣 Trực lãnh đạo</b>${r.leader}</div><div class="pairbox"><b>🟢 Trực quản sinh</b>${r.manager}</div></div></div></div>`}
function dutyHTML(role,person,time=''){let c=role==='Quản lí giờ học'?'classroom':role==='Trực ngoài giờ'?'outside':role==='Trực lãnh đạo'?'leader':'manager';let ic=c==='classroom'?'🏫':c==='outside'?'🕟':c==='leader'?'🌙':'👨‍🎓';return `<div class="duty ${c}"><div class="icon">${ic}</div><div><div class="role">${role}</div><div class="person">${person}</div>${time?`<div class="time">${time}</div>`:''}</div></div>`}
function dayCard(r,label){if(!r)return `<div class="card"><h2>${label}</h2><div class="muted">Chưa có lịch.</div></div>`;let out=r.outside.map(x=>dutyHTML('Trực ngoài giờ',x[2],`${x[0]} – ${x[1]}`)).join('');return `<div class="card"><div class="section-title"><div><h2>${label}</h2><div class="muted">${r.day} • ${fmt(r.date)}</div></div></div>${pairHTML(r)}${dutyHTML('Quản lí giờ học',r.classroom)}${out}</div>`}
function rolePeople(key){let s=new Set();allRows().forEach(r=>{let p=r[key];if(p&&p!=='Nghỉ')s.add(p)});return [...s].sort((a,b)=>a.localeCompare(b,'vi'))}
function initPeople(){let p=people();let opts='<option value="">— Chọn giáo viên —</option>'+p.map(x=>`<option>${x}</option>`).join('');$('#personSelect').innerHTML=opts;$('#statPerson').innerHTML=opts;let lp=rolePeople('leader'),mp=rolePeople('manager');$('#leaderSelect').innerHTML='<option value="">— Chọn người trực lãnh đạo —</option>'+lp.map(x=>`<option>${x}</option>`).join('');$('#managerSelect').innerHTML='<option value="">— Chọn người trực quản sinh —</option>'+mp.map(x=>`<option>${x}</option>`).join('');}
function renderHome(){let now=new Date(),tom=new Date();tom.setDate(now.getDate()+1);let a=allRows();$('#todayTomorrow').innerHTML=dayCard(a.find(r=>r.date===localIso(now)),'Hôm nay')+dayCard(a.find(r=>r.date===localIso(tom)),'Ngày mai');renderQuick()}
function renderQuick(){let n=$('#personSelect').value;if(!n){$('#quick').innerHTML='<div class="muted">Chọn người ở ô Trực lãnh đạo hoặc Trực quản sinh phía trên.</div>';return}let now=localIso(new Date());if(PERSON_MODE==='leader'||PERSON_MODE==='manager'){let key=PERSON_MODE,rows=allRows().filter(r=>r[key]===n),r=rows.find(r=>r.date>=now)||rows[rows.length-1];if(!r){$('#quick').innerHTML='<div class="muted">Không có ca trực.</div>';return}let role=key==='leader'?'Trực lãnh đạo':'Trực quản sinh',mate=key==='leader'?`Quản sinh: ${r.manager}`:`Lãnh đạo: ${r.leader}`;$('#quick').innerHTML=`<div class="item mineitem-evening"><div class="when">${fmt(r.date)}</div><div><b>${role}</b><div class="muted">${r.day} • Buổi tối • ${mate}</div></div><span class="pill">${n}</span></div>`;return}let ds=duties(n),x=ds.find(d=>d.date>=now)||ds[ds.length-1];$('#quick').innerHTML=x?`<div class="item"><div class="when">${fmt(x.date)}</div><div><b>${x.role}</b><div class="muted">${x.day}${x.time?' • '+x.time:''}</div></div><span class="pill">${x.person}</span></div>`:'<div class="muted">Không có ca trực.</div>'}
function mineEntries(name){
 let o=[];
 allRows().forEach(r=>{
   if(r.leader===name||r.manager===name)o.push({type:'evening',role:'Trực buổi tối',person:name,date:r.date,day:r.day,time:'Buổi tối',row:r});
   if(r.classroom===name)o.push({type:'classroom',role:'Quản lí giờ học',person:name,date:r.date,day:r.day,time:'',row:r});
   r.outside.forEach(x=>{if(x[2]===name)o.push({type:'outside',role:'Trực ngoài giờ',person:name,date:r.date,day:r.day,time:`${x[0]}-${x[1]}`,row:r})});
 });
 return o.sort((a,b)=>a.date.localeCompare(b.date)||({evening:0,classroom:1,outside:2}[a.type]-({evening:0,classroom:1,outside:2}[b.type]))||a.time.localeCompare(b.time));
}
function mineItemHTML(d){
 let main=d.type==='evening'?'🌙 Trực buổi tối':d.type==='classroom'?'🔵 Quản lí giờ học':'🟠 Trực ngoài giờ';
 let detail=d.type==='evening'?`<div class="pairline"><span>🟣 Lãnh đạo: <b>${d.row.leader}</b></span><span>🟢 Quản sinh: <b>${d.row.manager}</b></span></div>`:'';
 let sub=d.type==='evening'?`${d.day} • Cặp trực buổi tối`:`${d.day}${d.time?' • '+d.time:''}`;
 return `<div class="item mineitem-${d.type}"><div class="when">${fmt(d.date)}</div><div><div class="rolemark ${d.type}">${main}</div><div class="muted">${sub}</div>${detail}</div><span class="pill">${d.person}</span></div>`;
}
function renderMine(){
 let n=$('#personSelect').value,all=n?mineEntries(n):[],ds=[];
 if(PERSON_MODE==='leader'){ds=all.filter(d=>d.type==='evening'&&d.row.leader===n);$('#mineTitle').textContent=n?`Trực lãnh đạo • ${n}`:'Trực lãnh đạo';$('#mineHint').textContent='Chỉ hiển thị những ngày người này được phân công Trực lãnh đạo; thẻ vẫn ghi đủ cặp Lãnh đạo + Quản sinh.';$('#mineFilters').classList.add('hidden')}
 else if(PERSON_MODE==='manager'){ds=all.filter(d=>d.type==='evening'&&d.row.manager===n);$('#mineTitle').textContent=n?`Trực quản sinh • ${n}`:'Trực quản sinh';$('#mineHint').textContent='Chỉ hiển thị những ngày người này được phân công Trực quản sinh; thẻ vẫn ghi đủ cặp Lãnh đạo + Quản sinh.';$('#mineFilters').classList.add('hidden')}
 else{ds=MINE_FILTER==='all'?all:all.filter(d=>d.type===MINE_FILTER);$('#mineTitle').textContent=n?`Lịch trực của ${n}`:'Lịch của tôi';$('#mineHint').textContent='Lọc nhanh để chỉ xem đúng loại trực cần thiết';$('#mineFilters').classList.remove('hidden')}
 $('#mineCount').textContent=ds.length?`${ds.length} ca`:'';
 $('#mineList').innerHTML=ds.length?ds.map(mineItemHTML).join(''):(n?'<div class="muted">Không có ca trực thuộc lựa chọn này.</div>':'<div class="muted">Chọn người ở ô Trực lãnh đạo hoặc Trực quản sinh phía trên.</div>');
}
function monthKeys(){return [...new Set(allRows().map(r=>r.date.slice(0,7)))].sort()}
function refreshMonths(){let keys=monthKeys();let opt=keys.map(k=>`<option value="${k}">${k.slice(5,7)}/${k.slice(0,4)}</option>`).join('');$('#monthViewSelect').innerHTML=opt;$('#statMonth').innerHTML='<option value="all">Tất cả</option>'+opt;if(GENERATED.length){let k=GENERATED[0].date.slice(0,7);$('#monthViewSelect').value=k;$('#statMonth').value=k}}
function renderMonth(){let k=$('#monthViewSelect').value;let rows=allRows().filter(r=>r.date.startsWith(k));$('#monthGrid').innerHTML=rows.map(r=>`<div class="monthday"><div class="d">${r.day} • ${r.date.slice(8,10)}/${r.date.slice(5,7)}</div><div class="s">🌙 ${r.leader} + ${r.manager}</div><div class="s">🏫 ${r.classroom}</div><div class="s">🕟 ${r.outside.length} ca ngoài giờ</div>${r.generated?'<div class="s" style="color:#b45309;font-weight:800">📝 Dự kiến</div>':''}</div>`).join('')||'<div class="muted">Chưa có lịch tháng này.</div>'}
function nextIndex(list,last){let i=list.indexOf(last);return i<0?0:(i+1)%list.length}
function historyBefore(monthKey){let cutoff=monthKey+'-01',m=new Map();[...RAW,...GENERATED].filter(r=>r.date<cutoff).sort((a,b)=>a.date.localeCompare(b.date)).forEach(r=>m.set(r.date,r));return [...m.values()].sort((a,b)=>a.date.localeCompare(b.date))}
function lastUsedInRows(rows,role,weekdayOnly=false){for(let i=rows.length-1;i>=0;i--){let r=rows[i];if(role==='outside'){if(weekdayOnly&&new Date(r.date+'T12:00:00').getDay()===0)continue;for(let j=r.outside.length-1;j>=0;j--){let p=r.outside[j][2];if(p&&p!=='Nghỉ')return p}}else{let p=r[role];if(p&&p!=='Nghỉ')return p}}return ''}
function outsideFairStats(rows){let map=new Map();ROT.outside.forEach((p,i)=>map.set(p,{person:p,totalShifts:0,sunDays:0,sunShifts:0,lastDate:'',lastSunday:'',order:i}));rows.forEach(r=>{let sun=new Date(r.date+'T12:00:00').getDay()===0,seen=new Set();r.outside.forEach(x=>{let p=x[2],o=map.get(p);if(!o||p==='Nghỉ')return;o.totalShifts++;if(!o.lastDate||r.date>o.lastDate)o.lastDate=r.date;if(sun){o.sunShifts++;seen.add(p);if(!o.lastSunday||r.date>o.lastSunday)o.lastSunday=r.date}});if(sun)seen.forEach(p=>map.get(p).sunDays++)});return map}
function gapDays(dateIso,lastIso){if(!lastIso)return 99999;return Math.round((new Date(dateIso+'T12:00:00')-new Date(lastIso+'T12:00:00'))/86400000)}
function planOutsideTargets(history,y,m){let st=outsideFairStats(history),days=new Date(y,m,0).getDate(),totalSlots=0,sunSlots=0;for(let d=1;d<=days;d++){let sun=new Date(y,m-1,d).getDay()===0;totalSlots+=sun?4:1;if(sun)sunSlots+=4}let totalTarget=new Map(),sunTarget=new Map();ROT.outside.forEach(p=>{let o=st.get(p);totalTarget.set(p,o.totalShifts);sunTarget.set(p,o.sunDays)});for(let i=0;i<totalSlots;i++){let p=[...ROT.outside].sort((a,b)=>totalTarget.get(a)-totalTarget.get(b)||st.get(a).sunDays-st.get(b).sunDays||(st.get(a).lastDate||'0000-00-00').localeCompare(st.get(b).lastDate||'0000-00-00')||st.get(a).order-st.get(b).order)[0];totalTarget.set(p,totalTarget.get(p)+1)}for(let i=0;i<sunSlots;i++){let cand=ROT.outside.filter(p=>sunTarget.get(p)<totalTarget.get(p));cand.sort((a,b)=>sunTarget.get(a)-sunTarget.get(b)||totalTarget.get(a)-totalTarget.get(b)||st.get(a).totalShifts-st.get(b).totalShifts||(st.get(a).lastSunday||'0000-00-00').localeCompare(st.get(b).lastSunday||'0000-00-00')||st.get(a).order-st.get(b).order);let p=cand[0];sunTarget.set(p,sunTarget.get(p)+1)}return {st,totalTarget,sunTarget}}
function chooseBalancedOutside(dateIso,dayRoles,state,sunday=false,already=new Set()){let {st,remainingTotal,remainingSun}=state;let cand=ROT.outside.filter(p=>!already.has(p)&&remainingTotal.get(p)>0&&(sunday?remainingSun.get(p)>0:true));if(!sunday){let reserved=cand.filter(p=>remainingTotal.get(p)>remainingSun.get(p));if(reserved.length)cand=reserved}let noRole=cand.filter(p=>!dayRoles.has(p));if(noRole.length)cand=noRole;let noAdjacent=cand.filter(p=>gapDays(dateIso,st.get(p).lastDate)!==1);if(noAdjacent.length)cand=noAdjacent;if(sunday){let noConsecutiveSun=cand.filter(p=>gapDays(dateIso,st.get(p).lastSunday)!==7);if(noConsecutiveSun.length)cand=noConsecutiveSun;cand.sort((a,b)=>remainingSun.get(b)-remainingSun.get(a)||remainingTotal.get(b)-remainingTotal.get(a)||st.get(a).sunDays-st.get(b).sunDays||st.get(a).totalShifts-st.get(b).totalShifts||(st.get(a).lastSunday||'0000-00-00').localeCompare(st.get(b).lastSunday||'0000-00-00')||(st.get(a).lastDate||'0000-00-00').localeCompare(st.get(b).lastDate||'0000-00-00')||st.get(a).order-st.get(b).order)}else{cand.sort((a,b)=>remainingTotal.get(b)-remainingTotal.get(a)||st.get(a).totalShifts-st.get(b).totalShifts||st.get(a).sunDays-st.get(b).sunDays||(st.get(a).lastDate||'0000-00-00').localeCompare(st.get(b).lastDate||'0000-00-00')||st.get(a).order-st.get(b).order)}return cand[0]}
function generateMonth(){let val=$('#genMonth').value;if(!val)return;let [y,m]=val.split('-').map(Number),days=new Date(y,m,0).getDate(),history=historyBefore(val);let idx={leader:nextIndex(ROT.leader,lastUsedInRows(history,'leader')),manager:nextIndex(ROT.manager,lastUsedInRows(history,'manager')),classroom:nextIndex(ROT.classroom,lastUsedInRows(history,'classroom'))};let plan=planOutsideTargets(history,y,m),remainingTotal=new Map(),remainingSun=new Map();ROT.outside.forEach(p=>{remainingTotal.set(p,plan.totalTarget.get(p)-plan.st.get(p).totalShifts);remainingSun.set(p,plan.sunTarget.get(p)-plan.st.get(p).sunDays)});let state={st:plan.st,remainingTotal,remainingSun},rows=[];for(let d=1;d<=days;d++){let dt=new Date(y,m-1,d),sun=dt.getDay()===0,dateIso=`${y}-${pad(m)}-${pad(d)}`;let leader=ROT.leader[idx.leader++%ROT.leader.length],manager=ROT.manager[idx.manager++%ROT.manager.length],classroom=sun?'Nghỉ':ROT.classroom[idx.classroom++%ROT.classroom.length],outside=[],roles=new Set([leader,manager,classroom]);if(sun){let slots=[['07:00','09:00'],['09:00','11:00'],['14:00','16:00'],['16:00','18:00']],picked=new Set();slots.forEach(([s,e])=>{let p=chooseBalancedOutside(dateIso,roles,state,true,picked);picked.add(p);outside.push([s,e,p]);remainingTotal.set(p,remainingTotal.get(p)-1);remainingSun.set(p,remainingSun.get(p)-1);let o=plan.st.get(p);o.totalShifts++;o.sunDays++;o.sunShifts++;o.lastDate=dateIso;o.lastSunday=dateIso})}else{let p=chooseBalancedOutside(dateIso,roles,state,false);outside.push(['16:30','18:30',p]);remainingTotal.set(p,remainingTotal.get(p)-1);let o=plan.st.get(p);o.totalShifts++;o.lastDate=dateIso}rows.push({date:dateIso,day:vnDay(dt),leader,manager,classroom,outside,generated:true,status:'Dự kiến'})}GENERATED=rows;localStorage.setItem('generatedDutyMonth',JSON.stringify(GENERATED));renderGenerated();initPeople();refreshMonths();renderMonth();renderStats()}
function renderGenerated(){if(!GENERATED.length){$('#genSummary').innerHTML='<div class="muted">Chưa tạo lịch.</div>';$('#genTable').innerHTML='';return}let k=GENERATED[0].date.slice(0,7),combined=[...historyBefore(k),...GENERATED],st=outsideFairStats(combined),tot=ROT.outside.map(p=>st.get(p).totalShifts),sun=ROT.outside.map(p=>st.get(p).sunDays),totalSpread=Math.max(...tot)-Math.min(...tot),sunSpread=Math.max(...sun)-Math.min(...sun),sunCount=GENERATED.filter(r=>r.day==='CN').length;$('#genSummary').innerHTML=`<span class="badge">Đã tạo ${GENERATED.length} ngày • ${k.slice(5,7)}/${k.slice(0,4)}</span> <span class="badge">⚖️ Tổng ca chênh ${totalSpread} • CN chênh ${sunSpread} ngày</span> <span class="badge">${sunCount} Chủ nhật • 4 người/CN</span>`;$('#genTable').innerHTML=`<div class="tablewrap"><table><thead><tr><th>Ngày</th><th>Thứ</th><th>Trực lãnh đạo</th><th>Trực quản sinh</th><th>QL giờ học</th><th>Trực ngoài giờ</th></tr></thead><tbody>${GENERATED.map(r=>`<tr${r.day==='CN'?' style="background:#fff7ed"':''}><td>${fmt(r.date)}</td><td>${r.day}${r.day==='CN'?' ⚖️':''}</td><td>${r.leader}</td><td>${r.manager}</td><td>${r.classroom}</td><td>${r.outside.map(x=>`${x[0]}-${x[1]}: ${x[2]}`).join('<br>')}</td></tr>`).join('')}</tbody></table></div>`}
function hours(s,e){let [sh,sm]=s.split(':').map(Number),[eh,em]=e.split(':').map(Number);return (eh*60+em-sh*60-sm)/60}
function renderStats(){
 let n=$('#statPerson').value,k=$('#statMonth').value;
 let rows=allRows().filter(r=>(k==='all'||r.date.startsWith(k)));
 if(!n){
   $('#statCards').innerHTML='<div class="muted">Chọn giáo viên để xem chi tiết cá nhân.</div>';
   $('#statDetail').innerHTML='';
 }else{
   let shifts=[];
   rows.forEach(r=>r.outside.forEach(x=>{if(x[2]===n)shifts.push({date:r.date,day:r.day,s:x[0],e:x[1],h:hours(x[0],x[1])})}));
   let sunShifts=shifts.filter(x=>x.day==='CN'),sunDays=new Set(sunShifts.map(x=>x.date)).size;
   let satShifts=shifts.filter(x=>x.day==='Thứ 7'),satDays=new Set(satShifts.map(x=>x.date)).size;
   let weekday=shifts.length-sunShifts.length-satShifts.length,totalH=shifts.reduce((a,b)=>a+b.h,0);
   $('#statCards').innerHTML=`<div class="stat"><div class="n">${shifts.length}</div><div class="l">Tổng ca ngoài giờ</div></div><div class="stat"><div class="n">${sunDays}</div><div class="l">Ngày Chủ nhật</div></div><div class="stat"><div class="n">${sunShifts.length}</div><div class="l">Ca trong Chủ nhật</div></div><div class="stat"><div class="n">${satDays}</div><div class="l">Ngày Thứ 7</div></div><div class="stat"><div class="n">${totalH}</div><div class="l">Tổng giờ trực ngoài giờ</div></div>`;
   $('#statDetail').innerHTML=shifts.length?`<div class="list">${shifts.map(x=>`<div class="item"><div class="when">${fmt(x.date)}</div><div><b>Trực ngoài giờ</b><div class="muted">${x.day} • ${x.s}-${x.e}</div></div><span class="pill">${x.h} giờ</span></div>`).join('')}</div>`:'<div class="muted">Không có ca trực ngoài giờ trong phạm vi này.</div>';
 }
 renderSundayRanking(rows,k);
}
function renderSundayRanking(rows,k){
 let map=new Map();
 rows.forEach(r=>{
   r.outside.forEach(x=>{
     let p=x[2]; if(!p||p==='Nghỉ')return;
     if(!map.has(p))map.set(p,{person:p,sunDates:new Set(),sunShifts:0,totalShifts:0,totalHours:0});
     let o=map.get(p);o.totalShifts++;o.totalHours+=hours(x[0],x[1]);
     if(r.day==='CN'){o.sunDates.add(r.date);o.sunShifts++;}
   });
 });
 let arr=[...map.values()].map(o=>({...o,sunDays:o.sunDates.size})).filter(o=>o.sunDays>0).sort((a,b)=>b.sunDays-a.sunDays||b.sunShifts-a.sunShifts||b.totalShifts-a.totalShifts||a.person.localeCompare(b.person,'vi'));
 $('#rankScope').textContent=k==='all'?'Tất cả dữ liệu':`${k.slice(5,7)}/${k.slice(0,4)}`;
 if(!arr.length){$('#sundayRankBody').innerHTML='<tr><td colspan="5" class="muted">Chưa có dữ liệu trực ngoài giờ vào Chủ nhật.</td></tr>';return;}
 let max=arr[0].sunDays;
 $('#sundayRankBody').innerHTML=arr.map((o,i)=>`<tr class="${o.sunDays===max?'top1':''}"><td class="num"><span class="rankbadge">${i+1}</span></td><td><b>${o.person}</b>${o.sunDays===max?' <span class="badge">Cần cân đối</span>':''}</td><td class="num">${o.sunDays}</td><td class="num">${o.sunShifts}</td><td class="num">${o.totalShifts}</td></tr>`).join('');
}

function xmlEsc(s){return String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function wordThu(day){return day==='CN'?'CN':String(day).replace('Thứ ','')}
function crc32(bytes){let c=0xffffffff;for(let b of bytes){c^=b;for(let k=0;k<8;k++)c=(c>>>1)^((c&1)?0xedb88320:0)}return(c^0xffffffff)>>>0}
function u16(n){return new Uint8Array([n&255,(n>>>8)&255])}
function u32(n){return new Uint8Array([n&255,(n>>>8)&255,(n>>>16)&255,(n>>>24)&255])}
function catBytes(parts){let n=parts.reduce((s,a)=>s+a.length,0),out=new Uint8Array(n),p=0;for(let a of parts){out.set(a,p);p+=a.length}return out}
function zipStore(files){let enc=new TextEncoder(),locals=[],centrals=[],offset=0;for(let f of files){let name=enc.encode(f.name),data=typeof f.data==='string'?enc.encode(f.data):f.data,crc=crc32(data);let lh=catBytes([u32(0x04034b50),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),name,data]);locals.push(lh);let ch=catBytes([u32(0x02014b50),u16(20),u16(20),u16(0),u16(0),u16(0),u16(0),u32(crc),u32(data.length),u32(data.length),u16(name.length),u16(0),u16(0),u16(0),u16(0),u32(0),u32(offset),name]);centrals.push(ch);offset+=lh.length}let central=catBytes(centrals),local=catBytes(locals),end=catBytes([u32(0x06054b50),u16(0),u16(0),u16(files.length),u16(files.length),u32(central.length),u32(local.length),u16(0)]);return new Blob([local,central,end],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'})}
function wp(text,opt={}){
 let lines=String(text??'').split('\n');
 let runs=lines.map((line,i)=>`${i?'<w:r><w:br/></w:r>':''}<w:r><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman"/>${opt.bold?'<w:b/>':''}${opt.italic?'<w:i/>':''}<w:sz w:val="${opt.sz||18}"/><w:szCs w:val="${opt.sz||18}"/><w:lang w:val="vi-VN"/></w:rPr><w:t xml:space="preserve">${xmlEsc(line)}</w:t></w:r>`).join('');
 let keep=opt.keepNext?'<w:keepNext/>':'';
 return `<w:p><w:pPr>${keep}${opt.align?'<w:jc w:val="'+opt.align+'"/>':''}<w:spacing w:before="0" w:after="0" w:line="240" w:lineRule="auto"/></w:pPr>${runs}</w:p>`
}
function wcell(content,width,opt={}){
 let span=opt.gridSpan?`<w:gridSpan w:val="${opt.gridSpan}"/>`:'';
 let merge=opt.vmerge?`<w:vMerge${opt.vmerge==='restart'?' w:val="restart"':''}/>`:'';
 let borders=opt.noBorder?'':`<w:tcBorders><w:top w:val="single" w:sz="6" w:color="000000"/><w:left w:val="single" w:sz="6" w:color="000000"/><w:bottom w:val="single" w:sz="6" w:color="000000"/><w:right w:val="single" w:sz="6" w:color="000000"/></w:tcBorders>`;
 let mar=opt.noBorder?'':`<w:tcMar><w:top w:w="50" w:type="dxa"/><w:start w:w="55" w:type="dxa"/><w:bottom w:w="50" w:type="dxa"/><w:end w:w="55" w:type="dxa"/></w:tcMar>`;
 return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/><w:vAlign w:val="center"/>${span}${merge}${mar}${opt.shade?'<w:shd w:fill="E7E6E6"/>':''}${borders}</w:tcPr>${content}</w:tc>`
}
function wordTableXml(rows){
 // Chiều rộng này bám theo mẫu DOCX đã render kiểm tra tốt trên A4 ngang.
 const W=[605,605,1238,2275,2275,1930,2808,1699,1080];
 let grid=W.map(x=>`<w:gridCol w:w="${x}"/>`).join('');
 let h=`<w:tbl><w:tblPr><w:tblW w:type="auto" w:w="0"/><w:jc w:val="center"/><w:tblLayout w:type="fixed"/><w:tblLook w:firstColumn="1" w:firstRow="1" w:lastColumn="0" w:lastRow="0" w:noHBand="0" w:noVBand="1" w:val="04A0"/></w:tblPr><w:tblGrid>${grid}</w:tblGrid>`;
 const head1=[['STT',0],['Thứ',1],['Ngày - tháng',2],['Trực Lãnh đạo\n(Buổi tối)',3],['Trực quản sinh\n(Buổi tối)',4],['Trực quản lí giờ học',5]];
 h+=`<w:tr><w:trPr><w:tblHeader w:val="true"/><w:cantSplit/></w:trPr>${head1.map(([x,i])=>wcell(wp(x,{bold:true,align:'center',sz:16}),W[i],{shade:true,vmerge:'restart'})).join('')}${wcell(wp('Trực ngoài giờ',{bold:true,align:'center',sz:16}),W[6]+W[7],{shade:true,gridSpan:2})}${wcell(wp('Ghi chú',{bold:true,align:'center',sz:16}),W[8],{shade:true,vmerge:'restart'})}</w:tr>`;
 h+=`<w:tr><w:trPr><w:tblHeader w:val="true"/><w:cantSplit/></w:trPr>${[0,1,2,3,4,5].map(i=>wcell(wp('',{sz:16}),W[i],{shade:true,vmerge:'continue'})).join('')}${wcell(wp('Người trực',{bold:true,align:'center',sz:16}),W[6],{shade:true})}${wcell(wp('Thời gian',{bold:true,align:'center',sz:16}),W[7],{shade:true})}${wcell(wp('',{sz:16}),W[8],{shade:true,vmerge:'continue'})}</w:tr>`;
 rows.forEach((r,idx)=>{
   const outs=(r.outside&&r.outside.length)?r.outside:[['','','']];
   const people=outs.map(x=>x[2]).join('\n');
   const times=outs.map(x=>(x[0]&&x[1])?x[0].replace(':','h')+' - '+x[1].replace(':','h'):'').join('\n');
   const vals=[String(idx+1),wordThu(r.day),fmt(r.date),r.leader,r.manager,r.classroom,people,times,''];
   h+=`<w:tr><w:trPr><w:cantSplit/></w:trPr>${vals.map((x,i)=>wcell(wp(x,{align:[0,1,2,5,7,8].includes(i)?'center':'left',italic:(i===5&&x==='Nghỉ'),sz:16}),W[i])).join('')}</w:tr>`;
 });
 return h+'</w:tbl>'
}
function signatureXml(now){
 const W=7257;
 const left=[wp('Người lập danh sách',{bold:true,align:'center',sz:18}),wp('\n\n\n',{align:'center',sz:18}),wp('Nông Trung Hiếu',{bold:true,align:'center',sz:18})].join('');
 const right=[wp(`Cao Bằng, ngày ${now.getDate()} tháng ${now.getMonth()+1} năm ${now.getFullYear()}`,{bold:true,align:'center',sz:18}),wp('Phê duyệt của Ban giám hiệu',{bold:true,align:'center',sz:18}),wp('Hiệu trưởng',{bold:true,align:'center',sz:18}),wp('\n\n',{align:'center',sz:18}),wp('Lê Thị Lan Phương',{bold:true,align:'center',sz:18})].join('');
 return `<w:tbl><w:tblPr><w:tblW w:w="14514" w:type="dxa"/><w:jc w:val="center"/><w:tblLayout w:type="fixed"/></w:tblPr><w:tblGrid><w:gridCol w:w="${W}"/><w:gridCol w:w="${W}"/></w:tblGrid><w:tr><w:trPr><w:cantSplit/></w:trPr>${wcell(left,W,{noBorder:true})}${wcell(right,W,{noBorder:true})}</w:tr></w:tbl>`
}
function buildWordBlob(rows){
 rows=[...rows].sort((a,b)=>a.date.localeCompare(b.date));
 const first=rows[0].date,last=rows[rows.length-1].date,[y,m]=first.split('-'),now=new Date();
 const body=[
   wp('TRƯỜNG PHỔ THÔNG DÂN TỘC NỘI TRÚ TỈNH',{bold:true,align:'center',sz:22,keepNext:true}),
   wp('TỔ QUẢN LÍ HỌC SINH NỘI TRÚ',{bold:true,align:'center',sz:22,keepNext:true}),
   wp('__________',{align:'center',sz:18,keepNext:true}),
   wp(`LỊCH TRỰC THÁNG ${Number(m)}/${y}`,{bold:true,align:'center',sz:26,keepNext:true}),
   wp(`(TỪ ${fmt(first)} ĐẾN ${fmt(last)})`,{bold:true,align:'center',sz:20,keepNext:true}),
   wordTableXml(rows),
   wp('Lưu ý trong các ca trực:',{bold:true,italic:true,sz:18,keepNext:true}),
   wp('1. Thực hiện nghiêm túc, đúng quy định về trách nhiệm và thời gian trong ca trực.',{sz:16,keepNext:true}),
   wp('2. Cán bộ quản lý, Giáo viên đổi trực đề nghị trao đổi thống nhất, báo cáo kịp thời và ghi rõ vào cột ghi chú.',{sz:16}),
   wp('',{sz:8}),
   signatureXml(now)
 ].join('');
 const doc=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${body}<w:sectPr><w:pgSz w:w="16838" w:h="11905" w:orient="landscape"/><w:pgMar w:top="504" w:right="461" w:bottom="504" w:left="461" w:header="720" w:footer="720" w:gutter="0"/><w:cols w:space="720"/><w:docGrid w:linePitch="360"/></w:sectPr></w:body></w:document>`;
 const styles=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman"/><w:sz w:val="18"/><w:szCs w:val="18"/><w:lang w:val="vi-VN"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="0" w:before="0"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/><w:rPr><w:rFonts w:ascii="Times New Roman" w:hAnsi="Times New Roman" w:eastAsia="Times New Roman"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr></w:style></w:styles>`;
 const settings=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:zoom w:percent="100"/><w:defaultTabStop w:val="720"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;
 const fontTable=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:fonts xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:font w:name="Times New Roman"><w:family w:val="roman"/><w:pitch w:val="variable"/></w:font></w:fonts>`;
 const core=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>Lịch trực tháng ${Number(m)}/${y}</dc:title><dc:creator>Ứng dụng Lịch trực nội trú</dc:creator></cp:coreProperties>`;
 const app=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Office Word</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop></Properties>`;
 const types=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/><Override PartName="/word/fontTable.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.fontTable+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;
 const rels=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`;
 const drels=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/fontTable" Target="fontTable.xml"/></Relationships>`;
 const blob=zipStore([
   {name:'[Content_Types].xml',data:types},{name:'_rels/.rels',data:rels},
   {name:'docProps/core.xml',data:core},{name:'docProps/app.xml',data:app},
   {name:'word/document.xml',data:doc},{name:'word/styles.xml',data:styles},
   {name:'word/settings.xml',data:settings},{name:'word/fontTable.xml',data:fontTable},
   {name:'word/_rels/document.xml.rels',data:drels}
 ]);
 return {blob,filename:`lich-truc-${y}-${m}-A4-ngang.docx`}
}
function downloadWord(){
 let rows=GENERATED.length?[...GENERATED]:allRows().filter(r=>r.date.startsWith($('#monthViewSelect').value||''));
 if(!rows.length)return alert('Chưa có lịch để xuất. Anh hãy tạo lịch tháng trước.');
 const out=buildWordBlob(rows),a=document.createElement('a');
 a.href=URL.createObjectURL(out.blob);a.download=out.filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1500)
}
function csvText(){let a=[['Ngày','Thứ','Trực lãnh đạo','Trực quản sinh','Quản lí giờ học','Trực ngoài giờ']];GENERATED.forEach(r=>a.push([r.date,r.day,r.leader,r.manager,r.classroom,r.outside.map(x=>`${x[0]}-${x[1]}: ${x[2]}`).join(' | ')]));return a.map(row=>row.map(v=>'"'+String(v).replaceAll('"','""')+'"').join(',')).join('\n')}
function downloadCSV(){if(!GENERATED.length)return alert('Anh tạo lịch tháng trước đã.');let blob=new Blob(['\ufeff'+csvText()],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`lich-truc-${GENERATED[0].date.slice(0,7)}.csv`;a.click();URL.revokeObjectURL(a.href)}
async function copyGenerated(){if(!GENERATED.length)return alert('Anh tạo lịch tháng trước đã.');await navigator.clipboard.writeText(csvText().replaceAll(',','\t').replaceAll('"',''));alert('Đã sao chép bảng lịch.');}
function findPerson(){let q=$('#findInput').value.trim().toLocaleLowerCase('vi');if(!q)return;let hits=people().filter(n=>n.toLocaleLowerCase('vi').includes(q));$('#findResult').innerHTML=hits.length?hits.map(n=>`<button class="secondary" style="margin:4px" onclick="selectPerson('${n.replaceAll("'","\\'")}')">${n}</button>`).join(''):'<div class="muted">Không tìm thấy.</div>'}
function selectPerson(n){PERSON_MODE='all';$('#leaderSelect').value='';$('#managerSelect').value='';$('#personSelect').value=n;$('#statPerson').value=n;renderQuick();renderMine();renderStats();show('mine')}
function show(v){document.querySelectorAll('main section').forEach(x=>x.classList.add('hidden'));$('#view-'+v).classList.remove('hidden');document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.view===v));if(v==='mine')renderMine();if(v==='month')renderMonth();if(v==='stats')renderStats()}
function csvParse(text){
 let rows=[],row=[],cell='',q=false;
 for(let i=0;i<text.length;i++){let c=text[i],n=text[i+1];if(q){if(c==='"'&&n==='"'){cell+='"';i++}else if(c==='"'){q=false}else cell+=c}else{if(c==='"')q=true;else if(c===','){row.push(cell);cell=''}else if(c==='\n'){row.push(cell.replace(/\r$/,''));rows.push(row);row=[];cell=''}else cell+=c}}
 if(cell.length||row.length){row.push(cell.replace(/\r$/,''));rows.push(row)} return rows;
}
function dateIso(v){v=String(v||'').trim();let m=v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);if(m)return `${m[3]}-${pad(m[2])}-${pad(m[1])}`;return /^\d{4}-\d{2}-\d{2}$/.test(v)?v:''}
function outsideCell(v){let parts=String(v||'').split(/\n|\s+\|\s+/).map(x=>x.trim()).filter(Boolean),out=[];parts.forEach(t=>{let m=t.match(/(\d{1,2})[:h](\d{2})\s*-\s*(\d{1,2})[:h](\d{2})\s*:\s*(.+)$/i);if(m)out.push([`${pad(m[1])}:${m[2]}`,`${pad(m[3])}:${m[4]}`,m[5].trim()])});return out}
async function fetchSheet(sheet){
 const allowed=['LichTruc','LichDuKien','DanhSachLuanPhien'];if(!allowed.includes(sheet))throw new Error('SHEET_NOT_ALLOWED');
 // Khi chạy trên Vercel: ưu tiên API riêng để Sheet có thể giữ chế độ riêng tư.
 if(location.protocol==='http:'||location.protocol==='https:'){
   try{let r=await fetch(`/api/sheet?sheet=${encodeURIComponent(sheet)}&_=${Date.now()}`,{cache:'no-store'});if(r.ok){let j=await r.json();if(Array.isArray(j.values))return j.values}}catch(_e){}
 }
 // Dự phòng: đọc trực tiếp Google Sheet nếu file được chia sẻ công khai dạng Người xem.
 let url=`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheet)}&_=${Date.now()}`;
 let res=await fetch(url,{cache:'no-store'}),txt=await res.text();
 if(!res.ok)throw new Error(`HTTP_${res.status}`);
 if(/<html|<!doctype|ServiceLogin|accounts\.google\.com/i.test(txt))throw new Error('SHEET_PRIVATE');
 let rows=csvParse(txt);if(!rows||rows.length<1)throw new Error('EMPTY_SHEET');return rows
}
function setSyncState(kind,text,detail=''){
 const box=$('#syncState'),label=$('#syncText');if(!box||!label)return;
 box.className=`sync-pill ${kind}`;label.textContent=text;box.title=detail||text;
 $('#refreshBtn').textContent=kind==='warn'?'↻ Thử lại':'🔄 Cập nhật';
}
function parseDutyRows(rows,draft=false){if(!rows||rows.length<2)return[];return rows.slice(1).map(a=>{let d=dateIso(a[0]);if(!d)return null;let outs=outsideCell(a[5]);return {date:d,day:(a[1]||vnDay(new Date(d+'T12:00:00'))).trim(),leader:(a[2]||'').trim(),manager:(a[3]||'').trim(),classroom:(a[4]||'').trim(),outside:outs,generated:draft,status:(a[7]||'').trim()}}).filter(Boolean)}
function uniqCol(rows,idx){let s=new Set();rows.slice(1).forEach(a=>{let v=(a[idx]||'').trim();if(v)s.add(v)});return [...s]}
async function tryRefresh(){
 setSyncState('loading','Đang kiểm tra Google Sheet…','Đang thử đọc LichTruc, LichDuKien và DanhSachLuanPhien');
 try{
   let [official,draftRows,roster]=await Promise.all([fetchSheet('LichTruc'),fetchSheet('LichDuKien'),fetchSheet('DanhSachLuanPhien')]);
   let o=parseDutyRows(official,false),g=parseDutyRows(draftRows,true); if(o.length)RAW=o;if(g.length){GENERATED=g;localStorage.setItem('generatedDutyMonth',JSON.stringify(GENERATED))}
   let L=uniqCol(roster,1),M=uniqCol(roster,2),C=uniqCol(roster,3),O=uniqCol(roster,4);if(L.length)ROT.leader=L;if(M.length)ROT.manager=M;if(C.length)ROT.classroom=C;if(O.length)ROT.outside=O;
   initPeople();refreshMonths();renderHome();renderMine();renderGenerated();renderMonth();renderStats();
   setSyncState('ok','Google Sheet · đã cập nhật',`${ROT.leader.length} Trực lãnh đạo • ${ROT.manager.length} Trực quản sinh • ${ROT.outside.length} Trực ngoài giờ`);
 }catch(e){
   console.warn('Không đọc được Google Sheet, dùng dữ liệu dự phòng:',e);
   const local=location.protocol==='file:';
   const detail=local?'Đang mở app trực tiếp từ file. Khi đưa lên Vercel, app sẽ ưu tiên API riêng.':'Google Sheet chưa cho phép app đọc trực tiếp hoặc kết nối mạng/API chưa sẵn sàng.';
   setSyncState('warn','Dữ liệu dự phòng',detail);
 }
}
function boot(){let saved=localStorage.getItem('generatedDutyMonth');if(saved){try{let x=JSON.parse(saved);if(Array.isArray(x)&&x.length&&x[0].date>='2026-09-01')GENERATED=x}catch{}}initPeople();refreshMonths();renderHome();renderMine();renderGenerated();renderMonth();renderStats();tryRefresh();}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>show(t.dataset.view));
function chooseRolePerson(mode,n){PERSON_MODE=mode;if(mode==='leader')$('#managerSelect').value='';if(mode==='manager')$('#leaderSelect').value='';$('#personSelect').value=n;$('#statPerson').value=n;MINE_FILTER='evening';document.querySelectorAll('#mineFilters .filterchip').forEach(x=>x.classList.toggle('active',x.dataset.filter==='evening'));renderQuick();renderMine();renderStats();if(n)show('mine')}
const settingsModal=$('#settingsModal');
function openSettings(){settingsModal.classList.add('open');settingsModal.setAttribute('aria-hidden','false')}
function closeSettings(){settingsModal.classList.remove('open');settingsModal.setAttribute('aria-hidden','true')}
$('#settingsBtn').onclick=openSettings;$('#closeSettings').onclick=closeSettings;settingsModal.addEventListener('click',e=>{if(e.target===settingsModal)closeSettings()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&settingsModal.classList.contains('open'))closeSettings()});
$('#leaderSelect').onchange=e=>chooseRolePerson('leader',e.target.value);$('#managerSelect').onchange=e=>chooseRolePerson('manager',e.target.value);$('#personSelect').onchange=()=>{PERSON_MODE='all';renderQuick();renderMine();$('#statPerson').value=$('#personSelect').value;renderStats()};$('#myBtn').onclick=()=>show('mine');$('#refreshBtn').onclick=tryRefresh;$('#monthViewSelect').onchange=renderMonth;$('#generateBtn').onclick=generateMonth;$('#wordBtn').onclick=downloadWord;$('#csvBtn').onclick=downloadCSV;$('#copyBtn').onclick=copyGenerated;$('#statPerson').onchange=renderStats;$('#statMonth').onchange=renderStats;$('#findBtn').onclick=findPerson;$('#findInput').onkeydown=e=>{if(e.key==='Enter')findPerson()};boot();

$('#mineFilters').addEventListener('click',e=>{let b=e.target.closest('[data-filter]');if(!b)return;PERSON_MODE='all';MINE_FILTER=b.dataset.filter;document.querySelectorAll('#mineFilters .filterchip').forEach(x=>x.classList.toggle('active',x===b));renderMine();});
