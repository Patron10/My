$(document).ready(function() {

    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".hidden-mnu").slideToggle();
        return false;
    });
    
});


$(document).ready(function() {
   $("a[href*='#']").mPageScroll2id({
       offset: 42
   });
});


$(document).ready(function() {
   $(window).resize(function () {
    var width = $('body').innerWidth()
        if (width < 992) {
            $('.ws2').addClass('swap-hr');
        } else {
            $('.ws2').removeClass('swap-hr')
        }
    }); 
});

$(document).ready(function() {
    $('.circlestat').circliful();
});

$(document).ready(function() {
    $(".main-mnu ul a").click(function() {
        $(".hidden-mnu").fadeOut(400);
        $(".toggle-mnu").toggleClass("on");
    })
});

$(document).ready(function () {
    $('.bxslider').bxSlider({
        sliderWidth: 300,
        minSlides: 1,
        maxSlides: 6,
        moveSlides: 1,
        slideMargin: 20
    });
});

$(document).ready(function () {
    $('.min-slider').slick();
});

// preloader

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

// preloader

//placeholder

$(document).ready(function () {
   $('.palceholder').click(function() {
  $(this).siblings('input').focus();
});
$('.form-control').focus(function() {
  $(this).siblings('.palceholder').hide();
});
$('.form-control').blur(function() {
  var $this = $(this);
  if ($this.val().length == 0)
    $(this).siblings('.palceholder').show();
});
$('.form-control').blur(); 
});


$(document).ready(function () {
   $('.placeholder').click(function() {
  $(this).siblings('textarea').focus();
});
$('.textarea').focus(function() {
  $(this).siblings('.placeholder').hide();
});
$('.textarea').blur(function() {
  var $this = $(this);
  if ($this.val().length == 0)
    $(this).siblings('.placeholder').show();
});
$('.textarea').blur(); 
});


//placeholder


$(document).ready(function () {
   $('.popup-free').magnificPopup(); 
});

$(document).ready(function() {

$(".tab_item").not(':first').hide();

  $(".wrap_form .tab").click(function(){
    $(".wrap_form .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
    $(".wrap_form .tab .pipi").removeClass("active").eq($(this).index()).addClass("active");
    
  }).eq(0).addClass("active");

});

// $(document).ready(function() {
//      var elementss=document.querySelector(".popup-icons")
//        .querySelectorAll("div")

//      var chngg = function() {
//        for(var i = 0; i < elementss.length; i++) {
//        elementss[i].className=""
//        }
//        this.className="sort"
//      };
//      [].forEach.call(elementss, function(el){el.onclick=chngg})
// });

// $(document).ready(function() {
//     $(".pi").click(function(e) {
//   e.preventDefault();
//   $(".pi").removeClass('pio');
//   $(this).addClass('pio');
// })
// });


// // change
// var adress = 'email-адрес';
// var login = 'логин';
// var telegram = 'номер/логин';
// var viber = 'номер';
//       $(function() {
//         var insert = $('.insert');
//         $('a[rel="insert"]').click(function() {
//           var a = $(this).attr('href');
//           insert.css('display', 'none').html(window[a]).fadeIn(300);
//           return false;
//         });
//       });
// // change


////slider
//$(document).ready(function(){
//  $('.photo-card').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  arrows: false,
//  fade: true,
//  asNavFor: '.slider-nav'
//});
//$('.slider-nav').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  asNavFor: '.photo-card',
//  dots: true,
//  centerMode: true,
//  focusOnSelect: true
//});
//	
//});
//    //slider
//
//
//$(document).ready(function(){
//    $('.close').on('click', function(){
//        $(this).parents('.product').remove();
//    });
//});
//
//
//// скрыть-показать форму sign in
//
//$(document).click(function(event) {
//    if ($(event.target).closest("#login-content2").length)
//        return;
//    $("#login-content2").slideUp("slow");
//    event.stopPropagation();
//});
//
//$('.search2').click(function() {
//    $(this).siblings("#login-content2").slideToggle("slow");
//    return false;
//});
////
//
