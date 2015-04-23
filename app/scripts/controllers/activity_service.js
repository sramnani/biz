'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('ServiceCtrl', function ($scope, ActivityService, $q, $http, $location, $window, $route,$timeout,$cookies) {

            $scope.service = {};
            console.log("service");

            //function to make the Tabs on single page.
            $scope.select_type = function (obj) {

                if (obj == "service") {
                    $location.path('/activity_service');
                } else {

                    $location.path('/activity_class');
                    // $route.reload();

                }

            }
            $scope.error="";
            $scope.success="";
            
            
            $scope.service.offering={};
            $scope.service.offering.duration="1 Hour";
            // Used to add activity of type Service.
            $scope.add_activity_service = function (activity_service,isvalid) {

                if (isvalid) {

                    ActivityService.add_activity_service(activity_service).then(function (data) {

                        $scope.success="Activity service added successfully";
                        $timeout(function () {
                            $scope.error = false;
                            $scope.success = false;
                            $scope.showValidation = false;
                        }, 3000);
                        
                    }, function (error) {

                        console.log("There is an error" + error);

                    });

                } else {

                    $scope.showValidation = true;
                    $scope.error = "Error in creating your bussiness!";
                    $timeout(function () {
                        $scope.error = false;
                        $scope.success = false;
                       // $scope.showValidation = false;
                    }, 3000);
                }


            };

        });
