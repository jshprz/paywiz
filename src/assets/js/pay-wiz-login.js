
$(window, document, undefined).ready(function() {

  var config = {
    apiKey: "AIzaSyBGNSnsFh_Dwj4iwAEmBy2ZYhY2CN2eFq0",
    authDomain: "paywiz-b98fb.firebaseapp.com",
    databaseURL: "https://paywiz-b98fb.firebaseio.com/",
    projectId: "paywiz-b98fb",
    storageBucket: "paywiz-b98fb.appspot.com",
    messagingSenderId: "1059931264356"
  };
  firebase.initializeApp(config);
  //create firebase references
  var Auth = firebase.auth(); 
  var dbRef = firebase.database();
  var usersRef = dbRef.ref('users');
  var auth = null;
  


  //Login
  $('#doLogin').on('click', function (e) {
    e.preventDefault();
  

    if( $('#loginEmail').val() != '' && $('#loginPassword').val() != '' ){
      //login the user
      var data = {
        email: $('#loginEmail').val(),
        password: $('#loginPassword').val()
      };
      firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(function(authData) {
          console.log("Authenticated successfully with payload:", authData);
          auth = authData;
          
          console.log(auth.uid);
          console.log(auth.users);
          window.location = "./module/module-main.html";
          
        })
        .catch(function(error) {
          console.log("Login Failed!", error);
          });
    }
  });

})
 
