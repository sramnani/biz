'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('merchantCtrl', function ($scope, merchantService, $q, $http, $routeParams, $location, $timeout, $cookies, userService) {


            $scope.image_bussiness = "images/business_img.png";
            $scope.image_activity = "images/activity_img.png";
            $scope.image_membership = "images/membership_img.png";
            $scope.image_social = "images/social_img.png";
            $scope.image_payment = "images/payment_img.png";
            $scope.image_staff = "images/staff_img.png";
            $scope.vm = {};
            $scope.vm.address = {};

            $scope.msg = false;

            if ($routeParams['resetMessage']) {
                $scope.msg = true;
                $scope.Reset_message = "Password reset successfully";
            } else {
                $scope.msg = false;
                $scope.Reset_message = $routeParams['resetMessage'];
            }

            $scope.merchant = {};
            $scope.success = "";
            $scope.error = "";

            $scope.location = {};
            $scope.location.address = {};

            //dummy list of US 50 states.
            $scope.states = merchantService.get_states();
            
            $scope.countries = ['USA'];
            $scope.loader=false;
            $scope.loader_img="images/ajax-loader.gif";
            

            $scope.link_it = function(){
                $location.url('/activity_service');
            }

            // Used to setup the business for first time (Creates merchant)
            $scope.create_merchant = function (merchant, isvalid) {
                isvalid = true;
                if (isvalid) {

                    // $scope.location.address.country = "USA";
                    $scope.location.locationName = 'Primary';

                    merchant.locations = {};
                    merchant.locations.location = [];
                    if($scope.location){
                        if($scope.location.address.street_number){
                            $scope.location.address.line1 = $scope.location.address.street_number;
                        }
                        if($scope.location.address.route){
                            $scope.location.address.line2 = $scope.location.address.route;
                        }
                        if($scope.location.address.locality){
                            $scope.location.address.city = $scope.location.address.locality;
                        }
                        if($scope.location.address.administrative_area_level_1){
                            $scope.location.address.state = $scope.location.address.administrative_area_level_1;
                        }
                    }

                    merchant.locations.location.push($scope.location);
                    // var key = $window.localStorage['keyy'];
                    var key = $cookies.keyy;
                    $scope.merchant.id = key;
                   // console.log(JSON.stringify(merchant));
                   // return;
                    merchantService.add_merchant(merchant).then(function (data) {
                        $scope.success = "Your Business setup sucessfully";


                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                    });

                }
            }

            $scope.location = {};
            $scope.locations_data = [];
            $scope.location.address = {};
            $scope.location.locationSchedules={}
            $scope.location.locationSchedules.locationSchedules  = [];
            
            // Used to add locations for the merchant.



        });
