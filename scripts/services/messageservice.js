'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http) {
    return {
      getMessages: function(){
        return $http.get('http://localhost:10101');
      },

      postMessage: function(message){
        return $http.post('http://localhost:10101', {text: message});
      }
    }
  });
