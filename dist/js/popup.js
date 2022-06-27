const popupCall = document.querySelector('.header__button');
const popupClose = document.querySelector('.request-popup__close');
const popupWindow = document.querySelector('.header__popup');
const popupSubmitButtons = document.querySelectorAll('.request-popup__button');

popupCall.addEventListener('click', () => {
    popupWindow.classList.remove('display-none');
});

popupClose.addEventListener('click', () => {
    popupWindow.classList.add('display-none');
});

popupSubmitButtons.forEach((i) => {
    i.addEventListener('click', (() => {
        const popupForm = document.querySelector('.request-popup__form');
        const popupSendAgain = document.querySelector('.request-popup__send-again');

        popupForm.classList.toggle('display-none');
        popupSendAgain.classList.toggle('display-none');
    }));
});


