<?php
//ce controlleur permet d'appeler la procédure de la db de récupération du pseudo d'un pro a partir de son idpro
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getNomPro = $db->callProcedure('getNomPro',[$idPro]);

echo json_encode($getNomPro);