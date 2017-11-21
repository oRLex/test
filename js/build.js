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
console.log("modal");

$(document).ready(function () {
    $('.btn-prime').click(function() {
        alert('downloading full version');
    });
});

$(document).ready(function () {
    $('.btn-second').click(function() {
        alert('downloading trial version');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5qcyIsIm1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoYW1idXJnZXJcIik7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLl9oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaGVyby1uYXYgdWwnKS5zbGlkZVRvZ2dsZSg1MDApO1xyXG4gICAgfSk7Ly9lbmQgc2xpZGUgdG9nZ2xlXHJcblxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoICAkKHdpbmRvdykud2lkdGgoKSA+IDUwMCApIHtcclxuICAgICAgICAgICAgJCgnLmhlcm8tbmF2IHVsJykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTsvL2VuZCByZXNpemVcclxufSk7Ly9lbmQgcmVhZHkiLCJjb25zb2xlLmxvZyhcIm1vZGFsXCIpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmJ0bi1wcmltZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGFsZXJ0KCdkb3dubG9hZGluZyBmdWxsIHZlcnNpb24nKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5idG4tc2Vjb25kJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgYWxlcnQoJ2Rvd25sb2FkaW5nIHRyaWFsIHZlcnNpb24nKTtcclxuICAgIH0pO1xyXG59KTsiXX0=
