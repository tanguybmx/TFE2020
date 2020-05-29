<?php

include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$cote = htmlspecialchars($_POST['cote']);

$creationAvis = $db->callProcedure('creationAvis',[$idRdv,$cote]);

