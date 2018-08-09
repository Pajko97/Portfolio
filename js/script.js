$(document).ready( function() {
    $('#home-btn').click(function() {
        $('li').removeClass('current');
        $('#home-btn').addClass('current');
        $("#content").hide().load('/includes/home.html').fadeIn('slow');

        return false;
    });
    
    $('#work-btn').click(function() {
        $('li').removeClass('current');
        $('#work-btn').addClass('current');
        $("#content").hide().load('/includes/work.html').fadeIn('fast');

        return false;
    });

    $('#about-btn').click(function() {
        $('li').removeClass('current');
        $('#about-btn').addClass('current');
        $("#content").hide().load('/includes/about.html').fadeIn('fast');

        return false;
    });

    $('#contact-btn').click(function() {
        $('li').removeClass('current');
        $('#contact-btn').addClass('current');
        $("#content").hide().load('/includes/contact.html').fadeIn('fast');

        return false;
    });
    $('.project').click(function(e){
        var ovo ='#' + $(this).attr("id");

        console.log(ovo)

      $(ovo + ' .hidden').fadeToggle('slow');
    })
    
});


