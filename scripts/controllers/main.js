'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ($scope, MessageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.messages = [];

    $scope.getMessages = function(){
       MessageService.getMessages().then(function(data){
          $scope.messages = data.data;
          console.log(data);
          console.log($scope.messages);
       });
    }

    $scope.postMessage = function(message){
      MessageService.postMessage(message).then(function(){
        $scope.getMessages();
      })
    }
     $scope.getMessages();
  });
