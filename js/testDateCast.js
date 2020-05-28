//format affichage
function affichageDateFormatEu(date){
let date1 = date;

let mois = date1.substr(0,2);
let jour = date1.substr(3,2);
let annee = date1.substr(6,4);
let heure = date1.substr(11,1);
let minute = date1.substr(13,2);
let amOrPm = date1.substr(16,2);
let tabPM = ["13","14","15","16","17","18","19","20","21","22","23","00"];
if(amOrPm == "PM"){
    heure = tabPM[(heure-1)];
}
    let formatAffichageEu = jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":00";
    return formatAffichageEu;
}

function formatDateDb(date){
//format a envoyé à la db: 2020-05-29 6:00:00; obtenu avec la fonction: 2020-05-29 6:00:00
let date2 = date;
let jour2 = date2.substr(3,2);
let mois2 = date2.substr(0,2);
let annee2 = date2.substr(6,4);
let heure2 = date2.substr(11,1);
let minute2 = date2.substr(13,2);

let formatDB = annee2+"-"+mois2+"-"+jour2+" "+heure2+":"+minute2+":"+"00";
return formatDB;
}