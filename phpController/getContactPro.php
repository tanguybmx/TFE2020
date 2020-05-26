<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idConvers = htmlspecialchars($_POST['idConvers']);

$getContactCli = $db->callProcedure('getContactPro',[$idConvers]);

echo json_encode($getContactCli);