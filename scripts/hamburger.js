console.log("hamburger");
$(document).ready(function() {
    $('._hamburger').click(function() {
        $('.hero-nav ul').slideToggle(500);
    });//end slide toggle

    $(window).resize(function() {
        if (  $(window).width() > 500 ) {
            $('.hero-nav ul').removeAttr('style');
        }
    });//end resize
});//end ready