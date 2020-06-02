<?php
////ce controlleur permet de faire une requêtes http vers ec.europa.eu pour vérifier qu'un numéro de TVA existe
$nComplet= htmlspecialchars($_POST['nTva']);
$longueur = strlen($nComplet);
$country = substr($nComplet,0,2);
$vatnum = substr($nComplet,2,$longueur);

