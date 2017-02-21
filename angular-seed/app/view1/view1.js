'use strict';

angular.module('myApp.view1', ['ngRoute', "ngMaterial", 'ngMessages', 'material.svgAssetsCache', 'ngTable', 'zingchart-angularjs'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'buttonController',
    controller: 'profileController',
    controller: 'tableController',
    controller: 'chartController'
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
  }])

  .controller('chartController', function($scope) {

    $scope.myJson = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [27],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "American"
      }
      }, {
          text: "167.114.156.198",
          values: [13],
          backgroundColor: "#029676",
        tooltip: {
          text: "Chinese"
      }
      }, {
          text: "103.24.77.25",
          values: [15],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Korean"
      }
      }, {
          text: "46.4.68.142",
          values: [12],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "Italian"
      }
      }, {
          text: "American",
          values: [33],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Indian"
      }
      }]
  };

$scope.myJson1 = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [35],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "Basketball"
      }
      }, {
          text: "167.114.156.198",
          values: [10],
          backgroundColor: "#029676",
        tooltip: {
          text: "Baseball"
      }
      }, {
          text: "103.24.77.25",
          values: [40],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Football"
      }
      }, {
          text: "46.4.68.142",
          values: [7],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "Golf"
      }
      }, {
          text: "American",
          values: [8],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Hockey"
      }
      }]
  };

$scope.myJson2 = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [30],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "Travel"
      }
      }, {
          text: "167.114.156.198",
          values: [15],
          backgroundColor: "#029676",
        tooltip: {
          text: "Eating"
      }
      }, {
          text: "103.24.77.25",
          values: [10],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Gym"
      }
      }, {
          text: "46.4.68.142",
          values: [35],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "Sleeping"
      }
      }, {
          text: "American",
          values: [10],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Music"
      }
      }]
  };

$scope.myJson3 = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [20],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "Accountant"
      }
      }, {
          text: "167.114.156.198",
          values: [27],
          backgroundColor: "#029676",
        tooltip: {
          text: "Engineer"
      }
      }, {
          text: "103.24.77.25",
          values: [35],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Doctor"
      }
      }, {
          text: "46.4.68.142",
          values: [5],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "Artist"
      }
      }, {
          text: "American",
          values: [13],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Teacher"
      }
      }]
  };

$scope.myJson4 = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [20],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "Suits"
      }
      }, {
          text: "167.114.156.198",
          values: [38],
          backgroundColor: "#029676",
        tooltip: {
          text: "Game of Thrones"
      }
      }, {
          text: "103.24.77.25",
          values: [10],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Sherlock"
      }
      }, {
          text: "46.4.68.142",
          values: [10],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "Hell's Kitchen"
      }
      }, {
          text: "American",
          values: [22],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Breaking Bad"
      }
      }]
  };

$scope.myJson5 = {
      globals: {
          shadow: false,
          fontFamily: "Verdana",
          fontWeight: "100"
      },
      type: "pie",
      backgroundColor: "#76b852",


      plot: {
          refAngle: "-90",
          borderWidth: "0px",
          valueBox: {
              placement: "in",
              text: "%npv %",
              fontSize: "15px",
              textAlpha: 1,
          }
      },
      series: [{
          text: "10.0.0.80",
          values: [48],
          backgroundColor: "#c1cf3a",
        tooltip: {
          text: "Pop"
      }
      }, {
          text: "167.114.156.198",
          values: [22],
          backgroundColor: "#029676",
        tooltip: {
          text: "Rap"
      }
      }, {
          text: "103.24.77.25",
          values: [7],
          backgroundColor: "#4ab5c5",
        tooltip: {
          text: "Country"
      }
      }, {
          text: "46.4.68.142",
          values: [13],
          backgroundColor: "#0889b1",
        tooltip: {
          text: "EDM"
      }
      }, {
          text: "American",
          values: [10],
          backgroundColor: "#325f24",
        tooltip: {
          text: "Classical"
      }
      }]
  };
  });

window.onload = init;

function init() {
  var hello = document.getElementById('popupContainer').children[0].children[1];
  console.log(hello);
}


function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}

function openTime(evt, timeName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("time");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink1");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(timeName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}