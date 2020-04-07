<?php
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();
$mdp = hash('sha256',$_POST['password']);
$login = $_POST['login'];

$connexion = $db->callProcedure('connexionClient',[$login,$mdp]);
$connexion2 = $db->callProcedure('connexionPro',[$login,$mdp]);

if(empty($connexion) && empty($connexion2)){
    echo json_encode("erreurConnexion");
} 

else if(empty($connexion2)){
    $_SESSION['pseudo'] = $connexion[0]{'pseudo'};
    $_SESSION['nom'] = $connexion[0]{'nom'};
    $_SESSION['prenom'] = $connexion[0]{'prenom'};
    $_SESSION['adresse'] = $connexion[0]{'adresse'};
    $_SESSION['mail'] = $connexion[0]{'mail'};
    $_SESSION['typeCompte']='client';
    $_SESSION['pageActuelle']="accueil.php";
}

else if(empty($connexion)){
    $_SESSION['pseudo'] = $connexion2[0]{'pseudo'};
    $_SESSION['nom'] = $connexion2[0]{'nom'};
    $_SESSION['prenom'] = $connexion2[0]{'prenom'};
    $_SESSION['mail'] = $connexion2[0]{'mail'};
    $_SESSION['idEnt'] = $connexion2[0]{'idEntreprise'};
    $_SESSION['adresse'] = $connexion2[0]{'adresse'};
    $_SESSION['statut'] = $connexion2[0]{'statut'};
    $_SESSION['typeCompte'] = 'professionnel';
    $_SESSION['pageActuelle']="accueil.php";
}

