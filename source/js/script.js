// Navigation block

const body = document.querySelector('main')
const header = document.querySelector('header');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');
header.classList.remove('header--nojs')

navToggle.addEventListener('click', function () {

  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
    body.classList.add('body-lock')
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
    body.classList.remove('body-lock')
  }
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (!navMain.classList.contains('navigation--closed')) {
      navMain.classList.remove('navigation--opened');
      navMain.classList.add('navigation--closed');
      body.classList.remove('body-lock')
    }
  }
});

const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
    body.classList.remove('body-lock')
  })
})

const rep = document.querySelector('#telephone');

rep.setCustomValidity('Введите данные в формате +7 (XXX)-XXX-XX-XX');
