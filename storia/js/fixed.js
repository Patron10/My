$(document).scroll(function() {
    if ($(document).scrollTop())
        $('div.menu-line').addClass('fixed'),
        $('div.content-header').addClass('content-height');
    else
        $('div.menu-line').removeClass('fixed'),
        $('div.content-header').removeClass('content-height');
});