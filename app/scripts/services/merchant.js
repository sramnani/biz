angular.module("outingzApp")
.factory("MerchantService", function ($http,$q) {
	
	return {

		add_merchant : function(merchantObj){
			var deferred = $q.defer();

			//Calling Web API to add merchat data
			$http.post("https://api.outingz.com/outingz/merchants",merchantObj).success(function(data){
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

			//Calling Web API to add merchat location
			$http.post("https://api.outingz.com/outingz/merchants/cfc78469-69d9-4004-9377-e9310ee053df/locations",locationObj).success(function(data){
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

			//Calling Web API to fetch merchant locations
			$http.get("https://api.outingz.com/outingz/merchants/cfc78469-69d9-4004-9377-e9310ee053df/locations").success(function(data){
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
