<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des infos d'un rendez-vous
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);

$getRdv = $db->callProcedure('getRdv',[$idRdv]);

echo json_encode($getRdv);