<?php
session_start();
$_SESSION['pageActuelle']="inscriptionPro.php";
?>


<link rel="stylesheet" href="css/loginStyle.css">
    <section class="signup">
        <div class="containerlogin">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Inscription professionnel</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="username" id="username" placeholder="Votre identifiant" />
                        </div>
                        <div class="form-group">
                            <label for="nom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="nom" id="nom" placeholder="Votre nom" />
                        </div>
                        <div class="form-group">
                            <label for="prenom"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="prenom" id="prenom" placeholder="Votre prénom" />
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Votre email" />
                        </div>
                        <div class="form-group">
                            <label for="adresse"><i class="zmdi zmdi-email"></i></label>
                            <input type="text" name="adresse" id="adresse" placeholder="Votre adresse" />
                        </div>

                        <div class="form-group">
                            <label for="mdp"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="mdp" id="mdp" placeholder="Mot de passe" />
                        </div>
                        <div class="form-group">
                            <label for="re-mdp"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_mdp" id="re_mdp" placeholder="Retaper votre mot de passe" />
                        </div>
                        <a href="#" class="signup-image-link" onclick="connexion()">Je suis déjà membre</a>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="S'inscrire" onclick="checkInscriptionProfessionnel()"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
<script>
    removeClassActive('navConnexion');
</script>