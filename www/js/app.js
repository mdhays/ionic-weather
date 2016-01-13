// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('weatherCtrl', function($http, $q) {
  // Assigning weather to this so that we can use it to reference the controller scope.
  var weather = this;
  navigator.geolocation.getCurrentPosition(function(geopos) {

    var lat = geopos.coords.latitude;
    var lon = geopos.coords.longitude;
    var apiKey = 'da4e9d8f6529de29';
    var url = 'http://api.wunderground.com/api/da4e9d8f6529de29/conditions/q/' + lat + +',' + lon + '.json';

    var promise = $http.get(url).then(function(res) {
      var data = res.data.current_observation;
      // Gets the data from the data object.
      // weather.temp = res.response.current_observation.temp_f + '°';
      // weather.condition = res.data.currently.summary;
      console.log(res);
    })
  });

  //Returns the data from the data object.
  weather.temp = '--';
  weather.condition = '----';
  // Try to get an icon to pop up.
  //Try doing it with css and use angular to set the class.
});


// 1. Switch to Weather Underground
// 2. Use geoip weather until we get coords
// 3. high/low 5 day forecast (on my own)
// 4. search box
// 5. save searches


