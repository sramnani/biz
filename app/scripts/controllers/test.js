angular.module('outingzApp')
        .controller('simpleCtrl', function ($scope) {
            $scope.setAddress = function (type, zip) {
                console.log("Type: " + type + " " + zip);
            }

            $scope.copyAddress = function () {
                $scope.shippingZip = $scope.billingZip;
            }


        });
