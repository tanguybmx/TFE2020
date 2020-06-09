//Cette fonction permet de sélectionner le bon menu en fonction de là où l'on est sur le site et prend en paramètre le menu a sélectionner comme actif
function removeClassActive(active){
    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    $('#navProfil').removeClass('nav-item active').addClass('nav-item');
    $('#navEntreprise').removeClass('nav-item active').addClass('nav-item');
    $('#navPriseDeContact').removeClass('nav-item active').addClass('nav-item');
    $('#navGestionRdv').removeClass('nav-item active').addClass('nav-item');
    

    $('#'+active).addClass('nav-item active');
}

//permet d'afficher le contenu de la page de connexion
function connexion(){

    $('#content').load('inc/connexion.php');
    removeClassActive('navConnexion');
    
    

}
//permet d'afficher le contenu de la page de preinscription
function preinscritption(){

    $('#content').load('inc/preinscription.php');

    removeClassActive('navConnexion');
    

}
//permet d'afficher le contenu de la page d'inscription en tant que client
function inscritptionClient(){

    $('#content').load('inc/inscriptionClient.php');

    removeClassActive('navConnexion');
    

}
//permet d'afficher le contenu de la page d'inscription en tant que  professionnel
function inscritptionPro(){

    $('#content').load('inc/inscriptionPro.php');

    removeClassActive('navConnexion');
    

}
//permet d'afficher le contenu de la page d'acceuil
function accueil(){

    $('#content').load('inc/accueil.php');

    removeClassActive('navAccueil');
    


}
//permet d'afficher le contenu de la page A propos de nous
function about(){

    $('#content').load('inc/about.php');

    removeClassActive('navAbout');
    


}
//permet d'afficher le contenu de la page des annonces
function services(){

    $('#content').load('inc/services.php');

    removeClassActive('navServices');
    
}
//permet d'afficher le contenu de la page de contact
function contact(){

    $('#content').load('inc/contact.php');

    removeClassActive('navContact');
    


}
//permet d'afficher le contenu de la page de profil utilisateur
function profil(){

    $('#content').load('inc/profil.php');

    removeClassActive('navProfil');
    
}
//permet d'afficher le contenu de la page de son annonce lorsqu'on est connecté en tant que professionnel
function entreprise(){
    $('#content').load('inc/entreprise.php');

    removeClassActive('navEntreprise');
}
//permet d'afficher le contenu de la page du tchat entre professionnel et client
function priseDeContact(){
    $('#content').load('inc/liveTchat/liveTchat.php');

    removeClassActive('navPriseDeContact');
}
//permet d'afficher le contenu de la page pour donner son avis sur un rdv en faisant appel à la fonction qui construit la page
function pageAvis(rdvId, pseudo, date, dest, conv){
    avis(rdvId, pseudo, date, dest, conv);
        //la cote sera automatiquement cherché par le controller js grace à $('#note').val()

}
//permet d'afficher le contenu de la page de Rendez-vous
function gestionRdv(){
    $('#content').load('inc/gestionRdv.php');

    removeClassActive('navGestionRdv');
}


//Cette fonction va permettre de changer le bouton de connexion par le bouton de déconnexion lorsque l'utilisateur sera connecté
function estCo() {
    $('#navConnexion').html('<a class="nav-link" href="phpController/deconnexion.php" id="lienConnexion">Se déconnecter</a>');
    $("#navConnexion").prop("onclick", null).off("click");

}


//Fonction qui génère l'affichage de la liste d'annonce en recevant en paramètre un tableu d'annonce provenant de la base de données

function affichageListeAnnonces(tabAnnonce){
    nbAnnonces = tabAnnonce.length;
    console.log(tabAnnonce);
    affichageAnnonces = "";

    for (var i = 0; i<nbAnnonces; i++){
        let idPro = getProViaMail(tabAnnonce[i]['idAdmin']);
        let reponse = JSON.parse(getCotePro(idPro));
        let cotePro = reponse[0]['moyenne'];
        let nbAvis = reponse[0]['nbAvis'];
        let demiEtoile = 0;

        affichageAnnonces +="<div class='card'>";
        affichageAnnonces +="<div class='row'>";
        affichageAnnonces +="<div class='col-md-3 annonce'>";
        affichageAnnonces +="<div class='card-body cc-education-header'>";
        affichageAnnonces +="<div class='h5' onclick='afficheProfilPro("+idPro+")'><a class='lienHover'>"+ tabAnnonce[i]['nom'] +"</a></div>";
        affichageAnnonces +="<p>"+ tabAnnonce[i]['nomSect'] +"</p>";
        affichageAnnonces +="<p><img class='img-responsive logoEnt' src='img/clients-logo/YourLogo.png'></p>";
        affichageAnnonces +="</div></div>";
        affichageAnnonces +="<div class='col-md-9'>";
        affichageAnnonces +="<div class='card-body'></div>";
        affichageAnnonces +="<div class='h5'>Annonce</div><br>";
        affichageAnnonces +="<p class='category'>"+ tabAnnonce[i]['services'] +"</p>";
        affichageAnnonces +=" <p>"+ tabAnnonce[i]['description'] +"</p>";
        if(cotePro===null){
            affichageAnnonces += '<p>Le professionnel est nouveau sur la plateforme</p>';
        }
        if(cotePro!==null){
            let nbEtoileFull = cotePro.substr(0,1);
            if((cotePro.substr(2,1)) != "0"){
                demiEtoile = 1;
            }
            let affEtoile = "";
            for (let i = 0;i<nbEtoileFull; i++ ){
                affEtoile += '<i class="fas fa-star"></i>';
            }
            console.log(demiEtoile);
            if(demiEtoile == 1){
                affEtoile += '<i class="fas fa-star-half"></i>';
            }
            affichageAnnonces += '<p>Evaluation: '+affEtoile+'</p>';
            affichageAnnonces += '<p>Ce professionnel a reçu '+nbAvis+' avis</p>';
        }
        if(utilisateur.user!=null){
            affichageAnnonces +=" <p><a  class ='lienBleu' onclick='chatContact("+idPro+");'>Contacter</a><br></p>";
        }
        affichageAnnonces +="</div></div></div></div>";
    }

    

    

    $('#listeAnnonces').html(affichageAnnonces);
}
//permet la construction de l'affichage et l'affichage des conversations d'un utilisateur en prennant en paramètre l'id de l'user connecté
function afficherConvers(){
    let idUser = utilisateur.user;
    let listConvers="";
    if(utilisateur.type=="client"){
        var conversCli = JSON.parse(getConversCli());
        let nbConvers = (conversCli).length;
        for (var i=0; i<nbConvers; i++){
            let tabConversCli= JSON.parse(getDernierMsgConvers(conversCli[i]));
            console.log(tabConversCli);
            var contact;
            if(tabConversCli[0]['idExp']==idUser){
                contact = tabConversCli[0]['idDest'];
            }
            else{
                contact = tabConversCli[0]['idExp'];
            }
            let pseudoPro = JSON.parse(getNomPro(contact))[0]['pseudo'];
            let nomEnt = JSON.parse(getProEnt(contact))[0]['nom'];
            listConvers+="<a class='list-group-item list-group-item-action text-black rounded-0' id="+conversCli[i]+" onclick='afficheMsgConvers("+conversCli[i]+",\""+pseudoPro+" "+nomEnt+"\");'>";
            listConvers+="<div class='media'>";
            listConvers+="<div class='media-body ml-4'>";
            listConvers+="<div class='d-flex align-items-center justify-content-between mb-1'>";
            listConvers+="<h6 class='mb-0'>"+pseudoPro+"</h6><h7>"+nomEnt+"</h7><p class='small font-weight-bold'>"+((tabConversCli[0]['contenu']).substr(0, 15))+", ...</p>";
            listConvers+="</div>";
            listConvers+="<p class='font-italic mb-0 text-small'>"+tabConversCli[0]['msgDate']+"</p>";
            listConvers+="</div>";
            listConvers+="</div>";
            listConvers+="</a>";
        }
        $("#listConvers").html(listConvers);
    }

    if(utilisateur.type=="professionnel"){
        let conversPro= JSON.parse(getConversPro());
        let nbConvers = (conversPro).length;
        console.log(conversPro);
        if(conversPro != "Vous n'avez pas encore de prise de contact"){
            for (var i=0; i<nbConvers; i++){
                let tabConversPro= JSON.parse(getDernierMsgConvers(conversPro[i]));
                let contact;
                if(tabConversPro[0]['idExp']==idUser){
                    contact = tabConversPro[0]['idDest'];
                }
                else{
                    contact = tabConversPro[0]['idExp'];
                }
                let pseudoCli = JSON.parse(getNomCli(contact))[0]['pseudo'];
                listConvers+="<a class='list-group-item list-group-item-action text-black rounded-0' id="+conversPro[i]+" onclick='afficheMsgConvers("+conversPro[i]+",\""+pseudoCli+"\");'>";
                listConvers+="<div class='media'>";
                listConvers+="<div class='media-body ml-4'>";
                listConvers+="<div class='d-flex align-items-center justify-content-between mb-1'>";
                listConvers+="<h6 class='mb-0'>"+pseudoCli+"</h6><p class='small font-weight-bold'>"+(tabConversPro[0]['contenu']).substr(0, 15);+"</p>";
                listConvers+="</div>";
                listConvers+="<p class='font-italic mb-0 text-small'>"+tabConversPro[0]['msgDate']+"</p>";
                listConvers+="</div>";
                listConvers+="</div>";
                listConvers+="</a>";
            }
            $("#listConvers").html(listConvers);
        }
        else{
            $("#pasDeContact").html("Vous n'avez pas encore eu de contact de client");
        }
    }
}
//fonction qui permet d'afficher la liste de conversation et cacher les msg 
function listeConvers(){
    $('#contentChat').hide();
    $('#contentConvers').show();
}

//permet la construction de l'affichage et l'affichage des messages d'une conversation en prennant en paramètre l'id de la conversation, l'id le l'utilisateur connecté et le nom du contact
function afficheMsgConvers(idConvers, nomContact){
    $('#contentChat').show();
    $('#contentConvers').hide();
    let idUserActuel = utilisateur.user;
    let tabMsgConvers=JSON.parse(getMsgConvers(idConvers));
    let fullConver ="";
    var contact;
    $('#nomContact').html('<div class="bg-gray px-4 py-2 bg-light"><p class="h5 mb-0 py-1"><button class="btn btn-primary" onclick="listeConvers();">Retour</button>'+'  '+''+nomContact+'</p></div><br>');
    for (let k = 0; k<tabMsgConvers.length; k++){
        if(idUserActuel==tabMsgConvers[k]['idExp']){
            fullConver+='<div class="media w-50 ml-auto mb-3">';
            fullConver+='<div class="media-body">';
            fullConver+='<div class="bg-primary rounded py-2 px-3 mb-2">';
            fullConver+='<p class=" mb-0 text-white">'+tabMsgConvers[k]['contenu']+'</p>';
            fullConver+='</div>';
            fullConver+='<p class="small text-muted">'+tabMsgConvers[k]['msgDate']+'</p>';
            fullConver+='</div>';
            fullConver+='</div>';
        }
        if(idUserActuel==tabMsgConvers[k]['idDest']){
            fullConver+= '<div class="media w-50 mb-3">';
            fullConver+='<div class="media-body ml-3">';
            fullConver+='<div class="bg-light rounded py-2 px-3 mb-2">';
            fullConver+='<p class=" mb-0 text-muted">'+tabMsgConvers[k]['contenu']+'</p>';
            fullConver+='</div>';
            fullConver+='<p class="small text-muted">'+tabMsgConvers[k]['msgDate']+'</p>';
            fullConver+='</div>';
            fullConver+='</div>';
        }
    }
    $("#msgConvers").html(fullConver);
    $('.messages-box a').removeClass('text-white active');
    $('.messages-box a').addClass('text-black');
    $('#'+idConvers).removeClass('text-black');
    $('#'+idConvers).addClass('text-white active');
    if(utilisateur.type=="client"){
        let conversCli= JSON.parse(getContactCli(idConvers));
            $('#button-addon2').attr("onclick","afficheMsgEnvoye(\""+conversCli[0]['idPro']+"\",\""+idConvers+"\");");
            $('#button-addon3').hide();
    }
    if(utilisateur.type=="professionnel"){
        let conversPro= JSON.parse(getContactPro(idConvers));
            $('#button-addon2').attr("onclick","afficheMsgEnvoye(\""+conversPro[0]['idClient']+"\",\""+idConvers+"\");");
            $('#button-addon3').attr("onclick","propositionRdv(\""+conversPro[0]['idClient']+"\",\""+idConvers+"\","+conversPro[0]['idPro']+");");

    }
    var box = document.getElementById('msgConvers');
    box.scrollTop = box.scrollHeight;

}
//cette fonction permet d'affiché le msg qui vient d'être envoyé dans une conversation
function afficheMsgEnvoye(dest, conv){
    creationMsg(dest, conv);
    let dernierMsgenvoye = JSON.parse(getDernierMsgConvers(conv));
    let contenuDernierMsgEnvoye = dernierMsgenvoye[0]['contenu'];
    let dateDernierMsgEnvoye = dernierMsgenvoye[0]['msgDate'];
    $('#contenuNouveauMsg').val("");
    var box = document.getElementById('msgConvers');
    box.scrollTop = box.scrollHeight;
    $('#'+conv).click();
}
//fonction qui permet de créer une nouvelle conversation lors du clic pour contacter un professionnel via une annonce et si la personne a déjà été en contact avec ce professionnel passe juste dans l'onglet de tchat
function chatContact(idPro){
    let reponse = JSON.parse(checkSiDejaContact(idPro));
    console.log(reponse);
    console.log(reponse);
    if(reponse == "noConvers"){
        let conv=creationConvers(idPro);
        creationMsgAcceuil(idPro, conv);
        priseDeContact();
    }
    else{
        priseDeContact();
    }
    window.location.reload();

}
//Cette fonction permet l'affichage d'un formulaire dans le tchat afin de pouvoir faire proposition de rendez-vous dans une conversation (paramètres = idClient, idConversation, idProfessionnel)
function propositionRdv(cli,conv,pro){
    let bulleDiscussion = "";
    let propRdv = '<div class="container"> <div class="panel-heading text-white">Proposer un rendez-vous</div> <div class="panel-body"> <div class="row"> <div class="col-md-2"> <div class="form-group"> <label class="control-label text-white"></label> <label for="dateRdv" value="Date de rendez-vous"></label> <input type="datetime-local" id="dateRdv" name="dateRdv"> <input type="button" value="Proposer"  onclick="affichePropositionRdv('+cli+','+conv+','+utilisateur.user+');"> </div> </div> </div> </div> </div>';
    bulleDiscussion+='<div class="media w-70 ml-auto mb-3" id="bullePropRdv">';
    bulleDiscussion+='<div class="media-body">';
    bulleDiscussion+='<div class="bg-primary rounded py-2 px-3 mb-2" style="height:30em;">';
    bulleDiscussion+='<p class=" mb-0 text-white">'+propRdv+'</p>';
    bulleDiscussion+='</div>';
    bulleDiscussion+='</div>';
    bulleDiscussion+='</div>';
    
    $("#msgConvers").append(bulleDiscussion);
    var box = document.getElementById('msgConvers');
    box.scrollTop = box.scrollHeight;
    $('#proposerRdv').attr('onclick','affichePropositionRdv('+cli+','+conv+','+pro+')');
}
//cette fonction permet l'envois du msg de proposition de rendez vous et l'affichage du msg de proposition (paramètres = idClient, idConversation, idProfessionnel)
function affichePropositionRdv(cli,conv, pro){
    creationMsgPropositionRdv(cli, conv);
    creationRdv(cli);
    let dernierMsgenvoye = JSON.parse(getDernierMsgConvers(conv));
    let contenuDernierMsgEnvoye = dernierMsgenvoye[0]['contenu'];
    let dateDernierMsgEnvoye = dernierMsgenvoye[0]['msgDate'];
    let bulleDiscussion = "";
    bulleDiscussion+='<div class="media w-50 ml-auto mb-3">';
    bulleDiscussion+='<div class="media-body">';
    bulleDiscussion+='<div class="bg-primary rounded py-2 px-3 mb-2">';
    bulleDiscussion+='<p class=" mb-0 text-white">'+contenuDernierMsgEnvoye+'</p>';
    bulleDiscussion+='</div>';
    bulleDiscussion+='<p class="small text-muted">'+dateDernierMsgEnvoye+'</p>';
    bulleDiscussion+='</div>';
    bulleDiscussion+='</div>';
    $('#bullePropRdv').hide();
    $("#msgConvers").append();
    $("#"+conv).click();
}

//formatage de date a affiché et a envoyé à la db
//format affichage
function affichageDateFormatEu(date){
//entree "06/03/2020 10:00 AM"
    let date1 = date;
    
    let mois = date1.substr(0,2);
    let jour = date1.substr(3,2);
    let annee = date1.substr(6,4);
    let tabPM = ["13","14","15","16","17","18","19","20","21","22","23","00"];
    let amOrPm;
    let heure;
    let minute;
    
    if(date.substr(12,1)==":"){
        heure = date1.substr(11,1);
        minute = date1.substr(13,2);
        amOrPm = date1.substr(16,2);
    }
    if(date.substr(12,1)!=":"){
        heure = date1.substr(11,2);
        minute = date1.substr(14,2);
        amOrPm = date1.substr(17,2);
    }
    if(amOrPm == "PM"){
        heure = tabPM[(heure-1)];
    }
        let formatAffichageEu = jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":00";
        return formatAffichageEu;
    }
    
    function formatDateDb(date){
    //entrée 06/02/2020 10:00 AM
    //format a envoyé à la db: 2020-05-29 10:00:00; obtenu avec la fonction: 2020-05-29 6:00:00
    let date2 = date;
    let jour2 = date2.substr(3,2);
    let mois2 = date2.substr(0,2);
    let annee2 = date2.substr(6,4);
    let amOrPm;
    let heure2;
    let minute2;
    
    if(date2.substr(12,1)==":"){
        heure2 = date2.substr(11,1);
        minute2 = date2.substr(13,2);
        amOrPm = date2.substr(16,2);
    }
    if(date2.substr(12,1)!=":"){
        heure2 = date2.substr(11,2);
        minute2 = date2.substr(14,2);
        amOrPm = date2.substr(17,2);
    }
    let tabPM = ["13","14","15","16","17","18","19","20","21","22","23","00"];
    if(amOrPm == "PM"){
        heure2 = tabPM[(heure2-1)];
    }
    
    let formatDB = annee2+"-"+mois2+"-"+jour2+" "+heure2+":"+minute2+":"+"00";
    return formatDB;
    }

    function formatDateTimeLocalToDb(date){
        let dateTimeLocal = date;
        let jour = dateTimeLocal.substr(8,2);
        let mois = dateTimeLocal.substr(5,2);
        let annee = dateTimeLocal.substr(0,4);
        let heure = dateTimeLocal.substr(11,2);
        let minute = dateTimeLocal.substr(14,2);

        let formatDB = annee+"-"+mois+"-"+jour+" "+heure+":"+minute+":"+"00";
        return formatDB;
    }

    function formatDateTimeLocalToAffichage(date){
        let dateTimeLocal = date;
        let jour = dateTimeLocal.substr(8,2);
        let mois = dateTimeLocal.substr(5,2);
        let annee = dateTimeLocal.substr(0,4);
        let heure = dateTimeLocal.substr(11,2);
        let minute = dateTimeLocal.substr(14,2);

        let formatAffichageEu = jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":00";
        return formatAffichageEu;
    }
//Cette fonction permet l'affichage des rendez-vous d'un utilisateur
    function afficheRdv(){
        let statut = ['En attente','Validé','Refusé','Annulé', 'Terminé', 'Terminé et avis donné']
        if(utilisateur.type=="client"){
            let tabRdvCli = JSON.parse(getAllRdvCli(utilisateur.user));
            let tableRdvCli="";
            for (let i =0; i< tabRdvCli.length; i++){
                let validationRdv ='<td></td>';
                let propDate = '<td></td>';
                let annulation = '<td></td>';
                let avis = '<td></td>';
                if(tabRdvCli[i]['statutRdv']==0){
                    validationRdv = '<td onclick="valideRdv('+tabRdvCli[i]['idRdv']+","+parseInt(tabRdvCli[i]['idPro'])+","+parseInt(tabRdvCli[i]['idConvers'])+',\''+tabRdvCli[i]['rdvDate']+'\''+')"><a class="lienBleu">Valider</a></td>';
                    propDate = '<td onclick="demandeModifDateRdv('+parseInt(tabRdvCli[i]['idConvers'])+','+parseInt(tabRdvCli[i]['idPro'])+',\''+tabRdvCli[i]['rdvDate']+'\')"><a class="lienBleu">Demande de changement de date</a></td>';
                }
                if(tabRdvCli[i]['statutRdv']!=4 && tabRdvCli[i]['statutRdv']!=3 && tabRdvCli[i]['statutRdv']!=5){
                    annulation = '<td onclick="annulerRdv('+tabRdvCli[i]['idRdv']+","+parseInt(tabRdvCli[i]['idConvers'])+',\''+tabRdvCli[i]['rdvDate']+'\''+','+tabRdvCli[i]['idPro']+','+tabRdvCli[i]['idCli']+')"><a class="lienBleu">Annuler</a></td>';;
                }

                if(tabRdvCli[i]['statutRdv']==4){
                    avis = '<td><a class="lienBleu" onclick="pageAvis('+tabRdvCli[i]['idRdv']+",'"+tabRdvCli[i]['pseudo']+"','"+tabRdvCli[i]['rdvDate']+'\','+tabRdvCli[i]['idPro']+','+tabRdvCli[i]['idConvers']+')">Donner son avis</a></td>';
                }

                tableRdvCli+='<tr>'
                tableRdvCli+='<th scope="row">'+(i+1)+'</th>';
                tableRdvCli+='<td>'+tabRdvCli[i]['rdvDate']+'</td>';
                tableRdvCli+='<td>'+tabRdvCli[i]['pseudo']+'</td>';
                tableRdvCli+= validationRdv;
                tableRdvCli+= annulation;
                tableRdvCli+= propDate;
                tableRdvCli+='<td>'+statut[(tabRdvCli[i]['statutRdv'])]+'</td>';
                tableRdvCli+= avis;
                tableRdvCli+='</tr>';
            }
            $('#listeRdv').html(tableRdvCli);
        }
        if(utilisateur.type=="professionnel"){
            let tabRdvPro = JSON.parse(getAllRdvPro(utilisateur.user));
            let tableRdvPro="";
            for (let i =0; i< tabRdvPro.length; i++){
                let propDate = '<td></td>';
                let annulation = '<td></td>';
                let finalisation = '<td></td>';
                if(tabRdvPro[i]['statutRdv']==0){
                    validationRdv = '<td onclick="modifStatutRdv('+tabRdvPro[i]['idRdv']+','+1+')"><a class="lienBleu">Valider</a></td>';
                    propDate = '<td id="newDate'+parseInt(tabRdvPro[i]['idRdv'])+'" onclick="affichageModifDate('+parseInt(tabRdvPro[i]['idRdv'])+',\''+tabRdvPro[i]['rdvDate']+'\',\''+tabRdvPro[i]['pseudo']+'\','+tabRdvPro[i]['idCli']+','+ tabRdvPro[i]['idConvers']+')"><a class="lienBleu">Proposer une autre date</a></td><span id="choixDate'+tabRdvPro[i]['idRdv']+'"></span>';
                }
                if(tabRdvPro[i]['statutRdv']!=4 && tabRdvPro[i]['statutRdv']!=3 && tabRdvPro[i]['statutRdv']!=5){
                    annulation = '<td onclick="annulerRdv('+tabRdvPro[i]['idRdv']+","+parseInt(tabRdvPro[i]['idConvers'])+',\''+tabRdvPro[i]['rdvDate']+'\''+','+tabRdvPro[i]['idPro']+','+tabRdvPro[i]['idCli']+')"><a class="lienBleu">Annuler</a></td>';;
                }
                if(tabRdvPro[i]['statutRdv']==1){
                    finalisation = "<td onclick='finaliserRdv("+tabRdvPro[i]['idRdv']+","+tabRdvPro[i]['idCli']+","+tabRdvPro[i]['idConvers']+",\""+tabRdvPro[i]['rdvDate']+"\");'> <a class='lienBleu'>Le rendez-vous a bien eu lieu et est terminé</a></td>";
                }
                tableRdvPro+='<tr>'
                tableRdvPro+='<th scope="row">'+(i+1)+'</th>';
                tableRdvPro+='<td>'+tabRdvPro[i]['rdvDate']+'</td>';
                tableRdvPro+='<td>'+tabRdvPro[i]['pseudo']+'</td>';
                tableRdvPro+=annulation;
                tableRdvPro+=propDate;
                tableRdvPro+=finalisation;
                tableRdvPro+='<td>'+statut[(tabRdvPro[i]['statutRdv'])]+'</td>';
                tableRdvPro+='</tr>';
            }
            $('#listeRdv').html(tableRdvPro);
        }
        
    }
//Cette fonction permet l'affichage de la page de modification de date d'un rendez-vous par un professionnel (paramètres = idRdv, dateRdv, pseudoclient, idClient, idConversation)
    function affichageModifDate(rdv, date, pseudoCli, idCli, idConvers){
        let modifDate = "<p>Modification du rendez-vous avec "+pseudoCli+" qui avait lieu le "+date+"</p><form style='height:15em;' action='#'> <label for='newDateRdv' value='Nouvelle date'></label> <input type='datetime-local' id='newDateRdv' name='newDateRdv'> <input type='button' value='Proposer'  onclick='modifDateRdv("+rdv+","+idCli+","+idConvers+")'> </form>";
        $('#tableRdv').html(modifDate);
    }
//Cette fonction permet au professionnel d'indiquer qu'un rendez-vous s'est bien déroulé (idRdv, destinataire = idClient, idConversation, dateRdv)
    function finaliserRdv(rdv, dest, conv,date){
        modifStatutRdv(rdv, 4);
        alert('Vous avez indiqué que le rendez-vous était terminé');
        creationMsgFinalisationRdv(dest, conv,date);
        window.location.reload();
    }
//Cette fonction permet la construction et l'affichage de la page avis
    function avis(rdvId, pseudo, date, dest, conv){
        let pageAvis="";
        pageAvis+='<div class="container">';
        pageAvis+='<h2>Votre avis nous importe beaucoup</h2>';
        pageAvis+='<h3>Quel est votre avis sur ce professionnel ('+pseudo+') pendant le rendez-vous du '+date+'?</h3>';
        pageAvis+='<p>Donné une note entre 0 et 5</p>';
        pageAvis+='<select name="note" id="note">';
        pageAvis+='<option value="0">0</option>';
        pageAvis+='<option value="0.5">0.5</option>';
        pageAvis+='<option value="1">1</option>';
        pageAvis+='<option value="1.5">1.5</option>';
        pageAvis+='<option value="2">2</option>';
        pageAvis+='<option value="2.5">2.5</option>';
        pageAvis+='<option value="3">3</option>';
        pageAvis+='<option value="3.5">3.5</option>';
        pageAvis+='<option value="4">4</option>';
        pageAvis+='<option value="4.5">4.5</option>';
        pageAvis+='<option value="5">5</option>';
        pageAvis+='</select>';
        pageAvis+='<input type="button" onclick="creationAvis('+rdvId+','+dest+','+conv+')" value="Valider">';
        //la cote sera automatiquement cherché par le controller js grace à $('#note').val()
        pageAvis+='</div>';
        $('#content').html(pageAvis);
        
        
    }
//cette fonction permet l'affichage du profil d'un professionnel via son annonce
    function afficheProfilPro(pro){
        let infoPro = JSON.parse(getInfoPro(pro));
        let pseudo = infoPro[0]['pseudo'];
        let nomEnt = JSON.parse(getProEnt(pro))[0]['nom'];
        let nom = infoPro[0]['proNom'];
        let prenom = infoPro[0]['prenom'];
        let mail = infoPro[0]['mail'];
        let adresse = infoPro[0]['adresse'];
        let nbAvis = infoPro[0]['nbAvis'];
        let moyenne = infoPro[0]['moyenne'];
        let affProfilPro ='';

        if(nbAvis==0){
            moyenne = "Pas encore d'avis";
        }
        if(nbAvis !=0){
           moyenne = moyenne.substr(0,3);
        }
         affProfilPro +='<link rel="stylesheet" href="css/loginStyle.css">';
         affProfilPro +='<section class="d-lg-flex align-items-center section-margin--large">';
         affProfilPro +='<div class="container">';
         affProfilPro +='<div class="main">';
         affProfilPro +='<section class="signup">';
         affProfilPro +='<div class="container">';
         affProfilPro +='<div class="signup-content">';
         affProfilPro +='<div class="signup-form">';
         affProfilPro +='<h2 class="form-title">Profil</h2>';
         affProfilPro +='<form method="post" class="register-form" id="register-form" action="#">';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="matricule">Identifiant</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="identifiant" id="identifiant" readonly value="'+pseudo+'"></br>';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="nomEnt">Entreprise</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="nomEnt" id="nomEnt" readonly value="'+nomEnt+'"></br>';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="nom">Nom</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="nom" id="nom" readonly value="'+nom+'">';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="prenom">Prénom</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="prenom" id="prenom" readonly value="'+prenom+'">';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="email"> Email</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="email" name="email" id="email" readonly value="'+mail+'">';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="adresse">Adresse</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="adresse" id="adresse" readonly value="'+adresse+'">';
         affProfilPro +='</div>';
         affProfilPro +=' <div class="form-group">';
         affProfilPro +='<label for="nbAvis">Nombre d\'avis reçu</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="nbAvis" id="nbAvis" readonly value="'+nbAvis+'">';
         affProfilPro +='</div>';
         affProfilPro +='<div class="form-group">';
         affProfilPro +='<label for="moyenne">Moyenne des avis</label>';
         affProfilPro +='<br><br><br>';
         affProfilPro +='<input type="text" name="moyenne" id="moyenne" readonly value="'+moyenne+'"></input>';
         affProfilPro +='</div>';
         affProfilPro +='</form>';
         affProfilPro +='</div>';
         affProfilPro +='</div>';
         affProfilPro +='</div>';
         affProfilPro +='</section>';
         affProfilPro +='</div>';
         affProfilPro +='</div>';
         affProfilPro +='</section>';

         $('#content').html(affProfilPro);                
        
    }

function supprimerCompte(){
    contenuPage = "<div class='container'><h1>Voulez-vous réelement supprimer votre comtpe ?</h1><br><br><br><br><br><br>";
    contenuPage += "<p><input type='button' value='Oui' align=center onclick='deleteUser()'></p><br><br>";
    contenuPage += "<p><input type='button' value='Non' onclick='profil();'></p></div>";
    $('#content').html(contenuPage);

}
