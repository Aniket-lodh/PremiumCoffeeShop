/*=============== LOADER ===============*/
const load = document.getElementById('load');

/* Lock scrolling while the loader is visible (fail-safe: only via JS,
   so the page still scrolls if scripts are disabled). */
document.body.classList.add('no-scroll');

let loaderHidden = false;

function hideLoader() {
    if (loaderHidden) return;
    loaderHidden = true;
    if (load) load.classList.add('load--hidden');
    document.body.classList.remove('no-scroll');
}

/* Hide once everything (incl. images) has loaded… */
window.addEventListener('load', () => {
    /* small, pleasant minimum so the brand moment is not jarring */
    setTimeout(hideLoader, 600);
});

/* …and a hard fail-safe so the page is never stuck behind the loader. */
setTimeout(hideLoader, 4000);


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    document.getElementById('nav-menu').classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*=============== MIXITUP FILTER PRODUCTS ===============*/
let mixerProduct = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter */
mixerProduct.filter('.delicacies');

/*=============== ACTIVE PRODUCT LINK ===============*/
const linkProducts = document.querySelectorAll('.products__item');

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove('active-product'));
    this.classList.add('active-product');
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts));


/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
    const scrollUpBtn = document.getElementById('scroll-up');
    if (window.scrollY >= 650)
        scrollUpBtn.classList.add('show-scroll');
    else
        scrollUpBtn.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        /* Null-safe: not every section needs a matching nav link */
        const navTarget = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
        if (!navTarget) return;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            navTarget.classList.add('active-link');
        else
            navTarget.classList.remove('active-link');
    });
}

window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealItems.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealItems.forEach(item => revealObserver.observe(item));
} else {
    /* Fallback: never leave content hidden if the API is unavailable */
    revealItems.forEach(item => item.classList.add('reveal--visible'));
}
