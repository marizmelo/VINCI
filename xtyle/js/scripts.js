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

vinci.controller('Files', function ($scope, $http, API, Model) {

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
	
}); 

// -------------------------
// DIRECTIVES
// -------------------------


// -------------------------
// SERVICES
// -------------------------

vinci.factory('Model', function () {
	return {
		searchurl : 'http://0.0.0.0:7000/search.php?dir=resources',
		files : null
	};
});

vinci.service('API', function ($http, Model) {
	
});

$(function() {

	/* JSON REQUEST */
	/*$.ajax({
  	dataType: "json",
  	url: url,
  	data: data,
  	success: success
	});*/

	/* MAGNIFIC */
	$('.grid6 a').magnificPopup({
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}
	 });
});