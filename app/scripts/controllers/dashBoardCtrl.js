'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
    .controller('dashBoardCtrl', function ($scope, activityService, $q, $http, $location, $window, $route, $timeout, $cookies, $aside,$modal) {


        $scope.options =
        {
            scaleShowVerticalLines: false,
            scaleShowGridLines: false,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 10
        }
        $scope.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        $scope.series = ['Series A', 'Series B'];
        $scope.colours = [
            { // default
                "fillColor": "rgba(224, 108, 112, 1)",
                "strokeColor": "rgba(207,100,103,1)",
                "pointColor": "rgba(220,220,220,1)",
                "pointStrokeColor": "#fff",
                "pointHighlightFill": "#fff",
                "pointHighlightStroke": "rgba(151,187,205,0.8)"
            }
        ];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56]
        ];
            $scope.Customers = "5,5,5,5,5,5,6,7,8,8,8,8,8,8,9,10,10,10,10,10,11,12,13,14,15,16,17,18";
            $scope.Customers1 = "5,5,5,5,5,5,6,7,10,10,11,12,13,13,13,14,13,14,14,14,15,15,15,16,16";
            $scope.Customers2 = "18,18,18,17,17,17,16,15,15,15,14,13,12,11,11,10,9,8,7,6,5,4";
            $scope.Customers3 = "5,100,600,1000,1400,2000";
        $scope.onClick = function () {
            console.log("Ere");
        };
        $scope.pielabels = ["Attended", "Missed"];

        $scope.piedata =
            [65, 35];


        // Simulate async data update

        //function to make the Tabs on single page.
        $scope.percent = 65;
        $scope.easyoptions = {
            animate: {
                duration: 0,
                enabled: false
            },
            barColor: '#16a085',
            trackColor: '#edeef0',
            scaleColor: '#d2d3d6',
            lineWidth: 7,
            size: 200,
            lineCap: 'circle'
        };
        $scope.easy2options = {
            animate: {
                duration: 0,
                enabled: false
            },
            barColor: '#2980b9',
            trackColor: '#edeef0',
            scaleColor: '#d2d3d6',
            lineWidth: 7,
            size: 200,
            lineCap: 'circle'
        };
        $scope.openActivity = function(){


        var modalInstance = $modal.open({
            templateUrl: 'views/viewactivity.html',
            controller: 'activityClassCtrl',
            size: 'lg'
             });
   

        };
        $scope.easy3options = {
            animate: {
                duration: 0,
                enabled: false
            },
            barColor: 'blue',
            trackColor: '#edeef0',
            scaleColor: '#d2d3d6',
            lineWidth: 7,
            size: 200,
            lineCap: 'circle'
        };

    });
