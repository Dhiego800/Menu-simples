const $ = document.querySelector.bind(document);
const menu = $('.menu');
const btnMenuOpen = $('.btnMenu_open');
const btnMenuClose = $('.btnMenu_close');

btnMenuOpen.addEventListener('click', function() {
    menu.classList.add('menu_open');
});

btnMenuClose.addEventListener('click', function() {
    menu.classList.remove('menu_open');
});