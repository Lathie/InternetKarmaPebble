/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var initialized = false;
var USERNAME = '';

Pebble.addEventListener("ready", function() {
  console.log("ready called!");
  initialized = true;
});

Pebble.addEventListener('showConfiguration', function(e) {
  // Show config page
  Pebble.openURL('http://lathie.github.io/InternetKarmaPebble/');
});

Pebble.addEventListener("webviewclosed", function(e) {
  console.log("configuration closed");
  // webview closed
  var fbusername = e.responce;
  USERNAME = fbusername;
  console.log("Options = " + fbusername);
});

var mainTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'InternetKarma',
  textAlign: 'center'
});

var facebookTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'FacebookKarma',
  textAlign: 'center'
});

var twitterTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'twitterKarma',
  textAlign: 'center'
});

var redditTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'redditKarma',
  textAlign: 'center'
});

var githubTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'githubKarma',
  textAlign: 'center'
});

var main = new UI.Window({
  fullscreen : true

});

var facebook = new UI.Window({
  fullscreen : true
});

var twitter = new UI.Window({
  fullscreen : true
});

var reddit = new UI.Window({
  fullscreen : true
});

var github = new UI.Window({
  fullscreen : true  
});

main.add(mainTitle);
facebook.add(facebookTitle);
twitter.add(twitterTitle);
reddit.add(redditTitle);
github.add(githubTitle);

var URL2 = 'http://3d3a65b5.ngrok.io/fbid/niuvictor' + USERNAME;
var fbid = '';
// Make the request
ajax(
  {
    url: URL2,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
    fbid = data.fbid;
    
    
    
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);

//apicall
var apiCall = 'fakefollowers';
var URL = 'http://internetkarma.herokuapp.com/' + apiCall;

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully data!');
    
    var totalKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.followers,
      textAlign: 'center'
    });
    main.add(totalKarma);
    
    var facebookKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.followers,
      textAlign: 'center'
    });
    facebook.add(facebookKarma);
    
    var twitterKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.followers,
      textAlign: 'center'
    });
    twitter.add(twitterKarma);
    
    var redditKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.followers,
      textAlign: 'center'
    });
    reddit.add(redditKarma);
    
    var githubKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.followers,
      textAlign: 'center'
    });
    github.add(githubKarma);
    
    //load the rest of the stuff
    
  },
  function(error) {
    // Failure!
    console.log('Failed data: ' + error);
  }
);







main.show();



//switching logic
main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  
  var textfield1 = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'TESTING TEST',
    textAlign: 'top'
  });
  
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield1);
  wind.add(textfield);
  wind.show();
});

//main
main.on('click', 'up', function(e) {
  github.show();
});

main.on('click', 'down', function(e) {
  facebook.show();
});

//facebook
facebook.on('click', 'up', function(e) {
  main.show();
});

facebook.on('click', 'down', function(e) {
  twitter.show();
});

//twitter
twitter.on('click', 'up', function(e) {
  facebook.show();
});

twitter.on('click', 'down', function(e) {
  reddit.show();
});

//reddit
reddit.on('click', 'up', function(e) {
  twitter.show();
});

reddit.on('click', 'down', function(e) {
  github.show();
});


//github
github.on('click', 'up', function(e) {
  reddit.show();
});

github.on('click', 'down', function(e) {
  main.show();
});



