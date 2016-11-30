angular.module('sampleApp').controller('TestChatController', function($scope, $http) {

  $scope.innterHeight = window.innerHeight / 3;
  var channelssss;
  var sb = new SendBird({
    appId: "D5B18F28-22F1-4D72-ABFA-F66C0BAAE04C"
  });

  sb.connect("KMT", function(user, error) {
    console.log("USER:", user)
    var openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();

    openChannelListQuery.next(function (response, error) {
      if (error) {
        console.log(error);
        return;
      }

      console.log(response);

      sb.OpenChannel.getChannel(response[0].url, function (channel, error) {
        if (error) {
          console.error(error);
          return;
        }
        channelssss = channel;
        channelssss.enter(function(response, error){
          if (error) {
            console.error(error);
            return;
          }else
          console.log("Channel Join Response:", response)

        });

        var messageListQuery = channelssss.createPreviousMessageListQuery();

        messageListQuery.load(20, true, function(messageList, error){
          if (error) {
            console.error(error);
            return;
          }
          $scope.messageList = messageList;
          $scope.$digest();
          console.log(messageList);
        });
      });
    });
  });

$scope.send = function(){
  console.log("lllllllll",$scope.message)
  channelssss.sendUserMessage($scope.message, "", function(message, error){
    if (error) {
      console.error(error);
      return;
    }
    console.log(message);
    $scope.messageList.push(message);
    $scope.$digest();

  });
}

  var ChannelHandler = new sb.ChannelHandler();

  ChannelHandler.onMessageReceived = function(channel, message){
    console.log(channel, message);
    $scope.messageList.push(message);
    $scope.$digest();


  };
  sb.addChannelHandler("myChannel", ChannelHandler);

})


/*We are implementing the following flow:
* The user automaticaly created with their email and name when they want to access the chat
 * If user is already created then we will just use that user id to send the message
 * Whenever any new event is created we will also create a chat group with the same name
 * Registered user of that event can group chat for the same event
 * */