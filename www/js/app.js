angular.module('starter', ['ionic', 'ngRoute'])
.controller("mainCrl", function ($scope, $http) {

  $scope.data = [];
  $scope.click1 = false;
  $scope.heroInfo = [];
  $scope.clickH = false;
  $scope.showMainDiv = false;

  $scope.check = function () {
    return (!$scope.showMainDiv);
  };

  $http({
    method: 'GET',
    url: '../db.json'
  }).then(function successCallback(response) {
    $scope.data.push(response.data);
    $scope.clone1 = [];
    $scope.clone2 = [];
    for (var key in $scope.data) {
      $scope.clone1 = $scope.data[key].marvel;
      $scope.clone2 = $scope.data[key].dc;
    }
  }, function errorCallback(response) {
    console.log('error' + response.statusText);
  });

  $scope.getMarvelData = function () {
    $scope.clickM = true;
    $scope.clickD = false;
  };

  $scope.getDCData = function () {
    $scope.clickM = false;
    $scope.clickD = true;
  };

  $scope.showMarvelCartoons = function () {
    $scope.click1 = true;
  };

  $scope.showMarvelMovies = function () {
    $scope.click1 = true;
    $scope.mainDiv = false;
  };

  $scope.showDCCartoons = function () {
    $scope.clickD = true;
  };

  $scope.showDCMovies = function () {
    $scope.clickD = true;
  };

  $scope.showMarvelComics = function () {

  };
  $scope.showDCComics = function () {

  };

  $scope.getMarvelHero = function (hero) {
   // console.clear();
    $scope.heroInfo.length = 0;
    $scope.clickH = true;
    $scope.filteredArr = [];

    for (key in $scope.clone1.movies) {
      $scope.filteredArr.push($scope.clone1.movies[key].cast);
      if (~$scope.clone1.movies[key].cast.indexOf(hero)){
       // console.log($scope.clone1.movies[key]);
        $scope.heroInfo.push($scope.clone1.movies[key]);
      }
    }
    $scope.mainDiv = false;
  }
}).config( ['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/marvel_movies', {
      templateUrl: 'templates/marvel_movies.html'
    })
    .when('/dc_movies', {
      templateUrl: 'templates/dc_movies.html'
    })
    .otherwise({
      redirectTo: 'index.html'
    });
}]);

