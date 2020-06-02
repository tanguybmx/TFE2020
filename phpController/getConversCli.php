<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des conversations d'un client
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$user = $_SESSION['userId'];

$getConversCli = $db->callProcedure('getConversCli',[$user]);

if(empty($getConversCli)){
    echo json_encode("Vous n'avez pas encore de prise de contact");
}

if(!empty($getConversCli)){
    $long = sizeof($getConversCli);
    $tab;
    for($i=0; $i<$long; $i++){
        $tab[$i] = $getConversCli[$i]['idConvers'];
    }

    echo json_encode($tab);
}