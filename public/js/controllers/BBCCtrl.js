angular.module('sampleApp').controller('BBCController', function($scope, $http) {

	$scope.innterHeight = window.innerHeight/3;
	$scope.innterWidth = window.innerWidth/3;
	$scope.tagline = 'Nothing beats a pocket protector!';
	$http({
	  method: 'GET',
	  url: 'https://rssfeednews.herokuapp.com/feedBBC'
	}).then(function successCallback(response) {
		$scope.data = response.data.data.items;

		console.log("response:", $scope.data)
	    // this callback will be called asynchronously
	    // when the response is available

	  }, function errorCallback(response) {
	    // called asynchronously if an error occurs
	    // or server returns response with an error status.
	  });

	$scope.openDetail = function(link){
		console.log("link Open:", link)
	}
});
