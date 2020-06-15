<?php
session_start();
$_SESSION['pageActuelle']="preinscription.php";
?>

    <div class="container" id="choixTypeUser">
        <div class="row">
        <div class="col-lg-6" id="client">
            Vous êtes à la recherche de services ? <br>
            Vous souhaitez vous inscrire en temps <br> 
            que <b>client</b> alors cliqué <br>
            <a href="#" onclick="inscritptionClient()"> ICI </a>
        </div>
        <div class="col-lg-6" id="professionnel">
            Vous êtes fournisseurs de services ? <br>
            Vous souhaitez vous inscrire en <br>
            temps que <b>professionnel</b> alors cliqué <br>
            <a href="#" onclick="inscritptionPro()"> ICI </a>
        </div>
        </div>

    </div>

<script>
    removeClassActive('navConnexion');
</script>