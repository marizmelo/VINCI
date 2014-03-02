// -------------------------
// CREATE APPLICATION MODULE
// -------------------------

var vinci = angular.module('vinci', []);

// -------------------------
// FILTERS
// -------------------------
vinci.filter('justName', function () {
	return function(text) {
		var newtext = text.split('/');
		return newtext[newtext.length-1];
	}
});

// -------------------------
// CONTROLLERS
// -------------------------

vinci.controller('Files', function ($rootScope, $scope, $http, Model, $filter) {

	var justNameController = function (url) {
		var newurl = url.split('/');
		return newurl[newurl.length-1];
	};

	// get list of all feeds with news which user is subscribed to
  $http.get( Model.searchurl ).
  success(function (data) {
    //$scope.files = data.results;
    $scope.files = data.files;
    $scope.folders = data.folders;
    console.log(data);
  }).
    error(function (data, status) {
      console.log(status);
    });


   $scope.updateFiles = function (url) {
   	// console.log(url);
   	// console.log(justNameController(url));
   	// console.log(Model.searchurl + '/' + justNameController(url));
   	//console.log(Model.searchurl + $filter('justName')(url));
		$http.get( Model.searchurl + '/' + justNameController(url) ).
	  success(function (data) {
	    $rootScope.$broadcast('files', data.files);
	    $rootScope.$broadcast('folders', data.folders);
	    console.log(data);
	  }).
	    error(function (data, status) {
	      console.log(status);
	    });
	};
	
}); 

// -------------------------
// DIRECTIVES
// -------------------------
vinci.directive('files', function ($timeout) {
	return function (scope, element, attrs) {
		if (scope.$last) {
			$timeout (function () {
				$('div[files] a').magnificPopup({type:'image'});
			});
		}
	};
});

// -------------------------
// SERVICES
// -------------------------

vinci.factory('Model', function () {
	return {
		searchurl : 'http://0.0.0.0:7000/search.php?dir=resources', // url of API
		files : null, // hold list of files from server
		current : null // holds current folder
	};
});


$(function() {

	/* MAGNIFIC */
	
});