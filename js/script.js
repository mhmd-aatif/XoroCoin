'use strict';

const year = document.querySelector('.year');

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Mobile navigation functionality
const headerEl = document.querySelector('header');
const btnNavEl = document.querySelector('.btn-mobile-nav');

btnNavEl.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

// Close mobile navigation
const mainNavLinks = document.querySelectorAll('.main-nav-link');

mainNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (link.classList.contains('main-nav-link'))
            headerEl.classList.toggle('nav-open');
    });
});
