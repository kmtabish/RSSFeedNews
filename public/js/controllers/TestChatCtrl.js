angular.module('sampleApp').controller('TestChatController', function($scope, $http) {

  $scope.innterHeight = window.innerHeight / 3;

  var sb = new SendBird({
    appId: "D5B18F28-22F1-4D72-ABFA-F66C0BAAE04C"
  });

  sb.connect("TABISHSSSS", function(user, error) {
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

        channel.enter(function(response, error){
          if (error) {
            console.error(error);
            return;
          }else
          console.log("Channel Join Response:", response)
          channel.sendUserMessage("Hello KHAN 1How are youwwwwwww?", "", function(message, error){
            if (error) {
              console.error(error);
              return;
            }
            console.log(message);
            var ChannelHandler = new sb.ChannelHandler();

            ChannelHandler.onMessageReceived = function(channel, message){
              console.log(channel, message);
            };
            sb.addChannelHandler("myChannel", ChannelHandler);
          });
        });
      });
    });
  });




})