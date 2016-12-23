$(document).ready(function() {
    
    $(".popup").magnificPopup({type:"image"});
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
    
    $(".animation").animated("flipInY", "flipOutY");
    $(".animatio").animated("fadeInLeft", "fadeOutLeft");
    $(".animati").animated("fadeInRight", "fadeOutRight");
    
    function heightDetect(){
      $(".main_head").css("height", $(window).height());  
    };
        heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
});

$(".toggle_mnu, .menu_item").click(function() {
    $(".sandwich").toggleClass("active");
});

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

$(window).load(function() {
   $(".loader_inner").fadeOut();
   $(".loader").delay(400).fadeOut("slow");
});

