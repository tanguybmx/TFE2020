<?php
//ce controlleur permet d'appeler la procédure de la db de récupération de l'id d'un pro a partir de son mail
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$mailPro = htmlspecialchars($_POST['mailPro']);

$getProId = $db->callProcedure('getProViaMail',[$mailPro]);

echo ($getProId[0]['idPro']);