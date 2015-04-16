'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('ClassCtrl', function ($scope,ActivityService,$q,$http,$location) {  
	  
   //function to make the Tabs on single page.
   $scope.select_type = function(obj){
	   
	   if(obj=="service"){
		   $location.url('/activity_service');
	   } else {
		   $location.url('/activity_class');
	   }
	 
   }
    
});
