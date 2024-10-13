/*====================== LOADER =====================*/
onload = () => {
    const load = document.getElementById('load');
    setTimeout(() => {
        load.style.display = "none";
        load.style.zIndex = '0';
        document.documentElement.style.overflow = 'auto';
    }, 2500)
}


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50)
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

/*=== DEFAULT FILTER PRODUCTS ===*/
mixerProduct.filter('.delicacies')

/*=============== LINK ACTIVE PRODUCTS ===============*/
const linkProducts = document.querySelectorAll(".products__item");

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-product');
}

linkProducts.forEach(l => l.addEventListener('click', activeProducts))


/*=============== SHOW SCROLL UP BUTTON ===============*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // WHEN THE SCROLL IS HIGHER THAN 350 VIEWPORT HEIGHT,
    // ADD THE show-scroll CLASS IF HIGHER
    // ELSE REMOVE THE show-scroll
    if (this.scrollY >= 650)
        scrollUp.classList.add('show-scroll');
    else
        scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);


/*=============== SHOW SCROLL ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    })
}

window.addEventListener('scroll', scrollActive);