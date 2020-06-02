<?php
//ce controlleur permet d'appeler la procédure de la db de création d'un rdv entre un client et un pro
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$pro = htmlspecialchars($_POST['idPro']);
$cli = htmlspecialchars($_POST['idCli']);
$dateRdv = htmlspecialchars($_POST['dateRdv']);

    $creationRdv = $db->callProcedure('creationRdv',[$pro,$cli,$dateRdv]);
    echo json_encode($creationRdv);