<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idCli = htmlspecialchars($_POST['idCli']);

$getNomCli = $db->callProcedure('getNomCli',[$idCli]);

echo json_encode($getNomCli);