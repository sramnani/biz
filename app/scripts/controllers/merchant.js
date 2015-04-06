'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('MerchantCtrl', function ($scope,MerchantService,$q,$http,$routeParams,$location,UserService) {  
	  
	  
	$scope.image_bussiness = "images/business_img.png";
	$scope.image_activity = "images/activity_img.png";
	$scope.image_membership = "images/membership_img.png";
	$scope.image_social = "images/social_img.png";
	$scope.image_payment = "images/payment_img.png";
	$scope.image_staff = "images/staff_img.png";
	 
   $scope.msg=false;
    if($routeParams['resetMessage']){
		$scope.msg=true;
	    $scope.Reset_message = "Password reset successfully";
	} else {
		$scope.msg=false;
		$scope.Reset_message = $routeParams['resetMessage'];
	}
    $scope.merchant={};
    $scope.success="";
    $scope.error="";
    
    // Used to setup the business for first time (Creates merchant)
    $scope.create_merchant = function(merchant,isValid){
		if (isValid) {
			
			MerchantService.add_merchant(merchant).then(function(data){
				$scope.success="Your Business setup sucessfully";
			},function(error){
				$scope.error="Error in creating your bussiness!";
			});
			
		} else {
			$scope.error="Error in creating your bussiness!";
		}
		
		
		

	}
	
	$scope.location = {};
	$scope.locations=[];
	
	
	// Used to add locations for the merchant.
	$scope.add_merchant_location = function(locations){
		
		locations.address.state="";
		locations.address.country="";
		locations.address.line2="";
		
		MerchantService.add_merchant_location(locations).then(function(data){
			$scope.locations.push(locations);
			$scope.success="Your location added sucessfully";
		},function(error){
			$scope.error="Error in saving your location!";
		});
	}
	
	
	//get locations when url is /location
	
	if($location.url()=="/location"){
		MerchantService.get_merchant_locations().then(function(data){
			$scope.locations=data.location;
			},function(error){
				console.log("There is an error"+error);
		});
	}
	
	//dummy list of US 50 states.

	$scope.states = ['Select Your State','Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
					 'Hawaii','Idaho','Illinois','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
					 'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
					 'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
					 'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
	$scope.merchant.primaryAddress={};
	$scope.merchant.primaryAddress.state = $scope.states[0];


    
});
