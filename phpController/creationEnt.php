<?php
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();
$nomEnt = $_POST['nomEnt'];
$adresseEnt = $_POST['adresseEnt'];
$nTvaEnt = $_POST['nTvaEnt'];
$secteurEnt = $_POST['secteurEnt'];
$idAdmin = $_SESSION['mail'];
$descEnt = $_POST['descEnt'];
$servicesEnt = $_POST['servicesEnt'];
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
    $creationEnt = $db->callProcedure('creationEntreprise',[$nomEnt,$adresseEnt, $nTvaEnt, $secteurEnt, $idAdmin, $descEnt, $servicesEnt]);
    echo (json_encode($creationEnt));
    $addIdEnt = $db->callProcedure('addIdEnt',[$idAdmin, $nTvaEnt]);
}