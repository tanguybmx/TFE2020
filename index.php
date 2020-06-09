
<?php
session_start();
include 'phpController/getNbPros.php';
include 'phpController/countRdvFini.php';
include 'phpController/getClientSatisfait.php';

?>
<script>
var compteType; <?php if(isset($_SESSION['typeCompte'])){echo "compteType='".$_SESSION['typeCompte']."'";};?>;
var userId; <?php if(isset($_SESSION['userId'])){echo "userId='".$_SESSION['userId']."'";};?>;
var adresse;<?php if(isset($_SESSION['adresse'])){echo "adresse='".$_SESSION['adresse']."'";};?>;
var nom; <?php if(isset($_SESSION['nom'])){echo "nom='".$_SESSION['nom']."'";};?>;
var prenom;<?php if(isset($_SESSION['prenom'])){echo "prenom='".$_SESSION['prenom']."'";};?>;
const utilisateur ={
  user: userId,
  type: compteType,
  adress:adresse,
  nomPrenom: nom+' '+prenom
};

Object.freeze(utilisateur);
</script>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Go For It</title>
	<link rel="icon" href="img/logo/logo_transparent.png" type="image/png">

  <link rel="stylesheet" href="vendors/bootstrap/bootstrap.min.css">
  <link rel="stylesheet" href="vendors/fontawesome/css/all.min.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/mycss.css">
</head>
<body>
  <!--================ Header Top Area Start =================-->
  <!--<section class="header-top d-none d-sm-block">
    <div class="container">
      <div class="d-sm-flex justify-content-between">
        <ul class="header-top__info mb-2 mb-sm-0">
          <li><a href="tel:+01432152323"><span class="align-middle"><i class="ti-mobile"></i></span>+014 321 523 23</a></li>
          <li><a href="mailto:info@example.com"><span class="align-middle"><i class="ti-email"></i></span>Info@example.com</a></li>
        </ul>
        <ul class="header-top__social">
          <li><a href="#"><i class="ti-facebook"></i></a></li>
          <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
          <li><a href="#"><i class="ti-instagram"></i></a></li>
          <li><a href="#"><i class="ti-skype"></i></a></li>
        </ul>
      </div>
    </div>
  </section>-->
  <!--================ Header Top Area end =================-->

  <!--================ Header Menu Area start =================-->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container box_1620" id="menuCont">
          <a class="navbar-brand logo_h" href="index.html"><img src="img/logo/logo_transparent.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>

          <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav justify-content-end">
              <li class="nav-item active" id="navAccueil"><a class="nav-link" href="#" onclick="accueil()">Accueil</a></li> 
              <li class="nav-item" id="navAbout"><a class="nav-link" href="#" onclick="about()">Qui sommes-nous ?</a></li> 
              <?php if (!isset($_SESSION['typeCompte']) || $_SESSION['typeCompte'] == 'client'){?>
                <li class="nav-item" id="navServices"><a class="nav-link" href="#" onclick="services()">Annonces</a>
              <?php }?>
              <?php if (isset($_SESSION['typeCompte'])){?>
                <li class="nav-item" id="navProfil"><a class="nav-link" href="#" onclick="profil()">Profil</a></li>
              <?php }?>
              <?php if (isset($_SESSION['typeCompte']) && $_SESSION['typeCompte'] == 'professionnel'){?>
                <li class="nav-item" id="navEntreprise"><a class="nav-link" href="#" onclick="entreprise()">Mon annonce</a></li>
              <?php }?>
              <?php if (isset($_SESSION['typeCompte'])){?>
                <li class="nav-item" id="navPriseDeContact"><a class="nav-link" href="#" onclick="priseDeContact()">Prise de contact</a></li>
                <li class="nav-item" id="navGestionRdv"><a class="nav-link" href="#" onclick="gestionRdv()">Rendez-vous</a></li>
              <?php }?>
              <li class="nav-item" id="navContact"><a class="nav-link" href="#" onclick="contact()">Contact</a></li>
              <li class="nav-item" id="navConnexion"><a class="nav-link" href="" onclick="connexion()">Se Connecter</a></li>
            </ul>
          </div> 
        </div>
      </nav>
    </div>
  </header>
  <!--================Header Menu Area =================-->
<!--==================Content of the page start===============-->
<div id="content">
  <!--================ Hero Banner start =================-->      
  <section class="hero-banner">
    <div class="hero-banner__content text-center">
      <h3>Nous disposons des professionnels qu'il vous faut !</h3>
      <a class="button" href="#" onclick="services()">Chercher un professionnel</a>
    </div>
  </section>
  <!--================ Hero Banner end =================-->


  <!--================ Work Statics section start =================-->
  <section>
    <div class="container static__single-position">
      <div class="row">
        <div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
          <div class="card static__single">
            <h3 id="nbPro"><?=$_SESSION['totalEnt']?></h3>
            <h4>Professionnels inscrits</h4>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
          <div class="card static__single">
            <h3 id="nbRdv"><?=$_SESSION['countRdvFini']?></h3>
            <h4>Rendez-vous réalisés</h4>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
          <div class="card static__single">
            <h3><?=$_SESSION['nbCliSatisfait']?></h3>
            <h4>Clients satisfaits</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ Work Statics section end =================-->        
 <!--================ About section start =================-->
 <section class="d-lg-flex align-items-center section-margin--large">
    <div class="container">
      <div class="about__content">
        <h3>Nous comprennons votre besoin</h3>
        <p>Le principal problème lors de la recherche de service aujourd'hui, est la fiabilité du professionnel offrant ce service.</p>
        <p>Le but de la plateforme est de vous fournir un large choix de professionnels compétents et fiables grâce à un système d'évaluations authentifié.</p>
      </div>
    </div>
  </section>
  <!--================ About section end =================-->
</div>
<div id="cookieConsent">
    <div id="closeCookieConsent">x</div>
    Toutes les données enregistrées sur la plateforme sont uniquement utilisées dans le cadre de l'utilisation de celle-ci. <a class="cookieConsentOK">OK</a>
</div>
<!--==================End Content of the page===============--> 
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <p class="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">

<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          <div class="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
          </div>
        </div>
      </div>
    </div>
  <!-- ================ End footer Area ================= -->

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/main.js"></script>
  <script src="js/loginMain.js"></script>
  <script src="js/controller.js"></script>
  <script src="js/layout.js"></script>
  <script>
  <?php

if(!isset($_SESSION['pageActuelle'])){
  echo("$('#content').load('inc/accueil.php');"); 
}
else{
  echo("$('#content').load('inc/$_SESSION[pageActuelle]');"); 
}
if(isset($_SESSION['nom'])){
  echo("estCo();");
}


?>

  removeClassActive('navAccueil');
  $(document).ready(function(){   
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    }); 
}); 
  </script>
</body>
</html>
