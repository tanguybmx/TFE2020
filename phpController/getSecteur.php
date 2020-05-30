<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getSecteur = $db->callProcedure('getSecteur',[]);

echo json_encode($getSecteur);