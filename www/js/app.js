angular.module('starter', ['ionic', 'ngRoute'])
.controller("mainCrl", function ($scope, $http) {

  $scope.data = [];
  $scope.click1 = false;
  $scope.heroInfo = [];
  $scope.clickH = false;
  $scope.showMainDiv = true;
  $scope.showMovies = false;

  $scope.check = function () {
    return ($scope.showMainDiv = false, $scope.showMovies = true);
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

  $scope.getMarvelMovieHero = function (hero) {
    $scope.heroInfo.length = 0;
    $scope.clickH = true;
    $scope.filteredArr = [];

    for (key in $scope.clone1.movies) {
      $scope.filteredArr.push($scope.clone1.movies[key].cast);
      if (~$scope.clone1.movies[key].cast.indexOf(hero)){
        $scope.heroInfo.push($scope.clone1.movies[key]);
      }
    }
    $scope.message = 'There are movies with ' + hero + ' below: ';
  };
  $scope.getMarvelCartoonHero = function (hero) {
    $scope.heroInfo.length = 0;
    $scope.clickH = true;
    $scope.filteredArr = [];

    for (key in $scope.clone1.cartoons) {
      $scope.filteredArr.push($scope.clone1.cartoons[key].cast);
      if (~$scope.clone1.cartoons[key].cast.indexOf(hero)){
        $scope.heroInfo.push($scope.clone1.cartoons[key]);
      }
    }
    $scope.message = 'There are cartoons with ' + hero + ' below: ';
  };
  $scope.getMarvelComicsHero = function (hero) {
    $scope.heroInfo.length = 0;
    $scope.clickH = true;
    $scope.filteredArr = [];

    for (key in $scope.clone1.comics) {
      $scope.filteredArr.push($scope.clone1.comics[key].cast);
      if (~$scope.clone1.comics[key].cast.indexOf(hero)){
        $scope.heroInfo.push($scope.clone1.comics[key]);
      }
    }
    $scope.message = 'There are comics with ' + hero + ' below: ';
  };
}).config( ['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/marvel_movies', {
      templateUrl: 'templates/marvel_movies.html'
    })
    .when('/dc_movies', {
      templateUrl: 'templates/dc_movies.html'
    })
    .when('/marvel_cartoons', {
      templateUrl: 'templates/marvel_cartoons.html'
    })
    .when('/marvel_comics', {
      templateUrl: 'templates/marvel_comics.html'
    })
    .when('/dc_cartoons', {
      templateUrl: 'templates/dc_cartoons.html'
    })
    .when('/dc_comics', {
      templateUrl: 'templates/dc_comics.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

