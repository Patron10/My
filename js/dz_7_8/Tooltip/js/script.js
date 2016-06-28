$(document).ready(function() {
    $("input").hover(function () {
        $(this).next("em").animate({opacity: "show", left: "75"}, "slow");
    }, function() {
        $(this).next("em").animate({opacity: "hide", right: "-85"}, "fast");
    });
    
    $("button").click(function() {
        $("em").animate({opacity: "show", left: "75"}, "slow");
    })
});