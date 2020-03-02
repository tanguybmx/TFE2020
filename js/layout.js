function connexion(){

    $('#content').load('inc/connexion.html');

    $('#navAcceuil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    
    $('#navConnexion').addClass('nav-item active');

}

function inscritption(){

    $('#content').load('inc/inscription.html');

    $('#navAcceuil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    
    $('#navConnexion').addClass('nav-item active');

}

function acceuil(){

    $('#content').load('inc/acceuil.html');

    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navAcceuil').addClass('nav-item active');

}

function about(){

    $('#content').load('inc/about.html');

    $('#navAcceuil').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navAbout').addClass('nav-item active');

}

function services(){

    $('#content').load('inc/services.html');

    $('#navAcceuil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navContact').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navServices').addClass('nav-item active');

}

function contact(){

    $('#content').load('inc/contact.html');

    $('#navAcceuil').removeClass('nav-item active').addClass('nav-item');
    $('#navAbout').removeClass('nav-item active').addClass('nav-item');
    $('#navServices').removeClass('nav-item active').addClass('nav-item');
    $('#navConnexion').removeClass('nav-item active').addClass('nav-item');
    

    $('#navContact').addClass('nav-item active');

}