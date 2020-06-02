<?php
//ce controlleur permet d'appeler la procédure de la db de récupération du professionnel dans une conversation d'un client
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idConvers = htmlspecialchars($_POST['idConvers']);

$getContactCli = $db->callProcedure('getContactCli',[$idConvers]);

echo json_encode($getContactCli);