
var idUser;
function checkInscriptionClient() {
    let gestionErreur = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        gestionErreur = 0;
    }

    if ($('#nom').val() == '') {
        $('#nom').attr('placeholder', 'Nom requis');
        gestionErreur = 0;
    }

    if ($('#prenom').val() == '') {
        $('#prenom').attr('placeholder', 'Prenom requis');
        gestionErreur = 0;
    }

    if ($('#email').val() == '') {
        $('#email').attr('placeholder', 'Email requis');
        gestionErreur = 0;
    }

    if ($('#adresse').val() == '') {
        $('#adresse').attr('placeholder', 'Adresse requise');
        gestionErreur = 0;
    }

    if ($('#regionCli').val() == '') {
        gestionErreur = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        gestionErreur = 0;
    }


    if ($('#re_mdp').val() == '') {
        $('#re_mdp').attr('placeholder', 'Veuillez entrer une nouvelle fois votre mot de passe');
        gestionErreur = 0;
    }

    if ($('#re_mdp').val() !== $('#mdp').val()) {
        $('#re_mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        $('#mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        gestionErreur = 0;
    }
    if (gestionErreur === 1) {
        let objectForm = { 'username': $('#username').val(), 'nom': $('#nom').val(), 'prenom': $('#prenom').val(), 'email': $('#email').val(), 'adresse': $('#adresse').val(), 'mdp': $('#mdp').val(), 'regionCli': $('#regionCli').val()};
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
    let gestionErreur = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        gestionErreur = 0;
    }

    if ($('#nom').val() == '') {
        $('#nom').attr('placeholder', 'Nom requis');
        gestionErreur = 0;
    }

    if ($('#prenom').val() == '') {
        $('#prenom').attr('placeholder', 'Prenom requis');
        gestionErreur = 0;
    }

    if ($('#email').val() == '') {
        $('#email').attr('placeholder', 'Email requis');
        gestionErreur = 0;
    }

    if ($('#adresse').val() == '') {
        $('#adresse').attr('placeholder', 'Adresse requise');
        gestionErreur = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        gestionErreur = 0;
    }


    if ($('#re_mdp').val() == '') {
        $('#re_mdp').attr('placeholder', 'Veuillez entrer une nouvelle fois votre mot de passe');
        gestionErreur = 0;
    }

    if ($('#re_mdp').val() !== $('#mdp').val()) {
        $('#re_mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        $('#mdp').attr('placeholder', 'Les mots de passe ne sont pas identique');
        gestionErreur = 0;
    }
    if (gestionErreur === 1) {
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
    let gestionErreur = 1;
    event.preventDefault();
    if ($('#username').val() == '') {
        $('#username').attr('placeholder', 'Identifiant requis');
        gestionErreur = 0;
    }

    if ($('#mdp').val() == '') {
        $('#mdp').attr('placeholder', 'Mot de passe requis');
        gestionErreur = 0;
    }
    if (gestionErreur === 1) {
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
    let gestionErreur = 1;
    event.preventDefault();
    if ($('#nomEnt').val() == '') {
        $('#nomEnt').attr('placeholder', 'Identifiant requis');
        gestionErreur = 0;
    }

    if ($('#adresseEnt').val() == '') {
        $('#adresseEnt').attr('placeholder', 'Adresse requise');
        gestionErreur = 0;
    }

    if ($('#descEnt').val() == '') {
        $('#descEnt').attr('placeholder', 'Description requise');
        gestionErreur = 0;
    }

    if ($('#servicesEnt1').val() == '') {
        alert('Minimum un service requis');
        gestionErreur = 0;
    }

    if ($('#nTvaEnt').val() == '') {
        $('#nTvaEnt').attr('placeholder', 'Numéro de TVA requis');
        gestionErreur = 0;
    }

    if ($('#secteurEnt').val() == 'default') {
        alert("Il faut sélectionner un secteur différent de default");
        gestionErreur = 0;
    }

    if (gestionErreur === 1) {
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

function getSecteur(){
    let secteurs;
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

function getRegionCli(){
    let regions;
    $.ajax({
        async: "false",
        url: "phpController/getRegionCli.php",
        type: "POST",
        success: function (response) {
            regions = JSON.parse(response);
            var long = regions.length;
            for (var i = 0; i<long; i++){
                $('#regionCli').append('<option value='+ regions[i]['idRegion'] +'>'+ regions[i]['nom'] +'</option>');
            }
                                  
            }
        });
}

function getRegionPro(){
    let regions;
    $.ajax({
        async: "false",
        url: "phpController/getRegionPro.php",
        type: "POST",
        success: function (response) {

            regions = JSON.parse(response);
            var long = regions.length;
            for (var i = 0; i<long; i++){
                $('#regionPro').append('<option value='+ regions[i]['idRegion'] +'>'+ regions[i]['nom'] +'</option>');
            }
                                  
            }
        });
}

function getNbPros(){
        $.ajax({
            url: "phpController/getNbPros.php",
            type: "POST",
            success: function (response) {                                
                }
            });
    

}


function getEnt(){
    $.ajax({
        url: "phpController/getEnt.php",
        type: "POST",
        success: function (response) {    
            console.log('liste annonces récupérée');                      
            }
        });


}


function getConversCli(){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getConversCli.php",
        type: "POST",
        success: function (response) {    
                resp = response;  
                  
            }
        });
        return resp;
}

function getConversPro(){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getConversPro.php",
        type: "POST",
        success: function (response) { 
            console.log(response);   
            resp=response;                      
            }
        });
        return resp;
}

function getMsgConvers(convers){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getMsgConvers.php",
        type: "POST",
        data:{
            "idConvers":convers
        },
        success: function (response) {    
            resp=response;                     
            }
        });
        return resp;
}

function getDernierMsgConvers(convers){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getDernierMsgConvers.php",
        type: "POST",
        data:{
            "idConvers":convers
        },
        success: function (response) {    
            resp=response;                     
            }
        });
        return resp;
}

function creationMsg(dest, conv){
    contenuMsg = $('#contenuNouveauMsg').val();
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest": dest,
                "conv":conv,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
    }
}

function creationMsgAcceuil(cli, conv){
    let contenuMsg = "Première prise de contact effectuée";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":cli,
                "conv":conv,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
    }
}

function creationMsgPropositionRdv(cli, conv){
    let contenuMsg = "Bonjour, voici ma propositon de rendez-vous: "+ formatDateTimeLocalToAffichage($('#dateRdv').val())+" Pourriez-vous me confirmer celle-ci dans l'onglet Rendez-vous ?";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":cli,
                "conv":conv,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
    }
}


function getNomPro(idPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getNomPro.php",
        type: "POST",
        data: 
        {
            "idPro":idPro
        },
        success: function (response) {    
            console.log(response);  
            resp = response;                      
            }
        });
        return resp;
}

function getNomCli(idCli){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getNomCli.php",
        type: "POST",
        data: 
        {
            "idCli":idCli
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getProEnt(idPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getProEnt.php",
        type: "POST",
        data: 
        {
            "idPro":idPro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getContactCli(idConvers){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getContactCli.php",
        type: "POST",
        data: 
        {
            "idConvers":idConvers
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getContactPro(idConvers){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getContactPro.php",
        type: "POST",
        data: 
        {
            "idConvers":idConvers
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function checkSiDejaContact(idCli, idPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/checkSiDejaContact.php",
        type: "POST",
        data: 
        {
            "idCli":idCli,
            "idPro":idPro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getProViaMail(mailPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getProViaMail.php",
        type: "POST",
        data: 
        {
            "mailPro":mailPro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function creationConvers(cli, pro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/creationConvers.php",
        type: "POST",
        data: 
        {
            "idCli":cli,
            "idPro":pro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function creationRdv(pro, cli){
    let dateRdv = formatDateTimeLocalToDb($('#dateRdv').val());

    $.ajax({
        url: "phpController/creationRdv.php",
        type: "POST",
        data: 
        {
            "idPro":pro,
            "idCli":cli,
            "dateRdv": dateRdv

        },
        success: function (response) {    
            console.log(response);  
            alert("Le rendez-vous a été créé");                   
            }
        });

}

function getRdv(idRdv){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getRdv.php",
        type: "POST",
        data: 
        {
            "idRdv":idRdv
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function modifStatutRdv(rdv, statut){
    $.ajax({
        url: "phpController/modifStatutRdv.php",
        type: "POST",
        data: 
        {
            "idRdv":rdv,
            "statutRdv":statut

        },
        success: function (response) {    
            console.log(response);                     
            }
        });
}

function modifDateRdv(rdv, idCli, idConvers){
    let dateBrutInput = $('#newDateRdv').val();
    let dateRdv = formatDateTimeLocalToDb(dateBrutInput);
    $.ajax({
        url: "phpController/modifDateRdv.php",
        type: "POST",
        data: 
        {
            "idRdv":rdv,
            "dateRdv":dateRdv

        },
        success: function (response) {    
            console.log(response); 
            alert('Vous avez modifié la date de ce rendez-vous');                    
            }
        });
        let contenuMsg = "Bonjour, voici la nouvelle proposition de rendez-vous "+formatDateTimeLocalToAffichage(dateBrutInput)+". Merci de valider celle-ci si elle vous convient dans l'onglet Rendez-vous.";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":idCli,
                "conv":idConvers,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
    }
    window.location.reload();
}

function getAllRdvCli(idCli){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getAllRdvCli.php",
        type: "POST",
        data: 
        {
            "idCli":idCli
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getAllRdvPro(idPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getAllRdvPro.php",
        type: "POST",
        data: 
        {
            "idPro":idPro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}
//date => date actuel du rdv qui doit être changé
function demandeModifDateRdv(idConvers, idPro, date){
    let contenuMsg = "Bonjour, serait-il possible de convenir d'une autre date de rendez-vous ? Celui-ci était fixé au "+date+". Merci de le faire dans l'onglet Rendez-vous.";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":idPro,
                "conv":idConvers,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
           alert('Vous avez envoyé un message au professionnel demandant un changement de date d\'intervention');
    }

    
}

function valideRdv(idRdv, idPro, idConvers,date){
    modifStatutRdv(idRdv,1);
    let contenuMsg = "Bonjour, je viens de valider notre rendez-vous du "+date+". Merci.";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":idPro,
                "conv":idConvers,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
            afficheRdv();
           alert('Vous avez envoyé un message au professionnel disant que vous validiez le rendez-vous');
    }

}

function annulerRdv(idRdv, idConvers,date, idPro, idCli){
    modifStatutRdv(idRdv,3);
    let dest;
    if(compteType == "client"){
        dest = idPro;
    }
    if(compteType == "professionnel"){
        dest = idCli;
    }
    let contenuMsg = "Bonjour, je viens d'annuler notre rendez-vous du "+date;
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest":dest,
                "conv":idConvers,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
            afficheRdv();
           alert('Vous avez envoyé un message à la personne disant que vous annuliez le rendez-vous');
    }  
}

function creationAvis(idRdv, dest, conv){
    let cote = $('#note').val();
    $.ajax({
        url: "phpController/creationAvis.php",
        type: "POST",
        data: 
        {
            "idRdv":idRdv,
            "cote":cote

        },
        success: function (response) {    
            console.log(response);                     
            }
        });
        contenuMsg = "Bonjour, je viens de noter notre rendez-vous. Encore merci. Bien à vous.";
        if(contenuMsg !=""){
            $.ajax({
                url: "phpController/creationMsg.php",
                type: "POST",
                data:{
                    "dest": dest,
                    "conv":conv,
                    "msgContenu":contenuMsg,
                },
                success: function (response) {    
                    console.log(response);                      
                    }
                });
            }

    modifStatutRdv(idRdv, 5);
    alert('Vous venez de donner votre avis. Merci');
    window.location.reload();
}

function getCotePro(pro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getCotePro.php",
        type: "POST",
        data: 
        {
            "idPro":pro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function getInfoPro(pro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/getInfoPro.php",
        type: "POST",
        data: 
        {
            "idPro":pro
        },
        success: function (response) {    
            console.log(response); 
            resp = response;                     
            }
        });
        return resp;
}

function creationMsgFinalisationRdv(dest, conv, date){
    contenuMsg = "Le rendez-vous du "+date+" s'est bien terminé, merci pour votre confiance et n'oublié pas d'évaluer le rendez-vous dans l'onglet approprié";
    if(contenuMsg !=""){
        $.ajax({
            url: "phpController/creationMsg.php",
            type: "POST",
            data:{
                "dest": dest,
                "conv":conv,
                "msgContenu":contenuMsg,
            },
            success: function (response) {    
                console.log(response);                      
                }
            });
    }
}
