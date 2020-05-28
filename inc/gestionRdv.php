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
          <th>Changement de date</th>
          <th>Statut</th>
        </tr>
      </thead>
    <tbody id="listeRdv">
    </tbody>
  </table>
</div>
<script>
    afficheRdv();
</script>