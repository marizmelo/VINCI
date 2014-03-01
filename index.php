<?php 
include ('hanoi/hanoi.php');
$config = new Configure();
$config->title = "VINCI Visualize Resources";

$resources = 'resources/';

?>
<!DOCTYPE HTML>
<html class="responsive" ng-app="vinci">
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
</head>
<body>
	<header>
		<nav class="background white">
			<span id="logo" style="padding-left: 20px;">VINCI</span>
			<span class="menu"><i class="icon-menu"></i> VINCI</span>
			<a href="/">Help</a>
		</nav>
	</header>

	<div id="gallery" class="grid" ng-controller="Files">
		
		<!-- LIST OF FOLDERS -->
		<div class="grid6" ng-repeat="folder in folders">
			<div class="background green" style="background: url(xtyle/img/folder.png) center #F7F7F7 no-repeat;">
				<a href=""><h4>{{folder|justName}}/</h4></a>
			</div>
		</div>

		<!-- LIST OF FILES -->
		<div class="grid6" ng-repeat="file in files">
			<div class="background green" style="background: url({{file}}) center #F7F7F7">
				<a href=""><h4>{{file | justName}}</h4></a>
			</div>
		</div>
		
	</div>

	<footer>
	</footer>

	<!-- SCRIPTS -->
	<script src="/xtyle/js/angular.js"></script>
	<script src="/xtyle/js/jquery.js"></script>
	<script src="/xtyle/js/magnific.js"></script>
	<script src="/xtyle/js/xtyle.min.js"></script>
	<script src="/xtyle/js/scripts.js"></script>
</body>
</html>