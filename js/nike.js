const carousel = document.querySelector(".carousel");
const btnsProgress = document.querySelectorAll(".shoes-wrapper i");
const slideWidth = carousel.querySelector(".slide").offsetWidth;

btnsProgress.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "nike-left" ? - slideWidth : slideWidth;
    })
})