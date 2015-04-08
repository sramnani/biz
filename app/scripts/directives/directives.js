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
            
            scope.locationSchedule=[];
               
            var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                        
            scope.showPopover = false;
            scope.flag=false;
            
            scope.disb = function(){
                var checkbox = $event.target;
                if(checkbox.checked){
                    return true;
                } else {
                    return scope.flag;
                }
            }
            
            scope.showPop = function($event,pos,day){
                console.log(day);
               var checkbox = $event.target;
            
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day')) {
                    
                
                   //alert(checkbox.checked);
                    if (!checkbox.checked) {
                       
                        scope.showPopover = false;
                        myEl.removeAttr('day');
                    } else {
                     
               scope.flag=true;
               }
                } else {
                    
                    
                    myEl.css('left', -pos + 'px');
                    myEl.attr('day', day);
                     if(!checkbox.checked){
                        scope.showPopover = false;
                        
                    } 
                    if(day!="" && day!=undefined ){
                     if(!checkbox.checked)
                        {
                        scope.flag=true;
                    }
                    else
                    {
                        
                         scope.flag=false;
                    }
                    } else {
                        scope.showPopover = true;
                        scope.flag=false;
                    }
                    
                    
                   
                    //scope.showPopover = true;
                    
                }
                
               
            };
            
            scope.closePop = function(obj){
              //  alert(obj.value);
                var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                if(myEl.attr('day')){
                    scope.showPopover=true;
                } else {
                    scope.showPopover=false;
                    myEl.removeAttr('day');
                }
            }
            
            scope.save_time = function(){
                var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                var data = {
                    "endTime": scope.to+scope.to_type,
                    "startTime": scope.from+scope.from_type,
                    "day": myEl.attr('day')
                }
                
                myEl.removeAttr('day');
                scope.locationSchedule.push(data);
                scope.flag=false;
                scope.showPopover=false;
            }
        }
    };
});