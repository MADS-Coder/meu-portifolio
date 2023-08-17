/**Criando os icons para os responsivos */

$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }


    });

    $('a[href*="#"]').on('click', function (e) {

        e.preventDefault();

        $('html, body').animate({

            scrollTop: $($(this).attr('href')).offset().top,

        },
            500,
            'linear'
        );

    });

});



/**Criando uma animação para a o titulo do nome */
document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".animation", {
        speed: 95,
        loop: true
    }).type('Desenvolvedor Web', { delay: 750 }).delete(17)
        .type('Web Design', { delay: 750 }).delete(10)
        .type('Freelancer', { delay: 750 }).delete(10)
        .go();
});
