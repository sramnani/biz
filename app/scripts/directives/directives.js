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
            scope.error_directive="";
            scope.locationSchedule=[];
            var locations=[]; 
            var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                        
            scope.showPopover = false;
            scope.flag=false;
            scope.from=9;
            scope.to=5;
          
            scope.period=['AM','PM'];
            scope.from_type=scope.period[0];
            scope.to_type=scope.period[1];
            
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
                scope.error_directive="";
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

                scope.error_directive="";
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
                        scope.from=9;
                        scope.from_type="AM";                        
                        scope.to=5;
                        scope.to_type="PM";
                    }
                }
                
            }
            
            scope.closePop = function(obj){
              scope.error_directive="";
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
                
                if(scope.to==""){
                    scope.error_directive = "Please select to & from time";
                    return;
                } else if(scope.from==""){
                    scope.error_directive = "Please select to & from time";
                    return;
                } else if(scope.from<1 || scope.from>12 ){
                    scope.error_directive = "Time should be between 1 to 12";
                    return;
                } else if(scope.to<1 || scope.to>12){
                    scope.error_directive = "Time should be between 1 to 12";
                    return;
                } else if(scope.from_type==""){
                    scope.error_directive="Please select AM or PM for FROM";
                    return;
                } else if(scope.to_type==""){
                    scope.error_directive="Please select AM or PM for TO";
                    return;
                } else {
                    scope.error_directive="";
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
              //  scope.from="";
                scope.from_type="";
                scope.to="";
                scope.to_type="";
            }
        }
    };
});
angular.module('outingzApp').directive('timePickAdvance', function ($compile) {
    return {
        restrict: 'E',
        templateUrl: '../../views/timePickerAdvance.html',
        link: function(scope, element, attributes) {
            scope.error_directive="";
            scope.locationSchedule=[];
            var locations=[]; 
            var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                        
            scope.showPopover = false;
            scope.flag=false;
            scope.from=9;
            scope.to=5;
          
            scope.period=['PM','AM'];
            
            
            scope.current_slot = [];
            
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
                
               scope.error_directive="";
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
                    
                   
                    myEl.attr('day', day);
                    scope.showPopover = true;  
                    
                    if (!checkbox.checked) {
                      scope.showPopover = false;  
                      scope.current_slot=[];
                      angular.forEach(scope.locationSchedule, function(value, key) {
                          if(value.day!=myEl.attr('day')){
                              locations.push(value);
                          }
                      });
                      scope.locationSchedule = locations;
                      locations=[];
                      myEl.removeAttr('day');
                    } else {
                        if(scope.current_slot.length<1)
                        scope.current_slot.push({from:9, from_type : 'AM', to : 5,to_type:'PM'});
                    } 
                    
                }
                
                console.log(JSON.stringify(scope.locationSchedule));               
            };
           
            scope.showHover = function($event,pos,day){
               
                scope.error_directive="";
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
                    
                   scope.current_slot=[];
                    
                    scope.showPopover = true;  
                    
                    
                    angular.forEach(scope.locationSchedule, function (value, key) {
                        if (value.day == day) {   
                            angular.forEach(value.time, function (value, key) {  
                               
                                scope.current_slot.push({from:value.startTime.slice(0,-2), from_type : value.startTime.slice(-2), to : value.endTime.slice(0,-2),to_type:value.endTime.slice(-2)});
                            
                            });
                           /* scope.from = parseInt(value.startTime.slice(0,-2));
                            scope.from_type = value.startTime.slice(-2);
                            scope.to = parseInt(value.endTime.slice(0,-2));
                            scope.to_type = value.endTime.slice(-2);*/
                        }
                    });
                    
                    if (!checkbox.checked) {
                        
                         if(scope.current_slot.length<1)
                        scope.current_slot.push({from:9, from_type : 'AM', to : 5,to_type:'PM'}); 
                        
                        
                    }
                }
                
            }
            
            scope.closePop = function(obj){
                
                
                scope.error_directive="";
                
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
                    scope.current_slot=[];
                    scope.showPopover=false;
                    myEl.removeAttr('day');
                }
            }
            
            
            scope.save_time = function(){
                
                var myEl = angular.element( document.querySelector( '.timerpopup' ) );
                
                var data = {
                    time:[],
                    "day": myEl.attr('day')
                }
                
                
                angular.forEach(scope.current_slot, function (value, key) {
                    
                    var timeObj = {"startTime": value.from+value.from_type,
                                    "endTime": value.to+value.to_type};                                
                    data.time.push(timeObj);
                   
                });
                
                
                if(scope.all){
                    scope.locationSchedule = [];
                    
                    var data = {
                        time: [],
                        "day": myEl.attr('day')
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    
                    scope.locationSchedule.push(data);
                    
                    if(myEl.attr('day')!='mon'){
                        
                    var data = {
                        time: [],
                        "day": 'mon'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data);
                    scope.mon=true;
                    }
                    
                    if(myEl.attr('day')!='tue'){
                       var data = {
                        time: [],
                        "day": 'tue'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data);
                        scope.tue=true;
                    }
                    
                    if(myEl.attr('day')!='wed'){
                       var data = {
                        time: [],
                        "day": 'wed'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data);
                        scope.wed=true;
                    }
                    
                    if(myEl.attr('day')!='thu'){
                       var data = {
                        time: [],
                        "day": 'thu'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data);
                        scope.thu=true;
                    }
                    if(myEl.attr('day')!='fri'){
                       var data = {
                        time: [],
                        "day": 'fri'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data); 
                        scope.fri=true;
                    }
                    if(myEl.attr('day')!='sat'){
                       var data = {
                        time: [],
                        "day": 'sat'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data); 
                        scope.sat=true;
                    }
                    if(myEl.attr('day')!='sun'){
                       var data = {
                        time: [],
                        "day": 'sun'
                    }
                    
                    angular.forEach(scope.current_slot, function (value, key) {

                        var timeObj = {"startTime": value.from + value.from_type,
                            "endTime": value.to + value.to_type};
                        data.time.push(timeObj);

                    });
                    scope.locationSchedule.push(data);
                        scope.sun=true;
                    }
                    scope.all=false;
                    
                } else {
                    scope.locationSchedule.push(data);
                    
                }
                
                console.log(JSON.stringify(scope.locationSchedule));
                myEl.removeAttr('day');
                
                scope.flag=false;
                scope.showPopover=false;
              //  scope.from="";
                scope.from_type="";
                scope.to="";
                scope.to_type="";
            }
            
            scope.test = function(){
                alert("inside test");
            }
            
            scope.add_slot = function(){
                scope.current_slot.push({from:9, from_type : 'AM', to : 5,to_type:'PM'});
               // var myEl = angular.element( document.querySelector( '#slot' ) );
               // myEl.after($compile('<div class="form-group timeGroup"><div class="timeInfo even timepopup"><div class="time-cell"><input type="text"   class="form-control entryInput3" ng-model="from" time="1" only-digits><select class="form-control  entryInput2" ng-model="from_type" ><option ng-repeat="item in period" value="{{item}}">{{item}}</option></select></div></div><div class="timeTo">TO </div><div class="timeInfo"><div class="time-cell"><input type="text"  min="1" max="12" class="form-control entryInput3" ng-model="to" time="1" only-digits><input type="hidden" ng-model="day"><select class="form-control  entryInput2" ng-model="to_type"><option ng-repeat="item in period" value="{{item}}">{{item}}</option></select></div></div></div>')(scope));
             //   var timepicker = angular.element( document.querySelector( '.outertimeInfo' ) );
             //   timepicker.css('top','-340px');
            }
        }
    };
});