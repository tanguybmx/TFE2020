<?php
//ce controlleur permet d'appeler la procédure de la db de récupération du pseudo d'un client a partir de son idclient
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idCli = htmlspecialchars($_POST['idCli']);

$getNomCli = $db->callProcedure('getNomCli',[$idCli]);

echo json_encode($getNomCli);