<?php
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();

$getNbPros = $db->callProcedure('countPro');


$_SESSION['totalEnt']= $getNbPros[0]{'nbPros'};