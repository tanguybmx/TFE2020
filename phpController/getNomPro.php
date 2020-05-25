<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getNomPro = $db->callProcedure('getNomPro',[$idPro]);

echo json_encode($getNomPro);