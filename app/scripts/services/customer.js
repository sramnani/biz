angular.module("outingzApp")
        .factory("CustomerService", function ($http, $q, $window, $cookies) {

            return {
                add_customer: function (customerObj) {
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
                }
            }
        });