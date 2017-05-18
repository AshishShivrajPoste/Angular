'use strict';

var app = angular.module('myApp.MenuList', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'MenuList'
        });
    }]);

    app.controller('MenuList', ['$scope',function($scope) {


    }]);
    app.directive('ngMenu' , function ($parse) {
        return {
            restrict:'A',
            template: '<div ng-repeat="menu in menus">' +
                            '<ul>' +
                                '<li>' +
                                    '<a ng-bind="menu"></a>' +
                                '</li>' +
                            '</ul>' +
                        '</div>',
            link: function ($scope, element, attrs) {

                 $scope.menus = $parse(attrs.ngMenu)($scope);
                console.debug("attrs.ngMenu", $scope.menus);
            }
        };
    });