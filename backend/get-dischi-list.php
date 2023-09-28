<?php

/*
include __DIR__ . '/data/dischi.php';

header('Content-Type: application/json');
echo json_encode($dischi);

*/

// Trasformo in un array
$string = file_get_contents('./data/dischi.json');
var_dump($string);
$dischiListJson = json_decode($string);

var_dump($dischiListJson);

?>