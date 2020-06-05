<?php
session_start();
//ce controlleur permet d'appeler la procédure de la db de création de conversation entre un client et un pro
include_once "../db/dbAccess.php";

$db = new dbAccess();

$cli = $_SESSION['userId'];
$pro = htmlspecialchars($_POST['idPro']);

$creationConvers = $db->callProcedure('creationConvers',[$cli,$pro]);

$checkCreation = $db->callProcedure('checkSiDejaContact',[$cli,$pro]);
echo ($checkCreation[0]['idConvers']);
