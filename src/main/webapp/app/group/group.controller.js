(() => {
  angular
    .module('fastbook.group')
    .controller('GroupController', GroupController);

    GroupController.$inject = [
      'groupService',
      'userService',
      'accessService',
      '$state',
      '$scope',
      '$mdDialog',
      '$log',
      'chosenGroup',
      'groupMembers',
      'posts'
    ];

    function GroupController(
      groupService,
      userService,
      accessService,
      $state,
      $scope,
      $mdDialog,
      $log,
      chosenGroup,
      groupMembers,
      posts
    ) {

      this.groupService = groupService;
      this.profileGroup = chosenGroup;
      this.groupMembers = groupMembers;
      this.posts = posts;
      this.groupPostObject = groupService.groupPost;
      this.loggedInUser = accessService.currentUser;

      $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Invalid Operation')
        .textContent('You are already a member of this group')
        .ariaLabel('Alert Dialog')
        .ok('OK')
        .targetEvent(ev)
        );
      };

      this.post = () => {
        $log.debug(this.groupPostObject.text)
        $scope.date = new Date();
        this.groupPostObject.timestamp = $scope.date;
        this.groupPostObject.user = this.loggedInUser;
        $log.debug(this.groupPostObject)
        $log.debug(this.profileGroup.id)
          return groupService
          .postToGroup(this.profileGroup.id, this.groupPostObject)
          .then($state.go($state.current, {}, {reload: true}));
        };

      this.joinGroup = () => {
        groupService
          .joinGroup(this.profileGroup.id, this.loggedInUser)
          .then(response => {
            if (response == null) {
              $scope.showAlert()
            }
          });
      }
    }
})();
