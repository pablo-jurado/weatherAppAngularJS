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
    .when('/weather/:days', {
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

app.controller('weatherController',
  ['$scope', '$http', '$routeParams','cityService',
  function ($scope, $http, $routeParams, cityService) {
    $scope.city = cityService.city

    $scope.convertTemp = convertKtoF
    $scope.convertDate = formatTime

    var API_KEY = 'd84fac00591b5528031d9463da7c9cbb'
    var ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

    var url = ROOT_URL + '&q=' + $scope.city + ',us'

    $http({ method: 'GET', url: url})
      .then(successCallback, errorCallback);

    function successCallback(response) {

      var count = $routeParams.days || 1;
      var weatherArr = []

      for (var index = 0; index < count; index++) {
        if (index > 10) break
        weatherArr.push(response.data.list[index])
      }

      $scope.weather = weatherArr
    }

    function errorCallback(response) {
      // todo: handle error
      console.log(response)
    }
  }
])



function convertKtoF (deg) {
  return Math.round((1.8 * (deg - 273)) + 32)
}

function formatTime (unixTimestamp) {
  var date = new Date(unixTimestamp * 1000);
  return date
}


// -----------------------------------------------------------------------------
// Custom Service
// -----------------------------------------------------------------------------

app.service('cityService', function () {
  this.city = 'New York'
})
