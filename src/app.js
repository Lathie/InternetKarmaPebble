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
  title:'InternetKarma',
  
});

var twitter = new UI.Card({
  title:'InternetKarma',
  
});

var reddit = new UI.Card({
  title:'InternetKarma',
  
});

var github = new UI.Card({
  title:'InternetKarma',
  
});

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
    
    
  },
  function(error) {
    // Failure!
    console.log('Failed data: ' + error);
  }
);

main.show();


main.on('click', 'down', function(e) {

  facebook.show();
});
