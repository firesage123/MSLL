'use strict';

angular.module('myApp.initScreen', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/initScreen', {
    templateUrl: 'initScreen/initScreen.html',
    controller: 'initScreenCtrl'
  });
}])

.controller('initScreenCtrl', [function() {

}]);
