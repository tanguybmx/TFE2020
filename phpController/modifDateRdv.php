<?php
//ce controlleur permet d'appeler la procédure de la db de modification d'une date de rdv
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$dateRdv = htmlspecialchars($_POST['dateRdv']);

$modifDateRdv = $db->callProcedure('modifDateRdv',[$idRdv,$dateRdv]);

echo json_encode($modifDateRdv);