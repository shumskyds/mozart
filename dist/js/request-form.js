const sendRequestButtons = document.querySelectorAll('.footer-form-button');

sendRequestButtons.forEach((i) => {
    i.addEventListener('click', (() => {
        const requestForm = document.querySelector('#footer-request-form');
        const sendAgainWindow = document.querySelector('#send-again-window');

        requestForm.classList.toggle('display-none');
        sendAgainWindow.classList.toggle('display-none');
    }));
});