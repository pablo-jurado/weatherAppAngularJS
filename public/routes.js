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
