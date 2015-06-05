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
            'ui.bootstrap',
            'ngAnimate',
            'ngCookies',
            'ngMessages',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.utils',
            'ngAside',
            'ngCookies',
            'chart.js',
            'easypiechart',
            'ngAside',
            'ngTable',
            'ui.calendar',
            'xeditable'
        ])
        .config(function ($routeProvider, $httpProvider) {
            $routeProvider
                    .when('/', {
                        title: 'Dashboard here',
                        templateUrl: 'views/dashboardmain.html',
                        controller: 'dashBoardCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/mockdashboard', {
                        title: 'Dashboard here',
                        templateUrl: 'views/mockDashboard.html',
                        controller: 'dashBoardCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'merchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'merchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'merchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/home', {
                        title: 'Home',
                        templateUrl: 'views/dashboard.html',
                        controller: 'merchantCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'activityServicesCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'activityClassCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                     .when('/res', {
                        title: 'Add Activity',
                        templateUrl: 'views/addReservation.html',
                        controller: 'activityReservationCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();

                                if (!userService.isAuthenticated()) {
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
                        controller: 'customerCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/activity_test', {
                        title: 'Add Activity',
                        templateUrl: 'views/activity_class_test.html',
                        controller: 'ServiceCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                     .when('/activities', {
                        title: 'Activities',
                        templateUrl: 'views/activityList.html',
                        controller: 'activityListCtrl',
                         resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
                                    $location.path('/login');
                                } else {
                                    deferred.resolve();
                                }

                                return deferred.promise;
                            }
                        }
                    })
                    .when('/calendar', {
                        title: 'Calendar',
                        templateUrl: 'views/calendar.html',
                        controller: 'calendarCtrl',
                        resolve: {
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                            authenticated: function ($q, $location, userService) {
                                var deferred = $q.defer();
                                if (!userService.isAuthenticated()) {
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
                        controller: 'userCtrl'
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


            $httpProvider.interceptors.push(function ($q, $window, $location,$cookies) {
                return {
                    'request': function (config) {


                       // var token = $window.localStorage['token'];
                       // var key = $window.localStorage['keyy'];
                        
                        
                        var token = $cookies.token;
                        var key = $cookies.keyy;
                        
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
}).directive('datepickerPopup', function (){
    return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function(scope, element, attr, controller) {
      //remove the default formatter from the input directive to prevent conflict
      controller.$formatters.shift();
  }
}
}).run(['$location', '$rootScope', '$http', function ($location, $rootScope, $http) {

        //$http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
        



}]);

