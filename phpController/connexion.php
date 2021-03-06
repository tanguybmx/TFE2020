<?php
//ce controlleur permet de faire l'appel à la procédure qui vérifie que les identifiants sont correct et en plus attribué toute les variable de session à l'utilisateur 
session_start();
include "../db/dbAccess.php";

$db = new dbAccess();
$mdp = hash('sha256',htmlspecialchars($_POST['password']));
$login = htmlspecialchars($_POST['login']);

$connexion = $db->callProcedure('connexionClient',[$login,$mdp]);
$connexion2 = $db->callProcedure('connexionPro',[$login,$mdp]);

if(empty($connexion) && empty($connexion2)){
    echo json_encode("erreurConnexion");
} 

else if(empty($connexion2)){
    $_SESSION['userId'] = $connexion[0]['idCli'];
    $_SESSION['pseudo'] = $connexion[0]['pseudo'];
    $_SESSION['nom'] = $connexion[0]['nom'];
    $_SESSION['prenom'] = $connexion[0]['prenom'];
    $_SESSION['adresse'] = $connexion[0]['adresse'];
    $_SESSION['mail'] = $connexion[0]['mail'];
    $_SESSION['region'] =  $connexion[0]['idRegion'];
    $_SESSION['typeCompte']='client';
    $_SESSION['pageActuelle']="accueil.php";
}

else if(empty($connexion)){
    

    $_SESSION['userId'] = $connexion2[0]['idPro'];
    $_SESSION['pseudo'] = $connexion2[0]['pseudo'];
    $_SESSION['nom'] = $connexion2[0]['nom'];
    $_SESSION['prenom'] = $connexion2[0]['prenom'];
    $_SESSION['mail'] = $connexion2[0]['mail'];
    $_SESSION['idEnt'] = $connexion2[0]['idEntreprise'];
    $_SESSION['adresse'] = $connexion2[0]['adresse'];
    $_SESSION['statut'] = $connexion2[0]['statut'];
    $_SESSION['typeCompte'] = 'professionnel';
    $_SESSION['pageActuelle']="accueil.php";
    $getAvisPro = $db->callProcedure('getCotePro',[($_SESSION['userId'])]);
    $_SESSION['nbAvis'] = $getAvisPro[0]['nbAvis'];
    $_SESSION['moyenne'] = $getAvisPro[0]['moyenne'];
    if(!empty($connexion2[0]['idEntreprise'])){
        $connexion3 = $db->callProcedure('getHisEnt',[$_SESSION['idEnt']]);
        $_SESSION['nomEnt'] = $connexion3[0]['nom'];
        $_SESSION['adresseEnt'] = $connexion3[0]['adresse'];
        $_SESSION['nTvaEnt'] = $connexion3[0]['nTva'];
        $_SESSION['adminEnt'] = $connexion3[0]['idAdmin'];
        $_SESSION['sectEnt'] = $connexion3[0]['nomSect'];
        $_SESSION['descEnt'] = $connexion3[0]['description'];
        $_SESSION['servicesEnt'] = $connexion3[0]['services'];
        $_SESSION['region'] = $connexion3[0]['idRegion'];
    }
}

