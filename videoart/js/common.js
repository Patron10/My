var skr = 4000;

$(document).ready(function(){
  $('.wrap_slide').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".hidden_mnu").slideToggle();
    return false;
  });

  //переместиться на верх страницы
    $('.top_arrow img').click(function () {  
      $('body,html').animate({  
          scrollTop: 0  
      }, 500);  
      return false;  
    });
    //переместиться на верх страницы

    //переместиться на низ страницы
    $('.bottom_arrow img').click(function () {  
      $('body,html').animate({  
          scrollTop: 15000  
      }, 1500);  
      return false;  
    });
    //переместиться на низ страниц

    var sizer = 'itemm';
    var container = $(".wrap_img_photo_reliz");
    container.imagesLoaded(function() {
      container.masonry({
      
    });
    });

    var sizerr = 'item';
    var containerr = $(".masonry");
    containerr.imagesLoaded(function() {
      containerr.masonry({
    
    });
    });


});

