<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$user = $_SESSION['userId'];

$getConvers = $db->callProcedure('getConvers',[$user]);

if(empty($getConvers)){
    echo json_encode("Vous n'avez pas encore de prise de contact");
}

if(!empty($getConvers)){
    $long = sizeof($getConvers);
    $tab;
    for($i=0; $i<$long; $i++){
        $tab[$i] = $getConvers[$i]['idConvers'];
    }

    echo json_encode($tab);
}