<?php
include_once "db/dbAccess.php";
//ce controlleur permet d'appeler la procédure de la db qui récupère le nombre de client satisfait par les rendez-vous qu'ils ont pu avoir avec les professionels de la plateforme
$db = new dbAccess();

$getNbCliSatisfait = $db->callProcedure('getClientSatisfait');


$_SESSION['nbCliSatisfait']= $getNbCliSatisfait[0]['nbCli'];

