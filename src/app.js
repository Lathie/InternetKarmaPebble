/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var Settings = require('settings');

//var EMAIL = '';

// Set a configurable with the open callback
Settings.config(
  { url: 'http://lathie.github.io/InternetKarmaPebble/'},
  function(e) {
    console.log('opening configurable');
    Settings.option('email', '');
  },
  function(e) {
    console.log('closed configurable');
    console.log(JSON.stringify(e.options));

  }
  
);

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
  text: 'TwitterKarma',
  textAlign: 'center'
});

var redditTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'RedditKarma',
  textAlign: 'center'
});

var githubTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'GithubKarma',
  textAlign: 'center'
});

var instaTitle = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 30),
  font: 'gothic-24-bold',
  text: 'InstaKarma',
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

var insta = new UI.Window({
  fullscreen : true  
});

main.add(mainTitle);
facebook.add(facebookTitle);
twitter.add(twitterTitle);
reddit.add(redditTitle);
github.add(githubTitle);

var URL = 'http://68d39f36.ngrok.com/getByEmail/' + Settings.option('email');

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully read user data!');
    
    var totalKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.totalText,
      textAlign: 'center'
    });
    main.add(totalKarma);
    
    var facebookKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.fbText,
      textAlign: 'center'
    });
    facebook.add(facebookKarma);
    
    var twitterKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.twText,
      textAlign: 'center'
    });
    twitter.add(twitterKarma);
    
    var redditKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.redditText,
      textAlign: 'center'
    });
    reddit.add(redditKarma);
    
    var githubKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.ghText,
      textAlign: 'center'
    });
    github.add(githubKarma);
    
    var instaKarma = new UI.Text({
      position: new Vector2(0, 65),
      size: new Vector2(144, 30),
      font: 'gothic-24-bold',
      text: data.instText,
      textAlign: 'center'
    });
    insta.add(instaKarma);
    
    //load the rest of the stuff
    
  },
  function(error) {
    // Failure!
    console.log('Failed data at ajax call: ' + error);
  }
);

main.show();


/*
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
*/

//main
main.on('click', 'up', function(e) {
  insta.show();
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
  insta.show();
});

insta.on('click', 'up', function(e) {
  github.show();
});

insta.on('click', 'down', function(e) {
  main.show();
});



