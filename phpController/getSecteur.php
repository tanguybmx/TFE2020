<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des secteurs disponibles pour une annonce
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getSecteur = $db->callProcedure('getSecteur',[]);

echo json_encode($getSecteur);