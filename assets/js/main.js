// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger toggle - also shows/hides socials on mobile
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
  const s = document.getElementById('navSocials');
  if (s) s.classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  const s = document.getElementById('navSocials');
  if (s) s.classList.remove('open');
}
document.addEventListener('click', (e) => {
  const nl = document.getElementById('navLinks');
  const hm = document.getElementById('hamburger');
  if (nl && nl.classList.contains('open') && !nl.contains(e.target) && !hm.contains(e.target)) { closeNav(); }
});

// Active nav link
(function () {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
