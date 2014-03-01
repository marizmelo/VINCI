<?php

	function returnFolder() {

	}

	if ($_SERVER['SERVER_NAME'] != "0.0.0.0") {
		exit();
	}
		
	header('Content-Type: application/json');

	// VERIFY IF DIRECTORY WAS PASSED AS PARAMETER
	if (isset($_GET['dir']) && $_GET['dir'] != '') {
		$dir = './' . $_GET['dir'].'/*';
	} else {
		$dir = './*';
	}

	// CREATE ARRAYS TO HOLD FOLDERS / FILES
	$folders = array();
	$files = array();

	// READ DIRECTORY AND SEARCH ALL FOLDERS / FILES
	foreach (glob($dir) as $filename) {
		if (is_dir($filename)) {
			array_push($folders, $filename);
		}	else {
			array_push($files, $filename);
		}
	}

	// CREATE MASTER ARRAY WITH FOLDERS / FILES 
	$obj["folders"] = $folders;
	$obj["files"] = $files;

	// RETURN ARRAY AS VALID JSON OBJECT
	//echo json_encode($obj, JSON_PRETTY_PRINT);
	echo json_encode($obj);

?>