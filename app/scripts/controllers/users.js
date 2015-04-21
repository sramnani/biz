'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
        .controller('userCtrl', function ($scope, $q, $http, $routeParams, $location, $window, UserService) {

            $scope.password = "";
            $scope.success = "";
            $scope.error = "";
            var registerObj = {};
            // invite the business here
            $scope.register = function (registerObj) {

                registerObj.id = "id" + Math.floor((Math.random() * 9999999999) + 1);
                console.log(JSON.stringify(registerObj));
                UserService.register(registerObj).then(function (data) {
                    console.log(JSON.stringify(data));

                    if (data.status == 500) {
                        $scope.error = "Error in registeration";
                    } else {
                           if (data.id) {
                            $scope.success = "An Invitation email has been sent to the user to generate the password and activate account";
                            window.setTimeout(function () {
                                $(".alert-message").alert('close');
                            }, 2000);

                            $scope.merchant = {};
                        }
                        else {
                            $scope.error = "Error while sending Invitation!";
                       
                        }
                     }
                }, function (error) {

                    console.log("There is an error" + error);

                });
            }


            // login procedure to get key and token.

            $scope.login = function () {

                var loginObj = {};

                loginObj.username = $scope.username;
                loginObj.password = $scope.password;

                UserService.login(loginObj).then(function (data) {

                    console.log(JSON.stringify(data));

                    if (data.status == 500) {
                        $scope.error = "Wrong username & password";
                    } else {
                        
                        $window.localStorage['token'] = data.data.token;
                        $window.localStorage['keyy'] = data.data.key;
                           
                        $location.url('/merchant');
                    }

                }, function (error) {

                    console.log("There is an error" + error);

                });


            }

            $scope.username = "";
            $scope.username = $routeParams['username'];


            // Reset users password after clicking on email link. Also automatically signs In.
            $scope.reset_password = function (password) {

                var reset_obj = {};


                reset_obj.user = $routeParams['username'];
                reset_obj.key = $routeParams['key'];
                reset_obj.password = $scope.password;



                UserService.reset_password(reset_obj).then(function (data) {

                    var loginObj = {};

                    loginObj.username = $routeParams['username'];
                    loginObj.password = $scope.password;
                    UserService.login(loginObj).then(function (data) {

                        console.log(JSON.stringify(data));

                        if (data.status == 500) {
                            $scope.error = "Wrong username & password";
                        } else {

                            $window.localStorage['token'] = data.data.token;
                            $window.localStorage['key'] = data.data.key;

                            $scope.password = "";
                            $scope.confirmPassword = "";

                            $location.url('/merchant/reset');
                        }
                    });


                }, function (error) {
                    $scope.error = "Error while resetting your password!";


                });

            }







        })
        .controller('NavbarCtrl', function ($scope, $q, $http, $routeParams, $location, $window, UserService) {

            // to check if user is authenticated or not
            $scope.isAuthenticated = function () {
                return UserService.isAuthenticated();
            };

            $scope.check = function () {
                if ($location.path() != '/login') {
                    return true;
                } else {
                    return false;
                }
            };

            // logout the user and delete his local storage

            $scope.logout = function () {

                delete $window.localStorage['token'];
                delete $window.localStorage['keyy'];
                $location.url('/login');
            }
        });



















