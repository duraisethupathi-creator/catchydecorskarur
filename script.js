const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');
if (menuButton) menuButton.addEventListener('click', () => { const isOpen = navLinks.classList.toggle('open'); menuButton.setAttribute('aria-expanded', isOpen); });



document.querySelector('.contact-form form')?.addEventListener('submit', (event) => {
  event.preventDefault(); document.querySelector('.form-status').style.display = 'block'; event.currentTarget.reset();
});
