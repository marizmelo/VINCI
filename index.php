<?php 
include ('hanoi/hanoi.php');
$config = new Configure();
$config->title = "VINCI Visualize Resources";

$resources = 'resources/';

?>
<!DOCTYPE HTML>
<html class="responsive">
<head>
	<title><?=$config->title?></title>
	<meta charset="utf-8">
	<meta name="robots" content="all">
	<meta name="citation_author" content="Author Name">
	<meta name="description" content="Project Description">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<!-- <link href="xtyle/img/favicon.ico" rel="icon" type="image/x-icon"> -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:600,300,700,400' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="xtyle/css/xtyle.min.css">
	<link rel="stylesheet" type="text/css" href="xtyle/css/styles.css">
	<link rel="stylesheet" type="text/css" href="xtyle/css/magnific.css">
	<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	<script src="/xtyle/js/magnific.js"></script>
	<script src="/xtyle/js/xtyle.min.js"></script>
	<script>
		$(document).ready(function() {
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
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
			 });
		});
	</script>
</head>
<body>
	<header>
		<nav class="background white">
			<span id="logo" style="padding-left: 20px;">VINCI</span>
			<span class="menu"><i class="icon-menu"></i> VINCI</span>
			<a href="/">Help</a>
		</nav>
	</header>

	

	<div id="gallery" class="grid">
		<?php
			if ($handle = opendir($resources)) {

		    /* This is the correct way to loop over the directory. */
		    while (false !== ($entry = readdir($handle))) {
		    	if (!isset($_GET['folder']) && $entry != ".DS_Store" && $entry != "." && $entry != "..") {


		?>
		<div class="grid6">
			<div class="background green" style="background:url('<?=$resources.$entry?>') center no-repeat #F7F7F7">
				<a href="<?=$resources.$entry?>"><h4><?=$entry?></h4></a>
			</div>
		</div>
		<?php
					}
			  }
			  closedir($handle);
			}
		?>
	</div>

	<footer>
	</footer>
</body>
</html>