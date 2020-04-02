<?php

include "../db/dbAccess.php";

$db = new dbAccess();
$username = $_POST['username'];
$name = $_POST['nom'];
$firstname = $_POST['prenom'];
$email = $_POST['email'];
$adress = $_POST['adresse'];
$password = hash('sha256',$_POST['mdp']);

echo json_encode($email);

$checkInscription = $db->callProcedure('checkInscriptionProfessionnel',[$username,$email]);

if(!empty($checkInscription)){
    echo json_encode("Identifiant ou email deja utilise");
} else{
    $envoi = $db->callProcedure('creationProfessionnel',[$username,$password,$name,$firstname,$adress,$email]);
}