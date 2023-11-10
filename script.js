//////ecritures des calculs


function calc_volume (surfaceJour, hauteurJour, surfaceNuit, hauteurNuit) {//  m3
    return (surfaceJour*hauteurJour) + (surfaceNuit * hauteurNuit);
};

function calc_debit_air_jour(surfaceJour, hauteurJour, tauxBrassage){//  m3/h
    return (surfaceJour * hauteurJour * tauxBrassage);
}

function calc_debit_air_nuit(surfaceNuit, hauteurNuit, tauxBrassage){//  m3/h
    return (surfaceNuit * hauteurNuit * tauxBrassage);
}


function calc_puissance_jour(surfaceJour, hauteurJour, G10, tempInt, tempExt){// W
    return surfaceJour * hauteurJour * G10 * (tempInt-tempExt);
}

function calc_puissance_nuit(surfaceNuit, hauteurNuit, G10, tempInt, tempExt){// W
    return surfaceNuit * hauteurNuit * G10 * (tempInt-tempExt);
}


//=((E13+E14)/G17/G18)*1,2
function calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18){
    return ((puissanceJour+puissanceNuit) / g17 / g18) * 1.2;
}

//definition des valeurs de base

surfaceJour = 84;
hauteurJour = 2.5;
surfaceNuit = 47;
hauteurNuit = 2.5;

//valeurs ou je dois encore faire les calculs 

tauxBrassage = 5;
g8 = 0.8;
g9 = -5;
g10 = 20;
g17 = 0.94;
g18 = 0.85;

//tests des calculs

let volume = calc_volume(84, 2.5, 47, 2.5);
let debitAirZoneJour = calc_debit_air_jour(84, 2.5, 5);
let debitAirZoneNuit = calc_debit_air_nuit(47, 2.5, 5);
let puissanceJour = calc_puissance_jour(84, 2.5, 0.8, 19, -4);
let puissanceNuit = calc_puissance_jour(47, 2.5, 0.8, 19, -4);
let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18);


//affichage des tests
console.log("volume : " + volume);
console.log("debitairzonejour : " + debitAirZoneJour);
console.log("debitairzonenuit : " + debitAirZoneNuit);
console.log("puissance_satisf_jour : " + puissanceJour);
console.log("puissance_satisf_nuit : " + puissanceNuit);
console.log("puissance a installer : " + puissanceInstalle);

