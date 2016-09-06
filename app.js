// MODULE
var weatherApp = angular.module('weatehrApp', ['ngRoute', 'ngResource']);

// ROUTE
weatherApp.config(function($routeProvider) {
	
	$routeProvider
	
	.when('/', {
		templateUrl: 'pages/home.htm',
		controller: 'homeController'
	})
	
	.when('/forecast', {
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	});
});

// SERVICES
weatherApp.service('cityService', function(){
	
	this.city = "Ney York, NY";
	
});

// CONTROLLER
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
	
	$scope.city = cityService.city;
	
}]);

weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService){
	
	$scope.city = cityService.city;
	
}]);