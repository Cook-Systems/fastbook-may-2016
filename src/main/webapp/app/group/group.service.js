'use strict';

(() => {
  angular
    .module('fastbook.group')
    .service('groupService', GroupService);

    GroupService.$inject = ['$http', '$state', '$log'];

    function GroupService(
      $http,
      $state,
      $log,
      $scope,
      accessService
    ) {

      this.listOfGroups;
      this.groupPost;
      this.currentUser = accessService;

      this.getGroupsByName = function(name) {
       return $http
         .get('./api/groups/find/' + name)
         .then(response =>{
           $log.debug(response);
           return response.data;
         });
     }

      this.getUsersInGroup = (id) => {

        return $http
          .get('./api/groups/users/' + id)
          .then(response => response.data)
      }

      this.getGroupPosts = (id) => {

        return $http
          .get('./api/post/group/' + id)
          .then(response => response.data)
      }

      this.postToGroup = (groupPost) => {
        $scope.date = new Date();
        groupPost.timestamp = $scope.date;
        groupPost.user = this.currentUser;
        return $http
          .post('./api/posts/group/' + groupService.group.id, groupPost)
          .then(response => response.data)
      }

      this.createGroup = (id, groupName) => {
        return $http
          .post('./api/groups/' + id, groupName)
          .then(response => response.data)
      }

      this.joinGroup = (id) => {
        return $http
          .put('./api/groups/' + id)
          .then(response => response.data)
      }

      // not implemented yet
      // this.leaveGroup = () => {
      //   return $http
      //     .post('./api')
      //     .then(response => response.data)
      // }

      this.getGroup = (id) => {
        return $http
          .get('./api/groups/' + id)
          .then(response => response.data)
      }


    }

})();
