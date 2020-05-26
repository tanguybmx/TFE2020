<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$exp = $_SESSION['userId'];
$dest = htmlspecialchars($_POST['dest']);
$conv = htmlspecialchars($_POST['conv']);
$contenu = htmlspecialchars($_POST['msgContenu']);

    $creationMsg = $db->callProcedure('creationMsg',[$exp,$dest,$conv,$contenu]);
    echo json_encode($creationMsg);