<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();

$idRdv = htmlspecialchars($_POST['idRdv']);

$getRdv = $db->callProcedure('getRdv',[$idRdv]);

echo json_encode($getRdv);