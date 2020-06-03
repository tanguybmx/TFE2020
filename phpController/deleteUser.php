<?php
session_start();
//ce controlleur permet d'appeler la procédure de la db de création de conversation entre un client et un pro
include_once "../db/dbAccess.php";

$db = new dbAccess();

$id = $_SESSION['userId'];

if($_SESSION['typeCompte']=='client'){
    $deleteClient = $db->callProcedure('deleteClient',[$id]);
    session_destroy();
}

else if($_SESSION['typeCompte']=='professionnel'){
    $deletePro = $db->callProcedure('deletePro',[$id]);
    session_destroy();
}

