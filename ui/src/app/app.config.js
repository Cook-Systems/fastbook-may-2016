export default config

config.$inject = [
  '$urlRouterProvider',
  '$locationProvider',
  '$mdThemingProvider'
];

function config(
  $urlRouterProvider,
  $locationProvider,
  $mdThemingProvider
) {
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  $mdThemingProvider.theme('default')
}
