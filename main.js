const toggleBtn = document.querySelector('.menu-toggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('mobile-menu');
});