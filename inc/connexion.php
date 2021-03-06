<?php
session_start();
$_SESSION['pageActuelle']="connexion.php";
?>
  <link rel="stylesheet" href="css/loginStyle.css">
    <section class="sign-in">
        <div class="containerlogin">
            <div class="signin-content">
                <div class="signin-form">
                    <h2 class="form-title">Connexion</h2>
                    <span id="erreurCo" style="display:none"><h4>L'identifiant ou le mot de passe n'est pas correct</h4></span>
                    <form method="POST" class="register-form" id="login-form" action="#">
                        <div class="form-group">
                            <label for="username"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="username" id="username" placeholder="Votre adresse email"/>
                        </div>
                        <div class="form-group">
                            <label for="mdp"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="mdp" id="mdp" placeholder="Votre mot de passe"/>
                        </div>
                        <a href="#" class="signup-image-link" onclick="preinscritption()">Créer un compte</a>
                        <div class="form-group form-button">
                            <input type="submit" name="signin" id="signin" class="form-submit" value="Connexion" onclick="checkConnexion()"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
<script>
    removeClassActive('navConnexion');
</script>