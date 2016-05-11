import angular from 'angular'

import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'
import ngSanitize from 'angular-sanitize'
import uiRouter from 'angular-ui-router'

angular
  .module('fastbook', [
    ngAnimate,
    ngAria,
    ngMaterial,
    ngMessages,
    ngSanitize,
    uiRouter,
    'ui.router',
    'dtrw.bcrypt',
    'fastbook.user',
    'fastbook.access',
    'fastbook.friend',
    'fastbook.group'
  ])
