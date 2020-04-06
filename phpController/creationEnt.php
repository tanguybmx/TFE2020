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

$checkEnt = $db->callProcedure('checkEnt',[$nTvaEnt]);

if(!empty($checkEnt)){
    echo json_encode("Entreprise existante sur la plateforme");
} else{
    $creationEnt = $db->callProcedure('creationEntreprise',[$nomEnt,$adresseEnt, $nTvaEnt, $secteurEnt, $idAdmin, $descEnt, $servicesEnt]);
    $addIdEnt = $db->callProcedure('addIdEnt',[$idAdmin, $nTvaEnt]);
}