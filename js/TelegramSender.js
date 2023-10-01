const TELEGRAM_BOT_TOKEN = '6283383746:AAFgnXaRCgS7FFys8nofxZ24dJtTBmveIYM';
const TELEGRAM_CHAT_ID = '-1001612916388';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const form = document.querySelector('.form-block');
const phoneInput = document.querySelector('.phone');
const nameInput = document.querySelector('.name');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

const maskOption = {
    mask: '+{38}(000)000-00-00',
    lazy: false,
}

popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})



let mask = new IMask(phoneInput, maskOption);


form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formButton = document.querySelector('.submit-btn');

    const formData = new FormData(form);
    const { quantity, name, phone } =  Object.fromEntries(formData.entries())

    const text = `*❗️Новый заказ❗️*\n\n_👤 Имя:_ *${name}*\n_⚙️ Количество:_ *${quantity}*\n_📱 Номер телефона:_ *${phone}*`;

    // if ( nameInput.value === '' ) {
    //     nameInput.classList.add('error-input');
    //     return false
    // } else {
    //     nameInput.classList.remove('error-input');
    // }

    

    if ( nameInput.value === '' && phoneInput.value.includes('_') === true) {
        nameInput.classList.add('error-input');
        phoneInput.classList.add('error-input');
        return false
    } else {
        nameInput.classList.remove('error-input');
        phoneInput.classList.remove('error-input');
    }

    if ( phoneInput.value.includes('_') === true ) {
        phoneInput.classList.add('error-input');
        return false
    } else {
        phoneInput.classList.remove('error-input');
    }

    if ( nameInput.value === '' ) {
        nameInput.classList.add('error-input');
        return false
    } else {
        nameInput.classList.remove('error-input');
    }
    

    try {
        formButton.textContent = 'Відправка...'
        let response = await fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
                parse_mode: 'markdown',
            })
        })

        if (response.ok) {
            popup.style.display = 'block';
            form.reset();
        } else {
            throw new Error(response.statusText)
        }

    } catch (error) {
       console.error(error);
    } finally {
        formButton.textContent = 'замовити зараз'
    }


})
