<?php
session_start();
$_SESSION['pageActuelle']="gestionRdv.php";
?>
<div class="container">
  <h2>Vos rendez-vous</h2>
  <table class="table">
  <thead>
      <tr>
        <th></th>
        <th>Date</th>
        <th>Avec qui</th>
        <th>Validation</th>
        <th>Changement de date</th>
        <th>Statut</th>
      </tr>
    </thead>
  <tbody id="listeRdv">
  </tbody>
</table>

<script>
    afficheRdv();
</script>