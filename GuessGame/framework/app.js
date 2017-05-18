'use strict';

var app = angular.module('myApp.guessGame', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view', {
            templateUrl: 'view/view.html',
            controller: 'GuessGame'
        });
    }]);

    app.controller('GuessGame', ['$scope',function($scope) {
        var self = this;
        $scope.numbertoGuess=0;
        $scope.msg = '';
            $scope.Reset = function(){
                $scope.giveup = false;
            $scope.numbertoGuess = Math.floor((Math.random() * 100) + 1);
            console.log($scope.numbertoGuess)
            $scope.guess = '';
            //$scope.msg = '';

        };
        $scope.Reset();
        $scope.GiveUp = function () {
            $scope.giveup = true;
        };
        $scope.checkGuess = function () {
            var guess = $scope.guess;
            if(guess!="" && !isNaN(guess) ) {
                if (guess > $scope.numbertoGuess) {
                    $scope.msg = 'Guess Lower';
                } else if (guess < $scope.numbertoGuess) {
                    $scope.msg = 'Guess Higher';
                } else {
                    $scope.msg = 'You got it';
                    $scope.Reset();
                }
                $scope.guess = '';

            }
        };
    }]);