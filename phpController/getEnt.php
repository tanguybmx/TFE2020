<?php
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();

$getEnt = $db->callProcedure('getEnt');

echo json_encode($getEnt);