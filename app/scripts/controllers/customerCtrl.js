/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('outingzApp')
        .controller('customerCtrl', ['$scope', 'merchantService', '$q', '$http', '$routeParams', '$location', '$timeout', '$aside', 'userService','customerService','$filter','$rootScope', function ($scope, merchantService, $q, $http, $routeParams, $location, $timeout, $aside, userService,$rootScope) {


                
                
                $scope.$on("myEvent",function () {console.log('my event occurred'); });
                
                
                
                
                $scope.openAside = function (position) {

                    $aside.open({
                        templateUrl: '../../views/aside.html',
                        placement: position,
                        backdrop: true,
                        controller: function ($scope, $modalInstance,customerService,$filter,$rootScope,merchantService) {

                            
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
                            
                            $scope.states = merchantService.get_states();

                            // Used to setup the business for first time (Creates merchant)
                            $scope.create_customer = function (customer, isvalid) {
                                //alert("HELO");

                                if (isvalid) {
                                    
                                   // customer.startDate = $filter('date')(customer.startDate, 'MM/yy/dd');
                                   // customer.dob = $filter('date')(customer.dob, 'MM/yy/dd');
                                    console.log(JSON.stringify(customer.startDate));
                                    customer.primaryAddress.country = "USA";
                                    customerService.add_customer(customer).then(function (data) {
                                        $scope.success = "Your Customer added sucessfully";
                                        
                                    }, function (error) {
                                        $scope.error = "Error in creating your Customer!";
                                        
                                    });

                                } else {

                                    $scope.showValidation = true;
                                 $scope.error = "Error in creating your customer!";
                                 //$scope.error = $scope.customer.$error;
                                    $timeout(function () {
                                        $scope.error = false;
                                        $scope.success = false;
                                    }, 3000);
                                }
                            }



                        }
                    });
                }
                
                


            }]);

       