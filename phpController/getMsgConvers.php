<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$convers = htmlspecialchars($_POST['idConvers']);

$getMsgConvers = $db->callProcedure('getMsgConvers',[$convers]);

echo json_encode($getMsgConvers);