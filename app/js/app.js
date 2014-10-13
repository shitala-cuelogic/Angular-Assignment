'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	when('/', {
  					templateUrl: 'partials/partial1.html', 
  					controller: 'MyCtrl1'
  				   }
  	).
  	when('/about-us', {
  							templateUrl: 'partials/about_us.html', 
  							controller: 'MyDirectives'
  						}
  	).
    when('/join-us', {
                templateUrl: 'partials/join_us.html', 
                controller: 'MyDirectives'
              }
    ).
    when('/cuelogic/clients', {
                templateUrl: 'partials/clients.html', 
                controller: 'MyDirectives'
              }
    ).
    when('/terms-and-conditions', {
                templateUrl: 'partials/terms_and_conditions.html', 
                controller: 'MyDirectives'
              }
    ).
  	otherwise( {
  			
  			     redirectTo: '/'//,
  			     //template:'sdadsdadsd'
  			   }
  	);
}]);
