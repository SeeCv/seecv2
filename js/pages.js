/* SeeCv — page-specific rendering */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop().replace('.html','');
  const renders = { recruiter: renderRecruiter, candidate: renderCandidate, jobboard: renderJobBoard, advanced: renderAdvanced, about: renderAbout, help: renderHelp };
  if (renders[page]) renders[page]();
});

// ── RECRUITER DASHBOARD ───────────────────────────────
function renderRecruiter() {
  const u = getUser();
  if (!u) { openModal('modal-signin'); document.getElementById('page-content').innerHTML = '<p style="color:#888;padding:20px;text-align:center;">Please sign in to view your account.</p>'; return; }
  const bought = getBought().map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);
  const saved = getSaved().map(id=>CANDIDATES.find(c=>c.id===id)).filter(Boolean);
  document.title = 'My Account — SeeCv';
  const pc = document.getElementById('page-content');
  pc.innerHTML = '';
  pc.style.padding = '0';
  pc.style.background = 'transparent';
  pc.style.border = 'none';
  pc.style.boxShadow = 'none';

  const layout = document.createElement('div');
  layout.className = 'dash-layout';
  layout.innerHTML = `
    <div class="dash-sidebar">
      <div class="dash-user">
        <div class="avatar av-sm" style="background:#1a6fb5;">${u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div><div style="font-size:12px;font-weight:700;">${u.name}</div><div style="font-size:11px;color:#777;">${u.email}</div></div>
      </div>
      <a class="dash-item active" id="si-overview" onclick="recTab('overview')">Overview</a>
      <a class="dash-item" id="si-bought" onclick="recTab('bought')">Purchased CVs (${bought.length})</a>
      <a class="dash-item" id="si-saved" onclick="recTab('saved')">Saved CVs (${saved.length})</a>
      <a class="dash-item" id="si-messages" onclick="recTab('messages')">Messages</a>
      <div class="dash-sep"></div>
      <a class="dash-item" id="si-account" onclick="recTab('account')">Account settings</a>
      <div class="dash-sep"></div>
      <a class="dash-item" href="search.html">Search CVs</a>
      <a class="dash-item" href="basket.html">Buy credits</a>
      <a class="dash-item" href="jobboard.html">Post a job</a>
      <div class="dash-sep"></div>
      <a class="dash-item" onclick="logout()" style="color:#c0392b;">Sign out</a>
    </div>
    <div class="dash-main" id="dash-main"></div>`;
  pc.appendChild(layout);

  window.recTab = function(tab) {
    document.querySelectorAll('.dash-item').forEach(i=>i.classList.remove('active'));
    const si = document.getElementById('si-'+tab); if(si) si.classList.add('active');
    const main = document.getElementById('dash-main');
    if (tab==='overview') main.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;"><div style="font-size:17px;font-weight:700;">Account overview</div><a href="search.html" class="btn-yellow" style="font-size:12px;padding:6px 14px;">Search CVs</a></div>
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-num">${u.credits||0}</div><div class="stat-lbl">Credits</div></div>
        <div class="stat-box"><div class="stat-num">${bought.length}</div><div class="stat-lbl">CVs purchased</div></div>
        <div class="stat-box"><div class="stat-num">${saved.length}</div><div class="stat-lbl">CVs saved</div></div>
        <div class="stat-box"><div class="stat-num">2</div><div class="stat-lbl">Saved searches</div></div>
      </div>
      <div class="notif mb-2">Tip: Search is always free. Only pay £1 when you want to contact someone.</div>
      <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Saved CVs</div>
      ${!saved.length ? '<p style="color:#888;font-size:13px;">No saved CVs. <a href="search.html">Search now →</a></p>' :
        saved.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #eee;">
          <div style="display:flex;align-items:center;gap:8px;"><div class="avatar av-xs" style="background:${c.bg}">${c.initials}</div>
          <div><a href="profile.html?id=${c.id}" style="font-size:13px;font-weight:700;">${c.name}</a><div style="font-size:12px;color:#777;">${c.title} · ${c.location}</div></div></div>
          <button class="btn-yellow" style="font-size:11px;padding:4px 10px;" onclick="window.location.href='basket.html'">Buy — £1</button></div>`).join('')}
      <div style="font-size:14px;font-weight:700;margin:14px 0 10px;">Latest searches</div>
      <div style="padding:9px 0;border-bottom:1px solid #eee;display:flex;justify-content:space-between;font-size:13px;"><span>plumber · Manchester</span><div style="display:flex;gap:6px;"><a href="search.html?q=plumber&loc=Manchester" class="btn-outline" style="font-size:11px;">Run</a><a onclick="toast('Alert set')" class="btn-outline" style="font-size:11px;">Alert</a></div></div>
      <div style="padding:9px 0;display:flex;justify-content:space-between;font-size:13px;"><span>graphic designer · UK</span><div style="display:flex;gap:6px;"><a href="search.html?q=graphic+designer" class="btn-outline" style="font-size:11px;">Run</a><a onclick="toast('Alert set')" class="btn-outline" style="font-size:11px;">Alert</a></div></div>`;

    else if (tab==='bought') main.innerHTML = `
      <div style="font-size:17px;font-weight:700;margin-bottom:6px;">Purchased CVs</div>
      <p style="font-size:13px;color:#777;margin-bottom:14px;">You have full contact access to these candidates.</p>
      ${!bought.length ? '<p style="color:#888;font-size:13px;">No CVs purchased yet. <a href="search.html">Search now →</a></p>' :
        bought.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #eee;">
          <div style="display:flex;align-items:center;gap:8px;"><div class="avatar av-xs" style="background:${c.bg}">${c.initials}</div>
          <div><a href="profile.html?id=${c.id}" style="font-size:13px;font-weight:700;">${c.name}</a>
          <div style="font-size:12px;color:#006621;">07${Math.floor(700000000+(c.id*12345678))} &nbsp;|&nbsp; ${c.name.toLowerCase().replace(/[\s']/g,'.')}@email.com</div></div></div>
          <button class="btn-outline" style="font-size:11px;" onclick="recTab('messages')">Message</button></div>`).join('')}`;

    else if (tab==='saved') main.innerHTML = `
      <div style="font-size:17px;font-weight:700;margin-bottom:6px;">Saved CVs</div>
      <p style="font-size:13px;color:#777;margin-bottom:14px;">Shortlisted candidates. Purchase to unlock contact details.</p>
      ${!saved.length ? '<p style="color:#888;font-size:13px;">No saved CVs. <a href="search.html">Search now →</a></p>' :
        saved.map(c=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-bottom:1px solid #eee;">
          <div style="display:flex;align-items:center;gap:8px;"><div class="avatar av-xs" style="background:${c.bg}">${c.initials}</div>
          <div><a href="profile.html?id=${c.id}" style="font-size:13px;font-weight:700;">${c.name}</a><div style="font-size:12px;color:#777;">${c.title} · ${c.location}</div></div></div>
          <button class="btn-yellow" style="font-size:11px;padding:4px 10px;" onclick="window.location.href='basket.html'">Buy — £1</button></div>`).join('')}`;

    else if (tab==='messages') main.innerHTML = `
      <div style="font-size:17px;font-weight:700;margin-bottom:14px;">Messages</div>
      <div style="display:grid;grid-template-columns:180px 1fr;border:1px solid #ddd;border-radius:3px;overflow:hidden;min-height:320px;">
        <div style="background:#f9f9f9;border-right:1px solid #ddd;padding:10px;">
          <div style="font-size:11px;font-weight:700;color:#888;text-transform:uppercase;margin-bottom:8px;">Conversations</div>
          <div style="padding:8px;background:#fff;border:1px solid #1a6fb5;border-radius:2px;cursor:pointer;"><div style="font-size:13px;font-weight:700;">James Patterson</div><div style="font-size:11px;color:#777;">Can I arrange a call?</div></div>
        </div>
        <div style="display:flex;flex-direction:column;padding:14px;">
          <div style="font-size:13px;font-weight:700;padding-bottom:10px;border-bottom:1px solid #eee;margin-bottom:10px;">James Patterson — Gas Engineer</div>
          <div class="msg-thread" id="msg-thread" style="flex:1;">
            <div><div class="msg-me">Hi James — we have a Gas Safe role in Trafford, £40k permanent. Interested?</div><div class="msg-time r">You · 2 days ago</div></div>
            <div><div class="msg-them">Thanks! I'd love to hear more. What's the start date?</div><div class="msg-time">James · 1 day ago</div></div>
          </div>
          <div class="msg-row" style="margin-top:10px;">
            <input type="text" id="rec-msg-inp" placeholder="Type a message..."/>
            <button class="btn-blue" onclick="sendRecMsg()">Send</button>
          </div>
        </div>
      </div>`;

    else if (tab==='account') main.innerHTML = `
      <div style="font-size:17px;font-weight:700;margin-bottom:16px;">Account settings</div>
      <div class="card mb-2" style="max-width:520px;">
        <div style="font-size:14px;font-weight:700;margin-bottom:12px;">Personal details</div>
        <div class="form-row"><div class="form-group"><label>First name</label><input type="text" value="${u.name.split(' ')[0]||''}"/></div><div class="form-group"><label>Last name</label><input type="text" value="${u.name.split(' ').slice(1).join(' ')||''}"/></div></div>
        <div class="form-group"><label>Email</label><input type="email" value="${u.email||''}"/></div>
        <div class="form-group"><label>Company</label><input type="text" placeholder="Your company"/></div>
        <button class="btn-yellow" onclick="toast('Changes saved')">Save changes</button>
      </div>
      <div class="card mb-2" style="max-width:520px;">
        <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Credits &amp; billing</div>
        <p style="font-size:13px;color:#555;margin-bottom:8px;">Balance: <strong>${u.credits||0} credits</strong></p>
        <a href="basket.html" class="btn-yellow" style="font-size:12px;">Buy more credits</a>
      </div>
      <div class="card" style="max-width:520px;border-color:#f5c6c6;">
        <div style="font-size:13px;font-weight:700;color:#c0392b;margin-bottom:8px;">Account</div>
        <button class="btn-outline" style="border-color:#c0392b;color:#c0392b;font-size:12px;" onclick="logout()">Sign out</button>
      </div>`;
  };

  window.sendRecMsg = function() {
    const inp = document.getElementById('rec-msg-inp');
    if (!inp||!inp.value.trim()) return;
    const thread = document.getElementById('msg-thread');
    const w=document.createElement('div'); w.innerHTML=`<div class="msg-me">${inp.value.trim()}</div><div class="msg-time r">You · just now</div>`;
    thread.appendChild(w); thread.scrollTop=thread.scrollHeight; inp.value='';
    setTimeout(()=>{const r=document.createElement('div');r.innerHTML='<div class="msg-them">Thanks for your message!</div><div class="msg-time">Just now</div>';thread.appendChild(r);thread.scrollTop=thread.scrollHeight;},1200);
  };

  recTab('overview');
}

// ── CANDIDATE DASHBOARD ───────────────────────────────
function renderCandidate() {
  const u = getUser();
  if (!u) { openModal('modal-signup'); document.getElementById('page-content').innerHTML = '<p style="color:#888;padding:20px;text-align:center;">Please sign in to view your account.</p>'; return; }
  document.title = 'My Account — SeeCv';
  const pc = document.getElementById('page-content');
  pc.innerHTML=''; pc.style.padding='0'; pc.style.background='transparent'; pc.style.border='none'; pc.style.boxShadow='none';

  const layout=document.createElement('div'); layout.className='dash-layout';
  layout.innerHTML=`
    <div class="dash-sidebar">
      <div class="dash-user">
        <div class="avatar av-sm" style="background:#2a7a2a;">${u.name.split(' ').map(w=>w[0]).join('').slice(0,2).toUpperCase()}</div>
        <div><div style="font-size:12px;font-weight:700;">${u.name}</div><div style="font-size:11px;color:#777;">Candidate</div></div>
      </div>
      <a class="dash-item active" id="ci-mycv" onclick="candTab('mycv')">My CV</a>
      <a class="dash-item" id="ci-messages" onclick="candTab('messages')">Messages</a>
      <div class="dash-sep"></div>
      <a class="dash-item" id="ci-settings" onclick="candTab('settings')">Settings &amp; Privacy</a>
      <div class="dash-sep"></div>
      <a class="dash-item" href="search.html">Preview in search</a>
      <div class="dash-sep"></div>
      <a class="dash-item" onclick="logout()" style="color:#c0392b;">Sign out</a>
    </div>
    <div class="dash-main" id="cand-main"></div>`;
  pc.appendChild(layout);

  window.candTab = function(tab) {
    document.querySelectorAll('.dash-sidebar .dash-item').forEach(i=>i.classList.remove('active'));
    const ci=document.getElementById('ci-'+tab); if(ci) ci.classList.add('active');
    const main=document.getElementById('cand-main');
    if (tab==='mycv') main.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;"><div style="font-size:17px;font-weight:700;">My CV</div><button class="btn-yellow" style="font-size:12px;" onclick="toast('Up to 5 CVs allowed')">+ New CV</button></div>
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;">
        <div style="background:#1a6fb5;color:#fff;border-radius:12px;padding:4px 14px;font-size:12px;cursor:pointer;">CV 1: Main</div>
        <div style="background:#f0f0f0;border:1px solid #ddd;border-radius:12px;padding:4px 14px;font-size:12px;cursor:pointer;" onclick="toast('Up to 5 CVs allowed')">+ Add CV</div>
      </div>
      <div class="notif mb-2">Profile is <strong>85% complete</strong>. Add a 30-second video to boost your search ranking.</div>
      <div class="card mb-2">
        <div style="font-size:14px;font-weight:700;margin-bottom:14px;">Edit your CV</div>
        <div class="form-group"><label>Job title(s)</label><input type="text" value="Gas Engineer, Plumber"/></div>
        <div class="form-group"><label>Personal profile</label><textarea>Reliable, qualified Gas Safe engineer with 12 years residential and commercial experience across Greater Manchester.</textarea></div>
        <div class="form-group"><label>Key skills (comma separated)</label><input type="text" value="Gas Safe Registered, Boiler Installation, Central Heating, Bathroom Fitting"/></div>
        <div class="form-row"><div class="form-group"><label>Location</label><input type="text" value="Manchester"/></div><div class="form-group"><label>Notice period</label><input type="text" value="1 week"/></div></div>
        <div class="form-row"><div class="form-group"><label>Salary expectation</label><input type="text" value="£38,000+"/></div><div class="form-group"><label>Status</label><select><option>Actively looking</option><option>In work, open to offers</option><option>Hidden from search</option></select></div></div>
        <div style="display:flex;gap:8px;"><button class="btn-yellow" onclick="toast('CV saved!')">Save changes</button><a href="profile.html?id=1" class="btn-outline" style="font-size:12px;padding:6px 12px;">Preview CV</a></div>
      </div>
      <div class="card">
        <div style="font-size:14px;font-weight:700;margin-bottom:8px;">Upload existing CV</div>
        <div style="font-size:13px;color:#777;margin-bottom:10px;">Upload a Word or PDF — we extract details automatically.</div>
        <div style="border:1px dashed #ccc;border-radius:3px;padding:22px;text-align:center;cursor:pointer;" onclick="toast('File upload coming soon')">
          <div style="font-size:26px;margin-bottom:6px;">📎</div>
          <div style="font-size:13px;color:#555;">Click to upload or drag and drop</div>
          <div style="font-size:11px;color:#888;">PDF, Word, plain text</div>
        </div>
      </div>`;

    else if (tab==='messages') main.innerHTML=`
      <div style="font-size:17px;font-weight:700;margin-bottom:14px;">Messages from recruiters</div>
      <div class="notif mb-2">You have 1 new message from ABC Recruitment Ltd.</div>
      <div style="display:grid;grid-template-columns:175px 1fr;border:1px solid #ddd;border-radius:3px;overflow:hidden;min-height:300px;">
        <div style="background:#f9f9f9;border-right:1px solid #ddd;padding:10px;">
          <div style="padding:8px;background:#fff;border:1px solid #1a6fb5;border-radius:2px;cursor:pointer;">
            <div style="font-size:13px;font-weight:700;">ABC Recruitment</div>
            <div style="font-size:11px;color:#777;">Can I arrange a call?</div>
            <div style="font-size:11px;color:#1a6fb5;">New</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;padding:14px;">
          <div style="font-size:13px;font-weight:700;padding-bottom:10px;border-bottom:1px solid #eee;margin-bottom:10px;">ABC Recruitment Ltd</div>
          <div class="msg-thread" id="cand-thread" style="flex:1;">
            <div><div class="msg-them">Hi, we have a Gas Safe role in Trafford, £40k permanent. Interested?</div><div class="msg-time">ABC Recruitment · 2 days ago</div></div>
            <div><div class="msg-me">Thanks! I'd love to hear more. What's the start date?</div><div class="msg-time r">You · 1 day ago</div></div>
          </div>
          <div class="msg-row" style="margin-top:10px;">
            <input type="text" id="cand-msg-inp" placeholder="Reply..."/>
            <button class="btn-blue" onclick="sendCandMsg()">Send</button>
          </div>
        </div>
      </div>`;

    else if (tab==='settings') main.innerHTML=`
      <div style="font-size:17px;font-weight:700;margin-bottom:16px;">Settings &amp; Privacy</div>
      <div class="card mb-2" style="max-width:520px;">
        <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Contact details (hidden from public)</div>
        <div class="form-row"><div class="form-group"><label>Email</label><input type="email" placeholder="your@email.com"/></div><div class="form-group"><label>Phone</label><input type="tel" placeholder="07..."/></div></div>
        <button class="btn-yellow" style="font-size:12px;" onclick="toast('Saved')">Save</button>
      </div>
      <div class="card mb-2" style="max-width:520px;">
        <div style="font-size:14px;font-weight:700;margin-bottom:10px;">Privacy</div>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:8px;cursor:pointer;"><input type="checkbox" checked/> Show CV in search results</label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;margin-bottom:8px;cursor:pointer;"><input type="checkbox" checked/> Allow recruiters to message me</label>
        <label style="display:flex;align-items:center;gap:8px;font-size:13px;cursor:pointer;"><input type="checkbox" checked/> Include in Google / web search</label>
      </div>
      <div class="card" style="max-width:520px;border-color:#f5c6c6;">
        <button class="btn-outline" style="border-color:#c0392b;color:#c0392b;font-size:12px;" onclick="logout()">Sign out</button>
      </div>`;
  };

  window.sendCandMsg = function() {
    const inp=document.getElementById('cand-msg-inp'); if(!inp||!inp.value.trim()) return;
    const thread=document.getElementById('cand-thread');
    const w=document.createElement('div'); w.innerHTML=`<div class="msg-me">${inp.value.trim()}</div><div class="msg-time r">You · just now</div>`;
    thread.appendChild(w); thread.scrollTop=thread.scrollHeight; inp.value='';
  };

  candTab('mycv');
}

// ── JOB BOARD ─────────────────────────────────────────
function renderJobBoard() {
  document.title = 'Job Board — SeeCv';
  const pc = document.getElementById('page-content');
  pc.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
      <div>
        <div style="font-size:18px;font-weight:700;">SeeCv Job Board</div>
        <div style="font-size:13px;color:#777;">seecv.com/jobs — post jobs directly to matching candidates</div>
      </div>
      <button class="btn-yellow" onclick="postJob()">Post a job</button>
    </div>
    <div style="display:flex;gap:8px;margin-bottom:14px;">
      <input type="text" id="job-q" placeholder="Job title, skills..." style="flex:1;" onkeydown="if(event.key==='Enter')filterJobs()"/>
      <input type="text" id="job-loc" placeholder="Location" style="width:180px;" onkeydown="if(event.key==='Enter')filterJobs()"/>
      <button class="btn-gray" onclick="filterJobs()">Search</button>
    </div>
    <div style="display:flex;gap:0;">
      <div style="flex:1;" id="job-list"></div>
      <div style="width:195px;flex-shrink:0;padding-left:18px;border-left:1px solid #e8e8e8;">
        <div class="filter-title">Job type</div>
        <div class="filter-group">
          <label class="filter-opt"><input type="checkbox" checked/> Permanent</label>
          <label class="filter-opt"><input type="checkbox" checked/> Contract</label>
          <label class="filter-opt"><input type="checkbox"/> Temporary</label>
          <label class="filter-opt"><input type="checkbox"/> Freelance</label>
        </div>
        <div class="filter-title">Salary</div>
        <select style="font-size:12px;width:100%;padding:4px;border:1px solid #ccc;border-radius:2px;margin-bottom:14px;">
          <option>Any</option><option>£20k+</option><option>£30k+</option><option>£40k+</option><option>£50k+</option>
        </select>
        <div style="background:#d6eaf8;border-radius:3px;padding:10px;border:1px solid #cde;">
          <div style="font-size:12px;font-weight:700;color:#1a6fb5;margin-bottom:5px;">Are you a recruiter?</div>
          <div style="font-size:11px;color:#555;margin-bottom:8px;">Post jobs and search the full CV database.</div>
          <button class="btn-yellow" style="width:100%;font-size:11px;" onclick="postJob()">Post a job</button>
          <a href="search.html" style="display:block;text-align:center;font-size:11px;margin-top:6px;color:#1a6fb5;">Search CVs →</a>
        </div>
      </div>
    </div>`;
  filterJobs();

  window.filterJobs = function() {
    const q=(document.getElementById('job-q')?.value||'').toLowerCase();
    const loc=(document.getElementById('job-loc')?.value||'').toLowerCase();
    let jobs=[...JOBS];
    if(q) jobs=jobs.filter(j=>j.title.toLowerCase().includes(q)||j.desc.toLowerCase().includes(q)||j.tags.some(t=>t.toLowerCase().includes(q)));
    if(loc) jobs=jobs.filter(j=>j.location.toLowerCase().includes(loc));
    const list=document.getElementById('job-list');
    list.innerHTML=`<div style="font-size:12px;color:#777;margin-bottom:12px;">${jobs.length} job${jobs.length!==1?'s':''} found</div>`+jobs.map(j=>`
      <div style="padding:14px 0;border-bottom:1px solid #e8e8e8;">
        <div style="font-size:17px;color:#1a0dab;cursor:pointer;" onclick="toast('${j.title} at ${j.company}')">${j.title}</div>
        <div style="font-size:13px;color:#555;">${j.company}</div>
        <div style="font-size:12px;color:#777;margin:3px 0;">${j.location} &nbsp;·&nbsp; ${j.salary} &nbsp;·&nbsp; ${j.type} &nbsp;·&nbsp; Posted: ${j.posted}</div>
        <div style="font-size:13px;color:#444;">${j.desc}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${j.tags.map(t=>`<span class="skill-tag">${t}</span>`).join('')}</div>
        <div style="margin-top:8px;display:flex;gap:8px;">
          <button class="btn-yellow" style="font-size:12px;" onclick="applyJob('${j.title}')">Apply now</button>
          <button class="btn-outline" style="font-size:12px;" onclick="toast('Job saved')">Save job</button>
        </div>
      </div>`).join('');
  };
  window.postJob = function() { const u=getUser(); if(!u){openModal('modal-signup');return;} toast('Job posting form coming in next version'); };
  window.applyJob = function(title) { const u=getUser(); if(!u){openModal('modal-signup');return;} toast('Application submitted for '+title); };
}

// ── ADVANCED SEARCH ────────────────────────────────────
function renderAdvanced() {
  document.title = 'Advanced Search — SeeCv';
  document.getElementById('page-content').innerHTML = `
    <div style="font-size:17px;font-weight:700;color:#1a6fb5;margin-bottom:14px;">Advanced Search</div>
    <div style="font-size:13px;color:#777;margin-bottom:16px;">Google-style precision searching — find exactly the right candidate</div>
    <div style="font-size:13px;font-weight:700;color:#1a6fb5;border-bottom:1px solid #dde;padding-bottom:4px;margin-bottom:12px;text-transform:uppercase;letter-spacing:.3px;">Find CVs that have...</div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:8px;"><label style="font-size:13px;color:#555;">All these words:</label><input type="text" id="adv-all" placeholder="e.g. plumber manchester"/></div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:8px;"><label style="font-size:13px;color:#555;">This exact phrase:</label><input type="text" placeholder='e.g. "gas safe registered"'/></div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:16px;"><label style="font-size:13px;color:#555;">One or more of:</label><div style="display:flex;gap:8px;"><input type="text" placeholder="word 1" style="width:auto;flex:1;"/><input type="text" placeholder="word 2" style="width:auto;flex:1;"/><input type="text" placeholder="word 3" style="width:auto;flex:1;"/></div></div>
    <div style="font-size:13px;font-weight:700;color:#1a6fb5;border-bottom:1px solid #dde;padding-bottom:4px;margin-bottom:12px;text-transform:uppercase;letter-spacing:.3px;">But don't show CVs that have...</div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:16px;"><label style="font-size:13px;color:#555;">Unwanted words:</label><input type="text" placeholder="e.g. manager director"/></div>
    <div style="font-size:13px;font-weight:700;color:#1a6fb5;border-bottom:1px solid #dde;padding-bottom:4px;margin-bottom:12px;text-transform:uppercase;letter-spacing:.3px;">Locations</div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:8px;"><label style="font-size:13px;color:#555;">Within radius:</label><div style="display:flex;gap:10px;align-items:center;"><select style="width:auto;padding:5px 8px;"><option>10 miles</option><option selected>25 miles</option><option>50 miles</option><option>Nationwide</option></select><label style="font-size:13px;display:flex;align-items:center;gap:4px;"><input type="radio" name="sc" checked/> All CVs</label><label style="font-size:13px;display:flex;align-items:center;gap:4px;"><input type="radio" name="sc"/> Willing to relocate</label></div></div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:16px;"><label style="font-size:13px;color:#555;">Location:</label><input type="text" id="adv-loc" placeholder="Town, city or postcode"/></div>
    <div style="font-size:13px;font-weight:700;color:#1a6fb5;border-bottom:1px solid #dde;padding-bottom:4px;margin-bottom:12px;text-transform:uppercase;letter-spacing:.3px;">Search criteria</div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:8px;"><label style="font-size:13px;color:#555;">Contract type:</label><select style="width:auto;padding:5px 8px;"><option>Any</option><option>Permanent</option><option>Contract</option><option>Freelance</option><option>Temporary</option></select></div>
    <div style="display:grid;grid-template-columns:185px 1fr;gap:8px;align-items:center;margin-bottom:16px;"><label style="font-size:13px;color:#555;">Minimum salary:</label><select style="width:auto;padding:5px 8px;"><option>Any</option><option>£20,000+</option><option>£30,000+</option><option>£40,000+</option><option>£50,000+</option><option>£60,000+</option></select></div>
    <div style="display:flex;gap:8px;">
      <button class="btn-yellow" onclick="advSearch()">Search CVs</button>
      <button class="btn-outline" onclick="document.querySelectorAll('#page-content input[type=text]').forEach(i=>i.value='')">Clear all</button>
    </div>`;
  window.advSearch = function() {
    const q=document.getElementById('adv-all').value.trim();
    const loc=document.getElementById('adv-loc').value.trim();
    window.location.href='search.html?q='+encodeURIComponent(q)+'&loc='+encodeURIComponent(loc);
  };
}

// ── ABOUT ─────────────────────────────────────────────
function renderAbout() {
  document.title = 'About SeeCv';
  document.getElementById('page-content').innerHTML = `
    <div style="font-size:18px;font-weight:700;color:#1a6fb5;margin-bottom:14px;">About SeeCv</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-bottom:22px;">
      <div><div style="font-size:14px;font-weight:700;margin-bottom:8px;">What is SeeCv?</div><p style="font-size:13px;color:#555;line-height:1.7;">SeeCv is an online multimedia CV database designed for anyone and everyone — not just white-collar professionals. From tradespeople to students, artists to freelancers, anyone with a skill can create a free profile with photos and video.</p></div>
      <div><div style="font-size:14px;font-weight:700;margin-bottom:8px;">Why SeeCv?</div><p style="font-size:13px;color:#555;line-height:1.7;">Traditional job boards are text-heavy, expensive and built for office workers only. SeeCv cuts out the middleman. Search is free. Only pay £1 when you find someone you want to contact. No subscriptions, no monthly fees.</p></div>
    </div>
    <div style="background:var(--sky,#d6eaf8);border:1px solid #cde;border-radius:4px;padding:22px;text-align:center;margin-bottom:22px;">
      <div style="font-size:20px;font-weight:700;color:#1a6fb5;margin-bottom:6px;">"Power to the people..."</div>
      <p style="font-size:13px;color:#555;margin-bottom:14px;">Create your free multimedia CV. Add photos, video and your full story. Let the world discover you.</p>
      <button class="btn-yellow" onclick="openModal('modal-signup')">Sign up free</button>
    </div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;">
      <div class="card"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">Multimedia CVs</div><p style="font-size:12px;color:#777;">Photos, videos and portfolios — see people's work, not just words on a page.</p></div>
      <div class="card"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">Pay as you go</div><p style="font-size:12px;color:#777;">Search free forever. Only pay £1 per contact. No subscriptions.</p></div>
      <div class="card"><div style="font-size:13px;font-weight:700;margin-bottom:5px;">For everyone</div><p style="font-size:12px;color:#777;">Tradespeople, students, creatives, professionals. Every skill, every sector.</p></div>
    </div>`;
}

// ── HELP ──────────────────────────────────────────────
function renderHelp() {
  document.title = 'Help — SeeCv';
  document.getElementById('page-content').innerHTML = `
    <div style="font-size:18px;font-weight:700;color:#1a6fb5;margin-bottom:16px;">Help &amp; FAQs</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px;">
      <div>
        <div style="font-size:13px;font-weight:700;color:#1a6fb5;margin-bottom:10px;">For Candidates</div>
        ${[['Is it free to create a CV?','Yes — completely free for candidates, forever. No hidden charges.'],
           ['Who can see my contact details?','Your phone and email are always hidden. Only recruiters who have purchased your CV can see them.'],
           ['Can I have more than one CV?','Yes — up to 5 CV profiles for different roles or industries.'],
           ['Can I upload photos and videos?','Yes — photos, work images, portfolio pieces and a 30-second pitch video.'],
           ['Can I hide my CV?','Yes — set to hidden at any time in your account settings.']
        ].map(([q,a])=>`<div style="border:1px solid #ddd;border-radius:3px;margin-bottom:5px;overflow:hidden;"><div style="padding:10px 12px;font-size:13px;font-weight:700;background:#fafafa;cursor:pointer;display:flex;justify-content:space-between;" onclick="this.nextElementSibling.classList.toggle('open');this.querySelector('.fa').textContent=this.nextElementSibling.classList.contains('open')?'▲':'▼';">${q} <span class="fa">▼</span></div><div style="display:none;padding:9px 12px;font-size:13px;color:#555;">${a}</div></div>`).join('')}
      </div>
      <div>
        <div style="font-size:13px;font-weight:700;color:#1a6fb5;margin-bottom:10px;">For Recruiters</div>
        ${[['How much does searching cost?','Searching is completely free. You only pay when you want to contact someone.'],
           ['How much does contacting cost?','From £1 per CV. Buy credits in bulk — 10 for £30, 25 for £50, 50 for £80, 100 for £130. Credits never expire.'],
           ['Do I need to sign up to search?','No — guests can search and view CVs freely. Sign up only to purchase, save or create alerts.'],
           ['Is there a money-back guarantee?','Yes — if contact details are out of date we\'ll refund your credit, no questions asked.'],
           ['Can I share a shortlist?','Yes — use the Share basket feature to send a link of your shortlisted CVs to a colleague.']
        ].map(([q,a])=>`<div style="border:1px solid #ddd;border-radius:3px;margin-bottom:5px;overflow:hidden;"><div style="padding:10px 12px;font-size:13px;font-weight:700;background:#fafafa;cursor:pointer;display:flex;justify-content:space-between;" onclick="this.nextElementSibling.classList.toggle('open');this.querySelector('.fa').textContent=this.nextElementSibling.classList.contains('open')?'▲':'▼';">${q} <span class="fa">▼</span></div><div style="display:none;padding:9px 12px;font-size:13px;color:#555;">${a}</div></div>`).join('')}
      </div>
    </div>
    <div style="text-align:center;padding:24px 0;border-top:1px solid #eee;margin-top:20px;">
      <div style="font-size:13px;font-weight:700;margin-bottom:5px;">Still need help?</div>
      <a href="mailto:help@seecv.com" style="color:#1a6fb5;font-size:13px;">help@seecv.com</a>
    </div>`;
}
