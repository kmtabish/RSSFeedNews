angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

	$scope.tagline = 'Nothing beats a pocket protector!';
	$http({
	  method: 'GET',
	  url: 'http://localhost:1234/feedBBC'
	}).then(function successCallback(response) {
		$scope.data = response.data.data.items;

		console.log("response:", $scope.data)
	    // this callback will be called asynchronously
	    // when the response is available
	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

});
