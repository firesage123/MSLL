'use strict';

angular.module('myApp.index_login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index_login', {
    templateUrl: 'indexLogin/index_login.html',
    controller: 'index_loginCtrl'
  });
}])

.controller('index_loginCtrl', [function() {

}]);
