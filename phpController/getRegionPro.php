<?php
session_start();
include_once "../db/dbAccess.php";

$db = new dbAccess();


$getRegion = $db->callProcedure('getRegionPro',[]);

echo json_encode($getRegion);