const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
if (menuButton) menuButton.addEventListener('click', () => { const isOpen = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); });

const ring = document.querySelector('.gallery-ring');
let rotation = 0;
function spinGallery(direction) { if (!ring) return; rotation += direction * 72; ring.style.setProperty('--rot', `${rotation}deg`); }
document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => spinGallery(-1));
document.querySelector('[data-gallery-next]')?.addEventListener('click', () => spinGallery(1));
let autoSpin;
if (ring) { autoSpin = setInterval(() => spinGallery(1), 4200); ring.closest('.gallery-stage').addEventListener('mouseenter', () => clearInterval(autoSpin)); }

document.querySelector('.contact-form form')?.addEventListener('submit', (event) => {
  event.preventDefault(); document.querySelector('.form-status').style.display = 'block'; event.currentTarget.reset();
});
