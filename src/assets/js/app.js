import Swiper from './lib/swiper-bundle.min';

new Swiper(".swiper-popular", {
    slidesPerView: 'auto',
    speed: 700,
    loop: true,
    navigation: {
        nextEl: ".popular__arr.right",
        prevEl: ".popular__arr.left",
    },
});
new Swiper(".swiper-food", {
    slidesPerView: 'auto',
    speed: 700,
    loop: true,
    navigation: {
        nextEl: ".food__arr.right",
        prevEl: ".food__arr.left",
    },
});
