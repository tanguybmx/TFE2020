
var a = 1;
function checkInscriptionClient() {
    a = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        a = 0;
    }

    if ($('#nom').val() == '') {
        $('#nom').attr('placeholder', 'Nom requis');
        a = 0;
    }

    if ($('#prenom').val() == '') {
        $('#prenom').attr('placeholder', 'Prenom requis');
        a = 0;
    }

    if ($('#email').val() == '') {
        $('#email').attr('placeholder', 'Email requis');
        a = 0;
    }

    if ($('#adresse').val() == '') {
        $('#adresse').attr('placeholder', 'Adresse requise');
        a = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        a = 0;
    }


    if ($('#re_mdp').val() == '') {
        $('#re_mdp').attr('placeholder', 'Veuillez entrer une nouvelle fois votre mot de passe');
        a = 0;
    }

    if ($('#re_mdp').val() !== $('#mdp').val()) {
        $('#re_mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        $('#mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        a = 0;
    }
    if (a === 1) {
        let objectForm = { 'username': $('#username').val(), 'nom': $('#nom').val(), 'prenom': $('#prenom').val(), 'email': $('#email').val(), 'adresse': $('#adresse').val(), 'mdp': $('#mdp').val() };
        console.log(objectForm);
        $.ajax({
            url: "phpController/inscriptionClient.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                console.log(response);
                if (response === '"Identifiant ou email deja utilise"') {
                    console.log("Identifiant ou email déjà utilisé");
                }
                else {
                    console.log('inscr OK');
                }
            }
        });
    }

}

function checkInscriptionProfessionnel() {
    a = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        a = 0;
    }

    if ($('#nom').val() == '') {
        $('#nom').attr('placeholder', 'Nom requis');
        a = 0;
    }

    if ($('#prenom').val() == '') {
        $('#prenom').attr('placeholder', 'Prenom requis');
        a = 0;
    }

    if ($('#email').val() == '') {
        $('#email').attr('placeholder', 'Email requis');
        a = 0;
    }

    if ($('#adresse').val() == '') {
        $('#adresse').attr('placeholder', 'Adresse requise');
        a = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        a = 0;
    }


    if ($('#re_mdp').val() == '') {
        $('#re_mdp').attr('placeholder', 'Veuillez entrer une nouvelle fois votre mot de passe');
        a = 0;
    }

    if ($('#re_mdp').val() !== $('#mdp').val()) {
        $('#re_mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        $('#mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        a = 0;
    }
    if (a === 1) {
        let objectForm = { 'username': $('#username').val(), 'mdp': $('#mdp').val(), 'nom': $('#nom').val(), 'prenom': $('#prenom').val(), 'email': $('#email').val(), 'adresse': $('#adresse').val() };
        console.log(objectForm);
        $.ajax({
            url: "phpController/inscriptionPro.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                console.log(response);
                if (response === '"Identifiant ou email deja utilise"') {
                    console.log("Identifiant ou email déjà utilisé");
                }
                else {
                    console.log('inscr OK');
                }
            }
        });
    }

}

function checkConnexion() {
    a = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        a = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        a = 0;
    }
    if (a === 1) {
        let objectForm = { 'login': $('#username').val(), 'password': $('#mdp').val()};
        console.log(objectForm);
        $.ajax({
            url: "phpController/connexion.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                console.log(response);
                if (response === '"erreurConnexion"') {
                    console.log("erreurConnexion");
                }
                else {
                    console.log('connexion OK');
                }
            }
        });
    }
}