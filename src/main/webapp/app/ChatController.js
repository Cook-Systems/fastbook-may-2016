/**
 *
 */

angular.module('fastbook').controller('ChatController', function($scope, $log, accessService) {
	var controller = this;



			$log.debug('trying to establish my web_socket');

	var socket = new WebSocket("ws://localhost:8080/fastbook/chat");

			$log.debug('new web_socket established');

	socket.onclose = function() {

		//periodically try to reconnect

	}

	socket.onmessage = function(message) {

		controller.messages.push(JSON.parse(message.data));
		$scope.$apply();
	};


	controller.visible = true;
	controller.expandOnNew = true;

	controller.messages = [];


	controller.sendMessage = (message) => {
		$log.debug('trying to send a message: '+accessService.currentUser.firstName)
		if (message !== '') {
		// var username = this.loggedInUser.userName;
			var messaget = {
				'username' : accessService.currentUser.firstName,
				'content' : message
			};

			$log.debug(messaget)

			socket.send(JSON.stringify(messaget));
			$log.debug('sent a message')
			// $log.debug()

		}
	};


});
