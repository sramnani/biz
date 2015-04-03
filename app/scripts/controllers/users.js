'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('userCtrl', function ($scope,$q,$http,$routeParams,$location,$window,UserService) {  
	 
    $scope.password="";
    $scope.success="";
    $scope.error="";
    var registerObj = {};
    $scope.register = function(registerObj){
				
		registerObj.id= "id"+Math.floor((Math.random() * 9999999999) + 1); 
		
		
		
		UserService.register(registerObj).then(function(data){
			
			console.log(JSON.stringify(data));	

			if(data.status==500){
				$scope.error="Error in registeration";				
			} else {
				
				if(data.id){
					$scope.success = "An Invitation email has been sent to the user to generate the password and activate account";
					window.setTimeout(function() { $(".alert-message").alert('close'); }, 2000);
					
					$scope.merchant={};
				} else {
					$scope.error = "Error while sending Invitation!";
				}
			}		
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
	}
    
    
    // login procedure to get key and token.
    
    $scope.login = function(){
		
		var loginObj = {};
		
		loginObj.username=$scope.username;
		loginObj.password=$scope.password;
		
		UserService.login(loginObj).then(function(data){
			
			console.log(JSON.stringify(data));	

			if(data.status==500){
				$scope.error="Wrong username & password";				
			} else {
				
				$window.localStorage['token'] = data.data.token;
				$window.localStorage['key'] = data.data.key;
				
				//$window.localStorage['token'] = "varun";
				//$window.localStorage['key'] = "test";
				
				
				$location.url('/merchant');
			}		
			
		},function(error){
			
			console.log("There is an error"+error);
			
		});
		
		
	}
	
	$scope.username="";
	$scope.username = $routeParams['username'];
	
    $scope.reset_password = function(password){
		
		var reset_obj = {};
	
		//reset_obj.user = "varunprashar5@gmail.com";
		reset_obj.user = $routeParams['username'];
		reset_obj.key = $routeParams['key'];
		//reset_obj.key = "408829f6-6505-4348-b180-&/c5531298-92b9-4448-9916-999e960d74c4";
		reset_obj.password=$scope.password;
		
		
		
		UserService.reset_password(reset_obj).then(function(data){
			
			
			$scope.success="Your password reset successfully";   
			$scope.password="";
			$scope.confirmPassword="";
			
		},function(error){
			$scope.error="Error while resetting your password!";  
			
			
		});
		
	}
	
	
    



    
})
.controller('NavbarCtrl', function ($scope,$q,$http,$routeParams,$location,$window,UserService) {  
	
	
	$scope.isAuthenticated = function() {
		return UserService.isAuthenticated();
	};
	
	$scope.check = function(){
		if($location.path()!='/login'){
			return true;
		} else {
			return false;
		}
	};
	
	$scope.logout = function(){
	
		delete $window.localStorage['token'];
		delete $window.localStorage['key'];
		$location.url('/login');		
	}
});



















