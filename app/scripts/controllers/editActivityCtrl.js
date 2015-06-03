/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
.run (function(editableOptions) {
  editableOptions.theme = 'bs3';
});
    .controller('editActivityCtrl', ['$scope', 'merchantService', '$q', '$http','$modal', '$routeParams', '$location', '$timeout', '$aside', 'userService', 'customerService', '$filter', '$rootScope', function ($scope, merchantService, $q, $http, $modal,$routeParams, $location, $timeout, $aside, userService, $rootScope, $modalInstance) {

        $scope.offering = {};
         $scope.user = {
    id: 1,
    name: 'awesome user',

  };
        $scope.cancel = function () {
        $modal.close();


        };

        $scope.saveUser = function (offering, isvalid) {

                if (isvalid) {

                    activityService.add_activity_class(offering).then(function (data) {

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


    }]);

