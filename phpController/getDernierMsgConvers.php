<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$convers = htmlspecialchars($_POST['idConvers']);

$getDernierMsgConvers = $db->callProcedure('getDernierMsgConvers',[$convers]);

echo json_encode($getDernierMsgConvers);