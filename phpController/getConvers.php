<?php

include "../db/dbAccess.php";

$db = new dbAccess();

$user = $_SESSION['userId'];

$getConvers = $db->callProcedure('getConvers',[$user]);

if(empty($getConvers)){
    json_encode("Vous n'avez pas encore de prise de contact");
}

if(!empty($getConvers)){
    json_encode($getConvers);
}