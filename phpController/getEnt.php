<?php
include "../db/dbAccess.php";

$db = new dbAccess();

$region = 0;
if(isset($_SESSION['region'])){
$region = $_SESSION['region'];
}
$getEnt = json_encode($db->callProcedure('getEnt',[$region]));
