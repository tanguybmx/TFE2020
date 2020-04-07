
var idUser;
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
                    connexion();
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
                    connexion();
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
                    window.location="http://localhost/TFE2020/";
                }
            }
        });
    }
}

var nServices=1;

function ajoutChampService(){
    nServices++;
    var btn = '<button id="btnAjoutService" onclick="ajoutChampService();">Ajouter un service</button>';
    $('#btnAjoutService').remove();
    $('#formItemServices').append('<br><br><input type="text" name="servicesEnt'+ nServices +'" id="servicesEnt'+ nServices +'"/>');
    $('#formItemServices').append(btn);
} 

function creationEnt(){
    a = 1;
    event.preventDefault();
    if ($('#nomEnt').val() == '') {
        $('#nomEnt').attr('placeholder', 'Identifiant requis');
        a = 0;
    }

    if ($('#adresseEnt').val() == '') {
        $('#adresseEnt').attr('placeholder', 'Adresse requise');
        a = 0;
    }

    if ($('#descEnt').val() == '') {
        $('#descEnt').attr('placeholder', 'Description requise');
        a = 0;
    }

    if ($('#servicesEnt1').val() == '') {
        alert('Minimum un service requis');
        a = 0;
    }

    if ($('#nTvaEnt').val() == '') {
        $('#nTvaEnt').attr('placeholder', 'Numéro de TVA requis');
        a = 0;
    }

    if ($('#secteurEnt').val() == 'default') {
        alert("Il faut sélectionner un secteur différent de default");
        a = 0;
    }

    if (a === 1) {
        var servicesEnt = '';
        var objectForm;
        if(nServices == 1){
            objectForm = { 'nomEnt': $('#nomEnt').val(), 'adresseEnt': $('#adresseEnt').val(), 'nTvaEnt': $('#nTvaEnt').val(), 'secteurEnt': parseInt($('#secteurEnt').val()), 'idAdmin': idUser ,'descEnt': $('#descEnt').val(), 'servicesEnt': $('#servicesEnt1').val()};
        }
        else{
            servicesEnt += $('#servicesEnt1').val();
            for (let i = 2; i<= nServices; i++){
                servicesEnt += ','+$('#servicesEnt'+i).val();
                console.log(i);

            }
            objectForm = { 'nomEnt': $('#nomEnt').val(), 'adresseEnt': $('#adresseEnt').val(), 'nTvaEnt': $('#nTvaEnt').val(), 'secteurEnt': parseInt($('#secteurEnt').val()), 'idAdmin': idUser ,'descEnt': $('#descEnt').val(), 'servicesEnt': servicesEnt};
            
        }
        console.log(objectForm);
        $.ajax({
            url: "phpController/creationEnt.php",
            type: "POST",
            data: objectForm,
            datatype: "json",
            success: function (response) {
                if (response === '"Entreprise existante sur la plateforme"') {
                    console.log("Entreprise existante sur la plateforme");
                    $('#titreCreaEnt').load('<h2>Le numéro de TVA spécifié existe déjà sur la plateforme</h2>');
                }
                else {
                    console.log('connexion OK');
                    entreprise();

                }
            }
        });
    }
}

//secteur
var secteurs ;
function getSecteur(){
    $.ajax({
        async: "false",
        url: "phpController/getSecteur.php",
        type: "POST",
        success: function (response) {

            secteurs = JSON.parse(response);
            var long = secteurs.length;
            for (var i = 0; i<long; i++){
                $('#secteurEnt').append('<option value='+ secteurs[i]['idSecteur'] +'>'+ secteurs[i]['nom'] +'</option>');
            }
            

                       
            }
        });
}
