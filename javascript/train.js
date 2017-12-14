
 var config = {
    apiKey: "AIzaSyBLlOnAYyiZgrSASYZDkMINFTP5KQ0X8vY",
    authDomain: "drthuskertrain.firebaseapp.com",
    databaseURL: "https://drthuskertrain.firebaseio.com",
    projectId: "drthuskertrain",
    storageBucket: "drthuskertrain.appspot.com",
    messagingSenderId: "948148839672"
  };
  firebase.initializeApp(config);

$('#submitButton').on('click', function(){

	var trainName = $('#trainName').val().trim();
	var destination = $('#destination').val().trim();
	var firstTime = moment($('#time').val().trim(), "HH:mm").format("");
	var frequency = $('#frequency').val().trim();


	console.log(trainName);
	console.log(destination);
	console.log(firstTime);
	console.log(frequency);


	alert("Train added!");

});

