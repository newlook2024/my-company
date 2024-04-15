$(function () {
    var swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: false,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });


    var swiperImage = new Swiper('.swiper-image', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    var swiperImage2 = new Swiper('.swiper-image-2', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
        loop: true,
        // If we need pagination
        pagination: {
            enabled: false,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});

