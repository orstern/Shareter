angular.module('Shareter', [
  'ngRoute',
  'mobile-angular-ui',
  'Shareter.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});