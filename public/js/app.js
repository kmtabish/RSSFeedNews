'use strict';
angular.module('sampleApp', ['ngRoute', 'angular-owl-carousel'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

    // home page
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    .when('/bbc', {
      templateUrl: 'views/BBC.html',
      controller: 'BBCController',
      controllerAs:'BBC'
    })

    .when('/ndtv', {
      templateUrl: 'views/NDTV.html',
      controller: 'NDTVController'
    })

    .when('/chat', {
      templateUrl: 'views/TestChat.html',
      controller: 'TestChatController'
    });

  $locationProvider.html5Mode(true);

}])

