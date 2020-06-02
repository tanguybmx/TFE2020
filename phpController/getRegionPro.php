<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des regions d'activité disponible pour une annonce
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getRegion = $db->callProcedure('getRegionPro',[]);

echo json_encode($getRegion);