<?php
//ce controlleur permet d'appeler la procédure de la db de récupération du nom de l'entreprise d'un professionnel
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getProEnt = $db->callProcedure('getProEnt',[$idPro]);

echo json_encode($getProEnt);