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


function calc_puissance_jour(surfaceJour, hauteurJour, g10, tempInt, tempExt){// W
    console.log(surfaceJour, hauteurJour, g10, tempInt, tempExt);
    return surfaceJour * hauteurJour * g10 * (tempInt-tempExt);
}

function calc_puissance_nuit(surfaceNuit, hauteurNuit, g10, tempInt, tempExt){// W
    return surfaceNuit * hauteurNuit * g10 * (tempInt-tempExt);
}



function calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration){//  W
    return ((puissanceJour+puissanceNuit) / g17 / g18) * coefMajoration;
}

function recherche_g17(longEquivFrigo, corrTuyauChauff){ 
    for(let i = 0; i < corrTuyauChauff[0].length ; i++){
        if (longEquivFrigo === corrTuyauChauff[0][i]){//recherche une correspondance dans le tableau de correction tuyau/chaufferie
            return corrTuyauChauff[1][i];
        }
    }
    window.alert("pas de correspondance trouvée pour g17 !");
    return 0;
}


function recherche_g18(factDegivr, corrDegivr){
    for(let i = 0; i < corrDegivr[0].length ; i++){
        if (factDegivr === corrDegivr[0][i]){//recherche une correspondance dans le tableau de correction degivrage
            return corrDegivr[1][i];
        }
    }
    window.alert("pas de correspondance trouvée pour g18 !");
    return 0;
}
//
function recherche_ballon_yutampo(typeLogement, ecs){
    for(let i = 0; i < ecs[0].length ; i++){
       
        if (typeLogement == ecs[0][i]){//recherche une correspondance dans le tableau ecs
            return ecs[2][i];
        }
    }
    window.alert("pas de correspondance trouvée dans ecs !");
    return 0;
}

//=RECHERCHEX(E26;P130:R130;P131:R131)
function recherche_P_delivree_RAM(groupeExtRam, tableauRamPuissance){
    for(let i = 0; i < tableauRamPuissance[0].length ; i++){
       
        if (groupeExtRam == tableauRamPuissance[0][i]){//recherche une correspondance dans le tableau
            return tableauRamPuissance[1][i];
        }
    }
    window.alert("pas de correspondance trouvée pour RAM/P !");
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



//tests des calculs
//let g18 = recherche_g18(factDegivr, corrDegivr);
//let g17 = recherche_g17(longEquivFrigo, corrTuyauChauff);
//
//let volume = calc_volume(84, 2.5, 47, 2.5);
//let debitAirZoneJour = calc_debit_air_jour(84, 2.5, 5);
//let debitAirZoneNuit = calc_debit_air_nuit(47, 2.5, 5);
//let puissanceJour = calc_puissance_jour(84, 2.5, 0.8, 19, -4);
//let puissanceNuit = calc_puissance_jour(47, 2.5, 0.8, 19, -4);
//let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);
//let ballonYutampo = calc_ballon_yutampo(typeLogement,ecs);

let g17 = recherche_g17(longEquivFrigo, corrTuyauChauff);
let g18 = recherche_g18(factDegivr, corrDegivr);

let volume = calc_volume(surfaceJour, hauteurJour, surfaceNuit, hauteurNuit);
let debitAirZoneJour = calc_debit_air_jour(surfaceJour, hauteurJour, tauxBrassage);
let debitAirZoneNuit = calc_debit_air_nuit(surfaceNuit, hauteurNuit, tauxBrassage);
let puissanceJour = calc_puissance_jour(surfaceJour, hauteurJour, g10, tempInt, tempExt);
let puissanceNuit = calc_puissance_nuit(surfaceNuit, hauteurNuit, g10, tempInt, tempExt);
let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);
let ballonYutampo = recherche_ballon_yutampo(typeLogement,ecs);
let puissDelivreeRam = recherche_P_delivree_RAM(groupeExtRam, tableauRamPuissance);
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