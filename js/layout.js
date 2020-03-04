function connexion(){

    $('#content').load('inc/connexion.html');

    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    
    $('#navConnexion').addClass('nav-item active');

}

function inscritption(){

    $('#content').load('inc/inscription.html');

    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    
    $('#navConnexion').addClass('nav-item active');

}

function accueil(){

    $('#content').load('inc/acceuil.html');

    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navAccueil').addClass('nav-item active');

}

function about(){

    $('#content').load('inc/about.html');

    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navAbout').addClass('nav-item active');

}

function services(){

    $('#content').load('inc/services.html');

    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navServices').addClass('nav-item active');

}

function contact(){

    $('#content').load('inc/contact.html');

    $('#navAccueil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navContact').addClass('nav-item active');

}