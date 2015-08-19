/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
    .controller('editActivityCtrl', ['$scope', 'activityService', '$q', '$http', '$modalInstance', '$modal', '$routeParams', '$location', '$timeout', '$aside', 'userService', 'customerService', '$filter', '$rootScope', function ($scope, activityService, $q, $http, $modal, $routeParams, $location, $timeout, $aside, userService, $rootScope, $modalInstance) {

        $scope.service = {};
        $scope.service.offering = {};
        $scope.service.activity = {};


        $scope.vm = {
            address: {}
        };
        $scope.details = {};


        $scope.cancel = function () {
            $modal.close();
            $scope.options = null;
            $scope.details = '';

//        $modal.close();


        };
        $scope.reload = function () {
            console.log($scope.param);
            if ($scope.param) {
                $scope.service.serviceId = $scope.param.id;
                $scope.service.activity.name = $scope.param.activity.name;
                $scope.service.activity.description = $scope.param.activity.description;
                $scope.service.instructor = $scope.param.instructors.instructor[0].name.firstName;

            }
            $scope.result1 = 'initial value';

        };

        $scope.saveActivity = function (service) {
            $scope.service.instructors = {};
            $scope.service.instructors.instructor = [];
            $scope.service.instructors.instructor.push($scope.service.instructor);


            activityService.add_activity_service(service).then(function (data) {

                $scope.success = "Activity Class added successfully";


            }, function (error) {

                console.log("There is an error" + error);

            });


        };
        $scope.updateActivity = function (service,serviceId) {


            $scope.service.id = serviceId;
            activityService.update_activity_service(service,serviceId).then(function (data) {

                $scope.success = "Activity Class updated successfully";


            }, function (error) {

                console.log("There is an error" + error);

            });


        };
        $scope.reload();


    }]);
