//////ecritures des calculs

function calc_volume_m3 (surfaceJour, hauteurJour, surfaceNuit, hauteurNuit) {
    return (surfaceJour*hauteurJour) + (surfaceNuit * hauteurNuit);
};

function calc_debit_air_jour(surfaceJour, hauteurJour, tauxBrassage){
    return (surfaceJour * hauteurJour * tauxBrassage);
}


//tests des calculs


//affichage des tests
console.log("volume_m3 : " + calc_volume_m3(84, 2.5, 47, 2.5));
console.log("debitairzonejour : " + calc_debit_air_jour(84, 2.5, 5));


