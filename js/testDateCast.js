let date1 = "05/29/2020 8:00 PM";

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

console.log(jour+"/"+mois+"/"+annee+" "+heure+":"+minute+":00");
