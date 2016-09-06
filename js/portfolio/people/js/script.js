$(document).ready ( function(){
    $(".link").click(function() {
        return false;
    });
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$(document).ready(function() {
    
    var $container = $(".masonry-container");
    $container.imagesLoaded(function() {
        $container.masonry({
            columnWidth: ".item",
            itemSelector: ".item"
        });
        $('.item').imagefill();
    });
});
