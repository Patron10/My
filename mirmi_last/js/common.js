 $(document).ready(function() {
   $("a[href*='#s']").mPageScroll2id({
     offset: 60
   });

   $('.input_block input').change(function() {
    if($(this).val())
      $(this).addClass('has_value');
    else
      $(this).removeClass('has_value');
  });

 });

// клик вне меню скрывать

$(document).click( function(event){
  if( $(event.target).closest(".navigation").length ) 
    return;
  $(".toggle_mnu").removeClass('active');
  $(".navigation").slideUp("slow");
  event.stopPropagation();
});
$('.toggle_mnu').click( function() {
  $(this).siblings(".navigation").slideToggle("slow");
  return false;
});


//

$(document).ready(function () {
 $('.popup_phone, .popup_link, .all_catalog, .zapros_opt, .popup_phone_bottom').magnificPopup(); 
});

$(document).ready(function() {

  $('.toggle_mnu').click(function(){
    $(this).toggleClass('active');
    return false;
  });


  $('.get_city').click(function() {
      $('.your_city_popup').css('display', 'none');
      $('.yc_popup').toggleClass('active_city');
    });

  $('.no, .your_city').click(function () {
    $('.yc_popup').toggleClass('active_city');
  });


  $('.active_otvet').click(function () {
    $('.your_city_popup').css('display', 'none');
  });


  //переместиться на верх страницы
  $('.logotip, .logoti').click(function () {  
    $('body,html').animate({  
      scrollTop: 0  
    }, 500);  
    return false;  
  });

    //переместиться на верх страницы

    //показать-скрыть адаптивное главное меню
    $(".toggle_mnu").click(function() {
      $(this).toggleClass("on");
      $(".navigation").slideToggle();
      return false;
    });


    $(".tab_item").not(':first').hide();
    $(".tab").click(function(){
      $(".tab").removeClass("active").eq($(this).index()).addClass("active");
      $(".tab_item").hide().eq($(this).index()).fadeIn();

    }).eq(0).addClass("active");


    $('.wrap_slider').slick();



    $( ".slider_characteristics" ).each(function() { 
      $(this).find('.tab_item2').not(':first').hide(); 
      $(this).find('.tab2:first').eq(0).addClass("active2"); 
    }); 


    $('.tab2').click(function(){ 
      $(this).parent().children().removeClass("active2").eq($(this).index()).addClass("active2"); 
      $(this).parents('.slider_characteristics').find('.tab_item2').hide().eq($(this).index()).fadeIn(); 
    });

    $('.plus_naime').click(function() {
      $(".wrap_naime:first-child").clone().appendTo(".wrap_wrap_naime");
    })

    
// $(document).click( function(event){
//   if( $(event.target).closest(".yc_popup").length ) 
//     return;
//   $(".yc_popup").slideUp("slow");
//   event.stopPropagation();
// });


  });



// смена изображений в option

$(document).ready(function(){


  $('#tovar1').change(function(){
    $('.tovar1').find('img:first').attr('src', $('#tovar1 option:selected').attr('data-path'));
  });
  $('#tovar2').change(function(){
    $('.tovar2').find('img:first').attr('src', $('#tovar2 option:selected').attr('data-path'));
  });
  $('#tovar3').change(function(){
    $('.tovar3').find('img:first').attr('src', $('#tovar3 option:selected').attr('data-path'));
  });
  $('#tovar4').change(function(){
    $('.tovar4').find('img:first').attr('src', $('#tovar4 option:selected').attr('data-path'));
  });

  $('#tovar2_1').change(function(){
    $('.tovar2_1').find('img:first').attr('src', $('#tovar2_1 option:selected').attr('data-path'));
  });
  $('#tovar2_2').change(function(){
    $('.tovar2_2').find('img:first').attr('src', $('#tovar2_2 option:selected').attr('data-path'));
  });
  $('#tovar2_3').change(function(){
    $('.tovar2_3').find('img:first').attr('src', $('#tovar2_3 option:selected').attr('data-path'));
  });
  $('#tovar2_4').change(function(){
    $('.tovar2_4').find('img:first').attr('src', $('#tovar2_4 option:selected').attr('data-path'));
  });

  document.getElementById("tovar1").addEventListener("change", function(){
      document.getElementById('tov1').innerHTML = this.value+ " <span>&#8381;</span>"; 
      var text = $('#tov1').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);  
    });

  document.getElementById("tovar2").addEventListener("change", function(){
      document.getElementById('tov2').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov2').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar3").addEventListener("change", function(){
      document.getElementById('tov3').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov3').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar4").addEventListener("change", function(){
      document.getElementById('tov4').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov4').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar2_1").addEventListener("change", function(){
      document.getElementById('tov1_1').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov1_1').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar2_2").addEventListener("change", function(){
      document.getElementById('tov1_2').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov1_2').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar2_3").addEventListener("change", function(){
      document.getElementById('tov1_3').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov1_3').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  document.getElementById("tovar2_4").addEventListener("change", function(){
      document.getElementById('tov1_4').innerHTML = this.value+ " <span>&#8381;</span>";
      var text = $('#tov1_4').text();
      $('.tovar_tovar .cart-buy-button').attr('data-price', text);   
    });

  // document.getElementById("tovar1").addEventListener("change", function() {
  //   document.attr('data-price').innerHTML = this.text;
  // });

});

 // + " <span>&#8381;</span>"

$('.your_city').click( function() {
  $(this).siblings(".your_city_popup").slideToggle("slow");
  return false;
});





jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertBefore('.plus_minus input');
jQuery('.plus_minus').each(function() {
  var spinner = jQuery(this),
  input = spinner.find('input[type="number"]'),
  btnUp = spinner.find('.quantity-up'),
  btnDown = spinner.find('.quantity-down'),
  min = input.attr('min'),
  max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find('input[type="number"]').val(newVal);
    spinner.find('input[type="number"]').trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find('input[type="number"]').val(newVal);
    spinner.find('input[type="number"]').trigger("change");
  });

});


//    $('.form_consultation').validate({
// //        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
//         //Обработчик и отправка данных
//         submitHandler: function(form) {
//             $(form).ajaxSubmit({
//                 type: "POST",
//                 url: "../mail.php",
//                 success: function() {
//                     $(this).magnificPopup('close');  
//                 }
//             });
//         }
//     });

//    $('.form_phone').validate({
// //        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
//         //Обработчик и отправка данных
//         submitHandler: function(form) {
//             $(form).ajaxSubmit({
//                 type: "POST",
//                 url: "../mail.php",
//                 success: function() {
//                     $(this).magnificPopup('close');  
//                 }
//             });
//         }
//     });

//    $('.form_catalog').validate({
// //        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
//         //Обработчик и отправка данных
//         submitHandler: function(form) {
//             $(form).ajaxSubmit({
//                 type: "POST",
//                 url: "../mail.php",
//                 success: function() {
//                     $(this).magnificPopup('close');  
//                 }
//             });
//         }
//     });

//    $('.form_catalog_checked').validate({
// // //        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
//         //Обработчик и отправка данных
//         submitHandler: function(form) {
//             $(form).ajaxSubmit({
//                 type: "POST",
//                 url: "../mail.php",
//                 success: function() {
//                     $(this).magnificPopup('close');  
//                 }
//             });
//         }
//     });

function geo () {
  var city;
  city = document.getElementById('tags').value;
  document.getElementById('your_city').innerHTML = city;
}

$( document ).ready(function() {
    $('.your_city_popup').css('display', 'block');
});

$(document).ready(function() {

  //E-mail Ajax Send
  $(".form_catalog_checked").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      
        // $('.sank').magnificPopup();

        $.magnificPopup.open({
  items: {
    src: '#sanks'
  },
  type: 'inline'
});
               
      
    });
    return false;
  });

});

$(".form_catalog").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      
        // $('.sank').magnificPopup();
        $.magnificPopup.open({
  items: {
    src: '#sanks'
  },
  type: 'inline'
});
               
      
    });
    return false;
  });

 $(".form_consultation").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      
        // $('.sank').magnificPopup();
         

         $.magnificPopup.open({
  items: {
    src: '#sanks'
  },
  type: 'inline'
});      
      
    });
    return false;
  });


  $(".form_phone").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "../mail.php", //Change
      data: th.serialize()
    }).done(function() {
      

      $.magnificPopup.open({
  items: {
    src: '#sanks'
  },
  type: 'inline'
});
        // $('.sank').magnificPopup();
               
      
    });
    return false;
  });




$('.button_sank').click(function () {
    $(this).magnificPopup('close');  
  });