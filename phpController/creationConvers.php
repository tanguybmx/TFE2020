<?php

include "../db/dbAccess.php";

$db = new dbAccess();

$cli = htmlspecialchars($_POST['cli']);
$pro = htmlspecialchars($_POST['pro']);

$creationConvers = $db->callProcedure('creationConvers',[$client,$pro]);
json_encode($creationConvers);
