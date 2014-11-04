/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

angular.module('MoviesApp', [])
	.controller('MoviesController', function($scope) {
		// initialize variables with list of movies such that it'll be accessed in the view
		$scope.movies = movies;

		//set up our sort column in scope
		$scope.sortCol = 'rank';
		$scope.sortReverse = false;

		$scope.sortBy = function (colName) {
			if($scope.sortCol == colName){
				$scope.sortReverse = !$scope.sortReverse;
			} else {
				$scope.sortReverse = false;
				$scope.sortCol =  colName;
			}
		};

		$scope.isSortedBy = function (colName) {
			return $scope.sortCol == colName;
		}
	});
