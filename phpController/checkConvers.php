<?php

include "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['cli']);
$pro = htmlspecialchars($_POST['pro']);

$checkConvers = $db->callProcedure('checkConvers',[$cli,$pro]);

if(empty($checkConvers)){
    return $checkConvers;
}

if(!empty($checkConvers)){
    json_encode($checkConvers);
}