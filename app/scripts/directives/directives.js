// Directive to check if confirm password matches with password.
angular.module('outingzApp').directive('validPasswordC', function () {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=validPasswordC"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {
                return modelValue == scope.otherModelValue;
            };

            scope.$watch("otherModelValue", function () {
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
        link: function (scope, element, attributes) {
            
            
            function simpleKeys(original) {
                return Object.keys(original).reduce(function (obj, key) {
                    obj[key] = typeof original[key] === 'object' ? '{ ... }' : original[key];
                    return obj;
                }, {});
            }
            
            scope.error_directive = "";
            scope.locationSchedule = [];
            var locations = [];
            var myEl = angular.element(document.querySelector('.timerpopup'));

            scope.showPopover = false;
            scope.flag = false;
            scope.from = 9;
            scope.to = 5;

            scope.period = ['AM', 'PM'];
            scope.from_type = scope.period[0];
            scope.to_type = scope.period[1];

            scope.disb = function (day) {
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day') && myEl.attr('day') == day) {
                    return false;
                } else if (myEl.attr('day')) {
                    return true;
                }
            }

            scope.all_days = function () {
                if (scope.all) {
                    // alert('true');
                } else {
                    // alert('false');
                }
            }
            scope.current_day = "";

            scope.showPop = function ($event, pos, day) {
                scope.error_directive = "";
                var checkbox = $event.target;

                switch (day) {
                    case 'MON':
                        scope.current_day = "Monday";
                        break;
                    case 'TUE':
                        scope.current_day = "Tuesday";
                        break;
                    case 'WED':
                        scope.current_day = "Wednesday";
                        break;
                    case 'THU':
                        scope.current_day = "Thursday";
                        break;
                    case 'FRI':
                        scope.current_day = "Friday";
                        break;
                    case 'SAT':
                        scope.current_day = "Saturday";
                        break;
                    case 'SUN':
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

                        angular.forEach(scope.locationSchedule, function (value, key) {
                            if (value.day != myEl.attr('day')) {
                                locations.push(value);
                            }
                        });
                        scope.locationSchedule = locations;
                        locations = [];
                        myEl.removeAttr('day');
                    }

                }

            };

            scope.showHover = function ($event, pos, day) {
              
                var data  = simpleKeys($event);
                
                scope.error_directive = "";
                switch (day) {
                    case 'MON':
                        scope.current_day = "Monday";
                        break;
                    case 'TUE':
                        scope.current_day = "Tuesday";
                        break;
                    case 'WED':
                        scope.current_day = "Wednesday";
                        break;
                    case 'THU':
                        scope.current_day = "Thursday";
                        break;
                    case 'FRI':
                        scope.current_day = "Friday";
                        break;
                    case 'SAT':
                        scope.current_day = "Saturday";
                        break;
                    case 'SUN':
                        scope.current_day = "Sunday";
                        break;
                }


                
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (!myEl.attr('day')) {
                        
                    scope.showPopover = true;

                    
                    var keepGoing = true;
                    angular.forEach(scope.locationSchedule, function (value, key) {
                        if(keepGoing) {
                        if (value.day == day) {
                            
                            scope.from = parseInt(value.startTime.slice(0, -2));
                            scope.from_type = value.startTime.slice(-2);
                            scope.to = parseInt(value.endTime.slice(0, -2));
                            scope.to_type = value.endTime.slice(-2);
                            keepGoing = false;
                        } else {
                        
                            scope.from = 9;
                            scope.from_type = "AM";
                            scope.to = 5;
                            scope.to_type = "PM";
                        
                        }
                        }
                    });
                    
                    
                }

            }

            scope.closePop = function (obj) {
                scope.error_directive = "";
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day')) {
                    if (obj && obj == 'close') {
                        scope.showPopover = false;
                        switch (myEl.attr('day')) {
                            case 'MON':
                                scope.mon = false;
                                break;
                            case 'TUE':
                                scope.tue = false;
                                break;
                            case 'WED':
                                scope.wed = false;
                                break;
                            case 'THU':
                                scope.thu = false;
                                break;
                            case 'FRI':
                                scope.fri = false;
                                break;
                            case 'SAT':
                                scope.sat = false;
                                break;
                            case 'SUN':
                                scope.sun = false;
                                break;
                        }
                        myEl.removeAttr('day');
                    } else {
                        scope.showPopover = true;
                    }
                } else {
                    scope.showPopover = false;
                    myEl.removeAttr('day');
                }
            }
            
            scope.generateUUID = function () {
                var d = new Date().getTime();
                var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = (d + Math.random() * 16) % 16 | 0;
                    d = Math.floor(d / 16);
                    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
                });
                return uuid;
            };

            scope.save_time = function () {

                var myEl = angular.element(document.querySelector('.timerpopup'));
                var guid = scope.generateUUID();
                var data = {
                    "id":guid,
                    "endTime": scope.to + scope.to_type,
                    "startTime": scope.from + scope.from_type,
                    "day": myEl.attr('day')
                }
                
                

                if (scope.to == "") {
                    scope.error_directive = "Please select to & from time";
                    return;
                } else if (scope.from == "") {
                    scope.error_directive = "Please select to & from time";
                    return;
                } else if (scope.from < 1 || scope.from > 12) {
                    scope.error_directive = "Time should be between 1 to 12";
                    return;
                } else if (scope.to < 1 || scope.to > 12) {
                    scope.error_directive = "Time should be between 1 to 12";
                    return;
                } else if (scope.from_type == "") {
                    scope.error_directive = "Please select AM or PM for FROM";
                    return;
                } else if (scope.to_type == "") {
                    scope.error_directive = "Please select AM or PM for TO";
                    return;
                } else {
                    scope.error_directive = "";
                }


                if (scope.all) {
                    scope.locationSchedule = [];
                    
                    var guid = scope.generateUUID();

                    scope.locationSchedule.push({
                        "id":scope.generateUUID(),
                        "endTime": scope.to + scope.to_type,
                        "startTime": scope.from + scope.from_type,
                        "day": myEl.attr('day')
                    });

                    if (myEl.attr('day') != 'MON') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'MON'
                        });
                        scope.MON = true;
                    }

                    if (myEl.attr('day') != 'TUE') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'TUE'
                        });
                        scope.TUE = true;
                    }

                    if (myEl.attr('day') != 'WED') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'WED'
                        });
                        scope.WED = true;
                    }

                    if (myEl.attr('day') != 'THU') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'THU'
                        });
                        scope.THU = true;
                    }
                    if (myEl.attr('day') != 'FRI') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'FRI'
                        });
                        scope.FRI = true;
                    }
                    if (myEl.attr('day') != 'SAT') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'SAT'
                        });
                        scope.SAT = true;
                    }
                    if (myEl.attr('day') != 'SUN') {
                        scope.locationSchedule.push({
                            "id":scope.generateUUID(),
                            "endTime": scope.to + scope.to_type,
                            "startTime": scope.from + scope.from_type,
                            "day": 'SUN'
                        });
                        scope.SUN = true;
                    }
                    scope.all = false;

                } else {
                    scope.locationSchedule.push(data);
                }

                myEl.removeAttr('day');

                scope.flag = false;
                scope.showPopover = false;
                //  scope.from="";
                scope.from_type = "";
                scope.to = "";
                scope.to_type = "";
            }
        }
    };
});
angular.module('outingzApp').directive('timePickAdvance', function ($compile, $timeout) {
    return {
        restrict: 'E',
        templateUrl: '../../views/timePickerAdvance.html?' + Math.random(),
        link: function (scope, element, attributes) {
            console.log("link here");
           // scope.$emit('outingzApp');
            scope.error_directive = "";
            scope.locationSchedule = [];
            var locations = [];
            var myEl = angular.element(document.querySelector('.timerpopup'));

            scope.showPopover = false;
            scope.flag = false;
            scope.from = 9;
            scope.to = 5;

            scope.period = ['PM', 'AM'];


            scope.current_slot = [];
            
            var days_pos = angular.element(document.querySelector('#days_group'));
            
            var offset = days_pos.offset();

            var offset_time = days_pos.offset();


            var offset = days_pos.offset();
            scope.disb = function (day) {
                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day') && myEl.attr('day') == day) {
                    return false;
                } else if (myEl.attr('day')) {
                    return true;
                }
            }

            scope.all_days = function () {
                if (scope.all) {
                    // alert('true');
                } else {
                    // alert('false');
                }
            }
            scope.current_day = "";

            scope.showPop = function ($event, pos, day) {

                scope.error_directive = "";
                var checkbox = $event.target;
                switch (day) {
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
                        scope.current_slot = [];
                        angular.forEach(scope.locationSchedule, function (value, key) {
                            if (value.day != myEl.attr('day')) {
                                locations.push(value);
                            }
                        });
                        scope.locationSchedule = locations;
                        locations = [];
                        myEl.removeAttr('day');
                    } else {

                        if (scope.current_slot.length < 1) {
                            scope.current_slot.push({from: 9, from_type: 'AM', to: 5, to_type: 'PM'});

                        }
                        $timeout(function () {

                            //  console.log(offset.top);
                            //  console.log(offset.top-time_pos.outerHeight());
                            var time_pos = angular.element(document.querySelector('.outertimeInfo'));
                            console.log(time_pos.outerHeight());
                           scope.$apply(myEl.css('top', -(time_pos.outerHeight() + 100) + 'px'));
                        }, 0);
                    }

                }

                console.log(JSON.stringify(scope.locationSchedule));
            };

            scope.showHover = function ($event, pos, day) {
                console.log(JSON.stringify($event.target));
                scope.error_directive = "";
                switch (day) {
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

                    scope.current_slot = [];

                    scope.showPopover = true;


                    angular.forEach(scope.locationSchedule, function (value, key) {
                        if (value.day == day) {
                            angular.forEach(value.time, function (value, key) {

                                scope.current_slot.push({from: value.startTime.slice(0, -2), from_type: value.startTime.slice(-2), to: value.endTime.slice(0, -2), to_type: value.endTime.slice(-2)});
                                $timeout(function () {

                                    //   console.log(offset.top);
                                    //  console.log(offset.top - time_pos.outerHeight());
                                    var time_pos = angular.element(document.querySelector('.outertimeInfo'));
                                    console.log(time_pos.outerHeight());
                                    scope.$apply(myEl.css('top', -(time_pos.outerHeight() + 100) + 'px'));
                                }, 0);
                            });

                        }
                    });

                    if (!checkbox.checked) {
console.log("HELO");
                        if (scope.current_slot.length < 1) {
                            scope.current_slot.push({from: 9, from_type: 'AM', to: 5, to_type: 'PM'});
                            $timeout(function () {

                                // console.log(offset.top);
                                //console.log(offset.top-time_pos.outerHeight());
                                var time_pos = angular.element(document.querySelector('.outertimeInfo'));
                                console.log(time_pos.outerHeight());
                               scope.$apply(myEl.css('top', -(time_pos.outerHeight() + 100) + 'px'));
                            }, 0);
                        }

                    }
                }

            }

            scope.closePop = function (obj) {


                scope.error_directive = "";

                var myEl = angular.element(document.querySelector('.timerpopup'));
                if (myEl.attr('day')) {

                    if (obj && obj == 'close') {
                        scope.showPopover = false;
                        switch (myEl.attr('day')) {
                            case 'mon':
                                scope.mon = false;
                                break;
                            case 'tue':
                                scope.tue = false;
                                break;
                            case 'wed':
                                scope.wed = false;
                                break;
                            case 'thu':
                                scope.thu = false;
                                break;
                            case 'fri':
                                scope.fri = false;
                                break;
                            case 'sat':
                                scope.sat = false;
                                break;
                            case 'sun':
                                scope.sun = false;
                                break;
                        }
                        myEl.removeAttr('day');
                    } else {
                        scope.showPopover = true;
                    }
                } else {
                    scope.current_slot = [];
                    scope.showPopover = false;
                    myEl.removeAttr('day');
                }
            }


            scope.save_time = function () {

                var myEl = angular.element(document.querySelector('.timerpopup'));

                var data = {
                    time: [],
                    "day": myEl.attr('day')
                }


                angular.forEach(scope.current_slot, function (value, key) {

                    var timeObj = {"startTime": value.from + value.from_type,
                        "endTime": value.to + value.to_type};
                    data.time.push(timeObj);

                });


                if (scope.all) {
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

                    if (myEl.attr('day') != 'mon') {

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
                        scope.mon = true;
                    }

                    if (myEl.attr('day') != 'tue') {
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
                        scope.tue = true;
                    }

                    if (myEl.attr('day') != 'wed') {
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
                        scope.wed = true;
                    }

                    if (myEl.attr('day') != 'thu') {
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
                        scope.thu = true;
                    }
                    if (myEl.attr('day') != 'fri') {
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
                        scope.fri = true;
                    }
                    if (myEl.attr('day') != 'sat') {
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
                        scope.sat = true;
                    }
                    if (myEl.attr('day') != 'sun') {
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
                        scope.sun = true;
                    }
                    scope.all = false;

                } else {
                    scope.locationSchedule.push(data);

                }

                console.log(JSON.stringify(scope.locationSchedule));
                myEl.removeAttr('day');
                $timeout(function () {

                   // myEl.css('top', '0px');
                }, 0);
                scope.flag = false;
                scope.showPopover = false;
                //  scope.from="";
                scope.from_type = "";
                scope.to = "";
                scope.to_type = "";
            }

            scope.add_slot = function () {
                var myEl = angular.element(document.querySelector('.timerpopup'));
                scope.current_slot.push({from: 9, from_type: 'AM', to: 5, to_type: 'PM'});
                $timeout(function () {
                    var time_pos = angular.element(document.querySelector('.outertimeInfo'));
                    console.log(time_pos.outerHeight());
                    scope.$apply(myEl.css('top', -(time_pos.outerHeight() + 100) + 'px'));
                }, 0);
            }
        }
    };
});
