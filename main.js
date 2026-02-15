const menuToggle = document.getElementById('menuToggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('open');
  menuItems.classList.toggle("active");
})
