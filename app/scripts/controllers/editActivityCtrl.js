/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



angular.module('outingzApp')
    .controller('editActivityCtrl', ['$scope', 'activityService', '$q', '$http', '$modalInstance','$modal', '$routeParams', '$location', '$timeout', '$aside', 'userService', 'customerService', '$filter', '$rootScope', function ($scope, activityService, $q, $http, $modal,$routeParams, $location, $timeout, $aside, userService, $rootScope, $modalInstance) {

        $scope.service = {};
        $scope.service.offering = {};
        $scope.cancel = function () {
                $modal.close();

//        $modal.close();


        };
        $scope.saveActivity = function (service) {



                    activityService.addActivityService(service).then(function (data) {

                        $scope.success = "Activity Class added successfully";
                        $timeout(function () {
                            $scope.error = false;
                            $scope.success = false;
                            $scope.showValidation = false;
                        }, 3000);

                    }, function (error) {

                        console.log("There is an error" + error);

                    });




            };



    }]);
