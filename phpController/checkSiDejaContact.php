<?php

include_once "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['idCli']);
$pro = htmlspecialchars($_POST['idPro']);

$checkSiDejaContact = $db->callProcedure('checkSiDejaContact',[$cli,$pro]);

if(empty($checkSiDejaContact)){
    echo "noConvers";
}

if(!empty($checkSiDejaContact)){
    echo ($checkSiDejaContact[0]['idConvers']);
}