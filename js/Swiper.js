// import Swiper JS
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'
// import Swiper styles

const swiperMin = new Swiper('.swiper-miniature', {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: false,
    watchSlidesProgress: true,

}) 

const swiper = new Swiper('.swiper', {

    loop: true,
    

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {
        
        swiper: swiperMin
    }


});