'use strict';

angular.module('myApp.statusUpdate', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'StatusUpdate'
        });
    }])

    .controller('StatusUpdate', ['$scope',function($scope) {

        $scope.StatusData = [];

        $scope.Delete = function (index) {
            $scope.StatusData.splice(index, 1);
        };

        $scope.Add = function () {
            // Do nothing if no state is entered (blank)
            if (!$scope.newStatus)
                return;
            // Add to main records
            $scope.StatusData.push({
                status: $scope.newStatus
            });
            // See $Scope.Reset...
            $scope.Reset();
        }
        $scope.Reset = function () {
            $scope.newStatus = '';
        }

        $scope.Reset();
    }]);