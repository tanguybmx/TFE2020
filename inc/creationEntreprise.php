<?php
session_start();
$_SESSION['pageActuelle']="creationEntreprise.php";
?>

<link rel="stylesheet" href="css/loginStyle.css">
<div class="container">
                <div id="titreCreaEnt">
                    <h2>Merci de créer votre entreprise </h2>
                    <p>Afin de pouvoir être visible sur le site</p>
                    <span id="erreurCrea"> </span>
                </div>
    <div class="row">
        <div class="col-sm">
        <figure><img class=".img-fluid. max-width: 50%" id="imCreaEnt" src="img/creationEnt.jpg" alt="It enterprise"></figure>
        </div>
        <div class="col-sm">
            <form method="POST" id="formInscrEnt">
                <div class="form-group">
                    <label for="nomEnt">Nom de l'entreprise:</label>
                    <input type="text" name="nomEnt" id="nomEnt"/>
                </div>
                <div class="form-group">
                    <label for="adresseEnt">Adresse de l'entreprise:</label>
                    <input type="text" name="adresseEnt" id="adresseEnt"/>
                </div>
                <div class="form-group">
                    <label for="descEnt">Description de l'entreprise:</label>
                    <input type="text" name="descEnt" id="descEnt"/>
                </div>
                <div class="form-group" id="formItemServices">
                    <label for="servicesEnt1">Services de l'entreprise:</label>
                    <input type="servicesEnt1" name="servicesEnt1" id="servicesEnt1"/>
                    <button id='btnAjoutService'onclick="ajoutChampService();">Ajouter un service</button>
                </div>
                <div class="form-group">
                    <label for="nTvaEnt">Le numéro de TVA de l'entreprise:</label>
                    <input type="text" name="nTvaEnt" id="nTvaEnt"/>
                </div>

                <div class="form-group">
                    <label for="secteurEnt">Le secteur de votre entreprise:</label>
                    <select id="secteurEnt" name="secteurEnt">
                        <option value="default">default</option>
                    </select>
                </div>
                <button id='btnCreeEnt'onclick="creationEnt();">Créer</button>          
            </form>
        </div>
    </div>
</div>

<script>
    removeClassActive('navEntreprise');
    getSecteur();
</script>