'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('activityClassCtrl', function ($scope, activityService, $q, $http, $location, $window, $route,$timeout,$cookies,$modalInstance) {
            console.log("class");


            //dummy list of US 50 states.
            $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
                'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
                'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


            //function to make the Tabs on single page.
            $scope.select_type = function (obj) {

                if (obj == "service") {
                    //  $window.location.href='#/activity_service';
                    $location.path('/activity_service');
                    // $route.reload();

                } else {
                    $location.path('/activity_class');
                }

            }

            // To add activity clas
            $scope.add_activity_class = function (activity_class, isvalid) {

                if (isvalid) {

                    activityService.add_activity_class(activity_class).then(function (data) {

                        $scope.success = "Activity Class added successfully";
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
                    $scope.error = "Error in adding your class!";
                    $timeout(function () {
                        $scope.error = false;
                        $scope.success = false;
                        // $scope.showValidation = false;
                    }, 3000);
                }


            };



        });
