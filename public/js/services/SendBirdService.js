angular.module('sampleApp').factory('sendBirdService', ['$http', '$q', function($http, $q) {
 return{
   registerChat:function(appID){
     var deferred = $q.defer();

     var sb = new SendBird({
       appId: appID
     });
     deferred.resolve(sb);
   }
 }


}]);
