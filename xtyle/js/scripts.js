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

vinci.controller('Files', function ($scope, $http, Model, $filter) {

	// remove path and return just filename
	var justNameController = function (url) {
		var newurl = url.split('/');
		return newurl[newurl.length-1];
	};

	// try to identify type video (iframe) or image
	var getType = function (url) {
		var newurl = justNameController(url).split('.');
		if (newurl[1] && newurl[1] == "youtube") {
			return "iframe";
		} else {
			return "image";
		}
	};

	var returnTypes = function (files) {
		// check if files is empty
		if (!files.length) {
			return null;
		}
		var types = new Array();
    for (var i = 0 ; i < files.length; ++i ) {
    	types.push(getType(files[i]));
    	//console.log(files[i]);
    }
    return types;
	};

	// get list of all feeds with news which user is subscribed to
  $http.get( Model.searchurl + Model.current[0] ).
  success(function (data) {
    $scope.files = data.files;
    $scope.folders = data.folders;
    //$scope.types = returnTypes(data.files);
  }).
    error(function (data, status) {
      console.log(status);
    });

   // update list of files/folders based on url (folder)
   $scope.updateFiles = function (url) {
   	
   	var nameurl = justNameController(url);
   	if ( nameurl !== ".." ) {
   		Model.current.push(nameurl);
   	} else if ( Model.current.length > 1 ) {
   		Model.current.pop();
   	}
   	
		$http.get( Model.searchurl + Model.current.join("/") ).
	  success(function (data) {
	    $scope.files = data.files;

	    //$scope.types = returnTypes(data.files);

	    // if it is at the first folder
	    if ( Model.current.length == 1) {
	    	$scope.folders = data.folders;	
	    } else {
	    	data.folders.unshift("..");
	    	$scope.folders = data.folders;
	    }
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
				$('div[files] a').magnificPopup({
					type:'image',
					gallery: {
						enabled: true
					}
				});
			});
		}
	};
});

// -------------------------
// SERVICES
// -------------------------

vinci.factory('Model', function () {
	return {
		searchurl : 'http://0.0.0.0:7000/search.php?dir=', // url of API
		files : null, // hold list of files from server
		current : ["resources"] // start folder
	};
});