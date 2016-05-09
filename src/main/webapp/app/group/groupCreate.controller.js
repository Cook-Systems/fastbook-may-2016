(() => {
  angular
    .module('fastbook.group')
    .controller('GroupCreateController', GroupCreateController);

    GroupCreateController.$inject = [
      'groupService',
      'userService',
      'accessService',
      '$state',
      '$scope',
      '$log'
    ];

    function GroupCreateController(
      groupService,
      userService,
      accessService,
      $state,
      $scope,
      $log


    ) {
      this.groupService = groupService;

            this.create = () => {
              groupService
                .createGroup(accessService.currentUser.id, this.group)
            };
      }
    }
)();
