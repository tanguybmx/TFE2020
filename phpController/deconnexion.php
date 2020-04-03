<?php
    session_start();
    if (isset($_SESSION['nom'])) {
        // Supression des variables de session et de la session
        $_SESSION = array();
        session_destroy();
        $_SESSION['pageActuelle']="accueil.php";
        header('Location: http://localhost/TFE2020/');
    }else{ // Dans le cas contraire on t'empêche d'accéder à cette page en te redirigeant vers la page que tu veux.
        return false;
    }
?>