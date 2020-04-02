
<?php
session_start();
?>
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
  <link rel="stylesheet" href="vendors/themify-icons/themify-icons.css">
  <link rel="stylesheet" href="vendors/linericon/style.css">
  <link rel="stylesheet" href="vendors/owl-carousel/owl.theme.default.min.css">
  <link rel="stylesheet" href="vendors/owl-carousel/owl.carousel.min.css">
  <link rel="stylesheet" href="vendors/Magnific-Popup/magnific-popup.css">
 
  
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/mycss.css">
</head>
<body>
  <!--================ Header Top Area Start =================-->
  <section class="header-top d-none d-sm-block">
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
  </section>
  <!--================ Header Top Area end =================-->

  <!--================ Header Menu Area start =================-->
  <header class="header_area">
    <div class="main_menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container box_1620">
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
              <li class="nav-item" id="navServices"><a class="nav-link" href="#" onclick="services()">Services</a>
              <li class="nav-item" id="navProfil"><a class="nav-link" href="#" onclick="profil()">Profil</a></li>
              <li class="nav-item" id="navContact"><a class="nav-link" href="#" onclick="contact()">Contact</a></li>
              <li class="nav-item" id="navConnexion"><a class="nav-link" href="#" onclick="connexion()">Se Connecter</a></li>
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
            <h3>35</h3>
            <h4>Professionnels inscrits</h4>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
          <div class="card static__single">
            <h3>1526</h3>
            <h4>Projets réalisés</h4>
          </div>
        </div>
        <div class="col-md-6 col-xl-4 mb-4 mb-xl-0">
          <div class="card static__single">
            <h3>720</h3>
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
        <h3>We Properly Understand Your Purpose</h3>
        <p>Multiply replenish sea won't fishl own without dry. Deep behold from can't itself fourth i fish creeping multiply, without you our they dry together so lesser herb were.</p>
        <p>Every appear very fill. Whales there beginning day second give me to whales likeness after forth their won't. Don fruit let multiply secon brought can't darkness saying. Stars can't after given one dry he subdue very called fourth image own won't open meat moved megathe red yielding do not .</p>
        <a class="button mt-xl-3" href="#">Learn More</a>
      </div>
    </div>
  </section>
  <!--================ About section end =================-->
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

  <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/Magnific-Popup/jquery.magnific-popup.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="js/main.js"></script>
  <script src="js/loginMain.js"></script>
  <script src="js/layout.js"></script>
  <script src="js/controller.js"></script>
  <script>
  <?php

if(!isset($_SESSION['pageActuelle'])){
  echo("$('#content').load('inc/accueil.php');"); 
}
else{
  echo("$('#content').load('inc/$_SESSION[pageActuelle]');"); 
}
?>
  removeClassActive('navAccueil');
  </script>
</body>
</html>
