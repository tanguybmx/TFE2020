<?php
//ce controlleur permet d'appeler la procédure de la db de récupération du nombre de professionnel inscrit sur la plateforme
include "db/dbAccess.php";

$db = new dbAccess();

$getNbPros = $db->callProcedure('countPro');


$_SESSION['totalEnt']= $getNbPros[0]['nbPros'];

