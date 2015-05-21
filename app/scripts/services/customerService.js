angular.module("outingzApp")
    .factory("customerService", function ($http, $q, $window, $cookies) {

        return {
            addCustomer: function (customerObj) {
                var deferred = $q.defer();

                //Calling Web API to add merchat data
                $http.post("https://api.outingz.com/outingz/subscriber", customerObj).success(function (data) {
                    //Passing data to deferred's resolve function on successful completion
                    deferred.resolve(data);
                }).error(function () {

                    //Sending a friendly error message in case of failure
                    deferred.reject("An error occured while fetching items");
                });

                return deferred.promise;
            },
            getCustomers: function () {
                var deferred = $q.defer();
                // var key = $window.localStorage['keyy'];
                var key = $cookies.keyy;
                //Calling Web API to fetch merchant locations
                $http.get("https://api.outingz.com/outingz/subscriber/"+key).success(function (data) {
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