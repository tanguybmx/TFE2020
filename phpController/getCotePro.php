<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idPro = htmlspecialchars($_POST['idPro']);

$getCotePro = $db->callProcedure('getCotePro',[$idPro]);

echo json_encode($getCotePro);