const slider = document.querySelector('.slider');

const slides = document.querySelectorAll('.slide');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let current = 0;

function updateSlider(){

    slider.style.transform =
    `translateX(-${current * 100}%)`;

}

next.addEventListener('click', () => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    updateSlider();

});

prev.addEventListener('click', () => {

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    updateSlider();

});

/* AUTO SLIDE */

setInterval(() => {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    updateSlider();

}, 7000);

/* MOBILE MENU */

const menuToggle =
document.querySelector('.menu-toggle');

const mobileMenu =
document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');

});