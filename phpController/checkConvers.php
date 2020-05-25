<?php

include_once "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['cli']);
$pro = htmlspecialchars($_POST['pro']);

$checkConvers = $db->callProcedure('checkConvers',[$cli,$pro]);

if(empty($checkConvers)){
    echo "noConvers";
}

if(!empty($checkConvers)){
    echo json_encode($checkConvers[0]['idConvers']);
}