angular.module("outingzApp")
.factory("MerchantService", function ($http,$q) {
	
	return {

		add_merchant : function(merchantObj){
			var deferred = $q.defer();

			//Calling Web API to fetch health data
			$http.post("http://localhost:9000/#/login",merchantObj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
		},
		add_merchant_location : function(locationObj){
			
			var deferred = $q.defer();

			//Calling Web API to fetch health data
			$http.post("https://api.outingz.com/outingz/merchants/098150df-d65f-4577-b4ce-474ecced5673/locations",locationObj).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
			
		},
		get_merchant_locations : function(){
			var deferred = $q.defer();

			//Calling Web API to fetch health data
			$http.get("https://api.outingz.com/outingz/merchants/098150df-d65f-4577-b4ce-474ecced5673/locations").success(function(data){
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

