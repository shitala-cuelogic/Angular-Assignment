'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {
  	$scope.greeting ="hello World";

  }])
 .controller('MyDirectives' , ['$scope',function($scope){
  	$scope.name = "Using ng-bind ";
  	$scope.user = { name: 'say'};
  	$scope.list = [];
    $scope.text = 'hello';
    $scope.submitData = function() {
        if ($scope.text) {
          $scope.list.push(this.text);
          $scope.text = '';
          //$scope.link = $location.absUrl();
          	//$scope.link = $location.protocol();
			$scope.link = $location.host();
        }
      };

  }]);
