'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('activityListCtrl', function ($scope, activityService,merchantService, $q, $http, $location, $window,$aside,$route,$timeout,$cookies,ngTableParams,$filter,$rootScope) {
            console.log("class");
        $scope.services = [];
        $scope.location = {};

        $scope.merchant = {};

        var scope = $rootScope.$new();
        $scope.openMod = function (param,location) {
            if (param) {
                scope.param = param;
                scope.location = location;
                var modalInstance = $aside.open({
                    templateUrl: 'views/activity_aside.html',
                    controller: 'editActivityCtrl',
                    placement: 'right',
                    size: 'lg',
                    scope: scope
                });
            }

        };
        $scope.openNewActivityMod = function () {
                var modalInstance = $aside.open({
                    templateUrl: 'views/newActivity.html',
                    controller: 'editActivityCtrl',
                    placement: 'right',
                    size: 'lg',
                    scope: scope
                });


        };


       var data = [
            {name: "Steel Bending", schedule: "9:30-11AM", location: "Mountain View", instructor: "Jerry"},
            {name: "Rock Climbing", schedule: "5:30-8:30PM", location: "Palo alto", instructor: "John"}


        ];
        $scope.getActivityData = function(){
            merchantService.get_merchat().then(function (data){
                $scope.merchant = data;
                $scope.services = data.services.service;
                $scope.location = data.locations.location[0].locationName;
                $scope.clazzServiceCount = data.clazzServiceCount;


                $scope.tableParams = new ngTableParams({
                    page: 1,            // show first page
                    count: 10,          // count per page

                }, {
                    total: $scope.services.length, // length of data
                    getData: function($defer, params) {
                        // use build-in angular filter
                        var orderedData = params.sorting() ?
                            $filter('orderBy')($scope.services, params.orderBy()) :
                            $scope.services;

                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });



            }, function (error) {

                console.log("There is an error" + error);

            });


        };
        $scope.getActivityData ();






        });
