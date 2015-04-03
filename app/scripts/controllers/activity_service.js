'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('ServiceCtrl', function ($scope,ActivityService,$q,$http,$location) {  
	  
   $scope.activity_service={};
   
   $scope.select_type = function(obj){
	   
	   
	   
	   if(obj=="service"){
		   $location.url('/activity_service');
	   } else {
		   $location.url('/activity_class');
	   }
	   
	/*   if(obj=="camp"){
		   
		 //  document.getElementById(obj).classList.toggle('active', true);
		   
		   if(document.getElementById(obj).classList.contains("active")){
			   
			   document.getElementById(obj).classList.remove("active");
			   
			   if(!document.getElementById('service').classList.contains("active")){
					document.getElementById('service').classList.add("active");
			   }
			   
		   } else {
			   
			   document.getElementById(obj).classList.add("active");
			   if(document.getElementById('service').classList.contains("active")){
					document.getElementById('service').classList.remove("active");
			   }
		   }
	   } else {
		   
		   if(document.getElementById(obj).classList.contains("active")){
			   
			   document.getElementById(obj).classList.remove("active");
			   if(!document.getElementById('camp').classList.contains("active")){
					document.getElementById('camp').classList.add("active");
			   }
			   
			   
		   } else {
			   document.getElementById(obj).classList.add("active");
			   if(document.getElementById('camp').classList.contains("active")){
					document.getElementById('camp').classList.remove("active");
			   }
		   }
		   
		   
		   
	   }*/
	  
	  
   }
   
   $scope.add_activity_service = function(activity_service){
	   
	   
	   var activity_service= {};
	   
	   activity_service.offering={};
	   
	   activity_service.offering.name = $scope.name;
	   activity_service.offering.duration=$scope.duration;
	   activity_service.offering.unit=$scope.unit;
	   activity_service.offering.basePrice=$scope.basePrice;
	   
       var activity_type =  document.querySelector('.active').id;
	   activity_service.offering.type=$scope.type;
	   
	   ActivityService.add_activity_service(activity_service,activity_type).then(function(data){
		   
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
