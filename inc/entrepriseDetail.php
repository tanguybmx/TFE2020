<?php
session_start();
$_SESSION['pageActuelle']="entreprise.php";
?>

<section class='d-lg-flex align-items-center section-margin--large'>
        <div class='container'>
                    <h1>Entreprise</h1>
                    <div id='contentUl' style='overflow-x:auto;'>
                    <ul id='ulEntreprise'>
                        <li class='titreEnt'>Nom</li>
                        <p id='nomEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Adresse</li>
                        <p id='adresseEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Description</li>
                        <p id='descriptionEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Services</li>
                        <p id='servicesEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Numéro de TVA</li>
                        <p id='nTvaEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Secteur</li>
                        <p id='secteurEnt' class='pEnt'>
                            test
                        </p>
                        <li class='titreEnt'>Propriétaire</li>
                        <p id='propriEnt' class='pEnt'>
                            test
                        </p>
                    </ul>
                    </div>
        </div>
    </section>
    <script>
    removeClassActive('navEntreprise');

    </script>