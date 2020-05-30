<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getInfoPro = $db->callProcedure('getInfoPro',[$idPro]);

echo json_encode($getInfoPro);