<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$pro = htmlspecialchars($_POST['idPro']);
$cli = htmlspecialchars($_POST['idCli']);
$dateRdv = htmlspecialchars($_POST['dateRdv']);

    $creationRdv = $db->callProcedure('creationRdv',[$pro,$cli,$dateRdv]);
    echo json_encode($creationRdv);