$(document).ready (function(){
  $(".link").click(function(){
    return false;
  });
});

$(document).ready (function() {
  $('.slider').slick();    
});


// смена цвета в меню

$(document).ready(function() {
     var elements=document.querySelector(".sort")
       .querySelectorAll("li")

     var chng = function() {
       for(var i = 0; i < elements.length; i++) {
       elements[i].className=""
       }
       this.className="active"
     };
     [].forEach.call(elements, function(el){el.onclick=chng})
});