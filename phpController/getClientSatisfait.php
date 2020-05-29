<?php
include_once "db/dbAccess.php";

$db = new dbAccess();

$getNbCliSatisfait = $db->callProcedure('getClientSatisfait');


$_SESSION['nbCliSatisfait']= $getNbCliSatisfait[0]['nbCli'];

