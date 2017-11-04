var app = angular.module('weatherApp', ['ngRoute', 'ngResource'])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/page1', {
      templateUrl: 'pages/page1.html',
      controller: 'page1Controller'
    })
    .when('/page2', {
      templateUrl: 'pages/page2.html',
      controller: 'page2Controller'
    })
    .otherwise('/')

})

app.controller('page1Controller', function ($scope) {
  console.log($scope)
})

app.controller('page2Controller', function ($scope) {
  console.log($scope)
})
