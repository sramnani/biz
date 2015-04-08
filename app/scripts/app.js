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
    'ui.utils'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider
      .when('/', {
		title: 'Dashboard here', 
        templateUrl: 'views/dashboard.html',
        controller: 'MerchantCtrl',
        resolve: {
          authenticated: function($q, $location,UserService) {
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
          authenticated: function($q, $location,UserService) {
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
          authenticated: function($q, $location,UserService) {
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
          authenticated: function($q, $location,UserService) {
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
          authenticated: function($q, $location,UserService) {
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
        controller: 'ServiceCtrl',
        resolve: {
          authenticated: function($q, $location,UserService) {
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
      .when('/reset_password/:resetPassword/:key/:username/:token*',{
		  title: 'Reset your password',  
		  templateUrl:'views/reset-password.html',
		  controller:'userCtrl'
	  })
	  .when('/login',{
		  title: 'Login',   
		  templateUrl:'views/login.html',
		  controller:'userCtrl'
	  })
	  .when('/logout',{
		  templateUrl:'views/login.html',
		  controller:'userCtrl'
	  })
	  .when('/register',{
		  title: 'Invite Business',   
		  templateUrl:'views/register.html',
		  controller:'userCtrl'
	  })
	  .when('/buildInfo',{
		  title: 'Your build info',   
		  templateUrl:'views/build.html',
		  controller:'buildCtrl'
	  })
	  .when('/test',{
		  title: 'Test here',   
		  templateUrl:'views/test.html',
		  controller:'simpleCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
      
	$httpProvider.interceptors.push(function($q,$window,$location) {
		return {
		'request': function(config) {	
				
			/*
			var token = $window.localStorage['token'];

			if (token) {
			  config.headers['Authorization'] = token;
			} else {
			  alert("No header found");
			}*/
             
			  return config;
			},
            responseError: function(response) {
              return $q.reject(response);
            },
            'response':function(response){
				
				
				return response;
			}
		};
	});


      
}).directive('hoverBgImage',function(){
    return {
        link: function(scope, elm, attrs){
			
            elm.bind('mouseenter',function(){
                this.src = attrs.hoverBgImage;
            });
            elm.bind('mouseleave',function(){
                this.src = attrs["data"];
            })
        }
    };
}).directive('onlyDigits', function () {

    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, ngModel) {
            if (!ngModel) return;
            ngModel.$parsers.unshift(function (inputValue) {
              //  var digits = inputValue.split('').filter(function (s) { return (!isNaN(s) && s != ' '); }).join('');
                var digits = inputValue.replace(/\D/g, "");
                ngModel.$viewValue = digits;
                ngModel.$render();
                return digits;
            });
        }
    };
}).run(['$location', '$rootScope', function($location, $rootScope) {
	
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}]);




