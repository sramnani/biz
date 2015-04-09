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
            var locations=[]; 
            var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                        
            scope.showPopover = false;
            scope.flag=false;
            
            scope.disb = function(day){
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if(myEl.attr('day') && myEl.attr('day')==day){
                    return false;
                } else if(myEl.attr('day')){
                    return true;
                }
            }
            
            scope.all_days = function(){
                if(scope.all){
                   // alert('true');
                } else {
                   // alert('false');
                }
            }
             scope.current_day="";
            scope.showPop = function($event,pos,day){
                
               var checkbox = $event.target;
               
                switch(day){
                            case 'mon':
                            scope.current_day = "Monday";
                            break;
                            case 'tue':
                            scope.current_day = "Tuesday";
                            break;
                            case 'wed':
                            scope.current_day = "Wednesday";
                            break;
                            case 'thu':
                            scope.current_day = "Thursday";
                            break;
                            case 'fri':
                            scope.current_day = "Friday";
                            break;
                            case 'sat':
                            scope.current_day = "Saturday";
                            break;
                            case 'sun':
                            scope.current_day = "Sunday";
                            break;
                }
               
              
            
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day')) {
                    
                    if (!checkbox.checked) {
                        scope.showPopover = false;
                        myEl.removeAttr('day');
                    }
                    
                } else {
                    
                   // myEl.css('left', -pos + 'px');                    
                    myEl.attr('day', day);
                    scope.showPopover = true;  
                    if (!checkbox.checked) {
                      scope.showPopover = false;  
                      
                      angular.forEach(scope.locationSchedule, function(value, key) {
                          if(value.day!=myEl.attr('day')){
                              locations.push(value);
                          }
                      });
                      scope.locationSchedule = locations;
                      locations=[];
                      myEl.removeAttr('day');
                    } 
                    
                }
                               
            };
           
            scope.showHover = function($event,pos,day){
                
                switch(day){
                            case 'mon':
                            scope.current_day = "Monday";
                            break;
                            case 'tue':
                            scope.current_day = "Tuesday";
                            break;
                            case 'wed':
                            scope.current_day = "Wednesday";
                            break;
                            case 'thu':
                            scope.current_day = "Thursday";
                            break;
                            case 'fri':
                            scope.current_day = "Friday";
                            break;
                            case 'sat':
                            scope.current_day = "Saturday";
                            break;
                            case 'sun':
                            scope.current_day = "Sunday";
                            break;
                }
                
                
                var checkbox = $event.target;            
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (!myEl.attr('day')) {
                    
                  //  myEl.css('left', -pos + 'px');
                    
                    scope.showPopover = true;  
                    
                    
                    angular.forEach(scope.locationSchedule, function (value, key) {
                        if (value.day == day) {                            
                            scope.from = parseInt(value.startTime.slice(0,-2));
                            scope.from_type = value.startTime.slice(-2);
                            scope.to = parseInt(value.endTime.slice(0,-2));
                            scope.to_type = value.endTime.slice(-2);
                        }
                    });
                    
                    if (!checkbox.checked) {
                        scope.from="";
                        scope.from_type="";                        
                        scope.to="";
                        scope.to_type="";
                    }
                }
                
            }
            
            scope.closePop = function(obj){
              
                var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                if(myEl.attr('day')){
                    if(obj && obj=='close'){
                        scope.showPopover=false;
                        switch(myEl.attr('day')){
                            case 'mon':
                            scope.mon=false;
                            break;
                            case 'tue':
                            scope.tue=false;
                            break;
                            case 'wed':
                            scope.wed=false;
                            break;
                            case 'thu':
                            scope.thu=false;
                            break;
                            case 'fri':
                            scope.fri=false;
                            break;
                            case 'sat':
                            scope.sat=false;
                            break;
                            case 'sun':
                            scope.sun=false;
                            break;
                        }
                        myEl.removeAttr('day');
                    } else {
                        scope.showPopover=true;
                    }
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
                
                if(scope.all){
                    scope.locationSchedule = [];
                    
                    scope.locationSchedule.push({
                    "endTime": scope.to+scope.to_type,
                    "startTime": scope.from+scope.from_type,
                    "day": myEl.attr('day')
                    });
                    
                    if(myEl.attr('day')!='mon'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'mon'
                        }); 
                        scope.mon=true;
                    }
                    
                    if(myEl.attr('day')!='tue'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'tue'
                        }); 
                        scope.tue=true;
                    }
                    
                    if(myEl.attr('day')!='wed'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'wed'
                        }); 
                        scope.wed=true;
                    }
                    
                    if(myEl.attr('day')!='thu'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'thu'
                        }); 
                        scope.thu=true;
                    }
                    if(myEl.attr('day')!='fri'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'fri'
                        }); 
                        scope.fri=true;
                    }
                    if(myEl.attr('day')!='sat'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'sat'
                        }); 
                        scope.sat=true;
                    }
                    if(myEl.attr('day')!='sun'){
                       scope.locationSchedule.push({
                        "endTime": scope.to+scope.to_type,
                        "startTime": scope.from+scope.from_type,
                        "day": 'sun'
                        }); 
                        scope.sun=true;
                    }
                    scope.all=false;
                    
                } else {
                    scope.locationSchedule.push(data);
                }
                
                myEl.removeAttr('day');
                
                scope.flag=false;
                scope.showPopover=false;
                scope.from="";
                scope.from_type="";
                scope.to="";
                scope.to_type="";
            }
        }
    };
});