const navToggleBtn = document.querySelector('.navigation-toggle');
const siteNav = document.querySelector('.site-navigation')

navToggleBtn.addEventListener('click', (evt) => {
    if (siteNav.classList.contains('site-navigation--closed')) {
        siteNav.classList.remove('site-navigation--closed')
        siteNav.classList.add('site-navigation--opened')
    } else {
        siteNav.classList.remove('site-navigation--opened')
        siteNav.classList.add('site-navigation--closed')
    }
})