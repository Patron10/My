$(document).ready(function() {

// magnific popup
  $(document).ready(function () {
   $('.popup-free').magnificPopup({
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade'
   }); 
});
  //

    //показать-скрыть адаптивное главное меню
    $(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".hidden_mnu").slideToggle();
      return false;
  });
    //показать-скрыть адаптивное главное меню
    //показать-скрыть табы жанров
    $(".toggle_genre").click(function() {
      $(this).toggleClass("on");
      $(".hidden_tabs").slideToggle();
      return false;
  });
    //показать-скрыть табы жанров

    //скрывать список табов при выборе таба жанра
    $(".hidden_tabs .tab").click(function() {
      $(".hidden_tabs").slideToggle();
      return false;
  });
    //скрывать список табов при выборе таба жанра

    //показать-скрыть подменю в work
    var join = $('.pod_menu'),
    joinLink = $('.work_li'),
    indexClick = 0;
    $ ( function() {
        joinLink.click( function(event) {
            if (indexClick === 0) {
                join.fadeIn(400);
                join.addClass('active')
                indexClick = 1;
            }
            else {
                join.fadeOut(400);
                indexClick = 0;
            }
            event.stopPropagation();
        });
    });
    $(document).click(function(event) {
        if ($(event.target).closest(".pod_menu").length) return;
        join.fadeOut(400);
        indexClick = 0;
        event.stopPropagation();
    });
    //показать-скрыть подменю в work

    //переместиться на верх страницы
    $('.fa-arrow-up').click(function () {  
      $('body,html').animate({  
          scrollTop: 0  
      }, 500);  
      return false;  
    });
    //переместиться на верх страницы

    //переключение между табами
    //большой монитор
  $(".wrap_tab_item_film").not(':first').hide();
  $(".hs_stills .tab").click(function(){
    $(".hs_stills .tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
    $(".wrap_tab_item_film").hide().eq($(this).index()).fadeIn();

}).eq(0).addClass("active_tab");
    //большой монитор
    //маленькийй монитор
  $(".wrap_tab_item_film").not(':first').hide();
  $(".hidden_tabs .tab").click(function(){
    $(".hidden_tabs .tab").removeClass("active_tab").eq($(this).index()).addClass("active_tab");
    $(".wrap_tab_item_film").hide().eq($(this).index()).fadeIn();

}).eq(0).addClass("active_tab");
    //маленькийй монитор
    //переключение между табами

});
    //добавить-удалить клас для hover и click в work
$(window).resize(function () {
    var width = $('body').innerWidth()
        if (width < 1200) {
            $('.neitral').removeClass('nav_top').addClass('nt_navigation');
        }
        if (width > 1200) {
            $('.neitral').removeClass('nt_navigation').addClass('nt_navigation');
        }
});
    //добавить-удалить клас для hover и click в work