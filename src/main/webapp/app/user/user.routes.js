'use strict';

(() => {
  angular
    .module('fastbook.user')
    .constant('userRoutes', {

      profile: {
        url: '/users/{id}',
        templateUrl: 'app/user/profile.template.html',
        controller: 'ProfileController',
        controllerAs: '$profileCtrl',
        resolve: {
          user: ['userService', '$stateParams', function(userService, $stateParams) {
            return userService.getUserById($stateParams.id);
          }],
          userRelation:
          ['userService', '$stateParams', 'accessService',
            function(userService, $stateParams, accessService) {
              return userService.getFriendRequestOnProfile($stateParams.id, accessService.currentUser.id);
          }]
        },
      data: {
        loggedIn: false
      }
    }
})
})();
