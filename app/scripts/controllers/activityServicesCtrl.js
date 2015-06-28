'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('activityServicesCtrl', function ($scope, activityService, $q, $http, $location, $window, $route,$timeout,$cookies,$aside) {

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
            
            
            $scope.service={};
            $scope.service.listingrule.duration="1 Hour";
            // Used to add activity of type Service.
            $scope.add_activity_service = function (activity_service,isvalid) {

                if (isvalid) {

                    activityService.addActivityService(activity_service).then(function (data) {

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
            
            $scope.$on("myEvent",function () {console.log('my event occurred'); });
             $scope.openAside = function (position) {

                    $aside.open({
                        templateUrl: '../../views/activity_aside.html',
                        placement: position,
                        backdrop: true,
                        controller: function ($scope, $modalInstance,customerService,$filter,$rootScope) {

                            
                            $scope.ok = function (e) {
//                                $scope.$emit('eventName',['asd']);
                                $rootScope.$broadcast("myEvent");

                                
                                
                                console.log("OK");
                                $modalInstance.close();
                                e.stopPropagation();
                            };
                            $scope.cancel = function (e) {
                                
                                    
                                $modalInstance.dismiss();
                                
                                e.stopPropagation();
                            };

                           $scope.open_since = function($event){
                               $event.preventDefault();
                               $event.stopPropagation();
                               $scope.opened_since = true;
                           }

                            $scope.open = function ($event) {
                                $event.preventDefault();
                                $event.stopPropagation();

                                $scope.opened = true;
                            };

                            $scope.dateOptions = {
                                formatYear: 'yy',
                                startingDay: 1
                            };

                            $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'MM/dd/yy', 'shortDate'];
                            $scope.format = $scope.formats[2];
                            
                            $scope.success="";
                            $scope.error="";
                            $scope.showValidation=false;
                            $scope.customer={};

                            // Used to setup the business for first time (Creates merchant)
                            $scope.create_customer = function (customer, isvalid) {
                                //alert("HELO");

                                if (isvalid) {
                                    
                                   // customer.startDate = $filter('date')(customer.startDate, 'MM/yy/dd');
                                   // customer.dob = $filter('date')(customer.dob, 'MM/yy/dd');
                                    console.log(JSON.stringify(customer.startDate));
                                    customerService.add_customer(customer).then(function (data) {
                                        $scope.success = "Your Customer added sucessfully";
                                        
                                    }, function (error) {
                                        $scope.error = "Error in creating your Customer!";
                                        
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



                        }
                    });
                }

        });
