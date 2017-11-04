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
app.controller('homeController', ['$scope', 'cityService',
  function ($scope,cityService) {
    $scope.city = cityService.city

    $scope.$watch('city', function () {
        cityService.city = $scope.city
    })
  }
])

app.controller('weatherController', ['$scope', 'cityService',
  function ($scope, cityService) {
    $scope.city = cityService.city
  }
])


// -----------------------------------------------------------------------------
// Custom Service
// -----------------------------------------------------------------------------

app.service('cityService', function () {
  this.city = 'New York'
})
