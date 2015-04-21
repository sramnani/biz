angular.module("outingzApp")
.factory("ActivityService", function ($http,$q) {
	
	return {

		add_activity_service : function(activity_service){
			
			
			var deferred = $q.defer();
			
			var link="";
			
			if(activity_type=="service"){
				link = "https://api.outingz.com/outingz/merchants/e76a871c-8dde-4981-9105-5f4096eb3ab8/services";
			} else {
				link = "https://api.outingz.com/outingz/merchants/e76a871c-8dde-4981-9105-5f4096eb3ab8/classes";
			}

			//Calling Web API to fetch health data
			/*$http.post(link,activity_service).success(function(data){
			  //Passing data to deferred's resolve function on successful completion
			  deferred.resolve(data);
			}).error(function(){

			//Sending a friendly error message in case of failure
			deferred.reject("An error occured while fetching items");
			});
			*/
			return deferred.promise; 
		},
                add_activity_class : function(activity_class){
			
			
			var deferred = $q.defer();
			
			var link="";			
			
                        link = "https://api.outingz.com/outingz/merchants/e76a871c-8dde-4981-9105-5f4096eb3ab8/classes";			

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

