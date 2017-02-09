'use strict';

angular.module('myApp.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/create', {
    templateUrl: 'makeAcct/create.html',
    controller: 'createCtrl'
  });
}])

.controller('createCtrl', [function() {

}]);
