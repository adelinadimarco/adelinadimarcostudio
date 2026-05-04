const toggleBtn = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});