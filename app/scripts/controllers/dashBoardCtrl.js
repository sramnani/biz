'use strict';

/**
 * @ngdoc function
 * @name outingzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outingzApp
 */
angular.module('outingzApp')
    .controller('dashBoardCtrl', function ($scope, activityService, $q, $http, $location, $window, $route, $timeout, $cookies) {


        $scope.options =
        {
            scaleShowVerticalLines: false,
            scaleShowGridLines: false,
            barStrokeWidth: 2,
            barValueSpacing: 10,
            barDatasetSpacing: 10
        }
        $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
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
            [65, 59, 80, 81, 56, 55, 40]
        ];

        $scope.onClick = function () {
            console.log("Ere");
        };
        $scope.pielabels = ["Eating", "Drinking", "Sleeping"];

        $scope.piedata =
            [65, 59, 90];


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
