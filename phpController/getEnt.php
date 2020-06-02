<?php
//ce controlleur permet d'appeler la procédure de la db de récupération des annonces en fonction de la région si celle-ci est définie donc si l'utilisateur est connecté
include "../db/dbAccess.php";

$db = new dbAccess();

$region = 0;
if(isset($_SESSION['region'])){
$region = $_SESSION['region'];
}
$getEnt = json_encode($db->callProcedure('getEnt',[$region]));
