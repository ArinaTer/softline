import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function sliders() {
    var swiper = new Swiper(".gallery-swiper", {
        modules: [Navigation, Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".gallery-swiper__pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".gallery-swiper__nav-next",
            prevEl: ".gallery-swiper__nav-prev"
        }
    });
}
