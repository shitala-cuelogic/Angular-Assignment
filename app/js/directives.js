'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('attributeDirectives', function() {
    return {

      templateUrl: 'partials/my-customer.html'
    };
  })
  .directive('elementDirectives', function() {
    return {
    	restrict : 'E',
      templateUrl: 'partials/my-customer.html'
    };
  })
  .directive('classDirectives', function() {
    return {
    	restrict : 'C',
      template : 'classDirectives'
      //templateUrl: 'partials/my-customer.html'
    };
  })
  .directive('commentDirectives', function() {
    return {
    	restrict : 'M',
      templateUrl: 'partials/my-customer.html'
    };
  });
