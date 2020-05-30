<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getRegion = $db->callProcedure('getRegionCli',[]);

echo json_encode($getRegion);