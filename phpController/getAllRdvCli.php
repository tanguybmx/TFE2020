<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idCli = htmlspecialchars($_POST['idCli']);

$getAllRdvCli = $db->callProcedure('getAllRdvCli',[$idCli]);

echo json_encode($getAllRdvCli);