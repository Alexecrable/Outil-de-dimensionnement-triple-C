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


function recherche_p_delivree_RAM(groupeExtRam, tableauRamPuissance){
    for(let i = 0; i < tableauRamPuissance[0].length ; i++){
       
        if (groupeExtRam == tableauRamPuissance[0][i]){//recherche une correspondance dans le tableau
            return tableauRamPuissance[1][i];
        }
    }
    window.alert("pas de correspondance trouvée pour RAM/P !");
    return 0;
}

//=RECHERCHEX(E28;W40:W46;Y40:Y46)
function recherche_p_delivree_gainable_jour(tailleGainJour,tableauUnitPdispJour){
    for (let i = 0; i < tableauUnitPdispJour[0].length; i++){
        if(tailleGainJour == tableauUnitPdispJour[0][i]){
            return tableauUnitPdispJour[2][i];
        }
    }
    window.alert("pas de ref trouvée pr unit/P dispo jour");
    return 0;
}





//=RECHERCHEX(E28;P125:R125;P128:R128)
function recherche_qv_delivree_gainable_jour(tailleGainJour,tableauRAD){
    for(let i = 0; i< tableauRAD[0].length; i++){
        if(tailleGainJour == tableauRAD[0][i]){
            return tableauRAD[3][i];
        }
    }
    window.alert("pas de ref pr qv dans RAD");
    return 0;
}
//=RECHERCHEX(E28;P125:R125;P127:R127)
function recherche_pression_sonore_gainable_jour(tailleGainJour,tableauRAD){
    for(let i = 0; i< tableauRAD[0].length; i++){
        if(tailleGainJour == tableauRAD[0][i]){
            return tableauRAD[2][i];
        }
    }
    window.alert("pas de ref pr press sonore dans RAD");
    return 0;
}
//=RECHERCHEX(E32;W63:W68;Y63:Y68)
function recherche_p_delivree_gainable_nuit(tailleGainNuit,tableauUnitPdispNuit){
    for (let i = 0; i < tableauUnitPdispNuit[0].length; i++){
        if(tailleGainNuit == tableauUnitPdispNuit[0][i]){
            return tableauUnitPdispNuit[2][i];
        }
    }
    window.alert("pas de ref trouvée pr unit/P dispo nuit");
    return 0;
}
//=RECHERCHEX(E32;P125:R125;P128:R128)
function recherche_qv_delivree_gainable_nuit(tailleGainNuit,tableauRAD){
    for(let i = 0; i< tableauRAD[0].length; i++){
        if(tailleGainNuit == tableauRAD[0][i]){
            return tableauRAD[3][i];
        }
    }
    window.alert("pas de ref pr press sonore dans RAD");
    return 0;
}
//=RECHERCHEX(E32;P125:R125;P127:R127)
function recherche_pression_sonore_gainable_nuit(tailleGainNuit,tableauRAD){
    for(let i = 0; i< tableauRAD[0].length; i++){
        if(tailleGainNuit == tableauRAD[0][i]){
            return tableauRAD[2][i];
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

let g17 = recherche_g17(longEquivFrigo, corrTuyauChauff);
let g18 = recherche_g18(factDegivr, corrDegivr);

let volume = calc_volume(surfaceJour, hauteurJour, surfaceNuit, hauteurNuit);
let debitAirZoneJour = calc_debit_air(surfaceJour, hauteurJour, tauxBrassage);
let debitAirZoneNuit = calc_debit_air(surfaceNuit, hauteurNuit, tauxBrassage);
let puissanceJour = calc_puissance(surfaceJour, hauteurJour, g10, tempInt, tempExt);
let puissanceNuit = calc_puissance(surfaceNuit, hauteurNuit, g10, tempInt, tempExt);
let puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);
let ballonYutampo = recherche_ballon_yutampo(typeLogement,ecs);
let puissDelivreeRam = recherche_p_delivree_RAM(groupeExtRam, tableauRamPuissance);

let puissDelivGainJour = recherche_p_delivree_gainable_jour(tailleGainJour,tableauUnitPdispJour);
let qvJour = recherche_qv_delivree_gainable_jour(tailleGainJour,tableauRAD);
let pressionSonoreJour = recherche_pression_sonore_gainable_jour(tailleGainJour,tableauRAD);

let puissDelivGainNuit = recherche_p_delivree_gainable_nuit(tailleGainNuit,tableauUnitPdispNuit);
let qvNuit = recherche_qv_delivree_gainable_nuit(tailleGainNuit,tableauRAD);
let pressionSonoreNuit = recherche_pression_sonore_gainable_nuit(tailleGainNuit,tableauRAD);

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