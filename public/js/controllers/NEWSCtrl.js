angular.module('sampleApp').controller('NEWSController', function($scope, $http) {
	var NEWS = this;
	NEWS.owl = {
		items: ["item 1", "item 2"],
		options: {
			loop: true,
			nav: false
		}
	};

	//console.log(BBC.owl.items)
	//$scope.$digest();
	//$scope.innterHeight = window.innerHeight/3;
	//$scope.innterWidth = window.innerWidth/3;

	$scope.innterHeight = window.innerHeight;
	$scope.innterWidth = window.innerWidth;
	$scope.data = [];
	$scope.tagline = 'Nothing beats a pocket protector!';
	var getBBC = function(callback) {
		$http({
			method: 'GET',
			url: 'http://rssfeednews.herokuapp.com/feedBBC'
		}).then(function successCallback(response) {
			$scope.dataBBC = response.data.data.items;
			callback()
			console.log("response:", $scope.data)
			// this callback will be called asynchronously
			// when the response is available
		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
	var getMashable = function(callback) {
		$http({
			method: 'GET',
			url: 'http://rssfeednews.herokuapp.com/feedMashable'
		}).then(function successCallback(response) {
			$scope.dataMASH = response.data.data.items;
			callback()
			//	$scope.data = ($scope.dataMASH);

			console.log("response:", $scope.data)
			// this callback will be called asynchronously
			// when the response is available

		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}

	var getCNET = function(callback) {
		$http({
			method: 'GET',
			url: 'http://rssfeednews.herokuapp.com/feedcnet'
		}).then(function successCallback(response) {
			$scope.dataCNET = response.data.data.items;
			callback()
			//	$scope.data = ($scope.dataMASH);

			console.log("response:", $scope.data)
			// this callback will be called asynchronously
			// when the response is available

		}, function errorCallback(response) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
	var concatArray = function(callback){
		$scope.data = $scope.dataMASH.slice(0,15).concat($scope.dataBBC.slice(0,15)).concat($scope.dataCNET.slice(0,15))
		callback()
	}
	$scope.openDetail = function(link){
		console.log("link Open:", link)
	}

	async.series([
		getBBC, getMashable, getCNET, concatArray
	]);

});
