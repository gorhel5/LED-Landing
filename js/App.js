import Slider from './Swiper.js';
import Price from './Config.js';

const price = document.querySelector('.price'); 
const pst2 = document.querySelector('.pst2') // цена за две штуки со скидкой
const pst3 = document.querySelector('.pst3') // цена за три штуки со скидкой
const pst4 = document.querySelector('.pst4') // цена за четыре штуки со скидкой

function bannerPrice () {
    price.textContent = Price.PRICE;
    pst2.textContent = ( Price.PRICE * 2 ) - Price.DISCOUNT;
    pst3.textContent = ( Price.PRICE * 3 ) - Price.DISCOUNT * 2;
    pst4.textContent = ( Price.PRICE * 4 ) - Price.DISCOUNT * 3;
}

Slider();
bannerPrice();
console.log(Price.DISCOUNT)