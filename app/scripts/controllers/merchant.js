'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
  .controller('MerchantCtrl', function ($scope,MerchantService,$q,$http,$routeParams,$location) {  
   
   
    
    $scope.create_merchant = function(isValid){
		if (isValid) {
                alert('our form is amazing');
		}
		alert("HELO");
		
		/*
		var merchant = {
			"name": $scope.name,
			"description": $scope.description,
			"status": $scope.status,						
		};
		

		var primaryAddress = {
			"line1": $scope.line1,
			"line2": $scope.line2,
			"line3": $scope.line3,
			"city": $scope.city,
			"state": $scope.state,
			"country": $scope.country,
		}

		merchant.primaryAddress = primaryAddress;
		
		
		MerchantService.add_merchant(merchant).then(function(data){
			console.log("merchant added successfully");
		},function(error){
			
		});
		
		*/

	}
	
	$scope.location = {};
	$scope.locations=[];
	$scope.add_merchant_location = function(locations){
		
		locations.address.state="";
		locations.address.country="";
		locations.address.line2="";
		
		MerchantService.add_merchant_location(locations).then(function(data){
			$scope.locations.push(locations);
		},function(error){
			console.log("There is an error"+error);
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
	
	$scope.states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
					 'Hawaii','Idaho','Illinois','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
					 'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
					 'New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota',
					 'Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];



    
});
