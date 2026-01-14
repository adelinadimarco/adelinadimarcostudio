const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  navList.classList.toggle("active");
})
