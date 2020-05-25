<?php
session_start();
$_SESSION['pageActuelle']="services.php";
include '../phpController/getEnt.php';
?>

<div class="container py-5" id="listeAteliers">

<!-- For demo purpose -->
<div class="row text-center mb-5">
  <div class="col-lg-7 mx-auto">
    <h1>Annonces</h1>
  </div>
</div>
<!-- End -->
<div id='listeAnnonces'>
</div>
<div class="row text-center mb-7">
  <div class="col-lg-1 mx-auto">
    <br>
    <div class="paginationn">

    </div>
  </div>
</div>
</div>
</div>
<script>
    //var maListe =   $liste ;
    //$(document).ready(services(maListe));

</script>
<script>
  var annonces = <?= $getEnt ?>;
removeClassActive('navServices');
affichageListeAnnonces(annonces);
</script>