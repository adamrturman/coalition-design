const height = ($('#hero').height() - $('#sticky').height())

$(window).scroll(function() {
    if($(this).scrollTop() >= height) {
        $('#sticky').addClass('fixed-top');
        $('#sticky').addClass('bg-white');
    } else {
        $('#sticky').removeClass('fixed-top');
    }
});