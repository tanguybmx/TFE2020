<?php
session_start();
$_SESSION['pageActuelle']="profil.php";
?>
  <link rel="stylesheet" href="css/loginStyle.css">
    <section class="d-lg-flex align-items-center section-margin--large">
        <div class="container">
                        <div class="main">
                            <section class="signup">
                                <div class="container">
                                    <div class="signup-content">
                                        <div class="signup-form">
                                            <h2 class="form-title">Profil</h2>
                                            <form method="post" class="register-form" id="register-form" action="#">
                                                <div class="form-group">
                                                    <label for="matricule">Identifiant</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="identifiant" id="identifiant" readonly value=<?php echo $_SESSION['pseudo']; ?>>
                                                </div>
                                                <div class="form-group">
                                                    <label for="nom">Nom</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="nom" id="nom" readonly value="<?php echo $_SESSION['nom'];  ?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="prenom">Prénom</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="prenom" id="prenom" readonly value="<?php echo $_SESSION['prenom'];  ?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="email"> Email</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="email" name="email" id="email" readonly value="<?php echo $_SESSION['mail'];  ?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="adresse">Adresse</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="adresse" id="adresse" readonly value="<?php echo $_SESSION['adresse'];  ?>">
                                                </div>
                                                <div class="form-group">
                                                    <label for="adresse">Type de compte</label>
                                                    <br>
                                                    <br>
                                                    <br>
                                                    <input type="text" name="type" id="type" readonly value="<?php echo $_SESSION['typeCompte'];  ?>">
                                                </div>
                                                <?php
                                                    if(!empty($_SESSION['idEnt'])){
                                                        ?>
                                                        <div class="form-group">
                                                            <label for="idEnt">Numéro de TVA de l'entreprise</label>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <input type="text" name="idEnt" id="idEnt" readonly value="<?php echo $_SESSION['idEnt'];  ?>">
                                                        </div>
                                                        <?php
                                                    }
                                                    if($_SESSION['typeCompte']=='professionnel'){?>
                                                        <div class="form-group">
                                                            <label for="nbAvis">Nombre d'avis reçu</label>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <input type="text" name="nbAvis" id="nbAvis" readonly value="<?php echo $_SESSION['nbAvis'];  ?>">
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="moyenne">Moyenne des avis</label>
                                                            <br>
                                                            <br>
                                                            <br>
                                                            <input type="text" name="moyenne" id="moyenne" readonly value="<?php echo round($_SESSION['moyenne'],1);  ?>">
                                                        </div>
                                                        <?php
                                                    }
                                                ?>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
            </div>
    </section>

<script>
    removeClassActive('navProfil');

<?php 
if (empty($_SESSION['mail'])){
    echo "$('#content').load('inc/connexion.php');";
}
?>
</script>