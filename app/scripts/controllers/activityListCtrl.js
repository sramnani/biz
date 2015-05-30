'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('activityListCtrl', function ($scope, activityService, $q, $http, $location, $window,$aside,$route,$timeout,$cookies,ngTableParams,$filter) {
            console.log("class");

         $scope.openMod = function () {

            var modalInstance = $aside.open({
                templateUrl: 'views/activity_aside.html',
                controller: 'editCustomerCtrl',
                placement: 'right',
                size: 'lg'
            });
        };


        var data = [
            {name: "Steel Bending", schedule: "9:30-11AM", location: "Mountain View", instructor: "Jerry"},
             {name: "Rock Climbing", schedule: "5:30-8:30PM", location: "Palo alto", instructor: "John"}


        ];

        $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            name: 'asc'     // initial sorting
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                    $filter('orderBy')(data, params.orderBy()) :
                    data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });



        });
