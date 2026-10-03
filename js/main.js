'use strict';

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");
const header = document.querySelector("header");

const navItems = document.querySelectorAll('.nav-links a');

// ======= MENU BURGER ======= //

function openMenu() {
    document.body.classList.add("menu-open");
    header.classList.add('menu-open');
    navLinks.classList.add('active');

    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Close navigation menu');

    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
}

function closeMenu() {
    document.body.classList.remove("menu-open");
    header.classList.remove('menu-open');
    navLinks.classList.remove('active');

    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation menu');

    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
}

menuToggle.addEventListener( 'click', () => {
    const menuIsOpen = navLinks.classList.contains('active');

    if(menuIsOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

navItems.forEach((navItem) => {
    navItem.addEventListener('click', closeMenu);
});