const accordionButtons = document.querySelectorAll('.specs__button');

accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        const accordionText = button.previousElementSibling;
        const accordionItem = button.parentNode;

        if (accordionText.classList.contains('specs__descr_current') &&
            accordionItem.classList.contains('specs__item_current')) {

            accordionText.classList.remove('specs__descr_current');
            accordionItem.classList.remove('specs__item_current');

        } else {

            document.querySelectorAll('.specs__item').forEach((item) => {
                item.classList.remove('specs__item_current');
                accordionItem.classList.add('specs__item_current');
            });
            document.querySelectorAll('.specs__descr').forEach((text) => {
                text.classList.remove('specs__descr_current');
                accordionText.classList.add('specs__descr_current');
            });

        }
    });
});