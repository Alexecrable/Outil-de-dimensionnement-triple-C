//////ecritures des calculs


function calc_volume (surfaceJour, hauteurJour, surfaceNuit, hauteurNuit) {//  m3
    return (surfaceJour*hauteurJour) + (surfaceNuit * hauteurNuit);
}

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
    window.alert("pas de ref trouvé pr " + reference);
    return 0;
}


//=SI(E8<P128;P125;SI(E8<Q128;Q125;SI(E8<R128;R125;"Sous dimensionné - changer de système")))
function calc_taille_gain_jour(debitAirZoneJour, tableauRAD){
    if(debitAirZoneJour < 510){
        return tableauRAD[0][0];
    }
    else{
        if(debitAirZoneJour < 1140){
            return tableauRAD[0][1];
        }
        else{
            return tableauRAD[0][2];
        }
    }
}

function calc_brassage_reel(qv, surface, hauteur){
    return (qv / (surface * hauteur));
}

//definition des valeurs de base

let coefMajoration = 1.2; //coefficient de majoration 1,2 selon DTU 65.16

let surfaceJour = 84;

let surfaceNuit = 47;

//zone liste
let hauteurJour = 2.5;
let hauteurNuit = 2.5;
let typeLogement = "T4";

let reglemThermique = "RT2012";
let tempExt = -4;
let tempInt = 19;

let longEquivFrigo = 25;
let factDegivr = -5;


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

let refGvBrass = [
    ["RE2020", "RT2012", "RT2005", "Construction > 1980"],
    [0.6, 0.8, 1, 1.4],
    [4, 5, 6]
];

let refRadGpeExt = [
    ["RAD-35RPE", "RAD-50RPE"],
    ["RAM-70NYP4E", "RAM-90NYP5E"]
];

let refRadJourNuit = [
    ["RAD-35RPE", "RAD-50RPE"],
    ["RAD-35RPE", "RAD-50RPE"]
];

let refTextTgse = [
    [-4, -5, -6, -7, -8, -9],
    [-5, -5, -7, -7, -10, -10],
    
];

let refTinTbs = [
    [19, 20, 21, 22],
    [20, 20, 22, 22]
];

let tableauResTgse = [
    [-15, -10, -7, -5, 0, 7, 10, 15],
    [1, 2, 3, 4, 5, 6, 7, 8]
];

let tableauResTbs = [
    [16, 18, 20, 22, 24],
    [1, 2, 3, 4, 5]
];



//calculs
let volume = calc_volume(surfaceJour, hauteurJour, surfaceNuit, hauteurNuit);
let tauxBrassage = recherche(reglemThermique, refGvBrass, 2);
let debitAirZoneJour = calc_debit_air(surfaceJour, hauteurJour, tauxBrassage);
let debitAirZoneNuit = calc_debit_air(surfaceNuit, hauteurNuit, tauxBrassage);

let g10 = recherche(reglemThermique, refGvBrass, 1);
let g11 = recherche(tempExt, refTextTgse, 1);
let g12 = recherche(tempInt, refTinTbs, 1);

let puissanceJour = calc_puissance(surfaceJour, hauteurJour, g10, tempInt, tempExt);
let puissanceNuit = calc_puissance(surfaceNuit, hauteurNuit, g10, tempInt, tempExt);

let g17 = recherche(longEquivFrigo, corrTuyauChauff,1);
let g18 = recherche(factDegivr, corrDegivr,1);

let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);

let ballonYutampo = recherche(typeLogement,ecs,2);

let tailleGainJour = calc_taille_gain_jour(debitAirZoneJour, tableauRAD);

let puissDelivGainJour = recherche(tailleGainJour,tableauUnitPdispJour,2);
let qvJour = recherche(tailleGainJour,tableauRAD,3);
let pressionSonoreJour = recherche(tailleGainJour,tableauRAD,2);

let tailleGainNuit = recherche(tailleGainJour, refRadJourNuit, 1);

let puissDelivGainNuit = recherche(tailleGainNuit,tableauUnitPdispNuit,2);
let qvNuit = recherche(tailleGainNuit,tableauRAD,3);
let pressionSonoreNuit = recherche(tailleGainNuit,tableauRAD,2);

let groupeExtRam = recherche(tailleGainJour, refRadGpeExt, 1);
let puissDelivreeRam = recherche(groupeExtRam, tableauRamPuissance,1);



let resTsgeJour = recherche(g11, tableauResTgse, 1);
let resTbsJour = recherche(g12, tableauResTbs, 1);

let resTsgeNuit = recherche(g11, tableauResTgse, 1);
let resTbsNuit = recherche(g12, tableauResTbs, 1);


let brassageReelJour = calc_brassage_reel(qvJour, surfaceJour, hauteurJour);
let brassageReelNuit = calc_brassage_reel(qvNuit, surfaceNuit, hauteurNuit);

//verif accoustique
if(pressionSonoreJour > 35){
    window.alert("attention accoustique jour !")
}
if(pressionSonoreNuit > 35){
    window.alert("attention accoustique nuit !")
}

console.log("test : " + brassageReelJour);
console.log("test : " + brassageReelNuit);



//creation du BIG TABLEAU


