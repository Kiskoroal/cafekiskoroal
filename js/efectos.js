$(document).ready(function () {

    //EFECTO MENU 
    $('.menu a').each(function (index, elemento) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1000 + (index * 500));
    });

    //EFECTO HEADER
    if ($(window).width() > 800) {
        $('header .textos').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .textos').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }

    //SCROLL ELEMENTOS MENÚ
    var acercade = $('#acercade').offset().top,
        menu = $('#comida').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acercade').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercade - 250
        }, 500);
    });

    $('#btn-menu').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu + 400
        }, 500);
    });

    $('#btn-galeria').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria
        }, 500);
    });

    $('#btn-ubicacion').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        }, 500);
    });
});