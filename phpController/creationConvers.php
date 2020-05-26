<?php

include_once "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['idCli']);
$pro = htmlspecialchars($_POST['idPro']);

$creationConvers = $db->callProcedure('creationConvers',[$cli,$pro]);

$checkCreation = $db->callProcedure('checkSiDejaContact',[$cli,$pro]);
echo ($checkCreation[0]['idConvers']);
