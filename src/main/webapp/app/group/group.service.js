'use strict';

(() => {
  angular
    .module('fastbook.group')
    .service('groupService', GroupService);

    GroupService.$inject = ['$http', '$state', '$log'];

    function GroupService(
      $http,
      $state,
      $log
    ) {

      this.group;
      this.listOfGroups;
      this.groupPost;

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

      this.getGroupPosts = (groupId) => {
        return $http
          .get('./api/posts/group/' + groupId)
          .then(response => response.data)
      }

      this.postToGroup = (groupId, post) => {
        return $http
          .post('./api/posts/group/' + groupId, post)
          .then(response => response.data)
      }

      this.createGroup = (userId, group) => {
        return $http
          .post('./api/groups/' + userId, group)
          .then(response => {
            console.log('createdGroup: ' + response.data.id)
            this.group = response.data;
            $state.go('group', {groupId: this.group.id})
          })
      }

      this.joinGroup = (groupId, loggedInUser) => {
        return $http
          .put('./api/groups/' + groupId, loggedInUser)
          .then(response => response.data)
      }

      // not implemented yet
      // this.leaveGroup = () => {
      //   return $http
      //     .post('./api')
      //     .then(response => response.data)
      // }

      this.getGroup = (groupId) => {
        return $http
          .get('./api/groups/' + groupId)
          .then(response => response.data)
      }

      this.getGroupsOwner = (groupId) => {
        return $http
          .get('./api/groups/owner/' + groupId)
          .then(response => response.data)
      }
    }
})();
