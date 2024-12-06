let burgerBtn = document.querySelector('.burger__btn');
let burgerMenu = document.querySelector('.burger__list');

function toggleMenu() {
  burgerBtn.classList.toggle('open');
  burgerMenu.classList.toggle('menu-active');
}
burgerBtn.addEventListener('click', toggleMenu);
burgerMenu.addEventListener('click', toggleMenu);
