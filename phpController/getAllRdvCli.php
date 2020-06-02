<?php
//ce controlleur permet d'appeler la procédure de la db pour récupérer tous les rendez-vous d'un client
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idCli = htmlspecialchars($_POST['idCli']);

$getAllRdvCli = $db->callProcedure('getAllRdvCli',[$idCli]);

echo json_encode($getAllRdvCli);