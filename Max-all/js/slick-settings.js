$(document).ready(function() {
    $('.popup-free').magnificPopup({
//        gallery: {
//            enabled: true
//        }
    });
    $('.port_item_cont').click(function() {
            $('.wis-popup').slick('reinit');

    });
    
    $('.port_item_cont').click(function() {
            $('.wp2').slick('reinit');

    });
    
//         $('.mfp-prevent-close').on(function() {
//            $('.wis-popup').slick('reinit');
//    });
     



    $('.wis-popup').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});