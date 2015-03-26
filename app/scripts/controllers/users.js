'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('userCtrl', function ($scope,$q,$http,$routeParams,UserService) {  
	  
	  
	//alert($routeParams['token']);  
	/*
	if($routeParams['key'] && $routeParams['key']!=undefined){
		var body = angular.element(document.querySelector(".body"));
		body.attr('id','login_sec');
	}*/
       
    $scope.reset_password = function(password){
		
		var reset_obj = {};
	
		
		
		reset_obj.password="varun";
		reset_obj.key = $routeParams['key'];
		reset_obj.user = $routeParams['username'];
		
		UserService.reset_password(reset_obj).then(function(data){
			
			
		   
			console.log("Activity service added successfully");
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
		
	}
    



    
});
