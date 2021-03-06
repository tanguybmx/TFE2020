<?php
//ce controlleur permet d'appeler la procédure de la db de création d'entreprise et créer les variables de sessions de l'utilisateur
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();
$nomEnt = htmlspecialchars($_POST['nomEnt']);
$adresseEnt = htmlspecialchars($_POST['adresseEnt']);
$regionEnt = htmlspecialchars($_POST['regionPro']);
$nTvaEnt = htmlspecialchars($_POST['nTvaEnt']);
$secteurEnt = htmlspecialchars($_POST['secteurEnt']);
$idAdmin = htmlspecialchars($_SESSION['mail']);
$descEnt = htmlspecialchars($_POST['descEnt']);
$servicesEnt = htmlspecialchars($_POST['servicesEnt']);
$_SESSION['idEnt'] = $nTvaEnt;
$_SESSION['nomEnt'] = $nomEnt;
$_SESSION['adresseEnt'] = $adresseEnt;
$_SESSION['nTvaEnt'] = $nTvaEnt;
$_SESSION['adminEnt'] = $idAdmin;
$_SESSION['sectEnt'] = $secteurEnt;
$_SESSION['descEnt'] = $descEnt;
$_SESSION['servicesEnt'] = $servicesEnt;

$checkEnt = $db->callProcedure('checkEnt',[$nTvaEnt]);

if(!empty($checkEnt)){
    echo json_encode("Entreprise existante sur la plateforme");
} else{
    $creationEnt = $db->callProcedure('creationEntreprise',[$nomEnt,$adresseEnt, $nTvaEnt, $secteurEnt, $idAdmin, $descEnt, $servicesEnt, $regionEnt]);
    echo (json_encode($creationEnt));
    $addIdEnt = $db->callProcedure('addIdEnt',[$idAdmin, $nTvaEnt]);
}