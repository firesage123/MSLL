'use strict';

angular.module('myApp.view1', ['ngRoute', "ngMaterial", 'ngMessages', 'material.svgAssetsCache', 'ngTable'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'buttonController',
    controller: 'profileController',
    controller: 'tableController',
  });
}])

//.controller('View1Ctrl', [function() {

//}]);

.controller('buttonController', ['$scope', function($scope) {
  $scope.but = "button";

  $scope.traitsView = function() {
    $scope.but = "traits";
  };

    $scope.timeView = function() {
      $scope.but = "time";
  };

  $scope.compView = function() {
    $scope.but = "comparison";
};

}])

.controller('profileController', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.status = '  ';
    $scope.customFullscreen = false;

    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('This is an alert title')
          .textContent('You can specify some description text in here.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };

    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    };

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
  }])

  .controller('tableController', ['$scope', 'NgTableParams', function($scope, NgTableParams) {
    var dataset = [{old: "Dogs", new: "Cats"}, {old: "Music Lovers", new: "Animal Lovers"},
    {old: "foodie", new: "traveller"}, {old: "blonde", new: "brunette"}, {old: "active", new: "lazy bum"}, {old: "asian", new: "white"},
    {old: "likes basketball", new: "likes baseball"},{old: "rich", new: "really rich"}, {old: "older", new: "younger"}, {old: "beards", new: "no beards"},
    {old: "50 shades of grey", new: "50 shades of red"}, {old: "glasses", new: "contacts"}];
    $scope.tableParams = new NgTableParams({page:1, count:dataset.length}, { counts:[], dataset: dataset});
  }]);

window.onload = init;

function init() {
  var hello = document.getElementById('popupContainer').children[0].children[1];
  console.log(hello);
  var goodbye = document.querySelector('#likes');
  console.log(goodbye);
}
