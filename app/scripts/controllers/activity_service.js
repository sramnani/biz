'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('ServiceCtrl', function ($scope,ActivityService,$q,$http) {  
	  
   $scope.activity_service={};
   
   $scope.add_activity_service = function(){
	   
	   
	   ActivityService.add_activity_service(activity_service).then(function(data){
		   
			console.log("Activity service added successfully");
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
	   
	   
   }
    
    $scope.register = function(){
		
		ActivityService.register().then(function(data){
		   
			console.log("Activity service added successfully");
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
		
	}
    



    
});
