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

    
});
// Form data send
var mail = document.getElementById('mail-field');
var name = document.getElementById('name-field');
var message = document.getElementById('message-field');
const submitBtn = document.getElementById('submit-form');

document.getElementById('#submit-form').addEventListener('click', sendForm)
function sendForm(name, email, message) {
    firebase.database().ref('users/' + name.target.value).set({
      username: name.target.value,
      email: mail.target.value,
      message : message.target.value
    });
    console.log(this);
  }

