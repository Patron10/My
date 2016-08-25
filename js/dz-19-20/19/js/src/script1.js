// смена цвета в соц. сетях

$(function() {
    $(".facebook")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("facebook_b.png", "facebook.png");
            $(this).attr("src", src);
        });
});

$(function() {
    $(".twitter")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("twitter_b.png", "twitter.png");
            $(this).attr("src", src);
        });
});

$(function() {
    $(".rss")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("rss_b.png", "rss.png");
            $(this).attr("src", src);
        });
});

$(function() {
    $(".linkedin")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("in_b.png", "in.png");
            $(this).attr("src", src);
        });
});

$(function() {
    $(".skype")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("skype_b.png", "skype.png");
            $(this).attr("src", src);
        });
});

$(function() {
    $(".cursor")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "_b.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("cursor_b.png", "cursor.png");
            $(this).attr("src", src);
        });
});

// смена цвета в меню

$(function() {
     var elements=document.querySelector(".menu")
  .querySelector("ul")
  .querySelectorAll("li")

var chng = function() {
    for(var i = 0; i < elements.length; i++) {
      elements[i].className=""
    }
    this.className="current"
};
[].forEach.call(elements, function(el){el.onclick=chng})
});


// карусель

jQuery(document).ready(function ($) {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,$Zoom:11,$Rotate:-1,$Easing:{$Zoom:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:0.5},$Brother:{$Duration:1200,$Zoom:1,$Rotate:1,$Easing:$Jease$.$Swing,$Opacity:2,$Round:{$Rotate:0.5},$Shift:90}},
              {$Duration:1400,x:0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1400,x:-0.25,$Zoom:1.5,$Easing:{$Left:$Jease$.$InWave,$Zoom:$Jease$.$InSine},$Opacity:2,$ZIndex:-10}},
              {$Duration:1200,$Zoom:11,$Rotate:1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Brother:{$Duration:1200,$Zoom:11,$Rotate:-1,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Round:{$Rotate:1},$ZIndex:-10,$Shift:600}},
              {$Duration:1500,x:0.5,$Cols:2,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InOutCubic},$Opacity:2,$Brother:{$Duration:1500,$Opacity:2}},
              {$Duration:1500,x:-0.3,y:0.5,$Zoom:1,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4],$Zoom:[0.6,0.4]},$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1000,$Zoom:11,$Rotate:-0.5,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Shift:200}},
              {$Duration:1500,$Zoom:11,$Rotate:0.5,$During:{$Left:[0.4,0.6],$Top:[0.4,0.6],$Rotate:[0.4,0.6],$Zoom:[0.4,0.6]},$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1000,$Zoom:1,$Rotate:-0.5,$Easing:{$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Shift:200}},
              {$Duration:1500,x:0.3,$During:{$Left:[0.6,0.4]},$Easing:{$Left:$Jease$.$InQuad,$Opacity:$Jease$.$Linear},$Opacity:2,$Outside:true,$Brother:{$Duration:1000,x:-0.3,$Easing:{$Left:$Jease$.$InQuad,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1200,x:0.25,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1200,x:-0.1,y:-0.7,$Rotate:0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}},
              {$Duration:1600,x:1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1600,x:-1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1600,x:1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1600,x:-1,$Rows:2,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1600,y:-1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1600,y:1,$Cols:2,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1200,y:1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1200,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1200,x:1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$Brother:{$Duration:1200,x:-1,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2}},
              {$Duration:1200,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1200,y:-1,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Shift:-100}},
              {$Duration:1200,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Left:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Brother:{$Duration:1200,x:1,$Delay:40,$Cols:6,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:{$Top:$Jease$.$InOutQuart,$Opacity:$Jease$.$Linear},$Opacity:2,$ZIndex:-10,$Shift:-100}},
              {$Duration:1500,x:-0.1,y:-0.7,$Rotate:0.1,$During:{$Left:[0.6,0.4],$Top:[0.6,0.4],$Rotate:[0.6,0.4]},$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2,$Brother:{$Duration:1000,x:0.2,y:0.5,$Rotate:-0.1,$Easing:{$Left:$Jease$.$InQuad,$Top:$Jease$.$InQuad,$Opacity:$Jease$.$Linear,$Rotate:$Jease$.$InQuad},$Opacity:2}},
              {$Duration:1600,x:-0.2,$Delay:40,$Cols:12,$During:{$Left:[0.4,0.6]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5},$Brother:{$Duration:1000,x:0.2,$Delay:40,$Cols:12,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:1028,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Round:{$Top:0.5}}}
            ];
            
            var jssor_1_options = {
              $AutoPlay: false,
              $FillMode: 5,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1160);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            //responsive code end
        });

// изменение цвета текста services
$(function() {
$(".services li a").mouseover(function() {
    $(this).find("span").css('color', '#f4b60d');
  }).mouseout(function(){
    $(this).find("span").css('color', 'white');
  });
});


$(document).ready ( function(){
$(".link").click(function() {
return false;
});
});


$(document).ready(function() {
    $(".accordion h3").eq(0).addClass("active");
    $(".accordion p").eq(0).show();
    
    $(".accordion h3").click(function() {
        $(this).next("p").slideToggle("slow")
        .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h3").removeClass("active");
    });
});