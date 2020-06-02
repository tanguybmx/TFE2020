<?php
//ce controlleur permet d'appeler la procédure de la db de créatiion d'un professionnel
include "../db/dbAccess.php";

$db = new dbAccess();
$username = htmlspecialchars($_POST['username']);
$name = htmlspecialchars($_POST['nom']);
$firstname = htmlspecialchars($_POST['prenom']);
$email = htmlspecialchars($_POST['email']);
$adress = htmlspecialchars($_POST['adresse']);
$password = hash('sha256',htmlspecialchars($_POST['mdp']));


$checkInscription = $db->callProcedure('checkInscriptionProfessionnel',[$username,$email]);

if(!empty($checkInscription)){
    echo json_encode("Identifiant ou email deja utilise");
} else{
    $envoi = $db->callProcedure('creationProfessionnel',[$username,$password,$name,$firstname,$adress,$email]);
}