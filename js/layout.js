function removeClassActive(active){
    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    $('#navProfil').removeClass('nav-item active').addClass('nav-item');
    $('#navEntreprise').removeClass('nav-item active').addClass('nav-item');
    $('#navPriseDeContact').removeClass('nav-item active').addClass('nav-item');

    $('#'+active).addClass('nav-item active');
}

function connexion(){

    $('#content').load('inc/connexion.php');
    removeClassActive('navConnexion');
    
    

}

function preinscritption(){

    $('#content').load('inc/preinscription.php');

    removeClassActive('navConnexion');
    

}

function inscritptionClient(){

    $('#content').load('inc/inscriptionClient.php');

    removeClassActive('navConnexion');
    

}

function inscritptionPro(){

    $('#content').load('inc/inscriptionPro.php');

    removeClassActive('navConnexion');
    

}

function accueil(){

    $('#content').load('inc/accueil.php');

    removeClassActive('navAccueil');
    


}

function about(){

    $('#content').load('inc/about.php');

    removeClassActive('navAbout');
    


}

function services(){

    $('#content').load('inc/services.php');

    removeClassActive('navServices');
    
}

function contact(){

    $('#content').load('inc/contact.php');

    removeClassActive('navContact');
    


}

function profil(){

    $('#content').load('inc/profil.php');

    removeClassActive('navProfil');
    
}

function entreprise(){
    $('#content').load('inc/entreprise.php');

    removeClassActive('navEntreprise');
}

function priseDeContact(){
    $('#content').load('inc/liveTchat/liveTchat.php');

    removeClassActive('navPriseDeContact');
}


function estCo() {
    $('#navConnexion').html('<a class="nav-link" href="phpController/deconnexion.php" id="lienConnexion">Se déconnecter</a>');
    $("#navConnexion").prop("onclick", null).off("click");

}


//listeAnnonce

function affichageListeAnnonces(tabAnnonce){
    nbAnnonces = tabAnnonce.length;
    console.log(tabAnnonce);
    affichageAnnonces = "";

    for (var i = 0; i<nbAnnonces; i++){

    affichageAnnonces +="<div class='card'>";
    affichageAnnonces +="<div class='row'>";
    affichageAnnonces +="<div class='col-md-3 annonce'>";
    affichageAnnonces +="<div class='card-body cc-education-header'>";
    affichageAnnonces +="<div class='h5'>"+ tabAnnonce[i]['nom'] +"</div>";
    affichageAnnonces +="<p>"+ tabAnnonce[i]['nomSect'] +"</p>";
    affichageAnnonces +="<p><img class='img-responsive logoEnt' src='img/clients-logo/YourLogo.png'></p>";
    affichageAnnonces +="</div></div>";
    affichageAnnonces +="<div class='col-md-9'>";
    affichageAnnonces +="<div class='card-body'></div>";
    affichageAnnonces +="<div class='h5'>Annonce</div><br>";
    affichageAnnonces +="<p class='category'>"+ tabAnnonce[i]['services'] +"</p>";
    affichageAnnonces +=" <p>"+ tabAnnonce[i]['description'] +"</p>";
    affichageAnnonces +=" <p><a href='#' onclick='chatContact("+getProViaMail(tabAnnonce[i]['idAdmin'])+");'>Contacter</a><br></p>";
    affichageAnnonces +="</div></div></div></div>";
    }

    

    

    $('#listeAnnonces').html(affichageAnnonces);
}

function afficherConvers(idUser){
    let listConvers="";
    if(compteType=="client"){
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
            listConvers+="<a class='list-group-item list-group-item-action text-black rounded-0' id="+conversCli[i]+" onclick='afficheMsgConvers("+conversCli[i]+","+userId+",\""+pseudoPro+" "+nomEnt+"\");'>";
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

    if(compteType=="professionnel"){
        let conversPro= JSON.parse(getConversPro());
        let nbConvers = (conversPro).length;
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
            listConvers+="<a class='list-group-item list-group-item-action text-black rounded-0' id="+conversPro[i]+" onclick='afficheMsgConvers("+conversPro[i]+","+userId+",\""+pseudoCli+"\");'>";
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
}

function afficheMsgConvers(idConvers, idUserActuel, nomContact){
    let tabMsgConvers=JSON.parse(getMsgConvers(idConvers));
    let fullConver ="";
    var contact;
    $('#nomContact').html('<div class="bg-gray px-4 py-2 bg-light"><p class="h5 mb-0 py-1">'+nomContact+'</p></div><br>');
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
    if(compteType=="client"){
        let conversCli= JSON.parse(getContactCli(idConvers));
            $('#button-addon2').attr("onclick","afficheMsgEnvoye(\""+conversCli[0]['idPro']+"\",\""+idConvers+"\");");
            $('#button-addon3').hide();
    }
    if(compteType=="professionnel"){
        let conversPro= JSON.parse(getContactPro(idConvers));
            $('#button-addon2').attr("onclick","afficheMsgEnvoye(\""+conversPro[0]['idClient']+"\",\""+idConvers+"\");");
            $('#button-addon3').attr("onclick","propositionRdv(\""+conversPro[0]['idClient']+"\",\""+idConvers+"\");");

    }
    var box = document.getElementById('msgConvers');
    box.scrollTop = box.scrollHeight;

}

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

function chatContact(idPro){
    let reponse = checkSiDejaContact(userId, idPro);
    priseDeContact();
    let newConver = "";
    let contact = getNomPro(idPro);
    let ent = getProEnt(idPro);
    let ajd = new Date();
    let date = ajd.getFullYear()+'-'+(ajd.getMonth()+1)+'-'+ajd.getDate()+' '+ajd.getHours()+':'+ajd.getMinutes()+':'+ajd.getSeconds();
    if(reponse == "noConvers"){
        let conv=creationConvers(userId, idPro);
        creationMsgAcceuil(idPro, conv);
        window.location.reload();
    }
    else{
        $('#'+reponse).click();
    }


}

function propositionRdv(cli,conv){
    let bulleDiscussion = "";
    let propRdv = '<div class="container"> <div class="panel-heading">Proposer un rendez-vous</div> <div class="panel-body"> <div class="row"> <div class="col-md-3"> <div class="form-group"> <label class="control-label">Date et heure du rendez-vous</label> <div class="input-group date" id="datetimepicker1"> <input type="text" class="form-control" id="dateRdv"/> <span class="input-group-addon"> <span class="glyphicon glyphicon-calendar"></span> </span> </div> </div> </div> </div> <input type="button" class="btn btn-primary" value="Proposer" id="proposerRdv"> </div> </div> <script> $(function () { $("#datetimepicker1").datetimepicker(); }); $("#datetimepicker1").datetimepicker({ isRTL: false, format: \'dd.mm.yyyy hh:ii\', autoclose:true, language: \'fr\' });</script>';
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
    $('#proposerRdv').attr('onclick','affichePropositionRdv('+cli+','+conv+')');
}

function affichePropositionRdv(cli,conv){
    creationMsgPropositionRdv(cli, conv);
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
