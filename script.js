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
//=RECHERCHEX(B11;W82:W86;Y82:Y86)
function calc_ballon_yutampo(typeLogement, ecs){
    console.log(ecs[0].length);
    for(let i = 0; i < ecs[0].length ; i++){
       
        if (typeLogement == ecs[0][i]){//recherche une correspondance dans le tableau ecs
            return ecs[2][i];
        }
    }
    window.alert("pas de correspondance trouvée dans ecs !");
    return 0;
}



//definition des valeurs de base

let coefMajoration = 1.2 //coefficient de majoration 1,2 selon DTU 65.16

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


console.log(ecs[2]);


//zone liste
let hauteurJour = 2.5;
let hauteurNuit = 2.5;
let typeLogement = "T4";
let longEquivFrigo = 25;
let factDegivr = -5;

//valeurs ou je dois encore faire les calculs
//ou comprendre a quoi elles correspondent reellement

let tauxBrassage = 5;
let g8 = 0.8;
let g9 = -5;
let g10 = 20;



//tests des calculs
let g17 = recherche_g17(longEquivFrigo, corrTuyauChauff);
let g18 = recherche_g18(factDegivr, corrDegivr);

let volume = calc_volume(84, 2.5, 47, 2.5);
let debitAirZoneJour = calc_debit_air_jour(84, 2.5, 5);
let debitAirZoneNuit = calc_debit_air_nuit(47, 2.5, 5);
let puissanceJour = calc_puissance_jour(84, 2.5, 0.8, 19, -4);
let puissanceNuit = calc_puissance_jour(47, 2.5, 0.8, 19, -4);
let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);
let ballonYutampo = calc_ballon_yutampo(typeLogement,ecs);

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