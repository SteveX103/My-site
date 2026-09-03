// Optional: creates the soft cursor-glow effect used by .cursor-glow in premium-upgrade.css
// Add before </body>: <script src="assets/js/cursor-glow.js"></script>
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}
