
var idUser;
//regex vérifiant si une adresse email entré correspond au format d'une adresse email
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    return re.test(email); 
       }
//cette fonction permet de vérifier les champs à remplir pour l'inscription d'un client et fait l'appel ajax qui appel le controlleur php qui appel la procédure d'inscription 
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

    if (validateEmail($('#email').val()) == false) {
        $('#email').val("");
        $('#email').attr('placeholder', 'Cela ne semble pas être une adresse mail');
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
//cette fonction permet de vérifier les champs à remplir pour l'inscription d'un professionnel et fait l'appel ajax qui appel le controlleur php qui appel la procédure d'inscription 
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
    
    if (validateEmail($('#email').val()) == false) {
        $('#email').val("");
        $('#email').attr('placeholder', 'Cela ne semble pas être une adresse mail');
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
//cette fonction permet de vérifier les champs à remplir pour la connexion d'un utilisateur  et fait l'appel ajax qui appel le controlleur php qui appel la procédure de connexion
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
//Cette fonction permet l'ajout de champ texte pour les différents services proposés par une entreprise 
var nServices=1;
function ajoutChampService(){ 
    nServices++;
    var btn = '<button id="btnAjoutService" onclick="ajoutChampService();">Ajouter un service</button>';
    $('#btnAjoutService').remove();
    $('#formItemServices').append('<br><br><input type="text" name="servicesEnt'+ nServices +'" id="servicesEnt'+ nServices +'"/>');
    $('#formItemServices').append(btn);
} 

//cette fonction permet de vérifier les champs à remplir pour la création de son annonce et fait l'appel ajax qui appel le controlleur php qui appel la procédure de création d'annonce
function creationEnt(){
    let gestionErreur = 1;
    event.preventDefault();
    if ($('#nomEnt').val() == '') {
        $('#nomEnt').attr('placeholder', 'Identifiant requis');
        gestionErreur = 0;
    }

    if ($('#adresseEnt').val() == 'default') {
        $('#adresseEnt').attr('placeholder', 'Adresse requise');
        gestionErreur = 0;
    }

    if ($('#regionPro').val() == 'default') {
        alert("Il faut sélectionner une région et pas la sélection par défaut");
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

    /*if (checkTva()==false) {
        alert('Le numéro de TVA entré n\'est pas valide');
        $('#nTvaEnt').val("");
        $('#nTvaEnt').attr('placeholder', 'Numéro de TVA invalide');
        gestionErreur = 0;
    }*/

    if ($('#secteurEnt').val() == 'default') {
        alert("Il faut sélectionner un secteur différent de default");
        gestionErreur = 0;
    }

    if (gestionErreur === 1) {
        var servicesEnt = '';
        var objectForm;
        if(nServices == 1){
            objectForm = { 'nomEnt': $('#nomEnt').val(), 'adresseEnt': $('#adresseEnt').val(), 'nTvaEnt': $('#nTvaEnt').val(), 'secteurEnt': parseInt($('#secteurEnt').val()), 'idAdmin': idUser ,'descEnt': $('#descEnt').val(), 'servicesEnt': $('#servicesEnt1').val(), 'regionPro':$('#regionPro').val()};
        }
        else{
            servicesEnt += $('#servicesEnt1').val();
            for (let i = 2; i<= nServices; i++){
                servicesEnt += ','+$('#servicesEnt'+i).val();
                console.log(i);

            }
            objectForm = { 'nomEnt': $('#nomEnt').val(), 'adresseEnt': $('#adresseEnt').val(), 'nTvaEnt': $('#nTvaEnt').val(), 'secteurEnt': parseInt($('#secteurEnt').val()), 'idAdmin': idUser ,'descEnt': $('#descEnt').val(), 'servicesEnt': servicesEnt, 'regionPro':$('#regionPro').val()};
            
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

//permet d'appeler le controleur php qui appel la procédure de récupération des différents secteurs présent dans la base de données

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

//permet d'appeler le controleur php qui appel la procédure de récupération des différentes régions pour les clients présentent dans la base de données
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
//permet d'appeler le controleur php qui appel la procédure de récupération des différentes régions pour les professionnels présentent dans la base de données
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

//permet d'appeler le controleur php qui appel la procédure de récupération du nombre de professionnels inscrits sur la palteforme
function getNbPros(){
        $.ajax({
            url: "phpController/getNbPros.php",
            type: "POST",
            success: function (response) {                                
                }
            });
    

}

//permet d'appeler le controleur php qui appel la procédure de récupération des différentes annonces présentes dans la base de données
function getEnt(){
    $.ajax({
        url: "phpController/getEnt.php",
        type: "POST",
        success: function (response) {    
            console.log('liste annonces récupérée');                      
            }
        });


}

//permet d'appeler le controleur php qui appel la procédure de récupération des différentes conversations d'un client présentes dans la base de données
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
//permet d'appeler le controleur php qui appel la procédure de récupération des différentes conversations d'un professionnel présentes dans la base de données
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
//permet d'appeler le controleur php qui appel la procédure de récupération des différents msg d'une conversation présents dans la base de données (param = idConversation)
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
//permet d'appeler le controleur php qui appel la procédure de récupération du dernier msg d'une conversation présent dans la base de données (param = idConversation)
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
//permet d'appeler le controleur php qui appel la procédure de création de msg (param = idDestinataire qui peu etre soit idClient soit idPro, idConversation)
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
//permet d'appeler le controleur php qui appel la procédure de création de msg (param = idClient , idConversation) et ici le contenu du msg est prédéfinis pour une creation de conversation
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
//permet d'appeler le controleur php qui appel la procédure de création de msg (param = idClient , idConversation) et ici le contenu du msg est prédéfinis pour une proposition de Rdv
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

//permet d'appeler le controleur php qui appel la procédure de récupération du pseudo d'un professionnel grâce à l'id de celui-ci passé en param
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
//permet d'appeler le controleur php qui appel la procédure de récupération du pseudo d'un client grâce à l'id de celui-ci passé en param
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
//permet d'appeler le controleur php qui appel la procédure de récupération du nom d'entreprise d'un professionnel grâce à l'id de celui-ci passé en param
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
//permet d'appeler le controleur php qui appel la procédure de récupération de l'id d'un professionnel d'une conversation avec un client grâce à l'id de la conversation passé en param
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
//permet d'appeler le controleur php qui appel la procédure de récupération de l'id d'un client d'une conversation  avec un professionnel grâce à l'id de la conversation passé en param
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
//permet d'appeler le controleur php qui appel la procédure de récupération de conversation afin de vérifier s'il  existe une convers entre le client (user connecté) et le professionnel grâce à l'id du pro passé en param
function checkSiDejaContact(idPro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/checkSiDejaContact.php",
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
//permet d'appeler le controleur php qui appel la procédure de récupération du id d'un professionnel grâce à son mail passé en param
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
//permet d'appeler le controleur php qui appel la procédure de création de conversation entre un pro et un client avec en paramètre l'id de chacun (enclenché uniquement par un client)
function creationConvers(pro){
    let resp = "";
    $.ajax({
        async:false,
        url: "phpController/creationConvers.php",
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
//permet d'appeler le controleur php qui appel la procédure de création de rendez-vous entre un pro et un client avec en paramètre l'id de chacun
function creationRdv(cli){
    let dateRdv = formatDateTimeLocalToDb($('#dateRdv').val());

    $.ajax({
        url: "phpController/creationRdv.php",
        type: "POST",
        data: 
        {
            "idCli":cli,
            "dateRdv": dateRdv

        },
        success: function (response) {    
            console.log(response);  
            alert("Le rendez-vous a été créé");                   
            }
        });

}
//permet d'appeler le controleur php qui appel la procédure de récupération des informations sur un rendez-vous (id, date, statut, idClient, idProfessionnel) en passant en paramètre l'id du rendez vous
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
//permet d'appeler le controleur php qui appel la procédure de modification du statut d'un rendez-vous en lui passant en paramètre l'id du rdv et le statut souhaité 
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
//permet d'appeler le controleur php qui appel la procédure de modification du date d'un rendez-vous en lui passant en paramètre l'id du rdv et l'id du client et l'id de la conversation
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
//permet d'appeler le controleur php qui appel la procédure de récupération de tous les rdv d'un client en lui passant en paramètres l'id du client
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
//permet d'appeler le controleur php qui appel la procédure de récupération de tous les rdv d'un professionnel en lui passant en paramètres l'id du proffessionnel
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
//permet d'appeler le controleur php qui appel la procédure de création de msg avec un contenu prédéfinis pour la demande de changement de date (param = id de la conversation, id du professionnel et la date de rdv à modifier)
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
//permet d'appeler le controleur php qui appel la procédure de modification d'rdv en lui passant en paramètres l'id du rdv, l'id du professionnel du rdv, id de la conversation, et la date du rdv
//de plus elle envoit un msg prédéfinis grace à l'appel de la procédure de création de msg
function valideRdv(idRdv, idPro, idConvers,date){
    modifStatutRdv(idRdv,1);// 1 = statut validé
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
//permet d'appeler le controleur php qui appel la procédure de modification d'rdv en lui passant en paramètres l'id du rdv, l'id du professionnel du rdv, id de la conversation, et la date du rdv
//de plus elle envoit un msg prédéfinis grace à l'appel de la procédure de création de msg
function annulerRdv(idRdv, idConvers,date, idPro, idCli){
    modifStatutRdv(idRdv,3);//3 = statut annulé
    let dest;
    if(utilisateur.type == "client"){
        dest = idPro;
    }
    if(utilisateur.type == "professionnel"){
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
//permet d'appeler le controleur php qui appel la procédure de création d'un avis sur un rdv en lui passant en param l'id du rendez-vous, dest = idProfessionnel et l'id de la conversation
//permet d'appeler le controleur php qui appel la procédure de création de msg avec un msg prédifinis
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
    creationMsgAvisDonne(dest,conv);    
    modifStatutRdv(idRdv, 5);
    alert('Vous venez de donner votre avis. Merci');
    window.location.reload();
}

function creationMsgAvisDonne(dest,conv){
    let contenuMsg = "Bonjour, je viens de noter notre rendez-vous. Encore merci. Bien à vous.";
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
//permet d'appeler le controleur php qui appel la procédure de récupération de la cote moyenne d'un professionnel en passant en param l'id de ce professionnel
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
//permet d'appeler le controleur php qui appel la procédure de récupération des informations d'un professionnel (pseudo, nom, prenom, mail, adresse, nom de l'entreprise, moyenne, nombre avis) en passant en param l'id de ce professionnel
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
//permet d'appeler le controleur php qui appel la procédure de création de msg avec un msg prédéfinis propre à une fin de rendez-vous avec en param idclient, idConversation, dateRdv
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

function checkTva(){
    let tva=$('#nTvaEnt').val();
    let resp = "";
    $.ajax({
        async:false,
        url: "http://www.apilayer.net/api/validate?access_key=d06a0f519d600b9a0b70f687dd93ba2c&vat_number="+tva+"&format=1",
        type: "GET",
        success: function (response) {    
            resp = response;                     
            }
        });
        return resp['valid'];
}

function deleteUser(){
    $.ajax({
        url: "phpController/deleteUser.php",
        type: "POST",
        success: function (response) {    
            console.log(response);                     
            }
        });
        alert('Vous avez supprimé votre compte, vous allez être déconnecté');
        window.location.reload();
}
