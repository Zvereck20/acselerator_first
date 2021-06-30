// Navigation block

const body = document.querySelector('body')
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation--nojs');

const existVerticalScroll = () => {
  return document.body.offsetHeight > window.innerHeight
}

const getBodyScrollTop = () => {
  return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
}

navToggle.addEventListener('click', function () {

  body.dataset.scrollY = getBodyScrollTop();

  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');

    if (existVerticalScroll()) {
      body.classList.add('body-lock')
      body.style.top = `-${body.dataset.scrollY}px`
    }

  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');

    if (existVerticalScroll()) {
      body.classList.remove('body-lock')
      window.scrollTo(0, body.dataset.scrollY)
    }
  }
});

const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');

    if (existVerticalScroll()) {
      body.classList.remove('body-lock')
      window.scrollTo(0, body.dataset.scrollY)
    }
  })
})

const rep = document.querySelector('#telephone');

rep.setCustomValidity('Введите данные в формате +7 (XXX)-XXX-XX-XX');
