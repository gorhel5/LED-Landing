import Slider from './Swiper.js';
import Price from './Config.js';

const price = document.querySelector('.price-text_right'); 
const pst2 = document.querySelector('.pst2') // цена за две штуки со скидкой

function bannerPrice () {
    price.textContent = Price.PRICE;
    pst2.textContent = ( Price.PRICE * 2 ) - Price.DISCOUNT;
}

Slider();
bannerPrice();
console.log(Price.DISCOUNT)