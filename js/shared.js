/* SeeCv — shared data & utilities */
'use strict';

const CANDIDATES = [
  { id:1, initials:'JP', bg:'#1a6fb5', name:'James Patterson', title:'Gas Engineer / Plumber', location:'Manchester, UK', status:'active', notice:'1 week', salary:'£38,000+', type:'Permanent', sector:'trades', skills:['Gas Safe Registered','Boiler Installation','Central Heating','Bathroom Fitting','Powerflush','Full UK Licence'], summary:'Qualified Gas Safe engineer with 12 years domestic and commercial plumbing experience across Greater Manchester. Specialists in boiler installations and central heating.', profile:'Reliable, qualified Gas Safe engineer with 12 years residential and commercial experience across Greater Manchester. Fast worker, great communicator, always punctual.', experience:[{role:'Senior Plumber & Gas Engineer',company:'Hale Plumbing & Heating Ltd',dates:'Jan 2018 – Present',desc:'Lead engineer on new-build and renovation projects. Managed 2 apprentices.'},{role:'Plumber',company:'City Heating Solutions, Salford',dates:'Mar 2014 – Dec 2017',desc:'Domestic and commercial plumbing, bathroom renovations, boiler servicing.'}], quals:'City & Guilds Level 3 Plumbing (2013) · Gas Safe Registered (CCN1, CEN1) · CSCS Gold Card', hobbies:'Five-a-side football, DIY, cycling.', idealJob:'Permanent senior plumber or gas engineer role in Greater Manchester.', completion:85 },
  { id:2, initials:'SK', bg:'#2a7a2a', name:'Sarah Khan', title:'Plumber / Heating Engineer', location:'Salford, Greater Manchester', status:'open', notice:'2 weeks', salary:'£32,000+', type:'Contract', sector:'trades', skills:['City & Guilds','Wet Rooms','Underfloor Heating','Bathroom Renovation','Own Van'], summary:'City & Guilds qualified plumber specialising in bathroom renovation, wet rooms and underfloor heating. 8 years residential experience.', profile:'City & Guilds qualified plumber with 8 years residential experience. Specialist in wet room installations. Own van and public liability insurance.', experience:[{role:'Self-Employed Plumber',company:'SK Plumbing Services',dates:'2016 – Present',desc:'Bathroom renovations, wet room installs, underfloor heating across Salford and Manchester.'}], quals:'City & Guilds Level 3 Plumbing (2015) · WRAS Approved Installer', hobbies:'Running, cooking, travel.', idealJob:'Long-term contract or part-time permanent role.', completion:78 },
  { id:3, initials:'MO', bg:'#6a1b9a', name:'Marcus O\'Brien', title:'Apprentice Plumber', location:'Stockport, Greater Manchester', status:'active', notice:'Immediately', salary:'Apprentice rates', type:'Permanent', sector:'trades', skills:['NVQ Level 2 (in progress)','CSCS Card','Full UK Licence'], summary:'2nd year apprentice plumber at Hale Plumbing Ltd. NVQ Level 2 in progress. Available immediately for a new placement.', profile:'Hard-working 2nd year apprentice plumber. Quick learner, punctual and passionate about the trade.', experience:[{role:'Apprentice Plumber',company:'Hale Plumbing Ltd',dates:'Sep 2023 – Present',desc:'Assisted qualified engineers on domestic installations. NVQ Level 2 in progress.'}], quals:'NVQ Level 2 Plumbing (in progress) · CSCS Trainee Card', hobbies:'Football, gaming.', idealJob:'Apprenticeship placement or junior plumber role with training.', completion:60 },
  { id:4, initials:'ER', bg:'#bf360c', name:'Emma Richards', title:'Senior Graphic Designer', location:'London, UK', status:'active', notice:'1 month', salary:'£48,000+', type:'Permanent', sector:'design', skills:['Adobe Creative Suite','Figma','Brand Identity','UI/UX','Motion Graphics','Typography'], summary:'Senior graphic designer with 9 years experience in brand identity, digital design and print. Portfolio includes global brands in retail, tech and hospitality.', profile:'Creative senior graphic designer. Experienced leading design projects from concept to delivery for global brands.', experience:[{role:'Senior Graphic Designer',company:'Studio Arc, London',dates:'2019 – Present',desc:'Led brand identity projects. Managed 2 junior designers.'},{role:'Graphic Designer',company:'Bright Creative Agency',dates:'2015 – 2019',desc:'Digital and print design across retail, food and financial sectors.'}], quals:'BA (Hons) Graphic Design — Central Saint Martins (2015)', hobbies:'Illustration, yoga, travel photography.', idealJob:'Senior designer or creative lead at a forward-thinking agency.', completion:92 },
  { id:5, initials:'TN', bg:'#0f6e56', name:'Tom Nguyen', title:'Full Stack Developer', location:'Birmingham, UK', status:'active', notice:'2 weeks', salary:'£68,000+', type:'Permanent', sector:'IT', skills:['React','Node.js','TypeScript','PostgreSQL','AWS','Docker'], summary:'Full stack developer with 6 years building scalable SaaS products. Open to remote or hybrid roles.', profile:'Passionate full stack developer with 6 years delivering clean code for startups and scale-ups.', experience:[{role:'Senior Developer',company:'Launchpad Digital',dates:'2020 – Present',desc:'Led development of B2B SaaS platform from 0 to 40,000+ users.'},{role:'Developer',company:'Techflow Ltd',dates:'2018 – 2020',desc:'Full stack on fintech payments platform.'}], quals:'BSc Computer Science — University of Birmingham (2018) · AWS Certified', hobbies:'Open source, chess, hiking.', idealJob:'Senior or lead developer at a product company.', completion:95 },
  { id:6, initials:'AL', bg:'#185fa5', name:'Amy Lewis', title:'Childminder / Early Years', location:'Leeds, UK', status:'active', notice:'Immediately', salary:'£24,000+', type:'Permanent', sector:'childcare', skills:['Ofsted Outstanding (2023)','EYFS Qualified','Paediatric First Aid','DBS Enhanced','SEN Experience'], summary:'Ofsted Outstanding rated childminder with 10 years caring for children aged 0–8.', profile:'Warm, dedicated Ofsted Outstanding rated childminder. Creates stimulating, safe environments.', experience:[{role:'Registered Childminder',company:'Self-employed, Leeds',dates:'2014 – Present',desc:'Care and early education for up to 6 children. Ofsted Outstanding 2023.'}], quals:'CACHE Level 3 Childcare · Paediatric First Aid (current) · DBS Enhanced', hobbies:'Baking, nature walks, crafts.', idealJob:'Nursery nurse or teaching assistant role.', completion:88 },
  { id:7, initials:'RB', bg:'#795548', name:'Ryan Bennett', title:'Sous Chef / Chef de Partie', location:'Manchester, UK', status:'open', notice:'1 month', salary:'£36,000+', type:'Permanent', sector:'hospitality', skills:['Fine Dining','Menu Development','HACCP','Pastry','Team Leadership'], summary:'Sous chef with 7 years fine dining experience. Strong pastry background. Looking for head chef opportunity.', profile:'Passionate sous chef with 7 years in Michelin-recommended restaurants.', experience:[{role:'Sous Chef',company:'The Whitmore, Manchester',dates:'2020 – Present',desc:'Supported head chef. Developed seasonal menus.'},{role:'Chef de Partie',company:'Hotel du Lac, Cheshire',dates:'2017 – 2020',desc:'Pastry and larder section lead.'}], quals:'NVQ Level 3 Professional Cookery · Level 3 Food Hygiene (2023)', hobbies:'Food photography, travel, running.', idealJob:'Head Chef or Sous Chef. Manchester or Cheshire.', completion:82 },
  { id:8, initials:'CD', bg:'#4527a0', name:'Claire Davies', title:'Marketing Manager', location:'Bristol, UK', status:'active', notice:'3 months', salary:'£58,000+', type:'Permanent', sector:'marketing', skills:['Digital Marketing','SEO','PPC','Content Strategy','HubSpot','Google Analytics'], summary:'Marketing manager with 8 years B2B and B2C experience. Grew organic traffic 180% in 2 years.', profile:'Strategic marketing manager with proven track record across digital channels and paid media.', experience:[{role:'Marketing Manager',company:'GreenTech Solutions',dates:'2019 – Present',desc:'Grew organic traffic 180% in 2 years. Managed £250k paid media budget.'},{role:'Digital Marketing Executive',company:'Webb & Partners',dates:'2016 – 2019',desc:'SEO, PPC, email and social campaigns.'}], quals:'CIM Diploma in Marketing · Google Ads Certified · BA Business Studies, Bath (2014)', hobbies:'Running, podcasting, cooking.', idealJob:'Head of Marketing or Senior Marketing Manager.', completion:90 },
];

const JOBS = [
  { id:1, title:'Gas Safe Engineer', company:'Hale Heating Group', location:'Manchester, UK', salary:'£38,000 – £44,000', type:'Permanent', posted:'Today', tags:['Gas Safe','Plumbing','Manchester'], desc:'We are looking for a qualified Gas Safe engineer to join our team. CCN1 and CEN1 essential. Company van provided.' },
  { id:2, title:'Graphic Designer', company:'Studio Arc', location:'London (Hybrid)', salary:'£40,000 – £48,000', type:'Permanent', posted:'2 days ago', tags:['Figma','Adobe CC','Brand'], desc:'Studio Arc is hiring a mid-weight graphic designer. Strong brand identity portfolio required. 2 days in studio per week.' },
  { id:3, title:'Full Stack Developer', company:'Launchpad Digital', location:'Birmingham / Remote', salary:'£60,000 – £70,000', type:'Permanent', posted:'3 days ago', tags:['React','Node.js','AWS'], desc:'Join our product team. You will own features end to end from design through to deployment.' },
  { id:4, title:'Sous Chef', company:'The Whitmore Restaurant', location:'Manchester, UK', salary:'£34,000 – £38,000', type:'Permanent', posted:'1 week ago', tags:['Fine Dining','Pastry','HACCP'], desc:'Michelin-recommended restaurant looking for an experienced sous chef. Strong pastry background preferred.' },
  { id:5, title:'Marketing Manager', company:'ScaleUp Tech Ltd', location:'Bristol (Hybrid)', salary:'£50,000 – £58,000', type:'Permanent', posted:'1 week ago', tags:['SEO','PPC','HubSpot'], desc:'Lead our marketing function. B2B SaaS experience ideal. Full ownership of digital and paid channels.' },
  { id:6, title:'Childminder / Nursery Nurse', company:'Little Stars Nursery', location:'Leeds, UK', salary:'£22,000 – £26,000', type:'Permanent', posted:'2 weeks ago', tags:['EYFS','DBS','SEN'], desc:'Warm, Outstanding-rated nursery seeking a passionate early years practitioner. CACHE Level 3 required.' },
];

// ── SHARED UTILITIES ──────────────────────────────
function getUser() {
  try { return JSON.parse(localStorage.getItem('seecv_user')||'null'); } catch(e) { return null; }
}
function setUser(u) { localStorage.setItem('seecv_user', JSON.stringify(u)); }
function clearUser() { localStorage.removeItem('seecv_user'); }

function getBasket() {
  try { return JSON.parse(sessionStorage.getItem('seecv_basket')||'[]'); } catch(e) { return []; }
}
function setBasket(b) { sessionStorage.setItem('seecv_basket', JSON.stringify(b)); }

function getBought() {
  try { return JSON.parse(localStorage.getItem('seecv_bought')||'[]'); } catch(e) { return []; }
}
function setBought(b) { localStorage.setItem('seecv_bought', JSON.stringify(b)); }

function getSaved() {
  try { return JSON.parse(localStorage.getItem('seecv_saved')||'[]'); } catch(e) { return []; }
}
function setSaved(s) { localStorage.setItem('seecv_saved', JSON.stringify(s)); }

function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window._tt);
  window._tt = setTimeout(() => t.classList.remove('show'), 3000);
}

function openModal(id) { document.getElementById(id)?.classList.add('open'); }
function closeModal(id) { document.getElementById(id)?.classList.remove('open'); }
function setType(el, cls) {
  document.querySelectorAll('.'+cls).forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function renderNavUser() {
  const u = getUser();
  const basket = getBasket();
  const nr = document.getElementById('nav-right');
  const bw = document.getElementById('nav-basket-wrap');
  if (bw) { bw.style.display = basket.length ? 'flex' : 'none'; const bc = document.getElementById('nav-basket-count'); if(bc) bc.textContent = basket.length; }
  if (!nr) return;
  if (u) {
    nr.innerHTML = `<span class="text-sm" style="color:#444;">Hi, ${u.name.split(' ')[0]}</span>
    <button class="signin-btn" onclick="window.location.href='${u.type==='candidate'?'candidate.html':'recruiter.html'}'">${u.name.split(' ')[0]} ▾</button>`;
  } else {
    nr.innerHTML = `<a href="#" onclick="openModal('modal-signin')" style="font-size:13px;color:#444;">Sign in</a>
    <button class="signin-btn" onclick="openModal('modal-signup')">Sign up</button>`;
  }
}

function signIn() {
  const email = document.getElementById('si-email')?.value.trim();
  const pass = document.getElementById('si-pass')?.value;
  const type = document.querySelector('.si-type.active')?.dataset.type || 'recruiter';
  if (!email || !pass) { toast('Please enter your email and password'); return; }
  setUser({ email, type, name: email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()), credits:50 });
  closeModal('modal-signin');
  toast('Welcome back!');
  setTimeout(() => { window.location.href = type==='candidate'?'candidate.html':'recruiter.html'; }, 600);
}

function signUp() {
  const name = document.getElementById('su-name')?.value.trim();
  const email = document.getElementById('su-email')?.value.trim();
  const pass = document.getElementById('su-pass')?.value;
  const type = document.querySelector('.su-type.active')?.dataset.type || 'candidate';
  if (!name||!email||!pass) { toast('Please fill in all fields'); return; }
  setUser({ email, type, name, credits:0 });
  closeModal('modal-signup');
  toast('Welcome to SeeCv, '+name.split(' ')[0]+'!');
  setTimeout(() => { window.location.href = type==='recruiter'?'recruiter.html':'candidate.html'; }, 600);
}

function logout() {
  clearUser();
  setBasket([]);
  toast('Signed out');
  setTimeout(() => window.location.href='index.html', 600);
}

function addToBasket(id, avatarEl) {
  const c = CANDIDATES.find(x=>x.id===id);
  if (!c) return;
  const basket = getBasket();
  if (basket.find(x=>x.id===id)) { toast(c.name+' is already in your basket'); return; }
  basket.push(c);
  setBasket(basket);
  toast(c.name+' added to basket');
  renderNavUser();
  if (avatarEl) flyToBasket(avatarEl, c);
}

function flyToBasket(avatarEl, c) {
  const basketEl = document.getElementById('nav-basket-wrap');
  if (!avatarEl || !basketEl) return;
  const from = avatarEl.getBoundingClientRect();
  const to = basketEl.getBoundingClientRect();
  const fly = document.createElement('div');
  fly.className = 'fly-avatar';
  fly.style.cssText = `width:42px;height:42px;background:${c.bg};font-size:12px;font-weight:700;left:${from.left+window.scrollX}px;top:${from.top+window.scrollY}px;`;
  fly.textContent = c.initials;
  document.body.appendChild(fly);
  requestAnimationFrame(() => {
    fly.style.transition = 'all 0.65s cubic-bezier(0.4,0,0.2,1)';
    fly.style.left = (to.left+to.width/2-10+window.scrollX)+'px';
    fly.style.top = (to.top+window.scrollY)+'px';
    fly.style.width='18px'; fly.style.height='18px'; fly.style.opacity='0'; fly.style.fontSize='8px';
  });
  setTimeout(()=>fly.remove(), 750);
}

function saveCV(id) {
  const u = getUser();
  if (!u) { openModal('modal-signin'); return; }
  const saved = getSaved();
  if (saved.includes(id)) { toast('Already saved'); return; }
  saved.push(id);
  setSaved(saved);
  toast('CV saved to your account');
}

function selectCredit(el) {
  document.querySelectorAll('.credit-row').forEach(r=>r.classList.remove('sel'));
  el.classList.add('sel');
  const r = el.querySelector('input[type=radio]');
  if (r) { document.querySelectorAll('.credit-row input').forEach(x=>x.checked=false); r.checked=true; }
}

function toggleFaq(el) {
  const a = el.nextElementSibling;
  if (!a) return;
  a.classList.toggle('open');
  el.querySelector('.fa').textContent = a.classList.contains('open') ? '▲' : '▼';
}

// Close modals on overlay click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target===m) m.classList.remove('open'); });
  });
  renderNavUser();
});
