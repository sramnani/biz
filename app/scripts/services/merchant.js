angular.module("outingzApp")
.factory("MerchantService", function ($http,$q,$window,$cookies) {
	
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
                        
                        //var key = $window.localStorage['keyy'];
                        var key = $cookies.keyy;
			//Calling Web API to add merchat location
			$http.post("https://api.outingz.com/outingz/merchants/"+key+"/locations",locationObj).success(function(data){
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
                       // var key = $window.localStorage['keyy'];
                        var key = $cookies.keyy;
			//Calling Web API to fetch merchant locations
			$http.get("https://api.outingz.com/outingz/merchants/"+key+"/locations").success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
		},
                get_merchat:function(){
                    
                    var deferred = $q.defer();
                    
                      //  var key = $window.localStorage['keyy'];
                        var key = $cookies.keyy;
			//Calling Web API to fetch merchant locations
			$http.get("https://api.outingz.com/outingz/merchants/"+key).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise;
                    
                },
                get_states:function(){
                    
                    return ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
                'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
                'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
                }
	};
	
});

