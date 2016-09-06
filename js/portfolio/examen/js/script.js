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
    
    
    
    
    
    
    window.pixabayCallback = function(){
    return;
};

function search(){
	$container.html('');
	var name = $('.search__input').val()

	$.ajax({
	  url: 'https://pixabay.com/api/',
        data: {
            key: '2752016-4fdc55509940bb2ec126f7894',
            q: name,
            callback: pixabayCallback(),
        },
        method: 'GET',
        dataType: 'jsonp',
        error: function(){
            alert('smth go wrong!');
        },
        success: function(data){

            var hits = data.hits;     
            if (hits.length !== 0) {

	            for (var i = 0; i < 7; i++) {
	                var url = hits[i].webformatURL;
	                var tags = hits[i].tags;
	               if (i == 4 || i == 5){
		  			$container.append('<div class="col-md-3 col-sm-4 col-xs-6 item big"><img src="' + url + '"><div class="texts">' + tags + '</div></div>' );
		  			} else 
		  			$container.append('<div class="col-md-3 col-sm-4 col-xs-6 item"><img src="' + url + '"><div class="textf">' + tags + '</div></div>');     
            		}
            }       

        },
    });
}

search();

$('.search__btn').on('click', search);
$('.search__input').on('keydown', function(e){
	if (e.keyCode == 13){search();};
});
    
    
    
    
    
});
