<?php
session_start();
$_SESSION['pageActuelle']="entreprise.php";
?>
<script>
    <?php 
    if($_SESSION['idEnt'] != NULL){?>
        $('#content').load('inc/entrepriseDetail.php');
    <?php
    }
    else{?>
        $('#content').load('inc/creationEntreprise.php');
    <?php
    }
    ?>
</script>




