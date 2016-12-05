$(document).ready (function(){

  $(".link").click(function(){
    return false;
  });
});

$(document).ready(function(){
      $('.sign').click(function(){
          $(this).next('#login-content').slideToggle();
        });
});


$(document).ready (function() {
  $('.slider').slick();
});


$(document).ready(function() {

     var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
    });

});

$(document).ready(function(){
			/* select style */
			var params = {
				changedEl: "select",
				visRows: 5,
				scrollArrows: true
			}
			cuSel(params);
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

$(document).ready(function(){
/* select style */
    var params = {
        changedEl: "select",
        visRows: 6,
        scrollArrows: true
    }
    cuSel(params);
});

$(document).ready(function() {
     var elementss=document.querySelector(".tab-post")
       .querySelectorAll("a")

     var chngg = function() {
       for(var i = 0; i < elementss.length; i++) {
       elementss[i].className=""
       }
       this.className="active-post"
     };
     [].forEach.call(elementss, function(el){el.onclick=chngg})
});

// Гармошка


$(document).ready(function() {
    $(".accordion-menu .caption-menu").eq(0).addClass("activ");
    $(".accordion-menu .pod-menu").eq(0).show();

    $(".accordion-menu .caption-menu").click(function() {
        $(this).next(".pod-menu").slideToggle("slow")
        .siblings(".pod-menu:visible").slideUp("slow");
        $(this).toggleClass("activ");
        $(this).siblings(".caption-menu").removeClass("activ");
    });
});


 $(document).ready(function(){
	$('.caption-menu').click(function () {
		$(this).toggleClass('click');
		});
	});


$(document).ready(function(){
	$(".clicka2").click(function () {
		$(".pluss2").css("display", "none");
		});
	});

$(document).ready(function(){
	$(".clicka1").click(function () {
		$(".pluss2").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka3").click(function () {
		$(".pluss2").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka4").click(function () {
		$(".pluss2").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka5").click(function () {
		$(".pluss2").css("display", "block");
		});
	});
///////////////////////////////////////////////
$(document).ready(function(){
	$(".clicka3").click(function () {
		$(".pluss3").css("display", "none");
		});
	});

$(document).ready(function(){
	$(".clicka1").click(function () {
		$(".pluss3").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka2").click(function () {
		$(".pluss3").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka4").click(function () {
		$(".pluss3").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka5").click(function () {
		$(".pluss3").css("display", "block");
		});
	});
/////////////////////////////////////////////////

$(document).ready(function(){
	$(".clicka4").click(function () {
		$(".pluss4").css("display", "none");
		});
	});

$(document).ready(function(){
	$(".clicka1").click(function () {
		$(".pluss4").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka3").click(function () {
		$(".pluss4").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka2").click(function () {
		$(".pluss4").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka5").click(function () {
		$(".pluss4").css("display", "block");
		});
	});
/////////////////////////////////////////////////
$(document).ready(function(){
    $(".pluss1").css("display", "none");

	$(".clicka1").click(function () {
		$(".pluss1").css("display", "none");
		});
	});

$(document).ready(function(){
	$(".clicka2").click(function () {
		$(".pluss1").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka3").click(function () {
		$(".pluss1").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka4").click(function () {
		$(".pluss1").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka5").click(function () {
		$(".pluss1").css("display", "block");
		});
	});
//////////////////////////////////////////////////

$(document).ready(function(){
	$(".clicka5").click(function () {
		$(".pluss5").css("display", "none");
		});
	});

$(document).ready(function(){
	$(".clicka1").click(function () {
		$(".pluss5").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka3").click(function () {
		$(".pluss5").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka2").click(function () {
		$(".pluss5").css("display", "block");
		});
	});

$(document).ready(function(){
	$(".clicka4").click(function () {
		$(".pluss5").css("display", "block");
		});
	});




jQuery.fn.initMenu = function() {
    return this.each(function(){
        var theMenu = $(this).get(0);
        $('.acitem', this).hide();
        $('li.expand > .acitem', this).show();
        $('li.expand > .acitem', this).prev().addClass('active');
        $('li a', this).click(
            function(e) {
                e.stopImmediatePropagation();
                var theElement = $(this).next();
                var parent = this.parentNode.parentNode;
                if($(parent).hasClass('noaccordion')) {
                    if(theElement[0] === undefined) {
                        window.location.href = this.href;
                    }
                    $(theElement).slideToggle(1, function() {
                        if ($(this).is(':visible')) {
                            $(this).prev().addClass('active');
                        }
                        else {
                            $(this).prev().removeClass('active');
                        }
                    });
                    return false;
                }
                else {
                    if(theElement.hasClass('acitem') && theElement.is(':visible')) {
                        if($(parent).hasClass('collapsible')) {
                            $('.acitem:visible', parent).first().slideUp(1,
                            function() {
                                $(this).prev().removeClass('active');
                            }
                        );
                        return false;
                    }
                    return false;
                }
                if(theElement.hasClass('acitem') && !theElement.is(':visible')) {
                    $('.acitem:visible', parent).first().slideUp(1, function() {
                        $(this).prev().removeClass('active');
                    });
                    theElement.slideDown(1, function() {
                        $(this).prev().addClass('active');
                    });
                    return false;
                }
            }
        }
    );
});
};

$(document).ready(function() {$('.menu').initMenu();});

$(document).ready(function() {
    $('select').selecter();
});
