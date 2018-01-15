angular.module('starter', ['ionic'])
.controller("mainCrl", function ($scope, $http) {
  //https://www.w3schools.com/angular/tryit.asp?filename=try_ng_routing
  //https://www.w3schools.com/angular/angular_routing.asp

  /*$scope.getMarvelData = function () {
    $scope.click = true;
    $http({
      method: 'GET',
      url: '../db.json'
    }).then(function successCallback(response) {
      $scope.data1.push(response.data);
      $scope.clone1 = [];
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].marvel;
      }
      $scope.cast = [];
      for (var i = 0; i < $scope.data1.length; i++) {
        $scope.cast = $scope.data1[i];
      }
      console.log($scope.cast);
    }, function errorCallback(response) {
    console.log('error' + response.statusText);
  });
  };*/

  $scope.data1 = [];
  $scope.click = false;
  $scope.click1 = false;

  $scope.showMovies = function () {
    $scope.click1 = true;
  };

  $http({
    method: 'GET',
    url: '../db.json'
  }).then(function successCallback(response) {
    $scope.data1.push(response.data);
  }, function errorCallback(response) {
    console.log('error' + response.statusText);
  });


  $scope.getMarvelData = function () {
    $scope.click = true;
      $scope.clone1 = [];
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].marvel;
      }
      /*$scope.cast = [];
      for (var i = 0; i < $scope.data1.length; i++) {
        $scope.cast = $scope.data1[i];
      }*/
  };

  $scope.getMarvelCartoons = function () {

  };

  $scope.getDCData = function () {
    $scope.click = true;
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].dc;
      }
  };

  $scope.someFunction = function (h) {
    console.log(h);
  }
});
