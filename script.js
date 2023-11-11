//////ecritures des calculs


function calc_volume (surfaceJour, hauteurJour, surfaceNuit, hauteurNuit) {//  m3
    return (surfaceJour*hauteurJour) + (surfaceNuit * hauteurNuit);
};

function calc_debit_air(surface, hauteur, tauxBrassage){//  m3/h
    return (surface * hauteur * tauxBrassage);
}



function calc_puissance(surface, hauteur, g10, tempInt, tempExt){// W
    
    return surface * hauteur * g10 * (tempInt-tempExt);
}


function calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration){//  W
    return ((puissanceJour+puissanceNuit) / g17 / g18) * coefMajoration;
}


function recherche(reference, tableau, indiceRetour){
    for(let i = 0; i< tableau[0].length; i++){
        if(reference == tableau[0][i]){
            return tableau[indiceRetour][i];
        }
    }
    window.alert("pas de ref pr press sonore dans RAD");
    return 0;
}

//definition des valeurs de base

let coefMajoration = 1.2; //coefficient de majoration 1,2 selon DTU 65.16

let surfaceJour = 84;

let surfaceNuit = 47;



//zone tableauxxxxx
let corrTuyauChauff= [
    [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    [1]
];

for (let i = 1; i < corrTuyauChauff[0].length; i++){ //ajoute les facteurs de correction au tableau
    
    corrTuyauChauff[1][i] = corrTuyauChauff[1][i-1] - (0.2/10);
}


let corrDegivr = [
    [-15, -10, -7, -5, 0, 7, 10, 15],
    [0.95, 0.95, 0.89, 0.85, 0.81, 1, 1, 1]
];

let ecs = [
    ["T1", "T2", "T3", "T4", "T5"],
    [50, 100, 150, 200, 300],
    ["TAW 190", "TAW 190", "TAW 190", "TAW 270", "TAW 270"]
];

let tableauRamPuissance = [
    ["RAM-53NYP3E" , "RAM-70NYP4E", "RAM-90NYP5E"],
    [4997, 6247, 8084]
];

let tableauRAD = [
    ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
    [5, 6, 7],
    [38, 35, 35],
    [510, 1140, 1140]
];

let tableauUnitPdispJour = [
    ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
    [3.5, 5, 6],
    [3160, 4777, 4997]
];

let tableauUnitPdispNuit = [
    ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
    [3.5, 5, 6],
    [3160, 4777, 4997]
];


console.log(ecs[2]);


//zone liste
let hauteurJour = 2.5;
let hauteurNuit = 2.5;
let typeLogement = "T4";

let reglemThermique = "RT2012";
let tempExt = -4;
let tempInt = 19;

let longEquivFrigo = 25;
let factDegivr = -5;

//valeurs ou je dois encore faire les calculs
//ou comprendre a quoi elles correspondent reellement

let tauxBrassage = 5;
let g10 = 0.8;
let g11 = -5;
let g12 = 20;
let groupeExtRam = "RAM-90NYP5E";

let tailleGainJour = "RAD-50RPE";
let tailleGainNuit = "RAD-50RPE";

let g17 = recherche(longEquivFrigo, corrTuyauChauff,1);
let g18 = recherche(factDegivr, corrDegivr,1);

let volume = calc_volume(surfaceJour, hauteurJour, surfaceNuit, hauteurNuit);
let debitAirZoneJour = calc_debit_air(surfaceJour, hauteurJour, tauxBrassage);
let debitAirZoneNuit = calc_debit_air(surfaceNuit, hauteurNuit, tauxBrassage);
let puissanceJour = calc_puissance(surfaceJour, hauteurJour, g10, tempInt, tempExt);
let puissanceNuit = calc_puissance(surfaceNuit, hauteurNuit, g10, tempInt, tempExt);
let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);

let ballonYutampo = recherche(typeLogement,ecs,2);
let puissDelivreeRam = recherche(groupeExtRam, tableauRamPuissance,1);

let puissDelivGainJour = recherche(tailleGainJour,tableauUnitPdispJour,2);
let qvJour = recherche(tailleGainJour,tableauRAD,3);
let pressionSonoreJour = recherche(tailleGainJour,tableauRAD,2);

let puissDelivGainNuit = recherche(tailleGainNuit,tableauUnitPdispNuit,2);
let qvNuit = recherche(tailleGainNuit,tableauRAD,3);
let pressionSonoreNuit = recherche(tailleGainNuit,tableauRAD,2);

//affichage des tests
console.log("volume : " + volume);
console.log("debitairzonejour : " + debitAirZoneJour);
console.log("debitairzonenuit : " + debitAirZoneNuit);
console.log("puissance_satisf_jour : " + puissanceJour);
console.log("puissance_satisf_nuit : " + puissanceNuit);
console.log("puissance a installer : " + puissanceInstalle);

console.log("g17 : " + g17);
console.log("g18 : " + g18);

console.log("ballon yutampo :" + ballonYutampo);
console.log("puissance delivre ram = " + puissDelivreeRam);

console.log("tests finaux pr aujourdhui raraarar");
console.log(puissDelivGainJour, qvJour, pressionSonoreJour, puissDelivGainNuit, qvNuit, pressionSonoreNuit);