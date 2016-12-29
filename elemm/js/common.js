$(document).ready(function() {
    
    $("#portfolio_grid").mixItUp();
    
    $(".s_portfolio li").click(function() {
       $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
    
    // клик на фото
    $(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({type: "inline", midClick: true});
    //
    //parallax
    function heightDetect(){
      $(".main_head").css("height", $(window).height());  
    };
        heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    
    $(".portfolio_item").each(function(i) {
       $(this).find("a").attr("href", "#work_" + i);
       $(this).find(".podrt_descr").attr("id", "work_" + i);
    });
    
    $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
    
    $(".top_mnu ul a").mPageScroll2id();
    
    //
});
// делаем активное меню
$(".toggle_mnu, .menu_item").click(function() {
    $(".sandwich").toggleClass("active");
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