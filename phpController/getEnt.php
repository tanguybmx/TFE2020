<?php
include "../db/dbAccess.php";

$db = new dbAccess();

$getEnt = json_encode($db->callProcedure('getEnt'));

