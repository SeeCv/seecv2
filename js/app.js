/* SeeCv — app.js */
'use strict';

// ══ DATA ══════════════════════════════════════════
const CANDIDATES = [
  { id:1, initials:'JP', bg:'#1a6fb5', name:'James Patterson', title:'Gas Engineer / Plumber', location:'Manchester, UK', status:'active', notice:'1 week', salary:'£38,000+', type:'Permanent', sector:'Trades',
    skills:['Gas Safe Registered','Boiler Installation','Central Heating','Bathroom Fitting','Underfloor Heating','Powerflush','Full UK Licence'],
    summary:'Qualified Gas Safe engineer with 12 years domestic and commercial plumbing experience across Greater Manchester. Specialists in boiler installations and central heating.',
    profile:'Reliable, qualified Gas Safe engineer with 12 years residential and commercial experience across Greater Manchester. Fast worker, great communicator, always punctual. Looking for a permanent role or long-term contract.',
    experience:[{role:'Senior Plumber & Gas Engineer',company:'Hale Plumbing & Heating Ltd',dates:'Jan 2018 – Present',desc:'Lead engineer on new-build and renovation projects. Managed 2 apprentices. Responsible for all gas compliance sign-off.'},{role:'Plumber',company:'City Heating Solutions, Salford',dates:'Mar 2014 – Dec 2017',desc:'Domestic and commercial plumbing, bathroom renovations, boiler servicing, landlord gas safety certificates.'}],
    quals:'City & Guilds Level 3 Plumbing (2013) · Gas Safe Registered (CCN1, CEN1) · ACS current · CSCS Gold Card',
    hobbies:'Five-a-side football, DIY, cycling.',
    idealJob:'Permanent senior plumber or gas engineer role in Greater Manchester.',
    completion:85 },
  { id:2, initials:'SK', bg:'#2a7a2a', name:'Sarah Khan', title:'Plumber / Heating Engineer', location:'Salford, Greater Manchester', status:'open', notice:'2 weeks', salary:'£32,000+', type:'Contract', sector:'Trades',
    skills:['City & Guilds','Wet Rooms','Underfloor Heating','Bathroom Renovation','Own Van','WRAS Approved'],
    summary:'City & Guilds qualified plumber specialising in bathroom renovation, wet rooms and underfloor heating. 8 years residential sector experience.',
    profile:'City & Guilds qualified plumber with 8 years residential experience. Specialist in wet room installations. Own van and public liability insurance.',
    experience:[{role:'Self-Employed Plumber',company:'SK Plumbing Services',dates:'2016 – Present',desc:'Bathroom renovations, wet room installs, underfloor heating for residential clients across Salford and Manchester.'}],
    quals:'City & Guilds Level 3 Plumbing (2015) · WRAS Approved Installer',
    hobbies:'Running, cooking, travel.',
    idealJob:'Long-term contract or permanent part-time role.',
    completion:78 },
  { id:3, initials:'MO', bg:'#6a1b9a', name:'Marcus O\'Brien', title:'Apprentice Plumber', location:'Stockport, Greater Manchester', status:'active', notice:'Immediately', salary:'Apprentice rates', type:'Permanent', sector:'Trades',
    skills:['NVQ Level 2 (in progress)','CSCS Card','Full UK Licence','Eager to Learn'],
    summary:'2nd year apprentice plumber currently at Hale Plumbing Ltd. NVQ Level 2 in progress. Available immediately for a new placement.',
    profile:'Hard-working 2nd year apprentice plumber. Quick learner, punctual and passionate about the trade. Excellent references available.',
    experience:[{role:'Apprentice Plumber',company:'Hale Plumbing Ltd',dates:'Sep 2023 – Present',desc:'Assisted qualified engineers on domestic installations and repairs. NVQ Level 2 in progress.'}],
    quals:'NVQ Level 2 Plumbing (in progress) · CSCS Trainee Card · H&S Level 1',
    hobbies:'Football, gaming, mountain biking.',
    idealJob:'Apprenticeship placement or junior plumber role with training.',
    completion:60 },
  { id:4, initials:'ER', bg:'#bf360c', name:'Emma Richards', title:'Senior Graphic Designer', location:'London, UK', status:'active', notice:'1 month', salary:'£48,000+', type:'Permanent', sector:'Design',
    skills:['Adobe Creative Suite','Figma','Brand Identity','UI/UX','Motion Graphics','Typography','Print'],
    summary:'Award-winning senior graphic designer with 9 years experience across brand identity, digital and print for global brands in retail, tech and hospitality.',
    profile:'Creative and commercially-minded senior graphic designer. Experienced leading design projects from concept to delivery for global brands. Strong agency and in-house background.',
    experience:[{role:'Senior Graphic Designer',company:'Studio Arc, London',dates:'2019 – Present',desc:'Led brand identity projects for clients in retail, fintech and hospitality. Managed 2 junior designers.'},{role:'Graphic Designer',company:'Bright Creative Agency',dates:'2015 – 2019',desc:'Full-service design across digital, print and brand.'}],
    quals:'BA (Hons) Graphic Design — Central Saint Martins (2015) · D&AD New Blood Award',
    hobbies:'Illustration, yoga, food photography.',
    idealJob:'Senior designer or creative lead role at a forward-thinking agency.',
    completion:92 },
  { id:5, initials:'TN', bg:'#0f6e56', name:'Tom Nguyen', title:'Full Stack Developer', location:'Birmingham, UK', status:'active', notice:'2 weeks', salary:'£68,000+', type:'Permanent', sector:'Tech',
    skills:['React','Node.js','TypeScript','PostgreSQL','AWS','Docker','REST APIs','GraphQL'],
    summary:'Full stack developer with 6 years building scalable SaaS products. Equally strong on front and back end. Open to remote or hybrid roles.',
    profile:'Passionate full stack developer who loves building products people actually use. 6 years delivering clean, well-tested code for startups and scale-ups.',
    experience:[{role:'Senior Full Stack Developer',company:'Launchpad Digital, Birmingham',dates:'2020 – Present',desc:'Led development of B2B SaaS platform from 0 to 40k+ users. Architected microservices migration.'},{role:'Software Developer',company:'Techflow Ltd',dates:'2018 – 2020',desc:'Full stack development on fintech payments platform.'}],
    quals:'BSc Computer Science — University of Birmingham (2018) · AWS Certified Developer',
    hobbies:'Open source contributions, chess, hiking.',
    idealJob:'Senior or lead developer role at a product-led company.',
    completion:95 },
  { id:6, initials:'AL', bg:'#185fa5', name:'Amy Lewis', title:'Childminder / Early Years', location:'Leeds, UK', status:'active', notice:'Immediately', salary:'£24,000+', type:'Permanent', sector:'Childcare',
    skills:['Ofsted Outstanding (2023)','EYFS Qualified','Paediatric First Aid','DBS Enhanced','SEN Experience'],
    summary:'Ofsted Outstanding rated childminder with 10 years caring for children aged 0-8. EYFS qualified, first aid trained.',
    profile:'Warm, dedicated Ofsted Outstanding rated childminder. Creates stimulating, safe, nurturing environments. Experienced supporting children with additional needs.',
    experience:[{role:'Registered Childminder',company:'Self-employed, Leeds',dates:'2014 – Present',desc:'Care and early education for up to 6 children. Achieved Ofsted Outstanding 2023.'}],
    quals:'CACHE Level 3 Childcare · Paediatric First Aid (current) · DBS Enhanced · Forest School L1',
    hobbies:'Baking, nature walks, crafts.',
    idealJob:'Nursery nurse or teaching assistant role.',
    completion:88 },
  { id:7, initials:'RB', bg:'#795548', name:'Ryan Bennett', title:'Sous Chef / Chef de Partie', location:'Manchester, UK', status:'open', notice:'1 month', salary:'£36,000+', type:'Permanent', sector:'Hospitality',
    skills:['Fine Dining','Menu Development','HACCP','Pastry','Team Leadership','Level 3 Food Hygiene'],
    summary:'Sous chef with 7 years fine dining experience in Michelin-recommended restaurants. Strong pastry background. Looking for head chef opportunity.',
    profile:'Passionate sous chef with 7 years in Michelin-recommended fine dining. Known for exceptional pastry skills and seasonal menu development.',
    experience:[{role:'Sous Chef',company:'The Whitmore, Manchester',dates:'2020 – Present',desc:'Supported head chef in a 60-cover fine dining restaurant. Developed seasonal tasting menus.'},{role:'Chef de Partie',company:'Hotel du Lac, Cheshire',dates:'2017 – 2020',desc:'Section lead for pastry and larder.'}],
    quals:'NVQ Level 3 Professional Cookery · Level 3 Food Safety & Hygiene (2023)',
    hobbies:'Food photography, travel, running.',
    idealJob:'Head Chef or Executive Sous Chef role. Manchester or Cheshire preferred.',
    completion:82 },
  { id:8, initials:'CD', bg:'#4527a0', name:'Claire Davies', title:'Marketing Manager', location:'Bristol, UK', status:'active', notice:'3 months', salary:'£58,000+', type:'Permanent', sector:'Marketing',
    skills:['Digital Marketing','SEO','PPC','Content Strategy','HubSpot','Google Analytics','Team Management'],
    summary:'Results-driven marketing manager with 8 years B2B and B2C experience. Grew organic traffic 180% in 2 years. Managed £250k paid media budget.',
    profile:'Strategic and data-led marketing manager with proven track record across digital channels, content and paid media. Led teams of up to 6.',
    experience:[{role:'Marketing Manager',company:'GreenTech Solutions, Bristol',dates:'2019 – Present',desc:'Grew organic traffic 180% in 2 years. Managed £250k annual paid media budget. Led team of 4.'},{role:'Digital Marketing Executive',company:'Webb & Partners, Bath',dates:'2016 – 2019',desc:'SEO, PPC, email marketing and social campaigns.'}],
    quals:'CIM Diploma in Marketing · Google Ads Certified · BA Business Studies, Bath (2014)',
    hobbies:'Running, podcasting, cooking.',
    idealJob:'Head of Marketing or Senior Marketing Manager at a scaling brand.',
    completion:90 },
];

const JOBS = [
  { id:1, title:'Gas Safe Engineer', company:'Hale Heating Group', location:'Manchester, UK', salary:'£38,000 – £44,000', type:'Permanent', posted:'Today', tags:['Gas Safe','Plumbing','Manchester'], desc:'We are looking for a qualified Gas Safe engineer to join our growing team. CCN1 and CEN1 essential. Company van provided.' },
  { id:2, title:'Graphic Designer', company:'Studio Arc', location:'London (Hybrid)', salary:'£40,000 – £48,000', type:'Permanent', posted:'2 days ago', tags:['Figma','Adobe CC','Brand'], desc:'Studio Arc is hiring a mid-weight graphic designer. Strong brand identity portfolio required. Hybrid working, 2 days in studio.' },
  { id:3, title:'Full Stack Developer', company:'Launchpad Digital', location:'Birmingham / Remote', salary:'£60,000 – £70,000', type:'Permanent', posted:'3 days ago', tags:['React','Node.js','AWS'], desc:'Join our fast-growing product team. You will own features end to end, from design through to deployment on AWS.' },
  { id:4, title:'Sous Chef', company:'The Whitmore Restaurant', location:'Manchester, UK', salary:'£34,000 – £38,000', type:'Permanent', posted:'1 week ago', tags:['Fine Dining','Pastry','HACCP'], desc:'Michelin-recommended restaurant looking for an experienced sous chef. Strong pastry background preferred.' },
  { id:5, title:'Marketing Manager', company:'ScaleUp Tech Ltd', location:'Bristol (Hybrid)', salary:'£50,000 – £58,000', type:'Permanent', posted:'1 week ago', tags:['SEO','PPC','HubSpot'], desc:'Lead our marketing function. B2B SaaS experience ideal. Full ownership of digital, content and paid channels.' },
  { id:6, title:'Childminder / Nursery Nurse', company:'Little Stars Nursery', location:'Leeds, UK', salary:'£22,000 – £26,000', type:'Permanent', posted:'2 weeks ago', tags:['EYFS','DBS','SEN'], desc:'Warm, Outstanding-rated nursery seeking a passionate early years practitioner. CACHE Level 3 or equivalent required.' },
];

// ══ STATE ══════════════════════════════════════════
const App = {
  user: null,
  basket: [],
  currentCandidate: null,
  searchResults: [],

  init() {
    this.go('home');
    this.renderNav();
    document.querySelectorAll('.modal-overlay').forEach(m => {
      m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
    });
    document.getElementById('home-q')?.addEventListener('keydown', e => { if (e.key==='Enter') this.search(document.getElementById('home-q').value, document.getElementById('home-loc').value); });
    document.getElementById('hero-q')?.addEventListener('keydown', e => { if (e.key==='Enter') this.search(document.getElementById('hero-q').value, document.getElementById('hero-loc').value); });
  },

  go(page, data) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + page);
    if (!el) return;
    el.classList.add('active');
    window.scrollTo(0, 0);
    if (page === 'search') this.renderSearch(data);
    if (page === 'profile' && data) this.renderProfile(data);
    if (page === 'recruiter') this.renderRecruiter();
    if (page === 'candidate') this.renderCandidate();
    if (page === 'basket') this.renderBasket();
    if (page === 'jobboard') this.renderJobBoard();
    this.renderNav();
  },

  // ── NAV ────────────────────────────────────────
  renderNav() {
    const r = document.getElementById('nav-right');
    if (!r) return;
    const bw = document.getElementById('nav-basket-wrap');
    if (bw) { bw.style.display = this.basket.length ? 'flex' : 'none'; document.getElementById('nav-basket-count').textContent = this.basket.length; }
    if (this.user) {
      r.innerHTML = `<span class="text-sm" style="color:var(--text-mid);">Hi, ${this.user.name.split(' ')[0]}</span>
      <div class="dropdown"><a class="btn btn-yellow btn-sm">${this.user.type==='recruiter'?'My Account':'My Account'} ▾</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" onclick="App.go('${this.user.type==='recruiter'?'recruiter':'candidate'}')">Dashboard</a>
          <div class="dropdown-sep"></div>
          <a class="dropdown-item" onclick="App.logout()">Sign out</a>
        </div>
      </div>`;
    } else {
      r.innerHTML = `<a onclick="App.openModal('modal-signin')" class="text-sm" style="color:var(--text-mid);">Sign in</a>
      <a onclick="App.openModal('modal-signup')" class="btn btn-yellow btn-sm">Sign up</a>`;
    }
  },

  // ── SEARCH ──────────────────────────────────────
  search(q, loc) {
    const query = (q||'').toLowerCase().trim();
    const location = (loc||'').toLowerCase().trim();
    let results = [...CANDIDATES];
    if (query) results = results.filter(c =>
      c.title.toLowerCase().includes(query) ||
      c.skills.some(s => s.toLowerCase().includes(query)) ||
      c.summary.toLowerCase().includes(query) ||
      c.sector.toLowerCase().includes(query) ||
      c.name.toLowerCase().includes(query)
    );
    if (location) results = results.filter(c => c.location.toLowerCase().includes(location));
    this.searchResults = results;
    this.go('search', { q, loc, results });
  },

  renderSearch(data) {
    const d = data || { q:'', loc:'', results: this.searchResults };
    const qEl = document.getElementById('srch-q');
    const lEl = document.getElementById('srch-loc');
    if (qEl) qEl.value = d.q||'';
    if (lEl) lEl.value = d.loc||'';
    const countEl = document.getElementById('srch-count');
    if (countEl) countEl.innerHTML = `About <strong>${d.results.length}</strong> results (0.07 seconds)`;
    const list = document.getElementById('srch-list');
    if (!list) return;
    if (!d.results.length) {
      list.innerHTML = `<div style="padding:40px 0;color:var(--text-muted);">
        <p style="font-size:16px;margin-bottom:6px;">No CVs found for <em>${d.q||'your search'}</em>.</p>
        <p class="text-sm">Try different keywords or broaden your location.</p>
      </div>`; return;
    }
    list.innerHTML = d.results.map(c => `
      <div class="result-item">
        <div class="result-avatar" id="av-${c.id}" style="background:${c.bg};width:48px;height:48px;" onclick="App.openProfile(${c.id})">${c.initials}</div>
        <div class="result-body">
          <div class="result-title" onclick="App.openProfile(${c.id})">${c.title} — ${c.name}</div>
          <div class="result-url">seecv.com/cv/${c.name.toLowerCase().replace(/\s/g,'-').replace("'",'')} &nbsp;·&nbsp; ${c.location}</div>
          <div class="result-meta">
            <span class="badge ${c.status==='active'?'badge-green':'badge-amber'}">${c.status==='active'?'Actively looking':'Open to offers'}</span>
            &nbsp; Notice: ${c.notice} &nbsp;·&nbsp; ${c.salary}
          </div>
          <div class="result-snippet">${c.summary}</div>
          <div class="result-skills">${c.skills.slice(0,5).map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
          <div class="result-actions">
            <a onclick="App.addToBasket(${c.id}, event)">Add to basket</a>
            <a onclick="App.buyNow(${c.id})">Buy contact — £1</a>
            <a onclick="App.saveCV(${c.id})">Save</a>
            <a onclick="App.openProfile(${c.id})">View full CV</a>
          </div>
        </div>
      </div>`).join('');
  },

  // ── PROFILE ──────────────────────────────────────
  openProfile(id) {
    const c = CANDIDATES.find(x => x.id===id);
    if (c) { this.currentCandidate = c; this.go('profile', c); }
  },

  renderProfile(c) {
    const s = (id, v) => { const el=document.getElementById(id); if(el) el[typeof v==='string'?'textContent':'innerHTML']=v; };
    document.getElementById('prof-av').style.background = c.bg;
    s('prof-initials', c.initials);
    s('prof-name', c.name);
    s('prof-title', c.title);
    s('prof-location', c.location);
    const st = document.getElementById('prof-status');
    if (st) { st.textContent = c.status==='active'?'Actively looking':'Open to offers'; st.className='badge '+(c.status==='active'?'badge-green':'badge-amber'); }
    document.getElementById('prof-prog').style.width = c.completion+'%';
    s('prof-pct', c.completion+'%');
    s('prof-profile-text', c.profile);
    s('prof-skills', c.skills.map(sk=>`<span class="skill-tag">${sk}</span>`).join(' '));
    s('prof-experience', c.experience.map(e=>`<div class="exp-block"><div class="exp-role">${e.role}</div><div class="exp-co">${e.company}</div><div class="exp-dates">${e.dates}</div><p class="text-sm" style="color:var(--text-mid);">${e.desc}</p></div>`).join(''));
    s('prof-quals', c.quals);
    s('prof-hobbies', c.hobbies);
    s('prof-ideal', c.idealJob);
    s('prof-salary', c.salary);
    s('prof-type', c.type);
    s('prof-notice', c.notice);
    const bought = this.user?.bought?.includes(c.id);
    document.getElementById('prof-buy-section').style.display = bought ? 'none' : 'block';
    document.getElementById('prof-unlocked-section').style.display = bought ? 'block' : 'none';
    if (bought) {
      s('prof-phone', '07' + Math.floor(700000000 + (c.id * 12345678)));
      s('prof-email', c.name.toLowerCase().replace(/[\s']/g,'.')+('@email.com'));
    }
  },

  // ── BASKET ──────────────────────────────────────
  addToBasket(id, evt) {
    const c = CANDIDATES.find(x => x.id===id);
    if (!c) return;
    if (this.basket.find(x => x.id===id)) { this.toast(c.name+' is already in your basket'); return; }
    this.basket.push(c);
    this.toast(c.name+' added to basket');
    this.renderNav();
    if (evt) this.flyToBasket(id, evt);
  },

  flyToBasket(id, evt) {
    const c = CANDIDATES.find(x => x.id===id);
    if (!c) return;
    const avEl = document.getElementById('av-'+id);
    const basketEl = document.getElementById('nav-basket-wrap');
    if (!avEl || !basketEl) return;
    const from = avEl.getBoundingClientRect();
    const to = basketEl.getBoundingClientRect();
    const fly = document.createElement('div');
    fly.className = 'fly-avatar';
    fly.style.cssText = `width:40px;height:40px;background:${c.bg};font-size:12px;font-weight:700;left:${from.left}px;top:${from.top + window.scrollY}px;`;
    fly.textContent = c.initials;
    document.body.appendChild(fly);
    requestAnimationFrame(() => {
      fly.style.transition = 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)';
      fly.style.left = (to.left + to.width/2 - 20) + 'px';
      fly.style.top = (to.top + window.scrollY) + 'px';
      fly.style.width = '20px';
      fly.style.height = '20px';
      fly.style.opacity = '0';
      fly.style.fontSize = '8px';
    });
    setTimeout(() => fly.remove(), 800);
  },

  removeFromBasket(id) {
    this.basket = this.basket.filter(x => x.id!==id);
    this.renderBasket();
    this.renderNav();
  },

  buyNow(id) { this.addToBasket(id, null); this.go('basket'); },

  renderBasket() {
    const list = document.getElementById('basket-list');
    if (!list) return;
    if (!this.basket.length) {
      list.innerHTML = `<p class="text-muted text-sm" style="padding:16px 0;">Your basket is empty. <a onclick="App.go('search')">Search for CVs</a></p>`;
    } else {
      list.innerHTML = this.basket.map(c => `
        <div class="flex-between" style="padding:10px 0;border-bottom:1px solid var(--border-light);">
          <div class="flex-center gap-1">
            <div class="avatar av-sm" style="background:${c.bg}">${c.initials}</div>
            <div>
              <div class="bold text-sm">${c.name}</div>
              <div class="text-xs text-muted">${c.title} · ${c.location}</div>
            </div>
          </div>
          <div class="flex-center gap-1">
            <span style="color:var(--green);font-weight:700;font-size:13px;">1 credit</span>
            <a onclick="App.removeFromBasket(${c.id})" class="text-xs" style="color:#c0392b;">Remove</a>
          </div>
        </div>`).join('');
    }
    const tot = document.getElementById('basket-total');
    if (tot) tot.textContent = this.basket.length + ' CV'+(this.basket.length!==1?'s':'');
  },

  completePurchase() {
    if (!this.user) { this.openModal('modal-signin'); return; }
    if (!this.basket.length) { this.toast('Your basket is empty'); return; }
    if (!this.user.bought) this.user.bought = [];
    this.basket.forEach(c => { if (!this.user.bought.includes(c.id)) this.user.bought.push(c.id); });
    const n = this.basket.length;
    this.basket = [];
    this.toast(`Purchase complete — ${n} contact detail${n>1?'s':''} unlocked`);
    this.renderNav();
    this.go('recruiter');
  },

  saveCV(id) {
    if (!this.user) { this.openModal('modal-signin'); return; }
    if (!this.user.saved) this.user.saved = [];
    if (this.user.saved.includes(id)) { this.toast('Already saved'); return; }
    this.user.saved.push(id);
    this.toast('CV saved to your account');
  },

  shareBasket() {
    if (!this.basket.length) { this.toast('Add some CVs to your basket first'); return; }
    const names = this.basket.map(c=>c.name).join(', ');
    const url = 'https://seecv.com/shared-basket?cvs=' + this.basket.map(c=>c.id).join(',');
    document.getElementById('share-basket-url').value = url;
    document.getElementById('share-basket-box').style.display = 'block';
    this.toast('Share link generated for: ' + names);
  },

  copyShareLink() {
    const url = document.getElementById('share-basket-url');
    if (url) { url.select(); document.execCommand('copy'); this.toast('Share link copied to clipboard'); }
  },

  // ── RECRUITER DASHBOARD ──────────────────────────
  renderRecruiter() {
    if (!this.user) { this.openModal('modal-signin'); return; }
    const bought = (this.user.bought||[]).map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);
    const saved = (this.user.saved||[]).map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);
    const s = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
    s('rec-name-disp', this.user.name);
    s('rec-email-disp', this.user.email);
    s('rstat-credits', this.user.credits||0);
    s('rstat-bought', bought.length);
    s('rstat-saved', saved.length);
    s('rstat-searches', (this.user.searches||[]).length);
    const av = document.getElementById('rec-av');
    if (av) { av.textContent = this.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); av.style.background=this.user.type==='recruiter'?'#1a6fb5':'#2a7a2a'; }
    const bList = document.getElementById('rec-bought-list');
    if (bList) bList.innerHTML = !bought.length ? '<p class="text-muted text-sm">No CVs purchased yet.</p>' :
      bought.map(c=>`<div class="flex-between" style="padding:9px 0;border-bottom:1px solid var(--border-light);">
        <div class="flex-center gap-1"><div class="avatar av-xs" style="background:${c.bg}">${c.initials}</div>
        <div><div class="bold text-sm" onclick="App.openProfile(${c.id})" style="cursor:pointer;color:var(--blue-link);">${c.name}</div>
        <div class="text-xs" style="color:var(--green);">07${Math.floor(700000000+(c.id*12345678))} &nbsp;|&nbsp; ${c.name.toLowerCase().replace(/[\s']/g,'.')}@email.com</div></div></div>
        <a onclick="App.switchRecTab('messages')" class="btn btn-outline btn-sm">Message</a></div>`).join('');
    const sList = document.getElementById('rec-saved-list');
    if (sList) sList.innerHTML = !saved.length ? '<p class="text-muted text-sm">No saved CVs.</p>' :
      saved.map(c=>`<div class="flex-between" style="padding:9px 0;border-bottom:1px solid var(--border-light);">
        <div class="flex-center gap-1"><div class="avatar av-xs" style="background:${c.bg}">${c.initials}</div>
        <div><div class="bold text-sm" onclick="App.openProfile(${c.id})" style="cursor:pointer;color:var(--blue-link);">${c.name}</div>
        <div class="text-xs text-muted">${c.title} · ${c.location}</div></div></div>
        <a onclick="App.buyNow(${c.id})" class="btn btn-yellow btn-sm">Buy — £1</a></div>`).join('');
    const srList = document.getElementById('rec-searches-list');
    if (srList) srList.innerHTML = (this.user.searches||[]).length ?
      (this.user.searches).map(sr=>`<div class="flex-between" style="padding:8px 0;border-bottom:1px solid var(--border-light);">
        <div><div class="bold text-sm">${sr.q}${sr.loc?' · '+sr.loc:''}</div><div class="text-xs text-muted">${sr.count} results</div></div>
        <div class="flex gap-1"><a onclick="App.search('${sr.q}','${sr.loc||''}')" class="btn btn-outline btn-sm">Run</a><a onclick="App.toast('Email alert set')" class="btn btn-outline btn-sm">Alert</a></div></div>`).join('')
      : '<p class="text-muted text-sm">No saved searches.</p>';
    const fn = document.getElementById('acc-fn'); if (fn) fn.value = this.user.name.split(' ')[0]||'';
    const ln = document.getElementById('acc-ln'); if (ln) ln.value = this.user.name.split(' ').slice(1).join(' ')||'';
    const em = document.getElementById('acc-em'); if (em) em.value = this.user.email||'';
  },

  switchRecTab(tab) {
    document.querySelectorAll('.rec-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.rec-panel').forEach(p => p.style.display='none');
    const btn = document.querySelector(`.rec-tab-btn[data-tab="${tab}"]`);
    const panel = document.getElementById('rec-panel-'+tab);
    if (btn) btn.classList.add('active');
    if (panel) panel.style.display='block';
  },

  // ── CANDIDATE DASHBOARD ──────────────────────────
  renderCandidate() {
    if (!this.user) { this.openModal('modal-signup'); return; }
    const n = document.getElementById('cand-name-disp'); if (n) n.textContent = this.user.name;
    const av = document.getElementById('cand-av'); if (av) { av.textContent = this.user.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase(); av.style.background='#2a7a2a'; }
  },

  switchCandTab(tab) {
    document.querySelectorAll('.cand-tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.cand-panel').forEach(p => p.style.display='none');
    document.querySelector(`.cand-tab-btn[data-tab="${tab}"]`)?.classList.add('active');
    const panel = document.getElementById('cand-panel-'+tab);
    if (panel) panel.style.display='block';
  },

  // ── JOB BOARD ──────────────────────────────────
  renderJobBoard() {
    const list = document.getElementById('job-list');
    if (!list) return;
    const q = (document.getElementById('job-q')?.value||'').toLowerCase();
    const loc = (document.getElementById('job-loc')?.value||'').toLowerCase();
    let jobs = [...JOBS];
    if (q) jobs = jobs.filter(j => j.title.toLowerCase().includes(q) || j.desc.toLowerCase().includes(q) || j.tags.some(t=>t.toLowerCase().includes(q)));
    if (loc) jobs = jobs.filter(j => j.location.toLowerCase().includes(loc));
    document.getElementById('job-count').textContent = `${jobs.length} job${jobs.length!==1?'s':''} found`;
    list.innerHTML = jobs.map(j=>`
      <div class="job-item">
        <div class="job-title" onclick="App.toast('Job details: ${j.title} at ${j.company}')">${j.title}</div>
        <div class="job-co">${j.company}</div>
        <div class="job-meta">${j.location} &nbsp;·&nbsp; ${j.salary} &nbsp;·&nbsp; ${j.type} &nbsp;·&nbsp; Posted: ${j.posted}</div>
        <div class="job-snippet">${j.desc}</div>
        <div class="job-tags">${j.tags.map(t=>`<span class="skill-tag">${t}</span>`).join('')}</div>
        <div style="margin-top:8px;display:flex;gap:10px;">
          <a onclick="App.user?App.toast('Application submitted for ${j.title}'):App.openModal('modal-signup')" class="btn btn-yellow btn-sm">Apply now</a>
          <a onclick="App.toast('Job saved')" class="btn btn-outline btn-sm">Save job</a>
        </div>
      </div>`).join('');
  },

  // ── PROFILE TABS ──────────────────────────────
  switchProfileTab(tab) {
    document.querySelectorAll('#page-profile .ptab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('#page-profile .ptab-panel').forEach(p => p.classList.remove('active'));
    document.querySelector(`#page-profile .ptab[data-tab="${tab}"]`)?.classList.add('active');
    document.getElementById('ptab-'+tab)?.classList.add('active');
  },

  // ── AUTH ────────────────────────────────────────
  signin() {
    const email = document.getElementById('si-email')?.value.trim();
    const pass = document.getElementById('si-pass')?.value;
    const type = document.querySelector('.si-type.active')?.dataset.type || 'recruiter';
    if (!email || !pass) { this.toast('Please enter your email and password'); return; }
    this.user = { type, email, name: email.split('@')[0].replace(/[._]/g,' ').replace(/\b\w/g,c=>c.toUpperCase()), credits:50, bought:[], saved:[], searches:[{q:'plumber',loc:'Manchester',count:47},{q:'graphic designer',loc:'',count:128}], messages:[] };
    this.closeModal('modal-signin');
    this.toast('Welcome back, '+this.user.name.split(' ')[0]+'!');
    this.go(type==='candidate'?'candidate':'recruiter');
  },

  signup() {
    const name = document.getElementById('su-name')?.value.trim();
    const email = document.getElementById('su-email')?.value.trim();
    const pass = document.getElementById('su-pass')?.value;
    const type = document.querySelector('.su-type.active')?.dataset.type || 'candidate';
    if (!name||!email||!pass) { this.toast('Please fill in all fields'); return; }
    this.user = { type, name, email, credits:0, bought:[], saved:[], searches:[], messages:[] };
    this.closeModal('modal-signup');
    this.toast('Welcome to SeeCv, '+name.split(' ')[0]+'!');
    this.go(type==='recruiter'?'recruiter':'candidate');
  },

  logout() { this.user=null; this.basket=[]; this.renderNav(); this.go('home'); this.toast('Signed out'); },

  // ── MESSAGING ────────────────────────────────────
  sendMsg(inputId, threadId) {
    const inp = document.getElementById(inputId);
    if (!inp||!inp.value.trim()) return;
    if (!this.user) { this.openModal('modal-signin'); return; }
    const thread = document.getElementById(threadId);
    if (!thread) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = `<div class="msg-me">${inp.value.trim()}</div><div class="msg-time r">You · just now</div>`;
    thread.appendChild(wrap);
    thread.scrollTop = thread.scrollHeight;
    inp.value = '';
    setTimeout(() => {
      const r2 = document.createElement('div');
      r2.innerHTML = `<div class="msg-them">Thanks for your message — I'll get back to you shortly.</div><div class="msg-time">Just now</div>`;
      thread.appendChild(r2);
      thread.scrollTop = thread.scrollHeight;
    }, 1200);
  },

  // ── MODALS ────────────────────────────────────────
  openModal(id) { document.getElementById(id)?.classList.add('open'); },
  closeModal(id) { document.getElementById(id)?.classList.remove('open'); },

  // ── TOAST ─────────────────────────────────────────
  toast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(this._tt);
    this._tt = setTimeout(() => t.classList.remove('show'), 3000);
  },

  toggleFaq(el) {
    const a = el.nextElementSibling;
    if (!a) return;
    a.classList.toggle('open');
    el.querySelector('.faq-arr').textContent = a.classList.contains('open') ? '▲' : '▼';
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
