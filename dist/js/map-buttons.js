const mapButtons = document.querySelectorAll('.map-section__button');

let activeMapButton = null;

function toggleActive() {
    if (activeMapButton) {
        activeMapButton.classList.remove('map-section__button_current');
    }
    this.classList.add('map-section__button_current');
    activeMapButton = this;
}

mapButtons.forEach(filter => filter.addEventListener('click', toggleActive));