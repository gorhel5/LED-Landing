function scrollHandler(e) {
    const btn = document.querySelectorAll('.scroll');
    const form = document.querySelector('.form__title');
    btn.forEach(el => {
        el.addEventListener('click', () => {
            form.scrollIntoView();
        })
    })
}
 
export default scrollHandler;