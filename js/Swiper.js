import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

export default function Slider() {

  
  const swiper = new Swiper(".swiper1", {
    
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: {
        el: '.swiper-miniature',
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: false,
        watchSlidesProgress: true,
      }
    },
  });

  const swiper2 = new Swiper('.swiper2', {
    
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: {
        el: '.swiper-miniature-2',
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: false,
        watchSlidesProgress: true,
      }
    },
  })

}

