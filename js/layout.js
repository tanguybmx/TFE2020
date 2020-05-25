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
    affichageAnnonces +=" <p><a href='#' onclick='priseDeContact();'>Contacter</a><br></p>";
    affichageAnnonces +="</div></div></div></div>";
    }

    

    

    $('#listeAnnonces').html(affichageAnnonces);
}

