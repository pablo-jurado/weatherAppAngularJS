// -----------------------------------------------------------------------------
// Module
// -----------------------------------------------------------------------------
var app = angular.module('weatherApp', ['ngRoute', 'ngResource'])


// -----------------------------------------------------------------------------
// Custom Service
// -----------------------------------------------------------------------------

app.service('cityService', function () {
  this.city = 'New York'
})


// -----------------------------------------------------------------------------
// Custom Directive
// -----------------------------------------------------------------------------

app.directive('weatherContainer', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherContainer.html',
    replace: true,
    scope: {
      description: '@',
      temp: '@',
      date: '='
    }
  }
})
