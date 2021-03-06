angular.module('sampleApp', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/bbc', {
			templateUrl: 'views/nerd.html',
			controller: 'NerdController'
		})

		.when('/ndtv', {
			templateUrl: 'views/geek.html',
			controller: 'GeekController'
		});

	//$locationProvider.html5Mode(true);

}]);
