'use strict';

/**
 * @ngdoc overview
 * @name outingzApp
 * @description
 * # outingzApp
 *
 * Main module of the application.
 */
angular
        .module('outingzApp', [
            'chieffancypants.loadingBar',
            'ngAnimate',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.utils',
            'ui.bootstrap',
            'ngAside'
        ])
        .config(function ($routeProvider, $httpProvider) {
            $routeProvider
                    .when('/', {
                        title: 'Dashboard here',
                        templateUrl: 'views/dashboard.html',
                        controller: 'MerchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/merchant/:resetMessage', {
                        title: 'Settings, Business Setup',
                        templateUrl: 'views/merchant.html',
                        controller: 'MerchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/merchant', {
                        title: 'Settings, Business Setup',
                        templateUrl: 'views/merchant.html',
                        controller: 'MerchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/location', {
                        title: 'Settings, Business Setup',
                        templateUrl: 'views/location.html',
                        controller: 'MerchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/activity_service', {
                        title: 'Add Activity',
                        templateUrl: 'views/activity_service.html',
                        controller: 'ServiceCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/activity_class', {
                        title: 'Add Activity',
                        templateUrl: 'views/activity_class.html',
                        controller: 'ClassCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/customer', {
                        title: 'Add Customer',
                        templateUrl: 'views/customer.html',
                        controller: 'CustomerCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/reset_password/:resetPassword/:key/:username/:token*', {
                        title: 'Reset your password',
                        templateUrl: 'views/reset-password.html',
                        controller: 'userCtrl'
                    })
                    .when('/login', {
                        title: 'Login',
                        templateUrl: 'views/login.html',
                        controller: 'userCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                     deferred.resolve();
                                } else {
                                  //  alert("HEL");
                                    $location.path('/');
                                  
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/logout', {
                        templateUrl: 'views/login.html',
                        controller: 'userCtrl'
                    })
                    .when('/register', {
                        title: 'Invite Business',
                        templateUrl: 'views/register.html',
                        controller: 'userCtrl',
                        resolve: {
                            authenticated: function ($q, $location, UserService) {
                                var deferred = $q.defer();
                                if (!UserService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/buildInfo', {
                        title: 'Your build info',
                        templateUrl: 'views/build.html',
                        controller: 'buildCtrl'
                    })
                    .when('/test', {
                        title: 'Test here',
                        templateUrl: 'views/test.html',
                        controller: 'simpleCtrl'
                    })
                    .when('/forgotPassword', {
                        title: 'Test here',
                        templateUrl: 'views/test.html',
                        controller: 'userCtrl'
                    })
                    .when('/paypal', {
                        title: 'Paypal Payment',
                        templateUrl: 'views/paypal.html',
                        controller: 'userCtrl'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });


            //   $httpProvider.defaults.useXDomain = true;
            //  delete $httpProvider.defaults.headers.common['X-Requested-With'];


            $httpProvider.interceptors.push(function ($q, $window, $location) {
                return {
                    'request': function (config) {


                        var token = $window.localStorage['token'];
                        var key = $window.localStorage['keyy'];
                        var header = {
                            'key': key,
                            'token': token
                        };
                        
                     //  console.log(JSON.stringify(header));
                      var  header_string = JSON.stringify(header);
                        //config.headers['test'] = 'test';
                        if (token) {
                                 config.headers['Authorization'] = header_string;                                 
                        } else {
                            console.log("No header found");
                        }

                        return config;
                    },
                    responseError: function (response) {
                        //   console.log("ERROR");
                        return $q.reject(response);
                    },
                    'response': function (response) {


                        return response;
                    }
                };
            });



        }).directive('hoverBgImage', function () {
    return {
        link: function (scope, elm, attrs) {

            elm.bind('mouseenter', function () {
                this.src = attrs.hoverBgImage;
            });
            elm.bind('mouseleave', function () {
                this.src = attrs["data"];
            })
        }
    };
}).directive('onlyDigits', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel)
                return;
            ngModel.$parsers.unshift(function (inputValue) {
                //  var digits = inputValue.split('').filter(function (s) { return (!isNaN(s) && s != ' '); }).join('');

                var digits = inputValue.replace(/\D/g, "");
                if (attrs['time']) {
                    if (digits < 1 || digits > 12) {
                        digits = 1;
                    }
                    if (digits == "") {
                        digits = 1;
                    }
                    ngModel.$viewValue = digits;
                } else {
                    ngModel.$viewValue = digits;
                }
                ngModel.$render();
                return digits;
            });
        }
    };
}).run(['$location', '$rootScope', '$http', function ($location, $rootScope, $http) {

        //$http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        



}]);

