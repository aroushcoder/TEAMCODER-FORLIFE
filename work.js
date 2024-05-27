"use strict";
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.top = 50 + value * -.1 + '%';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * 2 + 'px';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -.12 + 'px';
    forest.style.top = value * .25 + 'px';
    header.style.top = value * .5 + 'px';
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const target = this.getAttribute('data-target');
        scrollToSection(target);
    });
});

// Function to scroll to a specific section
function scrollToSection(sectionClass) {
    // Get the position of the target section
    const section = document.querySelector('.' + sectionClass);
    const sectionPosition = section.offsetTop;

    // Scroll to the section's position
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}