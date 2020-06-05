<?php
//ce controlleur permet d'appeler la procédure de la db de modification de statut de rdv (statut	0 => en attente 1=> validé 2 => refusé 3=> annulé 4=> Effectuée 5=> avis donné)
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);
$statut = htmlspecialchars($_POST['statutRdv']);

if($_SESSION['typeCompte']=="client"){
    $checkPossessionRdvCli = $db->callProcedure('checkPossessionRdvCli',[$_SESSION['userId'],$idRdv]);
    if(empty($checkPossessionRdvCli)){
        echo "Ce n'est pas votre rdv";
    }
    else{
        $modifStatutRdv = $db->callProcedure('modifStatutRdv',[$idRdv,$statut]);
        echo json_encode($modifStatutRdv);
    }
}
if($_SESSION['typeCompte']=="professionnel"){
    $checkPossessionRdvPro = $db->callProcedure('checkPossessionRdvPro',[$_SESSION['userId'],$idRdv]);
    if(empty($checkPossessionRdvPro)){
        echo "Ce n'est pas votre rdv";
    }
    else{
        $modifStatutRdv = $db->callProcedure('modifStatutRdv',[$idRdv,$statut]);
        echo json_encode($modifStatutRdv);
    }
}



