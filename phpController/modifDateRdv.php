<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$dateRdv = htmlspecialchars($_POST['dateRdv']);

$modifDateRdv = $db->callProcedure('modiDateRdv',[$idRdv,$dateRdv]);

echo json_encode($modifDateRdv);