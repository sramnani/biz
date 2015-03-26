angular.module("outingzApp")
.factory("ActivityService", function ($http,$q) {
	
	return {

		add_activity_service : function(merchantObj){
			
			alert("HELO");
			/*var deferred = $q.defer();

			//Calling Web API to fetch health data
			$http.post("http://localhost:9000/#/login",merchantObj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise; */
		},
		register:function(){
			
			//alert("HELO");
			var deferred = $q.defer();

			//Calling Web API to fetch health data
			
			obj = {};
			obj.primaryUserName="itsvarunprashar@yahoo.com";			
			obj.id="8898";			
			
			$http.post("https://api.outingz.com/outingz/registration",obj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
		
		}
	};
	
	
	
	
});

