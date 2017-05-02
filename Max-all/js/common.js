// preloader

$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})

// preloader

// pagescroll
$(document).ready(function() {
    $("a[href*='#']").mPageScroll2id({

    });
});
//pagescroll end

$(document).ready(function() {

    $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

    $(".top_mnu ul a").mPageScroll2id();

    //
});
// адаптивное меню
$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".mobile").slideToggle();
        return false;
    });

});
//
// смена ефектов при наведении на пункты меню
$(".top_mnu li a").click(function() {
    $(".top_mnu").fadeOut(600);
    $(".top_text").removeClass("h_opacify");
    $(".sandwich").toggleClass("active");
}).append("<span>");

$(".toggle_mnu").click(function() {
    if ($(".top_mnu").is(":visible")) {
        $(".top_mnu").fadeOut(600);
        $(".top_mnu li a").removeClass("fadeInUp animated");
        $(".top_text").removeClass("h_opacify");
    } else {
        $(".top_mnu").fadeIn(600);
        $(".top_mnu li a").addClass("fadeInUp animated");
        $(".top_text").addClass("h_opacify");
    }
});
//
// loader при загрузке страницы
$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});


$(document).load(function() {
    var $container = $(".masonry-container");
    $container.imagesLoaded(function() {
        $container.masonry({
            columnWidth: ".grid-sizer",
            itemSelector: ".item"
        });
    });

});

$(document).ready(function () {
   $('.popup-free').magnificPopup(); 
});



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

$(document).ready(function(){
  $('.wrap-img-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

// search toggle

$(document).ready(function(){
      $('.search2').click(function(){
          $(this).next('.login-content2').slideToggle();
        });
});

// search toggle