<?php
//ce controlleur permet l'appel à la procédure de la base de données qui vérifie si une conversation entre un client et un professionnel existe déjà, si cela est le cas elle renvois les informatiosn de cette conversation
include_once "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['idCli']);
$pro = htmlspecialchars($_POST['idPro']);

$checkSiDejaContact = $db->callProcedure('checkSiDejaContact',[$cli,$pro]);

if(empty($checkSiDejaContact)){
    echo json_encode("noConvers");
}

if(!empty($checkSiDejaContact)){
    echo (json_encode($checkSiDejaContact));
}
