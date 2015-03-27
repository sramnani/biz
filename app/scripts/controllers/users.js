'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('userCtrl', function ($scope,$q,$http,$routeParams,$location,UserService) {  
	  
	  
	
	
    $scope.password="";
    $scope.success="";
    $scope.error="";
    
    // login procedure to get key and token.
    $scope.login = function(){
		
		var loginObj = {};
		
		loginObj.username=$scope.username;
		loginObj.password=$scope.password;
		
		UserService.login(loginObj).then(function(data){	

			if(data.status==500){
				$scope.error="Wrong username & password";				
			} else {
				$location.url('/merchant');
			}		
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
		
		
	}
    
    $scope.reset_password = function(password){
		
		var reset_obj = {};
	
		reset_obj.user = $routeParams['username'];
		reset_obj.key = $routeParams['key'];
		reset_obj.password=$scope.password;
		
		
		
		UserService.reset_password(reset_obj).then(function(data){
			
			
			$scope.success="Your password reset successfully";   
			console.log("Your password reset successfully");
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
		
	}
    



    
});
