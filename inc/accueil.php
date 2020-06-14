<?php
session_start();
$_SESSION['pageActuelle']="accueil.php";
?>

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
            <h3><?= $_SESSION['totalEnt'];?></h3>
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


<script>
  removeClassActive('navAccueil');
</script>