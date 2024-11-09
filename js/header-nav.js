const nav = document.querySelector('.header-nav');
const closeBtn = nav.querySelector('.header-nav__close');
const openBtn = document.querySelector('.header__nav-btn');

closeBtn.addEventListener('click', function () {
    nav.classList.remove('header-nav--is-open');
    document.body.classList.remove('menu-is-open');
});

openBtn.addEventListener('click', function () {
    nav.classList.add('header-nav--is-open');
    document.body.classList.add('menu-is-open');
});