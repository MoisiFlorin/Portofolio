$(document).ready(function () {
    $('.show').click(function () {
        $('.email').show();
        $('.show').hide();
    });
    $('.show2').click(function () {
        $('.phone').show();
        $('.show2').hide();
    });


    $('.blink').each(function () {
        var elem = $(this);
        setInterval(function () {
            if (elem.css('visibility') == 'hidden') {
                elem.css('visibility', 'visible');
            } else {
                elem.css('visibility', 'hidden');
            }
        }, 800);
    });

    $('.thumbs').portfolio({
        cols: 4,
        transition: 'slideDown'
    });


    $(function () {
        $('.menu-icon').on('click', function (e) {
            e.preventDefault();
            $('.submenu').toggleClass('hide');
        });
    });

});


$(window).scroll(function () {
    if ($(this).scrollTop() >= 1000) {

        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
