let btnRight = document.querySelector(".carousel__button_to-right");
let slides = document.querySelectorAll(".carousel__item");
let i = 0;
 
btnRight.addEventListener("click", function () {
    ++i;
    if (i >= slides.length) {
        slides[i-1].classList.remove("carousel__item_visible");
        i = 0;
        slides[i].classList.add("carousel__item_visible");
    } else {
        slides[i-1].classList.remove("carousel__item_visible");
        slides[i].classList.add("carousel__item_visible");
    }
});