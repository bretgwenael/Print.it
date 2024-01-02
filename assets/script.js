const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentSlideIndex = 0;

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot');

const bannerImage = document.querySelector('.banner-img');
const tagline = document.querySelector('#banner p');

function updateSlide() {
    bannerImage.src = slides[currentSlideIndex].image;
    tagline.innerHTML = slides[currentSlideIndex].tagLine;

    dots.forEach((dot, index) => {
        if (index === currentSlideIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

arrowLeft.addEventListener('click', function(event) {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateSlide();
});

arrowRight.addEventListener('click', function(event) {
    currentSlideIndex = (currentSlideIndex + 1 ) % slides.length;
    updateSlide();
});

updateSlide();


