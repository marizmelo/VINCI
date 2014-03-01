// -------------------------
// CREATE APPLICATION MODULE
// -------------------------

var vinci = angular.module('vinci', []);

// -------------------------
// FILTERS
// -------------------------


// -------------------------
// CONTROLLERS
// -------------------------

vinci.controller('Grid', function ($scope, $http, API) {
	// Get directory folders / files

}); 

// -------------------------
// DIRECTIVES
// -------------------------


// -------------------------
// SERVICES
// -------------------------

vinci.factory('Model', function () {
	return {
		searchurl : './search.php?dir=',
		files : null
	};
});

vinci.service('API', function ($http, Model) {
	var self = this; // cache object

	self.getFiles = function (folder) {
		$http.get( Model.searchurl + folder).
    success(function (data) {
      Model.files = data.results;
    }).
    error(function (data, status) {
      Model.files = null;
    });
	};

	
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