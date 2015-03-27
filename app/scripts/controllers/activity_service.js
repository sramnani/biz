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
   
   $scope.add_activity_service = function(activity_service){
	   
	   
	   var activity_service= {};
	   
	   activity_service.offering={};
	   
	   activity_service.offering.name = $scope.name;
	   activity_service.offering.duration=$scope.duration;
	   activity_service.offering.unit=$scope.unit;
	   activity_service.offering.basePrice=$scope.basePrice;
	   activity_service.offering.type=$scope.type;
	   
	  // console.log(JSON.stringify(activity_service));
	  // return;
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
