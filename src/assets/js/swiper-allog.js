// $(document).ready(function () {
    //initialize swiper when document ready  
//window.onload = 
function swiperLoad() {
    console.log();
    let slidesPerView = 3;
    if ((window.screen.width<750) && (window.screen.width>450)) slidesPerView = 2;
    if (window.screen.width<=450) slidesPerView = 1;
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: slidesPerView,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
}
//});
