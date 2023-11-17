
//creation du BIG TABLEAU
const tableaux = 
{
    "refRadJourNuit" : [
        ["RAD-35RPE", "RAD-50RPE"],
        ["RAD-35RPE", "RAD-50RPE"]
    ],

    "tableauUnitPdispNuit" : [
        ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
        [3.5, 5, 6],
        [3160, 4777, 4997]
    ],

    "tableauUnitPdispJour" : [
        ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
        [3.5, 5, 6],
        [3160, 4777, 4997]
    ],

    "tableauRAD" : [
        ["RAD-35RPE", "RAD-50RPE", "RAD-60RPE"],
        [5, 6, 7],
        [38, 35, 35],
        [510, 1140, 1140]
    ],

    "tableauRamPuissance" : [
        ["RAM-53NYP3E" , "RAM-70NYP4E", "RAM-90NYP5E"],
        [4997, 6247, 8084]
    ],
    

    "refRadGpeExt" : [
        ["RAD-35RPE", "RAD-50RPE"],
        ["RAM-70NYP4E", "RAM-90NYP5E"]
    ],
    
    "tableauResTgse" : [
        [-15, -10, -7, -5, 0, 7, 10, 15],
        [1, 2, 3, 4, 5, 6, 7, 8]
    ],
    "tableauResTbs" : [
        [16, 18, 20, 22, 24],
        [1, 2, 3, 4, 5]
    ],
    "refTextTgse" : [
        [-4, -5, -6, -7, -8, -9],
        [-5, -5, -7, -7, -10, -10]
    ],
    "refTinTbs" : [
        [19, 20, 21, 22],
        [20, 20, 22, 22]
    ],
    "ecs" : [
        ["T1", "T2", "T3", "T4", "T5"],
        ["TAW 190", "TAW 190", "TAW 190", "TAW 270", "TAW 270"]
    ],
    "refGvBrass" : [
        ["RE2020", "RT2012", "RT2005", "Construction > 1980"],
        [0.6, 0.8, 1, 1.4],
        [4,5,6]
    ],

    "corrTuyauChauff" : [
        [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        [1, 0.95, 0.96, 0.94, 0.92, 0.9, 0.88, 0.86, 0.84, 0.82, 0.8]
    ],
    "corrDegivr" : [
        [-15, -10, -7, -5, 0, 7, 10, 15],
        [0.95, 0.95, 0.89, 0.85, 0.81, 1, 1, 1]
    ],
    

    "RAM-53NYP3E" : [
        [3460, 4204, 4650, 4974, 5691, 6732, 6955, 7327],
        [3478, 4225, 4674, 4972, 5720, 6766, 6990, 7379],
        [3495, 4246, 4697, 4997, 5749, 6800, 7025, 7401],
        [3513, 4268, 4721, 5022, 5777, 6814, 7039, 7416],
        [3530, 4289, 4744, 5047, 5806, 6827, 7053, 7430]
    ],
    "RAM-70NYP4E" : [
        [4325, 5255, 5813, 6184, 7114, 8415, 8694, 9159],
        [4347, 5281, 5842, 6216, 7150, 8458, 8738, 9223],
        [4369, 5308, 5871, 6247, 7186, 8500, 8782, 9251],
        [4391, 5335, 5901, 6278, 7222, 8517, 8799, 9270],
        [4413, 5361, 5930, 6309, 7258, 8534, 8817, 9288]
    ],
    "RAM-90NYP5E" : [
        [5598, 6800, 7522, 8003, 9206, 10890, 11251, 11852],
        [5626, 6835, 7560, 8044, 9253, 10945, 11308, 11936],
        [5654, 6869, 7598, 8084, 9299, 11000, 11364, 11972],
        [5682, 6904, 7636, 8125, 9346, 11022, 11387, 11996],
        [5711, 6938, 7674, 8165, 9392, 11044, 11410, 12020]
    ],
    "1,5" : [
        [1018, 1236, 1368, 1455, 1674, 1980, 2206, 2546],
        [1023, 1243, 1375, 1462, 1682, 1990, 2198, 2170],
        [1028, 1249, 1381, 1470, 1691, 2000, 2066, 2177],
        [1033, 1255, 1388, 1477, 1699, 2004, 2070, 2181],
        [1038, 1261, 1395, 1485, 1708, 2008, 2075, 2185]
    ],
    "1,8" : [
        [1272, 1546, 1710, 1819, 2092, 2475, 2758, 3183],
        [1279, 1553, 1718, 1828, 2103, 2488, 2748, 2713],
        [1285, 1561, 1727, 1837, 2113, 2500, 2583, 2721],
        [1291, 1569, 1735, 1846, 2124, 2505, 2588, 2726],
        [1298, 1577, 1744, 1856, 2135, 2510, 2593, 2732]
    ],
    "2,5" : [
        [1730, 2102, 2325, 2474, 2846, 3366, 3750, 4328],
        [1739, 2113, 2337, 2486, 2860, 3383, 3737, 3689],
        [1748, 2123, 2349, 2499, 2874, 3400, 3513, 3700],
        [1756, 2134, 2360, 2511, 2889, 3407, 3520, 3708],
        [1765, 2144, 2372, 2524, 2903, 3414, 3527, 3715]
    ],
    "3,5" : [
        [2188, 2658, 2940, 3129, 3599, 4257, 4743, 5474],
        [2199, 2672, 2955, 3144, 3617, 4279, 4726, 4666],
        [2210, 2685, 2970, 3160, 3635, 4300, 4442, 4680],
        [2221, 2699, 2985, 3176, 3653, 4309, 4451, 4689],
        [2232, 2712, 3000, 3192, 3671, 4317, 4460, 4699]
    ],
    "4,2" : [
        [3308, 4018, 4445, 4729, 5440, 6435, 7170, 8275],
        [3324, 4039, 4467, 4753, 5467, 6468, 7144, 7053],
        [3341, 4059, 4490, 4777, 5495, 6500, 6715, 7074],
        [3358, 4079, 4512, 4801, 5522, 6513, 6729, 7088],
        [3375, 4100, 4535, 4825, 5550, 6526, 6742, 7103]
    ],
    "5" : [
        [3308, 4018, 4445, 4729, 5440, 6435, 7170, 8275],
        [3324, 4039, 4467, 4753, 5467, 6468, 7144, 7053],
        [3341, 4059, 4490, 4777, 5495, 6500, 6715, 7074],
        [3358, 4079, 4512, 4801, 5522, 6513, 6729, 7088],
        [3375, 4100, 4535, 4825, 5550, 6526, 6742, 7103]
    ],
    "6" : [
        [3460, 4204, 4650, 4947, 5691, 6732, 7500, 8656],
        [3478, 4225, 4674, 4972, 5720, 6766, 7473, 7379],
        [3495, 4246, 4697, 4997, 5749, 6800, 7025, 7401],
        [3513, 4268, 4721, 5022, 5777, 6814, 7039, 7416],
        [3530, 4289, 4744, 5047, 5806, 6827, 7053, 7430]
    ]

};

//////ecritures des calculs


function calc_volume (surfaceJour, hauteurJour, surfaceNuit, hauteurNuit) {//  m3

    let res = (surfaceJour*hauteurJour) + (surfaceNuit * hauteurNuit);
    if (res === Math.floor(res)){
        return res;
    }
    else{
        return res.toFixed(2);
    }
}

function calc_debit_air(surface, hauteur, tauxBrassage){//  m3/h
    let res = (surface * hauteur * tauxBrassage);
    if (res === Math.floor(res)){
        return res;
    }
    else{
        return res.toFixed(2);
    }
}



function calc_puissance(surface, hauteur, g10, tempInt, tempExt){// W
    
    let res = surface * hauteur * g10 * (tempInt-tempExt);
    if (res === Math.floor(res)){
        return res;
    }
    else{
        return res.toFixed(2);
    }
}


function calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration){//  W
    let res = ((puissanceJour+puissanceNuit) / g17 / g18) * coefMajoration;
    if (res === Math.floor(res)){
        return res;
    }
    else{
        return res.toFixed(2);
    }
}


function recherche(reference, tableau, indiceretour){
    for(let i = 0; i< tableau[0].length; i++){
        
        if(reference == tableau[0][i]){
            return tableau[indiceretour][i];
        }
    }
    window.alert("pas de ref trouvé pr " + reference);
    return 0;
}

function recherche2(reference, tableau, tableau2){
    console.log(tableau, tableau2);
    for(let i = 0; i< tableau.length; i++){
        
        if(reference == tableau[i]){
            return tableau2[i];
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
    let res = (qv / (surface * hauteur));

    if (res === Math.floor(res)){
        return res;
    }
    else{
        return res.toFixed(2);
    }
}


function calculs(surfaceJour, surfaceNuit, hauteurJour, hauteurNuit, typeLogement){

    volume = calc_volume(surfaceJour, hauteurJour, surfaceNuit, hauteurNuit);
    tauxBrassage = recherche(reglemThermique, tableaux.refGvBrass, 2);
    debitAirZoneJour = calc_debit_air(surfaceJour, hauteurJour, tauxBrassage);
    debitAirZoneNuit = calc_debit_air(surfaceNuit, hauteurNuit, tauxBrassage);
    
    g10 = recherche(reglemThermique, tableaux.refGvBrass, 1);
    g11 = recherche(tempExt, tableaux.refTextTgse, 1);
    g12 = recherche(tempInt, tableaux.refTinTbs, 1);
    
    puissanceJour = calc_puissance(surfaceJour, hauteurJour, g10, tempInt, tempExt);
    puissanceNuit = calc_puissance(surfaceNuit, hauteurNuit, g10, tempInt, tempExt);
    
    g17 = recherche(longEquivFrigo, tableaux.corrTuyauChauff,1);
    g18 = recherche(factDegivr, tableaux.corrDegivr, 1);
    
    
    puissanceInstalle = calc_puissance_a_installer(puissanceJour, puissanceNuit, g17, g18, coefMajoration);
    
    ballonYutampo = recherche(typeLogement,tableaux.ecs,1);
    
    tailleGainJour = calc_taille_gain_jour(debitAirZoneJour, tableaux.tableauRAD);
    
    puissDelivGainJour = recherche(tailleGainJour,tableaux.tableauUnitPdispJour,2);
    qvJour = recherche(tailleGainJour,tableaux.tableauRAD,3);
    pressionSonoreJour = recherche(tailleGainJour,tableaux.tableauRAD,2);
    
    tailleGainNuit = recherche(tailleGainJour, tableaux.refRadJourNuit, 1);
    
    puissDelivGainNuit = recherche(tailleGainNuit,tableaux.tableauUnitPdispNuit,2);
    qvNuit = recherche(tailleGainNuit,tableaux.tableauRAD,3);
    pressionSonoreNuit = recherche(tailleGainNuit,tableaux.tableauRAD,2);
    
    groupeExtRam = recherche(tailleGainJour, tableaux.refRadGpeExt, 1);
    puissDelivreeRam = recherche(groupeExtRam, tableaux.tableauRamPuissance,1);
    
    
    
    resTsgeJour = recherche(g11, tableaux.tableauResTgse, 1);
    resTbsJour = recherche(g12, tableaux.tableauResTbs, 1);
    
    resTsgeNuit = recherche(g11, tableaux.tableauResTgse, 1);
    resTbsNuit = recherche(g12, tableaux.tableauResTbs, 1);
    
    
    brassageReelJour = calc_brassage_reel(qvJour, surfaceJour, hauteurJour);
    brassageReelNuit = calc_brassage_reel(qvNuit, surfaceNuit, hauteurNuit);
    
    //verif accoustique
    if(pressionSonoreJour > 35){
        window.alert("attention accoustique jour !")
    }
    if(pressionSonoreNuit > 35){
        window.alert("attention accoustique nuit !")
    }
    
    //creation page web
    
    
    
    
    
    
    console.log(
        "volume : " + volume + "\n" +
        "tauxBrassage : " + tauxBrassage + "\n" +
        "debitAirZoneJour : " + debitAirZoneJour + "\n" +
        "debitAirZoneNuit : " + debitAirZoneNuit + "\n" +
        "g10 : " + g10 + "\n" +
        "g11 : " + g11 + "\n" +
        "g12 : " + g12 + "\n" +
        "puissanceJour : " + puissanceJour + "\n" +
        "puissanceNuit : " + puissanceNuit + "\n" +
        "g17 : " + g17 + "\n" +
        "g18 : " + g18 + "\n" +
        "puissanceInstalle : " + puissanceInstalle + "\n" +
        "ballonYutampo : " + ballonYutampo + "\n" +
        "tailleGainJour : " + tailleGainJour + "\n" +
        "puissDelivGainJour : " + puissDelivGainJour + "\n" +
        "qvJour : " + qvJour + "\n" +
        "pressionSonoreJour : " + pressionSonoreJour + "\n" +
        "tailleGainNuit : " + tailleGainNuit + "\n" +
        "puissDelivGainNuit : " + puissDelivGainNuit + "\n" +
        "qvNuit : " + qvNuit + "\n" +
        "pressionSonoreNuit : " + pressionSonoreNuit + "\n" +
        "groupeExtRam : " + groupeExtRam + "\n" +
        "puissDelivreeRam : " + puissDelivreeRam + "\n" +
        "resTsgeJour : " + resTsgeJour + "\n" +
        "resTbsJour : " + resTbsJour + "\n" +
        "resTsgeNuit : " + resTsgeNuit + "\n" +
        "resTbsNuit : " + resTbsNuit + "\n" +
        "brassageReelJour : " + brassageReelJour + "\n" +
        "brassageReelNuit : " + brassageReelNuit + "\n" 
    );

    document.querySelector("#Volume").textContent = volume;
    document.querySelector("#tauxBrassage").textContent = tauxBrassage;
    document.querySelector("#debitAirZoneJour").textContent = debitAirZoneJour;
    document.querySelector("#debitAirZoneNuit").textContent = debitAirZoneNuit;
    document.querySelector("#g10").textContent = g10;
    document.querySelector("#g11").textContent = g11;
    document.querySelector("#g12").textContent = g12;
    document.querySelector("#puissanceJour").textContent = puissanceJour;
    document.querySelector("#puissanceNuit").textContent = puissanceNuit;
    document.querySelector("#g17").textContent = g17;
    document.querySelector("#g18").textContent = g18;
    document.querySelector("#puissanceInstalle").textContent = puissanceInstalle;
    document.querySelector("#ballonYutampo").textContent = ballonYutampo;
    document.querySelector("#tailleGainJour").textContent = tailleGainJour;
    document.querySelector("#puissDelivGainJour").textContent = puissDelivGainJour;
    document.querySelector("#qvJour").textContent = qvJour;
    document.querySelector("#pressionSonoreJour").textContent = pressionSonoreJour;
    document.querySelector("#tailleGainNuit").textContent = tailleGainNuit;
    document.querySelector("#puissDelivGainNuit").textContent = puissDelivGainNuit;
    document.querySelector("#qvNuit").textContent = qvNuit;
    document.querySelector("#pressionSonoreNuit").textContent = pressionSonoreNuit;
    document.querySelector("#groupeExtRam").textContent = groupeExtRam;
    document.querySelector("#puissDelivreeRam").textContent = puissDelivreeRam;
    document.querySelector("#resTsgeJour").textContent = resTsgeJour;
    document.querySelector("#resTbsJour").textContent = resTbsJour;
    document.querySelector("#resTsgeNuit").textContent = resTsgeNuit;
    document.querySelector("#resTbsNuit").textContent = resTbsNuit;
    document.querySelector("#brassageReelJour").textContent = brassageReelJour;
    document.querySelector("#brassageReelNuit").textContent = brassageReelNuit;

}



//initialisation 

let longEquivFrigo = 25;
let factDegivr = -5;

let coefMajoration = 1.2; //coefficient de majoration 1,2 selon DTU 65.16


let surfaceJour;

let surfaceNuit;
let hauteurJour;
let hauteurNuit;

let typeLogement;

let reglemThermique;

let tempExt;
let tempInt;
////////////////


let volume;
let tauxBrassage;
let debitAirZoneJour;
let debitAirZoneNuit;

let g10;
let g11;
let g12;

let puissanceJour;
let puissanceNuit;

let g17;
let g18;

let puissanceInstalle;

let ballonYutampo;

let tailleGainJour;

let puissDelivGainJour;
let qvJour;
let pressionSonoreJour;

let tailleGainNuit;

let puissDelivGainNuit;
let qvNuit;
let pressionSonoreNuit;

let groupeExtRam;
let puissDelivreeRam;



let resTsgeJour;
let resTbsJour;

let resTsgeNuit;
let resTbsNuit;


let brassageReelJour;
let brassageReelNuit;









const buttonRes = document.querySelector("#CALCULATEUR");
const results = document.querySelector("#Resultats");



buttonRes.addEventListener(
    "click",
    ()=>{
        surfaceJour = document.querySelector("#surfaceJour").value;
        hauteurJour = document.querySelector("#hauteurJour").value;
        surfaceNuit = document.querySelector("#surfaceNuit").value;
        hauteurNuit = document.querySelector("#hauteurNuit").value;
        typeLogement = document.querySelector("#typeLogement").value;
        reglemThermique = document.querySelector("#reglemThermique").value;
        tempExt = document.querySelector("#tempExt").value;
        tempInt = document.querySelector("#tempInt").value;
        if (surfaceJour === "" || surfaceNuit === ""){
            window.alert("attention certaines valeurs n'ont pas été remplies");
        }
        else{
            console.log(surfaceJour, surfaceNuit, hauteurJour, hauteurNuit, reglemThermique);
            calculs(surfaceJour, surfaceNuit, hauteurJour, hauteurNuit, typeLogement);
        }
        
    }   
);

//definition des valeurs de base





//zone liste











