'use strict';

(() => {
  angular
    .module('fastbook.chat')
    .config(config)

    config.$inject = ['chatRoutes', '$stateProvider']

    function config(chatRoutes, $stateProvider) {
      Object.keys(chatRoutes) // JS built in function
        .forEach(key => {
          $stateProvider
            .state(key, chatRoutes[key]);  //accesses each state object given the key and the object
        })
    }

})();
