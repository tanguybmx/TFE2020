<?php
include "../db/dbAccess.php";

$db = new dbAccess();


$getSecteur = $db->callProcedure('getSecteur');

if(empty($getSecteur)){
    echo json_encode("Pas de secteur existant");
} else{
    echo json_encode($getSecteur);
}