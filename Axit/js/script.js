$(document).ready (function(){
    $('.slider').glide();
    $('.slider-nav__item:first-child').append('TAB 1');
    $('.slider-nav__item:nth-child(2)').append('TAB 2');
    $('.slider-nav__item:nth-child(3)').append('TAB 3');
});


 $(document).ready(function() {
    var w = $(window).width(); // Получаем ширину окна
    if (w <= 767) { // Если ширина окна меньше, либо равна 600
      $(".slider-nav__item").empty(''); // Удаляем правую колонку
    }
  });