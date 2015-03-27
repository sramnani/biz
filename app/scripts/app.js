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
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        //controller: 'MainCtrl'
      })
      .when('/merchant', {
        templateUrl: 'views/merchant.html',
        controller: 'MerchantCtrl'
      })
      .when('/location', {
        templateUrl: 'views/location.html',
        controller: 'MerchantCtrl'
      })
      .when('/activity_service', {
        templateUrl: 'views/activity_service.html',
        controller: 'ServiceCtrl'
      })
      .when('/reset_password/:resetPassword/:key/:username/:token*',{
		  templateUrl:'views/reset-password.html',
		  controller:'userCtrl'
	  })
	  .when('/login',{
		  templateUrl:'views/login.html',
		  controller:'userCtrl'
	  })
      .otherwise({
        redirectTo: '/'
      });
      
      
  });
  
//http://localhost:9000/#/reset_password/true/4deb6954-447a-4cab-8f10-c9e0b4c74e80/ian@outingz.com/$2a$04$LxKzLRWuOi3GTBWyOiHIPeduVzirWXTzhx0/hEu45Kp50bMHP7rZG



//resetPassword=true&key=4deb6954-447a-4cab-8f10-c9e0b4c74e80&username=ian@outingz.com&token=$2a$04$LxKzLRWuOi3GTBWyOiHIPeduVzirWXTzhx0/hEu45Kp50bMHP7rZG



///reset_password/:










