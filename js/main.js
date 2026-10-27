// মোবাইল মেনু
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// প্রজেক্ট কার্ড (index পেজে)
const grid = document.getElementById('projectGrid');
if (grid && typeof PROJECTS !== 'undefined') {
  grid.innerHTML = PROJECTS.map(p => `
    <article class="p-card reveal">
      <img src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="p-body">
        <h3>${p.name}</h3>
        <div class="tags">${p.stack.slice(0,3).map(s => `<span>${s}</span>`).join('')}</div>
        <p>${p.short}</p>
        <a class="btn ghost" href="project.html?id=${p.id}">View Details →</a>
      </div>
    </article>`).join('');
}

// টাইপিং এফেক্ট
const typed = document.getElementById('typed');
if (typed) {
  const words = ['Full Stack Developer', 'Next.js & React Developer', 'AI-Driven Web Builder'];
  let w = 0, c = 0, del = false;
  (function tick() {
    const word = words[w];
    typed.textContent = word.slice(0, c);
    if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
    if (del && c === 0) { del = false; w = (w + 1) % words.length; }
    c += del ? -1 : 1;
    setTimeout(tick, del ? 45 : 85);
  })();
}

// স্ক্রল অ্যানিমেশন + স্কিল বার
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('show');
    e.target.querySelectorAll?.('.bar i').forEach(b => b.style.width = b.dataset.w + '%');
    io.unobserve(e.target);
  });
}, { threshold: 0.01, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// নেভবারে active লিংক
const sections = document.querySelectorAll('main section[id]');
const links = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

// ফর্ম: mailto খুলবে (ব্যাকএন্ড লাগে না)
const form = document.getElementById('contactForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const body = encodeURIComponent(`${d.get('message')}\n\n— ${d.get('name')} (${d.get('email')})`);
  location.href = `mailto:saqlainsami982@gmail.com?subject=${encodeURIComponent('Portfolio Contact')}&body=${body}`;
});

// প্রজেক্ট ডিটেইল পেজ
const detail = document.getElementById('detail');
if (detail && typeof PROJECTS !== 'undefined') {
  const id = new URLSearchParams(location.search).get('id');
  const p = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  document.title = p.name + ' | B. M. Golam Saqlaine Sami';
  const li = arr => arr.map(x => `<li>${x}</li>`).join('');
  detail.innerHTML = `
    <a class="back" href="index.html#projects">← Back to Projects</a>
    <h1>${p.name}</h1>
    <div class="tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
    <img class="cover" src="${p.image}" alt="${p.name} screenshot">
    ${p.gallery && p.gallery.length ? `<div class="gallery">${p.gallery.map((g, i) => `<img src="${g}" alt="${p.name} screenshot ${i + 2}" loading="lazy">`).join('')}</div>` : ''}
    <div class="d-grid">
      <div>
        <div class="d-block"><h3>Brief Description</h3><p>${p.description}</p></div>
        <div class="d-block"><h3>Challenges Faced</h3><ul>${li(p.challenges)}</ul></div>
        <div class="d-block"><h3>Future Plans & Improvements</h3><ul>${li(p.future)}</ul></div>
      </div>
      <aside>
        <div class="d-block"><h3>Main Technology Stack</h3><ul>${li(p.stack)}</ul></div>
        <div class="side-links">
          <a class="btn primary" href="${p.live}" target="_blank" rel="noopener">🔗 Live Project</a>
          <a class="btn ghost" href="${p.github}" target="_blank" rel="noopener">GitHub Repository (Client)</a>
        </div>
      </aside>
    </div>`;
}

// Failsafe: কোনো কারণে অবজার্ভার না চললেও কনটেন্ট যেন লুকিয়ে না থাকে
setTimeout(() => document.querySelectorAll('.reveal:not(.show)').forEach(el => { el.classList.add('show'); el.querySelectorAll('.bar i').forEach(b => b.style.width = b.dataset.w + '%'); }), 4000);
