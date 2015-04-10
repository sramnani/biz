'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('MerchantCtrl', function ($scope, MerchantService, $q, $http, $routeParams, $location, $timeout, UserService) {


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
            $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
                'Hawaii', 'Idaho', 'Illinois', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
                'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
                'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

            //  $scope.location.address.state = $scope.states[0];

            $scope.countries = ['USA'];
            // Used to setup the business for first time (Creates merchant)
            $scope.create_merchant = function (merchant, isvalid) {
                // if (isValid) {

                if (isvalid) {

                    // $scope.location.address.country = "USA";
                    $scope.location.locationName = 'Primary';

                    merchant.locations = {};
                    merchant.locations.location = [];

                    merchant.locations.location.push($scope.location);

                    MerchantService.add_merchant(merchant).then(function (data) {
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
            $scope.location.locationSchedule = [];
            

            // Used to add locations for the merchant.
            $scope.add_merchant_location = function (locations, isvalid) {

                
                if (isvalid) {
                    locations.address.country = "Secondary";
                    locations.address.line2 = "";

                    angular.forEach($scope.locationSchedule, function (value, key) {
                        $scope.location.locationSchedule.push(value);
                    });

                    MerchantService.add_merchant_location(locations).then(function (data) {
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
                MerchantService.get_merchant_locations().then(function (data) {
                    $scope.locations_data = data.location;
                }, function (error) {
                    console.log("There is an error" + error);
                });
            }


        });
