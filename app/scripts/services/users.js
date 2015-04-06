//User service to interact with user Controller.
angular.module("outingzApp")
.factory("UserService", function ($http,$q,$window,$location) {
	return {
		// Service to reset user's password
		reset_password:function(reset_obj){
			
			var deferred = $q.defer();

			//Calling Web API to reset password
			
			$http.post("https://api.outingz.com/outingz/authenticate/resetLogin",reset_obj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
		
		},
		//login the user 
		login:function(loginObj){
			
			var deferred = $q.defer();

			//Calling Web API to authenticate user
			
			$http.post("https://api.outingz.com/outingz/authenticate",loginObj).success(function(data,status){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve({'data':data,'status':status});
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
			
		},
		//service to register the user
		register:function(registerObj){
			
			var deferred = $q.defer();

			//Calling Web API to Invite a business		
			
			$http.post("https://api.outingz.com/outingz/registration",registerObj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;			
			
		},
		// helper function to check if user is authenticated or not.
		isAuthenticated:function(){
			
			var token = $window.localStorage['token'];
			var key = $window.localStorage['key'];
			if (token && key) {
			  return true;
			} else {
			  return false;
			}
		}
	};
});
