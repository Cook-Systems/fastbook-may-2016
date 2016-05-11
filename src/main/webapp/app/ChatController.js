'use strict';

(() => {
  angular
    .module('fastbook.chat')
    .controller('ChatController', ChatController);

    ChatController.$inject = [
      '$scope', '$log', 'accessService'
    ];

    function ChatController($scope, $log, accessService) {


			accessService.socket.onclose = function() {

				//periodically try to reconnect

			}

			accessService.socket.onmessage =(message) => {

				this.messages.push(JSON.parse(message.data));
				$scope.$apply();
			};


			// controller.visible = true;
			// controller.expandOnNew = true;

			this.messages = [];


			this.sendMessage = (message) => {
				$log.debug('trying to send a message: '+accessService.currentUser.firstName)
				if (message !== '') {
				// var username = this.loggedInUser.userName;
					var messaget = {
						'username' : accessService.currentUser.firstName,
						'content' : message
					};

					$log.debug(messaget)

					accessService.socket.send(JSON.stringify(messaget));
					$log.debug('sent a message')
					// $log.debug()

				}
				};
    }


})();
