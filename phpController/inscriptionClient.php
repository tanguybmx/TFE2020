<?php

include "../db/dbAccess.php";

$db = new dbAccess();
$username = htmlspecialchars($_POST['username']);
$name = htmlspecialchars($_POST['nom']);
$firstname = htmlspecialchars($_POST['prenom']);
$email = htmlspecialchars($_POST['email']);
$adress = htmlspecialchars($_POST['adresse']);
$region = htmlspecialchars($_POST['regionCli']);
$password = hash('sha256',htmlspecialchars($_POST['mdp']));



$checkInscription = $db->callProcedure('checkInscriptionClient',[$username,$email]);

if(!empty($checkInscription)){
    echo json_encode("Identifiant ou email deja utilise");
} else{
    $envoi = $db->callProcedure('creationClient',[$username,$password,$name,$firstname,$adress,$email,$region]);
}