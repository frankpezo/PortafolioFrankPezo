//1. Creamos un nuevo objeto Swipper que contendrá el slide-container
var swiper = new Swiper(".slide-container", {
    //1.1. Agregamos la previluacización, es decir, cuántos card queremos ver
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    loop: true,
    centerSlider: "true",
    fade: "true",
    grabCursor: "true",
    //loopFillGrouWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        }
    }
});