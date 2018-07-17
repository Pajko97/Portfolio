$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyCinEYD4VoLNLJpqnO3HcbU_rPTczL9ZPY",
        authDomain: "portfolio-c68df.firebaseapp.com",
        databaseURL: "https://portfolio-c68df.firebaseio.com",
        projectId: "portfolio-c68df",
        storageBucket: "portfolio-c68df.appspot.com",
        messagingSenderId: "607710327979"
      };

      if (!firebase.apps.length) {
        firebase.initializeApp(config);
     }

      var messagesRef = firebase.database().ref('messages');

document.getElementById("contactForm").addEventListener('submit', sendForm);

function getInputVal(id) {
    return document.getElementById(id).value;
}


function sendForm(e) {
    e.preventDefault();

    var name= getInputVal('name-field');
    var mail = getInputVal('mail-field');
    var message = getInputVal('message-field');

    saveMessage(name, mail, message);

    document.querySelector('#contactForm').style.display = 'none';
    document.querySelector('.header').style.display = 'none';
    document.querySelector('.sent').style.display = 'block';

  }

  function saveMessage(name, mail, message) {
      let newMessageRef = messagesRef.push();
      newMessageRef.set({
          name: name,
          email: mail,
          message: message
      })
  }


})