<?php
session_start();
$_SESSION['pageActuelle']="entreprise.php";
?>
  <link rel="stylesheet" href="css/loginStyle.css">
<section class="d-lg-flex align-items-center section-margin--large">
        <div class="container">
                        <div class="main">
                            <section class="signup">
                                <div class="container">
                                    <div class="signup-content">
                                        <div class="signup-form">
                                            <h2 class="form-title">Entreprise</h2>
                                            <form method="post" class="register-form" id="register-form" action="#">
                                                <div class="form-group">
                                                    <label for="nomEnt">Nom</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="nomEnt" id="nomEnt" readonly value="<?php echo $_SESSION['nomEnt']?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="adresse">Adresse</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="adresse" id="adresse" readonly value="<?php echo $_SESSION['adresseEnt']?>">
                                                </div>
                                                <div class="form-group">
                                                            <label for="idEnt">Numéro de TVA</label>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <input type="text" name="idEnt" id="idEnt" readonly value="<?php echo $_SESSION['nTvaEnt']?>">
                                                        </div>
                                                <div class="form-group">
                                                    <label for="adminEnt">Administrateur</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="adminEnt" id="adminEnt" readonly value="<?php echo $_SESSION['adminEnt']?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="secteurEnt">Secteur</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="secteurEnt" id="secteurEnt" readonly value="<?php echo $_SESSION['sectEnt']?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="descEnt">Description</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="descEnt" id="descEnt" readonly value="<?php echo $_SESSION['descEnt']?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="servicesEnt">Services</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="servicesEnt" name="servicesEnt" id="servicesEnt" readonly value="<?php echo $_SESSION['servicesEnt']?>">
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
            </div>
    </section>
    <script>
    removeClassActive('navEntreprise');

    </script>