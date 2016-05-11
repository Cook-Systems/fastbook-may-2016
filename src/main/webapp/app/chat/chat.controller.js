'use strict';

(() => {
  angular
    .module('fastbook.chat')
    .controller('ChatController', ChatController)

  ChatController.$inject = ['accessService', '$log', '$scope'];

  function ChatController (accessService, $log, $scope) {
    $log.debug('Creating ChatController...');

    this.socket = new WebSocket('ws://10.1.1.168:8080/fastbook/chat');

    $log.debug('Connected to server');

    this.username = accessService.currentUser.firstName + ' ' + accessService.currentUser.lastName;
    $log.debug(this.username);

    this.messages = [];
    $scope.message = '';

    $log.debug('Variables Initialized');

    this.socket.onmessage = (message) => {
		  this.messages.push(JSON.parse(message.data));
		  $scope.$apply();
      $log.debug('Received Message')
      $log.debug(message.data);
	  }

    this.sendMessage = function(message) {
      $log.debug('Sending Message')
      $log.debug(message)

		  if (message && message !== '') {
			  var newMessage = {
				  'text' : message,
          'username' : this.username
			  };

      $log.debug(newMessage);

			this.socket.send(JSON.stringify(newMessage));

      $scope.message = '';
      }
	  }

    $log.debug('Finished Creation');
  }

})();
