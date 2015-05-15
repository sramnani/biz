angular.module("outingzApp")
.factory("activityService", function ($http,$q,$window,$cookies) {
	
	return {

		add_activity_service : function(activity_service){
			
			
			var deferred = $q.defer();
			
			var link="";
			//var key = $window.localStorage['keyy'];
			var key = $cookies.keyy;
                        link = "https://api.outingz.com/outingz/merchants/"+key+"/services";			

			//Calling Web API to fetch health data
			$http.post(link,activity_service).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise; 
		},
                add_activity_class : function(activity_class){
			
			
			var deferred = $q.defer();
			
			var link="";			
			//var key = $window.localStorage['keyy'];
                        var key = $cookies.keyy;
                        link = "https://api.outingz.com/outingz/merchants/"+key+"/classes";			

			//Calling Web API to fetch health data
			$http.post(link,activity_class).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			
			return deferred.promise; 
		},
		register:function(){
			
			//alert("HELO");
			var deferred = $q.defer();

			//Calling Web API to fetch health data		
			obj = {};
			obj.id="id5941";
			obj.name="varun";
			obj.shortName="vipy";	
			obj.primaryUserName="varunprashar5@gmail.com";	
			obj.dba="vhelo";			
			obj.companyUrl="companyUrl";			
						
			
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
