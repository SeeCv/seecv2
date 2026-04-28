/* SeeCv — Application Logic v2 */
'use strict';

// ══════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════
const CANDIDATES = [
  { id:1, initials:'JP', bg:'#1565c0', name:'James Patterson', title:'Gas Engineer / Plumber', location:'Manchester, UK', status:'active', notice:'1 week', salary:'£38,000+', type:'Permanent', sector:'Trades', skills:['Gas Safe Registered','Boiler Installation','Central Heating','Bathroom Fitting','Underfloor Heating','Powerflush','Leak Detection','Full UK Licence'], summary:'Qualified Gas Safe engineer with 12 years\' domestic and commercial plumbing experience across Greater Manchester. Specialists in boiler installations, central heating, and bathroom fitting.', profile:'Reliable, qualified Gas Safe engineer with 12 years\' residential and commercial experience across Greater Manchester. Fast worker, great communicator and always punctual. Holds current Gas Safe, CCN1 and CEN1 registrations. Looking for a permanent role or long-term contract with a reputable company.', experience:[{role:'Senior Plumber & Gas Engineer',company:'Hale Plumbing & Heating Ltd',dates:'Jan 2018 – Present',desc:'Lead engineer on new-build and renovation projects across Greater Manchester. Managed 2 apprentices and responsible for gas compliance sign-off on all installations.'},{role:'Plumber',company:'City Heating Solutions, Salford',dates:'Mar 2014 – Dec 2017',desc:'Domestic and commercial plumbing including bathroom renovations, boiler servicing, landlord gas safety certificates and emergency callouts.'}], quals:'City & Guilds Level 3 Plumbing (2013) · Gas Safe Registered (CCN1, CEN1, CKR1) · ACS Assessments current · CSCS Gold Card', hobbies:'Five-a-side football, DIY projects, cycling.', idealJob:'Permanent senior plumber or gas engineer role in Greater Manchester or North West. Open to long-term contract work with good rates.', completion:85 },
  { id:2, initials:'SK', bg:'#2e7d32', name:'Sarah Khan', title:'Plumber / Heating Engineer', location:'Salford, Greater Manchester', status:'open', notice:'2 weeks', salary:'£32,000+', type:'Contract', sector:'Trades', skills:['City & Guilds','Wet Rooms','Underfloor Heating','Bathroom Renovation','Own Van','WRAS Approved'], summary:'City & Guilds qualified plumber specialising in bathroom renovation, wet rooms and underfloor heating. 8 years in the residential sector. Own van.', profile:'City & Guilds qualified plumber with 8 years\' residential experience. Specialist in wet room installations and luxury bathroom renovations. Own van, full UK driving licence, and public liability insurance.', experience:[{role:'Self-Employed Plumber',company:'SK Plumbing Services',dates:'2016 – Present',desc:'Bathroom renovations, wet room installations, underfloor heating and general plumbing for residential clients across Salford and Manchester. Built strong client base through recommendation.'}], quals:'City & Guilds Level 3 Plumbing (2015) · WRAS Approved Installer · Level 3 Water Regulations', hobbies:'Running, cooking, travel.', idealJob:'Long-term contract or permanent part-time role with a quality building company.', completion:78 },
  { id:3, initials:'MO', bg:'#6a1b9a', name:'Marcus O\'Brien', title:'Apprentice Plumber', location:'Stockport, Greater Manchester', status:'active', notice:'Immediately', salary:'Apprentice rates', type:'Permanent', sector:'Trades', skills:['NVQ Level 2 (in progress)','CSCS Card','Eager to Learn','Full UK Licence'], summary:'2nd year apprentice plumber currently placed at Hale Plumbing Ltd. NVQ Level 2 in progress. Available immediately for new placement.', profile:'Hard-working and reliable 2nd year apprentice plumber looking for a new placement following completion of first year with excellent references. Quick learner, punctual and genuinely passionate about the trade.', experience:[{role:'Apprentice Plumber',company:'Hale Plumbing Ltd',dates:'Sep 2023 – Present',desc:'Assisted qualified engineers on domestic installations, repairs and maintenance. Completing NVQ Level 2. Excellent reference available.'}], quals:'NVQ Level 2 Plumbing (in progress) · CSCS Trainee Card · Health & Safety L1', hobbies:'Football, gaming, mountain biking.', idealJob:'Apprenticeship or trainee plumber placement with a supportive team willing to invest in training.', completion:60 },
  { id:4, initials:'ER', bg:'#bf360c', name:'Emma Richards', title:'Senior Graphic Designer', location:'London, UK', status:'active', notice:'1 month', salary:'£48,000+', type:'Permanent', sector:'Design', skills:['Adobe Creative Suite','Figma','Brand Identity','UI/UX Design','Motion Graphics','Typography','Print','Illustration'], summary:'Award-winning senior graphic designer with 9 years\' experience across brand identity, digital design and print. Portfolio includes global brands across retail, tech and hospitality.', profile:'Creative and commercially-minded senior graphic designer. Experienced in leading design projects from concept to delivery for global brands. Strong portfolio across brand identity, packaging, digital and print.', experience:[{role:'Senior Graphic Designer',company:'Studio Arc, London',dates:'2019 – Present',desc:'Led brand identity and campaign design for clients in retail, fintech and hospitality. Managed a team of 2 junior designers. Multiple D&AD shortlist nominations.'},{role:'Graphic Designer',company:'Bright Creative Agency',dates:'2015 – 2019',desc:'Full-service design across digital, print and brand for a range of sectors including fashion, food & beverage and financial services.'}], quals:'BA (Hons) Graphic Design — Central Saint Martins (2015) · D&AD New Blood Award 2015', hobbies:'Illustration, yoga, travel and food photography.', idealJob:'Senior designer or creative lead role in a forward-thinking agency or ambitious in-house team.', completion:92 },
  { id:5, initials:'TN', bg:'#0f6e56', name:'Tom Nguyen', title:'Full Stack Developer', location:'Birmingham, UK', status:'active', notice:'2 weeks', salary:'£68,000+', type:'Permanent', sector:'Tech', skills:['React','Node.js','TypeScript','PostgreSQL','AWS','Docker','REST APIs','GraphQL','CI/CD'], summary:'Full stack developer with 6 years building scalable SaaS products. Equally strong on front and back end. Open to fully remote or hybrid roles.', profile:'Passionate full stack developer who loves building products that genuinely help people. 6 years delivering clean, well-tested, production-grade code for startups and scale-ups. Led migration from monolith to microservices serving 40k+ daily active users.', experience:[{role:'Senior Full Stack Developer',company:'Launchpad Digital, Birmingham',dates:'2020 – Present',desc:'Led development of B2B SaaS platform from 0 to 40,000+ users. Architected microservices migration. Mentored 3 junior developers.'},{role:'Software Developer',company:'Techflow Ltd',dates:'2018 – 2020',desc:'Full stack development on fintech payments web application. React frontend, Node.js APIs, PostgreSQL.'}], quals:'BSc Computer Science — University of Birmingham (2018) · AWS Certified Developer Associate', hobbies:'Open source contributions, chess, hiking, cooking.', idealJob:'Senior or lead developer role at a product company. Remote-first culture preferred.', completion:95 },
  { id:6, initials:'AL', bg:'#185fa5', name:'Amy Lewis', title:'Childminder / Early Years Practitioner', location:'Leeds, UK', status:'active', notice:'Immediately', salary:'£24,000+', type:'Permanent', sector:'Childcare', skills:['Ofsted Outstanding (2023)','EYFS Qualified','Paediatric First Aid','DBS Enhanced','SEN Experience','Key Person Approach'], summary:'Ofsted Outstanding rated childminder with 10 years caring for children aged 0–8. EYFS qualified, first aid trained and experienced supporting children with additional needs.', profile:'Warm, dedicated and Ofsted Outstanding rated childminder with 10 years\' experience. I create stimulating, safe and nurturing environments for children to thrive. Experienced in supporting children with SEN and working closely with parents.', experience:[{role:'Registered Childminder',company:'Self-employed, Leeds',dates:'2014 – Present',desc:'Care and early education for up to 6 children simultaneously. Achieved Ofsted Outstanding rating 2023. Strong parent relationships and key person approach.'}], quals:'CACHE Level 3 in Childcare & Education · Paediatric First Aid (current) · DBS Enhanced (current) · Forest School Level 1', hobbies:'Baking, nature walks, crafts and gardening.', idealJob:'Nursery nurse, teaching assistant or room leader role with the right setting.', completion:88 },
  { id:7, initials:'RB', bg:'#795548', name:'Ryan Bennett', title:'Sous Chef / Chef de Partie', location:'Manchester, UK', status:'open', notice:'1 month', salary:'£36,000+', type:'Permanent', sector:'Hospitality', skills:['Fine Dining','Menu Development','HACCP','Pastry','Team Leadership','Level 3 Food Hygiene','Larder','Grill'], summary:'Sous chef with 7 years\' fine dining experience in Michelin-recommended restaurants. Strong pastry background. Looking for head chef opportunity.', profile:'Passionate and creative sous chef with 7 years in Michelin-recommended fine dining environments. Known for exceptional pastry skills, creative seasonal menus and staying calm under extreme pressure during service.', experience:[{role:'Sous Chef',company:'The Whitmore, Manchester',dates:'2020 – Present',desc:'Supported head chef in a 60-cover fine dining restaurant. Developed seasonal tasting menus, managed larder and pastry sections. Deputy during head chef absence.'},{role:'Chef de Partie',company:'Hotel du Lac, Cheshire',dates:'2017 – 2020',desc:'Section lead for pastry and larder. Contributed to menus and trained commis chefs.'}], quals:'NVQ Level 3 Professional Cookery · Level 3 Food Safety & Hygiene (2023) · Allergy Awareness Certificate', hobbies:'Food photography, travel, running, farmers markets.', idealJob:'Head Chef or Executive Sous Chef role in a quality restaurant. Manchester or Cheshire preferred.', completion:82 },
  { id:8, initials:'CD', bg:'#4527a0', name:'Claire Davies', title:'Marketing Manager', location:'Bristol, UK', status:'active', notice:'3 months', salary:'£58,000+', type:'Permanent', sector:'Marketing', skills:['Digital Marketing','SEO','PPC','Content Strategy','HubSpot','Google Analytics','Paid Social','Team Management','Brand'], summary:'Results-driven marketing manager with 8 years\' B2B and B2C experience. Grew organic traffic by 180% in 2 years. Managed £250k annual paid media budget.', profile:'Strategic and data-led marketing manager with proven track record across digital channels, content and paid media. Led marketing teams of up to 6. Passionate about connecting brands with the right audiences.', experience:[{role:'Marketing Manager',company:'GreenTech Solutions, Bristol',dates:'2019 – Present',desc:'Grew organic traffic by 180% over 2 years. Managed £250k annual paid media budget. Led team of 4. Launched 2 major product campaigns.'},{role:'Digital Marketing Executive',company:'Webb & Partners, Bath',dates:'2016 – 2019',desc:'SEO, PPC, email marketing and organic social campaigns for B2C clients.'}], quals:'CIM Diploma in Professional Marketing · Google Ads Certified (Search & Display) · BA Business Studies, University of Bath (2014)', hobbies:'Running, podcast hosting, cooking, reading.', idealJob:'Head of Marketing or Senior Marketing Manager at a scaling tech or consumer brand.', completion:90 },
];

const MESSAGES_DEMO = [
  { from:'ABC Recruitment Ltd', text:'Hi, we have a great opportunity for a Gas Safe engineer in Trafford. Permanent role, £40k. Would you be interested in finding out more?', time:'2 days ago', me:false },
  { text:'Thanks for reaching out! Yes, I\'d love to hear more details — particularly the salary range and start date.', time:'1 day ago', me:true },
  { from:'ABC Recruitment Ltd', text:'Great! The role is offering £40,000–£44,000 depending on experience, starting ASAP. Can I arrange a quick call?', time:'12 hours ago', me:false },
];

// ══════════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════════
const App = {
  user: null,
  basket: [],
  currentCandidate: null,
  searchResults: [],

  init() {
    this.renderNav();
    this.go('home');
    this.bindGlobal();
  },

  // ─── ROUTING ─────────────────────────────────
  go(page, data) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (!el) return;
    el.classList.add('active');
    window.scrollTo(0,0);
    const renders = {
      search: () => this.renderSearch(data),
      profile: () => this.renderProfile(data),
      recruiter: () => this.renderRecruiter(),
      candidate: () => this.renderCandidate(),
      basket: () => this.renderBasket(),
    };
    if (renders[page]) renders[page]();
    this.renderNav();
  },

  // ─── NAV ─────────────────────────────────────
  renderNav() {
    const r = document.getElementById('nav-right');
    if (!r) return;
    const bc = document.getElementById('nav-basket-count');
    const bw = document.getElementById('nav-basket-wrap');
    if (bc) bc.textContent = this.basket.length;
    if (bw) bw.style.display = this.basket.length ? 'flex' : 'none';

    if (this.user) {
      r.innerHTML = `
        <span class="nav-link">Hi, ${this.user.name.split(' ')[0]}</span>
        <a class="btn btn-yellow btn-sm" onclick="App.go('${this.user.type==='recruiter'?'recruiter':'candidate'}')">My Account</a>
        <a class="nav-link" onclick="App.logout()" style="opacity:.7;font-size:12px;">Sign out</a>`;
    } else {
      r.innerHTML = `
        <a class="nav-link" onclick="App.openModal('modal-signin')">Sign in</a>
        <a class="btn btn-yellow btn-sm" onclick="App.openModal('modal-signup')">Sign up free</a>`;
    }
  },

  // ─── SEARCH ──────────────────────────────────
  search(q, loc) {
    const query = (q||'').toLowerCase().trim();
    const location = (loc||'').toLowerCase().trim();
    let results = [...CANDIDATES];
    if (query) results = results.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.skills.some(s => s.toLowerCase().includes(query)) ||
      c.summary.toLowerCase().includes(query) ||
      c.sector.toLowerCase().includes(query) ||
      c.name.toLowerCase().includes(query) ||
      c.profile.toLowerCase().includes(query)
    );
    if (location) results = results.filter(c => c.location.toLowerCase().includes(location));
    this.searchResults = results;
    this.go('search', { q, loc, results });
  },

  renderSearch(data) {
    const d = data || { q:'', loc:'', results: this.searchResults };
    const qEl = document.getElementById('srch-q');
    const lEl = document.getElementById('srch-loc');
    if (qEl) qEl.value = d.q || '';
    if (lEl) lEl.value = d.loc || '';

    const countEl = document.getElementById('srch-count');
    if (countEl) countEl.innerHTML = `Found <strong>${d.results.length}</strong> result${d.results.length!==1?'s':''} <span class="text-muted" style="font-size:12px;">(0.06 seconds)</span>`;

    const list = document.getElementById('srch-list');
    if (!list) return;
    if (!d.results.length) {
      list.innerHTML = `<div style="padding:60px 0;text-align:center;color:var(--text-3);">
        <div style="font-size:48px;margin-bottom:12px;">🔍</div>
        <p style="font-size:18px;font-weight:700;margin-bottom:6px;">No CVs found</p>
        <p>Try different keywords or remove the location filter.</p></div>`;
      return;
    }
    list.innerHTML = d.results.map(c => `
      <div class="result-card">
        <div class="avatar av-md" style="background:${c.bg}" onclick="App.openProfile(${c.id})">${c.initials}</div>
        <div class="result-body">
          <div class="result-title" onclick="App.openProfile(${c.id})">${c.title} — ${c.name}</div>
          <div class="result-meta">
            <span>📍 ${c.location}</span>
            <span class="badge ${c.status==='active'?'badge-green':'badge-amber'}">${c.status==='active'?'Actively looking':'Open to offers'}</span>
            <span>⏱ Notice: ${c.notice}</span>
            <span>💰 ${c.salary}</span>
          </div>
          <div class="result-snippet">${c.summary}</div>
          <div class="result-skills">${c.skills.slice(0,5).map(s=>`<span class="badge badge-blue">${s}</span>`).join('')}${c.skills.length>5?`<span class="badge badge-gray">+${c.skills.length-5} more</span>`:''}</div>
          <div class="result-actions">
            <a onclick="App.addToBasket(${c.id})">🛒 Add to basket</a>
            <a onclick="App.buyNow(${c.id})" style="color:var(--green);">⚡ Buy contact — £1</a>
            <a onclick="App.saveCV(${c.id})">🔖 Save</a>
            <a onclick="App.openProfile(${c.id})">View full CV →</a>
          </div>
        </div>
      </div>`).join('');
  },

  // ─── PROFILE ─────────────────────────────────
  openProfile(id) {
    const c = CANDIDATES.find(x => x.id===id);
    if (c) { this.currentCandidate = c; this.go('profile', c); }
  },

  renderProfile(c) {
    if (!c) return;
    const s = (id, val) => { const el=document.getElementById(id); if(el) el[typeof val==='string'?'textContent':'innerHTML']=val; };
    const sc = (id, cls) => { const el=document.getElementById(id); if(el) el.className=cls; };

    s('prof-initials', c.initials);
    document.getElementById('prof-avatar-bg')?.style && (document.getElementById('prof-avatar-bg').style.background = c.bg);
    s('prof-name', c.name);
    s('prof-title', c.title);
    s('prof-location', '📍 ' + c.location);
    s('prof-salary', '💰 ' + c.salary);
    s('prof-type', c.type);
    s('prof-notice', '⏱ Notice: ' + c.notice);
    const statusEl = document.getElementById('prof-status');
    if (statusEl) { statusEl.textContent = c.status==='active'?'Actively looking':'Open to offers'; statusEl.className='badge '+(c.status==='active'?'badge-green':'badge-amber'); }
    const prog = document.getElementById('prof-progress');
    if (prog) prog.style.width = c.completion + '%';
    s('prof-pct', c.completion + '% complete');

    s('prof-profile', c.profile);
    s('prof-skills', c.skills.map(sk=>`<span class="badge badge-blue" style="margin:3px;">${sk}</span>`).join(''));
    s('prof-experience', c.experience.map(e=>`<div class="exp-item"><div class="exp-role">${e.role}</div><div class="exp-company">${e.company}</div><div class="exp-dates">${e.dates}</div><p class="text-sm" style="color:var(--text-2);margin-top:4px;">${e.desc}</p></div>`).join(''));
    s('prof-quals', c.quals);
    s('prof-hobbies', c.hobbies);
    s('prof-ideal', c.idealJob);

    const bought = this.user?.bought?.includes(c.id);
    const buySection = document.getElementById('prof-buy-wrap');
    const unlockSection = document.getElementById('prof-unlocked-wrap');
    if (buySection) buySection.style.display = bought ? 'none' : 'block';
    if (unlockSection) unlockSection.style.display = bought ? 'block' : 'none';
    if (bought) {
      const em = document.getElementById('prof-email-val');
      const ph = document.getElementById('prof-phone-val');
      if (em) em.textContent = c.name.toLowerCase().replace(/\s/g,'.').replace("'","") + '@email.com';
      if (ph) ph.textContent = '07' + Math.floor(700000000 + Math.random()*99999999);
    }
  },

  // ─── BASKET ──────────────────────────────────
  addToBasket(id) {
    const c = CANDIDATES.find(x=>x.id===id);
    if (!c) return;
    if (this.basket.find(x=>x.id===id)) { this.toast(c.name + ' is already in your basket'); return; }
    this.basket.push(c);
    this.toast('✓ ' + c.name + ' added to basket');
    this.renderNav();
  },

  removeFromBasket(id) {
    this.basket = this.basket.filter(x=>x.id!==id);
    this.renderBasket();
    this.renderNav();
  },

  buyNow(id) {
    this.addToBasket(id);
    this.go('basket');
  },

  renderBasket() {
    const list = document.getElementById('basket-list');
    if (!list) return;
    if (!this.basket.length) {
      list.innerHTML = `<div style="text-align:center;padding:36px 0;color:var(--text-3);">
        <p style="font-size:32px;margin-bottom:8px;">🛒</p>
        <p style="font-weight:700;margin-bottom:6px;">Your basket is empty</p>
        <a onclick="App.go('search')" class="btn btn-blue btn-sm" style="margin-top:10px;">Search CVs</a></div>`;
    } else {
      list.innerHTML = this.basket.map(c=>`
        <div class="flex-between" style="padding:14px 0;border-bottom:1px solid var(--border);">
          <div class="flex-center gap-2">
            <div class="avatar av-sm" style="background:${c.bg}">${c.initials}</div>
            <div>
              <p class="bold" style="font-size:14px;">${c.name}</p>
              <p class="text-xs text-muted">${c.title} · ${c.location}</p>
            </div>
          </div>
          <div class="flex-center gap-2">
            <span style="font-size:14px;font-weight:800;color:var(--green);">1 credit</span>
            <a onclick="App.removeFromBasket(${c.id})" style="font-size:12px;color:var(--red);font-weight:700;">Remove</a>
          </div>
        </div>`).join('');
    }
    const tot = document.getElementById('basket-total-cvs');
    if (tot) tot.textContent = this.basket.length + ' CV' + (this.basket.length!==1?'s':'');
  },

  completePurchase() {
    if (!this.user) { this.openModal('modal-signin'); return; }
    if (!this.basket.length) { this.toast('Your basket is empty'); return; }
    if (!this.user.bought) this.user.bought = [];
    this.basket.forEach(c => { if (!this.user.bought.includes(c.id)) this.user.bought.push(c.id); });
    const count = this.basket.length;
    this.basket = [];
    this.toast(`✓ ${count} CV contact detail${count>1?'s':''} unlocked!`);
    this.renderNav();
    this.go('recruiter');
  },

  saveCV(id) {
    if (!this.user) { this.openModal('modal-signin'); return; }
    if (!this.user.saved) this.user.saved = [];
    if (this.user.saved.includes(id)) { this.toast('Already saved'); return; }
    this.user.saved.push(id);
    this.toast('✓ CV saved to your account');
  },

  // ─── RECRUITER DASHBOARD ─────────────────────
  renderRecruiter() {
    if (!this.user) { this.openModal('modal-signin'); return; }
    const bought = (this.user.bought||[]).map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);
    const saved = (this.user.saved||[]).map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);

    const s = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
    s('rec-name', this.user.name);
    s('rec-email', this.user.email);
    s('rec-credits', this.user.credits||0);
    const av = document.getElementById('rec-av');
    if (av) { av.textContent = this.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); av.style.background = '#1565c0'; }
    s('rstat-credits', this.user.credits||0);
    s('rstat-bought', bought.length);
    s('rstat-saved', saved.length);
    s('rstat-searches', (this.user.searches||[]).length);

    const bList = document.getElementById('rec-bought-list');
    if (bList) bList.innerHTML = !bought.length ? '<p class="text-muted text-sm">No CVs purchased yet. <a onclick="App.go(\'search\')">Search now →</a></p>' :
      bought.map(c=>`<div class="flex-between" style="padding:12px 0;border-bottom:1px solid var(--border);">
        <div class="flex-center gap-2"><div class="avatar av-sm" style="background:${c.bg}">${c.initials}</div>
        <div><p class="bold text-sm" style="cursor:pointer;" onclick="App.openProfile(${c.id})">${c.name}</p>
        <p class="text-xs" style="color:var(--green);">📞 07712 345 678 &nbsp;|&nbsp; ✉ ${c.name.toLowerCase().replace(/\s/g,'.').replace("'","")}@email.com</p></div></div>
        <button class="btn btn-outline btn-sm" onclick="App.switchRecTab('messages')">Message</button></div>`).join('');

    const sList = document.getElementById('rec-saved-list');
    if (sList) sList.innerHTML = !saved.length ? '<p class="text-muted text-sm">No saved CVs. <a onclick="App.go(\'search\')">Search for CVs →</a></p>' :
      saved.map(c=>`<div class="flex-between" style="padding:12px 0;border-bottom:1px solid var(--border);">
        <div class="flex-center gap-2"><div class="avatar av-sm" style="background:${c.bg}">${c.initials}</div>
        <div><p class="bold text-sm" style="cursor:pointer;" onclick="App.openProfile(${c.id})">${c.name}</p>
        <p class="text-xs text-muted">${c.title} · ${c.location}</p></div></div>
        <button class="btn btn-yellow btn-sm" onclick="App.buyNow(${c.id})">Buy — £1</button></div>`).join('');

    const srchList = document.getElementById('rec-searches-list');
    if (srchList) srchList.innerHTML = (this.user.searches||[]).length ?
      (this.user.searches||[]).map(s=>`<div class="card card-sm flex-between mb-1">
        <div><p class="bold text-sm">${s.query} ${s.loc?'· '+s.loc:''}</p><p class="text-xs text-muted">${s.count} results · ${s.date}</p></div>
        <div class="flex gap-1"><button class="btn btn-outline btn-sm" onclick="App.search('${s.query}','${s.loc||''}')">Run</button><button class="btn btn-ghost btn-sm" style="background:transparent;color:var(--blue);border-color:var(--border);">Set alert</button></div></div>`).join('')
      : '<p class="text-muted text-sm">No saved searches yet.</p>';

    // Fill account form
    const fn = document.getElementById('acc-firstname');
    const ln = document.getElementById('acc-lastname');
    const em = document.getElementById('acc-email-field');
    if (fn) fn.value = this.user.name.split(' ')[0]||'';
    if (ln) ln.value = this.user.name.split(' ').slice(1).join(' ')||'';
    if (em) em.value = this.user.email||'';
  },

  switchRecTab(tab) {
    document.querySelectorAll('.rec-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.rec-panel').forEach(p => p.style.display='none');
    const btn = document.querySelector(`.rec-tab-btn[data-tab="${tab}"]`);
    const panel = document.getElementById('rec-panel-'+tab);
    if (btn) btn.classList.add('active');
    if (panel) panel.style.display = 'block';
  },

  // ─── CANDIDATE DASHBOARD ─────────────────────
  renderCandidate() {
    if (!this.user) { this.openModal('modal-signup'); return; }
    const n = document.getElementById('cand-name');
    if (n) n.textContent = this.user.name;
    const av = document.getElementById('cand-av');
    if (av) { av.textContent = this.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); }
  },

  switchCandTab(tab) {
    document.querySelectorAll('.cand-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.cand-panel').forEach(p => p.style.display='none');
    const btn = document.querySelector(`.cand-tab-btn[data-tab="${tab}"]`);
    const panel = document.getElementById('cand-panel-'+tab);
    if (btn) btn.classList.add('active');
    if (panel) panel.style.display = 'block';
  },

  // ─── AUTH ─────────────────────────────────────
  signin() {
    const email = document.getElementById('si-email')?.value.trim();
    const pass = document.getElementById('si-pass')?.value;
    const type = document.querySelector('.signin-type.active')?.dataset.type || 'recruiter';
    if (!email || !pass) { this.toast('Please enter your email and password'); return; }
    this.user = {
      type, email,
      name: email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()),
      credits: 50,
      bought: [],
      saved: [],
      searches: [
        {query:'plumber', loc:'Manchester', count:47, date:'Today'},
        {query:'graphic designer', loc:'', count:128, date:'Yesterday'}
      ],
      messages: MESSAGES_DEMO,
    };
    this.closeModal('modal-signin');
    this.toast('Welcome back, ' + this.user.name.split(' ')[0] + '!');
    this.go(type==='candidate' ? 'candidate' : 'recruiter');
  },

  signup() {
    const name = document.getElementById('su-name')?.value.trim();
    const email = document.getElementById('su-email')?.value.trim();
    const pass = document.getElementById('su-pass')?.value;
    const type = document.querySelector('.signup-type.active')?.dataset.type || 'candidate';
    if (!name || !email || !pass) { this.toast('Please fill in all fields'); return; }
    if (pass.length < 6) { this.toast('Password must be at least 6 characters'); return; }
    this.user = { type, name, email, credits: 0, bought: [], saved: [], searches: [], messages: [] };
    this.closeModal('modal-signup');
    this.toast('Welcome to SeeCv, ' + name.split(' ')[0] + '! 🎉');
    this.go(type==='recruiter' ? 'recruiter' : 'candidate');
  },

  logout() {
    this.user = null; this.basket = [];
    this.renderNav();
    this.go('home');
    this.toast('Signed out successfully');
  },

  // ─── PROFILE TABS ────────────────────────────
  switchProfileTab(tab) {
    document.querySelectorAll('#page-profile .tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('#page-profile .tab-panel').forEach(p => p.classList.remove('active'));
    const btn = document.querySelector(`#page-profile .tab-btn[data-tab="${tab}"]`);
    const panel = document.getElementById('ptab-'+tab);
    if (btn) btn.classList.add('active');
    if (panel) panel.classList.add('active');
  },

  // ─── MESSAGING ──────────────────────────────
  sendMessage(inputId, threadId) {
    const inp = document.getElementById(inputId);
    if (!inp || !inp.value.trim()) return;
    if (!this.user) { this.openModal('modal-signin'); return; }
    const thread = document.getElementById(threadId);
    if (!thread) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="msg-bubble me">${inp.value.trim()}</div><div class="msg-time right">You · just now</div>`;
    thread.appendChild(wrap);
    thread.scrollTop = thread.scrollHeight;
    inp.value = '';
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.innerHTML = `<div class="msg-bubble them">Thanks for your message. I'll get back to you shortly!</div><div class="msg-time">Just now</div>`;
      thread.appendChild(reply);
      thread.scrollTop = thread.scrollHeight;
    }, 1500);
  },

  // ─── MODALS ──────────────────────────────────
  openModal(id) { document.getElementById(id)?.classList.add('open'); },
  closeModal(id) { document.getElementById(id)?.classList.remove('open'); },

  // ─── TOAST ───────────────────────────────────
  toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
  },

  // ─── FAQ TOGGLE ──────────────────────────────
  toggleFaq(el) {
    const a = el.nextElementSibling;
    if (!a) return;
    a.classList.toggle('open');
    el.querySelector('.faq-arrow').textContent = a.classList.contains('open') ? '▲' : '▼';
  },

  // ─── GLOBAL EVENTS ───────────────────────────
  bindGlobal() {
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.addEventListener('click', e => { if (e.target===m) m.classList.remove('open'); });
    });
    // Keyboard Enter on search
    ['home-q','home-loc','srch-q','srch-loc'].forEach(id => {
      document.getElementById(id)?.addEventListener('keydown', e => {
        if (e.key==='Enter') {
          const q = document.getElementById('home-q')?.value || document.getElementById('srch-q')?.value || '';
          const l = document.getElementById('home-loc')?.value || document.getElementById('srch-loc')?.value || '';
          App.search(q, l);
        }
      });
    });
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
