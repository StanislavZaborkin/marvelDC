angular.module('starter', ['ionic', 'ngRoute'])
.controller("mainCrl", function ($scope, $http, $routeParams) {

  $scope.param = $routeParams.param;

  $scope.data1 = [];
  $scope.clickM = false;
  $scope.clickD = false;
  $scope.click1 = false;
  $scope.heroInfo = [];

  $scope.getMarvelData = function () {
    $scope.clickD = false;
    $scope.clickM = true;
    $scope.clone1 = [];
    $scope.filteredArr = [];
      for (var key in $scope.data1) {
        $scope.clone1 = $scope.data1[key].marvel;
      }
  };

  $scope.showMarvelCartoons = function () {
    $scope.click1 = true;
  };

  $scope.showMarvelMovies = function () {
    $scope.click1 = true;
  };

  $scope.showDCCartoons = function () {
    $scope.clickD = true;
  };

  $scope.showDCMovies = function () {
    $scope.clickD = true;
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
   // console.clear();
    $scope.heroInfo.length = 0;

    for (key in $scope.clone1.movies) {
      $scope.filteredArr.push($scope.clone1.movies[key].cast);
      if (~$scope.clone1.movies[key].cast.indexOf(hero)){
       // console.log($scope.clone1.movies[key]);
        $scope.heroInfo.push($scope.clone1.movies[key]);
      }
    }
  }
}).controller("newPage", function ($scope) {
  $scope.message = 'Hi, AngularJS!';
}).config( ['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/first/: param?', {
      templateUrl: 'templates/first.html',
      controller:'mainCrl'
    })
    .when('/second', {
      templateUrl: 'templates/second.html',
      controller: 'newPage'
    })
    .otherwise({
      redirectTo: 'main.html'
    });
}]);

