/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
    .controller('editCustomerCtrl', ['$scope', 'merchantService', '$q', '$http', '$modalInstance', '$routeParams', '$location', '$timeout', '$aside', 'userService', 'customerService', '$filter', '$rootScope', function ($scope, merchantService, $q, $http, $routeParams, $location, $timeout, $aside, userService, $rootScope, $modalInstance) {


        $scope.cancel = function () {
          console.log($modalInstance);


        };


    }]);

