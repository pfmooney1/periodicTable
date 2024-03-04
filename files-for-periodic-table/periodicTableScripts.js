/*eslint-env es6*/
/*eslint-env browser*/
const modalAtomicMass = document.getElementById("atomicMass");
const modalAtomicNumber = document.getElementById("atomicNumber");
const modalBackground = document.getElementById("modalBackground");
const modalBoilingPoint = document.getElementById("boilingPoint");
const modalContent = document.getElementById("modalContent");
const modalDiscoveredBy = document.getElementById("discoveredBy");
const modalDiscoveryDate = document.getElementById("discoveryDate");
const modalElementName = document.getElementById("elementName");
const modalElementType = document.getElementById("elementType");
const modalMeltingPoint = document.getElementById("meltingPoint");

function getElementToPass(id) {
    if (id == "H") {
        return H;
    }
    if (id == "He") {
        return He;
    }

    if (id == "Li") {
        return Li;
    }
    if (id == "Be") {
        return Be;
    }
    if (id == "B") {
        return B;
    }
    if (id == "C") {
        return C;
    }
    if (id == "N") {
        return N;
    }
    if (id == "O") {
        return O;
    }
    if (id == "F") {
        return F;
    }
    if (id == "Ne") {
        return Ne;
    }

    if (id == "Na") {
        return Na;
    }
    if (id == "Mg") {
        return Mg;
    }
    if (id == "Al") {
        return Al;
    }
    if (id == "Si") {
        return Si;
    }
    if (id == "P") {
        return P;
    }
    if (id == "S") {
        return S;
    }
    if (id == "Cl") {
        return Cl;
    }
    if (id == "Ar") {
        return Ar;
    }

    if (id == "K") {
        return K;
    }
    if (id == "Ca") {
        return Ca;
    }
    if (id == "Sc") {
        return Sc;
    }
    if (id == "Ti") {
        return Ti;
    }
    if (id == "V") {
        return V;
    }
    if (id == "Cr") {
        return Cr;
    }
    if (id == "Mn") {
        return Mn;
    }
    if (id == "Fe") {
        return Fe;
    }
    if (id == "Co") {
        return Co;
    }
    if (id == "Ni") {
        return Ni;
    }
    if (id == "Cu") {
        return Cu;
    }
    if (id == "Zn") {
        return Zn;
    }
    if (id == "Ga") {
        return Ga;
    }
    if (id == "Ge") {
        return Ge;
    }
    if (id == "As") {
        return As;
    }
    if (id == "Se") {
        return Se;
    }
    if (id == "Br") {
        return Br;
    }
    if (id == "Kr") {
        return Kr;
    }

    if (id == "Rb") {
        return Rb;
    }
    if (id == "Sr") {
        return Sr;
    }
    if (id == "Y") {
        return Y;
    }
    if (id == "Zr") {
        return Zr;
    }
    if (id == "Nb") {
        return Nb;
    }
    if (id == "Mo") {
        return Mo;
    }
    if (id == "Tc") {
        return Tc;
    }
    if (id == "Ru") {
        return Ru;
    }
    if (id == "Rh") {
        return Rh;
    }
    if (id == "Pd") {
        return Pd;
    }
    if (id == "Ag") {
        return Ag;
    }
    if (id == "Cd") {
        return Cd;
    }
    if (id == "In") {
        return In;
    }
    if (id == "Sn") {
        return Sn;
    }
    if (id == "Sb") {
        return Sb;
    }
    if (id == "Te") {
        return Te;
    }
    if (id == "I") {
        return I;
    }
    if (id == "Xe") {
        return Xe;
    }

    if (id == "Cs") {
        return Cs;
    }
    if (id == "Ba") {
        return Ba;
    }
    if (id == "Hf") {
        return Hf;
    }
    if (id == "Ta") {
        return Ta;
    }
    if (id == "W") {
        return W;
    }
    if (id == "Re") {
        return Re;
    }
    if (id == "Os") {
        return Os;
    }
    if (id == "Ir") {
        return Ir;
    }
    if (id == "Pt") {
        return Pt;
    }
    if (id == "Au") {
        return Au;
    }
    if (id == "Hg") {
        return Hg;
    }
    if (id == "Tl") {
        return Tl;
    }
    if (id == "Pb") {
        return Pb;
    }
    if (id == "Bi") {
        return Bi;
    }
    if (id == "Po") {
        return Po;
    }
    if (id == "At") {
        return At;
    }
    if (id == "Rn") {
        return Rn;
    }

    if (id == "Fr") {
        return Fr;
    }
    if (id == "Ra") {
        return Ra;
    }
    if (id == "Rf") {
        return Rf;
    }
    if (id == "Db") {
        return Db;
    }
    if (id == "Sg") {
        return Sg;
    }
    if (id == "Bh") {
        return Bh;
    }
    if (id == "Hs") {
        return Hs;
    }
    if (id == "Mt") {
        return Mt;
    }
    if (id == "Ds") {
        return Ds;
    }
    if (id == "Rg") {
        return Rg;
    }
    if (id == "Cn") {
        return Cn;
    }
    if (id == "Nh") {
        return Nh;
    }
    if (id == "Fl") {
        return Fl;
    }
    if (id == "Mc") {
        return Mc;
    }
    if (id == "Lv") {
        return Lv;
    }
    if (id == "Ts") {
        return Ts;
    }
    if (id == "Og") {
        return Og;
    }

    if (id == "La") {
        return La;
    }
    if (id == "Ce") {
        return Ce;
    }
    if (id == "Pr") {
        return Pr;
    }
    if (id == "Nd") {
        return Nd;
    }
    if (id == "Pm") {
        return Pm;
    }
    if (id == "Sm") {
        return Sm;
    }
    if (id == "Eu") {
        return Eu;
    }
    if (id == "Gd") {
        return Gd;
    }
    if (id == "Tb") {
        return Tb;
    }
    if (id == "Dy") {
        return Dy;
    }
    if (id == "Ho") {
        return Ho;
    }
    if (id == "Er") {
        return Er;
    }
    if (id == "Tm") {
        return Tm;
    }
    if (id == "Yb") {
        return Yb;
    }
    if (id == "Lu") {
        return Lu;
    }

    if (id == "Ac") {
        return Ac;
    }
    if (id == "Th") {
        return Th;
    }
    if (id == "Pa") {
        return Pa;
    }
    if (id == "U") {
        return U;
    }
    if (id == "Np") {
        return Np;
    }
    if (id == "Pu") {
        return Pu;
    }
    if (id == "Am") {
        return Am;
    }
    if (id == "Cm") {
        return Cm;
    }
    if (id == "Bk") {
        return Bk;
    }
    if (id == "Cf") {
        return Cf;
    }
    if (id == "Es") {
        return Es;
    }
    if (id == "Fm") {
        return Fm;
    }
    if (id == "Md") {
        return Md;
    }
    if (id == "No") {
        return No;
    }
    if (id == "Lr") {
        return Lr;
    }
    else {
        console.log("Error: ID Element mismatch");
    }
}

function getElementType(passedElementClass){
    if (passedElementClass.includes("alkaliMetals")){
        return "Alkali Metals";
    }
    else if (passedElementClass.includes("alkalineEarthMetals")) {
        return "Alkaline Earth Metals";
    }
    else if (passedElementClass.includes("lanthanoids")) {
        return "Lanthanoids";
    }  
    else if (passedElementClass.includes("actinoids")) {
        return "Actinoids";
    }
    else if (passedElementClass.includes("transitionMetals")) {
        return"Transition Metals";
    }
    else if (passedElementClass.includes("postTransitionMetals")) {
        return"Post-Transition Metals";
    }
    else if (passedElementClass.includes("metalloids")) {
        return "Metalloids";
    }
    else if (passedElementClass.includes("reactiveNonmetals")) {
        return "Reactive Non-Metals";
    }
    else if (passedElementClass.includes("nobleGases")) {
        return "Noble Gases";
    }
    else {
        return "N/A";
    }
}

function showModal(id){
    if (modalBackground.style.visibility == "visible") {
        modalBackground.style.visibility = "hidden";
    } 
    else {
        modalBackground.style.visibility = "visible";
    }
    if (id == undefined) {
        console.log("Error: id = undefined");
    }
    else if (id == "n/a") {
    }
    else {
        let passedElement = getElementToPass(id);
        let passedElementClass = document.getElementById(id).className;
        writeModal(id, passedElement, passedElementClass);
    }
}

function writeModal(id, passedElement, passedElementClass) {
    // Super-hacky, but it works. Gets atomic number from HTML PT.
    let atomicNumber = document.getElementById(id).firstElementChild.firstElementChild.innerHTML;

    // Writes the element info on the modal
    let theElementType = getElementType(passedElementClass);
    modalAtomicMass.innerHTML = passedElement.atomicMass;
    modalAtomicNumber.innerHTML = atomicNumber;
    modalBoilingPoint.innerHTML = passedElement.boilingPoint;
    modalDiscoveredBy.innerHTML = passedElement.discoveredBy;
    modalDiscoveryDate.innerHTML = passedElement.discoveryDate;
    modalElementType.innerHTML = theElementType;
    modalElementName.innerHTML = passedElement.name;
    modalMeltingPoint.innerHTML = passedElement.meltingPoint;
    
    
    // Writes the modal's mini-element square
    document.getElementById("modalMiniAbbr").innerHTML = id;
    document.getElementById("modalMiniAtomicNumber").innerHTML = atomicNumber;
    document.getElementById("modalMiniElement").className = passedElementClass;
    document.getElementById("modalMiniMass").innerHTML = passedElement.atomicMass;
    document.getElementById("modalMiniName").innerHTML = passedElement.name;
}


window.onclick = function(event) {
  if (event.target == modalBackground) {
      showModal();
  }
}

/* JS Element Information */
/* Row 1 */
let H = {
    name: "Hydrogen",
    atomicMass: "1.008",
    meltingPoint: "−259.16°C, −434.49°F, 13.99 K",
    boilingPoint: "−252.879°C, −423.182°F, 20.271 K",
    discoveryDate: "1766",
    discoveredBy: "Henry Cavendish"
};
let He = {
    name: "Helium",
    atomicMass: "4.003",
    meltingPoint: "unknown",
    boilingPoint: "−268.928°C, −452.07°F, 4.222 K",
    discoveryDate: "Sir William Ramsay",
    discoveredBy: "1895"
};

/* Row 2 */
let Li = {
    name: "Lithium",
    atomicMass: "6.941",
    meltingPoint: "180.50°C, 356.90°F, 453.65 K",
    boilingPoint: "1342°C, 2448°F, 1615 K",
    discoveryDate: "1817",
    discoveredBy: "Johan August Arfvedson"
};
let Be = {
    name: "Beryllium",
    atomicMass: "9.012",
    meltingPoint: "1287°C, 2349°F, 1560 K",
    boilingPoint: "2468°C, 4474°F, 2741 K",
    discoveryDate: "1797",
    discoveredBy: "Nicholas Louis Vauquelin"
};
let B = {
    name: "Boron",
    atomicMass: "10.811",
    meltingPoint: "2077°C, 3771°F, 2350 K",
    boilingPoint: "4000°C, 7232°F, 4273 K",
    discoveryDate: "1808",
    discoveredBy: "Louis-Josef Gay-Lussac and Louis-Jacques Thénard"
};
let C = {
    name: "Carbon",
    atomicMass: "12.011",
    meltingPoint: "Sublimes at 3825°C, 6917°F, 4098 K",
    boilingPoint: "Sublimes at 3825°C, 6917°F, 4098 K",
    discoveryDate: "Prehistoric",
    discoveredBy: "unknown"
};
let N = {
    name: "Nitrogen",
    atomicMass: "14.007",
    meltingPoint: "−210.0°C, −346.0°F, 63.2 K",
    boilingPoint: "−195.795°C, −320.431°F, 77.355 K",
    discoveryDate: "1772",
    discoveredBy: "Daniel Rutherford"
};
let O = {
    name: "Oxygen",
    atomicMass: "15.999",
    meltingPoint: "−218.79°C, −361.82°F, 54.36 K",
    boilingPoint: "−182.962°C, −297.332°F, 90.188 K",
    discoveryDate: "1774",
    discoveredBy: "Joseph Priestley"
};
let F = {
    name: "Fluorine",
    atomicMass: "18.998",
    meltingPoint: "−219.67°C, −363.41°F, 53.48 K",
    boilingPoint: "−188.11°C, −306.6°F, 85.04 K",
    discoveryDate: "1886",
    discoveredBy: "Henri Moissan"
};
let Ne = {
    name: "Neon",
    atomicMass: "20.180",
    meltingPoint: "−248.59°C, −415.46°F, 24.56 K",
    boilingPoint: "−246.046°C, −410.883°F, 27.104 K",
    discoveryDate: "1898",
    discoveredBy: "Sir William Ramsay and Morris Travers "
};

/* Row 3 */
let Na = {
    name: "Sodium",
    atomicMass: "22.990",
    meltingPoint: "97.794°C, 208.029°F, 370.944 K",
    boilingPoint: "882.940°C, 1621.292°F, 1156.090 K",
    discoveryDate: "1807",
    discoveredBy: "Humphry Davy"
};
let Mg = {
    name: "Magnesium",
    atomicMass: "24.305",
    meltingPoint: "650°C, 1202°F, 923 K",
    boilingPoint: "1090°C, 1994°F, 1363 K",
    discoveryDate: "1755",
    discoveredBy: "Joseph Black"
};
let Al = {
    name: "Aluminum",
    atomicMass: "26.982",
    meltingPoint: "660.323°C, 1220.581°F, 933.473 K",
    boilingPoint: "2519°C, 4566°F, 2792 K",
    discoveryDate: "1825",
    discoveredBy: "Hans Oersted"
};
let Si = {
    name: "Silicon",
    atomicMass: "28.086",
    meltingPoint: "1414°C, 2577°F, 1687 K",
    boilingPoint: "3265°C, 5909°F, 3538 K",
    discoveryDate: "1824",
    discoveredBy: "Jöns Jacob Berzelius"
};
let P = {
    name: "Phosphorus",
    atomicMass: "30.974",
    meltingPoint: "44.15°C, 111.47°F, 317.3 K",
    boilingPoint: "280.5°C, 536.9°F, 553.7 K",
    discoveryDate: "1669",
    discoveredBy: "Hennig Brandt"
};
let S = {
    name: "Sulfur",
    atomicMass: "32.065",
    meltingPoint: "115.21°C, 239.38°F, 388.36 K",
    boilingPoint: "444.61°C, 832.3°F, 717.76 K",
    discoveryDate: "Prehistoric",
    discoveredBy: "unknown"
};
let Cl = {
    name: "Chlorine",
    atomicMass: "35.453",
    meltingPoint: "−101.5°C, −150.7°F, 171.7 K",
    boilingPoint: "−34.04°C, −29.27°F, 239.11 K",
    discoveryDate: "1774",
    discoveredBy: "Carl Wilhelm Scheele"
};
let Ar = {
    name: "Argon",
    atomicMass: "39.948",
    meltingPoint: "−189.34°C, −308.81°F, 83.81 K",
    boilingPoint: "−185.848°C, −302.526°F, 87.302 K",
    discoveryDate: "1894",
    discoveredBy: "Lord Rayleigh and Sir William Ramsay"
};

/* Row 4 */
let K = {
    name: "Potassium",
    atomicMass: "39.098",
    meltingPoint: "63.5°C, 146.3°F, 336.7 K",
    boilingPoint: "759°C, 1398°F, 1032 K",
    discoveryDate: "1807",
    discoveredBy: "Humphry Davy"
};
let Ca = {
    name: "Calcium",
    atomicMass: "40.078",
    meltingPoint: "842°C, 1548°F, 1115 K",
    boilingPoint: "1484°C, 2703°F, 1757 K",
    discoveryDate: "1808",
    discoveredBy: "Humphry Davy"
};
let Sc = {
    name: "Scandium",
    atomicMass: "44.956",
    meltingPoint: "1541°C, 2806°F, 1814 K",
    boilingPoint: "2836°C, 5137°F, 3109 K",
    discoveryDate: "1879",
    discoveredBy: "Lars Frederik Nilson"
};
let Ti = {
    name: "Titanium",
    atomicMass: "47.867",
    meltingPoint: "1670°C, 3038°F, 1943 K",
    boilingPoint: "3287°C, 5949°F, 3560 K",
    discoveryDate: "1791",
    discoveredBy: "William Gregor"
};
let V = {
    name: "Vanadium",
    atomicMass: "50.942",
    meltingPoint: "1910°C, 3470°F, 2183 K",
    boilingPoint: "3407°C, 6165°F, 3680 K",
    discoveryDate: "1801",
    discoveredBy: "Andrés Manuel del Rio"
};
let Cr = {
    name: "Chromium",
    atomicMass: "51.996",
    meltingPoint: "1907°C, 3465°F, 2180 K",
    boilingPoint: "2671°C, 4840°F, 2944 K",
    discoveryDate: "1798",
    discoveredBy: "Nicholas Louis Vauquelin"
};
let Mn = {
    name: "Manganese",
    atomicMass: "54.938",
    meltingPoint: "1246°C, 2275°F, 1519 K",
    boilingPoint: "2061°C, 3742°F, 2334 K",
    discoveryDate: "1774",
    discoveredBy: "Johan Gottlieb Gahn"
};
let Fe = {
    name: "Iron",
    atomicMass: "55.845",
    meltingPoint: "1538°C, 2800°F, 1811 K",
    boilingPoint: "2861°C, 5182°F, 3134 K",
    discoveryDate: "approx 3500BC",
    discoveredBy: "unknown"
};
let Co = {
    name: "Cobalt",
    atomicMass: "58.933",
    meltingPoint: "1495°C, 2723°F, 1768 K",
    boilingPoint: "2927°C, 5301°F, 3200 K",
    discoveryDate: "1739",
    discoveredBy: "Georg Brandt"
};
let Ni = {
    name: "Nickel",
    atomicMass: "58.693",
    meltingPoint: "1455°C, 2651°F, 1728 K",
    boilingPoint: "2913°C, 5275°F, 3186 K",
    discoveryDate: "1751",
    discoveredBy: "Axel Fredrik Cronstedt"
};
let Cu = {
    name: "Copper",
    atomicMass: "63.546",
    meltingPoint: "1084.62°C, 1984.32°F, 1357.77 K",
    boilingPoint: "2560°C, 4640°F, 2833 K",
    discoveryDate: "prehistoric",
    discoveredBy: "unknown"
};
let Zn = {
    name: "Zinc",
    atomicMass: "65.390",
    meltingPoint: "419.527°C, 787.149°F, 692.677 K",
    boilingPoint: "907°C, 1665°F, 1180 K",
    discoveryDate: "Identified in 1746 but known by Greeks and Romans before 20BC",
    discoveredBy: "Andreas Marggraf"
};
let Ga = {
    name: "Gallium",
    atomicMass: "69.723",
    meltingPoint: "29.7646°C, 85.5763°F, 302.9146 K",
    boilingPoint: "2229°C, 4044°F, 2502 K",
    discoveryDate: "1875",
    discoveredBy: "Paul-Émile Lecoq de Boisbaudran"
};
let Ge = {
    name: "Germanium",
    atomicMass: "72.640",
    meltingPoint: "938.25°C, 1720.85°F, 1211.4 K",
    boilingPoint: "2833°C, 5131°F, 3106 K",
    discoveryDate: "1886",
    discoveredBy: "Clemens Winkler"
};
let As = {
    name: "Arsenic",
    atomicMass: "74.922",
    meltingPoint: "Sublimes at 616°C, 1141°F, 889 K",
    boilingPoint: "Sublimes at 616°C, 1141°F, 889 K",
    discoveryDate: "around 1250",
    discoveredBy: "Albertus Magnus"
};
let Se = {
    name: "Selenium",
    atomicMass: "78.960",
    meltingPoint: "220.8°C, 429.4°F, 494 K",
    boilingPoint: "685°C, 1265°F, 958 K",
    discoveryDate: "1817",
    discoveredBy: "Jöns Jacob Berzelius"
};
let Br = {
    name: "Bromine",
    atomicMass: "79.904",
    meltingPoint: "−7.2°C, 19°F, 266 K",
    boilingPoint: "58.8°C, 137.8°F, 332 K",
    discoveryDate: "1826",
    discoveredBy: "Antoine-Jérôme Balard & Carl Löwig"
};
let Kr = {
    name: "Krypton",
    atomicMass: "83.798 u",
    meltingPoint: "−157.37°C, −251.27°F, 115.78 K",
    boilingPoint: "−153.415°C, −244.147°F, 119.735 K",
    discoveryDate: "1898",
    discoveredBy: "Morris Travers & Sir William Ramsay"
};

/* Row 5 */
let Rb = {
    name: "Rubidium",
    atomicMass: "85.468",
    meltingPoint: "39.30°C, 102.74°F, 312.45 K",
    boilingPoint: "688°C, 1270°F, 961 K",
    discoveryDate: "1861",
    discoveredBy: "Gustav Kirchhoff and Robert Bunsen"
};
let Sr = {
    name: "Strontium",
    atomicMass: "87.620",
    meltingPoint: "777°C, 1431°F, 1050 K",
    boilingPoint: "1377°C, 2511°F, 1650 K",
    discoveryDate: "1790",
    discoveredBy: "Adair Crawford"
};
let Y = {
    name: "Yttrium",
    atomicMass: "88.906",
    meltingPoint: "1522°C, 2772°F, 1795 K",
    boilingPoint: "3345°C, 6053°F, 3618 K",
    discoveryDate: "1794",
    discoveredBy: "Johan Gadolin"
};
let Zr = {
    name: "Zirconium",
    atomicMass: "91.224",
    meltingPoint: "1854°C, 3369°F, 2127 K",
    boilingPoint: "4406°C, 7963°F, 4679 K",
    discoveryDate: "1789",
    discoveredBy: "Martin Heinrich Klaproth"
};
let Nb = {
    name: "Niobium",
    atomicMass: "92.906",
    meltingPoint: "2477°C, 4491°F, 2750 K",
    boilingPoint: "4741°C, 8566°F, 5014 K",
    discoveryDate: "1801",
    discoveredBy: "Charles Hatchett"
};
let Mo = {
    name: "Molybdenum",
    atomicMass: "95.940",
    meltingPoint: "2622°C, 4752°F, 2895 K",
    boilingPoint: "4639°C, 8382°F, 4912 K",
    discoveryDate: "1781",
    discoveredBy: "Peter Jacob Hjelm"
};
let Tc = {
    name: "Technetium",
    atomicMass: "98.000",
    meltingPoint: "2157°C, 3915°F, 2430 K",
    boilingPoint: "4262°C, 7704°F, 4535 K",
    discoveryDate: "1937",
    discoveredBy: "Carlo Perrier and Emilio Segrè"
};
let Ru = {
    name: "Ruthenium",
    atomicMass: "101.070",
    meltingPoint: "2333°C, 4231°F, 2606 K",
    boilingPoint: "4147°C, 7497°F, 4420 K",
    discoveryDate: "1844",
    discoveredBy: "Karl Karlovich Klaus"
};
let Rh = {
    name: "Rhodium",
    atomicMass: "102.906",
    meltingPoint: "1963°C, 3565°F, 2236 K",
    boilingPoint: "3695°C, 6683°F, 3968 K",
    discoveryDate: "1803",
    discoveredBy: "William Hyde Wollaston"
};
let Pd = {
    name: "Palladium",
    atomicMass: "106.420",
    meltingPoint: "1554.8°C, 2830.6°F, 1828 K",
    boilingPoint: "2963°C, 5365°F, 3236 K",
    discoveryDate: "1803",
    discoveredBy: "William Hyde Wollaston"
};
let Ag = {
    name: "Silver",
    atomicMass: "107.868",
    meltingPoint: "961.78°C, 1763.2°F, 1234.93 K",
    boilingPoint: "2162°C, 3924°F, 2435 K",
    discoveryDate: "approx 3000BC",
    discoveredBy: "unknown"
};
let Cd = {
    name: "Cadmium",
    atomicMass: "112.411",
    meltingPoint: "321.069°C, 609.924°F, 594.219 K",
    boilingPoint: "767°C, 1413°F, 1040 K",
    discoveryDate: "1817",
    discoveredBy: "Friedrich Stromeyer"
};
let In = {
    name: "Indium",
    atomicMass: "114.818",
    meltingPoint: "156.60°C, 313.88°F, 429.75 K",
    boilingPoint: "2027°C, 3681°F, 2300 K",
    discoveryDate: "1863",
    discoveredBy: "Ferdinand Reich and Hieronymous Richter"
};
let Sn = {
    name: "Tin",
    atomicMass: "118.710",
    meltingPoint: "231.928°C, 449.47°F, 505.078 K",
    boilingPoint: "2586°C, 4687°F, 2859 K",
    discoveryDate: "approx 2100BC",
    discoveredBy: "unknown"
};
let Sb = {
    name: "Antimony",
    atomicMass: "121.760",
    meltingPoint: "630.628°C, 1167.13°F, 903.778 K",
    boilingPoint: "1587°C, 2889°F, 1860 K",
    discoveryDate: "aprox 1600BC",
    discoveredBy: "unknown"
};
let Te = {
    name: "Tellurium",
    atomicMass: "127.600",
    meltingPoint: "449.51°C, 841.12°F, 722.66 K",
    boilingPoint: "988°C, 1810°F, 1261 K",
    discoveryDate: "1783",
    discoveredBy: "Franz-Joseph Müller von Reichenstein"
};
let I = {
    name: "Iodine",
    atomicMass: "126.905",
    meltingPoint: "113.7°C, 236.7°F, 386.9 K",
    boilingPoint: "184.4°C, 363.9°F, 457.6 K",
    discoveryDate: "1811",
    discoveredBy: "Bernard Courtois"
};
let Xe = {
    name: "Xenon",
    atomicMass: "131.293",
    meltingPoint: "−111.75°C, −169.15°F, 161.4 K",
    boilingPoint: "−108.099°C, −162.578°F, 165.051 K",
    discoveryDate: "1898",
    discoveredBy: "Sir William Ramsay and Morris Travers"
};

/* Row 6 */
let Cs = {
    name: "Cesium",
    atomicMass: "132.906",
    meltingPoint: "28.5°C, 83.3°F, 301.7 K",
    boilingPoint: "671°C, 1240°F, 944 K",
    discoveryDate: "1860",
    discoveredBy: "Gustav Kirchhoff and Robert Bunsen"
};
let Ba = {
    name: "Barium",
    atomicMass: "137.327",
    meltingPoint: "727°C, 1341°F, 1000 K",
    boilingPoint: "1845°C, 3353°F, 2118 K",
    discoveryDate: "1808",
    discoveredBy: "Humphry Davy"
};
let Hf = {
    name: "Hafnium",
    atomicMass: "178.490",
    meltingPoint: "2233°C, 4051°F, 2506 K",
    boilingPoint: "4600°C, 8312°F, 4873 K ",
    discoveryDate: "1923",
    discoveredBy: "George Charles de Hevesy and Dirk Coster"
};
let Ta = {
    name: "Tantalum",
    atomicMass: "180.948",
    meltingPoint: "3017°C, 5463°F, 3290 K",
    boilingPoint: "5455°C, 9851°F, 5728 K",
    discoveryDate: "1802",
    discoveredBy: "Anders Gustav Ekeberg"
};
let W = {
    name: "Tungsten",
    atomicMass: "183.840",
    meltingPoint: "3414°C, 6177°F, 3687 K",
    boilingPoint: "5555°C, 10031°F, 5828 K",
    discoveryDate: "1783",
    discoveredBy: "Juan and Fausto Elhuyar"
};
let Re = {
    name: "Rhenium",
    atomicMass: "186.207",
    meltingPoint: "3185°C, 5765°F, 3458 K",
    boilingPoint: "5590°C, 10094°F, 5863 K",
    discoveryDate: "1925",
    discoveredBy: "Walter Noddack, Ida Tacke and Otto Berg"
};
let Os = {
    name: "Osmium",
    atomicMass: "190.230",
    meltingPoint: "3033°C, 5491°F, 3306 K",
    boilingPoint: "5008°C, 9046°F, 5281 K",
    discoveryDate: "1803",
    discoveredBy: "Smithson Tennant"
};
let Ir = {
    name: "Iridium",
    atomicMass: "192.217",
    meltingPoint: "2446°C, 4435°F, 2719 K",
    boilingPoint: "4428°C, 8002°F, 4701 K",
    discoveryDate: "1803",
    discoveredBy: "Smithson Tennant"
};
let Pt = {
    name: "Platinum",
    atomicMass: "195.078",
    meltingPoint: "1768.2°C, 3214.8°F, 2041.4 K",
    boilingPoint: "3825°C, 6917°F, 4098 K",
    discoveryDate: "unknown; in Europe in 1750",
    discoveredBy: "unknown"
};
let Au = {
    name: "Gold",
    atomicMass: "196.967",
    meltingPoint: "1064.18°C, 1947.52°F, 1337.33 K",
    boilingPoint: "2836°C, 5137°F, 3109 K",
    discoveryDate: "approximately 3000BC",
    discoveredBy: "unknown"
};
let Hg = {
    name: "Mercury",
    atomicMass: "200.590",
    meltingPoint: "−38.829°C, −37.892°F, 234.321 K",
    boilingPoint: "356.619°C, 673.914°F, 629.769 K",
    discoveryDate: "approximately 1500BC",
    discoveredBy: "unknown"
};
let Tl = {
    name: "Thallium",
    atomicMass: "204.383",
    meltingPoint: "304°C, 579°F, 577 K",
    boilingPoint: "1473°C, 2683°F, 1746 K",
    discoveryDate: "1861",
    discoveredBy: "William Crookes"
};
let Pb = {
    name: "Lead",
    atomicMass: "207.200",
    meltingPoint: "327.462°C, 621.432°F, 600.612 K",
    boilingPoint: "1749°C, 3180°F, 2022 K",
    discoveryDate: "unknown",
    discoveredBy: "unknown"
    };
let Bi = {
    name: "Bismuth",
    atomicMass: "208.980",
    meltingPoint: "271.406°C, 520.531°F, 544.556 K",
    boilingPoint: "1564°C, 2847°F, 1837 K",
    discoveryDate: "approximately 1500BC",
    discoveredBy: "unknown"
};
let Po = {
    name: "Polonium",
    atomicMass: "209.000",
    meltingPoint: "254°C, 489°F, 527 K",
    boilingPoint: "962°C, 1764°F, 1235 K",
    discoveryDate: "1898",
    discoveredBy: "Marie Curie"
};
let At = {
    name: "Astatine",
    atomicMass: "210.000",
    meltingPoint: "300°C, 572°F, 573 K",
    boilingPoint: "350°C, 662°F, 623 K",
    discoveryDate: "1940",
    discoveredBy: "Dale R. Corson, Kenneth Ross MacKenzie & Emilio Segrè"
};
let Rn = {
    name: "Radon",
    atomicMass: "222.000",
    meltingPoint: "−71°C, −96°F, 202 K",
    boilingPoint: "−61.7°C, −79.1°F, 211.5 K",
    discoveryDate: "1900",
    discoveredBy: "Friedrich Ernst Dorn"
};

/* Row 7 */
let Fr = {
    name: "Francium",
    atomicMass: "223.000",
    meltingPoint: "21°C, 70°F, 294 K",
    boilingPoint: "650°C, 1202°F, 923 K",
    discoveryDate: "1939",
    discoveredBy: "Marguerite Perey"
};
let Ra = {
    name: "Radium",
    atomicMass: "226.000",
    meltingPoint: "696°C, 1285°F, 969 K",
    boilingPoint: "1500°C, 2732°F, 1773 K",
    discoveryDate: "1898",
    discoveredBy: "Pierre and Marie Curie"
};
let Rf = {
    name: "Rutherfordium",
    atomicMass: "261.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1964",
    discoveredBy: "Georgy Flerov and colleagues  in Moscow, Russia, & by Albert Ghiorso and colleagues in California, USA"
};
let Db = {
    name: "Dubnium",
    atomicMass: "262.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1968-1970",
    discoveredBy: "Georgy Flerov and colleagues  in Moscow, Russia, & by Albert Ghiorso and colleagues in California, USA"
    };
let Sg = {
    name: "Seaborgium",
    atomicMass: "266.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1974",
    discoveredBy: "Albert Ghiorso and colleagues"
};
let Bh = {
    name: "Bohrium",
    atomicMass: "264.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1981",
    discoveredBy: "Peter Armbruster, Gottfried Münzenberg and colleagues "
};
let Hs = {
    name: "Hassium",
    atomicMass: "277.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1984",
    discoveredBy: "Peter Armbruster & Gottfried Münzenberg"
};
let Mt = {
    name: "Meitnerium",
    atomicMass: "268.000",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1982",
    discoveredBy: "Peter Armbruster, Gottfried Münzenberg and colleagues"
};
let Ds = {
    name: "Darmstadtium",
    atomicMass: "281 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1994",
    discoveredBy: "Sigurd Hofmann, Peter Armbruster & Gottfried Münzenberg"
};
let Rg = {
    name: "Roentgenium",
    atomicMass: "282 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1994",
    discoveredBy: "Peter Armbruster & Gottfried Münzenberg"
};
let Cn = {
    name: "Copernicium",
    atomicMass: "285 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1996",
    discoveredBy: "Sigurd Hofmann & colleagues"
};
let Nh = {
    name: "Nihonium",
    atomicMass: "286 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "2004",
    discoveredBy: "Scientists from RIKEN (The Institute of Physical and Chemical Research) in Japan"
};
let Fl = {
    name: "Flerovium",
    atomicMass: "289 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "1999",
    discoveredBy: "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia and the Lawrence Livermore National Laboratory, California, USA."
};
let Mc = {
    name: "Moscovium",
    atomicMass: "289 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "2010",
    discoveredBy: "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, the Lawrence Livermore National Laboratory in California, USA, and Oak Ridge National Laboratory in Tennessee, USA"
};
let Lv = {
    name: "Livermorium",
    atomicMass: "293 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "2000",
    discoveredBy: "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia and the Lawrence Livermore National Laboratory, California, USA. "
};
let Ts = {
    name: "Tennessine",
    atomicMass: "294 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "2010",
    discoveredBy: "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, the Lawrence Livermore National Laboratory in California, USA, and Oak Ridge National Laboratory in Tennessee, USA "
};
let Og = {
    name: "Oganesson",
    atomicMass: "294 u",
    meltingPoint: "unknown",
    boilingPoint: "unknown",
    discoveryDate: "2006",
    discoveredBy: "Scientists from the Joint Institute for Nuclear Research in Dubna, Russia, and the Lawrence Livermore National Laboratory in California, USA"
};

/* Row 8 */
let La = {
    name: "Lanthanum",
    atomicMass: "138.906",
    meltingPoint: "920°C, 1688°F, 1193 K",
    boilingPoint: "3464°C, 6267°F, 3737 K",
    discoveryDate: "1839",
    discoveredBy: "Carl Gustav Mosander"
};
let Ce = {
    name: "Cerium",
    atomicMass: "140.116",
    meltingPoint: "799°C, 1470°F, 1072 K",
    boilingPoint: "3443°C, 6229°F, 3716 K",
    discoveryDate: "1803",
    discoveredBy: "Jöns Jacob Berzelius and Wilhelm Hisinger"
};
let Pr = {
    name: "Praseodymium",
    atomicMass: "140.908",
    meltingPoint: "931°C, 1708°F, 1204 K",
    boilingPoint: "3520°C, 6368°F, 3793 K",
    discoveryDate: "1885",
    discoveredBy: "Carl Auer von Welsbach"
};
let Nd = {
    name: "Neodymium",
    atomicMass: "144.240",
    meltingPoint: "1016°C, 1861°F, 1289 K",
    boilingPoint: "3074°C, 5565°F, 3347 K",
    discoveryDate: "1885",
    discoveredBy: "Carl Auer von Welsbach"
};
let Pm = {
    name: "Promethium",
    atomicMass: "145.000",
    meltingPoint: "1042°C, 1908°F, 1315 K",
    boilingPoint: "3000°C, 5432°F, 3273 K",
    discoveryDate: "1945",
    discoveredBy: "Jacob .A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell"
};
let Sm = {
    name: "Samarium",
    atomicMass: "150.360",
    meltingPoint: "1072°C, 1962°F, 1345 K",
    boilingPoint: "1794°C, 3261°F, 2067 K",
    discoveryDate: "1879",
    discoveredBy: "Paul-Émile Lecoq de Boisbaudran"
};
let Eu = {
    name: "Europium",
    atomicMass: "151.964",
    meltingPoint: "822°C, 1512°F, 1095 K",
    boilingPoint: "1529°C, 2784°F, 1802 K",
    discoveryDate: "1901",
    discoveredBy: "Eugène-Anatole Demarçay"
};
let Gd = {
    name: "Gadolinium",
    atomicMass: "157.250",
    meltingPoint: "1313°C, 2395°F, 1586 K",
    boilingPoint: "3273°C, 5923°F, 3546 K",
    discoveryDate: "1880",
    discoveredBy: "Jean Charles Galissard de Marignac"
};
let Tb = {
    name: "Terbium",
    atomicMass: "158.925",
    meltingPoint: "1359°C, 2478°F, 1632 K",
    boilingPoint: "3230°C, 5846°F, 3503 K",
    discoveryDate: "1843",
    discoveredBy: "Carl Gustav Mosander"
};
let Dy = {
    name: "Dysprosium",
    atomicMass: "162.500",
    meltingPoint: "1412°C, 2574°F, 1685 K",
    boilingPoint: "2567°C, 4653°F, 2840 K",
    discoveryDate: "1886",
    discoveredBy: "Paul-Émile Lecoq de Boisbaudran"
};
let Ho = {
    name: "Holmium",
    atomicMass: "164.930",
    meltingPoint: "1472°C, 2682°F, 1745 K",
    boilingPoint: "2700°C, 4892°F, 2973 K",
    discoveryDate: "1878",
    discoveredBy: "Per Teodor Cleve, Marc Delafontaine, & Louis Soret"
};
let Er = {
    name: "Erbium",
    atomicMass: "167.259",
    meltingPoint: "1529°C, 2784°F, 1802 K",
    boilingPoint: "2868°C, 5194°F, 3141 K",
    discoveryDate: "1843",
    discoveredBy: "Carl Gustav Mosander"
};
let Tm = {
    name: "Thulium",
    atomicMass: "168.934",
    meltingPoint: "1545°C, 2813°F, 1818 K",
    boilingPoint: "1950°C, 3542°F, 2223 K",
    discoveryDate: "1879",
    discoveredBy: "Per Teodor Cleve"
};
let Yb = {
    name: "Ytterbium",
    atomicMass: "173.040",
    meltingPoint: "824°C, 1515°F, 1097 K",
    boilingPoint: "1196°C, 2185°F, 1469 K",
    discoveryDate: "1878",
    discoveredBy: "Jean Charles Galissard de Marignac"
};
let Lu = {
    name: "Lutetium",
    atomicMass: "174.967",
    meltingPoint: "",
    boilingPoint: "",
    discoveryDate: "1907",
    discoveredBy: "Georges Urbain & Charles James"
};

/* Row 9 */
let Ac = {
    name: "Actinium",
    atomicMass: "227 u",
    meltingPoint: "1050°C, 1922°F, 1323 K",
    boilingPoint: "3200°C, 5792°F, 3473 K",
    discoveryDate: "1899",
    discoveredBy: "Andrew Debierne"
};
let Th = {
    name: "Thorium",
    atomicMass: "232.03806 u",
    meltingPoint: "1750°C, 3182°F, 2023 K",
    boilingPoint: "4785°C, 8645°F, 5058 K",
    discoveryDate: "1829",
    discoveredBy: "Jöns Jacob Berzelius "
};
let Pa = {
    name: "Protactinium",
    atomicMass: "231.03588 u",
    meltingPoint: "1572°C, 2862°F, 1845 K",
    boilingPoint: "4000°C, 7232°F, 4273 K",
    discoveryDate: "1913",
    discoveredBy: "Kasimir Fajans & Otto Göhring"
};
let U = {
    name: "Uranium",
    atomicMass: "238.02891 u",
    meltingPoint: "1135°C, 2075°F, 1408 K",
    boilingPoint: "4131°C, 7468°F, 4404 K",
    discoveryDate: "1789",
    discoveredBy: "Martin Heinrich Klaproth"
};
let Np = {
    name: "Neptunium",
    atomicMass: "237.0482 u",
    meltingPoint: "644°C, 1191°F, 917 K",
    boilingPoint: "3902°C, 7056°F, 4175 K",
    discoveryDate: "1940",
    discoveredBy: "Edwin McMillan and Philip Abelson"
};
let Pu = {
    name: "Plutonium",
    atomicMass: "244 u",
    meltingPoint: "640°C, 1184°F, 913 K",
    boilingPoint: "3228°C, 5842°F, 3501 K",
    discoveryDate: "1940",
    discoveredBy: "Glenn Seaborg and colleagues"
};
let Am = {
    name: "Americium",
    atomicMass: "243.061 u",
    meltingPoint: "1176°C, 2149°F, 1449 K",
    boilingPoint: "2011°C, 3652°F, 2284 K",
    discoveryDate: "1944",
    discoveredBy: "Glenn Seaborg and colleagues"
};
let Cm = {
    name: "Curium",
    atomicMass: "247 u",
    meltingPoint: "1345°C, 2453°F, 1618 K",
    boilingPoint: "unknown",
    discoveryDate: "1944",
    discoveredBy: "Glenn Seaborg and colleagues"
};
let Bk = {
    name: "Berkelium",
    atomicMass: "247 u",
    meltingPoint: "986°C, 1807°F, 1259 K",
    boilingPoint: "unknown",
    discoveryDate: "1949",
    discoveredBy: "Stanley Thompson, Albert Ghiorso, & Glenn Seaborg"
};
let Cf = {
    name: "Californium",
    atomicMass: "251 u",
    meltingPoint: "900°C, 1652°F, 1173 K",
    boilingPoint: "unknown",
    discoveryDate: "1950",
    discoveredBy: "Stanley Thompson, Kenneth Street, Jr., Albert Ghiorso, & Glenn Seaborg"
};
let Es = {
    name: "Einsteinium",
    atomicMass: "252 u",
    atomicNumber: "100",
    meltingPoint: "860°C, 1580°F, 1133 K",
    boilingPoint: "unknown",
    discoveryDate: "1952",
    discoveredBy: "Albert Ghiorso and colleagues"
};
let Fm = {
    name: "Fermium",
    atomicMass: "257 u",
    meltingPoint: "1527°C, 2781°F, 1800 K",
    boilingPoint: "unknown",
    discoveryDate: "1953",
    discoveredBy: "Albert Ghiorso and colleagues"
};
let Md = {
    name: "Mendelevium",
    atomicMass: "258 u",
    meltingPoint: "827°C, 1521°F, 1100 K",
    boilingPoint: "unknown",
    discoveryDate: "1955",
    discoveredBy: "Albert Ghiorso and colleagues"
};
let No = {
    name: "Nobelium",
    atomicMass: "259 u",
    meltingPoint: "827°C, 1521°F, 1100 K",
    boilingPoint: "unknown",
    discoveryDate: "1963",
    discoveredBy: "Georgy Flerov and colleagues  in Moscow, Russia, & by Albert Ghiorso and colleagues in California, USA"
};
let Lr = {
    name: "Lawrencium",
    atomicMass: "262",
    meltingPoint: "1627°C, 2961°F, 1900 K",
    boilingPoint: "unknown",
    discoveryDate: "1965",
    discoveredBy: "Georgy Flerov and colleagues  in Moscow, Russia, & by Albert Ghiorso and colleagues in California, USA"
};