'use strict';

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = menuToggle.querySelector("i");
const header = document.querySelector("header");

const navItems = document.querySelectorAll('.nav-links a');

const emailButtons = document.querySelectorAll(".copy-email-btn");
const email = 'cescastillo9@gmail.com';

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


// ======= COPY EMAIL ======= //

async function copyEmail () {
    try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied!');
    } catch (error) {
        showToast('Could not copy email');
    }
}

// ======= TOAST ======= //

function showToast(message) {
    const toast = document.createElement('div');

    toast.classList.add('toast');
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(()=> {
        toast.classList.add('show');
    }, 10);

    setTimeout(()=> {
        toast.classList.remove('show');

        setTimeout(()=> {
            toast.remove();
        }, 300);
    }, 2500);
}

emailButtons.forEach((button) => {
    button.addEventListener("click", copyEmail);
});