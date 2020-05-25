<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getProEnt = $db->callProcedure('getProEnt',[$idPro]);

echo json_encode($getProEnt);