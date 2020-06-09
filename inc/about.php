<?php
session_start();
$_SESSION['pageActuelle']="about.php";
?>

    <section class="d-lg-flex align-items-center section-margin--large">
        <div class="container">
            <div class="about__content">
            <h1>Qui sommes-nous ?</h1> 
            <br><br>   
                <p>  
                    Cette plateforme a été réalisée dans le cadre d'un travail de fin d'étude par un élève de l'EPHEC Louvain-La-Neuve, Tanguy Alexandre. Elle a été conçue afin de pouvoir aider des professionnels dans le domaine de l'informatique à la recherche de nouvelle clientèle et 
                    aider les personnes à la recherche de professionnels compétents dans le domaine de l'informatique. 
                </p>
            </div>
        </div>
    </section>


<script>
    removeClassActive('navAbout');
</script>