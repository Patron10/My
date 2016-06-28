$(document).ready(function(){
        
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.tabs li:first').addClass('active');
    
    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
        
        var select = $(this).find('a').attr("href");
        $(select).fadeIn();
    });
});