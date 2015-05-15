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
            
            if ($location.url() === "/merchant" || $location.url() === "/location") {
                $scope.loader=true;
                merchantService.get_merchat().then(function (data) {
                    $scope.loader=false;
                    $scope.merchant = data;
                    if($location.url() === "/location"){
                        $scope.primaryLine = $scope.merchant.primaryAddress.line1;
                        $scope.location.locationName = $scope.merchant.primaryAddress.line2;
                        $scope.location.address.line1 = $scope.merchant.primaryAddress.line1;
                        $scope.location.address.line2 = $scope.merchant.primaryAddress.line2;
                        $scope.location.address.state = $scope.merchant.primaryAddress.state;
                        $scope.location.address.zip = $scope.merchant.primaryAddress.zip;
                        $scope.location.address.city = $scope.merchant.primaryAddress.city;
                        $scope.location.contactPerson={};
                        $scope.location.contactPerson.name={};
                        $scope.location.contactPerson.phone={};
                        $scope.location.contactPerson.emailId={};
                        $scope.location.contactPerson.name.firstName = $scope.merchant.primaryContactPerson.name.firstName;
                        $scope.location.contactPerson.phone.number = $scope.merchant.primaryContactPerson.phone.number;
                        $scope.location.contactPerson.emailId = $scope.merchant.primaryContactPerson.emailId;
                    }                    
                    // $scope.merchant.description=data.description;
                }, function (error) {
                    $scope.error = "Error in creating your bussiness!";
                });
            }
            
            $scope.link_it = function(){
                $location.url('/activity_service');
            }

            // Used to setup the business for first time (Creates merchant)
            $scope.create_merchant = function (merchant, isvalid) {

                if (isvalid) {

                    // $scope.location.address.country = "USA";
                    $scope.location.locationName = 'Primary';

                    merchant.locations = {};
                    merchant.locations.location = [];

                    merchant.locations.location.push($scope.location);
                    // var key = $window.localStorage['keyy'];
                    var key = $cookies.keyy;
                    $scope.merchant.id = key;
                   // console.log(JSON.stringify(merchant));
                   // return;
                    merchantService.add_merchant(merchant).then(function (data) {
                        $scope.success = "Your Business setup sucessfully";

                        $timeout(function () {
                            $location.url('/location');
                        }, 2000);
                    }, function (error) {
                        $scope.error = "Error in creating your bussiness!";
                    });

                } else {

                    $scope.showValidation = true;
                    $scope.error = "Error in creating your bussiness!";
                    $timeout(function () {
                        $scope.error = false;
                        $scope.success = false;
                    }, 3000);
                }
            }

            $scope.location = {};
            $scope.locations_data = [];
            $scope.location.address = {};
            $scope.location.locationSchedules={}
            $scope.location.locationSchedules.locationSchedules  = [];
            
            // Used to add locations for the merchant.
            $scope.add_merchant_location = function (locations, isvalid) {


                if (isvalid) {
                    
                    locations.address.country = "Secondary";
                    //locations.address.line2 = "";

                    angular.forEach($scope.locationSchedule, function (value, key) {
                        $scope.location.locationSchedules.locationSchedules.push(value);
                    });
                   console.log(JSON.stringify($scope.location));

                    merchantService.add_merchant_location(locations).then(function (data) {
                        $scope.locations_data.push(locations);
                        $scope.location = {};
                        $scope.location.address = {};

                        $scope.success = "Your location added sucessfully";
                    }, function (error) {
                        $scope.error = "Error in saving your location!";
                    });
                } else {
                    $scope.showValidation = true;
                    $scope.error = "Error in Adding your location!";
                    $timeout(function () {
                        $scope.error = false;
                        $scope.success = false;
                    }, 3000);
                }

            }


            //get locations when url is /location	
            if ($location.url() === "/location") {
                merchantService.get_merchant_locations().then(function (data) {
                    $scope.locations_data = data.location;
                }, function (error) {
                    console.log("There is an error" + error);
                });
            }


        });
