const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
console.log(openMenuBtn);

openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('is-open');
  };