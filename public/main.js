// -----------------------------------------------------------------------------
// Module
// -----------------------------------------------------------------------------
var app = angular.module('weatherApp', ['ngRoute', 'ngResource'])


// -----------------------------------------------------------------------------
// Routes
// -----------------------------------------------------------------------------
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/weather', {
      templateUrl: 'pages/weather.html',
      controller: 'weatherController'
    })
    .otherwise('/')
})


// -----------------------------------------------------------------------------
// Controllers
// -----------------------------------------------------------------------------
app.controller('homeController', function ($scope) {
  console.log($scope)
})

app.controller('weatherController', function ($scope) {
  console.log($scope)
})
