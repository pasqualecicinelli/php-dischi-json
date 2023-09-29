<?php

/*
include __DIR__ . '/data/dischi.php';

header('Content-Type: application/json');
echo json_encode($dischi);
*/

// Trasformo in un array
$string = file_get_contents('./data/dischi.json');
echo ($string);
$dischiListJson = json_decode($string, true);

$resultDischi = [];
$resultDischi = $dischiListJson;

header('Content-Type: application/json');
echo json_encode($resultDischi);


?>