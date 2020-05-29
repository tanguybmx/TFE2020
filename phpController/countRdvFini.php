<?php
include_once "db/dbAccess.php";

$db = new dbAccess();

$countRdvFini = $db->callProcedure('countRdvFini');


$_SESSION['countRdvFini']= $countRdvFini[0]['nbRdv'];

