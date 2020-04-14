<?php
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();

$getNbPros = $db->callProcedure('getEnt');