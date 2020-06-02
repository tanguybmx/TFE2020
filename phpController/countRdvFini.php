<?php
//ce controlleur permet d'appeler la procédure de la base de données qui compte le nombre de rendez vous terminé
include_once "db/dbAccess.php";

$db = new dbAccess();

$countRdvFini = $db->callProcedure('countRdvFini');


$_SESSION['countRdvFini']= $countRdvFini[0]['nbRdv'];

