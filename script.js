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
//tests des calculs

console.log("volume : " + calc_volume(84, 2.5, 47, 2.5));
console.log("debitairzonejour : " + calc_debit_air_jour(84, 2.5, 5));
console.log("debitairzonenuit : " + calc_debit_air_nuit(47, 2.5, 5));
console.log("puissance_satisf_jour : " + calc_puissance_jour(84, 2.5, 0.8, 19, -4));
console.log("puissance_satisf_jour : " + calc_puissance_jour(47, 2.5, 0.8, 19, -4));

