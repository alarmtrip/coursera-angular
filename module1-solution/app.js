(function () {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckerController', function ($scope) {
            $scope.lunchlist = "";
            $scope.lunchitems = 0;
            $scope.message = "";

            $scope.countItems = function () {
                var totalLunchItems = countLunchItems($scope.lunchlist);
                $scope.lunchitems = totalLunchItems;
            };

            $scope.displayMessage = function () {
                var strmessage = determineMessage($scope.lunchitems);
                $scope.message = strmessage;
            };

            function countLunchItems(string) {
                var lunchArray = string.split(",");
                var totalLunchItems = lunchArray.length;
                return totalLunchItems;
            }

            function determineMessage(arr) {
                var strmessage = "";
                console.log(arr)
                if (arr == 0) {
                    strmessage = "Please Enter Data First!";
                } else if ( arr <= 3 ) {
                    strmessage = "Enjoy!";
                } else if ( arr >= 3 ) {
                    strmessage = "Too much!";
                }
                return strmessage;
            }
        });

})();

