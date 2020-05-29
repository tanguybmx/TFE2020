<?php
session_start();
$_SESSION['pageActuelle']="gestionRdv.php";
?>
<div class="container">
  <h2>Vos rendez-vous</h2>
  <div id="tableRdv">
    <table class="table">
    <thead>
        <tr>
          <th></th>
          <th>Date</th>
          <th>Avec qui</th>
          <?php if($_SESSION['typeCompte'] == "client"){ echo("<th>Validation</th>");}?>
          <th>Annulation</th>
          <th>Changement de date</th>
          <?php if($_SESSION['typeCompte']== "professionnel"){ echo "<th>Finalisation</th>";} ?>
          <th>Statut</th>
          <?php if($_SESSION['typeCompte'] == "client"){ echo("<th>Avis</th>");}?>
        </tr>
      </thead>
    <tbody id="listeRdv">
    </tbody>
  </table>
</div>
<script>
    afficheRdv();
</script>