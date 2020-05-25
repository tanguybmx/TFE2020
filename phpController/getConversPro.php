<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$user = $_SESSION['userId'];

$getConversPro = $db->callProcedure('getConversPro',[$user]);

if(empty($getConversPro)){
    echo json_encode("Vous n'avez pas encore de prise de contact");
}

if(!empty($getConversPro)){
    $long = sizeof($getConversPro);
    $tab;
    for($i=0; $i<$long; $i++){
        $tab[$i] = $getConversPro[$i]['idConvers'];
    }

    echo json_encode($tab);
}