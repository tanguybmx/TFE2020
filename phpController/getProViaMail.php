<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$mailPro = htmlspecialchars($_POST['mailPro']);

$getProId = $db->callProcedure('getProViaMail',[$mailPro]);

echo ($getProId[0]['idPro']);