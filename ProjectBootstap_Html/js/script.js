$('.img').contenthover({
    overlay_background:'#000',
    overlay_opacity:0.8
});

$( "#target" ).click(function() {
  alert( "Handler for .click() called." );
});


$('.img').contenthover({
    overlay_background: '#000',
    overlay_opacity: 0.8
});



$('.mylightbox').click(function () {
    $('.demoLightbox').addClass('in');
    $('.demoLightbox').removeClass('hide');
});

$('html').click(function () {
    $('.demoLightbox').hide();
    $(".modal-backdrop.in").remove();
    $('.demoLightbox').removeClass('in');
});


$("[data-toggle='tooltip']").click(function () {
    $('.myAlert').removeClass('hide')
});

$('[data-toggle="tooltip"]').tooltip();

$("[data-toggle='popover']").popover();