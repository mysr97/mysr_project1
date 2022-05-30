//처음 화면 진입시 적용
if (window.matchMedia("(min-width: 1200px)").matches) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3.5, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    });
} else if (window.matchMedia("(min-width: 700px)").matches) { 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2.3, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    }); 
} else { 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1.4, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    }); }

//리사이즈시 적용
$(window).resize(function(){
    if (window.matchMedia("(min-width: 1200px)").matches) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3.5, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    });
} else if (window.matchMedia("(min-width: 700px)").matches) { 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2.3, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    }); 
} else { 
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 1.4, // 몇개 보이게 할 건지
        paginationClickable: true,
        spaceBetween: 50, //슬라이드 간격
        loop: true, // 처음~끝 반복 여부
        centeredSlides: true,
        autoplay: 2500, // 오토플레이 진행 속도
        autoplayDisableOnInteraction: false  
    }); }
});
