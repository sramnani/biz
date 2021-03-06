'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('buildCtrl', function ($scope,$q,$http,$routeParams,$location,$window,userService) {
	  
	  // fetch data from json and display the current git build.
	  $http.get('views/build.json').success(function(data) {
		$scope.build = data;
		
	  });
	  
	  $scope.getImg = function(){
		  if($location.path()=='/login'){
			  return true;
		  } else {
			  return false;
		  }
	  }
	  
  });
