angular.module("outingzApp")
.factory("merchantService", function ($http,$q,$window,$cookies) {

	return {
  addEvent: function (eventObj) {
                var deferred = $q.defer();

                //Calling Web API to add merchat data
                $http.post("https://api.outingz.com/outingz/subscriber", eventObj).success(function (data) {
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function () {

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while fetching items");
                });

                return deferred.promise;
            },
            getEvent: function (eventId) {
                var deferred = $q.defer();
                // var key = $window.localStorage['keyy'];
                var key = $cookies.keyy;
                //Calling Web API to fetch merchant locations
                $http.get("https://api.outingz.com/outingz/subscriber/"+eventId).success(function (data) {
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function () {

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while fetching items");
                });

                return deferred.promise;
            }

		}
});

