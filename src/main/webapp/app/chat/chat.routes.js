'use strict';

(() => {
  angular
    .module('fastbook.chat')
    .constant('chatRoutes', {

      chat: {
        url: '/chat',
        templateUrl: 'app/chat/chat.template.html',
        controller: 'ChatController',
        controllerAs: 'chat',
        data: {
          loggedIn: true
        }
      }
    });
})();
