const TELEGRAM_BOT_TOKEN = '6341621577:AAE0IIhSU1ZguHW3kxXU4-gZK2FE_PaybKY';
const TELEGRAM_CHAT_ID = '-1001802348533';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const form = document.querySelector('.form-block');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formButton = document.querySelector('.submit-btn');

    const formData = new FormData(form);
    const { quantity, name, phone } =  Object.fromEntries(formData.entries())

    const text = `*❗️Новый заказ❗️*\n\n_👤 Имя:_ *${name}*\n_⚙️ Количество:_ *${quantity}*\n_📱 Номер телефона:_ *${phone}*`;

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
            alert('ok');
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
