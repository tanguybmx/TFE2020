<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des regions disponibles  pour un client
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getRegion = $db->callProcedure('getRegionCli',[]);

echo json_encode($getRegion);