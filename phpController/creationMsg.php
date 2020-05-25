<?php

include "../db/dbAccess.php";

$db = new dbAccess();

$exp = $_SESSION['userId'];
$dest = htmlspecialchars($_POST['dest']);
$conv = htmlspecialchars($_POST['conv']);
$contenu = htmlspecialchars($_POST['msgContenu']);
$date = date('Y-m-d H:i:s');


    $creationMsg = $db->callProcedure('creationMsg',[$exp,$dest,$conv,$contenu,$date]);
    json_encode($creationMsg);