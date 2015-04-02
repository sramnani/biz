'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('buildCtrl', function ($scope,$q,$http,$routeParams,$location,$window,UserService) { 
	  
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
