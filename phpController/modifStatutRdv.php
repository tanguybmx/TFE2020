<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$statut = htmlspecialchars($_POST['statutRdv']);

$modifStatutRdv = $db->callProcedure('modifStatutRdv',[$idRdv,$statut]);

echo json_encode($modifStatutRdv);