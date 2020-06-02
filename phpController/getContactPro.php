<?php
//ce controlleur permet d'appeler la procédure de la db de récupération  du client dans une conversation d'un professionnel
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idConvers = htmlspecialchars($_POST['idConvers']);

$getContactCli = $db->callProcedure('getContactPro',[$idConvers]);

echo json_encode($getContactCli);