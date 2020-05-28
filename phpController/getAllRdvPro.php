<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getAllRdvPro = $db->callProcedure('getAllRdvPro',[$idPro]);

echo json_encode($getAllRdvPro);