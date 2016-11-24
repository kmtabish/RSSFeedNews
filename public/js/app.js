'use strict';
angular.module('sampleApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/bbc', {
      templateUrl: 'views/BBC.html',
      controller: 'BBCController'
    })

    .when('/ndtv', {
      templateUrl: 'views/NDTV.html',
      controller: 'NDTVController'
    });

  $locationProvider.html5Mode(true);

}])

