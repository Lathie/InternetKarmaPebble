/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'InternetKarma',
  //icon: 'images/menu_icon.png',
  //subtitle: location + ", " + temperature,
  //body: description
});

var facebook = new UI.Card({
  title:'FacebookKarma',
  
});

var twitter = new UI.Card({
  title:'TwitterKarma',
  
});

var reddit = new UI.Card({
  title:'RedditKarma',
  
});

var github = new UI.Card({
  title:'GithubKarma',
  
});

//weather stuff
var cityName = 'Urbana';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully data!');
    
   var location = data.name;
   var temperature = Math.round(data.main.temp - 273.15) + 'C';
    
   var description = data.weather[0].description; // that uppercase tho
   //description = description.charAt(0).toUpperCase() + description.substring(1);
    
    main.subtitle(location + ", " + temperature);
    main.body(description);
    
    facebook.subtitle(temperature);
    twitter.subtitle(temperature);
    reddit.subtitle(temperature);
    github.subtitle(temperature);
    
  },
  function(error) {
    // Failure!
    console.log('Failed data: ' + error);
  }
);

main.show();

//END SETUP STUFF I THINK


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



