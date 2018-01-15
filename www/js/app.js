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
  $scope.clickM = false;
  $scope.clickD = false;
  $scope.click1 = false;

  $scope.getMarvelData = function () {
    $scope.clickD = false;
    $scope.clickM = true;
    $scope.clone1 = [];
    $scope.filteredArr = [];
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].marvel;
      }
      /*for (var i = 0; i < $scope.filteredArr.length; i++){
        console.log($scope.filteredArr[i]);
      }*/

    /*for (keyy in $scope.filteredArr) {
        if ($scope.filteredArr[keyy] === 'Spider-man') {
          console.log($scope.filteredArr);
        }

      }*/
    /*$scope.cast = [];
    for (var i = 0; i < $scope.data1.length; i++) {
      $scope.cast = $scope.data1[i];
    }*/
  };

  $scope.showMarvelCartoons = function () {
    $scope.click1 = true;
  };

  $scope.showMarvelMovies = function () {
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

  $scope.getDCData = function () {
    $scope.clickM = false;
    $scope.clickD = true;
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].dc;
      }
    console.log($scope.clone1);
  };

  $scope.getMarvelHero = function (hero) {
    console.clear();

    for (key in $scope.clone1.movies) {
      $scope.filteredArr.push($scope.clone1.movies[key].cast);
      if (~$scope.clone1.movies[key].cast.indexOf(hero)){
        console.log($scope.clone1.movies[key]);
      }

    }
  }
});
