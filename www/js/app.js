// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller("mainCrl", function ($scope, $http) {
  //https://www.w3schools.com/angular/tryit.asp?filename=try_ng_routing
  //https://www.w3schools.com/angular/angular_routing.asp

  $scope.data1 = [];
  $scope.click = false;

  $scope.getMarvelData = function () {
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
  };

  $scope.getDCData = function () {
    $scope.click = false;

    $http({
      method: 'GET',
      url: '../db.json'
    }).then(function successCallback(response) {
      $scope.data1.push(response.data);
      $scope.clone1 = [];
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].dc;
      }
    }, function errorCallback(response) {
      console.log('error' + response.statusText);
    });
  }
});
