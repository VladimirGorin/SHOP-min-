let position = 0;
const slidesToShow = 4;
const slideToScroll = 1;
const container = document.querySelector('.container__slider');
const track = document.querySelector('.container__slider-track');
const items = document.querySelectorAll('.container__sliderItem');
// const item = document.querySelector('.container__sliderItem');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slideToScroll * itemWidth;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
});


btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtms();
});

btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtms();
});

const setPosition = () => {
    track.style,transfrom =  `translateX(${position}px)`;

}
const checkBtms = () => {
    btnPrev.disablded = position === 0;
    btnNext.disablded = position <= -(itemsCount - slidesToShow) * itemWidth

}
checkBtms();
