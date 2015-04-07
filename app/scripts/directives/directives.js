// Directive to check if confirm password matches with password.
angular.module('outingzApp').directive('validPasswordC', function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=validPasswordC"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
});
// Directive to check if confirm password matches with password.
angular.module('outingzApp').directive('timePick', function () {
    return {
        restrict: 'E',
        templateUrl: '../../views/timePicker.html',
        link: function(scope, element, attributes) {
            
            scope.time={
               
            };
            
                        
            scope.showPopover = false;
            
            scope.showPop = function(){
                if(scope.showPopover){
                    scope.showPopover=false;
                } else {
                    scope.showPopover=true;
                }
            };
            
            scope.closePop = function(){
                scope.showPopover=false;
            }
            
            scope.save_time = function(){
                
                scope.showPopover=false;
            }
        }
    };
});