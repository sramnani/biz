angular.module("outingzApp")
.factory("ActivityService", function ($http,$q) {
	
	return {

		add_activity_service : function(activity_service,activity_type){
			
			
			var deferred = $q.defer();
			
			var link="";
			
			if(activity_type=="service"){
				link = "https://api.outingz.com/outingz/merchants/098150df-d65f-4577-b4ce-474ecced5673/services";
			} else {
				link = "https://api.outingz.com/outingz/merchants/098150df-d65f-4577-b4ce-474ecced5673/classes";
			}

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

