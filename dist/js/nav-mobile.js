const buttonExpand = document.querySelector('.main-nav__expand');

buttonExpand.addEventListener('click', () => {
    const menuMobileVisibility = document.querySelector('.main-nav__list').style;

    if (menuMobileVisibility.display === 'flex') {
        menuMobileVisibility.display = 'none';
    } else {
        menuMobileVisibility.display = 'flex';
    }
});