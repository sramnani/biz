angular.module("outingzApp")
.factory("UserService", function ($http,$q,$window) {
	
	return {

		
		reset_password:function(reset_obj){
			
			var deferred = $q.defer();

			//Calling Web API to fetch health data					
			
			$http.post("https://api.outingz.com/outingz/authenticate/resetLogin",reset_obj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
		
		},
		login:function(loginObj){
			
			var deferred = $q.defer();

			//Calling Web API to fetch health data					
			
			$http.post("https://api.outingz.com/outingz/authenticate",loginObj).success(function(data,status){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve({'data':data,'status':status});
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
			
		},
		register:function(registerObj){
			
			var deferred = $q.defer();

			//Calling Web API to fetch health data					
			
			$http.post("https://api.outingz.com/outingz/registration",registerObj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;			
			
		},
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



//http://localhost:9000/#/reset_password/:resetPassword/:key/:username/:token



//http://localhost:9000/#/reset_password/resetPassword=true&key=4deb6954-447a-4cab-8f10-c9e0b4c74e80&username=ian@outingz.com&token=$2a$04$LxKzLRWuOi3GTBWyOiHIPeduVzirWXTzhx0/hEu45Kp50bMHP7rZG


//http://localhost:8090/merchant/index.html?resetPassword=true&key=4deb6954-447a-4cab-8f10-c9e0b4c74e80&username=ian@outingz.com&token=$2a$04$LxKzLRWuOi3GTBWyOiHIPeduVzirWXTzhx0/hEu45Kp50bMHP7rZG
