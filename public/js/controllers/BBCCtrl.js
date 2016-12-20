angular.module('sampleApp').controller('BBCController', function($scope, $http) {
	var BBC = this;
	BBC.owl = {
		items: ["item 1", "item 2"],
		options: {
			loop: true,
			nav: false
		}
	};

	console.log(BBC.owl.items)
	//$scope.$digest();
	//$scope.innterHeight = window.innerHeight/3;
	//$scope.innterWidth = window.innerWidth/3;

	$scope.innterHeight = window.innerHeight;
	$scope.innterWidth = window.innerWidth;
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

	$scope.openDetail = function(link){
		console.log("link Open:", link)
	}


});
