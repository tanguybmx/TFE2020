<?php
//ce controlleur permet d'appeler la procédure de la db de récupération de tous les rdv d'un professionnel
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getAllRdvPro = $db->callProcedure('getAllRdvPro',[$idPro]);

echo json_encode($getAllRdvPro);