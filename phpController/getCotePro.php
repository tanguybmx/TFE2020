<?php
//ce controlleur permet d'appeler la procédure de la db de récupération de la cote moyenne d'un professionnel
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getCotePro = $db->callProcedure('getCotePro',[$idPro]);

echo json_encode($getCotePro);