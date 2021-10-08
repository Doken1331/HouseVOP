const btnToggler = document.querySelector('.navbar__toggler');
const show = document.querySelector('.mobile-wrap');
const navbarScroll = document.querySelector('.navbar');

btnToggler.addEventListener('click', () => {
    btnToggler.classList.toggle('navbar__toggler_active');
    show.classList.toggle('mobile-wrap_show');
})

window.onscroll = () => {
    if (window.pageYOffset > 50) {
        navbarScroll.classList.add('navbar_active');
    } else {
        navbarScroll.classList.remove('navbar_active');
    }
}