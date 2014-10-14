'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ($scope, MessageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.messages = [];

    $scope.getMessages(){
       MessageService.getMessages().then(function(data){
          $scope.messages = data;
       });
    }

    $scope.postMessage(message){
      MessageService.postMessage(message){
        $scope.getMessages();
      }
    }
  });
