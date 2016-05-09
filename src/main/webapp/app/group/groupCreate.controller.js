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
              $log.debug(this.group.name);
              $log.debug(accessService.currentUser.id);
              $log.debug(this.group)
              groupService
                .createGroup(accessService.currentUser.id, this.group)
            };
      }
    }
)();
