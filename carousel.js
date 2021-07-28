const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel_btn--right');
const prevButton = document.querySelector('.carousel_btn--left');

const carousel_nav = document.querySelector('.carousel_navig');
const nav_items = Array.from(carousel_nav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

const moveToSlide = () => {
    track.style.transform = 'translateX(' + nextSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    nextSlide.classList.add('current_slide');

}

slides.forEach(setSlidePosition);
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    const displacement = nextSlide.style.left;

})