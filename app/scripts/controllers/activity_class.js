'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('ClassCtrl', function ($scope,ActivityService,$q,$http,$location,$window,$route) {  
   console.log("class");
  
   //function to make the Tabs on single page.
   $scope.select_type = function(obj){
	   
	   if(obj=="service"){
             //  $window.location.href='#/activity_service';
		   $location.path('/activity_service');
                 // $route.reload();
                  
	   } else {
		   $location.path('/activity_class');
	   }
	 
   }
    
});
