<?php
//ce controlleur permet d'appeler la procédure de la db de modification de statut de rdv (statut	0 => en attente 1=> validé 2 => refusé 3=> annulé 4=> Effectuée 5=> avis donné)
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$statut = htmlspecialchars($_POST['statutRdv']);

$modifStatutRdv = $db->callProcedure('modifStatutRdv',[$idRdv,$statut]);

echo json_encode($modifStatutRdv);