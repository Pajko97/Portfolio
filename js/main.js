$(document).ready(function () {
    $('.link-about').click(function () {
        $('.nav-link').removeClass('nav-link-active');
        $('.nav-link-about').addClass('nav-link-active');
        $(".content").hide().load('/includes/About.html').fadeIn('slow');

        return false;
    });

    $('.link-work').click(function () {
        $('.nav-link').removeClass('nav-link-active');
        $('.nav-link-work').addClass('nav-link-active');
        $(".content").hide().load('/includes/Work.html').fadeIn('slow');

        return false;
    });



});