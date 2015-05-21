/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
    .controller('customerCtrl', ['$scope', 'merchantService', '$q', '$http', '$routeParams', '$location', '$timeout', '$aside', 'userService', 'customerService', 'ngTableParams', '$filter', '$rootScope', function ($scope, merchantService, $q, $http, $routeParams, $location, $timeout, $aside, userService, $rootScope, ngTableParams, $filter) {


        $scope.$on("myEvent", function () {
            console.log('my event occurred');
        });


        $scope.openMod = function () {

            var modalInstance = $aside.open({
                templateUrl: 'views/aside.html',
                controller: 'editCustomerCtrl',
                placement: 'right',
                size: 'lg'
            });
        };

        var data = [
            {name: "Moroni", accountStatus: "Active", membership: "monthly", start: "1/11/2012", expiration: "1 day"},
            {name: "Nancy", accountStatus: "Expired", membership: "monthly", start: "1/11/2012", expiration: "1 day"},
            {name: "Berni", accountStatus: "Active", membership: "monthly", start: "1/11/2012", expiration: "1 day"},
            {name: "Brett", accountStatus: "Active", membership: "monthly", start: "1/11/2012", expiration: "1 day"},
            {name: "Jake", accountStatus: "Active", membership: "monthly", start: "1/11/2012", expiration: "1 day"}
        ];

        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 3 // count per page


        }, {
            total: data.length, // length of data
            getData: function ($defer, params) {
                // use build-in angular filter
                 var orderedData = params.sorting() ?

                                $filter('orderBy')(data, params.orderBy()) :

                                data;
                orderedData = params.filter ?
                        $filter('filter')(orderedData, params.filter()) :
                        orderedData;

               $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));;
            }
        });


    }]);

       