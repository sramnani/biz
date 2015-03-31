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
    
    $scope.register = function(){
		
		var registerObj = {};
		
		
		
		
		registerObj.id= "id"+Math.floor((Math.random() * 9999999999) + 1); 
		
		registerObj.shortName= $scope.name;
		registerObj.primaryUserName=$scope.primaryUserName;
		
		
		UserService.register(registerObj).then(function(data){
			
			console.log(JSON.stringify(data));	

			if(data.status==500){
				$scope.error="Error in registeration";				
			} else {
				
				if(data.id){
					$scope.success = "Registeration successfull , Please activate your account from your email";
				} else {
					$scope.error = "Error while registeration!";
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
	
	
    



    
})
.controller('NavbarCtrl', function ($scope,$q,$http,$routeParams,$location,$window,UserService) {  
	
	
	
	
	 /*	
	if($location.path()=='/login'){
		var myEl = angular.element( document.querySelector( '#cont' ) );
	myEl.append('Hi<br/>');
	} else {
		
	}
	*/
	$scope.isAuthenticated = function() {
		return UserService.isAuthenticated();
	};
	
	$scope.logout = function(){
	
		delete $window.localStorage['token'];
		delete $window.localStorage['key'];
		$location.url('/login');		
	}
});



















