/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
        .controller('CustomerCtrl',['$scope','MerchantService','$q','$http','$routeParams','$location', '$timeout', '$aside', 'UserService',function ($scope, MerchantService, $q, $http, $routeParams, $location, $timeout, $aside, UserService) {

            $scope.openAside = function (position) {
                
                
                $aside.open({
                    templateUrl: '../../views/aside.html',
                    placement: position,
                    backdrop: true,
                    controller: function ($scope, $modalInstance) {
                        $scope.ok = function (e) {
                            $modalInstance.close();
                            e.stopPropagation();
                        };
                        $scope.cancel = function (e) {
                            $modalInstance.dismiss();
                            e.stopPropagation();
                        };
                    }
                });
            }
        }] );
        
       