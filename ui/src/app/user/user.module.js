import angular from 'angular'

import userRoutes from './user.routes'
import PostService from './post.service'
import UserService from './user.service'
import config from './user.config'

export default
  angular
    .module('fastbook.user', [])
    .constant('userRoutes', userRoutes)
    .service('postService', PostService)
    .service('userService', UserService)
    .config(config)
    .name
