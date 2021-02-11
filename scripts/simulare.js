var lungimeSuprafataGrafica = 600;
var inaltimeSuprafataGrafica = 500;

var contorVectorizare = 0;
var contorLimitare = 0;

var contorVectorizare2 = 0;
var contorLimitare2 = 0;

var culoare_canvas = "#EFEFEF";

var directieGraficVertical = 1;
var pragGV1 = 322;
var pragGO1 = 300;

var limita_max_crestere_delta = 50;
var limita_max_crestere_medie = 50;
var limita_max_pierderi = 50;

var limita_regim_liniar_zona = 100;
var limita_regim_liniar_toate = 1500;

var limitaDerulareGraficeSemnale = 286;

var culoareRosuTemperat = "#d92626";//"#e61919";
var culoare_linie_trend = "#999999";//"#b3b3b3";
var culoareRezervor = "grey";
var nivelDepasireCapacitate = 35;
var nivelUltraCritic = 25;
var nivelCritic = 20;
var nivelIntermediar = 15;
var culoareApaNivelNormal = "#2e65b8";//"#005ce6";
var culoareApaNivelIntermediar = "#1f437a";//"#003d99";
var culoareApaNivelCritic = "#0f223d";//"#001f4d";
var culoareApaNivelUltraCritic = "#0a1629";//"#001433";
var culoareApaNivelDepasireCapacitate = "#050b14";//"#000a1a";
var culoareApa = culoareApaNivelNormal;
var culoareValoareNivel = culoareApa;
//var culoareRobinet = "orange";
var culoareLinieLimitaRegimNominal = "#cce0ff";
var culoareIndicatorRezervor = "#d5e2f6";//"#cce0ff";

var culoareLinieValoriGrafic = "#b3b3b3";
var culoareLinieValoriGrafic_2 = "#cccccc";//"#bfbfbf";
var culoareLinieGraficNuantat = "#c98282";//"#d88d8d";
var culoareLinieGraficNuantat2 = "white";
var culoareLinieGraficVertical = "white";//"#8c8c8c";
var culoareLinieLegatura = "#999999";


var culoareMedieCrestere = "#dba670";//culoareMaro;//"#8cbad9";//"#80ccff";//"#99d6ff";//"#80ccff";
var culoarePuncteProiectieScadere = "green"; //culoare_linie_trend;
var culoareMedieScadere = "#45a145";//"green";//"#53c653";//"#79d279";//"#71da71";//"#85e085";

var culoarePunctGraficVertical = "#999999";//"white";
var culoarePunctGraficVerticalFoto = "#262626";
var culoarePunctValoriGrafic = culoareApaNivelIntermediar;
var culoarePunctValoriGrafic_2 = "white";//"grey";//"culoareApaNivelNormal"; //"#999999";
var culoarePunctValoriGrafic_3 = "#737373";//"#808080";
var culoareNumarPunct = "#b3b3b3";//"#404040";


var culoareTextCompensatorRosu = "#ba5e5e";//"#c45454";//"#be4141";//"#ff1a1a";//"red";
var culoareCrestereMaro = "#996633";//culoareTextCompensatorRosu;
var culoareCrestereMaroInchis = "#271a0c";
var culoareCrestereRosu = culoareTextCompensatorRosu;
var culoareScadere = "green";

var culoareCrestereRadarMaro = "rgba(204,153,102,0.9)";
var culoareScadereRadarVerde = "rgba(38,145,31,0.9)";

var culoareScadereVectorAvion = "rgba(38,145,31,0.9)";//"rgba(16, 112, 16, 0.7)";//"lightgreen";//#a9d6a9";
var culoareCrestereVectorAvion = "rgba(153, 102, 51, 0.9)";//"#996633";

var culoareCrestereCercAvion = "rgba(204,153,102, 0.8)";
var culoareScadereCercAvion = "rgba(169, 214, 169, 0.8)";

var culoare_scadere_entitate = "#a9d6a9";//"#9fdf9f";
var culoare_crestere_entitate = "#a8d3f0";//"#99d6ff";
var culoareLinieGraficP = "#ffffe6";
var culoareTextGraficP = "#ffcf66";
var culoareGraficVectorR = "#996633";//"#ac7339";
var culoareGalben = culoareLinieGraficP;
var culoareRosu = "#e4b4b4";//"#d78e8e";//culoareCrestere;//culoareGraficVectorR;//"brown";
var culoareRosuModRadar = "#963636";
var culoareVerde = culoare_scadere_entitate;//"green";
var culoareMaro = "#cc9966";
var culoareAlbastru = culoare_crestere_entitate;
var culoareTextZi = "#999999";//"#595959";
var culoareTextZiTransparent = "rgba(153,153,153,0.9)";
var culoarePuncteProiectieCrestere = "#33adff";

//var culoareCerculetR = "#99d6ff";//"#33adff";//"#80ffff";
var culoareCerculetRScadere = culoareVerde;
var culoareCerculetRCrestere = culoareMaro;//"#99d6ff";

var culoareRadarCercuri = culoareTextZi;
var culoareTraiectorieAvionRadar = "grey";
var culoareRadarLinieDetectie = "rgba(255,255,255,0.7)";
var culoareRadarLinieDetectieModRadar = "rgba(255,255,255,0.4)";

var culoareRadarLinieDetectieAccentuat = "rgba(255,255,255,1.0)";
var culoareRadarLinieDetectieCrestere = "rgba(153,102,51,1)";
var culoareRadarLinieDetectieScadere = "rgba(169,214,169,1)";

var culoareRadarLinieDetectieAccentuatModRadar = "rgba(255,255,255,1.0)";
var culoareRadarLinieDetectieCrestereModRadar = "rgba(153,102,51,1)";
var culoareRadarLinieDetectieScadereModRadar = "rgba(169,214,169,1)";

var culoareRadarLinieDetectieCrestereTransparent = "rgba(153,102,51,0.7)";
var culoareRadarLinieDetectieCrestereTransparentModRadar = "rgba(153,102,51,0.3)";


var culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.2)";
var culoareRadarLinieDetectieScadereTransparent = "rgba(38,145,31,0.7)";//"rgba(169,214,169,0.7)";
var culoareRadarLinieDetectieScadereTransparentModRadar = "rgba(38,145,31,0.3)";//"rgba(169,214,169,0.7)";

var culoareRadarLinieDetectieCadran4Transparent = "rgba(38,145,31,0.2)";
var culoarePunctAvion = "white";//culoarePuncteProiectieCrestere;//"#2B9433";//culoare_scadere_entitate;
var culoarePunctAvionMargine = culoarePunctValoriGrafic; //"#2B9433";

var culoare_pop = culoareLinieGraficP;//"#4d94ff";//"#005ce6";//"#1a75ff";//culoareApaNivelNormal;//culoarePunctValoriGrafic;//"#EFEFEF";

var culoareTextReferinta = "#76adff";
var culoareLinieReferinta = "#cce0ff";
var culoareLinieReferintaGrafic = "#d9d9d9";//"#DDDDDD";//"#cce0ff";
var culoareDreptunghiReferintaGraficTrenduri = "#999999";//"#bfbfbf";

var culoareTextCompensator = "#d9d9d9";
var culoareCompensator = "orange";
var culoareTextCompensatorFill = "#999999";//#8c8c8c;//"#A9A9A9";
var culoareTextCompensatorFill2 = "#8c8c8c";
var culoareTextCompensatorFill3 = "orange";//"#ff9933";//"#8c8c8c";

var culoareF = "#999999";


var culoareTrend = culoarePunctValoriGrafic_3;

var culoareLinieMedieGraficVertical = culoareTextCompensatorFill; //"grey";

var testare = false;

var comutareArie = true;
var nrArie = 43; //43 include toate ariile
var mod_sortare = 1;

var dateArie = _Flourish_data;
var numeArii = _Flourish_data_column_names;
var nr_zile_arie = dateArie.data.length;
var nr_arii = _Flourish_data_column_names.data.value.length;
var textArieSelectata = "";

let evenimente_tip = [
              culoareVerde, //15/4
              culoareVerde, //1/5
              culoareMaro, //15/5
              culoareMaro, //1/6
              culoareMaro, //15/6
              culoareMaro, //1/7
              culoareVerde, //1/8
              culoareMaro, //1/9
              culoareMaro, //15/9
              culoareVerde, //7/10
              culoareVerde, //15/10
              culoareVerde, //20/10
              culoareVerde, //9/11
              culoareMaro, //25/11
              culoareMaro, //19/12
              culoareMaro, //19/12
              culoareMaro, //10/1
              culoareMaro, //21/1
              culoareMaro, //25/1
              culoareMaro, //8/2
];



var unghiEliceRadiani = -Math.PI/4;
var unghiEliceRadiani2 = 0;
var xElice1 = 490;
var xElice2 = xElice1 + 26;
var xRacheta = xElice2 + 30;
var xRacheta2 = xElice2 + 52;
var yRacheta2 = 300;
var yElice = 430;
var yUmbra = inaltimeSuprafataGrafica - 1;
var yUmbra2 = inaltimeSuprafataGrafica - 130;
var text_lim = "lim";

var rachetaLat = 12;
var rachetaH = 20;

var raza_cerculet = 5;
var raza_pulsatie = 0;

let evenimente_contor = [];
let zile_contor_vectorizare = [];
let zile_contor_limitare = [];
let zile_evenimente_actiuni = [];
let zile_info_explicatii = [];

var xTextZi = 10;
var yTextZi = 50;

//scala harta implicita
var scalaInflamatieHarta = 2.2;

var xScalaRadar = xTextZi;
var yScalaRadar = yTextZi + 78;

var xTextEveniment = xTextZi; //+ 130;
var yTextEveniment = yTextZi + 20;
var xCerculeteAcumulate = xTextZi + 0; //+ 130;
var yCerculeteAcumulate = yTextZi + 35;

var xTextEveniment2 = xTextZi; //+ 130;
var yTextEveniment2 = yTextEveniment + 26;
var xCerculeteAcumulate2 = xTextZi + 0; //+ 130;
var yCerculeteAcumulate2 = yCerculeteAcumulate + 26;

var xTextInfoExplicatii = xTextZi;
var yTextInfoExplicatii = yTextZi + 195;

var xVantHarta = 60;
var yVantHarta = 440;


var indicatorZiEveniment = false;
var semn = "+";

let dataCumulativ = [];
let medieCumulativ = [];

let dataCumulativToate = [];
let medieCumulativToate = [];

let avariiCumulativ = [];
let avariiCumulativToate = [];
//let rataPierderiAvarii = [];

let comandaIdeala = [];
let proiectie = [];
let vector_r = [];
let vector_rToate = [];
let vector_r_normalizat = [];
let vector_coefA = [];
let vector_E = [];

let vector_rToate_normalizat = [];
let vector_coefAToate = [];
let vector_EToate = [];

let vector_E_procentual = [];
let vector_valZiCurenta = [];
let vector_valZiCurentaToate = [];
let vectorXAvion = [];
let vectorYAvion = [];
let vectorXAvionRegulator = [];
let vectorYAvionRegulator = [];
let vectorXAvionRegulatorToate = [];
let vectorYAvionRegulatorToate = [];
let vectorDR = [];
let vectorD2R = [];

let vectorDRToate = [];
let vectorD2RToate = [];

let vectorContorZileRadar = [];


//var incrementX = Math.round(lungimeSuprafataGrafica / (data.length + 1));
var incrementX = 3;

var MOD_FOTOGRAFIE = 0;
var MOD_REGULATOR = 1;
var MOD_GRAFICE = 2;
var MOD_RADAR = 3;
var MOD_HARTA = 4;
var mod = MOD_FOTOGRAFIE;

var fotografie = new Image();
fotografie.src = "https://euphonicdesign.github.io/reglare-nivel/images/fotografie.jpg";

var harta = new Image();
harta.src = "https://euphonicdesign.github.io/reglare-nivel/images/harta3.png";
//harta.src = "./images/harta3.png";

//---->actualizare versionare script in index

var selectorZi = 0; //data.length - 1;
var selectorZiStart = 0;
var paginare = 140;
var afisaretrend = true;

var maxValue = 0;
//var maxValueAfisareRezervor = 32;
var maxValue_2 = 0;
var maxValue_3 = 0; //p+
var maxValue_4 = 0; //vector_r_normalizat
var maxValueR = 0; //vector_r
var maxValueProiectie = 0;
var maxValZiCur = 0;

var maxCompensator = 0;
var derulareAutomata = true;
var vitezaSimulare = 165;


//RADAR
var scalaXAvionRadar = 7;
var scalaYAvionRadar = 3.5;

//****
var scalaXAvionRadarRegulator = 2/2;
var scalaYAvionRadarRegulator = 0.2;
var scalaXAvionRadarToateRegulator = 2;
var scalaYAvionRadarToateRegulator = 0.2;

var scalaXAvionRadarToate = 7;
var scalaYAvionRadarToate = 3.5;


var scalaY = 65;//55; //grafic valori orizontal - regulator grafic jos - rosu
var scalaYRacheta = 3;//55; //grafic valori orizontal - regulator grafic jos - rosu
var scalaY_2 = 95;//55; //grafic valori orizontal - regulator grafic jos - gri

//SCALA TREND IMPLICITA
var scala_grafic_2 = 0.2; //scalare suplimentara grafic 2 sus 1.5 = -150%

var scalaY_trend_2 = 160; // grafic sus
var scalaY_trend_3 = 90; // grafic sus - p+
var scalaY_trend_4 = 80; // grafic sus - vector_r_normalizat
var scala2Y_trend_4 = 0.8; // grafic sus - vector_r_normalizat
var scalaY_trend_1 = 90; // grafic jos (mijloc)

var scalaEntitate = 110;
var scalareEntitateToate = 14;
var scalareEntitate = 1;
var scalareTraiectorieAvionToate = 14;
var scalareTraiectorieAvion = 2;

//***********
var scalareTraiectorieAvionToateRegulator = 14;
var scalareTraiectorieAvionRegulator = 2;

//SCALA Tabele
var scalareBareTabelAltitudini = 0.5;

//MAGNIFICARE RADAR IMPLICITA
var scalaRadarY = 1.0; //magnificare radar implicita
var scalaRadarX = 1;

//*****
var scalaRadarYRegulator = 1.0; //magnificare radar implicita
var scalaRadarXRegulator = 1;

var scalaX_trend = 72;
//SCALA GRAFIC VERTICAL/ORIZONTAL
var scalaX = 400; //grafic valori vertical - cumulativ - foto, trend, regulator
//----

var scalaXTrend3Orizontal = 130;
var scalaGCompensator = 50;
var yGrafic_2 = 190;
var yGrafic_1 = yGrafic_2 + 150;
var yGrafic_3 = yGrafic_1 + 85;

var yLegendaDerivate = yGrafic_3 - 103;
var xLegendaDerivate = 440 - 12 - 30;
var ident = 9;

var xMagnificareGrafice = lungimeSuprafataGrafica - 15;
var yMagnificareGrafice = yGrafic_2 - 7;

var xMagnificareGrafice2 = 59;
var yMagnificareGrafice2 = yGrafic_3 - 64;

//Grafic Semnale
var yGraficSemnale = 340;
var xGraficSemnale = 208;
var xProiectiiSemnale = xGraficSemnale + 6;
var yProiectiiSemnale = yGraficSemnale - 104;
var intervalProiectieSemnale = 30;
var compresieGraficSemnale = 2.6;

var xIndRez = xProiectiiSemnale - 10;
var yIndRez = yProiectiiSemnale - 22;
var lunIndRez = 126;
var latIndRez = 6;

//var valoareReferinta = 15;
var valoareCumulativaTotal = 0;
var kp=1.7;
var ki=0.4;
var kd=0.02;
var orizont_trend = 45;
var procent_index2_orizont_trend = 0.7;


//Parametrii Predictie (A,r)
var coefA = 1.0;
var bazaR = 1.0;
var orizont_regresie = Math.floor(orizont_trend / 2);
var orizont_proiectie = 21;

var orizont_arie = 0; //13 daca arie selectata
var ORIZONT_ARIE = 13; //se scade 1 in expresii?

var xc2 = 0;
var yc2 = 0;

//entitate
var xEntitate = 558 - 12 - 8;
var yEntitate = 468;

var xEntitateModRadar = 558 - 12 - 8;
var yEntitateModRadar = 468;

//radar
var vitezaRadar = 8; // 45 zile
var cadranStart = (360 / vitezaRadar) * 2 / 4 - 30/360 * (360 / vitezaRadar); // al treilea cadran (cadr IV)
var cadranFinal = (360 / vitezaRadar) * 3 / 4 - 30/360 * (360 / vitezaRadar); // al treilea cadran (cadr IV)

var razaCerc1 = 18 + 4 * 5;
var razaCerc1Regulator = 18 + 4 * 5;
var razaCerc2 = 12 + 2 * 5;
var razaCerc3 = 5 + 1 + 1;
var razaOrigineRadar = 4 + 1 + 1;
var razaOrigineAeroport = 2 + 2 + 2 + 0;

var xRadar = xEntitate + 12;//lungimeSuprafataGrafica - 32;//30;//110;//200;
var yRadar = 376 + 18; //120;//96;//76;

var xRadarModRadar =  lungimeSuprafataGrafica/2;//lungimeSuprafataGrafica - 32;//30;//110;//200;
var yRadarModRadar = 350; //120;//96;//76;

//****
var xRadarModRadarRegulator =  lungimeSuprafataGrafica/2 + lungimeSuprafataGrafica / 6;//lungimeSuprafataGrafica - 32;//30;//110;//200;
var yRadarModRadarRegulator = 350 - 100; //120;//96;//76;

var razaCerc1ModRadar = (18 + 4 * 5) * 3;
var razaCerc2ModRadar = (12 + 2 * 5) * 3;
var razaCerc3ModRadar = (5 + 1 + 1);
var razaOrigineRadarModRadar = (4 + 1 + 1) * 3;
var razaOrigineAeroportModRadar = (2 + 2 + 2 + 0) * 3;


var razaPunctAvion = 3 + 1 + 1 + 0;
var razaPunctAvionMin = 4;
var crestereDimensiuneAvion = 180;
var scalaDimensiuneAvion = 10;
var scalaPozitieXAvion = 100; //nescalat ar fi 1000; 100 scalat de 10 ori

//**********
var scalaPozitieXAvionRegulator = 100;
var razaPunctAvionMinRegulator = 1;
var razaFumRegulator = 1;
var crestereDimensiuneAvionRegulator = 180;
var scalareDimensiuneAvionRegulatorToate = 3;
var razaCapatVectorRegulator = 3;

//******

var maxRadarY = 1100;
var contorSens = 0;
var sensRadar = +1;

//var xStalp = xRadar - razaCerc1 - razaCerc3*3;
//var yStalp = yRadar - 4;
var xStalp = xEntitate + 12;
var yStalp = yEntitate;

var xStalpG = 136;
var yStalpG = 90;

var xStalpGR = xRacheta2;
var yStalpGR = yUmbra2;

//var xStalpModRadar = xRadarModRadar - razaCerc1ModRadar - razaCerc3ModRadar - 100;
//var yStalpModRadar = yRadarModRadar - 4;
var xStalpModRadar = xEntitateModRadar + 12;
var yStalpModRadar = yEntitateModRadar;

var lungimeStalp = 14;
var lungimeSoseta = 14;
var pulsatie_radar = 0;
var temporizare_pulsatie_radar = 8;
var pulsatie_radar_x = xRadar;
var pulsatie_radar_y = yRadar;

var lungimeStalpModRadar = 18 * 2;
var lungimeSosetaModRadar = 18 * 2;

var pulsatie_radar_xModRadar = xRadar;
var pulsatie_radar_yModRadar = yRadar;


var curbura = 5;
var pistaLungime = razaCerc1 + curbura;
var pistaLatime = razaOrigineAeroport / 2 + curbura + 2;
var rectX = xRadar - pistaLungime;
var rectY = yRadar - pistaLatime / 2;

var curburaModRadar = 5;

var pistaLungimeModRadar = razaCerc1ModRadar + curburaModRadar;
var pistaLatimeModRadar = razaOrigineAeroportModRadar / 2 + curburaModRadar + 2;


var textMaiMare10 = " (>10!)";//" (>10)";

var intervalProiectie = 90; //zile
var intervalProiectie2 = 180; //zile

//rezervor
var lungimeRezervor = lungimeSuprafataGrafica / 3;
var inaltimeRezervor = inaltimeSuprafataGrafica * 1.5 / 3;
var xRezervor = lungimeSuprafataGrafica/2 - lungimeRezervor/2;
var yRezervor = inaltimeSuprafataGrafica/4;

var capacitateRezervor = 0.8;
var procentDinCapacitateMax = 0.2;
var nivelMaxAfisatRezervor = 25;
var incrementVariatieSimulare = 0.005;

// valva
var lungimeValva = lungimeRezervor / 15;

//indicator Rezervor
var lungimeIndicatorRezervor = lungimeValva + lungimeRezervor;
var inaltimeIndicatorRezervor = inaltimeRezervor / 120;
var xIndicatorRezervor = xRezervor - lungimeValva;
var yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2; // - nivelUltraCritic * (inaltimeRezervor * capacitateRezervor)/maxValue;

//apa rezervor
var lungimeApaRezervor = lungimeRezervor;
var inaltimeApaRezervor =  (inaltimeRezervor * capacitateRezervor) * procentDinCapacitateMax;
var xApaRezervor = xRezervor;
var yApaRezervor = yRezervor + inaltimeRezervor - inaltimeApaRezervor;

//conducta intrare
var lungimeConductaIntrare = (lungimeSuprafataGrafica - lungimeRezervor) / 2;
var inaltimeConductaIntrare = inaltimeRezervor / 6;
var xConductaIntrare = 0;
var yConductaIntrare = yRezervor;



//conducta iesire
var lungimeConductaIesire = (lungimeSuprafataGrafica - lungimeRezervor) / 2 + lungimeValva;
var inaltimeConductaIesire = inaltimeConductaIntrare / 4;
var xConductaIesire = xRezervor + lungimeRezervor - lungimeValva;
var yConductaIesire = yRezervor + inaltimeRezervor;

//valva conducta iesire
var lungimeValvaConductaIesire = lungimeValva;
var inaltimeValvaConductaIesire = lungimeValva;
var xValvaConductaIesire = xConductaIesire;
var yValvaConductaIesire = yConductaIesire + 1;

//apa intrare (L1)
var lungimeApaIntrare1 = lungimeConductaIntrare;
var inaltimeApaIntrare1 = inaltimeConductaIntrare * inaltimeApaRezervor / inaltimeRezervor;
var xApaIntrare1 = xConductaIntrare;
var yApaIntrare1 = yConductaIntrare + inaltimeConductaIntrare - inaltimeApaIntrare1;

//apa intrare (L2)
var lungimeApaIntrare2 = inaltimeApaIntrare1;
var inaltimeApaIntrare2 = inaltimeRezervor - inaltimeApaRezervor - (inaltimeConductaIntrare - inaltimeApaIntrare1);
var xApaIntrare2 = xApaRezervor;
var yApaIntrare2 = yRezervor + (inaltimeConductaIntrare - inaltimeApaIntrare1);

// valva conducta intrare (T1) - vertical
var lungimeValvaConductaIntrare1 = lungimeConductaIntrare / 15;
var inaltimeValvaConductaIntrare1 = inaltimeConductaIntrare;
var xValvaConductaIntrare1 = xRezervor - lungimeValvaConductaIntrare1;
var yValvaConductaIntrare1 = yConductaIntrare - inaltimeApaIntrare1;

// valva conducta intrare (T2) - horizontal
var lungimeValvaConductaIntrare2 = inaltimeValvaConductaIntrare1;
var inaltimeValvaConductaIntrare2 = lungimeValvaConductaIntrare1;
var xValvaConductaIntrare2 = xRezervor - (lungimeValvaConductaIntrare2 / 2) - (lungimeValvaConductaIntrare1 / 2);
var yValvaConductaIntrare2 = yValvaConductaIntrare1 - inaltimeValvaConductaIntrare2;

//casuta 1
//var lungimeCasuta1 = lungimeValvaConductaIntrare2 * 0.7;
//var inaltimeCasuta1 = inaltimeValvaConductaIntrare2 * 1.1;
//var xCasuta1 = xValvaConductaIntrare1;
//var yCasuta1 = yValvaConductaIntrare2 - inaltimeCasuta1;

//F1
var lungimeF1 = lungimeValvaConductaIntrare2 * 0.96;
var inaltimeF1 = inaltimeValvaConductaIntrare2 * 1.0;
var xF1 = xValvaConductaIntrare1;
var yF1 = yValvaConductaIntrare2 - inaltimeF1;

//Text comanda
var xTextComanda = xValvaConductaIntrare2 + lungimeValvaConductaIntrare2 / 2;
var yTextComanda = yValvaConductaIntrare2 - 3;

//Legenda
var yLegenda = 202;
var xLegenda = 20;
var yl1 = yLegenda + 15;
var yl2 = yLegenda + 30;
var yl3 = yLegenda + 45;
var yl4 = yLegenda + 60;
var yl5 = yLegenda + 100;


//Schema Reglare
var lungBloc = 40;
var latBloc = 20;

var yCaleDir = 409;
var yCaleBucla = yCaleDir + 1.5* latBloc;

var xCercRef = 50;
var yCercRef = yCaleDir;
var xBlocC = xCercRef + lungBloc;
var xBlocP = xBlocC + 2 * lungBloc;
var yBlocC = yCaleDir - latBloc/2;

var latBlocA = latBloc * 0.5;
var xBlocA = xBlocC + lungBloc;
var yBlocA = yCaleBucla - latBlocA/2;

var xStalpModReglare = 0 + xBlocP + lungBloc + lungBloc/2;
var yStalpModReglare = yCaleDir;
var lungimeSosetaModReglare = lungBloc/2 - 2;

var xIndicatorReactie = xStalpModReglare -32 + 66;
var yIndicatorReactie = yStalpModReglare + 36;

var xIndicatorCentura = xStalpModReglare - 32;
var yIndicatorCentura = yStalpModReglare + 68;

var xIndicatorFrana = xStalpModReglare -32;
var yIndicatorFrana = yStalpModReglare + 36;

var xIndicatorGradeFrana = xStalpModReglare - 32;
var yIndicatorGradeFrana = yStalpModReglare - 16;

var xIndicatorNivelReactie = xStalpModReglare + 6;
var yIndicatorNivelReactie = yStalpModReglare - 36;

var xIndicatorNivelTemperatura = xStalpModReglare - 32;
var yIndicatorNivelTemperatura = yStalpModReglare - 36;

var xIndicatorFlapsuri = xStalpModReglare - 32 + 66;
var yIndicatorFlapsuri = yStalpModReglare + 36;

var xIndicatorGradeFlapsuri = xStalpModReglare - 32 +66;
var yIndicatorGradeFlapsuri = yStalpModReglare - 16;

var razaPotentiometru = 8;
var xPotentiometru = xCercRef - 0;
var yPotentiometru = yCaleDir - 54;

var grafic_valori_desenat = false;
var pauza = false;


var slider = document.getElementById("myRange");
slider.max = Math.round(data_20.length - 3);
//slider.setAttribute("value", selectorZi);


slider.oninput = function() {
    selectorZi = Math.round(this.value);
    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
    pauza = false;
    //ActualizareSuprafataGraficaSingulara();
    /*
    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }*/

    //slider.setAttribute("value", selectorZi);
    //console.log(selectorZi);
    //console.log(slider.getAttribute("value"));
}


var rangeSlider = document.getElementById("selectorzistart");
rangeSlider.max = Math.round(data_20.length - 3);
//slider.setAttribute("value", selectorZi);

rangeSlider.oninput = function(){
   selectorZiStart = Math.round(this.value);

   ActualizareSuprafataGraficaSingulara();
}

//buton afisare trend
var buton_afisaretrend = document.getElementById('afisaretrend');
buton_afisaretrend.onclick = schimbareModAfisareTrend;


function schimbareModAfisareTrend() {
    if(mod == MOD_GRAFICE){
      afisaretrend = !afisaretrend;
      if(afisaretrend){
        buton_afisaretrend.innerHTML = "<i class='material-icons' style='color:#005ce6;'>palette</i>";
      }
      else{
        buton_afisaretrend.innerHTML = "<i class='material-icons' style='color:grey;'>palette</i>";
      }

      salvarePreferintaMod();

      //console.log(afisaretrend);
      ActualizareSuprafataGraficaSingulara();
    }
}

//captura apasare taste
const input = document.querySelector('html');
input.onkeydown = modificaNivel;

//document.querySelector('body').addEventListener("wheel", redimensionareGrafic);
//document.querySelector('body').addEventListener("dblclick", schimbareModAfisareTrend);

function redimensionareGrafic(){
  if(mod == MOD_GRAFICE){
      var y = event.deltaY;
      //console.log("zoom: " + y);
      if (y > 0){
            //plus
            if(scala_grafic_2 < 0.9){
                scala_grafic_2 += 0.1;
                maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
                ActualizareSuprafataGraficaSingulara();
                //console.log(scala_grafic_2);
            }
      }
      else {
            //minus
            if(scala_grafic_2 > 0.3){
              scala_grafic_2 -= 0.1;
              maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
              ActualizareSuprafataGraficaSingulara();
              //console.log(scala_grafic_2);
            }
      }
  }
}


function restart(){
    //console.log("pagina se va reincarca");
    location.reload();
    return false;
}

//buton prelucrare
var buton_reluare = document.getElementById('derulare');
buton_reluare.onclick = function() {
    restart();
    /*selectorZi = 0;
    slider.setAttribute("value", selectorZi);
    derulareAutomata = true;
    pauza = false;*/

    //console.log(slider.getAttribute("value"));
    //procentDinCapacitateMax = data[selectorZi]/maxValue;
}


var buton_derulare_inapoi = document.getElementById('derulareinapoi');
buton_derulare_inapoi.onclick = function() {
  if (selectorZi > 0){
      selectorZi -= 1;
      procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
      //slider.setAttribute("value", selectorZi);
      slider.value = Math.round(selectorZi);
      ActualizareSuprafataGraficaSingulara();
  }
}

var buton_derulare_inainte = document.getElementById('derulareinainte');
buton_derulare_inainte.onclick = function() {
  if (selectorZi < data.length - 1){
      selectorZi += 1;
      procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
      //slider.setAttribute("value", selectorZi);
      slider.value = Math.round(selectorZi);
      ActualizareSuprafataGraficaSingulara();
  }
}

var buton_scalare_plus = document.getElementById('scalare_plus');
buton_scalare_plus.onclick = function() {
    if(mod == MOD_GRAFICE){
        if(scala_grafic_2 < 0.9){
            scala_grafic_2 += 0.1;
            maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
            ActualizareSuprafataGraficaSingulara();
            //console.log(scala_grafic_2);
        }
    } else if(mod == MOD_RADAR){
        if(scalaRadarY < 10){
          //console.log("scalaRadarY: " + scalaRadarY);
          scalaRadarY += 0.5;
          ActualizareSuprafataGraficaSingulara();
          //console.log("scalaRadarY: " + scalaRadarY);
        }
    }
}

var buton_scalare_minus = document.getElementById('scalare_minus');
buton_scalare_minus.onclick = function() {
    if(mod == MOD_GRAFICE){
        if(scala_grafic_2 > 0.3){
          scala_grafic_2 -= 0.1;
          maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
          ActualizareSuprafataGraficaSingulara();
          //console.log(scala_grafic_2);
        }
    }else if(mod == MOD_RADAR){
        if(scalaRadarY > 1.0){
          scalaRadarY -= 0.5;
          ActualizareSuprafataGraficaSingulara();
          //console.log("scalaRadarY: " + scalaRadarY);
        }
    }
}

//buton foto
var buton_foto = document.getElementById('foto');
var buton_rezervor = document.getElementById('rezervor');
var buton_grafice = document.getElementById('grafice');
var buton_radar = document.getElementById('radar');
var buton_harta = document.getElementById('harta');

var b3_width = "44px";
var b3_height = "50px";

var b_grafice_width = "48px";
var b_grafice_height = "54px";

function resetare_dim_butoane(){
  buton_foto.style.height = b3_height;
  buton_foto.style.width = b3_width;

  buton_rezervor.style.height = b3_height;
  buton_rezervor.style.width = b3_width;

  buton_grafice.style.height = b3_height;
  buton_grafice.style.width = b3_width;

  buton_radar.style.height = b3_height;
  buton_radar.style.width = b3_width;

  buton_harta.style.height = b3_height;
  buton_harta.style.width = b3_width;
}

buton_foto.onclick = function() {
    mod = MOD_FOTOGRAFIE;

    selectorArie.style.display = "none";

    resetare_dim_butoane();
    buton_foto.style.height = b_grafice_height;
    buton_foto.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}

buton_harta.onclick = function() {
    mod = MOD_HARTA;

    selectorArie.style.display = "none";

    resetare_dim_butoane();
    buton_harta.style.height = b_grafice_height;
    buton_harta.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}

buton_radar.onclick = function() {
    mod = MOD_RADAR;

    selectorArie.style.display = "initial";

    resetare_dim_butoane();
    buton_radar.style.height = b_grafice_height;
    buton_radar.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}


buton_grafice.onclick = function() {
    //if(mod == MOD_REGULATOR || mod == MOD_FOTOGRAFIE){
    mod = MOD_GRAFICE;

    selectorArie.style.display = "initial";

    resetare_dim_butoane();
    buton_grafice.style.height = b_grafice_height;
    buton_grafice.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}


buton_rezervor.onclick = function() {

    mod = MOD_REGULATOR;

    selectorArie.style.display = "none";

    resetare_dim_butoane();
    buton_rezervor.style.height = b_grafice_height;
    buton_rezervor.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}


var selectorArie = document.getElementById("selectie-arie");
//nrArie = selectorArie.options[selectorArie.selectedIndex].value;
//console.log("nrArieSelectata: " + nrArie);

selectorArie.onchange = function() {
    nrArie = parseInt(selectorArie.options[selectorArie.selectedIndex].value);
    //console.log("nrArieSelectata: " + nrArie);
    salvareNrArie();
    restart();
}

function schimbareSelectieArie(zona){
  nrArie = parseInt(zona);
  //console.log("nrArieSelectata: " + nrArie);
  salvareNrArie();
  restart();
}


function afisareSortata(){
  if(mod_sortare == 1){
    mod_sortare = 0;
  }
  else{
    mod_sortare = 1;
  }

  //console.log("nrArieSelectata: " + nrArie);
  salvareModSortare();
  restart();
}

function resetareScala(){
  if(scalaRadarY > 1){
    scalaRadarY = 1;
  }
  else{
    //resetare scala implicita
    scalaRadarY = 1.0;
  }
  ActualizareSuprafataGraficaSingulara();

}


function modificaNivel(e){
    if (e.code === "ArrowDown" || e.code === "ArrowLeft"){
        /*if (procentDinCapacitateMax > 0)
          procentDinCapacitateMax -= incrementVariatieSimulare;*/
          if (selectorZi > 0)
            selectorZi -= 1;
    }

    if (e.code === "ArrowUp" || e.code === "ArrowRight"){
        /*if (procentDinCapacitateMax < 1.0)
          procentDinCapacitateMax += incrementVariatieSimulare;*/
          if (selectorZi < (data.length - 1))
            selectorZi += 1;
    }

    if(e.code === "Space" && e.target == document.body) {
        pauza = !pauza;
        e.preventDefault();
    }

    if(e.code === "KeyT") {
        console.log("T apasat");
        //zi = 189;
        let nr_zile = _Flourish_data.data.length;
        console.log("nr_zile = " + nr_zile);

        for(let judet=0; judet<_Flourish_data_column_names.data.value.length; judet++){
          console.log(_Flourish_data_column_names.data.value[judet]);
          console.log(_Flourish_data.data[nr_zile-1].value[judet]);
        }

    }

    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
    //slider.setAttribute("value", selectorZi);
    slider.value = Math.round(selectorZi);
    ActualizareSuprafataGraficaSingulara();
}

function prelucrareDate(){
    if(comutareArie && nrArie <= nr_arii){
        //console.log("Mod comutare arie");
        //console.log("Arie: " + nrArie)

        //resetare interval lipsa date [21/03 - 02/04]
        for(let i = 0; i < 14; i++){
            data_2[i] = 0;
        }

        //stocare date arie in data_2
        for(let i = 0; i < nr_zile_arie; i++){
            data_2[12+ i] = parseInt(dateArie.data[i].value[nrArie]);
            //console.log(data_2[12+ i]);
            //resetare valori negative
            /*
            if(data_2[12+i] < 0){
                data_2[12+i] = 0;
            }*/
        }
        //console.log("nrArie" + nrArie);
        //for(let i = 0; i<data_2.length; i++){
          //console.log(data_2[i]);
        //}

        //mediere
        for(let i = 2; i < nr_zile_arie; i++){
            medie = (parseInt(dateArie.data[i].value[nrArie]) + parseInt(dateArie.data[i-1].value[nrArie]) + parseInt(dateArie.data[i-2].value[nrArie])) / 3;
            if(medie<0){
              medie = 0;
            }
            data_2[12+i] = medie;
            //console.log(medie);
        }


        for(let i = 2; i < data_20.length; i++){
            //c
            //medie = (data_20[i] + data_20[i-1] + data_20[i-2]) / 3;
            //data_2[i-2] = medie;

            //d
            medie = (data_10[i] + data_10[i-1] + data_10[i-2]) / 3;
            data[i-2] = medie;
        }

        for(let i = 2; i < data_30.length; i++){
            //p
            medie = (data_30[i] + data_30[i-1] + data_30[i-2]) / 3;
            data_3[i-2] = medie;
        }
    }
    else{
        //if nrArie = 43
        for(let i = 2; i < data_20.length; i++){
            //c
            medie = (data_20[i] + data_20[i-1] + data_20[i-2]) / 3;
            data_2[i-2] = medie;

            //d
            medie = (data_10[i] + data_10[i-1] + data_10[i-2]) / 3;
            data[i-2] = medie;
        }

        for(let i = 2; i < data_30.length; i++){
            //p
            medie = (data_30[i] + data_30[i-1] + data_30[i-2]) / 3;
            data_3[i-2] = medie;
        }
    }

    //generare vector date toate aeronavle 2b
    for(let i = 2; i < data_20.length; i++){
        //c
        medie = (data_20[i] + data_20[i-1] + data_20[i-2]) / 3;
        data_2Toate[i-2] = medie;

        //d
        medie = (data_10[i] + data_10[i-1] + data_10[i-2]) / 3;
        dataToate[i-2] = medie;
    }


}

function calculScalaGrafic(){
  maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
  yPunct = Math.round(yGrafic_2 - ((data_2[data_2.length-1]*scalaY_trend_2)/maxValueGrafic2));
  //console.log(yPunct);

  factorScalare = Math.floor((100 - yPunct) / 20); // multipli de 20px de la 40px inaltime
  scala_grafic_2 += factorScalare * 0.1;
}


function calculVectori(data){
  var vectorReturnati = [];
  var vector1 = data;
  var vector2 = data;

  vectorReturnati[0] = vector1;
  vectorReturnati[1] = vector2;

  return vectorReturnati;
}


function generareVectoriParametrii(dataInput){
    /*
    var vectoriParametriiZonaReturnati = {
      vector_r: [],
      vector_K: [],
    };*/

    var vector_r = [];
    var vector_r_normalizat = [];
    var vector_coefA = [];
    var vector_E = [];
    var vectorDR = [];
    var vectorD2R = [];

    var zi_start = 0;
    var sumX = 0;
    var sumY = 0;
    var sumXY = 0;
    var sumX2 = 0;
    var sumY2 = 0;
    var sumY_raw = 0;
    var medieY_raw = 0;
    var esantion = 0;
    var logEsantion = 0;
    var bazaR = 0;
    var coefA = 0;

    n = (orizont_regresie);
    //console.log(n);
    //console.log(data_2.length);
    //for(let k = 0; k < orizont_trend + orizont_arie; k++){
    for(let k = 0; k < n + ORIZONT_ARIE; k++){
      vector_r[k] = 0;
      vector_r_normalizat[k] = 0;
      vector_coefA[k] = 0;
      vector_E[k] = 0;

      //console.log("k=" + k);
    }



    //for(let k = orizont_trend + orizont_arie; k <= dataInput.length; k++){
    for(let k = n + ORIZONT_ARIE; k <= dataInput.length; k++){


        zi_start = k - n;

        sumX = 0;
        sumY = 0;
        sumXY = 0;
        sumX2 = 0;
        sumY2 = 0;
        //contor = 0;
        sumY_raw = 0;
        medieY_raw = 0;

        for(let i = zi_start; i < k; i++){
          //console.log(i);
          //SumX
          sumX += i;

          //SumY(SumLn(y))
          esantion = dataInput[i];
          logEsantion = Math.log(esantion);

          if(esantion <= 0){
              esantion = 0;
              logEsantion = 0;
          }
          //if(data_2[i]>0){
          sumY += logEsantion;
          sumY_raw += dataInput[i];//esantion;

          //SumXY(SumXLn(y))
          sumXY += i*logEsantion;

          //SumX^2
          sumX2 += i*i;

          sumY2 += logEsantion * logEsantion;

        }

        m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
        b = (sumY - m*sumX) / n;

        bazaR = Math.exp(m);
        coefA = Math.exp(b);

        //console.log("n=" + n + " contor=" + contor);

        medieY_raw = sumY_raw / n;

        let varianta = 0;
        for (let i = zi_start; i < k; i++) {
           varianta += Math.pow((dataInput[i] - medieY_raw), 2);
        }
        let devst = Math.sqrt(varianta / (n-1));

        //varianta2 = Math.floor(varianta*100) / 100;
        //devst2 = Math.round(devst);

        vector_r[k-1] = bazaR;
        vector_coefA[k-1] = coefA;
        vector_r_normalizat[k-1] = (bazaR - 1) * 1000;
        vector_E[k-1] = devst;

    }

    /*
    console.log("vector r generat");
    for (let k = 0; k < vector_r.length; k++){
      console.log("v_r[" + k + "]: " + vector_r[k]);
    }*/

    //vector derivate R
    for (let k = 0; k < vector_r.length; k++){
        //console.log("v_r[" + k + "]: " + vector_r[k]);
        if(k > orizont_trend){
          vr0 = vector_r[k-16];
          vr1 = vector_r[k-8];
          vr2 = vector_r[k];
          d1r1 = (vr1 - vr0)/8;
          d1r2 = (vr2 - vr1)/8;
          d2r2 = (d1r2 - d1r1)/8;

          vectorDR[k] = d1r2;
          vectorD2R[k] = d2r2;
        }
        else{
          vectorDR[k] = 0;
          vectorD2R[k] = 0;
        }
    }

    var vectoriParametriiZonaReturnati = {
      vector_r: vector_r,
      vector_r_normalizat: vector_r_normalizat,
      vector_coefA: vector_coefA,
      vector_E: vector_E,
      vectorDR: vectorDR,
      vectorD2R: vectorD2R,
    };

    return vectoriParametriiZonaReturnati;
}


function generareAnalizaDate(){
  vectoriDateZone = [];

  var medie = 0;

  for (let zona=0; zona < numeArii.data.value.length; zona++){
      var dataInputZona = [];

      //prelucrare date - resetare interval lipsa date [21/03 - 02/04]
      for(let zi = 0; zi < 14; zi++){
          dataInputZona[zi] = 0;
      }
      //stocare date arie in dataInputZona
      for(let zi = 0; zi < dateArie.data.length; zi++){
          dataInputZona[12+zi] = parseInt(dateArie.data[zi].value[zona]);
      }
      //mediere
      for(let zi = 2; zi < dateArie.data.length; zi++){
          medie = (parseInt(dateArie.data[zi].value[zona]) + parseInt(dateArie.data[zi-1].value[zona]) + parseInt(dateArie.data[zi-2].value[zona])) / 3;
          if(medie<0){
            medie = 0;
          }
          dataInputZona[12+zi] = medie;
      }

      vectoriParametriiZona = generareVectoriParametrii(dataInputZona);

      vectoriDateZone[zona] = {
        date: dataInputZona,
        vector_r: vectoriParametriiZona.vector_r,
        vector_r_normalizat: vectoriParametriiZona.vector_r_normalizat,
        vector_coefA: vectoriParametriiZona.vector_coefA,
        vector_E: vectoriParametriiZona.vector_E,
        vectorDR: vectoriParametriiZona.vectorDR,
        vectorD2R: vectoriParametriiZona.vectorD2R,
      };
      //console.log(dataInputZona);
      //console.log("------------");
  }

}

function start() {
    generareAnalizaDate();

    /*
    var myVector = [1, 2, 3, 4];
    var vectorReturnati = [];
    console.log(vectorReturnati);
    vectorReturnati = calculVectori(myVector);
    console.log(vectorReturnati);

    */

    //incrementX = 2.9;
    //incrementX = Math.round((lungimeSuprafataGrafica) / (data.length + 1)) - 2;
    //console.log(incrementX);

    //prelucrare date
    /*
    for (let i = 0; i < data.length; i++) {
        if (data[i]>maxValue)
          maxValue = data[i];
    }*/
    setare_mod_sortare();
    setare_nr_arie();
    if(nrArie == 43){
      orizont_arie = 0;
      textArieSelectata = selectorArie.options[0].text;
    }
    else{
      orizont_arie = ORIZONT_ARIE;
      textArieSelectata = selectorArie.options[nrArie+1].text;
    }



    prelucrareDate();


    maxValue = Math.max(...data);
    maxValue_2 = Math.max(...data_2);
    maxValue_3 = Math.max(...data_3); //p+

    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;

    //calcul contor vectorizare/limitare
    for(let i=0; i < evenimente_tip.length; i++){
        if(evenimente_tip[i] == culoareVerde){
          contorLimitare++;
          evenimente_contor[i] = contorLimitare;
        }
        else{
          contorVectorizare++;
          evenimente_contor[i] = contorVectorizare;
        }
    }


    //construire vector date cumulative
    var nr_eveniment = -1;
    var nr_info = -1;
    var cumul;
    for (let i = 0; i < data.length; i++) {
        cumul = 0;

        for (let j = 0; j <= i ; j++) {
          cumul = cumul + data[j];
        }

        dataCumulativ[i] = cumul;
        medieCumulativ[i] = cumul/(i+1);
        comandaIdeala[i] = Math.round(kp*data[i] + ki*medieCumulativ[i] + (kd * medieCumulativ[i] * intervalProiectie));

        for(let k=0; k < evenimente_tip.length; k++){
            if(data_data[i] == evenimente[k]){
                if(evenimente_tip[k] == culoareVerde){
                  contorLimitare2++;
                }
                else{
                  contorVectorizare2++;
                }
                nr_eveniment = k;
            }
        }

        zile_contor_limitare[i] = contorLimitare2;
        zile_contor_vectorizare[i] = contorVectorizare2;
        zile_evenimente_actiuni[i] = nr_eveniment;

        for(let k=0; k < info_date.length; k++){
            if(data_data[i] == info_date[k]){
                nr_info = k;
            }
        }

        zile_info_explicatii[i] = nr_info;
    }

    //construire vectori cumulativi Toate
    var cumul;
    for (let i = 0; i < dataToate.length; i++) {
        cumul = 0;

        for (let j = 0; j <= i ; j++) {
          cumul = cumul + dataToate[j];
        }

        dataCumulativToate[i] = cumul;
        medieCumulativToate[i] = cumul/(i+1);
    }

    //construire vector avarii cumulativ
    for (let i = 0; i < data_2.length; i++) {
        cumul = 0;

        for (let j = 0; j <= i ; j++) {
          cumul = cumul + data_2[j];
        }

        avariiCumulativ[i] = cumul;
        //rataPierderiAvarii[i] = dataCumulativ[i]/avariiCumulativ[i];
    }

    //construire vector avarii cumulativ Toate
    for (let i = 0; i < data_2Toate.length; i++) {
        cumul = 0;

        for (let j = 0; j <= i ; j++) {
          cumul = cumul + data_2Toate[j];
        }

        avariiCumulativToate[i] = cumul;
        //rataPierderiAvarii[i] = dataCumulativ[i]/avariiCumulativ[i];
    }


    maxCompensator = Math.max(...comandaIdeala);

    //Calcul Total
    //console.log(dataCumulativ.length);
    valoareCumulativaTotal = Math.round(dataCumulativ[dataCumulativ.length-1]);
    //console.log(valoareCumulativaTotal);

    //Calcul valoare referinta(medie)
    nr_zile = data.length - 1;
    //valoareReferinta = Math.round(valoareCumulativaTotal / nr_zile);
    //console.log(valoareReferinta);

    //generare suprafata
    suprafataGrafica.constructie();
    ctx = suprafataGrafica.context;

    //incarcare imagine
    fotografie.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(fotografie, 0, 0);
    }

    harta.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(harta, 0, 0);
    }

    //Calcul Parametrii Predictie (coefA,bazaR)
    generare_vector_r_coefA();
    generare_vector_rToate_coefA();
    maxValue_4 = Math.max(...vector_r_normalizat);
    maxValueR = Math.max(...vector_r);
    //calcul_parametrii_Predictie();
    maxValueProiectie = coefA * Math.pow(bazaR, data_2.length - 1 + orizont_proiectie);

    //console.log(maxValueProiectie);

    //Activare scalare dinamica - calcul dinamic scala_grafic_2
    //calculScalaGrafic();

    maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2; //- Math.abs(Math.floor((maxValue_2 - maxValueProiectie) * 0.7));
    //console.log("maxValue_2: " + maxValue_2);
    //console.log("maxValueProiectie: " + maxValueProiectie);
    //console.log("maxValueGrafic2 (max): " + maxValueGrafic2);


    for(let i=0; i < data_2.length; i++ ){
        if(i>(orizont_regresie + orizont_arie)){
          vector_valZiCurenta[i] = vector_coefA[i] * Math.pow(vector_r[i], (i-1));
          vector_E_procentual[i] = vector_E[i] / vector_valZiCurenta[i];

          vector_valZiCurentaToate[i] = vector_coefAToate[i] * Math.pow(vector_rToate[i], (i-1));
          //procentajul erorii se calculeaza pentru ziua curenta, nu pentru ziua proiectiei
          //console.log("i=" + i + " " + vector_valZiCurenta[i] +" " + vector_E_procentual[i]);
          //console.log("");
        }
        else {
          vector_valZiCurenta[i] = 0;
          vector_E_procentual[i] = 0;

          vector_valZiCurentaToate[i] = 0;
        }
    }
    maxValZiCur = Math.max(...vector_valZiCurenta);

    //calcul traiectorie avion Radar

    for(let i=0; i < data_2.length; i++ ){
        if(i>(orizont_regresie + orizont_arie)){
            //vector_valZiCurenta[i] = vector_coefA[i] * Math.pow(vector_r[i], (i-1));
            //vector_E_procentual[i] = vector_E[i] / vector_valZiCurenta[i];

            //var xAvion = xRadar + vector_r[selectorZi]/maxValueR * (razaCerc1);

            vectorXAvion[i] = vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
            vectorXAvionRegulator[i] = vector_r_normalizat[i] / scalaPozitieXAvionRegulator * (razaCerc1Regulator);
            vectorXAvionRegulatorToate[i] = vector_rToate_normalizat[i] / scalaPozitieXAvionRegulator * (razaCerc1Regulator) ;

            if(nrArie == 43){
              //vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);
              vectorYAvion[i] = - vector_valZiCurenta[i] / scalareTraiectorieAvionToate;
              vectorYAvionRegulator[i] = - vector_valZiCurenta[i] / scalareTraiectorieAvionToateRegulator;
              vectorYAvionRegulatorToate[i] = - vector_valZiCurentaToate[i] / scalareTraiectorieAvionToateRegulator;
            }
            else{
              vectorYAvion[i] = - vector_valZiCurenta[i] / scalareTraiectorieAvion;
              vectorYAvionRegulator[i] = - vector_valZiCurenta[i] / scalareTraiectorieAvionRegulator;
              vectorYAvionRegulatorToate[i] = - vector_valZiCurentaToate[i] / scalareTraiectorieAvionToateRegulator;
            }
        }
    }

    for(let zona = 0; zona < vectoriDateZone.length; zona++){
      //console.log(zona);
      var vectorMedieZiCurenta = [];
      var vectorProiectieZiCurenta = [];
      var vectorDeltaZiCurenta = [];
      var vectorXAvionZona = [];
      var vectorYAvionZona = [];
      var vectorXAvionZonaRegulator = [];
      var vectorYAvionZonaRegulator = [];

      for(let zi=0; zi<vectoriDateZone[0].date.length; zi++){
          if(zi>(orizont_regresie + orizont_arie)){
              vectorMedieZiCurenta[zi] = vectoriDateZone[zona].vector_coefA[zi] * Math.pow(vectoriDateZone[zona].vector_r[zi], (zi-1));
              vectorProiectieZiCurenta[zi] = vectoriDateZone[zona].vector_coefA[zi] * Math.pow(vectoriDateZone[zona].vector_r[zi], (zi + orizont_proiectie-1));
              vectorDeltaZiCurenta[zi] = vectorProiectieZiCurenta[zi] - vectorMedieZiCurenta[zi];

              vectorXAvionZona[zi] = vectoriDateZone[zona].vector_r_normalizat[zi] / scalaPozitieXAvion * (razaCerc1) * scalaXAvionRadar;
              vectorXAvionZonaRegulator[zi] = vectoriDateZone[zona].vector_r_normalizat[zi] / scalaPozitieXAvionRegulator * (razaCerc1Regulator) * scalaXAvionRadarRegulator;
              //if(nrArie == 43){
              //  vectorYAvionZona[zi] = yRadarModRadar - vectorMedieZiCurenta[zi] / scalareTraiectorieAvionToate;
              //}
              //else{
              vectorYAvionZona[zi] = - vectorMedieZiCurenta[zi] / scalareTraiectorieAvion * scalaYAvionRadar ;
              vectorYAvionZonaRegulator[zi] = - vectorMedieZiCurenta[zi] / scalareTraiectorieAvionRegulator * scalaYAvionRadarRegulator ;
              //}
          }
      }
      vectoriDateZone[zona]["vectorMedieZiCurenta"] = vectorMedieZiCurenta;
      vectoriDateZone[zona]["vectorProiectieZiCurenta"] = vectorProiectieZiCurenta;
      vectoriDateZone[zona]["vectorDeltaZiCurenta"] = vectorDeltaZiCurenta;
      vectoriDateZone[zona]["vectorXAvion"] = vectorXAvionZona;
      vectoriDateZone[zona]["vectorYAvion"] = vectorYAvionZona;
      vectoriDateZone[zona]["vectorXAvionRegulator"] = vectorXAvionZonaRegulator;
      vectoriDateZone[zona]["vectorYAvionRegulator"] = vectorYAvionZonaRegulator;

      vectoriDateZone[zona]["nume"] = numeArii.data.value[zona].substring(0,3);

      //numeArie = numeArii.data.value[arie].substring(0,3);

    }


    setare_mod();

    //var selectorArie = document.getElementById("selectie-arie");
    if(nrArie >= 0){
      if(nrArie == 43){
        //43 - toate ariile - index 0
        selectorArie.selectedIndex = "0";
        //console.log("schimbare selectie arie: index = " + 0 );
      }
      else{
        selectorArie.selectedIndex = 1 + parseInt(nrArie);
        //var indexnou = 1 + parseInt(nrArie);
        //console.log("schimbare selectie arie: index = " + indexnou);
      }

    }
    //nrArie = selectorArie.options[selectorArie.selectedIndex].value;
    //console.log("nrArieSelectata: " + nrArie);

    var buton_grafice = document.getElementById("grafice");
    var link_copac = document.getElementById("copac2");
    if(vector_r[(data_2.length-1)] > 1){
      //console.log("up");
      buton_grafice.innerHTML = "<i class='material-icons' style='color:#996633'>trending_up</i>";
      link_copac.innerHTML = "<i class='material-icons' style='color:#996633'>nature_people</i>";

    }
    else{
      //console.log("down");
      buton_grafice.innerHTML = "<i class='material-icons' style='color:green'>trending_down</i>";
      link_copac.innerHTML = "<i class='material-icons' style='color:green'>nature_people</i>";
    }

    resetare_dim_butoane();
    if(mod == MOD_GRAFICE){
        buton_grafice.style.height = b_grafice_height;
        buton_grafice.style.width = b_grafice_width;
    } else if(mod == MOD_REGULATOR){
        buton_rezervor.style.height = b_grafice_height;
        buton_rezervor.style.width = b_grafice_width;
    } else if(mod == MOD_FOTOGRAFIE){
        buton_foto.style.height = b_grafice_height;
        buton_foto.style.width = b_grafice_width;
    } else if(mod == MOD_HARTA){
        buton_harta.style.height = b_grafice_height;
        buton_harta.style.width = b_grafice_width;
    }
    else{
      buton_radar.style.height = b_grafice_height;
      buton_radar.style.width = b_grafice_width;
    }

    //console.log("la start afisaretrend =" + afisaretrend);
    if(afisaretrend){
      //console.log("se seteaza culoarea albastra");
      buton_afisaretrend.innerHTML = "<i class='material-icons' style='color:#005ce6;'>palette</i>";
    }
    else{
      //console.log("se seteaza culoarea gri");
      buton_afisaretrend.innerHTML = "<i class='material-icons' style='color:grey;'>palette</i>";
    }

    //afisare selector arie
    if(mod == MOD_GRAFICE || mod == MOD_RADAR){
      selectorArie.style.display = "initial";
    }
    else{
      selectorArie.style.display = "none";
    }

    generareClasamentAeronavePeZile();
    inserareTabelZone();
    inserareTabelPozitii();
    inserareTabelVitezePropagare();
    inserareTabelAltitudini();
    inserareTabelTraiectorii();
    inserareDateTabele();
}

function inserareDateTabele(){
    var data_zi_luna = data_data[vectoriDateZone[0].vector_r.length-1].split("/");
    var tab_zi = data_zi_luna[0];
    var tab_luna = data_luni_lung[data_zi_luna[1]-1];

    //ctx.font = "italic 16px Helvetica, Arial, sans-serif";
    //ctx.fillText( "(" + zi + " " + luna + ")", xTextZi + 75 + (String(selectorZi).length) * 18, yTextZi);


    var elementeDate = document.getElementsByClassName("text_data2");
    for(i = 0; i<elementeDate.length; i++){
        elementeDate[i].textContent = "Ziua " + (vectoriDateZone[0].vector_r.length-1) + " (" + tab_zi + " " + tab_luna + ")";
    }

    var data_zi_luna2 = data_data[vectoriDateZone[0].vector_r.length-1+orizont_proiectie].split("/");
    var tab_zi2 = data_zi_luna2[0];
    var tab_luna2 = data_luni_lung[data_zi_luna2[1]-1];

    //var elementData3 = document.getElementsByClassName("text_data3")[0];
    //elementData3.textContent = "Ziua " + (vectoriDateZone[0].vector_r.length-1) + " (" + tab_zi + " " + tab_luna +" ⇨ " + tab_zi2 + " " + tab_luna2 + ")";
}


function generareClasamentAeronavePeZile(){
  /*
  clasamentAeronaveZile = [];
  var totalZile = vectoriDateZone[0].vector_r.length;//-1

  for(let zi=0; zi < totalZile; zi++){
      var clasamentAeronave = [];
      for(let arie=0; arie < numeArii.data.value.length; arie++){

          valoareProiectie = vectoriDateZone[arie].vector_coefA[zi] * Math.pow(vectoriDateZone[arie].vector_r[zi], zi + orizont_proiectie - 1);
          valoareMedie = vectoriDateZone[arie].vector_coefA[zi] * Math.pow(vectoriDateZone[arie].vector_r[zi], zi-1);
          delta = valoareProiectie - valoareMedie;
          numeArie = numeArii.data.value[arie].substring(0,3);

          clasamentAeronave[arie] = {
            arie: arie,
            r: vectoriDateZone[arie].vector_r[zi],
            proiectie: valoareProiectie,
            medie: valoareMedie,
            delta: delta,
            nume: numeArie
          };
      }

      clasamentAeronaveZile[zi] = {ziua:zi, clasament: clasamentAeronave};
  }*/

  //var clasamentProiectie = clasamentAeronaveZile[selectorZi].clasament;
  //clasamentProiectie.sort(function(a, b){return a.proiectie - b.proiectie});

  var totalZile = vectoriDateZone[0].vector_r.length;//-1

  //SORTARE Medie
  clasamentAeronaveZileSortatMedie = [];
  clasamentAeronaveZileSortatProiectie = [];
  clasamentAeronaveZileSortatArie = [];
  clasamentAeronaveZileSortatR = [];
  clasamentAeronaveZileSortatMedieDesc = [];

  for(let zi=0; zi < totalZile; zi++){
      var clasamentAeronave0 = [];
      var clasamentAeronave1 = [];
      var clasamentAeronave2 = [];
      var clasamentAeronave3 = [];
      var clasamentAeronave4 = [];

      for(let arie=0; arie < numeArii.data.value.length; arie++){

          //valoareProiectie = vectoriDateZone[arie].vector_coefA[zi] * Math.pow(vectoriDateZone[arie].vector_r[zi], zi + orizont_proiectie - 1);
          //valoareMedie = vectoriDateZone[arie].vector_coefA[zi] * Math.pow(vectoriDateZone[arie].vector_r[zi], zi-1);
          //delta = valoareProiectie - valoareMedie;
          //numeArie = numeArii.data.value[arie].substring(0,3);

          clasamentAeronave0[arie] = {
            arie: arie,
            //r: vectoriDateZone[arie].vector_r[zi],
            //proiectie: valoareProiectie,
            //medie: valoareMedie,
            //delta: delta,
            //nume: numeArie
          };

          clasamentAeronave1[arie] = {
            arie: arie,
            //r: vectoriDateZone[arie].vector_r[zi],
            //proiectie: valoareProiectie,
            medie: vectoriDateZone[arie].vectorMedieZiCurenta[zi],//valoareMedie,
            //delta: delta,
            //nume: numeArie
          };

          clasamentAeronave4[arie] = {
            arie: arie,
            //r: vectoriDateZone[arie].vector_r[zi],
            //proiectie: valoareProiectie,
            medie: vectoriDateZone[arie].vectorMedieZiCurenta[zi],//valoareMedie,
            //delta: delta,
            //nume: numeArie
          };


          clasamentAeronave2[arie] = {
            arie: arie,
            //r: vectoriDateZone[arie].vector_r[zi],
            proiectie: vectoriDateZone[arie].vectorProiectieZiCurenta[zi],//valoareProiectie,
            //medie: valoareMedie,
            //delta: delta,
            //nume: numeArie
          };

          clasamentAeronave3[arie] = {
            arie: arie,
            r: vectoriDateZone[arie].vector_r[zi],
            //proiectie: vectoriDateZone[arie].vectorProiectieZiCurenta[zi],//valoareProiectie,
            //medie: valoareMedie,
            //delta: delta,
            //nume: numeArie
          };

          clasamentAeronave4[arie] = {
            arie: arie,
            //r: vectoriDateZone[arie].vector_r[zi],
            //proiectie: valoareProiectie,
            medie: vectoriDateZone[arie].vectorMedieZiCurenta[zi],//valoareMedie,
            //delta: delta,
            //nume: numeArie
          };


      }

      //sortare arie crescatoare
      clasamentAeronave0.sort(function(a, b){return a.arie - b.arie});
      clasamentAeronaveZileSortatArie[zi] = {ziua:zi, clasament: clasamentAeronave0};

      //sortare medie
      clasamentAeronave1.sort(function(a, b){return b.medie - a.medie});
      //clasamentAeronave.sort(function(a, b){return a.arie - b.arie});
      clasamentAeronaveZileSortatMedie[zi] = {ziua:zi, clasament: clasamentAeronave1};

      clasamentAeronave2.sort(function(a, b){return a.proiectie - b.proiectie});
      clasamentAeronaveZileSortatProiectie[zi] = {ziua:zi, clasament: clasamentAeronave2};

      clasamentAeronave3.sort(function(a, b){return a.r - b.r});
      clasamentAeronaveZileSortatR[zi] = {ziua:zi, clasament: clasamentAeronave3};

      clasamentAeronave4.sort(function(a, b){return a.medie - b.medie});
      //clasamentAeronave.sort(function(a, b){return a.arie - b.arie});
      clasamentAeronaveZileSortatMedieDesc[zi] = {ziua:zi, clasament: clasamentAeronave4};
  }




}

//formatie
function actualizareTabelZone(){
    if(selectorZi >= clasamentAeronaveZileSortatProiectie.length)
        return;

    var clasamentProiectie = clasamentAeronaveZileSortatProiectie[selectorZi].clasament;

    //clasamentProiectie.sort(function(a, b){return a.proiectie - b.proiectie});

    var elementZona, textElement;
    for(let zona=0; zona < numeArii.data.value.length; zona++){

        //pauza = true;

        elementZona1 = document.getElementById("zona" + zona);
        elementZona1b = document.getElementsByClassName("zona" + zona +" nume_zona")[0];
        elementZona1c = document.getElementsByClassName("zona" + zona +" val_delta")[0];
        elementZona1d = document.getElementsByClassName("zona" + zona +" Me-Pr")[0];
        elementZona2 = document.getElementsByClassName("zona" + zona +" val_r")[0];
        elementZona3 = document.getElementsByClassName("zona" + zona +" val_cl_r")[0];

        /////elementZona1b.textContent = "" + clasamentProiectie[zona].nume;
        elementZona1b.textContent = "" + vectoriDateZone[clasamentProiectie[zona].arie].nume;


        //textElement = Math.round(clasamentAeronaveZile[selectorZi].clasament[zona].medie);
        /////textElement = Math.round(clasamentProiectie[zona].medie);
        textElement = Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorMedieZiCurenta[selectorZi]);

        ////if(clasamentProiectie[zona].delta > 0){
        if(vectoriDateZone[clasamentProiectie[zona].arie].vectorDeltaZiCurenta[selectorZi] > 0){
            textElement += "\u279A ";//"↗ ";
            elementZona1c.textContent = "(+" + Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorDeltaZiCurenta[selectorZi]) + ")";
        }
        else{
            textElement += "\u2798 ";//"↘ ";
            elementZona1c.textContent = "(" + Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorDeltaZiCurenta[selectorZi]) + ")";
        }

        textElement += Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorProiectieZiCurenta[selectorZi]);
        elementZona1d.textContent = textElement;


        if(selectorZi > orizont_regresie + ORIZONT_ARIE){

            if(Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorDeltaZiCurenta[selectorZi]) > limita_max_crestere_delta){ // var 2 - 250
                elementZona1.style.background = "#c32222";
                elementZona1.style.color = "white";
            }
            else{
                if(Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorMedieZiCurenta[selectorZi])<1){
                    //elementZona1.style.background = "white";
                    //elementZona1.style.color = "green";
                    elementZona1.style.background = "#f2f2f2";
                    elementZona1.style.color = "#8c8c8c";
                }
                else{
                  if(vectoriDateZone[clasamentProiectie[zona].arie].vector_r[selectorZi] < 1){
                      elementZona1.style.background = "lightgreen";
                      elementZona1.style.color = "green";
                  }
                  else{
                      elementZona1.style.background = culoareCerculetRCrestere;
                      elementZona1.style.color = "#4d3319";
                  }
                }

            }

            //elementZona.textContent = "R=" + Math.floor((clasamentZone[selectorZi].r-1)*10000)/100;
            elementZona2.textContent = "R=" + Math.floor((vectoriDateZone[clasamentProiectie[zona].arie].vector_r[selectorZi]-1)*10000)/100;
            elementZona3.textContent = "#" + (zona + 1);
            //elementZona4.textContent = "Me=" + Math.round(clasamentProiectie[zona].medie);
            //elementZona5.textContent = "Pr=" + Math.round(clasamentProiectie[zona].proiectie);


            if(clasamentProiectie[zona].arie == nrArie){
                //elementZona1 = document.getElementById("zona" + zona);
                elementZona1.style.borderColor = "yellow";
                elementZona1.style.borderLeftWidth = "8px";
                //console.log("bingo");

                //elementChenarZona = document.getElementsByClassName("pozitii zona" + zona + " nume")[0];
                //elementChenarZona.style.border = "1px solid #333";
                //elementChenarZona.style.background = "yellow";
                //elementChenarZona.style.borderBottom = "none";
                //elementChenarZona.style.borderLeftColor = "white";
            }
            else{
                elementZona1.style.borderColor = "#333";
                elementZona1.style.borderLeftWidth = "1px";
            }


        }
        else{
          elementZona1.style.background = "#f2f2f2";
          elementZona1.style.color = "#8c8c8c";
          elementZona2.textContent = "";//"R=";
          elementZona3.textContent = "";//"#";
          //elementZona4.textContent = "";//"Me=";
          //elementZona5.textContent = "";//"Pr=";
        }
    }
}

function actualizareDateZileTabele(){
  var data_zi_luna = data_data[selectorZi].split("/");
  tab_zi = data_zi_luna[0];
  tab_luna = data_luni_lung[data_zi_luna[1]-1];

  var data_zi_luna2 = data_data[selectorZi+orizont_proiectie].split("/");
  tab_zi2 = data_zi_luna2[0];
  tab_luna2 = data_luni_lung[data_zi_luna2[1]-1];

  //ctx.font = "italic 16px Helvetica, Arial, sans-serif";
  //ctx.fillText( "(" + zi + " " + luna + ")", xTextZi + 75 + (String(selectorZi).length) * 18, yTextZi);


  var elementeDate = document.getElementsByClassName("text_data");
  for(i = 0; i<elementeDate.length; i++){
      elementeDate[i].textContent = "Ziua " + selectorZi + " (" + tab_zi + " " + tab_luna +" ⇨ " + tab_zi2 + " " + tab_luna2 + ")";
  }

  var elementeDate2 = document.getElementsByClassName("text_data2");
  for(i = 0; i<elementeDate2.length; i++){
      elementeDate2[i].textContent = "Ziua " + selectorZi + " (" + tab_zi + " " + tab_luna + ")";
  }

}

function actualizareTabelPozitii(){
  if(selectorZi >= clasamentAeronaveZileSortatProiectie.length)
      return;

  if(mod_sortare == 1){
      clasamentZone = clasamentAeronaveZileSortatMedie[selectorZi].clasament;
  }
  else{
      clasamentZone = clasamentAeronaveZileSortatArie[selectorZi].clasament;
  }



  //var elementZona1, elementZona2;
  //var proiectie, medie, r, valoareProiectie2;

  nrAeronaveApropiere = 0;
  nrAeronaveDepartare = 0;
  nrAeronaveCoborare = 0;
  nrAeronaveUrcare = 0;

  elementPortAvionApropiere = document.getElementsByClassName("apropiere")[0];
  elementPortAvionDepartare = document.getElementsByClassName("departare")[0];
  elementPortAvionGraficApropiere = document.getElementsByClassName("grafic_apropiere")[0];
  elementPortAvionGraficDepartare = document.getElementsByClassName("grafic_departare")[0];

  elementPortAvionCoborare = document.getElementsByClassName("coborare")[0];
  elementPortAvionUrcare = document.getElementsByClassName("urcare")[0];
  elementPortAvionGraficCoborare = document.getElementsByClassName("grafic_coborare")[0];
  elementPortAvionGraficUrcare = document.getElementsByClassName("grafic_urcare")[0];

  elementAvariiZilnice = document.getElementsByClassName("avarii_zilnice")[0];
  elementPierderiZilnice = document.getElementsByClassName("pierderi_zilnice")[0];
  elementRataPierderiAvarii = document.getElementsByClassName("rata_pierderi_avarii")[0];

  elementAvariiTotale = document.getElementsByClassName("avarii_totale")[0];
  elementPierderiTotale = document.getElementsByClassName("pierderi_totale")[0];
  elementRataPierderiZi = document.getElementsByClassName("rata_pierderi_zi")[0];


  elementAvariiZilniceProiectie = document.getElementsByClassName("avarii_zilnice_proiectie")[0];
  elementPierderiZilniceProiectie = document.getElementsByClassName("pierderi_zilnice_proiectie")[0];

  elementPierderiTotaleProiectie = document.getElementsByClassName("pierderi_totale_proiectie")[0];
  elementTotalActual = document.getElementsByClassName("titlu_totalY")[0];

  for(let zona=0; zona < numeArii.data.value.length; zona++){
      elementNume = document.getElementsByClassName("pozitii zona" + zona +" nume")[0];
      elementValProiectie = document.getElementsByClassName("pozitii zona" + zona +" val_proiectie")[0];

      elementSegBaraProiectie = document.getElementsByClassName("pozitii zona" + zona +" segment_bara_proiectie")[0];
      elementSegBaraMedie = document.getElementsByClassName("pozitii zona" + zona +" segment_bara_medie")[0];
      //elementSegAvion = document.getElementsByClassName("pozitii zona" + zona +" avion")[0];

      elementIProiectie = document.getElementsByClassName("pozitii zona" + zona +" iProiectie")[0];
      elementIDelta = document.getElementsByClassName("pozitii zona" + zona +" iDelta")[0];
      elementIR = document.getElementsByClassName("pozitii zona" + zona +" iR")[0];
      elementIMedie = document.getElementsByClassName("pozitii zona" + zona +" iMedie")[0];



      elementIDelta.style.color = "black";

      if(clasamentZone[zona].arie == nrArie){
          elementChenarZona = document.getElementsByClassName("pozitii zona" + zona + " nume")[0];
          //elementChenarZona.style.border = "1px solid #333";
          elementChenarZona.style.background = "yellow";
          //elementChenarZona.style.borderBottom = "none";
          //elementChenarZona.style.borderLeftColor = "white";
          //elementChenarZona.style.borderRightColor = "white";

          elementChenarValoare = document.getElementsByClassName("pozitii zona" + zona + " val_proiectie")[0];
          //elementChenarValoare.style.border = "1px solid #333";
          elementChenarValoare.style.background = "yellow";
          //elementChenarValoare.style.borderTop = "none";
          //elementChenarValoare.style.borderLeftColor = "white";
          //elementChenarValoare.style.borderRightColor = "white";
          //elementChenarValoare.style.borderLeft = "none";
          //elementChenarValoare.style.borderRight = "none";
      }
      else{
        elementChenarZona = document.getElementsByClassName("pozitii zona" + zona + " nume")[0];
        //elementChenarZona.style.border = "none";
        elementChenarZona.style.background = "white";
        elementChenarValoare = document.getElementsByClassName("pozitii zona" + zona + " val_proiectie")[0];
        //elementChenarValoare.style.border = "none";
        elementChenarValoare.style.background = "white";
      }

      if(selectorZi > orizont_regresie + ORIZONT_ARIE){
          elementNume.innerHTML = "<a id='linkzona" + clasamentZone[zona].arie + "' href='#' onclick='schimbareSelectieArie(" + clasamentZone[zona].arie + ")'>" + vectoriDateZone[clasamentZone[zona].arie].nume + "</a>";
          elementValProiectie.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorProiectieZiCurenta[selectorZi]);

          elementIProiectie.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorProiectieZiCurenta[selectorZi]);
          if(vectoriDateZone[clasamentZone[zona].arie].delta > 0){
              elementIDelta.textContent = "+" + Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]) + "";
          }
          else{
              elementIDelta.textContent = "" + Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]) + "";
          }

          if(vectoriDateZone[clasamentZone[zona].arie].vector_r[selectorZi] > 1){
              nrAeronaveUrcare++;
              elementIR.textContent = "+" + Math.round((vectoriDateZone[clasamentZone[zona].arie].vector_r[selectorZi]-1)*100) + "%";
          }
          else{
              elementIR.textContent = "" + Math.round((vectoriDateZone[clasamentZone[zona].arie].vector_r[selectorZi]-1)*100) + "%";
              nrAeronaveCoborare++;
          }

          if(vectoriDateZone[clasamentZone[zona].arie].vectorDR[selectorZi]>0){
              nrAeronaveDepartare++;

              elementIR.textContent += "\u279A";
              elementValProiectie.textContent += "\u279A";
              elementValProiectie.style.background = culoareCerculetRCrestere;
              elementValProiectie.style.color = culoareCrestereMaroInchis;
          }
          else{
              nrAeronaveApropiere++;

              elementIR.textContent += "\u2798";
              elementValProiectie.style.background = "lightgreen";
              elementValProiectie.textContent += "\u2798";
              elementValProiectie.style.color = "#333";
          }


          elementIMedie.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]);

          //elementZona0.textContent = Math.round(clasamentZone[zona].proiectie);

          if(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi] > limita_max_crestere_medie){
              elementSegBaraMedie.style.height = 100 + "px";
              max_delta = 214 - 100 - 95 - 5;
          }
          else{
              elementSegBaraMedie.style.height = String(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]*1.2)) + "px";
              max_delta = 214 - Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]/1.2) - 95 - 5;
          }

          //max_delta = 214 - Math.round(clasamentZone[zona].medie/2) - 95;

          h_delta = Math.abs(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]/1.2));
          if(h_delta < max_delta){
              elementSegBaraProiectie.style.height = String(h_delta) + "px";
          }
          else{
              elementSegBaraProiectie.style.height = String(max_delta) + "px";
          }


          if(Math.abs(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]))>20){
              if(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]>0){
                  elementSegBaraProiectie.textContent = "+" + Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]);
              }
              else{
                  elementSegBaraProiectie.textContent = "" + Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi]);
              }
          }
          else{
              elementSegBaraProiectie.textContent = "";
          }


          if(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi] < 12)){
              elementSegBaraMedie.textContent = "";
          }
          else{
              elementSegBaraMedie.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]);
          }

          if(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]) > limita_max_crestere_medie){
              //elementSegBaraMedie.textContent = " >limita_max_crestere_delta...";
              //elementSegBaraMedie.textContent = Math.round(clasamentZone[zona].medie);
              elementSegBaraMedie.style.background = culoareRosu;
              elementIMedie.style.background = culoareRosu;
          }
          else{
              //elementSegBaraMedie.textContent = "";
              elementSegBaraMedie.style.background = "#fcfccf";
              elementIMedie.style.background = "#fcfccf";
          }



          if(vectoriDateZone[clasamentZone[zona].arie].vector_r[selectorZi]<1){
              elementSegBaraProiectie.style.background = "lightgreen";
              elementSegBaraProiectie.style.color = "green";

              //elementSegAvion.style.background = "lightgreen";
              elementIR.style.background = "lightgreen";
              elementIDelta.style.background = "lightgreen";
              //elementSegAvion.innerHTML += "-";

          }
          else{
              //elementIDelta.style.background = culoareCerculetRCrestere;
              //elementIDelta.style.color = "#4d3319";
              elementIR.style.background = culoareCerculetRCrestere;//"#fcfccf";

              //elementZona.style.background = culoareCerculetRCrestere;


              if(Math.abs(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorDeltaZiCurenta[selectorZi])) > limita_max_crestere_delta){ //var 2 - 250
                  elementSegBaraProiectie.style.background = "#c32222";
                  elementSegBaraProiectie.style.color = "white";
                  //elementSegAvion.style.background = "#c32222";
                  //elementSegAvion.style.color = "white";
                  elementIProiectie.style.background = "#c32222";
                  elementIProiectie.style.color = "white";
                  elementIDelta.style.background = "#c32222";
                  elementIDelta.style.color = "white";
              }
              else{
                  elementSegBaraProiectie.style.background = culoareAlbastru;
                  elementSegBaraProiectie.style.color = "#4d3319";
                  //elementSegAvion.style.background = "#fcfccf";
                  //elementSegAvion.style.color = "#333";

                  elementIProiectie.style.background = "lightgrey";//culoareAlbastru;
                  elementIProiectie.style.color = "#333";
                  elementIDelta.style.background = culoareAlbastru;//culoareCerculetRCrestere;//"#fcfccf";
                  elementIDelta.style.color = "black";//"#333";
              }

              //elementSegAvion.innerHTML = Math.round(clasamentZone[zona].medie) + "+" + Math.round((clasamentZone[zona].r-1)*100) + "%";
              //elementSegBaraMedie.style.background = "lightblue";
              //elementSegBaraMedie.style.color = "#4d3319";
          }



          elementIMedie.style.color = "black";
          elementIR.style.color = "black";
          //elementIDelta.style.color = "black";
          elementIProiectie.style.background = "lightgrey";
          elementIProiectie.style.color = "#333";

          if(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]) == 0){
              elementIMedie.style.background = "white";
              elementIProiectie.style.background = "white";
              elementIR.style.background = "white";
              elementIDelta.style.background = "white";
              /*
              elementIMedie.style.background = "#f2f2f2";
              elementIProiectie.style.background = "#f2f2f2";
              elementIR.style.background = "#f2f2f2";
              elementIDelta.style.background = "#f2f2f2";*/
          }

          //elementNume.childNodes[0].style.color = "#8c8c8c";



    }
    else{

      elementIProiectie.textContent = "0";
      elementIDelta.textContent = "0";
      elementIMedie.textContent = "0";
      elementIR.textContent = "0";

      elementIProiectie.style.background = "#f2f2f2";
      elementIDelta.style.background = "#f2f2f2";
      elementIMedie.style.background = "#f2f2f2";
      elementIR.style.background = "#f2f2f2";

      elementIProiectie.style.color = "#8c8c8c";
      elementIDelta.style.color = "#8c8c8c";
      elementIMedie.style.color = "#8c8c8c";
      elementIR.style.color = "#8c8c8c";

      elementNume.childNodes[0].style.color = "#8c8c8c";

      //elementZona1.style.background = "#f2f2f2";
      //elementZona1.style.color = "#8c8c8c";

      elementValProiectie.textContent = "";
      //elementNume.textContent = "";
      elementSegBaraProiectie.style.height = "0";
      elementSegBaraMedie.style.height = "0";
      elementSegBaraProiectie.style.background = "lightgreen";
      elementSegBaraProiectie.style.color = "green";


    }




  }

  if(selectorZi > orizont_regresie + ORIZONT_ARIE){
      elementPortAvionDepartare.textContent = ""
        //+ Math.floor((nrAeronaveDepartare / 42)*100) + "% ("
        + nrAeronaveDepartare;
        //+ " aeronave)";
      elementPortAvionApropiere.textContent = ""
        //+ Math.floor((nrAeronaveApropiere / 42)*100) + "% ("
        + nrAeronaveApropiere;
        //+ " aeronave)";

      elementPortAvionUrcare.textContent = ""
        //+ Math.floor((nrAeronaveDepartare / 42)*100) + "% ("
        + nrAeronaveUrcare;
        //+ " aeronave)";
      elementPortAvionCoborare.textContent = ""
        //+ Math.floor((nrAeronaveApropiere / 42)*100) + "% ("
        + nrAeronaveCoborare;
        //+ " aeronave)";

      elementPortAvionGraficDepartare.textContent = Math.round((nrAeronaveDepartare / 42)*100) + "%";
      elementPortAvionGraficApropiere.textContent = Math.round((nrAeronaveApropiere / 42)*100) + "%";
      elementPortAvionGraficDepartare.style.width = Math.round((nrAeronaveDepartare / 42) * 114) + "px";
      elementPortAvionGraficApropiere.style.width = Math.round((nrAeronaveApropiere / 42) * 114) + "px";

      elementPortAvionGraficUrcare.textContent = Math.round((nrAeronaveUrcare / 42)*100) + "%";
      elementPortAvionGraficCoborare.textContent = Math.round((nrAeronaveCoborare / 42)*100) + "%";
      elementPortAvionGraficUrcare.style.width = Math.round((nrAeronaveUrcare / 42) * 114) + "px";
      elementPortAvionGraficCoborare.style.width = Math.round((nrAeronaveCoborare / 42) * 114) + "px";
  }

  elementAvariiZilnice.textContent = Math.round(data_2Toate[selectorZi]);
  elementPierderiZilnice.textContent = Math.round(dataToate[selectorZi]);
  elementPierderiZilnice.style.width = Math.round(dataToate[selectorZi]/2) + "px";
  elementRataPierderiAvarii.textContent = Math.floor(dataCumulativToate[selectorZi]/avariiCumulativToate[selectorZi]*1000)/10 + "%";

  elementAvariiTotale.textContent = Math.round(avariiCumulativToate[selectorZi]);
  elementPierderiTotale.textContent = Math.round(dataCumulativToate[selectorZi]);
  elementPierderiTotale.style.width = Math.round(dataCumulativToate[selectorZi]/200) + "px";
  elementRataPierderiZi.textContent = Math.round(medieCumulativToate[selectorZi]);


  elementPierderiTotaleProiectie.textContent = ">" + (Math.round(dataCumulativToate[selectorZi] + 180 * medieCumulativToate[selectorZi])) + "...";
  elementPierderiTotaleProiectie.style.width = (Math.round(dataCumulativToate[selectorZi] + 180 * medieCumulativToate[selectorZi])/200) + "px";


  proiectie21 = vector_coefAToate[selectorZi] * Math.pow(vector_rToate[selectorZi], (selectorZi + orizont_proiectie -1));
  elementAvariiZilniceProiectie.textContent = Math.round(proiectie21);
  elementPierderiZilniceProiectie.textContent = (Math.round(proiectie21 * dataCumulativToate[selectorZi]/avariiCumulativToate[selectorZi]) + "(" + Math.round(pr21*100) + ")");
  elementPierderiZilniceProiectie.style.width = Math.round(proiectie21 * dataCumulativToate[selectorZi]/avariiCumulativToate[selectorZi]/2) + "px";
  //elementPierderiZilniceProiectie.textContent = Math.round(dataCumulativ[selectorZi] + 180 * medieCumulativ[selectorZi]);

  elementTotalActual.textContent = "Total pe " + selectorZi + " de zile";

}

//formatie
function inserareTabelZone(){

  let nrColPeLinie = 7;
  let rand = 0;

  textHTML = "";
  textHTML += "<table> "

  var totalZile = vectoriDateZone[0].vector_r.length-1;

  var clasamentProiectie = clasamentAeronaveZileSortatProiectie[totalZile].clasament;
  //var clasamentMedie = clasamentAeronaveZileSortatMedie[totalZile].clasament;

  var valoareProiectie = 0;
  var valoareMedie = 0;

  /*clasamentR = [];
  for(let zona=0; zona < numeArii.data.value.length; zona++){
      clasamentR[zona] = {zona: zona, r: vectoriDateZone[zona].vector_r[totalZile]}
  }

  clasamentR.sort(function(a, b){return a.r - b.r});*/

  for(let zona=0; zona < numeArii.data.value.length; zona++){
    coloana = zona % nrColPeLinie;
    rand = Math.floor(zona / nrColPeLinie);
    //valoareProiectie = vectoriDateZone[zona].vector_coefA[totalZile] * Math.pow(vectoriDateZone[zona].vector_r[totalZile], totalZile + orizont_proiectie - 1);
    //valoareMedie = vectoriDateZone[zona].vector_coefA[totalZile] * Math.pow(vectoriDateZone[zona].vector_r[totalZile], totalZile);
    //console.log(numeArii.data.value[zona]);
    //console.log(rand + " " + coloana);

    pozitieClasamentR = 0;
    /*
    for(let i=0; i < clasamentR.length; i++){
        pozitieClasamentR++;
        if(clasamentR[i].zona == zona) break;
    }*/

    if(coloana == 0){
      textHTML+="<tr>";
    }

    textHTML += "<td id='zona" + zona + "'>";
    textHTML += "<div class='zona" + zona + " nume_zona'>" + numeArii.data.value[zona].substring(0,3) + "</div>";
    textHTML += "<div class='zona" + zona + " val_cl_r'>" + "#" + pozitieClasamentR + "</div>";

    //textHTML += "<div class='zona" + zona + " val_r'>" + "R=" + Math.floor((vectoriDateZone[zona].vector_r[totalZile]-1)*10000)/100 + "</div>";
    textHTML += "<div class='zona" + zona + " val_r'>" + "R=" + Math.floor((vectoriDateZone[clasamentProiectie[zona].arie].vector_r[totalZile]-1)*10000)/100 + "</div>";

    textHTML += "<div class='zona" + zona + " Me-Pr'>";
    //textHTML += Math.round(clasamentAeronaveZile[totalZile].clasament[zona].medie);
    textHTML += Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorMedieZiCurenta[totalZile]);

    textHTML += "→";
    //textHTML += Math.round(clasamentAeronaveZile[totalZile].clasament[zona].proiectie);
    textHTML += Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorProiectieZiCurenta[totalZile]);
    textHTML += "</div>";

    //textHTML += "<div class='zona" + zona + " val_delta'>" + "D=" + Math.round(clasamentAeronaveZile[totalZile].clasament[zona].delta) + "</div>";
    textHTML += "<div class='zona" + zona + " val_delta'>" + "D=" + Math.round(vectoriDateZone[clasamentProiectie[zona].arie].vectorDeltaZiCurenta[totalZile]) + "</div>";



    //textHTML += "<div class='zona" + zona + " val_v'>" + "" + Math.round(vectoriDateZone[zona].date[totalZile]) + "</div>";
    //textHTML += "<div class='zona" + zona + " val_me'>" + "Me=" + Math.round(valoareMedie) + "</div>";
    //textHTML += "<div class='zona" + zona + " val_pr'>" + "Pr=" + Math.round(valoareProiectie) + "</div>";
    textHTML += "</td>";

    if(coloana == nrColPeLinie-1){
      textHTML +="</tr>";
    }
  }
  textHTML += "</table>";

  var elementZone = document.getElementById("zone");
  elementZone.innerHTML = textHTML;

  var elementZona;
  for(let zona=0; zona < numeArii.data.value.length; zona++){
      elementZona = document.getElementById("zona" + zona);
      if(vectoriDateZone[zona].vector_r[totalZile]<1){
          elementZona.style.background = "lightgreen";
          elementZona.style.color = "green";
      }
      else{
          elementZona.style.background = culoareCerculetRCrestere;
          elementZona.style.color = "#4d3319";
      }
      //elementZona = document.getElementsByClassName("zona" + zona +" val_cl_r")[0];
      //elementZona.style.color = "white";


  }

}

function inserareTabelPozitii(){
  textHTML = "";

  var totalZile = vectoriDateZone[0].vector_r.length-1;
  //clasamentZone = clasamentAeronaveZile[totalZile].clasament;
  clasamentZone = clasamentAeronaveZileSortatArie[totalZile].clasament;
  //clasamentZone.sort(function(a, b){return a.proiectie - b.proiectie});
  //pauza = true;


  for(let i=0; i<clasamentZone.length; i++){
      textHTML +="<div class='pozitii zona " + i + "'>";

        //textHTML += "<div class='pozitii zona" + i + " avion'>";
        //textHTML += Math.round(clasamentZone[i].medie);
        //textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " iProiectie'>";
        //textHTML += "" + Math.round(clasamentZone[i].proiectie);
        textHTML += "" + Math.round(vectoriDateZone[clasamentZone[i].arie].vectorProiectieZiCurenta[totalZile]);

        textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " iDelta'>";
        //textHTML += "(+" + Math.round(clasamentZone[i].delta) + ")";
        textHTML += "(+" + Math.round(vectoriDateZone[clasamentZone[i].arie].vectorDeltaZiCurenta[totalZile]) + ")";
        textHTML += "</div>";

        textHTML += "<div class='pozitii zona" + i + " iR'>";
        //textHTML += "+" + Math.round((clasamentZone[i].r-1)*100) + "%";
        textHTML += "+" + Math.round((vectoriDateZone[clasamentZone[i].arie].vector_r[totalZile]-1)*100) + "%";

        textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " iMedie'>";
        //textHTML += Math.round(clasamentZone[i].medie);
        textHTML += Math.round(vectoriDateZone[clasamentZone[i].arie].vectorMedieZiCurenta[totalZile]);
        textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " segment_bara_medie'>";
        //textHTML += Math.round(clasamentZone[i].proiectie);
        textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " segment_bara_proiectie'>";
        //textHTML += Math.round(clasamentZone[i].proiectie);
        textHTML += "</div>";
        textHTML += "<div class='pozitii zona" + i + " val_proiectie'>";
        //textHTML += Math.round(clasamentZone[i].medie + clasamentZone[i].proiectie);
        textHTML += Math.round(vectoriDateZone[clasamentZone[i].arie].vectorMedieZiCurenta[totalZile] + vectoriDateZone[clasamentZone[i].arie].vectorProiectieZiCurenta[totalZile]);
        textHTML += "</div>";

        textHTML += "<div class='pozitii zona" + i + " nume'><a id='linkzona" + i + "' href='#' onclick='schimbareSelectieArie(" + i + ")'>";
        //textHTML += clasamentZone[i].nume;// + "✈";
        textHTML += vectoriDateZone[clasamentZone[i].arie].nume;// + "✈";

        textHTML += "</a></div>";

        //elementNume.innerHTML = "<a id='linkzona" + clasamentZone[zona].arie + "' href='#' onclick='schimbareSelectieArie(" + clasamentZone[zona].arie + ")'>" + clasamentZone[zona].nume + "</a>";

      textHTML += "</div>";

  }

  var elementPozitii = document.getElementById("pozitii");
  elementPozitii.innerHTML = textHTML;

  var elementData = document.getElementsByClassName("text_data")[0];
  elementData.textContent = "Ziua " + selectorZi;

  //clasamentZone.sort(function(a, b){return a.zona - b.zona});


  //var elementZona1, elementZona2;
  for(let zona=0; zona < numeArii.data.value.length; zona++){
      //console.log(zona);
      elementZona1 = document.getElementsByClassName("pozitii zona" + zona +" segment_bara_proiectie")[0];
      elementZona2 = document.getElementsByClassName("pozitii zona" + zona +" segment_bara_medie")[0];
      //elementZona3 = document.getElementsByClassName("pozitii zona" + zona +" avion")[0];
      //elementZona2 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      //elementZona3 = document.getElementsByClassName("zona" + zona +" bara_altitudine")[0];

      //elementZona1.style.height = String(Math.abs(Math.round(clasamentZone[zona].proiectie))/4) + "px";
      //elementZona2.style.height = String(Math.abs(Math.round(clasamentZone[zona].medie))/4) + "px";

      elementZona1.style.height = String(Math.abs(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorProiectieZiCurenta[totalZile]))/4) + "px";
      elementZona2.style.height = String(Math.abs(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[totalZile]))/4) + "px";
      /*
      console.log("zona=" + zona);
      console.log("clasament[zona].zona=" + clasamentZone[zona].zona);
      console.log("clasament[zona].proiectie=" + clasamentZone[zona].proiectie);
      console.log(elementZona1.style.height);*/

      //elementZona2.style.height = "20px";
      //elementZona2.style.height = "" + clasamentZone[zona].medie + "px";

      //console.log("zona" + zona + " " + elementZona2.style.height);

      //elementZona3.style.background = culoareGalben;

      if(vectoriDateZone[zona].vector_r[totalZile]<1){
          elementZona1.style.background = "lightgreen";
          elementZona1.style.color = "green";

          //elementZona3.style.background = "lightgreen";
          //elementZona3.innerHTML += "-";

          //elementZona3.innerHTML += "" + Math.floor((clasamentZone[zona].r-1)*100) + "%";

          //elementZona2.style.color = "green";

      }
      else{
          elementZona1.style.background = culoareAlbastru;
          elementZona1.style.color = "#4d3319";

          //elementZona3.innerHTML += "+" + Math.floor((clasamentZone[zona].r-1)*100) + "%";
          //elementZona2.style.background = "lightblue";
          //elementZona2.style.color = "#4d3319";
      }

  }
}

function inserareTabelVitezePropagare(){
  //let nrColPeLinie = 42;
  //let rand = 0;

  textHTML = "";
  textHTML += "<table>";
  textHTML+="<tr>";

  var totalZile = vectoriDateZone[0].vector_r.length-1;
  var valoareProiectie = 0;
  var valoareMedie = 0;

  var clasamentR = clasamentAeronaveZileSortatArie[totalZile].clasament;

  /*
  clasamentR = [];
  for(let zona=0; zona < numeArii.data.value.length; zona++){
      clasamentR[zona] = {zona: zona, r: vectoriDateZone[zona].vector_r[totalZile]}
  }

  clasamentR.sort(function(a, b){return a.r - b.r});
  */

  //clasamentR.sort(function(a, b){return a.r - b.r});

  for(let i=0; i<clasamentR.length; i++){
      //textHTML += "<td id='vp_zona" + clasamentR[i].zona + "'>";
      textHTML += "<td id='vp_zona" + clasamentR[i].arie + "'>";

      textHTML += "<div class='viteze zona" + clasamentR[i].arie + " nume_zona'>" + numeArii.data.value[clasamentR[i].arie].substring(0,3) + "</div>";
      //textHTML += "<div class='zona" + clasamentR[i].zona + " val_r'>" + "R=" + Math.floor((vectoriDateZone[clasamentR[i].zona].vector_r[totalZile]-1)*10000)/100 + "</div>";
      textHTML += "<div class='viteze zona" + clasamentR[i].arie + " val_cl_r'>" + "#" + (i+1) + "</div>";


      textHTML += "<div class='viteze zona" + clasamentR[i].arie + " bara_grafic'>" + Math.floor((vectoriDateZone[clasamentR[i].arie].vector_r[totalZile]-1)*10000)/100 + "</div>";


      //textHTML += "<div class='zona" + zona + " val_v'>" + "" + Math.round(vectoriDateZone[zona].date[totalZile]) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_me'>" + "Me=" + Math.round(valoareMedie) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_pr'>" + "Pr=" + Math.round(valoareProiectie) + "</div>";
      textHTML += "</td>";

  }

  textHTML +="</tr>";
  textHTML += "</table>";

  var elementVitezePropagare = document.getElementById("viteze_propagare");
  elementVitezePropagare.innerHTML = textHTML;

  var elementZona;
  for(let zona=0; zona < numeArii.data.value.length; zona++){
      elementZona = document.getElementsByClassName("zona" + zona +" bara_grafic")[0];
      elementZona.style.height = String(Math.abs(vectoriDateZone[zona].vector_r[totalZile]-1)*100*6) + "px";
      //console.log(elementZona.style.height);
      if(vectoriDateZone[zona].vector_r[totalZile]<1){
          elementZona.style.background = "lightgreen";
          elementZona.style.color = "green";

      }
      else{
          elementZona.style.background = culoareCerculetRCrestere;
          elementZona.style.color = "#4d3319";
      }

      if(zona == nrArie){
          elementChenarZona = document.getElementsByClassName("viteze zona" + zona + " nume_zona")[0];
          //elementChenarZona.style.border = "1px solid #333";
          elementChenarZona.style.background = "yellow";
          //elementChenarZona.style.borderBottom = "none";
          //elementChenarZona.style.borderLeftColor = "white";
          //elementChenarZona.style.borderRightColor = "white";

          elementChenarValoare = document.getElementsByClassName("viteze zona" + zona + " val_cl_r")[0];
          //elementChenarValoare.style.border = "1px solid #333";
          elementChenarValoare.style.background = "yellow";
          //elementChenarValoare.style.borderTop = "none";
          //elementChenarValoare.style.borderLeftColor = "white";
          //elementChenarValoare.style.borderRightColor = "white";
          //elementChenarValoare.style.borderLeft = "none";
          //elementChenarValoare.style.borderRight = "none";
      }
      else{
        elementChenarZona = document.getElementsByClassName("viteze zona" + zona + " nume_zona")[0];
        //elementChenarZona.style.border = "none";
        elementChenarZona.style.background = "white";
        elementChenarValoare = document.getElementsByClassName("viteze zona" + zona + " val_cl_r")[0];
        //elementChenarValoare.style.border = "none";
        elementChenarValoare.style.background = "white";
      }


  }

}

function actualizareTabelVitezePropagare(){
  if(selectorZi >= clasamentAeronaveZileSortatProiectie.length)
      return;

  var clasamentR = clasamentAeronaveZileSortatR[selectorZi].clasament;
  //var elementZona;

  for(let zona=0; zona < numeArii.data.value.length; zona++){
      //elementZona0 = document.getElementById("vp_zona" + zona);
      elementChenarZona = document.getElementsByClassName("viteze zona" + zona + " nume_zona")[0];
      elementChenarValoare = document.getElementsByClassName("viteze zona" + zona + " val_cl_r")[0];
      elementZona = document.getElementsByClassName("viteze zona" + zona +" bara_grafic")[0];


      if(selectorZi > orizont_regresie + ORIZONT_ARIE){
        elementChenarZona.textContent = vectoriDateZone[clasamentR[zona].arie].nume;
        elementChenarValoare.textContent = "#" + (zona + 1);

        elementZona.textContent = Math.floor((vectoriDateZone[clasamentR[zona].arie].vector_r[selectorZi]-1)*10000)/100

        elementZona.style.height = String(Math.abs(vectoriDateZone[clasamentR[zona].arie].vector_r[selectorZi]-1)*100*6) + "px";
        //console.log(elementZona.style.height);
        if(vectoriDateZone[clasamentR[zona].arie].vector_r[selectorZi]<1){
            elementZona.style.background = "lightgreen";
            elementZona.style.color = "green";

        }
        else{
            elementZona.style.background = culoareCerculetRCrestere;
            elementZona.style.color = "#4d3319";
        }

        if(clasamentR[zona].arie == nrArie){

            elementChenarZona.style.background = "yellow";

            elementChenarValoare.style.background = "yellow";

        }
        else{

          elementChenarZona.style.background = "white";
          elementChenarValoare.style.background = "white";
        }

      }
      else{
        elementZona.textContent = "";
        elementZona.style.height = 0;
      }

  }

}


function actualizareTabelAltitudini(){
  if(selectorZi >= clasamentAeronaveZileSortatProiectie.length)
      return;

  var clasamentZone = clasamentAeronaveZileSortatMedieDesc[selectorZi].clasament;


  //var elementZona;
  for(let zona=0; zona < clasamentZone.length; zona++){
      //elementZona1 = document.getElementsByClassName("zona" + zona +" bara_propagare")[0];
      //elementZona2 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      elementZona3 = document.getElementsByClassName("zona" + zona +" bara_altitudine")[0];
      elementChenarZona = document.getElementsByClassName("altitudini zona" + zona + " nume_zona")[0];
      elementChenarValoare = document.getElementsByClassName("altitudini zona" + zona + " val_cl_me")[0];


      if(selectorZi > orizont_regresie + ORIZONT_ARIE){
          elementChenarZona.textContent = vectoriDateZone[clasamentZone[zona].arie].nume;
          elementChenarValoare.textContent = "#" + (zona + 1);

          elementZona3.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]);

          elementZona3.style.height = String(Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorMedieZiCurenta[selectorZi]/scalareBareTabelAltitudini)) + "px";
          elementZona3.style.background = culoareGalben;

          if(clasamentZone[zona].arie == nrArie){
              elementChenarZona.style.background = "yellow";
              elementChenarValoare.style.background = "yellow";

          }
          else{
            elementChenarZona.style.background = "white";
            elementChenarValoare.style.background = "white";
          }
      }

      else{
        elementZona3.textContent = "";
        elementZona3.style.height = 0;
      }
  }

}

function actualizareTabelTraiectorii(){
  if(selectorZi >= clasamentAeronaveZileSortatProiectie.length)
      return;

  clasamentZone = clasamentAeronaveZileSortatProiectie[selectorZi].clasament;

  //var elementZona2;
  for(let zona=0; zona < clasamentZone.length; zona++){
      //elementZona1 = document.getElementsByClassName("zona" + zona +" bara_propagare")[0];
      //elementZona2 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      elementChenarZona = document.getElementsByClassName("traiectorii zona" + zona + " nume_zona")[0];
      elementChenarValoare = document.getElementsByClassName("traiectorii zona" + zona + " val_cl_pr")[0];
      elementZona3 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];


      if(selectorZi > orizont_regresie + ORIZONT_ARIE){
          elementChenarZona.textContent = vectoriDateZone[clasamentZone[zona].arie].nume;
          elementChenarValoare.textContent = "#" + (zona + 1);
          elementZona3.textContent = Math.round(vectoriDateZone[clasamentZone[zona].arie].vectorProiectieZiCurenta[selectorZi]);

          elementZona3.style.height = String(Math.round(clasamentZone[zona].proiectie/scalareBareTabelAltitudini)) + "px";
          //elementZona2.style.height = "20px";
          //elementZona2.style.height = "" + clasamentZone[zona].medie + "px";

          //console.log("zona" + zona + " " + elementZona2.style.height);
          elementZona3.style.background = culoareAlbastru;

          if(clasamentZone[zona].arie == nrArie){
              elementChenarZona = document.getElementsByClassName("traiectorii zona" + zona + " nume_zona")[0];
              //elementChenarZona.style.border = "1px solid #333";
              elementChenarZona.style.background = "yellow";
              //elementChenarZona.style.borderBottom = "none";
              //elementChenarZona.style.borderLeftColor = "white";
              //elementChenarZona.style.borderRightColor = "white";

              elementChenarValoare = document.getElementsByClassName("traiectorii zona" + zona + " val_cl_pr")[0];
              //elementChenarValoare.style.border = "1px solid #333";
              elementChenarValoare.style.background = "yellow";

          }
          else{
            //elementChenarZona = document.getElementsByClassName("traiectorii zona" + zona + " nume_zona")[0];
            //elementChenarZona.style.border = "none";
            elementChenarZona.style.background = "white";
            //elementChenarValoare = document.getElementsByClassName("traiectorii zona" + zona + " val_cl_pr")[0];
            //elementChenarValoare.style.border = "none";
            elementChenarValoare.style.background = "white";
          }
    }
    else{
        elementZona3.textContent = "";
        elementZona3.style.height = 0;
    }

  }

}


function inserareTabelAltitudini(){

  textHTML = "";
  textHTML += "<table>";
  textHTML+="<tr>";

  var totalZile = vectoriDateZone[0].vector_r.length-1;
  //clasamentZone = clasamentAeronaveZile[totalZile].clasament;
  var clasamentZone = clasamentAeronaveZileSortatMedieDesc[totalZile].clasament;

  //clasamentZone.sort(function(a, b){return a.r - b.r});

  //clasamentZone.sort(function(a, b){return a.medie - b.medie});

  for(let i=0; i<clasamentZone.length; i++){
      textHTML += "<td id='vp_zona" + i + "'>";
      //textHTML += "<div class='altitudini zona" + i + " nume_zona'>" + clasamentZone[i].nume + "</div>";
      textHTML += "<div class='altitudini zona" + i + " nume_zona'>" + vectoriDateZone[clasamentZone[i].arie].nume + "</div>";
      //textHTML += "<div class='zona" + clasamentZone[i].zona + " val_r'>" + "R=" + Math.floor((vectoriDateZone[clasamentZone[i].zona].vector_r[totalZile]-1)*10000)/100 + "</div>";
      textHTML += "<div class='altitudini zona" + i + " val_cl_me'>" + "#" + (i+1) + "</div>";

      //textHTML += "<div class='zona" + i + " bara_proiectie'>" + Math.round(clasamentZone[i].proiectie) + "</div>";
      //textHTML += "<div class='zona" + i + " bara_propagare'>" + Math.floor((clasamentZone[i].r-1)*10000)/100 + "</div>";
      textHTML += "<div class='altitudini zona" + i + " bara_altitudine'>" + Math.round(clasamentZone[i].medie) + "</div>";

      //textHTML += "<div class='zona" + zona + " val_v'>" + "" + Math.round(vectoriDateZone[zona].date[totalZile]) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_me'>" + "Me=" + Math.round(valoareMedie) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_pr'>" + "Pr=" + Math.round(valoareProiectie) + "</div>";
      textHTML += "</td>";
  }

  textHTML +="</tr>";
  textHTML += "</table>";

  var elementAltitudini = document.getElementById("altitudini");
  elementAltitudini.innerHTML = textHTML;

  //clasamentZone.sort(function(a, b){return b.medie - a.medie});

  var elementZona2;
  for(let zona=0; zona < clasamentZone.length; zona++){
      //elementZona1 = document.getElementsByClassName("zona" + zona +" bara_propagare")[0];
      //elementZona2 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      elementZona3 = document.getElementsByClassName("zona" + zona +" bara_altitudine")[0];
      elementZona3.style.height = String(Math.round(clasamentZone[zona].medie/3)) + "px";
      //elementZona2.style.height = "20px";
      //elementZona2.style.height = "" + clasamentZone[zona].medie + "px";

      //console.log("zona" + zona + " " + elementZona2.style.height);
      elementZona3.style.background = culoareGalben;

      if(clasamentZone[zona].arie == nrArie){
          elementChenarZona = document.getElementsByClassName("altitudini zona" + zona + " nume_zona")[0];
          //elementChenarZona.style.border = "1px solid #333";
          elementChenarZona.style.background = "yellow";
          //elementChenarZona.style.borderBottom = "none";
          //elementChenarZona.style.borderLeftColor = "white";
          //elementChenarZona.style.borderRightColor = "white";

          elementChenarValoare = document.getElementsByClassName("altitudini zona" + zona + " val_cl_me")[0];
          //elementChenarValoare.style.border = "1px solid #333";
          elementChenarValoare.style.background = "yellow";
          //elementChenarValoare.style.borderTop = "none";
          //elementChenarValoare.style.borderLeftColor = "white";
          //elementChenarValoare.style.borderRightColor = "white";
          //elementChenarValoare.style.borderLeft = "none";
          //elementChenarValoare.style.borderRight = "none";
      }
      else{
        elementChenarZona = document.getElementsByClassName("altitudini zona" + zona + " nume_zona")[0];
        //elementChenarZona.style.border = "none";
        elementChenarZona.style.background = "white";
        elementChenarValoare = document.getElementsByClassName("altitudini zona" + zona + " val_cl_me")[0];
        //elementChenarValoare.style.border = "none";
        elementChenarValoare.style.background = "white";
      }
  }

}

function inserareTabelTraiectorii(){

  textHTML = "";
  textHTML += "<table>";
  textHTML+="<tr>";

  var totalZile = vectoriDateZone[0].vector_r.length-1;
  clasamentZone = clasamentAeronaveZileSortatProiectie[totalZile].clasament;

  //clasamentZone.sort(function(a, b){return a.r - b.r});

  //clasamentZone.sort(function(a, b){return a.proiectie - b.proiectie});

  for(let i=0; i<clasamentZone.length; i++){
      textHTML += "<td id='vp_zona" + i + "'>";
      //textHTML += "<div class='traiectorii zona" + i + " nume_zona'>" + clasamentZone[i].nume + "</div>";
      textHTML += "<div class='traiectorii zona" + i + " nume_zona'>" + vectoriDateZone[clasamentZone[i].arie].nume + "</div>";
      //textHTML += "<div class='zona" + clasamentZone[i].zona + " val_r'>" + "R=" + Math.floor((vectoriDateZone[clasamentZone[i].zona].vector_r[totalZile]-1)*10000)/100 + "</div>";
      textHTML += "<div class='traiectorii zona" + i + " val_cl_pr'>" + "#" + (i+1) + "</div>";

      textHTML += "<div class='traiectorii zona" + i + " bara_proiectie'>" + Math.round(clasamentZone[i].proiectie) + "</div>";
      //textHTML += "<div class='zona" + i + " bara_propagare'>" + Math.floor((clasamentZone[i].r-1)*10000)/100 + "</div>";
      //textHTML += "<div class='zona" + i + " bara_altitudine'>" + Math.round(clasamentZone[i].medie) + "</div>";

      //textHTML += "<div class='zona" + zona + " val_v'>" + "" + Math.round(vectoriDateZone[zona].date[totalZile]) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_me'>" + "Me=" + Math.round(valoareMedie) + "</div>";
      //textHTML += "<div class='zona" + zona + " val_pr'>" + "Pr=" + Math.round(valoareProiectie) + "</div>";
      textHTML += "</td>";
  }

  textHTML +="</tr>";
  textHTML += "</table>";

  var elementTraiectorii = document.getElementById("traiectorii");
  elementTraiectorii.innerHTML = textHTML;

  //clasamentZone.sort(function(a, b){return b.medie - a.medie});

  var elementZona2;
  for(let zona=0; zona < clasamentZone.length; zona++){
      //elementZona1 = document.getElementsByClassName("zona" + zona +" bara_propagare")[0];
      //elementZona2 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      elementZona3 = document.getElementsByClassName("zona" + zona +" bara_proiectie")[0];
      elementZona3.style.height = String(Math.round(clasamentZone[zona].proiectie/3)) + "px";
      //elementZona2.style.height = "20px";
      //elementZona2.style.height = "" + clasamentZone[zona].medie + "px";

      //console.log("zona" + zona + " " + elementZona2.style.height);
      elementZona3.style.background = culoareAlbastru;

      if(clasamentZone[zona].arie == nrArie){
          elementChenarZona = document.getElementsByClassName("traiectorii zona" + zona + " nume_zona")[0];
          //elementChenarZona.style.border = "1px solid #333";
          elementChenarZona.style.background = "yellow";
          //elementChenarZona.style.borderBottom = "none";
          //elementChenarZona.style.borderLeftColor = "white";
          //elementChenarZona.style.borderRightColor = "white";

          elementChenarValoare = document.getElementsByClassName("traiectorii zona" + zona + " val_cl_pr")[0];
          //elementChenarValoare.style.border = "1px solid #333";
          elementChenarValoare.style.background = "yellow";
          //elementChenarValoare.style.borderTop = "none";
          //elementChenarValoare.style.borderLeftColor = "white";
          //elementChenarValoare.style.borderRightColor = "white";
          //elementChenarValoare.style.borderLeft = "none";
          //elementChenarValoare.style.borderRight = "none";
      }
      else{
        elementChenarZona = document.getElementsByClassName("traiectorii zona" + zona + " nume_zona")[0];
        //elementChenarZona.style.border = "none";
        elementChenarZona.style.background = "white";
        elementChenarValoare = document.getElementsByClassName("traiectorii zona" + zona + " val_cl_pr")[0];
        //elementChenarValoare.style.border = "none";
        elementChenarValoare.style.background = "white";
      }

  }

}

function generare_vector_r_coefA(){
    n = (orizont_regresie);
    //console.log(n);
    //console.log(data_2.length);
    for(let k = 0; k < n + orizont_arie; k++){
      vector_r[k] = 0;
      vector_r_normalizat[k] = 0;
      vector_coefA[k] = 0;
      vector_E[k] = 0;
      //console.log(k);
    }

    for(let k = n + orizont_arie; k <= data_2.length; k++){
        zi_start = k - n;

        sumX = 0;
        sumY = 0;
        sumXY = 0;
        sumX2 = 0;
        sumY2 = 0;
        //contor = 0;
        sumY_raw = 0;
        medieY_raw = 0;

        for(let i = zi_start; i < k; i++){
          //console.log(i);
          //SumX
          sumX += i;

          //SumY(SumLn(y))
          esantion = data_2[i];
          logEsantion = Math.log(esantion);

          if(esantion <= 0){
              esantion = 0;
              logEsantion = 0;
          }
          //if(data_2[i]>0){
          sumY += logEsantion;
          sumY_raw += data_2[i];//esantion;

          //SumXY(SumXLn(y))
          sumXY += i*logEsantion;

          //SumX^2
          sumX2 += i*i;

          sumY2 += logEsantion * logEsantion;

        }

        m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
        b = (sumY - m*sumX) / n;

        bazaR = Math.exp(m);
        coefA = Math.exp(b);

        //console.log("n=" + n + " contor=" + contor);

        medieY_raw = sumY_raw / n;

        let varianta = 0;
        for (let i = zi_start; i < k; i++) {
           varianta += Math.pow((data_2[i] - medieY_raw), 2);
        }
        let devst = Math.sqrt(varianta / (n-1));

        //varianta2 = Math.floor(varianta*100) / 100;
        //devst2 = Math.round(devst);


        vector_r[k-1] = bazaR;
        vector_coefA[k-1] = coefA;
        vector_r_normalizat[k-1] = (bazaR - 1) * 1000;
        vector_E[k-1] = devst;
    }

    /*
    console.log("vector r generat");
    for (let k = 0; k < vector_r.length; k++){
      console.log("v_r[" + k + "]: " + vector_r[k]);
    }*/

    //vector derivate R
    for (let k = 0; k < vector_r.length; k++){
        //console.log("v_r[" + k + "]: " + vector_r[k]);
        if(k > orizont_trend){
          vr0 = vector_r[k-16];
          vr1 = vector_r[k-8];
          vr2 = vector_r[k];
          d1r1 = (vr1 - vr0)/8;
          d1r2 = (vr2 - vr1)/8;
          d2r2 = (d1r2 - d1r1)/8;

          vectorDR[k] = d1r2;
          vectorD2R[k] = d2r2;
        }
        else{
          vectorDR[k] = 0;
          vectorD2R[k] = 0;
        }
    }
}

function generare_vector_rToate_coefA(){
    n = (orizont_regresie);
    //console.log(n);
    //console.log(data_2.length);
    for(let k = 0; k < n + orizont_arie; k++){
      vector_rToate[k] = 0;
      vector_rToate_normalizat[k] = 0;
      vector_coefAToate[k] = 0;
      vector_EToate[k] = 0;
      //console.log(k);
    }

    for(let k = n + orizont_arie; k <= data_2.length; k++){
        zi_start = k - n;

        sumX = 0;
        sumY = 0;
        sumXY = 0;
        sumX2 = 0;
        sumY2 = 0;
        //contor = 0;
        sumY_raw = 0;
        medieY_raw = 0;

        for(let i = zi_start; i < k; i++){
          //console.log(i);
          //SumX
          sumX += i;

          //SumY(SumLn(y))
          esantion = data_2Toate[i];
          logEsantion = Math.log(esantion);

          if(esantion <= 0){
              esantion = 0;
              logEsantion = 0;
          }
          //if(data_2[i]>0){
          sumY += logEsantion;
          sumY_raw += data_2Toate[i];//esantion;

          //SumXY(SumXLn(y))
          sumXY += i*logEsantion;

          //SumX^2
          sumX2 += i*i;

          sumY2 += logEsantion * logEsantion;

        }

        m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
        b = (sumY - m*sumX) / n;

        bazaRToate = Math.exp(m);
        coefAToate = Math.exp(b);

        //console.log("n=" + n + " contor=" + contor);

        medieY_raw = sumY_raw / n;

        let varianta = 0;
        for (let i = zi_start; i < k; i++) {
           varianta += Math.pow((data_2Toate[i] - medieY_raw), 2);
        }
        let devst = Math.sqrt(varianta / (n-1));

        //varianta2 = Math.floor(varianta*100) / 100;
        //devst2 = Math.round(devst);


        vector_rToate[k-1] = bazaRToate;
        vector_coefAToate[k-1] = coefAToate;
        vector_rToate_normalizat[k-1] = (bazaRToate - 1) * 1000;
        vector_EToate[k-1] = devst;
    }

    /*
    console.log("vector r generat");
    for (let k = 0; k < vector_r.length; k++){
      console.log("v_r[" + k + "]: " + vector_r[k]);
    }*/

    //vector derivate R
    for (let k = 0; k < vector_rToate.length; k++){
        //console.log("v_r[" + k + "]: " + vector_r[k]);
        if(k > orizont_trend){
          vr0 = vector_rToate[k-16];
          vr1 = vector_rToate[k-8];
          vr2 = vector_rToate[k];
          d1r1 = (vr1 - vr0)/8;
          d1r2 = (vr2 - vr1)/8;
          d2r2 = (d1r2 - d1r1)/8;

          vectorDRToate[k] = d1r2;
          vectorD2RToate[k] = d2r2;
        }
        else{
          vectorDRToate[k] = 0;
          vectorD2RToate[k] = 0;
        }
    }
}


function calcul_parametrii_Predictie(){
    n = (orizont_regresie);
    //console.log(n);
    //console.log(data_2.length);
    zi_start = data_2.length - n;

    sumX = 0;
    sumY = 0;
    sumXY = 0;
    sumX2 = 0;
    sumY2 = 0;
    //contor = 0;

    sumY_nelog = 0;

    for(let i = zi_start; i < data_2.length; i++){
      //console.log(i);
      //SumX
      sumX += i;

      //SumY(SumLn(y))

      sumY += Math.log(data_2[i]);
      sumY_nelog += data_2[i];

      //SumXY(SumXLn(y))
      sumXY += i*Math.log(data_2[i]);

      //SumX^2
      sumX2 += i*i;

      sumY2 += Math.log(data_2[i]) * Math.log(data_2[i]);

      //data_2[i];
      //contor++;
    }

    m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
    b = (sumY - m*sumX) / n;

    bazaR = Math.exp(m);
    coefA = Math.exp(b);

    //logaritmat
    medieY = sumY / n;
    medieY_nelog = sumY_nelog / n;


    const mx = sumX / n;
    const my = sumY / n;
    const yy = n * sumY2 - sumY * sumY;
    const xx = n * sumX2 - sumX * sumX;
    const xy = n * sumXY - sumX * sumY;
    const m2 = xy / xx;
    const b2 = my - m2 * mx;
    r = xy / Math.sqrt(xx * xy);
    r2 = Math.pow(r,2);

    /*
    console.log("mx: " + mx);
    console.log("my: " + my);
    console.log("yy: " + yy);
    console.log("xx: " + xx);
    console.log("xy: " + xy);
    console.log("m2: " + m2);
    console.log("b2: " + b2);
    //corelatie
    console.log("r: " + r);
    //determinatie
    console.log("r2: " + r2);
    console.log(" ");*/

    varianta = 0;
    //sst = eroare regresie + eroare reziduala (varianta)
    sst = 0;
    for (let i = zi_start; i < data_2.length; i++) {
       varianta += Math.pow((data_2[i] - medieY_nelog), 2);
       sst += Math.pow((data_2[i] - medieY_nelog), 2);
    }
    devst = Math.sqrt(varianta / (n-1));

    varianta2 = Math.floor(varianta*100) / 100;
    devst2 = Math.round(devst);

    //1. sst = eroare regresie + eroare reziduala (varianta) - eroare totala
    //2. sse = eroare regresie
    //3. see = eroare standard de estimare (deviatie standard)
    //4. ssr = eroare totala - eroare regresie = eroare reziduala (y - y model)

    //eroare regresie
    sse = sst - r2 * sst;

    //deviatia standard - eroare standard de estimare
    see = Math.sqrt(sse / (n - 2));

    //eroare reziduala (y-ymodel)
    ssr = sst - sse;

    sst2 = Math.floor(sst*100) / 100;
    sse2 = Math.floor(sse*100) / 100;
    see2 = Math.floor(see*100) / 100;
    ssr2 = Math.floor(ssr*100) / 100;



    /*
    console.log("sst (varianta): " + sst);
    console.log("sse (eroar std estimare): " + sse);
    console.log("see (deviatie std): " + see);
    console.log("ssr (eroare reziduala): " + ssr);
    console.log(" ");

    console.log("sst (varianta): " + Math.floor(Math.exp(sst)*100) / 100);
    console.log("sse (eroar std estimare): " + Math.floor(Math.exp(sse)*100) / 100);
    console.log("see (deviatie std): " + Math.floor(Math.exp(see)*100) / 100);
    console.log("ssr (eroare reziduala): " + Math.floor(Math.exp(ssr)*100) / 100);
    console.log(" "); */

    //nelogaritmat
    /*
    console.log("orizont t: " + orizont_trend);
    console.log("orizont r: " + (orizont_regresie + orizont_arie));
    console.log("contor: " + contor);
    console.log("medie: " + Math.floor(Math.exp(medieY)*100) / 100);
    console.log("varianta: " + Math.floor(Math.exp(varianta)*100) / 100);
    console.log("devst: " + Math.floor(Math.exp(devst)*100) / 100);*/


    //yp = coefA * Math.pow(bazaR, 110);

    /*
    console.log("n: " + n);
    console.log("SumX: " + sumX);
    console.log("SumY(lnY): " + sumY);
    console.log("SumXY(lnY): " + sumXY);
    console.log("SumX^2: " + sumX2);
    console.log("m: " + m);
    console.log("b: " + b);
    console.log("bazaR: " + bazaR);
    console.log("coefA: " + coefA);
    console.log("i start: " + zi_start);
    console.log("data2[zi_start]: " + data_2[zi_start]);
    console.log("yp: " + yp);*/
}

var suprafataGrafica = {
    canvas : document.createElement("canvas"),

    //generare suprafata grafica
    constructie : function() {
        //setare dimensiuni suprafata grafica
        this.canvas.width = lungimeSuprafataGrafica;
        this.canvas.height = inaltimeSuprafataGrafica;

        //setare context suprafata grafica
        this.context = this.canvas.getContext("2d");

        //inserare suprafata grafica in pagina
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        //setare interval de actualizare
        this.interval = setInterval(ActualizareSuprafataGrafica, vitezaSimulare);

    },

    //resetare suprafata grafica
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function desenareSchemaRacheta(){
  //radianiZi = selectorZi * (2 * Math.PI) / 360 * vitezaRadar; //360/8 = 45

  //grade = selectorZi * vitezaRadar;
  //console.log(grade);
  //if(Math.cos(radianiZi))
  /*
  grade = selectorZi % (360 / vitezaRadar);
  //console.log("grade: " + grade);
  //console.log(cadranStart + " " + cadranFinal);
  //console.log(radianiZi);
  if(grade > cadranStart && grade < cadranFinal ){
     //console.log("cadranul 4");
  }*/

  //desenare Elice Turbina
  //vitezaElice = data[selectorZi]*2;
  vitezaElice = 34 * data[selectorZi] / medieCumulativ[selectorZi]; //factor amplificare

  unghiEliceRadiani = unghiEliceRadiani  + (2 * Math.PI) / 360 * vitezaElice;
  unghiEliceRadiani2 = unghiEliceRadiani2  - (2 * Math.PI) / 360 * vitezaElice;

  if(unghiEliceRadiani/(2*Math.PI)>1){
    unghiEliceRadiani -= 2*Math.PI;
  }

  if(-unghiEliceRadiani2/(2*Math.PI)>1){
    unghiEliceRadiani2 += 2*Math.PI;
  }
  //console.log(unghiEliceRadiani);
  yElice = inaltimeSuprafataGrafica - 10 - ((medieCumulativ[selectorZi]*scalaY)/maxValue);

  //desenare racheta
  yRachetaVarf = yElice + 10;
  yRachetaCorp = yElice - 3;


  ctx.fillStyle = culoareRezervor;
  ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";

  //Schema Reglare
  ctx.strokeStyle = "grey";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(xCercRef, yCercRef, 8, 0, 2 * Math.PI);
  ctx.closePath();
  //ctx.fill();
  ctx.stroke();


  if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] != culoareMaro){
      ctx.strokeStyle = "green";//culoareCrestereMaro;//"red";
      ctx.fillStyle = "green";//culoareCrestereMaro;//"red";
      //text_lim = "des";
  }
  else{
    ctx.strokeStyle = culoareRosuTemperat;
    ctx.fillStyle = "grey";
  }
  //blocuri
  ctx.textAlign = "center";
  ctx.strokeRect(xBlocC, yBlocC, lungBloc, latBloc);
  ctx.fillText("Cₚ", xBlocC + lungBloc/2, yCaleDir + 4);


  //algoritm reglare - minimizare E
  //ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();

  if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] != culoareMaro){
      ctx.strokeStyle = "green";//culoareCrestereMaro;//"red";
      ctx.fillStyle = "green";//culoareCrestereMaro;//"red";
      //text_lim = "des";
  }
  else{
    ctx.strokeStyle = "grey";
    ctx.fillStyle = "grey";
  }
  ctx.setLineDash([2, 4]);
  //ctx.beginPath();
  ctx.moveTo(xBlocC + lungBloc/2, yCaleDir - 10);
  ctx.lineTo(xBlocC + lungBloc/2, yCaleDir - 22);
  //ctx.closePath();
  ctx.stroke();
  ctx.moveTo(xBlocC + 21, yCaleDir - 22);
  ctx.lineTo(xBlocC - 3, yCaleDir - 22);
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);
  //ctx.lineWidth = 2;



  //R
  if(vector_rToate[selectorZi] >= 1){
    ctx.fillStyle = culoareRosuTemperat;//culoareCrestereRosu;
    ctx.strokeStyle = culoareRosuTemperat;
    text_r = "+" + ((Math.floor((vector_rToate[selectorZi] - 1)*10000))/100) + "%";
    text_r2 = "+" + ((Math.floor((vector_rToate[selectorZi] - 1)*1000))/10) + "%";
  }
  else{
    ctx.fillStyle = "green";
    ctx.strokeStyle = "green";
    //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    text_r = "" + ((Math.floor((vector_rToate[selectorZi] - 1)*10000))/100) + "%";
    text_r2 = "" + ((Math.floor((vector_rToate[selectorZi] - 1)*1000))/10) + "%";
  }
  // Gravitatie R
  if(selectorZi > orizont_trend){
    gravitatieR = ((Math.floor((vector_rToate[selectorZi] - 1)*1000))/10);
    ctx.beginPath();
    ctx.moveTo(xElice1 - 18, yElice);
    ctx.lineTo(xElice1 - 18, yElice - gravitatieR * 2);
    ctx.closePath();
    ctx.stroke();

    //capat vector
    ctx.beginPath();
    ctx.arc(xElice1 - 18, yElice - gravitatieR * 2, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    //valoare vector
    ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    ctx.textAlign = "end";
    ctx.fillText(text_r2, xElice1 - 23, yElice - gravitatieR * 2 + 2);

  }

  ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.strokeRect(xBlocP, yBlocC, lungBloc, latBloc);
  ctx.fillText("P", xBlocP + lungBloc/2, yCaleDir + 4);

  //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  if(selectorZi > orizont_trend){
      ctx.fillText(text_r, xBlocP + 20, yCaleBucla - 7);
  }


  //crestere/descrestere
  //ctx.fillText("Referința", lungimeSuprafataGrafica - 15, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 35);
  //ctx.fillText("actuală", lungimeSuprafataGrafica - 15, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 21);
  if(vectorDRToate[selectorZi] > 0){
      //ctx.fillText("" + Math.floor(medieCumulativ[selectorZi]*10)/10 + "... ", lungimeSuprafataGrafica - 25, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.textAlign = "center";
      ctx.fillStyle = culoareCrestereRosu;
      //ctx.fillStyle = culoareCrestereMaro;
      //if(pulsatie_3){
      if(vectorDRToate[selectorZi] > vectorDRToate[selectorZi-1]){
          ctx.font = "10px Helvetica, system-ui, Arial, sans-serif";
      }
      else{
          ctx.font = "12px Helvetica, system-ui, Arial, sans-serif";
      }
      ctx.fillText("\u25B2", xBlocP + 33, yCaleDir + 1);
      //ctx.font = "12px Helvetica, system-ui, Arial, sans-serif";
      //ctx.fillStyle = culoarePunctValoriGrafic_3;
      //ctx.fillText("\u25BC", xBlocP + 33, yCaleDir + 9);
  }
  else{
      //ctx.fillText("" + Math.round(medieCumulativ[selectorZi]) + "... ", lungimeSuprafataGrafica - 25, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.textAlign = "center";
      ctx.font = "12px Helvetica, system-ui, Arial, sans-serif";
      //ctx.fillStyle = culoareScadere;
      //ctx.fillStyle = culoarePunctValoriGrafic_3;
      //ctx.fillText("\u25B2", xBlocP + 33, yCaleDir - 0);

      ctx.fillStyle = culoareScadere;
      //if(pulsatie_3){
      if(vectorDRToate[selectorZi] < vectorDRToate[selectorZi-1]){
          ctx.font = "10px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillText("\u25BC", xBlocP + 33, yCaleDir + 6);
      }
      else{
          ctx.fillText("\u25BC", xBlocP + 33, yCaleDir + 7);
      }


  }


  //segmente cale directa
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  //Ref
  ctx.lineWidth = 4;
  ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.beginPath();
  ctx.moveTo(xCercRef - 8 - latBloc, yCaleDir);
  ctx.lineTo(xCercRef - 9, yCaleDir);
  ctx.closePath();
  ctx.stroke();


  ctx.fillText(Math.floor(medieCumulativ[selectorZi]*10)/10, xCercRef - 32, yCaleDir + 14);
  ctx.fillText("r(t)", xCercRef - 30, yCaleDir - 6);

  ctx.fillStyle = "grey";
  ctx.fillText("-", xCercRef - 7, yCaleDir +4);


  //E
  text_initial = "";
  eroare = data[selectorZi] - medieCumulativ[selectorZi];
  if (eroare > 0 ){
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
      text_initial = "+";
  }
  else{
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
  }

  // Eroare E
  //if(selectorZi > orizont_trend){
    ctx.lineWidth = 2;
    //gravitatieR = ((Math.floor((vector_rToate[selectorZi] - 1)*1000))/10);

    if(selectorZi > 6){
        dataEroareAmortizata = (data[selectorZi] + data[selectorZi-1] + data[selectorZi-2] + data[selectorZi-3] + data[selectorZi-4] + data[selectorZi-5] + data[selectorZi-6])/7;
    }
    else{
        dataEroareAmortizata = data[selectorZi];
    }
    //dataEroareAmortizata = data[selectorZi];
    //lungimeJet = Math.floor(dataJetAmortizat / medieCumulativ[selectorZi]*10)/10 * 7;

    eroareE = (dataEroareAmortizata - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100;
    ctx.beginPath();
    ctx.moveTo(xElice1 - 18, yElice);
    ctx.lineTo(xElice1 - 18, yElice - eroareE * 2);
    ctx.closePath();
    ctx.stroke();

    //capat vector
    ctx.beginPath();
    ctx.arc(xElice1 - 18, yElice - eroareE * 2, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    //valoare vector
    ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
    ctx.textAlign = "end";
    if( (yElice - eroareE * 2 + 2) < inaltimeSuprafataGrafica){
        if( (yElice - eroareE * 2 + 2) > 0){
          ctx.fillText( text_initial + Math.round((data[selectorZi] - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100) + "%" , xElice1 - 24, yElice - eroareE * 2 + 2);
        }
        else{
          ctx.fillText( text_initial + Math.round((data[selectorZi] - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100) + "%" , xElice1 - 24, 16);
        }
    }
    else {
        ctx.fillText( text_initial + Math.round((data[selectorZi] - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100) + "%" , xElice1 - 24, inaltimeSuprafataGrafica - 5);
    }

    //ctx.fillText(text_r2, xRacheta + 23, yElice - gravitatieR * 2 + 2);
  //}


  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(xCercRef + 9, yCaleDir);
  ctx.lineTo(xBlocC-1, yCaleDir);
  ctx.closePath();
  ctx.stroke();


  ctx.textAlign = "center";
  ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText( Math.round(eroare), xCercRef + 20, yCaleDir + 14);


  ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText( "" + Math.round((data[selectorZi] - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100) + "%" , xCercRef + 22, yCaleDir + 24);

  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText( "min", xCercRef + 23, yCaleDir - 18);

  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";

  ctx.fillText("ε(t)", xCercRef + 14, yCaleDir - 6);
  ctx.fillStyle = "grey";
  ctx.fillText("+", xCercRef - 4, yCaleDir + 8);


  //Tau
  ctx.fillText("𝜏 = 4s", xBlocP + lungBloc/2 - 16, yCaleDir - 14);

  //u

  if(zile_evenimente_actiuni[selectorZi]> -1){
      if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
          ctx.strokeStyle = culoareRosuTemperat;//culoareCrestereMaro;//"red";
          ctx.fillStyle = culoareRosuTemperat;//culoareCrestereMaro;//"red";
          text_lim = "des";
      }
      else{
          ctx.strokeStyle = culoareScadere;//"grey";
          ctx.fillStyle = culoareScadere;//"grey";
          text_lim ="lim";
      }
  }
  else{
      ctx.strokeStyle = culoareScadere;//"grey";
      ctx.fillStyle = culoareScadere;
  }

  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(xBlocC + lungBloc + 1, yCaleDir);
  ctx.lineTo(xBlocP - 1, yCaleDir);
  ctx.closePath();
  ctx.stroke();

  ctx.fillText("u(t)", xBlocC + lungBloc + 12, yCaleDir - 6);
  ctx.textAlign = "center";
  ctx.fillText(text_lim, xBlocC + lungBloc + 20, yCaleDir + 13);

  ctx.textAlign = "start";
  //y
  ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";

  ctx.fillStyle = culoareApaNivelUltraCritic;//"grey";//culoareValoareNivel;
  ctx.fillText("y(t)", xBlocP + lungBloc + 46, yCaleDir - 6);

  if(vector_rToate[selectorZi] > 1){
      ctx.font = "italic bold 18px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillText(Math.round(data[selectorZi]), xBlocP + lungBloc + 46, yCaleDir + 18);
  }
  else{
      ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillText(Math.round(data[selectorZi]), xBlocP + lungBloc + 46, yCaleDir + 13);
  }



  //ctx.lineWidth = 2;
  //ctx.strokeStyle = "grey";
  ctx.fillStyle = "grey";
  //Factor amplificare
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";

  //console.log(factor_ampMediu);

  //text accelerare
  ctx.textAlign = "center";
  ctx.fillText("amplificare", xCercRef + 40, yCaleBucla + 16);
  ctx.fillText("(accelerare)", xCercRef + 40, yCaleBucla + 26);

  //text viteza
  //ctx.textAlign = "start";
  ctx.fillText("ref.", xCercRef - 20, yCaleDir + 46);
  ctx.fillText("(vit.)", xCercRef - 20, yCaleDir + 56);
  //ctx.fillText("amplificare", xCercRef + 22, yCaleBucla + 28);

  //text var stare
  //ctx.textAlign = "end";
  ctx.fillText("stare", xBlocP + 88, yCaleDir + 46);
  ctx.fillText("(var. internă)", xBlocP + 70, yCaleDir + 56);

  if(factor_ampMediu < 1){
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
  }
  else{
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
  }
  //sub schema
  ctx.font = "italic bold 15px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(Math.floor(factor_ampMediu*10)/10 + "x̄", xCercRef + 100, yCaleBucla + 22);

  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  //ctx.textAlign = "center";
  if(factor_ampMediu > 1){
    ctx.fillText("+" + Math.round((factor_ampMediu-1)*100) + "%", xCercRef + 100, yCaleBucla + 33);
  }
  else{
    ctx.fillText(Math.round((factor_ampMediu-1)*100) + "%", xCercRef + 100, yCaleBucla + 33);
  }


  //ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
  //ctx.textAlign = "center";
  //ctx.fillText(factor_ampMediu + "", xCercRef + 100, yCaleBucla + 32);

  //deasupra racheta
  ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(Math.floor(factor_ampMediu*10)/10 + "x", xRacheta + 1, yRachetaVarf - 32);

  //langa racheta
  //vector accelerare / amplificare
  ctx.lineWidth = 4;
  //if(selectorZi > orizont_trend){
    ctx.beginPath();
    ctx.moveTo(xRacheta + 20, yElice);
    ctx.lineTo(xRacheta + 20, yElice - (factor_ampMediu - 1) * 10);
    ctx.closePath();
    ctx.stroke();

    //capat vector
    ctx.beginPath();
    ctx.arc(xRacheta + 20, yElice - (factor_ampMediu - 1) * 10, 4, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();



    //valoare vector acceleratie racheta 1
    //ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
    //ctx.textAlign = "end";
    //ctx.fillText("a", xRacheta + 23, yElice - (factor_ampMediu - 1) * 10 - 8);

  //}
  ctx.lineWidth = 4;

  //langa racheta - inaltime nivel
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  //Ref
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillText(Math.floor(medieCumulativ[selectorZi]*10)/10, xRacheta + 26, yElice);

  //if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
  if(data[selectorZi]>medieCumulativ[selectorZi]){
      ctx.strokeStyle = culoareRosuTemperat;//culoareCrestereMaro;
      //ctx.fillStyle = "red";
  }
  else{
      ctx.strokeStyle = culoareScadere;//"grey";
      //ctx.fillStyle = "grey";
  }

  //segment iesire bloc P
  ctx.beginPath();
  ctx.moveTo(xBlocP + lungBloc + 1, yCaleDir);
  ctx.lineTo(xBlocP + 2 * lungBloc + lungBloc/2, yCaleDir);
  ctx.closePath();
  ctx.stroke();

  //ctx.beginPath();
  //ctx.closePath();
  //ctx.stroke();

  //segmente cale bucla

  //y capat dreapta
  ctx.beginPath();
  ctx.moveTo(xBlocP + lungBloc + lungBloc, yCaleDir);
  ctx.lineTo(xBlocP + lungBloc + lungBloc, yCaleBucla);
  ctx.closePath();
  ctx.stroke();

  //y capat stanga
  ctx.beginPath();
  ctx.moveTo(xCercRef, yCaleDir + 9);
  ctx.lineTo(xCercRef, yCaleBucla);
  ctx.closePath();
  ctx.stroke();

  //bucla reactie
  ctx.beginPath();
  ctx.moveTo(xCercRef, yCaleBucla);
  ctx.lineTo(xBlocP + lungBloc + lungBloc, yCaleBucla);
  ctx.closePath();
  ctx.stroke();



  //desenare amortizor
  ctx.fillStyle = culoare_canvas;//"lightgrey";
  ctx.fillRect(xBlocA, yBlocA, lungBloc, latBlocA);

  if(factor_ampMediu < 1){
      ctx.fillStyle = "green";//culoare_scadere_entitate;//"lightgrey";
  }
  else {
      ctx.fillStyle = culoareRosuTemperat;//culoareRosu;
  }

  //ctx.fillRect(xBlocA + lungBloc - 1, yBlocA -1, -factor_amp*20, latBlocA + 2);


  ctx.lineWidth = 2;
  //ctx.beginPath();

  //bloc amplificator
  ctx.strokeRect(xBlocA, yBlocA, lungBloc, latBlocA);

  //vector amplificator
  ctx.beginPath();
  ctx.moveTo(xBlocA + lungBloc/2, yCaleBucla);
  ctx.lineTo(xBlocA + lungBloc/2 - (factor_ampMediu - 1)*20, yCaleBucla);
  ctx.closePath();
  ctx.stroke();

  //capat vector amplificator

  ctx.beginPath();
  ctx.arc(xBlocA + lungBloc/2 - (factor_ampMediu - 1)*20, yCaleBucla, 4, 0, 2 * Math.PI);
  ctx.closePath();
  if(factor_ampMediu < 1){
      ctx.fillStyle = "green";//culoare_scadere_entitate;//"lightgrey";
      ctx.fill();
  }
  else {
      ctx.fillStyle = "orange";//culoareRosu;
      ctx.strokeStyle = "culoareRosuTemperat";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.stroke();
  }


  //Cutie, frana
  //--------------------
  //pendul
  //ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";
  ctx.fillStyle = "#4d4d4d";

  //desenare stalp soseta
  //xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90 - 90;
  xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90 + 0;

  xsoseta = lungimeSosetaModReglare * Math.cos(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSosetaModReglare * Math.sin(xsos * Math.PI * 2 / 360);

  if(selectorZi > orizont_regresie + orizont_arie){

      ctx.lineWidth = 2;
      if(vector_rToate[selectorZi] > 1){
          //flama
          ctx.fillStyle = "yellow";
          ctx.beginPath();
          ctx.moveTo(xStalpModReglare, yStalpModReglare);
          ctx.arc(xStalpModReglare+1, yStalpModReglare-1, lungimeSosetaModReglare + 1, -(xsos * Math.PI * 2 / 360), 0 );
          //ctx.moveTo(xStalpModReglare, yStalpModReglare - lungimeSosetaModReglare);
          ctx.closePath();
          ctx.fill();

          ctx.strokeStyle = culoareRosuTemperat;//culoareTextCompensatorRosu;//"red";//culoareCrestereMaro;
          ctx.fillStyle = culoareRosu;//culoareTextCompensatorRosu;//"red";//culoareCrestereMaro;
      }
      else{
          //desenare arc pendul
          ctx.strokeStyle = "green";//"#1a1a1a";//"#333";
          ctx.lineWidth = 1;
          ctx.setLineDash([1,2]);
          ctx.beginPath();
          ctx.moveTo(xStalpModReglare + lungimeSosetaModReglare, yStalpModReglare);
          ctx.arc(xStalpModReglare, yStalpModReglare, lungimeSosetaModReglare, 0, - 2*Math.PI * 0.25);
          ctx.moveTo(xStalpModReglare, yStalpModReglare - lungimeSosetaModReglare);
          ctx.closePath();
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.strokeStyle = "green";//culoare_scadere_entitate;
          ctx.fillStyle = culoare_scadere_entitate;
      }
      ctx.lineWidth = 2;

      //
      //ctx.fillStyle = "white";//"#4d4d4d";
      ctx.beginPath();
      ctx.moveTo(xStalpModReglare, yStalpModReglare);
      ctx.arc(xStalpModReglare, yStalpModReglare, lungimeSosetaModReglare, 0, -(xsos * Math.PI * 2 / 360));
      ctx.moveTo(xStalpModReglare, yStalpModReglare);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.closePath();
      ctx.stroke();

      ctx.lineWidth = 4;

      if(vector_rToate[selectorZi] > 1){
          ctx.strokeStyle = culoareRosuTemperat;//culoareCrestereMaro;
          ctx.fillStyle = culoareRosuTemperat;//culoareCrestereMaro;
      }
      else{
          ctx.strokeStyle = culoareScadere;
          ctx.fillStyle = culoareScadere;
      }

      //desenare cerc capat pendul
      //ctx.fillStyle = "white";
      //ctx.fillStyle = "#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpModReglare + xsoseta, yStalpModReglare - ysoseta, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.closePath();

      //desenare soseta
      ctx.moveTo(xStalpModReglare, yStalpModReglare);
      ctx.lineTo(xStalpModReglare + xsoseta, yStalpModReglare - ysoseta);
      ctx.stroke();

      ctx.beginPath();
      ctx.closePath();
      ctx.stroke();

      //desenare cerc baza pendul
      //ctx.fillStyle = "white";//"#4d4d4d";

      ctx.beginPath();
      ctx.arc(xStalpModReglare, yStalpModReglare, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();


  }


  //Flapsuri Reactie
  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.lineWidth = 2;
  //Ref
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  if(vector_rToate[selectorZi] < 1){
    ctx.fillStyle = culoareScadere;
    ctx.strokeStyle = culoareScadere;
    ctx.fillText("eliberare", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14);
    ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
    ctx.strokeRect(xIndicatorFlapsuri + 90, yIndicatorFlapsuri + 2, 62, 28);

    ctx.font = "bold italic 11px Helvetica, system-ui, Arial, sans-serif";
    //grade flapsuri
    if(selectorZi > orizont_trend){
      ctx.fillText(Math.floor((vector_rToate[selectorZi]-1)*1000)/10 + "% V/zi", xIndicatorGradeFlapsuri + 120, yIndicatorGradeFlapsuri + 14);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.strokeRect(xIndicatorGradeFlapsuri + 90, yIndicatorGradeFlapsuri + 2, 62, 16);
    }
    else{
      //ctx.fillStyle = culoareTextZi;
      //ctx.strokeStyle = culoareTextZi;
      ctx.fillText("% V", xIndicatorGradeFlapsuri + 120, yIndicatorGradeFlapsuri + 14);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.strokeRect(xIndicatorGradeFlapsuri + 90, yIndicatorGradeFlapsuri + 2, 62, 16);
    }


  }
  else{
    ctx.fillStyle = culoareTextZi;
    ctx.strokeStyle = culoareTextZi;
    ctx.fillText("eliberare", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14);
    ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
    ctx.strokeRect(xIndicatorFlapsuri + 90, yIndicatorFlapsuri +2, 62, 28);

    ctx.font = "bold italic 11px Helvetica, system-ui, Arial, sans-serif";
    //grade flapsuri
    ctx.fillStyle = culoareRosuTemperat;
    ctx.strokeStyle = culoareRosuTemperat;
    if(selectorZi > orizont_trend){
      ctx.fillText("+" + Math.floor((vector_rToate[selectorZi]-1)*1000)/10 + "% V/zi", xIndicatorGradeFlapsuri + 120, yIndicatorGradeFlapsuri + 14);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.strokeRect(xIndicatorGradeFlapsuri + 90, yIndicatorGradeFlapsuri + 2, 62, 16);
    }
    else{
      //ctx.fillStyle = culoareTextZi;
      //ctx.strokeStyle = culoareTextZi;
      ctx.fillText("% V", xIndicatorGradeFlapsuri + 120, yIndicatorGradeFlapsuri + 14);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.strokeRect(xIndicatorGradeFlapsuri + 90, yIndicatorGradeFlapsuri + 2, 62, 16);
    }
  }


  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  if(vector_rToate[selectorZi] >= 1){
    ctx.fillStyle = culoareRosuTemperat;
    ctx.strokeStyle = culoareRosuTemperat;
    ctx.fillText("mărire", xIndicatorReactie + 120, yIndicatorReactie + 14 - 32);
    ctx.fillText("viteză", xIndicatorReactie + 120, yIndicatorReactie -6);
    ctx.strokeRect(xIndicatorReactie + 90, yIndicatorReactie -30, 62, 28);
  }
  else{
    //ctx.fillStyle = culoareTextZi;
    //ctx.strokeStyle = culoareTextZi;
    ctx.fillStyle = culoareScadere;
    ctx.strokeStyle = culoareScadere;
    ctx.fillText("încetinire", xIndicatorReactie + 120, yIndicatorReactie + 14 - 32);
    ctx.fillText("viteză", xIndicatorReactie + 120, yIndicatorReactie -6);
    ctx.strokeRect(xIndicatorReactie + 90, yIndicatorReactie - 30, 62, 28);
  }


  if(medieCumulativToate[selectorZi] > 10 && selectorZi > 231){
    //ctx.fillStyle = "hsla(182, 30%, 15%,90%)";//"orange";//culoareRosuTemperat;
    //ctx.strokeStyle = "hsla(182, 30%, 15%,90%)";//culoareRosuTemperat;
    ctx.fillStyle = culoareScadere;
    ctx.strokeStyle = culoareScadere;
    ctx.fillText("centură", xIndicatorCentura + 120, yIndicatorCentura + 14 - 32);
    ctx.fillText("siguranță", xIndicatorCentura + 120, yIndicatorCentura -6);
    ctx.strokeRect(xIndicatorCentura + 90, yIndicatorCentura -30, 62, 28);
  }
  else{
    ctx.fillStyle = culoareTextZi;
    ctx.strokeStyle = culoareTextZi;
    ctx.fillText("centură", xIndicatorCentura + 120, yIndicatorCentura + 14 - 32);
    ctx.fillText("siguranță", xIndicatorCentura + 120, yIndicatorCentura -6);
    ctx.strokeRect(xIndicatorCentura + 90, yIndicatorCentura - 30, 62, 28);
  }

  if(vectorDRToate[selectorZi] < 0){
    ctx.fillStyle = culoareScadere;
    ctx.strokeStyle = culoareScadere;
    ctx.fillText("frână", xIndicatorFrana + 120, yIndicatorFrana + 14 - 32);
    ctx.fillText("reacție", xIndicatorFrana + 120, yIndicatorFrana -6);
    ctx.strokeRect(xIndicatorFrana + 90, yIndicatorFrana -30, 62, 28);

    //grade frana
    if(selectorZi > orizont_trend){
      ctx.fillText("" + Math.floor(vectorDRToate[selectorZi]*10000)/100 + " °F/zi", xIndicatorGradeFrana + 120, yIndicatorGradeFrana + 14);
      //ctx.fillText("viteză", xIndicatorFrana + 120, yIndicatorFrana -6);
      ctx.strokeRect(xIndicatorGradeFrana + 90, yIndicatorGradeFrana +2, 62, 16);
    }
    else{
        //ctx.fillStyle = culoareTextZi;
        //ctx.strokeStyle = culoareTextZi;
        ctx.fillText("°F", xIndicatorGradeFrana + 120, yIndicatorGradeFrana + 14);
        //ctx.fillText("viteză", xIndicatorFrana + 120, yIndicatorFrana -6);
        ctx.strokeRect(xIndicatorGradeFrana + 90, yIndicatorGradeFrana +2, 62, 16);
    }
  }
  else{
    //ctx.fillStyle = culoareTextZi;
    //ctx.strokeStyle = culoareTextZi;
    ctx.fillStyle = culoareRosuTemperat;
    ctx.strokeStyle = culoareRosuTemperat;
    ctx.fillText("accelerare", xIndicatorFrana + 120, yIndicatorFrana + 14 - 32);
    ctx.fillText("reacție", xIndicatorFrana + 120, yIndicatorFrana -6);
    ctx.strokeRect(xIndicatorFrana + 90, yIndicatorFrana - 30, 62, 28);

    //grade frana
    if(selectorZi > orizont_trend){
        ctx.fillStyle = culoareRosuTemperat;
        ctx.strokeStyle = culoareRosuTemperat;
        ctx.fillText("+" + Math.floor(vectorDRToate[selectorZi]*10000)/100 + " °F/zi", xIndicatorGradeFrana + 120, yIndicatorGradeFrana + 14);
        //ctx.fillText("viteză", xIndicatorFrana + 120, yIndicatorFrana -6);
        ctx.strokeRect(xIndicatorGradeFrana + 90, yIndicatorGradeFrana +2, 62, 16);
    }
    else{
        //ctx.fillStyle = culoareTextZi;
        //ctx.strokeStyle = culoareTextZi;
        ctx.fillText("°F", xIndicatorGradeFrana + 120, yIndicatorGradeFrana + 14);
        //ctx.fillText("viteză", xIndicatorFrana + 120, yIndicatorFrana -6);
        ctx.strokeRect(xIndicatorGradeFrana + 90, yIndicatorGradeFrana +2, 62, 16);
    }
  }

  //Indicator accelerare reactie
  ctx.textAlign = "start";
  if(factor_ampMediu < 1){
    ctx.fillStyle = culoareScadere;
    ctx.strokeStyle = culoareScadere;
    ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    //grade flapsuri
    //if(selectorZi > orizont_trend){
      ctx.fillText("" + Math.round((factor_ampMediu-1)*100) + "% °C/zi₃", xIndicatorNivelReactie + 94, yIndicatorNivelReactie + 14);
      ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoare_scadere_entitate;
      ctx.fillText("" + Math.floor((factor_ampMediu-1)*10)/10 + " °C", xIndicatorNivelReactie + 92, yIndicatorNivelReactie - 4);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.fillStyle = culoareScadere;
      ctx.strokeRect(xIndicatorNivelReactie + 90, yIndicatorNivelReactie + 2, 58, 16);

      ctx.strokeStyle = culoareApaNivelUltraCritic;
      ctx.strokeRect(xIndicatorNivelReactie + 90, yIndicatorNivelReactie + 2, 58, 0);
  }
  else{
    ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    //grade flapsuri
    ctx.fillStyle = culoareRosuTemperat;
    ctx.strokeStyle = culoareRosuTemperat;
    //if(selectorZi > orizont_trend){
      ctx.fillText("+" + Math.round((factor_ampMediu-1)*100) + "% °C/zi₃", xIndicatorNivelReactie + 94, yIndicatorNivelReactie + 14);
      ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoareCerculetRCrestere;
      ctx.fillText("+" + Math.floor((factor_ampMediu-1)*10)/10 + " °C", xIndicatorNivelReactie + 92, yIndicatorNivelReactie - 4);
      //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
      ctx.strokeRect(xIndicatorNivelReactie + 90, yIndicatorNivelReactie + 2, 58, 16);

      ctx.strokeStyle = culoareApaNivelUltraCritic;
      ctx.strokeRect(xIndicatorNivelReactie + 90, yIndicatorNivelReactie + 2, 58, 0);
  }

  ctx.textAlign = "center";
  //Indicator nivel temperatura reactie
  ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativ[selectorZi]/1.2) + "%)";
  ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativ[selectorZi]/1.2) + "%)";
  //ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativ[selectorZi]/1.2) + "%)";
  //ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativ[selectorZi]/1.2) + "%)";

  //ctx.fillStyle = culoareScadere;
  //ctx.strokeStyle = culoareScadere;
  ctx.font = "bold italic 11px Helvetica, system-ui, Arial, sans-serif";
  //grade flapsuri
  //if(selectorZi > orizont_trend){
  ctx.fillText(Math.round(medieCumulativToate[selectorZi]) + " °C", xIndicatorNivelTemperatura + 106, yIndicatorNivelTemperatura + 14);
  //ctx.fillText("flapsuri", xIndicatorFlapsuri + 120, yIndicatorFlapsuri + 14 + 12);
  ctx.strokeStyle = culoareApaNivelUltraCritic;
  ctx.strokeRect(xIndicatorNivelTemperatura + 90, yIndicatorNivelTemperatura + 2, 34, 16);
  //ctx.strokeRect(xIndicatorNivelTemperatura + 90, yIndicatorNivelTemperatura + 2, 40, 1);






  // ---
  //desenare potentiometru referinta actuala
  ctx.strokeStyle = "#333";//"#1a1a1a";//"#333";
  ctx.lineWidth = 1;

  //raza exterioara
  ctx.beginPath();
  ctx.arc(xPotentiometru, yPotentiometru, razaPotentiometru + 3, 0, - 2*Math.PI * 1);
  ctx.closePath();
  ctx.stroke();

  //raza interioare
  if(medieCumulativ[selectorZi] > 25){
      ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativ[selectorZi]/1.2) + "%)";
  }
  else{
      //ctx.strokeStyle = culoareApaNivelNormal;
      //hsl(216, 60%, 45%)
      ctx.strokeStyle = "hsl(216, 60%, " +(55 - medieCumulativ[selectorZi]) + "%)";

  }

  ctx.lineWidth = 1;
  //ctx.strokeStyle = culoareApaNivelNormal;
  ctx.beginPath();
  ctx.arc(xPotentiometru, yPotentiometru, razaPotentiometru, 0, - 2*Math.PI * 1);
  ctx.closePath();
  ctx.stroke();

  //desenare gradatii interioare

  //ctx.setLineDash([]);
  ctx.setLineDash([1,2]);
  ctx.beginPath();
  ctx.arc(xPotentiometru, yPotentiometru, razaPotentiometru - 1, 0, - 2*Math.PI * 1);
  ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  xIndPot = razaPotentiometru * Math.sin(medieCumulativ[selectorZi]/100 * Math.PI * 2);
  yIndPot = razaPotentiometru * Math.cos(medieCumulativ[selectorZi]/100 * Math.PI * 2);

  //desenare indicator potentiometru referinta actuala
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.closePath();
  ctx.moveTo(xPotentiometru, yPotentiometru);
  ctx.lineTo(xPotentiometru + xIndPot, yPotentiometru - yIndPot);
  ctx.stroke();


  //proiectie21
  //pr21 = (medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100;
  ctx.lineWidth = 4;
  ctx.strokeStyle = culoareApaNivelNormal;
  ctx.beginPath();
  //ctx.moveTo(xPotentiometru, yPotentiometru);
  if(factor_ampMediu>1){
    ctx.strokeStyle = culoareCrestereVectorAvion;
    ctx.fillStyle = culoareCrestereVectorAvion;
    ctx.arc(xPotentiometru, yPotentiometru, razaPotentiometru + 1, (medieCumulativToate[selectorZi]/100 * Math.PI * 2) - Math.PI/2, pr21 *Math.PI*2 - Math.PI/2);
  }
  else{
    ctx.strokeStyle = culoareScadereVectorAvion;
    ctx.fillStyle = culoareScadereVectorAvion;
    ctx.arc(xPotentiometru, yPotentiometru, razaPotentiometru + 1,((medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100 ) *Math.PI*2 - Math.PI/2, (medieCumulativToate[selectorZi]/100 * Math.PI * 2 - Math.PI/2));
  }

  //ctx.closePath();
  ctx.stroke();
  ctx.closePath();

  //proiectie
  //pr21 = (medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100;
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  ctx.fillText("⇢ " + Math.round(pr21*100), xPotentiometru + 2* razaPotentiometru + 86, yPotentiometru - razaPotentiometru + 12);

  //desenare gradatii
  ctx.strokeStyle = culoareTextZi;
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.closePath();
  ctx.moveTo(xPotentiometru, yPotentiometru - razaPotentiometru - 4);
  ctx.lineTo(xPotentiometru, yPotentiometru - razaPotentiometru - 12);
  ctx.stroke();

  //treapta 2 jos
  if(medieCumulativ[selectorZi] > 25){
      ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  //ctx.strokeStyle = culoareTextZi;

  //linie lunga fundal
  ctx.beginPath();
  ctx.moveTo(xPotentiometru, yPotentiometru + razaPotentiometru + 4);
  ctx.lineTo(xPotentiometru, yPotentiometru + razaPotentiometru + 38/*+ 12*/);
  ctx.stroke();
  ctx.closePath();

  //linie treapta
  //ctx.strokeStyle = culoareTextZi;
  //ctx.strokeStyle = "hsl(216, 60%, 40%)";//culoareTextZi;
  //ctx.beginPath();
  //ctx.moveTo(xPotentiometru, yPotentiometru + razaPotentiometru + 4);
  //ctx.lineTo(xPotentiometru, yPotentiometru + razaPotentiometru + 24/*+ 12*/);
  //ctx.stroke();
  //ctx.closePath();

  //coada avion
  //ctx.strokeStyle = culoareTextZi;
  ctx.beginPath();
  ctx.moveTo(xPotentiometru - razaPotentiometru, yPotentiometru + 32);
  ctx.lineTo(xPotentiometru + razaPotentiometru, yPotentiometru + 32);
  ctx.stroke();
  ctx.closePath();


  //treapta 1 dreapta
  //ctx.strokeStyle = "hsl(216, 60%, 40%)";//culoareTextZi;
  if(medieCumulativ[selectorZi] > 25){
      ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      //ctx.strokeStyle = culoareApaNivelNormal;
      //hsl(216, 60%, 45%)
      ctx.strokeStyle = "hsl(216, 60%, " +(55 - medieCumulativToate[selectorZi]) + "%)";

  }
  ctx.beginPath();
  ctx.moveTo(xPotentiometru + razaPotentiometru + 4, yPotentiometru );
  ctx.lineTo(xPotentiometru + razaPotentiometru + 16, yPotentiometru );
  ctx.stroke();
  ctx.closePath();

  //treapta 3 stanga
  ctx.strokeStyle = culoareTextZi;
  if(medieCumulativ[selectorZi] > 50){
      ctx.strokeStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  ctx.beginPath();
  ctx.moveTo(xPotentiometru - razaPotentiometru - 4, yPotentiometru );
  ctx.lineTo(xPotentiometru - razaPotentiometru - 16, yPotentiometru );
  ctx.stroke();
  ctx.closePath();

  //Consum (litri/h):
  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillStyle = culoareTextZi; //culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillText("Viteză      x10   (°k)", xPotentiometru - 30, yPotentiometru - razaPotentiometru - 27);
  ctx.fillText("Altitudine x100 (ft)", xPotentiometru - 30 , yPotentiometru - razaPotentiometru - 38);

  ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
  //ctx.textAlign = "start";
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  //ctx.fillStyle = culoareTextZi; //culoareApaNivelNormal;//culoareTextReferinta;

  if(medieCumulativ[selectorZi] > 25){
      ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      //ctx.fillStyle = culoareTextZi;
      ctx.fillStyle = "hsl(216, 60%, " +(55 - medieCumulativToate[selectorZi]) + "%)";
  }
  treaptaViteza = 1 + Math.floor(medieCumulativToate[selectorZi]/25);
  ctx.fillText("Tr." + treaptaViteza, xPotentiometru +42, yPotentiometru - razaPotentiometru - 0);
  //ctx.fillText(treaptaViteza, xPotentiometru +58, yPotentiometru - razaPotentiometru - 18);

  ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoareTextZi; //culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillText("Pilot Automat", xPotentiometru - 30, yPotentiometru - razaPotentiometru - 52);
  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText("Cutie", xPotentiometru + 72, yPotentiometru - razaPotentiometru - 38);
  ctx.fillText("automată", xPotentiometru + 72, yPotentiometru - razaPotentiometru - 27);

  ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  ctx.fillText("100°", xPotentiometru - 23, yPotentiometru - razaPotentiometru - 4);
  if(medieCumulativ[selectorZi] > 25){
      ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      //ctx.fillStyle = culoareTextZi;
      ctx.fillStyle = "hsl(216, 60%, " +(55 - medieCumulativToate[selectorZi]) + "%)";
  }
  ctx.fillText("25°", xPotentiometru + razaPotentiometru + 4, yPotentiometru - 2);
  if(medieCumulativToate[selectorZi] > 25){
      ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      ctx.fillStyle = culoareTextZi;
  }
  ctx.fillText("50°", xPotentiometru + 2, yPotentiometru + razaPotentiometru + 11);
  if(medieCumulativToate[selectorZi] > 50){
      ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      ctx.fillStyle = culoareTextZi;
  }
  ctx.fillText("75°", xPotentiometru - razaPotentiometru - 19, yPotentiometru + 10);

  //Consum (litri/h):
  ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "start";
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillStyle = culoareTextZi; //culoareApaNivelNormal;//culoareTextReferinta;
  //ctx.fillText("Viteză (consum)", xPotentiometru + 2* razaPotentiometru + 22, yPotentiometru - razaPotentiometru - 4);
  ctx.fillText(Math.floor(medieCumulativToate[selectorZi]/24*10)/10, xPotentiometru + 2* razaPotentiometru + 26, yPotentiometru - razaPotentiometru + 24);
  if(medieCumulativToate[selectorZi] > 25){
      ctx.fillStyle = "hsl(0, 80%, " + (0 + medieCumulativToate[selectorZi]/1.2) + "%)";
  }
  else{
      //ctx.strokeStyle = culoareApaNivelNormal;
      //hsl(216, 60%, 45%)
      ctx.fillStyle = "hsl(216, 60%, " +(55 - medieCumulativToate[selectorZi]) + "%)";

  }
  ctx.fillText(Math.round(medieCumulativToate[selectorZi]), xPotentiometru + 2* razaPotentiometru + 26, yPotentiometru - razaPotentiometru + 12);



  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText("litri/zi", xPotentiometru + 2* razaPotentiometru + 56, yPotentiometru - razaPotentiometru + 12);

  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoareTextZi; //culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillText("litri/oră", xPotentiometru + 2* razaPotentiometru + 56 , yPotentiometru - razaPotentiometru + 24);

  ctx.fillText("consum", xPotentiometru + 2* razaPotentiometru + 56 , yPotentiometru - razaPotentiometru -1);


  //-------------------------------

  //Analiza Pareto
  if(selectorZi > orizont_trend){
    ctx.fillStyle = culoareTextCompensatorFill;
    //culoare implicita
    ctx.strokeStyle = culoareTextCompensator;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";
    ctx.font = "italic 12px system-ui, Arial, sans-serif";
    ctx.fillText("(Agrafe)" + "", xElice1 - 7 ,  yElice - eroareE * 2 - 12);
    ctx.font = "italic 10px system-ui, Arial, sans-serif";

    clasamentMedie = clasamentAeronaveZileSortatMedie[selectorZi].clasament;

    //clasamentProiectie.sort(function(a, b){return a.proiectie - b.proiectie});
    sumaPareto = 0;
    for(let zona=0; zona < numeArii.data.value.length; zona++){
        /////elementZona1b.textContent = "" + clasamentProiectie[zona].nume;
        numeZona = "" + vectoriDateZone[clasamentMedie[zona].arie].nume;
        //textElement = Math.round(clasamentAeronaveZile[selectorZi].clasament[zona].medie);
        /////textElement = Math.round(clasamentProiectie[zona].medie);
        //valoareZona = Math.floor(vectoriDateZone[clasamentMedie[zona].arie].vectorMedieZiCurenta[selectorZi] / vector_valZiCurentaToate[selectorZi]*1000)/10;
        valoareZona = vectoriDateZone[clasamentMedie[zona].arie].vectorMedieZiCurenta[selectorZi] / vector_valZiCurentaToate[selectorZi]*100;
        sumaPareto += valoareZona;
        text_final = "";

        if( (yElice - eroareE * 2 + 2) < inaltimeSuprafataGrafica){
            if(sumaPareto < 38.2){
              if(valoareZona > 10){
                culoareText = culoareRosuTemperat;
                ctx.font = "italic bold 12px system-ui, Arial, sans-serif";
                /*
                if(zile_contor_vectorizare[selectorZi] > 8){
                  text_final = "....";
                }
                else{
                  text_final = "...";
                }*/
              }
              else{
                culoareText = "orange";
                ctx.font = "italic bold 10px system-ui, Arial, sans-serif";
                /*
                if(zile_contor_vectorizare[selectorZi] > 8){
                  text_final = "...";
                }
                else{
                  text_final = "";
                }*/
              }
            }
            else{
              culoareText = culoareTextCompensatorFill;
              ctx.font = "italic 10px system-ui, Arial, sans-serif";
            }

            for(j=0; j<valoareZona/2; j++){
                text_final = text_final + ".";
            }

            if( (yElice - eroareE * 2 + 2) > 0){
                //if(valoareZona > 10){
                  //umbra text
                  //ctx.fillStyle = "white";
                  //ctx.fillText(numeZona + ": " + valoareZona + "%", xElice1 - 10 + 0 , yElice - eroareE * 2 + 2 + zona * 12 + 0);
                //}

                ctx.fillStyle = culoareText;
                ctx.fillText(numeZona + ": " , xElice1 - 7 , yElice - eroareE * 2 + 2 + zona * 12);
                ctx.fillText(Math.round(valoareZona) + "%" + text_final, xElice1 + 19 , yElice - eroareE * 2 + 2 + zona * 12);
            }
            else{
                ctx.fillStyle = culoareText;
                ctx.fillText(numeZona + ": ", xElice1 - 7 , 16 + zona * 12);
                ctx.fillText(Math.round(valoareZona) + "%" + text_final, xElice1 + 19 , 16 + zona * 12);
            }

        }
    }
  }

  //desenare racheta si elice
  //desenare umbra elice
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#333";//culoareApaNivelNormal;//culoareTextReferinta;
  //ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.beginPath();
  ctx.moveTo(xElice1 - 10, yUmbra);
  ctx.lineTo(xElice2 + 10, yUmbra);
  ctx.closePath();
  ctx.stroke();

  //desenare aeroport racheta
  ctx.beginPath();
  ctx.moveTo(xRacheta - 10, yUmbra);
  ctx.lineTo(xRacheta + 10, yUmbra);
  ctx.closePath();
  ctx.stroke();


  //jet reactie
  ctx.fillStyle = "orange";
  if(selectorZi > 6){
      dataJetAmortizat = (data[selectorZi] + data[selectorZi-1] + data[selectorZi-2] + data[selectorZi-3] + data[selectorZi-4] + data[selectorZi-5] + data[selectorZi-6])/7;
  }
  else{
      dataJetAmortizat = data[selectorZi];
  }
  //dataJetAmortizat = data[selectorZi];
  lungimeJet = dataJetAmortizat / medieCumulativ[selectorZi] * 7;
  //console.log(lungimeJet);
  ctx.beginPath();
  ctx.moveTo(xRacheta, yElice + 5);
  ctx.arc(xRacheta, yElice + 5, lungimeJet, 0.35 * Math.PI, 0.65 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#4d4d4d";
  //racheta varf
  ctx.beginPath();
  ctx.arc(xRacheta, yElice - rachetaH/2, 6, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //racheta striatie baza
  ctx.beginPath();
  ctx.arc(xRacheta, yRachetaCorp + rachetaH/3, 5, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //ctx.fillStyle = "#4d4d4d";
  //racheta corp
  ctx.beginPath();
  ctx.fillRect(xRacheta - rachetaLat/2, yRachetaCorp - rachetaH/2, rachetaLat, rachetaH);
  ctx.closePath();
  ctx.fill();

  //racheta striatie
  //ctx.fillStyle = "#b3b3b3";

  if (data[selectorZi] - medieCumulativ[selectorZi] > 0 ){
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
  }
  else{
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
  }

  ctx.beginPath();
  ctx.fillRect(xRacheta - rachetaLat/2 - 1, yRachetaCorp + 2, rachetaLat + 2, rachetaH/4);
  ctx.closePath();
  ctx.fill();

  //racheta striatie2
  if((vector_rToate[selectorZi]-1) < 0){
      ctx.fillStyle = "white";
  }
  else{
      ctx.fillStyle = culoareRosuTemperat;
  }

  ctx.beginPath();
  ctx.fillRect(xRacheta - rachetaLat/2 - 1, yRachetaCorp - 7, rachetaLat + 2, rachetaH/5);
  ctx.closePath();
  ctx.fill();


  //DESENARE RACHETA 2
  //desenare racheta 2 si elice 2
  //desenare umbra elice
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#333";//culoareApaNivelNormal;//culoareTextReferinta;
  //ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;

  //desenare aeroport racheta
  ctx.beginPath();
  ctx.moveTo(xRacheta2 - 10, yUmbra2);
  ctx.lineTo(xRacheta2 + 10, yUmbra2);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xRacheta2 - 10, yUmbra2);
  ctx.lineTo(xRacheta2 - 10, yUmbra2 + 5);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xRacheta2 + 10, yUmbra2);
  ctx.lineTo(xRacheta2 + 10, yUmbra2 + 5);
  ctx.closePath();
  ctx.stroke();

  desenarePendulEvenimenteRacheta();

  //jet reactie 2
  ctx.fillStyle = "orange";
  if(selectorZi > 6){
      dataJetAmortizat = (data[selectorZi] + data[selectorZi-1] + data[selectorZi-2] + data[selectorZi-3] + data[selectorZi-4] + data[selectorZi-5] + data[selectorZi-6])/7;
  }
  else{
      dataJetAmortizat = data[selectorZi];
  }
  //dataJetAmortizat = data[selectorZi];
  lungimeJet2 = dataJetAmortizat / medieCumulativ[selectorZi] * 10;
  yElice2 = inaltimeSuprafataGrafica - 136 - (medieCumulativ[selectorZi] * scalaYRacheta);
  //desenare racheta
  yRachetaVarf2 = yElice2 + 10;
  yRachetaCorp2 = yElice2 - 3;

  if(medieCumulativ[selectorZi] < 50){
  //corp lateral stanga
        ctx.fillStyle = "#adad85";//"#4d4d4d";
        //racheta varf
        ctx.beginPath();
        ctx.arc(xRacheta2 - rachetaLat + 1, yElice2 - rachetaH/2 + 1, 6/2, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();

        //racheta striatie baza
        ctx.beginPath();
        ctx.arc(xRacheta2 - rachetaLat + 1, yRachetaCorp2 + rachetaH/3, 5/2, 0, 2*Math.PI);
        ctx.closePath();
        ctx.fill();

        //ctx.fillStyle = "#4d4d4d";
        //racheta corp
        ctx.beginPath();
        ctx.fillRect(xRacheta2 - rachetaLat-2, yRachetaCorp2 - rachetaH/3, rachetaLat/2, rachetaH*0.75);
        ctx.closePath();
        ctx.fill();

        //racheta striatie2
        ctx.fillStyle = "white";
        ctx.beginPath();
        //ctx.fillRect(xRacheta2 - rachetaLat/2 - 1, yRachetaCorp2 - 7, rachetaLat + 2, rachetaH/5);
        ctx.fillRect(xRacheta2 - rachetaLat-2 , yRachetaCorp2 - 5, rachetaLat/2 + 2, rachetaH/6);
        ctx.closePath();
        ctx.fill();

        //jet corp lateral stanga
        ctx.fillStyle = "hsl(0, 70%, 65%)";
        ctx.beginPath();
        ctx.moveTo(xRacheta2 - rachetaLat + 1, yElice2 + 5);
        ctx.arc(xRacheta2 - rachetaLat + 1, yElice2 + 5, lungimeJet2/1.5, 0.35 * Math.PI, 0.65 * Math.PI);
        ctx.closePath();
        ctx.fill();
    }

    if(medieCumulativ[selectorZi] < 25){
      //corp lateral dreapta
          ctx.fillStyle = "#adad85";//"#4d4d4d";
          //racheta varf
          ctx.beginPath();
          ctx.arc(xRacheta2 + rachetaLat - 1, yElice2 - rachetaH/2 + 1, 6/2, 0, 2*Math.PI);
          ctx.closePath();
          ctx.fill();

          //racheta striatie baza
          ctx.beginPath();
          ctx.arc(xRacheta2 + rachetaLat - 1, yRachetaCorp2 + rachetaH/3, 5/2, 0, 2*Math.PI);
          ctx.closePath();
          ctx.fill();

          //ctx.fillStyle = "#4d4d4d";
          //racheta corp
          ctx.beginPath();
          ctx.fillRect(xRacheta2 + rachetaLat/2+2, yRachetaCorp2 - rachetaH/3, rachetaLat/2, rachetaH*0.75);
          ctx.closePath();
          ctx.fill();

          //racheta striatie2
          ctx.fillStyle = "white";
          ctx.beginPath();
          //ctx.fillRect(xRacheta2 - rachetaLat/2 - 1, yRachetaCorp2 - 7, rachetaLat + 2, rachetaH/5);
          ctx.fillRect(xRacheta2 + rachetaLat/2 , yRachetaCorp2 - 5, rachetaLat/2 + 2, rachetaH/6);
          ctx.closePath();
          ctx.fill();

          //jet corp lateral dreapta
          ctx.fillStyle = culoareApaNivelNormal;
          ctx.beginPath();
          ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
          ctx.arc(xRacheta2 + rachetaLat - 1, yElice2 + 5, lungimeJet2/1.5, 0.35 * Math.PI, 0.65 * Math.PI);
          ctx.closePath();
          ctx.fill();
    }


  //deasupra racheta - accelerare
  ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
  //ctx.fillStyle = culoareApaNivelNormal;
  ctx.textAlign = "center";
  if (data[selectorZi] - medieCumulativ[selectorZi] > 0 ){
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
  }
  else{
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
  }
  ctx.fillText(Math.floor(factor_ampMediu*10)/10 + "x", xRacheta2, yElice2 - rachetaH);
  ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText("a", xRacheta2, yElice2 - rachetaH - 10);

  //langa racheta - inaltime nivel
  ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  //Ref
  //ctx.strokeStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;
  ctx.fillText(Math.round(medieCumulativ[selectorZi]), xRacheta2 + 19, yElice2-3);

  ctx.lineWidth = 2;
  ctx.strokeStyle = culoareApaNivelNormal;
  ctx.lineJoin = "bevel";
  ctx.beginPath();
  ctx.moveTo(xRacheta2 + 14, yElice2);
  ctx.lineTo(xRacheta2 + 26, yElice2);
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(xRacheta2 + 14, yElice2-13);
  ctx.lineTo(xRacheta2 + 26, yElice2-13);
  ctx.closePath();
  ctx.stroke();

  //proiectie21 langa inaltime racheta
  ctx.font = "bold 11px Helvetica, system-ui, Arial, sans-serif";
  if(factor_ampMediu>1){
    ctx.strokeStyle = culoareCrestereVectorAvion;
    ctx.fillStyle = culoareCrestereVectorAvion;
    ctx.beginPath();
    ctx.moveTo(xRacheta2 + 20, yElice2-13);
    ctx.lineTo(xRacheta2 + 20, yElice2 - 13 - (factor_ampMediu-1) * orizont_proiectie);
    ctx.closePath();
    ctx.stroke();

    //cerculet capat proiectie
    ctx.beginPath();
    //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
    ctx.arc(xRacheta2 + 20, yElice2 - 13 - (factor_ampMediu-1) * orizont_proiectie, 2, 0 * Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillText("v", xRacheta2 + 20, yElice2 - 19 - (factor_ampMediu-1) * orizont_proiectie);
    ctx.fillText(Math.round(pr21*100), xRacheta2 + 20, yElice2 - 29 - (factor_ampMediu-1) * orizont_proiectie);

    //proiectie
    //pr21 = (medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100;
    //ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
    //ctx.textAlign = "start";
    //ctx.fillText("⇢ " + Math.round(pr21*100), xPotentiometru + 2* razaPotentiometru + 86, yPotentiometru - razaPotentiometru + 12);
  }
  else{
    ctx.strokeStyle = culoareScadereVectorAvion;
    ctx.fillStyle = culoareScadereVectorAvion;
    ctx.beginPath();
    ctx.moveTo(xRacheta2 + 20, yElice2);
    ctx.lineTo(xRacheta2 + 20, yElice2 - (factor_ampMediu-1) * orizont_proiectie);
    ctx.closePath();
    ctx.stroke();

    //cerculet capat proiectie
    ctx.beginPath();
    //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
    ctx.arc(xRacheta2 + 20, yElice2 - (factor_ampMediu-1) * orizont_proiectie, 2, 0 * Math.PI, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

    ctx.fillText("v", xRacheta2 + 20, yElice2 - (factor_ampMediu-1) * orizont_proiectie + 12);
    ctx.fillText(Math.round(pr21*100), xRacheta2 + 20, yElice2 - (factor_ampMediu-1) * orizont_proiectie + 24);
  }



  /*
  ctx.beginPath();
  ctx.moveTo(xRacheta2 + 8, yElice2 -9);
  ctx.lineTo(xRacheta2 + 14, yElice2);
  ctx.closePath();
  ctx.stroke();*/

  ctx.fillStyle = "orange";
  //console.log(lungimeJet);
  ctx.beginPath();
  ctx.moveTo(xRacheta2, yElice2 + 5);
  ctx.arc(xRacheta2, yElice2 + 5, lungimeJet2, 0.35 * Math.PI, 0.65 * Math.PI);
  ctx.closePath();
  ctx.fill();


  ctx.fillStyle = "#adad85";//"#4d4d4d";
  //racheta varf
  ctx.beginPath();
  ctx.arc(xRacheta2, yElice2 - rachetaH/2, 6, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //racheta striatie baza
  ctx.beginPath();
  ctx.arc(xRacheta2, yRachetaCorp2 + rachetaH/3, 5, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //ctx.fillStyle = "#4d4d4d";
  //racheta corp
  ctx.beginPath();
  ctx.fillRect(xRacheta2 - rachetaLat/2, yRachetaCorp2 - rachetaH/2, rachetaLat, rachetaH);
  ctx.closePath();
  ctx.fill();



  //racheta striatie
  //ctx.fillStyle = "#b3b3b3";

  if (data[selectorZi] - medieCumulativ[selectorZi] > 0 ){
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
  }
  else{
      ctx.fillStyle = "green";
      ctx.strokeStyle = "green";
  }

  ctx.beginPath();
  ctx.fillRect(xRacheta2 - rachetaLat/2 - 1, yRachetaCorp2 + 2, rachetaLat + 2, rachetaH/4);
  ctx.closePath();
  ctx.fill();


  //flapsuri racheta2
  if(selectorZi > orizont_proiectie + orizont_regresie){
    ctx.lineWidth = 2;
    //dreapta
    xFlapsDr = xRacheta2 + rachetaLat / 2 + 1;
    yFlapsDr = yRachetaCorp2 - 5;
    lungimeFlaps = 14;

    xPozFlapsDr = -Math.sin(3 * vector_rToate_normalizat[selectorZi]/10 * 2*Math.PI / 360) * lungimeFlaps;
    yPozFlapsDr = Math.cos(3 * vector_rToate_normalizat[selectorZi]/10 * 2*Math.PI / 360) * lungimeFlaps;

    if(vector_rToate_normalizat[selectorZi] < 0){
      ctx.strokeStyle = culoareScadereVectorAvion;
      ctx.fillStyle = culoareScadereVectorAvion;
    }
    else{
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
    }

    ctx.beginPath();
    ctx.moveTo(xFlapsDr, yFlapsDr);
    ctx.lineTo(xFlapsDr + xPozFlapsDr, yFlapsDr + yPozFlapsDr);
    ctx.closePath();
    ctx.stroke();

    //stanga
    xFlapsSt = xRacheta2 - rachetaLat / 2 - 1;
    yFlapsSt = yRachetaCorp2 - 5;
    //lungimeFlaps = 14;

    xPozFlapsSt = +Math.sin(3 * vector_rToate_normalizat[selectorZi]/10 * 2*Math.PI / 360) * lungimeFlaps;
    yPozFlapsSt = Math.cos(3 * vector_rToate_normalizat[selectorZi]/10 * 2*Math.PI / 360) * lungimeFlaps;

    if(vector_rToate_normalizat[selectorZi] < 0){
      ctx.strokeStyle = culoareScadereVectorAvion;
      ctx.fillStyle = culoareScadereVectorAvion;
    }
    else{
      ctx.fillStyle = culoareRosuTemperat;
      ctx.strokeStyle = culoareRosuTemperat;
    }

    ctx.beginPath();
    ctx.moveTo(xFlapsSt, yFlapsSt);
    ctx.lineTo(xFlapsSt + xPozFlapsSt, yFlapsSt + yPozFlapsSt);
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = 2;
  }


  //racheta striatie2
  if(vector_rToate_normalizat[selectorZi] < 0){
      ctx.fillStyle = "white";
  }
  else{
      ctx.fillStyle = culoareRosuTemperat;
  }
  ctx.beginPath();
  ctx.fillRect(xRacheta2 - rachetaLat/2 - 1, yRachetaCorp2 - 7, rachetaLat + 2, rachetaH/5);
  ctx.closePath();
  ctx.fill();

  //amplificare reactie striatie2
  if(vector_rToate_normalizat[selectorZi] > 0){
      ctx.fillStyle = "yellow";
      ctx.beginPath();
      ctx.fillRect(xRacheta2 - vector_rToate_normalizat[selectorZi]/100 * (rachetaLat + 2) / 2 - 0,
                    yRachetaCorp2 - 7,
                    vector_rToate_normalizat[selectorZi]/100 * (rachetaLat + 2),
                    rachetaH/5
                  );
      ctx.closePath();
      ctx.fill();
  }



  /*
  ctx.strokeStyle = culoareScadereVectorAvion;
  ctx.fillStyle = culoareScadereVectorAvion;
  ctx.beginPath();
  ctx.moveTo(xRacheta2 + 20, yElice2);
  ctx.lineTo(xRacheta2 + 20, yElice2 - (factor_ampMediu-1) * orizont_proiectie);
  ctx.closePath();
  ctx.stroke();*/

  /*
  xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90 + 0;

  xsoseta = lungimeSosetaModReglare * Math.cos(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSosetaModReglare * Math.sin(xsos * Math.PI * 2 / 360);*

  /*
  if(selectorZi > orizont_regresie + orizont_arie){

      ctx.lineWidth = 2;
      if(vector_rToate[selectorZi] > 1){
      }
      else{
          //desenare arc pendul
          ctx.strokeStyle = "green";//"#1a1a1a";//"#333";
          ctx.lineWidth = 1;
          ctx.setLineDash([1,2]);
          ctx.beginPath();
          ctx.moveTo(xStalpModReglare + lungimeSosetaModReglare, yStalpModReglare);
          ctx.arc(xStalpModReglare, yStalpModReglare, lungimeSosetaModReglare, 0, - 2*Math.PI * 0.25);
          ctx.moveTo(xStalpModReglare, yStalpModReglare - lungimeSosetaModReglare);
          ctx.closePath();
          ctx.stroke();
          ctx.setLineDash([]);

          ctx.strokeStyle = "green";//culoare_scadere_entitate;
          ctx.fillStyle = culoare_scadere_entitate;
      }
      ctx.lineWidth = 2;*/

      //
      //ctx.fillStyle = "white";//"#4d4d4d";
      /*
      ctx.beginPath();
      ctx.moveTo(xStalpModReglare, yStalpModReglare);
      ctx.arc(xStalpModReglare, yStalpModReglare, lungimeSosetaModReglare, 0, -(xsos * Math.PI * 2 / 360));
      ctx.moveTo(xStalpModReglare, yStalpModReglare);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();*/


  //langa racheta - inaltime nivel
  /*
  ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.fillStyle = culoareApaNivelNormal;//culoareTextReferinta;
  //inaltime racheta 2
  ctx.fillText(Math.round(medieCumulativ[selectorZi]), xRacheta + 42, yElice2);*/

  //DESENARE RACHETA 2 capat
  ///-----


  //desenare cerc fundal elice
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(xElice1, yElice, 10, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //desenare circumferinta cerc elice
  if(data[selectorZi]>medieCumulativ[selectorZi]){
      ctx.strokeStyle = culoareTextCompensatorRosu;//culoareCrestereMaro;
      //ctx.fillStyle = "red";
  }
  else{
      ctx.strokeStyle = culoareScadere;//"grey";
      //ctx.fillStyle = "grey";
  }
  ctx.beginPath();
  ctx.arc(xElice1, yElice, 10, 0, 2*Math.PI);
  ctx.closePath();
  ctx.stroke();

  //desenare elice
  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.moveTo(xElice1, yElice + 0 );
  ctx.arc(xElice1, yElice, 10, unghiEliceRadiani, unghiEliceRadiani + Math.PI/4);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(xElice1, yElice + 0 );
  ctx.arc(xElice1, yElice, 10, unghiEliceRadiani + Math.PI, unghiEliceRadiani + Math.PI + Math.PI/4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(xElice1, yElice, 2, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();


  //Elice2
  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(xElice2, yElice, 10, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  if(data[selectorZi]>medieCumulativ[selectorZi]){
      ctx.strokeStyle = culoareTextCompensatorRosu;//culoareCrestereMaro;
      //ctx.fillStyle = "red";
  }
  else{
      ctx.strokeStyle = culoareScadere;//"grey";
      //ctx.fillStyle = "grey";
  }
  ctx.beginPath();
  ctx.arc(xElice2, yElice, 10, 0, 2*Math.PI);
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.moveTo(xElice2, yElice + 0 );
  ctx.arc(xElice2, yElice, 10, unghiEliceRadiani2 , unghiEliceRadiani2 + Math.PI/4);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(xElice2, yElice + 0 );
  ctx.arc(xElice2, yElice, 10, unghiEliceRadiani2 + Math.PI, unghiEliceRadiani2 + Math.PI + Math.PI/4);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#333";
  ctx.beginPath();
  ctx.arc(xElice2, yElice, 2, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();

  //---------------desenare racheta si elice----

}

function desenareVaseComunicante() {
    ctx = suprafataGrafica.context;

    //culoare implicita
    ctx.strokeStyle = culoareTextCompensator;
    ctx.fillStyle = "grey";
    ctx.lineWidth = 1;
    ctx.textAlign = "start";
    ctx.font = "italic 12px system-ui, Arial, sans-serif";


    //rezervor
    ctx.fillRect(xRezervor, yRezervor, lungimeRezervor, inaltimeRezervor);

    //indicator rezervor
    ctx.fillStyle = culoareLinieReferinta;//culoareIndicatorRezervor;
    ctx.fillRect(xIndicatorRezervor, yIndicatorRezervor, lungimeIndicatorRezervor, inaltimeIndicatorRezervor);

    //conducta intrare
    ctx.fillStyle = "grey";
    ctx.fillRect(xConductaIntrare, yConductaIntrare, lungimeConductaIntrare, inaltimeConductaIntrare);

    //conducta iesire
    ctx.fillStyle = culoareApa;
    ctx.fillRect(xConductaIesire, yConductaIesire, lungimeConductaIesire, inaltimeConductaIesire);

    //apa intrare (L1)
    ctx.fillStyle = culoareApa;
    ctx.fillRect(xApaIntrare1, yApaIntrare1, lungimeApaIntrare1, inaltimeApaIntrare1);

    //apa intrare (L2)
    ctx.fillStyle = culoareApa;
    ctx.fillRect(xApaIntrare2, yApaIntrare2, lungimeApaIntrare2, inaltimeApaIntrare2);

    //valva conducta intrare (T1)
    ctx.fillStyle = culoareCompensator;
    ctx.fillRect(xValvaConductaIntrare1, yValvaConductaIntrare1, lungimeValvaConductaIntrare1, inaltimeValvaConductaIntrare1);

    //valva conducta intrare (T2)
    ctx.fillStyle = culoareCompensator;
    ctx.fillRect(xValvaConductaIntrare2, yValvaConductaIntrare2, lungimeValvaConductaIntrare2, inaltimeValvaConductaIntrare2);

    //apa rezervor
    ctx.fillStyle = culoareApa;
    ctx.fillRect(xApaRezervor, yApaRezervor, lungimeApaRezervor, inaltimeApaRezervor);


    //F1
    ctx.strokeStyle = culoareCompensator;//culoareF;//culoareCompensator;
    ctx.setLineDash([1, 2]);
    ctx.strokeRect(xF1, yF1, lungimeF1, inaltimeF1);
    ctx.setLineDash([]);

    desenareSchemaRacheta();

    //Casuta 1
    /*
    ctx.strokeStyle = 'grey';

    //structura
    ctx.strokeRect(xCasuta1, yCasuta1, lungimeCasuta1, inaltimeCasuta1);

    //usa
    lungimeUsa = lungimeCasuta1/4;
    inaltimeUsa = inaltimeCasuta1 * 0.7;

    xUsa = xCasuta1 + (lungimeCasuta1 - lungimeUsa) / 2;

    yUsa = yCasuta1 + inaltimeCasuta1 - inaltimeUsa;

    ctx.strokeRect(xUsa, yUsa, lungimeUsa, inaltimeUsa);

    //acoperis
    lungimeAcoperis = lungimeCasuta1 - lungimeCasuta1/6;
    inaltimeAcoperis = inaltimeCasuta1 * 0.3;
    xAcoperis = xCasuta1 + (lungimeCasuta1 - lungimeAcoperis) / 2;
    yAcoperis = yCasuta1 - inaltimeAcoperis;

    ctx.strokeRect(xAcoperis, yAcoperis, lungimeAcoperis, inaltimeAcoperis);
    */

}

function desenareEvenimente(){
    ctx.textAlign = "start";
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoareTextZi;//culoarePunctValoriGrafic_3;

    /*for(let i = 0; i < evenimente.length; i++){
      //console.log(evenimente[i]);
      if(data_data[selectorZi] == evenimente[i]){
          //console.log(evenimente[i]);
          ctx.fillText("(" + evenimente_actiuni[i] + ")", xTextEveniment, yTextEveniment);
      }
    }*/

    if(zile_evenimente_actiuni[selectorZi]> -1){
        if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
            ctx.fillStyle = culoareCrestereMaro;
        }
        else{
            ctx.fillStyle = culoareScadere;
        }

        //ctx.fillStyle = evenimente_tip[zile_evenimente_actiuni[selectorZi]];
        ctx.fillText(evenimente_actiuni[zile_evenimente_actiuni[selectorZi]], xTextEveniment, yTextEveniment);

        //desenare cerculete acumulate

        //desenare cerculet vectorizare maro
        ctx.fillStyle = culoareCrestereMaro;
        ctx.beginPath();
        if(pulsatie && culoare_pulsatie == culoareMaro){
            //schema reglare
            if(mod == MOD_REGULATOR){
              ctx.font = "bold 12px Helvetica, system-ui, Arial, sans-serif";
              ctx.fillText(zile_contor_vectorizare[selectorZi] + "\u279A", xBlocC + 24, yCaleDir - 12);
            }
            //legenda evenimente sus
            ctx.arc(xCerculeteAcumulate + 42 + raza_cerculet, yCerculeteAcumulate, (raza_cerculet + 1), 0, 2 * Math.PI);
            ctx.font = "bold 15px Helvetica, system-ui, Arial, sans-serif";
        }
        else {
            //schema reglare
            if(mod == MOD_REGULATOR){
              ctx.font = "bold 11px Helvetica, system-ui, Arial, sans-serif";
              ctx.fillText(zile_contor_vectorizare[selectorZi] + "\u279A", xBlocC + 24, yCaleDir - 12);
            }

            //legenda evenimente sus
            ctx.arc(xCerculeteAcumulate + 42 + raza_cerculet, yCerculeteAcumulate, raza_cerculet, 0, 2 * Math.PI);
            ctx.font = "bold 14px Helvetica, system-ui, Arial, sans-serif";
        }
        ctx.closePath();

        ctx.lineWidth = 2;
        ctx.fillStyle = culoareMaro; //culoareVerde
        ctx.strokeStyle = culoareCrestereMaro;//evenimente_tip[nr_ev];//culoareScadere
        ctx.fill();
        ctx.stroke();

        //desenare
        ctx.textAlign = "start";
        //ctx.font = "bold 14px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillStyle = culoareCrestereMaro;
        ctx.fillText(zile_contor_vectorizare[selectorZi] + "\u279A", xCerculeteAcumulate + 42 + 8 + raza_cerculet, yCerculeteAcumulate + raza_cerculet);



        //desenare cerculet limitare verde
        ctx.strokeStyle = culoareScadere;
        ctx.fillStyle = culoareScadere;
        ctx.beginPath();
        if(pulsatie && culoare_pulsatie == culoareVerde){
            //schema reglare
            if(mod == MOD_REGULATOR){
              ctx.font = "bold 12px Helvetica, system-ui, Arial, sans-serif";
              ctx.fillText(zile_contor_limitare[selectorZi] + "\u2798", xBlocC + 0, yCaleDir - 12);
            }

            ctx.font = "bold 15px Helvetica, system-ui, Arial, sans-serif";
            ctx.arc(xCerculeteAcumulate + 0 + raza_cerculet, yCerculeteAcumulate, (raza_cerculet + 1), 0, 2 * Math.PI);
        }
        else {
            //schema reglare
            if(mod == MOD_REGULATOR){
              ctx.font = "bold 11px Helvetica, system-ui, Arial, sans-serif";
              ctx.fillText(zile_contor_limitare[selectorZi] + "\u2798", xBlocC + 0, yCaleDir - 12);
            }

            ctx.font = "bold 14px Helvetica, system-ui, Arial, sans-serif";
            ctx.arc(xCerculeteAcumulate + 0 + raza_cerculet, yCerculeteAcumulate, raza_cerculet, 0, 2 * Math.PI);
        }
        ctx.fillStyle = culoareVerde;
        //ctx.arc(xCerculeteAcumulate + 40 + raza_cerculet, yCerculeteAcumulate, raza_cerculet, 0, 2 * Math.PI);
        ctx.closePath();
        //ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        //desenare
        //ctx.textAlign = "start";
        //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillStyle = culoareScadere;
        ctx.fillText(zile_contor_limitare[selectorZi] + "\u2798", xCerculeteAcumulate + 8 + raza_cerculet, yCerculeteAcumulate + raza_cerculet);
    }
    //if(mod == MOD_REGULATOR){
        desenarePendulEvenimente();
    //}


}

function desenarePendulEvenimente(){

    if(selectorZi > orizont_regresie + orizont_arie){
      //Desenare Vant
      ctx.textAlign = "center";
      if(pulsatie_2){
        ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
        //ctx.fillStyle = culoarePunctValoriGrafic_3;;
        if(culoare_pulsatie == culoareMaro){
            ctx.fillStyle = "rgba(204,153,102,0.8)";
            ctx.fillText("\u21E8", xStalpG - 2*lungimeStalp, yStalpG);
            ctx.fillText(" \u21E8", xStalpG - 2*lungimeStalp, yStalpG);
        }
        else {
            ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
            ctx.fillText("\u21E6", xStalpG - 2*lungimeStalp, yStalpG);
            ctx.fillText("\u21E6 ", xStalpG - 2*lungimeStalp, yStalpG);
        }
      }
      else {
        ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
        if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
            ctx.fillStyle = "rgba(204,153,102,0.8)";
            ctx.fillText("\u21E8", xStalpG - 2*lungimeStalp, yStalpG);
        }
        else{
            ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
            ctx.fillText("\u21E6", xStalpG - 2*lungimeStalp, yStalpG);
        }
      }

      if(selectorZi > orizont_proiectie + orizont_regresie){
          //vector franare reactie
          ctx.font = "bold 11px Helvetica, system-ui, Arial, sans-serif";
          if(vectorDRToate[selectorZi] > 0){
            ctx.strokeStyle = culoareCrestereVectorAvion;
            ctx.fillStyle = culoareCrestereVectorAvion;
            ctx.beginPath();
            ctx.moveTo(xStalpG, yStalpG + 5);
            ctx.lineTo(xStalpG + vectorDRToate[selectorZi] * 10000/2, yStalpG + 5);
            ctx.closePath();
            ctx.stroke();

            //cerculet capat proiectie
            ctx.beginPath();
            //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
            ctx.arc(xStalpG + vectorDRToate[selectorZi] * 10000/2, yStalpG + 5, 2, 0 * Math.PI, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            //ctx.fillText("+a", xStalpG + vectorDRToate[selectorZi] * 10, yStalpG - 28);
          }
          else{
            ctx.strokeStyle = culoareScadereVectorAvion;
            ctx.fillStyle = culoareScadereVectorAvion;
            ctx.beginPath();
            ctx.moveTo(xStalpG, yStalpG + 5);
            ctx.lineTo(xStalpG + vectorDRToate[selectorZi] * 10000/2, yStalpG + 5);
            ctx.closePath();
            ctx.stroke();

            //cerculet capat proiectie
            ctx.beginPath();
            //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
            ctx.arc(xStalpG + vectorDRToate[selectorZi] * 10000/2, yStalpG + 5, 2, 0 * Math.PI, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

            //ctx.fillText("-f", xStalpG + vectorDRToate[selectorZi] * 10, yStalpG - 28);
          }
      }

      //Desenare Soseta Vant
      ctx.lineJoin = "round";
      ctx.lineWidth = 2;
      ctx.strokeStyle = "lightgrey";//"#4d4d4d";
      ctx.fillStyle = "#4d4d4d";

      ctx.setLineDash([1,2]);
      ctx.beginPath()
      ctx.moveTo(xStalpG, yStalpG);
      ctx.lineTo(xStalpG, yStalpG - lungimeStalp - 3);
      ctx.closePath();
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";

      //vectorXAvion[i] = xRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
      //vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);
      xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
      xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
      ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);

      ctx.lineWidth = 3;

      ctx.textAlign = "center";

      ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
      if(vector_rToate[selectorZi] > 1){
          ctx.strokeStyle = culoareCrestereMaro;
          ctx.fillStyle = culoareCrestereMaro;
          ctx.fillText("accelerare", xStalpG, yStalpG + 18);
          //ctx.fillText("" + Math.floor((factor_ampMediu-1)*10)/10 + " °C", xIndicatorNivelReactie + 92, yIndicatorNivelReactie - 4);
      }
      else{
          ctx.strokeStyle = culoareScadere;
          ctx.fillStyle = culoareScadere;
          ctx.fillText("frânare", xStalpG, yStalpG + 18);
          ctx.fillText("manuală", xStalpG, yStalpG + 28);
      }

      //desenare arc deschidere
      ctx.beginPath();
      ctx.moveTo(xStalpG, yStalpG);
      ctx.arc(xStalpG, yStalpG, lungimeStalp/2, (xsos * Math.PI * 2 / 360) - Math.PI/2, 0);
      ctx.closePath();
      ctx.fill();

      //desenare cerc capat pendul
      //ctx.fillStyle = "white";
      //ctx.fillStyle = "#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpG + xsoseta, yStalpG - ysoseta, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.closePath();

      //desenare soseta
      ctx.moveTo(xStalpG, yStalpG);
      ctx.lineTo(xStalpG + xsoseta, yStalpG - ysoseta);
      ctx.stroke();


      ctx.beginPath();
      ctx.closePath();

      //desenare cerc baza pendul
      ctx.fillStyle = "white";//"#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpG, yStalpG, 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }

    //ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    if(vector_rToate[selectorZi] > 0){
        ctx.fillStyle = culoareCrestereMaro;
        ctx.textAlign = "left";
        ctx.fillText(Math.round(medieCumulativToate[selectorZi]) + "°", 10, yStalpG + 18);
        ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
        if(factor_ampMediu < 1){
            ctx.fillStyle = culoareScadere;
            ctx.textAlign = "center";
            ctx.fillText(" - ", 22 + 12, yStalpG + 18);
            ctx.textAlign = "left";
            ctx.fillText(-Math.floor((factor_ampMediu-1)*10)/10 + "° / zi₃", 22 + 20, yStalpG + 18);
        }
        else{
            ctx.fillStyle = culoareCrestereMaro;
            ctx.textAlign = "center";
            ctx.fillText(" + ", 22 + 12, yStalpG + 18);
            ctx.textAlign = "left";
            ctx.fillText(Math.floor((factor_ampMediu-1)*10)/10 + "° / zi₃", 22 + 20, yStalpG + 18);
        }
    }
    else{
        ctx.fillStyle = culoareCrestereMaro;
        ctx.textAlign = "left";
        ctx.fillText(Math.round(medieCumulativToate[selectorZi]) + "°", 10, yStalpG + 18);
        ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
        if(factor_ampMediu < 1){
            ctx.fillStyle = culoareScadere;
            ctx.textAlign = "center";
            ctx.fillText(" - ", 22 + 12, yStalpG + 18);
            ctx.textAlign = "left";
            ctx.fillText(-Math.floor((factor_ampMediu-1)*10)/10 + "° / zi₃", 22 + 20, yStalpG + 18);
        }
        else{
            ctx.fillStyle = culoareCrestereMaro;
            ctx.textAlign = "center";
            ctx.fillText(" + ", 22 + 12, yStalpG + 18);
            ctx.textAlign = "left";
            ctx.fillText(Math.floor((factor_ampMediu-1)*10)/10 + "° / zi₃", 22 + 20, yStalpG + 18);
        }
    }
}

function desenarePendulEvenimenteRacheta(){
    //Desenare Vant



    //desenare stalp soseta
    if(selectorZi > orizont_regresie + orizont_arie){
        //Desenare Vant
        ctx.textAlign = "center";
        if(pulsatie_2){
          ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillStyle = culoarePunctValoriGrafic_3;;
          if(culoare_pulsatie == culoareMaro){
              ctx.fillStyle = "rgba(204,153,102,0.8)";
              ctx.fillText("\u21E8", xStalpGR + 20, yStalpGR - 4);
              ctx.fillText(" \u21E8", xStalpGR + 20, yStalpGR - 4);
          }
          else {
              ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
              ctx.fillText("\u21E6", xStalpGR + 20, yStalpGR - 4);
              ctx.fillText("\u21E6 ", xStalpGR + 20, yStalpGR - 4);
          }
        }
        else {
          ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
          if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
              ctx.fillStyle = "rgba(204,153,102,0.8)";
              ctx.fillText("\u21E8", xStalpGR + 20, yStalpGR - 4);
          }
          else{
              ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
              ctx.fillText("\u21E6", xStalpGR + 20, yStalpGR - 4);
          }
        }

        if(selectorZi > orizont_proiectie + orizont_regresie){
            //vector franare reactie
            ctx.font = "bold 11px Helvetica, system-ui, Arial, sans-serif";
            if(vectorDRToate[selectorZi] > 0){
              ctx.strokeStyle = culoareCrestereVectorAvion;
              ctx.fillStyle = culoareCrestereVectorAvion;
              ctx.beginPath();
              ctx.moveTo(xStalpGR, yStalpGR + 3);
              ctx.lineTo(xStalpGR + vectorDRToate[selectorZi] * 10000/2, yStalpGR + 3);
              ctx.closePath();
              ctx.stroke();

              //cerculet capat proiectie
              ctx.beginPath();
              //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
              ctx.arc(xStalpGR + vectorDRToate[selectorZi] * 10000/2, yStalpGR + 3, 2, 0 * Math.PI, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();

              //ctx.fillText("+a", xStalpGR + vectorDRToate[selectorZi] * 10, yStalpGR - 28);
            }
            else{
              ctx.strokeStyle = culoareScadereVectorAvion;
              ctx.fillStyle = culoareScadereVectorAvion;
              ctx.beginPath();
              ctx.moveTo(xStalpGR, yStalpGR + 3);
              ctx.lineTo(xStalpGR + vectorDRToate[selectorZi] * 10000/2, yStalpGR + 3);
              ctx.closePath();
              ctx.stroke();

              //cerculet capat proiectie
              ctx.beginPath();
              //ctx.moveTo(xRacheta2 + rachetaLat - 1, yElice2 + 5);
              ctx.arc(xStalpGR + vectorDRToate[selectorZi] * 10000/2, yStalpGR + 3, 2, 0 * Math.PI, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();

              //ctx.fillText("-f", xStalpGR + vectorDRToate[selectorZi] * 10, yStalpGR - 28);
            }
        }



        //Desenare Soseta Vant
        ctx.lineJoin = "round";
        ctx.lineWidth = 2;
        ctx.strokeStyle = "lightgrey";//"#4d4d4d";
        ctx.fillStyle = "#4d4d4d";

        ctx.setLineDash([1,2]);
        ctx.beginPath()
        ctx.moveTo(xStalpGR, yStalpGR);
        ctx.lineTo(xStalpGR, yStalpGR - lungimeStalp - 3);
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);


        ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";

        //vectorXAvion[i] = xRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
        //vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);
        xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
        xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
        ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);

        ctx.lineWidth = 3;

        ctx.textAlign = "center";

        ctx.font = "italic 11px Helvetica, system-ui, Arial, sans-serif";
        if(vector_rToate[selectorZi] > 1){
            ctx.strokeStyle = culoareCrestereMaro;
            ctx.fillStyle = culoareCrestereMaro;
            ctx.fillText("accelerare", xStalpGR, yStalpGR + 28);
            //ctx.fillText("" + Math.floor((factor_ampMediu-1)*10)/10 + " °C", xIndicatorNivelReactie + 92, yIndicatorNivelReactie - 4);
        }
        else{
            ctx.strokeStyle = culoareScadere;
            ctx.fillStyle = culoareScadere;
            ctx.fillText("frânare", xStalpGR, yStalpGR + 28);
            ctx.fillText("manuală", xStalpGR, yStalpGR + 38);
        }

        //desenare arc deschidere
        ctx.beginPath();
        ctx.moveTo(xStalpGR, yStalpGR);
        ctx.arc(xStalpGR, yStalpGR, lungimeStalp/2, (xsos * Math.PI * 2 / 360) - Math.PI/2, 0);
        ctx.closePath();
        ctx.fill();

        //desenare cerc capat pendul
        //ctx.fillStyle = "white";
        //ctx.fillStyle = "#4d4d4d";
        ctx.beginPath();
        ctx.arc(xStalpGR + xsoseta, yStalpGR - ysoseta, 3, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.closePath();

        //desenare soseta
        ctx.moveTo(xStalpGR, yStalpGR);
        ctx.lineTo(xStalpGR + xsoseta, yStalpGR - ysoseta);
        ctx.stroke();


        ctx.beginPath();
        ctx.closePath();

        //desenare cerc baza pendul
        ctx.fillStyle = "white";//"#4d4d4d";
        ctx.beginPath();
        ctx.arc(xStalpGR, yStalpGR, 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
  }
}


function desenareZiValoareTrenduri(){
    ctx = suprafataGrafica.context;
    //ctx.fillStyle = "orange";
    //culoare implicita
    ctx.strokeStyle = culoareTextZi;
    ctx.fillStyle = culoareTextZi;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";

    //Ziua
    //ctx.font = "30px Arial";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    //ctx.fillText("Ziua " + selectorZi, 10, 50);
    //Afisare data - zi curenta
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni_lung[data_zi_luna[1]-1];
    //ctx.fillText(zi + " " + luna, xLegenda, yl5);

    ctx.strokeText("Ziua " + selectorZi , xTextZi, yTextZi);

    ctx.font = "italic 16px Helvetica, Arial, sans-serif";
    ctx.fillText( "(" + zi + " " + luna + ")", xTextZi + 75 + (String(selectorZi).length) * 18, yTextZi);

}

function desenareIndicatori() {
    ctx = suprafataGrafica.context;
    //ctx.fillStyle = culoareTextZi;
    //culoare implicita
    //ctx.strokeStyle = culoareTextZi;
    ctx.lineWidth = 1;
    //ctx.textAlign = "start";

    //Ziua
    /*
    //ctx.font = "30px Arial";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    //ctx.fillText("Ziua " + selectorZi, 10, 50);
    ctx.strokeText("Ziua " + selectorZi, 10, 50);

    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni_lung[data_zi_luna[1]-1];
    ctx.font = "italic 16px Helvetica, Arial, sans-serif";
    ctx.fillText( "(" + zi + " " + luna + ")", xTextZi, yTextZi + 22);*/


    //Valoare cumulativa
    ctx.textAlign = "center";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    ctx.fillStyle = culoareLinieGraficVertical;
    ctx.strokeStyle = culoarePunctGraficVertical;
    ctx.strokeText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 96, inaltimeSuprafataGrafica - 138);
    ctx.fillText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 96, inaltimeSuprafataGrafica - 138);

    //Nivelul apei
    ctx.textAlign = "start";
    ctx.fillStyle = culoareValoareNivel;
    ctx.font = "bold 38px Helvetica, Arial, sans-serif";
    ctx.fillText(Math.round(data[selectorZi]), xApaRezervor + lungimeApaRezervor - 50, yApaRezervor - 4);

    //Valoare referinta dinamica
    ctx.fillStyle = culoareCrestereVectorAvion;//culoareTextReferinta;
    ctx.font = "bold 30px Helvetica, Arial, sans-serif";
    //ctx.font = "bold 30px system-ui, Helvetica, Arial, sans-serif";
    ctx.fillText("" + Math.round(medieCumulativ[selectorZi]) + "°", lungimeSuprafataGrafica - 450, yIndicatorRezervor);
}

function desenareCompensatorValori() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = culoareTextCompensatorFill;
    //culoare implicita
    ctx.strokeStyle = culoareTextCompensator;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";
    ctx.font = "italic 12px system-ui, Arial, sans-serif";

    //Referinta
    ctx.fillText("Ref=0 (actuală=" + Math.round(medieCumulativ[selectorZi]) + "...)" , xLegenda, yLegenda);

    //Constante amplificare
    ctx.fillText("Kp=" + kp + " Ki=" + ki + " Kd=" + kd, xLegenda, yl1);

    //Eroarea
    //ctx.fillText("Er=" + Math.round(data[selectorZi]), 20, 260);

    //Compensator
    ctx.fillText("Cᵢ=" + "Kp*" + Math.round(data[selectorZi]) + "+Ki*"+Math.round(medieCumulativ[selectorZi]) + "+Kd*" + Math.round(medieCumulativ[selectorZi] * intervalProiectie), xLegenda, yl2);

    //Grad atentie
    //ctx.fillStyle = culoareTextCompensatorFill;
    //ctx.font = "italic 12px system-ui, Arial, sans-serif";
    ctx.fillText("Grad de atenție:", xLegenda, yl3);

    //Comanda ideala C
    //ctx.fillStyle = culoareTextCompensatorFill;
    //ctx.font = "italic 12px system-ui, Arial, sans-serif";
    //ctx.fillText("C=" + comandaIdeala[selectorZi], 20, yl4);
    ctx.font = "italic bold 12px system-ui, Arial, sans-serif";
    if(comandaIdeala[selectorZi]>10){
        ctx.fillText("Cᵢ=" + comandaIdeala[selectorZi] + textMaiMare10, xLegenda, yl4);
    }
    else{
        ctx.fillText("Cᵢ=" + comandaIdeala[selectorZi], xLegenda, yl4);
    }

    //Afisare data - zi curenta
    /*
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    ctx.fillText(zi + " " + luna, xLegenda, yl5);*/

    //Comanda ideala
    ctx.fillStyle = culoareCompensator;
    ctx.textAlign = "center";
    ctx.font = "italic bold 23px system-ui, Arial, sans-serif";
    ctx.fillText(comandaIdeala[selectorZi] + "!", xTextComanda, yTextComanda);

}

function desenarePuncteGraficOrizontal(){
    ctx = suprafataGrafica.context;

    for (let i = 0; i <= selectorZi; i++) {
      x_valoare = i*incrementX;
      y_valoare = Math.round(inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue));
      //y_valoare_2 = Math.round(inaltimeSuprafataGrafica - 10 - ((data_2[i]*scalaY_2)/maxValue_2));

      //desenare punct valoare grafic_valori_desenat - data_1
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, y_valoare );
      ctx.lineTo(10 + x_valoare, y_valoare + 2);
      ctx.strokeStyle = culoarePunctValoriGrafic_2;
      ctx.lineWidth = 1;
      ctx.closePath();
      ctx.stroke();

    }
}


function desenareGraficPVectorR(){

  //desenare grafic p+ si vector_r
  //desenare valori grafice (grafic 1 jos, grafic 2 sus)

  //x_p = 0;
  for (let i = 0; i <= selectorZi; i++) {
      x_p = (i-selectorZiStart)*incrementX;
      //x_p += incrementX;

      ctx.strokeStyle = culoareLinieGraficP;
      ctx.fillStyle = culoareLinieGraficP;
      ctx.fillRect(12 + x_p, yGrafic_2 - 2, 2, -((data_3[i]*scalaY_trend_3)/maxValue_3) );

  }

  //x_p = 0;
  for(let i = 0; i <= selectorZi; i++){
    x_p = (i - selectorZiStart)*incrementX;
    //x_p += incrementX;
    //y_r = Math.round(yGrafic_2 - ((vector_r_normalizat[i]*scalaY_trend_4)/maxValue_4));
    y_r = Math.round(yGrafic_2 - vector_r_normalizat[i]*scala2Y_trend_4);

    var raza_cerculet = 2;
    var raza_pulsatie = 0;
    var plin = false;
    var nr_ev = 0;

    for(let j = 0; j < evenimente.length; j++){
      //console.log(evenimente[i]);
      if(data_data[i] == evenimente[j]){
          //console.log(evenimente[i]);
          raza_cerculet = 6;
          plin = true;
          nr_ev = j;
      }
      if(data_data[selectorZi] == evenimente[j]){
          raza_pulsatie = 1;
      }
    }

    //desenare punct valoare grafic_valori_desenat - vector_r
    if(i > orizont_regresie + orizont_arie){

        //ctx.moveTo(12 + x_p, y_r - 1);
        //ctx.lineTo(12 + x_p, y_r + 1);
        if(vector_r_normalizat[i] >= 0){
            if(nrArie==43){
              if(data_2[i]>limita_regim_liniar_toate){
                ctx.strokeStyle = culoareCrestereRosu;
                ctx.fillStyle = culoareCrestereRosu;
              }
              else{
                ctx.strokeStyle = culoareCrestereMaro;
                ctx.fillStyle = culoareCrestereMaro;
              }
            }
            else {
              if(data_2[i]>limita_regim_liniar_zona){
                ctx.strokeStyle = culoareCrestereRosu;
                ctx.fillStyle = culoareCrestereRosu;
              }
              else{
                ctx.strokeStyle = culoareCrestereMaro;
                ctx.fillStyle = culoareCrestereMaro;
              }
            }

            //ctx.strokeStyle = culoareCrestereMaro;//culoareGraficVectorR;//culoareTextCompensatorRosu;
            //ctx.fillStyle = culoareGraficVectorR;//culoareGraficVectorR;
        }
        else {
            ctx.strokeStyle = culoareScadere;
            //ctx.fillStyle = culoareScadere;
        }

        if(plin && pulsatie_2/*raza_pulsatie == 1*/){
            ctx.beginPath();
            ctx.arc(12 + x_p, y_r, raza_cerculet + raza_pulsatie + 2, 0, 2 * Math.PI);
            ctx.closePath();
        }
        else {
            ctx.beginPath();
            ctx.arc(12 + x_p, y_r, raza_cerculet + raza_pulsatie, 0, 2 * Math.PI);
            ctx.closePath();
        }
        //console.log(y_r);


        if(plin){
            ctx.lineWidth = 2;
            ctx.fillStyle = evenimente_tip[nr_ev];
            //desenare semn crestere
            ctx.textAlign = "center";
            if(raza_pulsatie == 1){
                ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
            }
            else{
                ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
            }


            if(evenimente_tip[nr_ev] == culoareVerde){
              ctx.strokeStyle = culoareScadere;//culoareGraficVectorR;
              ctx.fill();
              ctx.stroke();

              ctx.fillStyle = culoareScadere;
              ctx.fillText((evenimente_actiuni.indexOf(evenimente_actiuni[zile_evenimente_actiuni[i]]) + 1)  + /*"-"*/ "\u2798", 28 + x_p, y_r - 2);
              //ctx.fillText("-" + evenimente_contor[nr_ev], 26 + x_p, y_r);
            }
            else {
              //ctx.fillStyle = culoareMaro;

              ctx.strokeStyle = culoareCrestereMaro;//evenimente_tip[nr_ev];
              ctx.fill();
              ctx.stroke();

              ctx.fillStyle = culoareCrestereMaro;
              ctx.fillText((evenimente_actiuni.indexOf(evenimente_actiuni[zile_evenimente_actiuni[i]]) + 1) + /*"+"*/ "\u279A", 28 + x_p, y_r - 2);
              //ctx.fillText("+" + evenimente_contor[nr_ev], 26 + x_p, y_r);
            }
        }
        else{
            ctx.lineWidth = 1;
            if(nrArie==43){
              if(data_2[i]>limita_regim_liniar_toate){
                ctx.fill();
              }
            }
            else{
              if(data_2[i]>limita_regim_liniar_zona){
              ctx.fill();
              }
            }
            ctx.stroke();
        }
    }
  }
}

function desenarePuncteTrendMedie(){
  //x_medie = 0; //((orizont_regresie + orizont_arie) + 1)
  for (let i = ((orizont_regresie + orizont_arie) + 1); i <= selectorZi; i++) {
      //x_medie += incrementX;
      //if(i > ((orizont_regresie + orizont_arie) + 1)){
      x_medie = (i - selectorZiStart)*incrementX;

      y_medie = Math.round(yGrafic_2 - ((vector_valZiCurenta[i]*scalaY_trend_2)/maxValueGrafic2));

      ctx.beginPath();
      ctx.arc(12 + x_medie, y_medie, 3, 0, 2 * Math.PI);
      ctx.fillStyle = "grey";
      ctx.strokeStyle = "aqua";
      if(vector_r[i] >= 1){
          ctx.fillStyle = culoareMedieCrestere;//culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;

          if(nrArie==43){
            if(data_2[i]>limita_regim_liniar_toate){
              //ctx.strokeStyle = culoareCrestereRosu;
              ctx.fillStyle = culoareCrestereRosu;
            }
            else{
              //ctx.strokeStyle = culoareCrestereMaro;
              //ctx.fillStyle = culoareCrestereMaro;
              ctx.fillStyle = culoareMedieCrestere;
            }
          }
          else {
            if(data_2[i]>limita_regim_liniar_zona){
              //ctx.strokeStyle = culoareCrestereRosu;
              ctx.fillStyle = culoareCrestereRosu;
            }
            else{
              //ctx.strokeStyle = culoareCrestereMaro;
              //ctx.fillStyle = culoareCrestereMaro;
              ctx.fillStyle = culoareMedieCrestere;
            }
          }

      }
      else{
          ctx.fillStyle = culoareMedieScadere;//culoare_linie_trend;
      }

      ctx.lineWidth = 1;
      ctx.closePath();
      ctx.fill();
      //ctx.stroke();
      //}
  }
}

function desenareEntitateModRadar(){
    //raza_pop = valZiCur/maxValZiCur * scalaEntitate;

    if(nrArie == 43){
        //Toate
        //scalareEntitate = 14
        raza_pop = valZiCur/scalareEntitateToate;
        valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

        if(selectorZi>(orizont_regresie + orizont_arie)){
            raza_transmisie = valZiUrm/scalareEntitateToate;
        }
        else{
            //raza_transmisie = 0;
            valZiUrm = data_2[selectorZi] * Math.pow((1 + data_3[selectorZi]/2), (orizont_proiectie - 1));
            raza_transmisie = valZiUrm/scalareEntitateToate;

            raza_pop = data_2[selectorZi]/scalareEntitateToate;
        }
    }
    else{
        //Zone
        raza_pop = valZiCur/scalareEntitate;
        valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

        if(selectorZi>(orizont_regresie + orizont_arie)){
            raza_transmisie = valZiUrm/scalareEntitate;
        }
        else{
            raza_transmisie = 0;
            raza_pop = raza_transmisie;
        }
    }

    diff = raza_transmisie - raza_pop;


    if(diff > 0){
        //crestere
        //transmisie (proiectie pe orizont de proiectie)
        ctx.lineWidth = 10;
        ctx.fillStyle = culoare_crestere_entitate;
        ctx.strokeStyle = "#007acc";//culoareGraficVectorR;
        ctx.beginPath();
        ctx.arc(12 + xEntitateModRadar, yEntitateModRadar, raza_transmisie, 0, 2 * Math.PI);
        ctx.closePath();
        //if(pulsatie)
            //ctx.stroke();
        ctx.fill();

        //populatie
        ctx.lineWidth = 8;
        ctx.fillStyle = culoare_pop;
        ctx.strokeStyle = "#e67300";//"#ffbb33";//culoareGraficVectorR;
        ctx.beginPath();
        ctx.arc(12 + xEntitateModRadar, yEntitateModRadar, raza_pop, 0, 2 * Math.PI);
        ctx.closePath();
        ////if(pulsatie)
          ////ctx.stroke();
        ctx.fill();
    }
    else {
        //scadere
        //populatie cu culoare de transmisie
        ctx.lineWidth = 6;
        if(raza_transmisie == 0){
            ctx.fillStyle = culoare_pop;
        }
        else {
            ctx.fillStyle = culoare_scadere_entitate; //"#9fdf9f"; //"#79d279";//culoareScadere;//culoareLinieGraficP;
        }
        ctx.strokeStyle = culoare_scadere_entitate;
        ctx.beginPath();
        ctx.arc(12 + xEntitateModRadar, yEntitateModRadar, raza_pop, 0, 2 * Math.PI);
        ctx.closePath();
        //if(pulsatie)
          //ctx.stroke();
        ctx.fill();


        //transmisie cu culoare de populatie
        //transmisie (proiectie pe orizont de proiectie)
        ctx.lineWidth = 8;
        ctx.fillStyle = culoare_pop;//culoare_pop;
        ctx.strokeStyle = "#e67300"//"#ffbb33";//culoareScadere;
        ctx.beginPath();
        ctx.arc(12 + xEntitateModRadar, yEntitateModRadar, raza_transmisie, 0, 2 * Math.PI);
        ctx.closePath();
        ////if(pulsatie)
          ////ctx.stroke();
        ctx.fill();
    }


    ctx.beginPath();
    ctx.closePath();

    /*
    ctx.setLineDash([2,8]);
    ctx.strokeStyle = culoareTextZiTransparent;

    if(d1r2>0){
        ctx.strokeStyle = culoareCrestereRosu;
    }
    else {
        ctx.strokeStyle = culoareScadere;
    }

    ctx.lineWidth = 4;
    ctx.moveTo(12 + xEntitateModRadar, yEntitateModRadar);
    ctx.lineTo(12 + xEntitateModRadar + (raza_pop + diff) * Math.cos(Math.PI) , yEntitateModRadar - (raza_pop + diff) * Math.sin(Math.PI));
    ctx.stroke();
    ctx.setLineDash([]);*/
}


function desenareEntitate(){
    //raza_pop = valZiCur/maxValZiCur * scalaEntitate;

    if(nrArie == 43){
        //Toate
        //scalareEntitate = 14
        raza_pop = valZiCur/scalareEntitateToate;
        valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

        if(selectorZi>(orizont_regresie + orizont_arie)){
            raza_transmisie = valZiUrm/scalareEntitateToate;
        }
        else{
            //raza_transmisie = 0;
            valZiUrm = data_2[selectorZi] * Math.pow((1 + data_3[selectorZi]/2), (orizont_proiectie - 1));
            raza_transmisie = valZiUrm/scalareEntitateToate;

            raza_pop = data_2[selectorZi]/scalareEntitateToate;
        }
        /*
        raza_pop = valZiCur/maxValZiCur * scalaEntitate;
        valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

        if(selectorZi>(orizont_regresie + orizont_arie)){
            raza_transmisie = valZiUrm/maxValZiCur * scalaEntitate;
        }
        else{
            //raza_transmisie = 0;
            valZiUrm = data_2[selectorZi] * Math.pow((1 + data_3[selectorZi]/2), (orizont_proiectie - 1));
            raza_transmisie = valZiUrm/maxValZiCur * scalaEntitate;

            raza_pop = data_2[selectorZi]/maxValZiCur * scalaEntitate;
        }
        */
    }
    else{
        //Zone
        raza_pop = valZiCur/scalareEntitate;
        valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

        if(selectorZi>(orizont_regresie + orizont_arie)){
            raza_transmisie = valZiUrm/scalareEntitate;
        }
        else{
            //raza_transmisie = 0;
            /*
            valZiUrm = data_2[selectorZi] * Math.pow((1 + data_3[selectorZi]/2), (orizont_proiectie - 1));
            raza_transmisie = valZiUrm/scalareEntitate;

            raza_pop = data_2[selectorZi]/scalareEntitate;
            */
            raza_transmisie = 0;
            raza_pop = raza_transmisie;
        }
    }

    diff = raza_transmisie - raza_pop;

    /*
    if(pulsatie == true){
        culoare_pop = "#ffbb33";//"#ffdd99";
    }
    else {
        culoare_pop = "#ffffe6";
    }*/

    if(diff > 0){
        //crestere
        //transmisie (proiectie pe orizont de proiectie)
        ctx.lineWidth = 10;
        ctx.fillStyle = culoare_crestere_entitate;
        ctx.strokeStyle = "#007acc";//culoareGraficVectorR;
        ctx.beginPath();
        ctx.arc(12 + xEntitate, yEntitate, raza_transmisie, 0, 2 * Math.PI);
        ctx.closePath();
        //if(pulsatie)
            //ctx.stroke();
        ctx.fill();

        //populatie
        ctx.lineWidth = 8;
        ctx.fillStyle = culoare_pop;
        ctx.strokeStyle = "#e67300";//"#ffbb33";//culoareGraficVectorR;
        ctx.beginPath();
        ctx.arc(12 + xEntitate, yEntitate, raza_pop, 0, 2 * Math.PI);
        ctx.closePath();
        ////if(pulsatie)
          ////ctx.stroke();
        ctx.fill();
    }
    else {
        //scadere
        //populatie cu culoare de transmisie
        ctx.lineWidth = 6;
        if(raza_transmisie == 0){
            ctx.fillStyle = culoare_pop;
        }
        else {
            ctx.fillStyle = culoare_scadere_entitate; //"#9fdf9f"; //"#79d279";//culoareScadere;//culoareLinieGraficP;
        }
        ctx.strokeStyle = culoare_scadere_entitate;
        ctx.beginPath();
        ctx.arc(12 + xEntitate, yEntitate, raza_pop, 0, 2 * Math.PI);
        ctx.closePath();
        //if(pulsatie)
          //ctx.stroke();
        ctx.fill();


        //transmisie cu culoare de populatie
        //transmisie (proiectie pe orizont de proiectie)
        ctx.lineWidth = 8;
        ctx.fillStyle = culoare_pop;//culoare_pop;
        ctx.strokeStyle = "#e67300"//"#ffbb33";//culoareScadere;
        ctx.beginPath();
        ctx.arc(12 + xEntitate, yEntitate, raza_transmisie, 0, 2 * Math.PI);
        ctx.closePath();
        ////if(pulsatie)
          ////ctx.stroke();
        ctx.fill();
    }

    //Desenare centru si raza xEntitate

    //Centru

    /*
    ctx.fillStyle = culoareTextZiTransparent;
    ctx.beginPath();
    ctx.arc(12 + xEntitate, yEntitate, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();*/


    /*
    //ctx.fillStyle = culoareTextZi;
    ctx.beginPath();
    ctx.arc(12 + xEntitate - raza_pop - diff, yEntitate, 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();*/

    ctx.beginPath();
    ctx.closePath();

    /*
    ctx.setLineDash([2,8]);
    ctx.strokeStyle = culoareTextZiTransparent;

    if(d1r2>0){
        ctx.strokeStyle = culoareCrestereRosu;
    }
    else {
        ctx.strokeStyle = culoareScadere;
    }

    ctx.lineWidth = 4;
    ctx.moveTo(12 + xEntitate, yEntitate);
    ctx.lineTo(12 + xEntitate + (raza_pop + diff) * Math.cos(Math.PI) , yEntitate - (raza_pop + diff) * Math.sin(Math.PI));
    ctx.stroke();
    ctx.setLineDash([]);*/

    //cerculet grafic vector r (in capat)
    /*
    if(selectorZi > (orizont_regresie + orizont_arie)){
      if(vector_r_normalizat[selectorZi] >= 0){
          ctx.strokeStyle = culoareGraficVectorR;//culoareTextCompensatorRosu;
          ctx.fillStyle = culoareCerculetR;

      }
      else {
          ctx.strokeStyle = culoareScadere;
          ctx.fillStyle = culoareLinieGraficP;
      }
      */


    /*
    if(vector_r_normalizat[selectorZi] >= 0){
        ctx.strokeStyle = culoareGraficVectorR;//culoareTextCompensatorRosu;
        ctx.fillStyle = culoareCerculetR;

    }
    else {
        ctx.strokeStyle = culoareScadere;
        ctx.fillStyle = culoareLinieGraficP;
    }*/


    /*if(plin)
        ctx.fill();*/

        /*
        if(vector_r_normalizat[selectorZi] >= 0){
            ctx.strokeStyle = culoareGraficVectorR;//culoareTextCompensatorRosu;
            ctx.fillStyle = culoareGraficVectorR;//culoareGraficVectorR;
        }
        else {
            ctx.strokeStyle = culoareScadere;
            ctx.fillStyle = culoareScadere;
        }*/


}

function desenareInfoExplicatii(){
  if(afisaretrend == false){
      if(zile_info_explicatii[selectorZi]> -1){
          ctx.textAlign = "start";


          if(data[selectorZi]>50){
            ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
            ctx.fillStyle = culoareCrestereRosu;//culoarePunctValoriGrafic_3;
          }
          else{
            ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
            ctx.fillStyle = culoareTextZi;//culoarePunctValoriGrafic_3;
          }

          text = info_explicatii[zile_info_explicatii[selectorZi]];

          linii = text.split("\n");

          for(let i=0; i<linii.length; i++){
              yInfo = yTextInfoExplicatii + i * 14;
              ctx.fillText(linii[i], xTextInfoExplicatii, yInfo);
          }

          //ctx.fillText(info_explicatii[zile_info_explicatii[selectorZi]], xTextInfoExplicatii, yTextInfoExplicatii);
      }
    }
}

function desenareAvioaneHarta(){
  dimensiuneAvion = 1;
  ctx = suprafataGrafica.context;


  //Desenare Directie Vant
  ctx.textAlign = "center";
  if(pulsatie_2){
    ctx.font = "bold 52px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = culoareCrestereRadarMaro;
        ctx.fillText("⇗", xVantHarta, yVantHarta);
        ctx.fillText("⇗", xVantHarta+10, yVantHarta-10);
    }
    else {
        ctx.fillStyle = culoareScadereRadarVerde;//"rgba(38,145,31,0.9)";//culoareScadere;
        ctx.fillText("⇙", xVantHarta, yVantHarta);
        ctx.fillText("⇙ ", xVantHarta, yVantHarta+10);
    }
  }
  else {
    ctx.font = "bold 52px Helvetica, system-ui, Arial, sans-serif";
    if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
        ctx.fillStyle = culoareCrestereRadarMaro;
        ctx.fillText("⇗", xVantHarta, yVantHarta);
    }
    else{
        ctx.fillStyle = culoareScadereRadarVerde;//culoareScadere;
        ctx.fillText("⇙", xVantHarta, yVantHarta);
    }
  }


  clasamentArie = clasamentAeronaveZileSortatArie[selectorZi].clasament;
  //desenare Avion pe radar
  if(selectorZi > orizont_trend)
      for(let zona=0; zona<vectoriDateZone.length; zona++){
          /*if(zona == nrArie) {
            continue;
          }*/

          //Desenare Vector Avion (R, DR)
          //

          ctx.lineWidth = 2;
          if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
            ctx.fillStyle = culoareScadereVectorAvion;//"#333";
            ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
          }
          else{
            ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
            ctx.strokeStyle = culoareCrestereVectorAvion;
          }

          //desenare segment vector
          ctx.beginPath();
          ctx.closePath();

          pozitieZone[zona][0]
          ctx.moveTo(pozitieZone[zona][0],pozitieZone[zona][1]);
          ctx.lineTo(pozitieZone[zona][0] +
              + vectoriDateZone[zona].vectorDR[selectorZi] * 10000/2,
            pozitieZone[zona][1] -
            (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/2
          );

          /*
          ctx.moveTo(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar,
              vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar);
          ctx.lineTo(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar +
              + vectoriDateZone[zona].vectorDR[selectorZi] * 10000/2,
            vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar -
            (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/2
          );*/
          ctx.stroke();

          ctx.beginPath();
          ctx.closePath();

          //desenare capat vector
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(pozitieZone[zona][0] +
            vectoriDateZone[zona].vectorDR[selectorZi] * 10000/2,
            pozitieZone[zona][1] -
            (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/2,
            2, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();



          //desenare avion partea 1

          //if(depasireLimitaStabilitate){
          //    ctx.lineWidth = 1;
          //}
          //else{
              ctx.lineWidth = 2;
          //}

          if(vectoriDateZone[zona].vectorXAvion[selectorZi]> 0){
              ctx.fillStyle = culoareCrestereCercAvion;
          }
          else{
              ctx.fillStyle = culoareScadereCercAvion;
          }

          if(vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi] > limita_max_crestere_medie){
              ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;
              ctx.strokeStyle = "black";
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }

          if(vectoriDateZone[zona].vectorDeltaZiCurenta[selectorZi] > limita_max_crestere_delta){
              ctx.fillStyle = "rgba(195, 34, 34, 0.8)";//culoareRosu;
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }


          //if(zona == nrArie){
              //ctx.fillStyle = culoareLinieGraficP;
              //ctx.strokeStyle = "navy";
          //}
          //else{
              //ctx.strokeStyle = "white";

              if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
              //if(vectoriDateZone[zona].vector_r[selectorZi] < 1.0){
                //ctx.fillStyle = culoareScadereVectorAvion;//"#333";
                ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
              }
              else{
                //ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
                ctx.strokeStyle = culoareCrestereVectorAvion;
              }
          //}

          ctx.lineWidth = 2;

          /*ctx.beginPath()
          ctx.fill();
          ctx.stroke();
          ctx.closePath();*/

          //ctx.closePath();
          ctx.beginPath();

          ctx.arc(pozitieZone[zona][0], pozitieZone[zona][1] ,
                dimensiuneAvion * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/scalaInflamatieHarta , 0, 2 * Math.PI);


          ctx.closePath();
          ctx.fill();
          ctx.stroke();


          ctx.beginPath();
          ctx.closePath();

          //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          if(vectoriDateZone[zona].vectorXAvion[selectorZi] > 0){
              ctx.fillStyle = culoareCrestereMaro;
              ctx.font = "italic bold 18px Helvetica, system-ui, Arial, sans-serif";
          }
          else{
              ctx.fillStyle = culoareScadere;
              ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          }

          nume_zona = numeArii.data.value[zona].substring(0,3);
          valoareZona = Math.floor(vectoriDateZone[clasamentArie[zona].arie].vectorMedieZiCurenta[selectorZi] / vector_valZiCurentaToate[selectorZi]*1000)/10;
          //pozitieZone[zona][0], pozitieZone[zona][1]
          ctx.fillText(nume_zona, pozitieZone[zona][0] - 14, pozitieZone[zona][1] - 14);
          ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
          ctx.textAlign = "start";
          ctx.fillText("(" + valoareZona + "%)", pozitieZone[zona][0] + 12, pozitieZone[zona][1] - 15);

          /*
          if(vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar > 3 ){
              if(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar < lungimeSuprafataGrafica -3 ){
                  ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar - 14, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar - 14);
              }
              else{
                  //iesire lateral dreapta
                  ctx.fillText(nume_zona, lungimeSuprafataGrafica - 20, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar - 10);
              }
          }
          else{
            //iesire margine
              ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar - 14, 22);
          }*/

      }

}


function desenarePendulModHarta(){
  //Desenare Soseta Vant
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";
  ctx.fillStyle = "#4d4d4d";


  //desenare stalp soseta
  /*
  ctx.moveTo(xStalp, yStalp);
  ctx.lineTo(xStalp, yStalp - lungimeStalp);
  ctx.stroke();

  ctx.beginPath();
  ctx.closePath();*/

  //vectorXAvion[i] = xRadarModRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1ModRadar);
  //vectorYAvion[i] = yRadarModRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1ModRadar);
  //if(nrArie == 43){
      xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
      //xsos = vector_rToate_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  //}
  //else{
    //  xsos = vectoriDateZone[nrArie].vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
    //  xsos = vectoriDateZone[nrArie].vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  //}

  xsoseta = lungimeSosetaModRadar * Math.sin(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSosetaModRadar * Math.cos(xsos * Math.PI * 2 / 360);

  ctx.lineWidth = 6 ;

  if(vector_rToate[selectorZi] > 1){
      ctx.strokeStyle = culoareCrestereMaro;
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.strokeStyle = culoareScadere;
      ctx.fillStyle = culoareScadere;
  }


  /*
  if(selectorZi <= (orizont_regresie + orizont_arie)){
    ctx.strokeStyle = culoareCrestereMaro;
    ctx.fillStyle = culoareCrestereMaro;
    xsos = data_3[selectorZi]/2*1000 / scalaPozitieXAvion * 1.5 * 90;
    //console.log(xsos);
    xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
    ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);
  }*/


  if(selectorZi > orizont_regresie + orizont_arie){
      //desenare cerc capat pendul
      //ctx.fillStyle = "white";
      //ctx.fillStyle = "#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpModRadar + xsoseta, yStalpModRadar - ysoseta, 6, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.closePath();

      //desenare soseta
      ctx.moveTo(xStalpModRadar, yStalpModRadar);
      ctx.lineTo(xStalpModRadar + xsoseta, yStalpModRadar - ysoseta);
      ctx.stroke();


      ctx.beginPath();
      ctx.closePath();

      //desenare cerc baza pendul
      ctx.fillStyle = "white";//"#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpModRadar, yStalpModRadar, 2 * 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
  }
}

function desenareRadarModRadar(){
  if(nrArie == 43){
    zonaAjustata = 0;
  }
  else{
    zonaAjustata = nrArie;
  }

  if(yEntitateModRadar - raza_pop - razaOrigineRadar > yRadarModRadar){
      depasireLimitaStabilitate = true;
  }
  else{
      depasireLimitaStabilitate = false;
  }


  if(depasireLimitaStabilitate ){
      culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.2)";
      culoareRadarLinieDetectieCadran4Transparent = "rgba(38,145,31,0.2)";
      ctx.fillStyle = culoareRadarCercuri;
      ctx.strokeStyle = culoareRadarCercuri;//"#ffbb33";//culoareGraficVectorR;
  }
  else{
      culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.7)";
      culoareRadarLinieDetectieCadran4Transparent = "rgba(38,145,31,0.7)";
      ctx.fillStyle = culoareRadarCercuri;
      ctx.strokeStyle = "white";//"#ffbb33";//culoareGraficVectorR;
  }

  ctx.lineWidth = 3;
  //ctx.fillStyle = culoareRadarCercuri;
  //ctx.strokeStyle = culoareRadarCercuri;//"#ffbb33";//culoareGraficVectorR;
  ctx.strokeStyle = "white";
  //Cerc 1 exterior
  ctx.beginPath();
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc1ModRadar / scalaRadarY, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.stroke();

  //desenare cadran 4
  ctx.fillStyle = culoareRadarLinieDetectieCadran4Transparent;
  ctx.beginPath();
  ctx.moveTo(xRadarModRadar,yRadarModRadar);
  //ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc1ModRadar, Math.PI, Math.PI * 3/2);
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc1ModRadar / scalaRadarY, Math.PI/2, Math.PI);
  ctx.closePath();
  ctx.fill();

  //desenare cadran 2
  ctx.fillStyle = culoareRadarLinieDetectieCadran1Transparent;
  ctx.beginPath();
  ctx.moveTo(xRadarModRadar,yRadarModRadar);
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc1ModRadar / scalaRadarY, 0, Math.PI * 1/2);
  ctx.closePath();
  ctx.fill();

  //Cerc 2 mijloc
  ctx.beginPath();
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc2ModRadar / scalaRadarY, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.stroke();

  ctx.strokeStyle = "white";
  //Desenare Axe radar
  //ctx.strokeStyle = culoareRadarCercuri;
  ctx.moveTo(xRadarModRadar - 2*razaCerc1ModRadar, yRadarModRadar);
  ctx.lineTo(xRadarModRadar + 2*razaCerc1ModRadar, yRadarModRadar);
  ctx.stroke();

  ctx.moveTo(xRadarModRadar, yRadarModRadar - 3.2 * razaCerc1ModRadar);
  ctx.lineTo(xRadarModRadar, yRadarModRadar + razaCerc1ModRadar);
  ctx.stroke();

  //Cerc 3 interior
  //ctx.strokeStyle = "#4d4d4d";
  //ctx.fillStyle = "#4d4d4d";
  if(depasireLimitaStabilitate ){
      ctx.strokeStyle = "#4d4d4d";
      ctx.fillStyle = "#4d4d4d";

  }
  else {
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
  }

  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc3ModRadar, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.fill();
  ctx.stroke();
  //ctx.beginPath();
  //ctx.closePath();


  //desenare numar cadran
  ctx.textAlign = "end";
  ctx.font = "24px Helvetica, system-ui, Arial, sans-serif";


  //verde daca avion in cadran 2
  if(nrArie == 43){
    if(vectorXAvion[selectorZi] - xRadarModRadar > 0){
        ctx.fillStyle = culoareTextZi;
    }
    else{
        ctx.fillStyle = culoareScadere;
    }
  }
  else{
    if(vectoriDateZone[zonaAjustata].vectorXAvion[selectorZi] > 0){
        ctx.fillStyle = culoareTextZi;
    }
    else{
        ctx.fillStyle = culoareScadere;
    }
  }


  if(depasireLimitaStabilitate == false){
      ctx.font = "24px bold italic Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = "white";//"rgba(38,145,31,0.9)";
      ctx.strokeStyle = "white";//"rgba(38,145,31,0.9)";
      ctx.strokeText("2", xRadarModRadar - 15, yRadarModRadar - 21);
  }
  //ctx.fillStyle = culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
  ctx.fillText("2", xRadarModRadar - 15, yRadarModRadar - 21);


  //Desenare Pista Aeroport
  ctx.fillStyle = "grey";//culoare_scadere_entitate;
  ctx.strokeStyle = "#4d4d4d";//"white";
  //ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineWidth = curburaModRadar;
  if(depasireLimitaStabilitate ){
      ctx.strokeStyle = "#4d4d4d";
      //ctx.fillStyle = "#4d4d4d";

  }
  else {
      //ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.fillStyle = "#e96363";
  }

  rectXModRadar = xRadarModRadar - pistaLungimeModRadar / scalaRadarY;
  rectYModRadar = yRadarModRadar - pistaLatimeModRadar / 2 / scalaRadarY;

  ctx.strokeRect(rectXModRadar+(curburaModRadar/2), rectYModRadar+(curburaModRadar/2), (pistaLungimeModRadar-curburaModRadar) / scalaRadarY, (pistaLatimeModRadar-curburaModRadar)/scalaRadarY);
  ctx.fillRect(rectXModRadar+(curburaModRadar/2), rectYModRadar+(curburaModRadar/2), (pistaLungimeModRadar-curburaModRadar)/scalaRadarY, (pistaLatimeModRadar-curburaModRadar)/scalaRadarY);

  //ctx.beginPath();
  //ctx.arc(xRadarModRadar - razaCerc1ModRadar, yRadarModRadar, razaOrigineAeroport, 0, 2 * Math.PI);
  //ctx.closePath();
  //ctx.fill();
  //ctx.stroke();

  //Desenare linie punctata Pista
  ctx.beginPath();
  ctx.closePath();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";

  ctx.setLineDash([3,5]);
  ctx.moveTo(xRadarModRadar - razaCerc1ModRadar/scalaRadarY, yRadarModRadar);
  ctx.lineTo(xRadarModRadar, yRadarModRadar);
  ctx.stroke();
  ctx.setLineDash([]);

  //Desenare Origine Radar
  if(depasireLimitaStabilitate ){
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";

  }
  else {
      ctx.fillStyle = "#e96363";//"white";
      ctx.strokeStyle = "#e96363";//"white";
  }

  if(pulsatie_2){
      ctx.beginPath();
      ctx.arc(xRadarModRadar, yRadarModRadar, razaOrigineRadar, 0, 2 * Math.PI);
      ctx.closePath();
      if(culoare_pulsatie == culoareMaro){
          ctx.fillStyle = culoareMaro;//culoareCrestereMaro;
      }
      else {
          ctx.fillStyle = culoareVerde;//culoareScadere;
      }
      /*
      if(zile_evenimente_actiuni[selectorZi] > -1){
          if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
              ctx.fillStyle = culoareMaro;//culoareCrestereMaro;
          }
          else{
              ctx.fillStyle = culoareVerde;//culoareScadere;
          }
      }*/
  }
  else{
    ctx.beginPath();
    ctx.arc(xRadarModRadar, yRadarModRadar, razaOrigineRadar, 0, 2 * Math.PI);
    ctx.closePath();
  }
  ctx.fill();

  ctx.beginPath();
  ctx.closePath();


  //Desenare Vant

  /*
  ctx.textAlign = "center";
  if(pulsatie_2){
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
        ctx.fillText(" \u21E8", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
    }
    else {
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
        ctx.fillText("\u21E6 ", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
    }
  }
  else {
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
    }
    else{
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalpModRadar, yStalpModRadar - lungimeStalp - 6);
    }
  }*/

  //Desenare Directie Vant
  ctx.textAlign = "center";
  if(pulsatie_2){
    ctx.font = "bold 52px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = culoareCrestereRadarMaro;
        ctx.fillText("⇗", xRadarModRadar+10, yRadarModRadar - 150);
        ctx.fillText(" ⇗", xRadarModRadar+10, yRadarModRadar - 160);
    }
    else {
        ctx.fillStyle = culoareScadereRadarVerde;//"rgba(38,145,31,0.9)";//culoareScadere;
        ctx.fillText("⇙", xRadarModRadar, yRadarModRadar - 150);
        ctx.fillText("⇙ ", xRadarModRadar, yRadarModRadar - 140);
    }
  }
  else {
    ctx.font = "bold 52px Helvetica, system-ui, Arial, sans-serif";
    if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
        ctx.fillStyle = culoareCrestereRadarMaro;
        ctx.fillText("⇗", xRadarModRadar+10, yRadarModRadar - 150);
    }
    else{
        ctx.fillStyle = culoareScadereRadarVerde;//culoareScadere;
        ctx.fillText("⇙", xRadarModRadar, yRadarModRadar - 150);
    }
  }


  //Desenare Soseta Vant
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";
  ctx.fillStyle = "#4d4d4d";


  //desenare stalp soseta
  /*
  ctx.moveTo(xStalp, yStalp);
  ctx.lineTo(xStalp, yStalp - lungimeStalp);
  ctx.stroke();

  ctx.beginPath();
  ctx.closePath();*/

  //vectorXAvion[i] = xRadarModRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1ModRadar);
  //vectorYAvion[i] = yRadarModRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1ModRadar);
  if(nrArie == 43){
      xsos = vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
      //xsos = vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  }
  else{
      xsos = vectoriDateZone[nrArie].vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
      //xsos = vectoriDateZone[nrArie].vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  }

  xsoseta = lungimeSosetaModRadar * Math.sin(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSosetaModRadar * Math.cos(xsos * Math.PI * 2 / 360);

  ctx.lineWidth = 6 ;

  if(vector_r[selectorZi] > 1){
      ctx.strokeStyle = culoareCrestereMaro;
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.strokeStyle = culoareScadere;
      ctx.fillStyle = culoareScadere;
  }


  /*
  if(selectorZi <= (orizont_regresie + orizont_arie)){
    ctx.strokeStyle = culoareCrestereMaro;
    ctx.fillStyle = culoareCrestereMaro;
    xsos = data_3[selectorZi]/2*1000 / scalaPozitieXAvion * 1.5 * 90;
    //console.log(xsos);
    xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
    ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);
  }*/


  if(selectorZi > orizont_regresie + orizont_arie){
      //desenare cerc capat pendul
      //ctx.fillStyle = "white";
      //ctx.fillStyle = "#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpModRadar + xsoseta, yStalpModRadar - ysoseta, 6, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.closePath();

      //desenare soseta
      ctx.moveTo(xStalpModRadar, yStalpModRadar);
      ctx.lineTo(xStalpModRadar + xsoseta, yStalpModRadar - ysoseta);
      ctx.stroke();


      ctx.beginPath();
      ctx.closePath();

      //desenare cerc baza pendul
      ctx.fillStyle = "white";//"#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalpModRadar, yStalpModRadar, 2 * 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
  }

  //console.log("xsoseta: " + xsoseta);
  //console.log("ysoseta: " + ysoseta);

  //Desenare Raza Radar
  radianiZi = selectorZi * (2 * Math.PI) / 360 * vitezaRadar; //360/8 = 45
  //grade = selectorZi * vitezaRadar;
  //console.log(grade);



  //if(Math.cos(radianiZi))

  /*
  grade = selectorZi % (360 / vitezaRadar);
  //console.log("grade: " + grade);
  //console.log(cadranStart + " " + cadranFinal);
  //console.log(radianiZi);
  if(grade > cadranStart && grade < cadranFinal ){
     //console.log("cadranul 4");
  }*/




  //Desenare traiectorie Avion
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  //ctx.fillStyle = culoareTraiectorieAvionRadar;
  //ctx.strokeStyle = culoareTraiectorieAvionRadar;


  //desenare fum
  if(selectorZi > orizont_trend)
      for(let zona=0; zona<vectoriDateZone.length; zona++){
          if(zona == nrArie) continue;
          //if zona == nr Arie - coloreaza fum diferit
          if(vectoriDateZone[zona].vectorXAvion[selectorZi]){
              //for (let i = (selectorZi - 255); i < selectorZi; i++){
                  //nuantar = (255 - (( i + 160 - selectorZi) % 255));
                for (let i = (selectorZi - 75); i < selectorZi; i++){
                  if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[41].arie){
                  //for (let i = (selectorZi - 120); i < selectorZi; i++){
                    //transp = 0.0 + i / selectorZi;
                    //transp = 0 + i/selectorZi *100;
                    transp = 0.2 + i / selectorZi;
                    //nuantab = 70;
                    //nuantar = 20;
                    //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                    //rosu
                    ctx.fillStyle = "hsla(10,70%,40%," + transp + ")";
                  }
                  else if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[40].arie){
                  //for (let i = (selectorZi - 120); i < selectorZi; i++){
                    //transp = 0.0 + i / selectorZi;
                    //transp = 0 + i/selectorZi *100;
                    transp = 0.2 + i / selectorZi;
                    //nuantab = 70;
                    //nuantar = 20;
                    //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                    //galben
                    ctx.fillStyle = "hsla(40,80%,55%," + transp + ")";
                  }
                  /*
                  else if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[39].arie){
                  //for (let i = (selectorZi - 120); i < selectorZi; i++){
                    //transp = 0.0 + i / selectorZi;
                    //transp = 0 + i/selectorZi *100;
                    transp = 0 + i / selectorZi;
                    //nuantab = 70;
                    //nuantar = 20;
                    //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                    ctx.fillStyle = "hsla(210,70%,60%," + transp + ")";
                  }*/
                  else{
                    nuantar = (255 - (( i + 160 - selectorZi) % 255));
                    nuantag = nuantar;
                    nuantab = nuantar;
                    transp = 0.0 + i / (selectorZi) / 10;
                    ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";
                  }





                  ctx.beginPath();
                  ctx.arc(vectoriDateZone[zona].vectorXAvion[i] + xRadarModRadar, vectoriDateZone[zona].vectorYAvion[i]/scalaRadarY + yRadarModRadar , 3 * (1 + 5 * (selectorZi-i)/selectorZi) , 0, 2 * Math.PI);
                  ctx.closePath();
                  ctx.fill();

              }
          }
      }




  //caclul parametrii desenare pulsatie si dimensiune avion
  //if(depasireLimitaStabilitate){
    //  dimensiuneAvion = razaPunctAvionMin + medieCumulativ[selectorZi]/scalaDimensiuneAvion;
  //}
  //else{
      //dimensiuneAvion = razaPunctAvionMin + medieCumulativ[selectorZi]/scalaDimensiuneAvion + 1;
  //}

  dimensiuneAvion = razaPunctAvionMin + 2;


  //desenare pulsatie detectie pe radar
  if(vectoriDateZone[zonaAjustata].vectorXAvion[selectorZi]){
      if((yRadarModRadar - vectoriDateZone[zonaAjustata].vectorYAvion[selectorZi]) < razaCerc1ModRadar && medieCumulativ[selectorZi] < nivelMaxAfisatRezervor){
          cosAvion = (vectoriDateZone[zonaAjustata].vectorXAvion[selectorZi])/razaCerc1ModRadar;
          sinAvion = (vectoriDateZone[zonaAjustata].vectorYAvion[selectorZi])/razaCerc1ModRadar;

          distCos = Math.cos(radianiZi + Math.PI/6) - cosAvion;
          distSin = Math.sin(radianiZi + Math.PI/6) - sinAvion;
          dist1 = Math.sqrt(Math.pow(distCos, 2) + Math.pow(distSin, 2));

          distCos = Math.cos(radianiZi + 0) - cosAvion;
          distSin = Math.sin(radianiZi + 0) - sinAvion;
          dist2 = Math.sqrt(Math.pow(distCos, 2) + Math.pow(distSin, 2));

          //console.log("d1: " + dist1);
          //console.log("d2: " + dist2);

          if(dist1 < 0.9 && dist2 < 0.8){
              //console.log("detectie");
              if(pulsatie_radar == 0){
                  pulsatie_radar = temporizare_pulsatie_radar;
                  pulsatie_radar_xModRadar = vectoriDateZone[zonaAjustata].vectorXAvion[selectorZi] + xRadarModRadar;
                  pulsatie_radar_yModRadar = vectoriDateZone[zonaAjustata].vectorYAvion[selectorZi] + yRadarModRadar;
              }
          }
      }
  }

  ctx.lineWidth = 2;
  if(pulsatie_radar > 0){
      ctx.fillStyle = "rgba(255,255,255," + (0.2 + 0.8 - 0.8 * (temporizare_pulsatie_radar-pulsatie_radar)/temporizare_pulsatie_radar) + ")";
      pulsatie_radar--;
      ctx.beginPath();
      ctx.arc(pulsatie_radar_x, pulsatie_radar_y , razaPunctAvion + (temporizare_pulsatie_radar - pulsatie_radar)/temporizare_pulsatie_radar * razaPunctAvion, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      if(pulsatie_radar > temporizare_pulsatie_radar/3)
          ctx.stroke();
  }

  //desenare fum zona Selectata
  if(nrArie != 43){
    if(vectoriDateZone[nrArie].vectorXAvion[selectorZi]){
        for (let i = (selectorZi - 120); i < selectorZi; i++){

            transp = 0.0 + i / selectorZi;
            nuantab = (255 - (( i + 160 - selectorZi) % 255));
            nuantar = 20;
            nuantag = 70;

            ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";

            ctx.beginPath();
            ctx.arc(vectoriDateZone[nrArie].vectorXAvion[i] + xRadarModRadar, vectoriDateZone[nrArie].vectorYAvion[i]/scalaRadarY + yRadarModRadar , 3 * (1 + 4 * (selectorZi-i)/selectorZi), 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();

        }
    }
  }

  //desenare Fum Toate selectat
  if(nrArie == 43){
      xAvion = ((vectorXAvion[selectorZi])*scalaXAvionRadarToate + xRadarModRadar);
      yAvion = (vectorYAvion[selectorZi])*scalaYAvionRadarToate / scalaRadarY + yRadarModRadar;

      //desenare fum peste total
      if(vectorXAvion[selectorZi]){
          for (let i = (selectorZi - 200); i < selectorZi; i++){

              transp = 0.0 + i / selectorZi;
              nuantab = (255 - (( i + 160 - selectorZi) % 255));
              nuantar = 20;
              nuantag = 70;

              ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";


              ctx.beginPath();
              ctx.arc(((vectorXAvion[i])*scalaXAvionRadarToate + xRadarModRadar), (((vectorYAvion[i])*scalaYAvionRadarToate)/scalaRadarY + yRadarModRadar) , 3 * (1 + 4 * (selectorZi-i)/selectorZi) , 0, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();

          }
      }
  }

  //desenare Avion pe radar
  if(selectorZi > orizont_trend)
      for(let zona=0; zona<vectoriDateZone.length; zona++){
          if(zona == nrArie) {
            continue;
          }

          //Desenare Vector Avion (R, DR)
          //

          ctx.lineWidth = 1;
          if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
            ctx.fillStyle = culoareScadereVectorAvion;//"#333";
            ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
          }
          else{
            ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
            ctx.strokeStyle = culoareCrestereVectorAvion;
          }

          //desenare segment vector
          ctx.beginPath();
          ctx.closePath();

          ctx.moveTo(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar,
              vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar);
          ctx.lineTo(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar +
              + vectoriDateZone[zona].vectorDR[selectorZi] * 10000/2,
            vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar -
            (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/2
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.closePath();

          //desenare capat vector
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar +
            vectoriDateZone[zona].vectorDR[selectorZi] * 10000/2,
            vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar -
            (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/2,
            2, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();



          //desenare avion partea 1

          if(depasireLimitaStabilitate){
              ctx.lineWidth = 1;
          }
          else{
              ctx.lineWidth = 2;
          }

          if(vectoriDateZone[zona].vectorXAvion[selectorZi]> 0){
              ctx.fillStyle = culoareCrestereCercAvion;
          }
          else{
              ctx.fillStyle = culoareScadereCercAvion;
          }

          if(vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi] > limita_max_crestere_medie){
              ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;
              ctx.strokeStyle = "black";
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }

          if(vectoriDateZone[zona].vectorDeltaZiCurenta[selectorZi] > limita_max_crestere_delta){
              ctx.fillStyle = "rgba(195, 34, 34, 0.8)";//culoareRosu;
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }





          if(zona == nrArie){
              ctx.fillStyle = culoareLinieGraficP;
              ctx.strokeStyle = "navy";
          }
          else{
              //ctx.strokeStyle = "white";

              if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
              //if(vectoriDateZone[zona].vector_r[selectorZi] < 1.0){
                //ctx.fillStyle = culoareScadereVectorAvion;//"#333";
                ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
              }
              else{
                //ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
                ctx.strokeStyle = culoareCrestereVectorAvion;
              }
          }

          ctx.lineWidth = 1;

          /*ctx.beginPath()
          ctx.fill();
          ctx.stroke();
          ctx.closePath();*/

          //ctx.closePath();
          ctx.beginPath();
          if(vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar > 0 ){
              if(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar < lungimeSuprafataGrafica ){
                  ctx.arc(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar ,
                    dimensiuneAvion * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvion , 0, 2 * Math.PI);
              }
              else{
                  //evitare iesire in lateral dreapta
                  ctx.arc(lungimeSuprafataGrafica, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar ,
                    dimensiuneAvion * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvion, 0, 2 * Math.PI);
              }
          }
          else{
              //evitare iesire margine - ramas margine
              ctx.arc(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar, 0 ,
                dimensiuneAvion * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvion , 0, 2 * Math.PI);
          }

          ctx.closePath();
          ctx.fill();
          ctx.stroke();


          ctx.beginPath();
          ctx.closePath();

          ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          if(vectoriDateZone[zona].vectorXAvion[selectorZi] > 0){
              ctx.fillStyle = culoareCrestereMaro;
          }
          else{
              ctx.fillStyle = culoareScadere;
          }

          nume_zona = numeArii.data.value[zona].substring(0,3);
          if(vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar > 3 ){
              if(vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar < lungimeSuprafataGrafica -3 ){
                  ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar - 14, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar - 14);
              }
              else{
                  //iesire lateral dreapta
                  ctx.fillText(nume_zona, lungimeSuprafataGrafica - 20, vectoriDateZone[zona].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar - 10);
              }
          }
          else{
            //iesire margine
              ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvion[selectorZi] + xRadarModRadar - 14, 22);
          }

      }



  //Desenare lumina rotativa
  ctx.fillStyle = culoareRadarLinieDetectieModRadar;
  ctx.beginPath();
  ctx.moveTo(xRadarModRadar, yRadarModRadar + 0 );
  ctx.arc(xRadarModRadar, yRadarModRadar, razaCerc1ModRadar, radianiZi, radianiZi + Math.PI/6);

  if(pulsatie_2){
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = culoareRadarLinieDetectieCrestereTransparentModRadar;//culoareMaro;//culoareCrestereMaro;
    }
    else {
        ctx.fillStyle = culoareRadarLinieDetectieScadereTransparentModRadar;//culoareVerde;//culoareScadere;
    }
  }

  ctx.closePath();
  ctx.fill();



  //desenare avion selectat si vector avion
  if(nrArie!=43){


    //Desenare Vector Avion (R, DR)
    //

    ctx.lineWidth = 1;
    ctx.strokeStyle = "navy";
    ctx.fillStyle = "navy";

    //desenare segment vector
    ctx.beginPath();
    ctx.closePath();

    ctx.moveTo(vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar,
        vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar);
    ctx.lineTo(vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar +
        + vectoriDateZone[nrArie].vectorDR[selectorZi] * 10000/2,
      vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar -
      (vectoriDateZone[nrArie].vector_r[selectorZi]-1)*1000/2
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.closePath();

    //desenare capat vector
    ctx.lineWidth = 2;
    ctx.fillStyle = culoareLinieGraficP;

    ctx.beginPath();
    ctx.arc(vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar +
      vectoriDateZone[nrArie].vectorDR[selectorZi] * 10000/2,
      vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar -
      (vectoriDateZone[nrArie].vector_r[selectorZi]-1)*1000/2,
      3, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();


    //desenare avion
    ctx.lineWidth = 1;
    ctx.fillStyle = culoareLinieGraficP;
    ctx.strokeStyle = "navy";

    ctx.beginPath();
    if(vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar> 0 ){
        ctx.arc(vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar, vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar ,
          dimensiuneAvion * 1.3 + vectoriDateZone[nrArie].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvion, 0, 2 * Math.PI);
    }
    else{
        //evitare iesire margine - ramas margine
        ctx.arc(vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar, 0 ,
          dimensiuneAvion*1.3 + vectoriDateZone[nrArie].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvion, 0, 2 * Math.PI);
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    /*if(vectoriDateZone[nrArie].vectorXAvion[selectorZi] > 0){
        ctx.fillStyle = culoareCrestereMaro;
    }
    else{
        ctx.fillStyle = culoareScadere;
    }*/


    nume_zona = numeArii.data.value[nrArie].substring(0,3);
    ctx.strokeStyle = "navy";
    ctx.fillStyle = "navy";
    ctx.fillText(nume_zona, vectoriDateZone[nrArie].vectorXAvion[selectorZi] + xRadarModRadar - 14, vectoriDateZone[nrArie].vectorYAvion[selectorZi]/scalaRadarY + yRadarModRadar - 14);

  }



  //Desenare Avion Toate
  if(nrArie == 43){
      //Desenare Vector Avion (R, DR)
      //

      ctx.lineWidth = 1;
      ctx.strokeStyle = "navy";
      ctx.fillStyle = "navy";

      //desenare segment vector
      ctx.beginPath();
      ctx.closePath();

      ctx.moveTo(xAvion,yAvion);

      ctx.lineTo(xAvion + vectorDR[selectorZi] * 10000/2,
        yAvion - (vector_r[selectorZi]-1)*1000/2);
      ctx.stroke();

      ctx.beginPath();
      ctx.closePath();

      //desenare capat vector
      ctx.lineWidth = 2;
      ctx.fillStyle = culoareLinieGraficP;

      ctx.beginPath();
      ctx.arc(xAvion + vectorDR[selectorZi] * 10000/2,
        yAvion - (vector_r[selectorZi]-1)*1000/2,
        3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      //desenare avion partea 1
      if(depasireLimitaStabilitate){
          ctx.lineWidth = 2;
      }
      else{
          ctx.lineWidth = 3;
      }

      /*
      if(xAvion - xRadarModRadar > 0){
          ctx.fillStyle = culoareCrestereMaro;
      }
      else{
          ctx.fillStyle = culoareScadere;
      }
      ctx.strokeStyle = "white";*/

      ctx.fillStyle = "lightyellow";//culoareLinieGraficP;
      ctx.strokeStyle = "navy";

      if(valZiCur > 900){
          ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;//"#edabab";
          //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
      }

      ctx.beginPath();
      if(yAvion > 0 ){
          ctx.arc(xAvion, yAvion ,
            dimensiuneAvion * 1.5 + vector_valZiCurenta[selectorZi]/(crestereDimensiuneAvion*4), 0, 2 * Math.PI);
      }
      else{
          //evitare iesire margine - ramas margine
          ctx.arc(xAvion, 0 ,
            dimensiuneAvion * 1.5 + vector_valZiCurenta[selectorZi]/(crestereDimensiuneAvion*4), 0, 2 * Math.PI);
      }

      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.font = "bold italic 16px Helvetica, system-ui, Arial, sans-serif";
      /*
      if(xAvion - xRadarModRadar > 0){
          ctx.fillStyle = culoareCrestereMaro;
      }
      else{
          ctx.fillStyle = culoareScadere;
      }*/
      ctx.fillStyle = "navy";
      nume_zona = "Toate";
      if(yAvion > 0 ){
          ctx.fillText(nume_zona, xAvion - 12, yAvion - 14);
      }
      else{
          ctx.fillText(nume_zona, xAvion - 12, + 24);
      }

      //console.log(vectorXAvion[selectorZi] + " " + vectorYAvion[selectorZi]);
  }

}

function desenareAvioaneRegulator(){
  //Desenare traiectorie Avion
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  //ctx.fillStyle = culoareTraiectorieAvionRadar;
  //ctx.strokeStyle = culoareTraiectorieAvionRadar;
  afisareAvioane = true;

  dimensiuneAvionRegulator = razaPunctAvionMinRegulator + 1;


  /*
  //desenare proiectie
  if(selectorZi < limitaDerulareGraficeSemnale){
      //x_valoare = xGraficSemnale + i/compresieGraficSemnale;
      xrp1 = xGraficSemnale + (selectorZi)/compresieGraficSemnale;
      xrp2 = xGraficSemnale + (selectorZi + intervalProiectie2)/compresieGraficSemnale;
  }
  else{
      //x_valoare = xGraficSemnale + (i - (selectorZi - 255))/compresieGraficSemnale;
      xrp1 = xGraficSemnale + (limitaDerulareGraficeSemnale)/compresieGraficSemnale;
      xrp2 = xGraficSemnale + (limitaDerulareGraficeSemnale + intervalProiectie2)/compresieGraficSemnale;
  }

  rp_val1 = yGraficSemnale - (medieCumulativ[selectorZi] * scalaXTrend3Orizontal/(maxValue));
  //rp_val2 = yGraficSemnale - (medieCumulativ[selectorZi] * scalaXTrend3Orizontal/(maxValue)) - (intervalProiectie)*factor_amp/compresieGraficSemnale;
  rp_val2 = yGraficSemnale - (medieCumulativ[selectorZi] * factor_ampMediu * scalaXTrend3Orizontal/(maxValue));
  */
  xRadarModRadarRegulator = xrp2;
  yRadarModRadarRegulator = rp_val1;



  if(afisareAvioane){
      //desenare fum
      if(selectorZi > orizont_trend)
          for(let zona=0; zona<vectoriDateZone.length; zona++){
              if(zona == nrArie) continue;
              //if zona == nr Arie - coloreaza fum diferit
              if(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi]){
                  //for (let i = (selectorZi - 255); i < selectorZi; i++){
                      //nuantar = (255 - (( i + 160 - selectorZi) % 255));
                    for (let i = (selectorZi - 60); i < selectorZi; i++){
                      if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[41].arie){
                      //for (let i = (selectorZi - 120); i < selectorZi; i++){
                        //transp = 0.0 + i / selectorZi;
                        //transp = 0 + i/selectorZi *100;
                        //transp = 0.1 + i / selectorZi / 2;

                        transp = 0.3 + i / selectorZi / 1.4;

                        //nuantab = 70;
                        //nuantar = 20;
                        //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                        //rosu
                        //ctx.fillStyle = "hsla(10,70%,40%," + transp + ")";
                        ctx.fillStyle = "hsla(30,60%,90%," + transp + ")";
                      }
                      /*
                      else if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[40].arie){
                      //for (let i = (selectorZi - 120); i < selectorZi; i++){
                        //transp = 0.0 + i / selectorZi;
                        //transp = 0 + i/selectorZi *100;
                        transp = 0.2 + i / selectorZi;
                        //nuantab = 70;
                        //nuantar = 20;
                        //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                        //galben
                        ctx.fillStyle = "hsla(40,80%,55%," + transp + ")";
                      }
                      */

                      /*
                      else if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[39].arie){
                      //for (let i = (selectorZi - 120); i < selectorZi; i++){
                        //transp = 0.0 + i / selectorZi;
                        //transp = 0 + i/selectorZi *100;
                        transp = 0 + i / selectorZi;
                        //nuantab = 70;
                        //nuantar = 20;
                        //nuantag = (255 - (( i + 160 - selectorZi) % 255));
                        ctx.fillStyle = "hsla(210,70%,60%," + transp + ")";
                      }*/
                      else{
                        nuantar = (255 - (( i + 90 - selectorZi) % 255));
                        nuantag = nuantar;
                        nuantab = nuantar;
                        transp = 0.0 + i / (selectorZi) / 10;
                        ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";
                      }

                      ctx.beginPath();
                      ctx.arc(vectoriDateZone[zona].vectorXAvionRegulator[i] + xRadarModRadarRegulator, vectoriDateZone[zona].vectorYAvionRegulator[i]/scalaRadarYRegulator + yRadarModRadarRegulator , razaFumRegulator * (1 + 5 * (selectorZi-i)/selectorZi) , 0, 2 * Math.PI);
                      ctx.closePath();
                      ctx.fill();

                  }
              }
          }




      ctx.lineWidth = 2;

      //desenare fum zona Selectata
      if(nrArie != 43){
        if(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi]){
            for (let i = (selectorZi - 120); i < selectorZi; i++){

                transp = 0.0 + i / selectorZi;
                nuantab = (255 - (( i + 160 - selectorZi) % 255));
                nuantar = 20;
                nuantag = 70;

                ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";

                ctx.beginPath();
                ctx.arc(vectoriDateZone[nrArie].vectorXAvionRegulator[i] + xRadarModRadarRegulator, vectoriDateZone[nrArie].vectorYAvionRegulator[i]/scalaRadarYRegulator + yRadarModRadarRegulator , razaFumRegulator * (1 + 4 * (selectorZi-i)/selectorZi), 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();

            }
        }
      }


      //desenare Avion pe radar
      if(selectorZi > orizont_trend)
          for(let zona=0; zona<vectoriDateZone.length; zona++){
              if(zona == nrArie) {
                continue;
              }

              //Desenare Vector Avion (R, DR)
              //

              ctx.lineWidth = 1;
              if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
                ctx.fillStyle = culoareScadereVectorAvion;//"#333";
                ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
              }
              else{
                ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
                ctx.strokeStyle = culoareCrestereVectorAvion;
              }



              //xAvion = ((vectorXAvionRegulatorToate[selectorZi])*scalaXAvionRadarToateRegulator + xRadarModRadarRegulator);
              //yAvion = (vectorYAvionRegulatorToate[selectorZi])*scalaYAvionRadarToateRegulator / scalaRadarYRegulator + yRadarModRadarRegulator;
              //ctx.moveTo(xAvion,yAvion);
              //ctx.lineTo(xAvion + vectorDRToate[selectorZi] * 10000/2,
                //yAvion - (vector_rToate[selectorZi]-1)*1000/2);
              //ctx.stroke();

              //desenare segment vector
              if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[41].arie){
                ctx.lineWidth = 2;
              }
              ctx.beginPath();
              ctx.closePath();


              scalareVectoriAvioaneRegulator = 4;
              ctx.moveTo(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator,
                  vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator);
              ctx.lineTo(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator +
                  + vectoriDateZone[zona].vectorDR[selectorZi] * 10000/scalareVectoriAvioaneRegulator,
                vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator -
                (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/scalareVectoriAvioaneRegulator
              );
              ctx.stroke();

              ctx.beginPath();
              ctx.closePath();

              //desenare capat vector
              //ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.arc(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator +
                vectoriDateZone[zona].vectorDR[selectorZi] * 10000/scalareVectoriAvioaneRegulator,
                vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator -
                (vectoriDateZone[zona].vector_r[selectorZi]-1)*1000/scalareVectoriAvioaneRegulator,
                1.2, 0, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();

              //desenare avion partea 1
              /*
              if(depasireLimitaStabilitate){
                  ctx.lineWidth = 1;
              }
              else{
                  ctx.lineWidth = 2;
              }*/

              //ctx.lineWidth = 1;

              if(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi]> 0){
                  ctx.fillStyle = culoareCrestereCercAvion;
              }
              else{
                  ctx.fillStyle = culoareScadereCercAvion;
              }

              if(vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi] > limita_max_crestere_medie){
                  ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;
                  ctx.strokeStyle = "black";
                  //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
              }

              if(vectoriDateZone[zona].vectorDeltaZiCurenta[selectorZi] > limita_max_crestere_delta){
                  ctx.fillStyle = "rgba(195, 34, 34, 0.8)";//culoareRosu;
                  //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
              }


              if(zona == nrArie){
                  ctx.fillStyle = culoareLinieGraficP;
                  ctx.strokeStyle = "navy";
              }
              else{
                  //ctx.strokeStyle = "white";

                  if(vectoriDateZone[zona].vectorDR[selectorZi] < 0){
                  //if(vectoriDateZone[zona].vector_r[selectorZi] < 1.0){
                    //ctx.fillStyle = culoareScadereVectorAvion;//"#333";
                    ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
                  }
                  else{
                    //ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
                    ctx.strokeStyle = culoareCrestereVectorAvion;
                  }
              }

              //ctx.lineWidth = 1;

              /*ctx.beginPath()
              ctx.fill();
              ctx.stroke();
              ctx.closePath();*/

              //ctx.closePath();
              ctx.beginPath();
              if(vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator > 0 ){
                  if(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator < lungimeSuprafataGrafica ){
                      ctx.arc(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator, vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator ,
                        dimensiuneAvionRegulator * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvionRegulator , 0, 2 * Math.PI);
                  }
                  else{
                      //evitare iesire in lateral dreapta
                      ctx.arc(lungimeSuprafataGrafica, vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator ,
                        dimensiuneAvionRegulator * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvionRegulator, 0, 2 * Math.PI);
                  }
              }
              else{
                  //evitare iesire margine - ramas margine
                  ctx.arc(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator, 0 ,
                    dimensiuneAvionRegulator * 1.3 + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvionRegulator , 0, 2 * Math.PI);
              }

              ctx.closePath();
              ctx.fill();
              ctx.stroke();


              ctx.beginPath();
              ctx.closePath();

              ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
              if(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] > 0){
                  ctx.fillStyle = culoareCrestereMaro;
              }
              else{
                  ctx.fillStyle = culoareScadere;
              }


              if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[41].arie){
                ctx.fillStyle = "hsla(30,60%,90%," + 0.9 + ")";
              }

              nume_zona = numeArii.data.value[zona].substring(0,3);
              if(zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[41].arie ||
                zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[40].arie ||
                zona == clasamentAeronaveZileSortatProiectie[clasamentAeronaveZileSortatProiectie.length-1].clasament[39].arie){
                  if(vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator > 3 ){
                      if(vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator < lungimeSuprafataGrafica -3 ){
                          ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator - 14, vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator - 10);

                      }
                      else{
                          //iesire lateral dreapta
                          ctx.fillText(nume_zona, lungimeSuprafataGrafica - 20, vectoriDateZone[zona].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator - 10);
                      }
                  }
                  else{
                    //iesire margine
                      ctx.fillText(nume_zona, vectoriDateZone[zona].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator - 14, 22);
                  }
            }


          }


      //desenare avion selectat si vector avion
      if(nrArie!=43){

        //Desenare Vector Avion (R, DR)
        //

        ctx.lineWidth = 1;
        ctx.strokeStyle = "hsla(210,70%,40%, 0.9)";//"navy";
        ctx.fillStyle = "hsla(210,70%,60%, 0.9)";//"navy";

        //desenare segment vector
        ctx.beginPath();
        ctx.closePath();

        ctx.moveTo(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator,
            vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator);
        ctx.lineTo(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator +
            + vectoriDateZone[nrArie].vectorDR[selectorZi] * 10000/scalareVectoriAvioaneRegulator,
          vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator -
          (vectoriDateZone[nrArie].vector_r[selectorZi]-1)*1000/scalareVectoriAvioaneRegulator
        );
        ctx.stroke();

        ctx.beginPath();
        ctx.closePath();

        //desenare capat vector
        ctx.lineWidth = 2;
        ctx.fillStyle = culoareLinieGraficP;

        ctx.beginPath();
        ctx.arc(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator +
          vectoriDateZone[nrArie].vectorDR[selectorZi] * 10000/scalareVectoriAvioaneRegulator,
          vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator -
          (vectoriDateZone[nrArie].vector_r[selectorZi]-1)*1000/scalareVectoriAvioaneRegulator,
          2.2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        //desenare avion
        ctx.lineWidth = 1;
        ctx.fillStyle = culoareLinieGraficP;
        ctx.strokeStyle = "hsla(210,70%,40%, 0.9)";//"navy";

        ctx.beginPath();
        if(vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator> 0 ){
            ctx.arc(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator, vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator ,
              dimensiuneAvionRegulator * 1.3 + vectoriDateZone[nrArie].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvionRegulator, 0, 2 * Math.PI);
        }
        else{
            //evitare iesire margine - ramas margine
            ctx.arc(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator, 0 ,
              dimensiuneAvionRegulator*1.3 + vectoriDateZone[nrArie].vectorMedieZiCurenta[selectorZi]/crestereDimensiuneAvionRegulator, 0, 2 * Math.PI);
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
        /*if(vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] > 0){
            ctx.fillStyle = culoareCrestereMaro;
        }
        else{
            ctx.fillStyle = culoareScadere;
        }*/


        nume_zona = numeArii.data.value[nrArie].substring(0,3);
        ctx.strokeStyle = "navy";
        ctx.fillStyle = "hsla(210,70%,90%, 1.0)";//"navy";
        ctx.fillText(nume_zona, vectoriDateZone[nrArie].vectorXAvionRegulator[selectorZi] + xRadarModRadarRegulator - 14, vectoriDateZone[nrArie].vectorYAvionRegulator[selectorZi]/scalaRadarYRegulator + yRadarModRadarRegulator - 6);

      }
  }


  //desenare Fum Toate selectat
  //if(nrArie == 43){
  if(false){
      xAvion = ((vectorXAvionRegulatorToate[selectorZi])*scalaXAvionRadarToateRegulator + xRadarModRadarRegulator);
      yAvion = (vectorYAvionRegulatorToate[selectorZi])*scalaYAvionRadarToateRegulator / scalaRadarYRegulator + yRadarModRadarRegulator;

      //desenare fum peste total
      if(vectorXAvionRegulatorToate[selectorZi]){
          for (let i = (selectorZi - 45); i < selectorZi; i++){

              /*
              transp = 0.0 + i / selectorZi;
              nuantab = (255 - (( i + 160 - selectorZi) % 255));
              nuantar = 20;
              nuantag = 70;

              ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";*/

              transp = 0.2 + i / selectorZi;
              //nuantab = 70;
              //nuantar = 20;
              //nuantag = (255 - (( i + 160 - selectorZi) % 255));
              //galben
              ctx.fillStyle = "hsla(40,80%,55%," + transp + ")";


              ctx.beginPath();
              ctx.arc(((vectorXAvionRegulatorToate[i])*scalaXAvionRadarToateRegulator + xRadarModRadarRegulator), (((vectorYAvionRegulatorToate[i])*scalaYAvionRadarToateRegulator)/scalaRadarYRegulator + yRadarModRadarRegulator) , razaFumRegulator * (1 + 4 * (selectorZi-i)/selectorZi) , 0, 2 * Math.PI);
              ctx.closePath();
              ctx.fill();

          }
      }


      //Desenare Avion Toate
      //if(nrArie == 43){
      //if(true){
          //Desenare Vector Avion (R, DR)
          //

          //ctx.lineWidth = 1;
          //ctx.strokeStyle = "navy";
          //ctx.fillStyle = "navy";

          ctx.lineWidth = 3;
          if(vectorDRToate[selectorZi] < 0){
            ctx.fillStyle = culoareScadereVectorAvion;//"#333";
            ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
          }
          else{
            ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
            ctx.strokeStyle = culoareCrestereVectorAvion;
          }

          //desenare segment vector
          ctx.beginPath();
          ctx.closePath();

          ctx.moveTo(xAvion,yAvion);

          ctx.lineTo(xAvion + vectorDRToate[selectorZi] * 10000/2,
            yAvion - (vector_rToate[selectorZi]-1)*1000/2);
          ctx.stroke();

          ctx.beginPath();
          ctx.closePath();

          //desenare capat vector
          ctx.lineWidth = 2;
          //ctx.fillStyle = culoareLinieGraficP;

          ctx.beginPath();
          ctx.arc(xAvion + vectorDRToate[selectorZi] * 10000/2,
            yAvion - (vector_rToate[selectorZi]-1)*1000/2,
            razaCapatVectorRegulator, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          //desenare avion partea 1

          /*ctx.lineWidth = 2;

          ctx.fillStyle = "lightyellow";//culoareLinieGraficP;
          ctx.strokeStyle = "navy";

          if(valZiCur > 900){
              ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;//"#edabab";
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }*/

          //culori avion Toate Regulator
          ctx.lineWidth = 2;

          if(vectorXAvionRegulatorToate[selectorZi]> 0){
              ctx.fillStyle = culoareCrestereCercAvion;
          }
          else{
              ctx.fillStyle = culoareScadereCercAvion;
          }

          //if(vectorMedieZiCurenta[selectorZi] > limita_max_crestere_medie){

          /* //CULOARE ROZ daca se depaseste limita
          if(vector_valZiCurentaToate[selectorZi] > 900){
              ctx.fillStyle = "rgba(228, 180, 180, 0.8)"; //culoareRoz;
              ctx.strokeStyle = "black";
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          }*/

          //if(vectorDeltaZiCurenta[selectorZi] > limita_max_crestere_delta){
              //ctx.fillStyle = "rgba(195, 34, 34, 0.8)";//culoareRosu;
              //console.log("zona " + zona + " medieZicurenta " + vectoriDateZone[zona].vectorMedieZiCurenta[selectorZi]);
          //}


          if(vectorDRToate[selectorZi] < 0){
          //if(vectoriDateZone[zona].vector_r[selectorZi] < 1.0){
            //ctx.fillStyle = culoareScadereVectorAvion;//"#333";
            ctx.strokeStyle = culoareScadereVectorAvion;//"rgba(51, 51, 51, 0.6)"; //"#333";
          }
          else{
            //ctx.fillStyle = culoareCrestereVectorAvion;//"#333";
            ctx.strokeStyle = culoareCrestereVectorAvion;
          }

          ctx.beginPath();
          if(yAvion > 0 ){
              ctx.arc(xAvion, yAvion ,
                dimensiuneAvionRegulator * scalareDimensiuneAvionRegulatorToate + vector_valZiCurentaToate[selectorZi]/(crestereDimensiuneAvionRegulator*4), 0, 2 * Math.PI);
          }
          else{
              //evitare iesire margine - ramas margine
              ctx.arc(xAvion, 0 ,
                dimensiuneAvionRegulator * scalareDimensiuneAvionRegulatorToate + vector_valZiCurentaToate[selectorZi]/(crestereDimensiuneAvionRegulator*4), 0, 2 * Math.PI);
          }

          ctx.closePath();
          ctx.fill();
          ctx.stroke();

          ctx.font = "bold italic 12px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillStyle = "navy";
          if(vectorXAvionRegulatorToate[selectorZi] > 0){
              ctx.fillStyle = culoareCrestereMaro;
          }
          else{
              ctx.fillStyle = culoareScadere;
          }
          nume_zona = "E42";
          if(yAvion > 0 ){
              ctx.fillText(nume_zona, xAvion - 12, yAvion - 10);
          }
          else{
              ctx.fillText(nume_zona, xAvion - 12, + 24);
          }
          //console.log(vectorXAvion[selectorZi] + " " + vectorYAvion[selectorZi]);
          //}
  }


}





function desenareRadar(){

  if(yEntitate - raza_pop - razaOrigineRadar > yRadar){
      depasireLimitaStabilitate = true;
  }
  else{
      depasireLimitaStabilitate = false;
  }


  if(depasireLimitaStabilitate ){
      culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.2)";
      culoareRadarLinieDetectieCadran4Transparent = "rgba(38,145,31,0.2)";
      ctx.fillStyle = culoareRadarCercuri;
      ctx.strokeStyle = culoareRadarCercuri;//"#ffbb33";//culoareGraficVectorR;
  }
  else{
      culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.7)";
      culoareRadarLinieDetectieCadran4Transparent = "rgba(38,145,31,0.7)";
      ctx.fillStyle = culoareRadarCercuri;
      ctx.strokeStyle = "white";//"#ffbb33";//culoareGraficVectorR;
  }

  ctx.lineWidth = 2;
  //ctx.fillStyle = culoareRadarCercuri;
  //ctx.strokeStyle = culoareRadarCercuri;//"#ffbb33";//culoareGraficVectorR;

  //Cerc 1 exterior
  ctx.beginPath();
  ctx.arc(xRadar, yRadar, razaCerc1, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.stroke();



  //desenare cadran 4
  ctx.fillStyle = culoareRadarLinieDetectieCadran4Transparent;
  ctx.beginPath();
  ctx.moveTo(xRadar,yRadar);
  //ctx.arc(xRadar, yRadar, razaCerc1, Math.PI, Math.PI * 3/2);
  ctx.arc(xRadar, yRadar, razaCerc1, Math.PI/2, Math.PI);
  ctx.closePath();
  ctx.fill();

  //desenare cadran 2
  ctx.fillStyle = culoareRadarLinieDetectieCadran1Transparent;
  ctx.beginPath();
  ctx.moveTo(xRadar,yRadar);
  ctx.arc(xRadar, yRadar, razaCerc1, 0, Math.PI * 1/2);
  ctx.closePath();
  ctx.fill();

  //Cerc 2 mijloc
  ctx.beginPath();
  ctx.arc(xRadar, yRadar, razaCerc2, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.stroke();

  //Desenare Axe radar
  //ctx.strokeStyle = culoareRadarCercuri;
  ctx.moveTo(xRadar - razaCerc1, yRadar);
  ctx.lineTo(xRadar + razaCerc1, yRadar);
  ctx.stroke();

  ctx.moveTo(xRadar, yRadar - razaCerc1);
  ctx.lineTo(xRadar, yRadar + razaCerc1);
  ctx.stroke();

  //Cerc 3 interior
  //ctx.strokeStyle = "#4d4d4d";
  //ctx.fillStyle = "#4d4d4d";
  if(depasireLimitaStabilitate ){
      ctx.strokeStyle = "#4d4d4d";
      ctx.fillStyle = "#4d4d4d";

  }
  else {
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
  }

  ctx.beginPath();
  ctx.arc(xRadar, yRadar, razaCerc3, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.fill();
  ctx.stroke();
  //ctx.beginPath();
  //ctx.closePath();


  //desenare numar cadran
  ctx.textAlign = "end";
  ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";


  //verde daca avion in cadran 2
  if(vectorXAvion[selectorZi] > 0){
      ctx.fillStyle = culoareTextZi;
  }
  else{
      ctx.fillStyle = culoareScadere;
  }

  if(depasireLimitaStabilitate == false){
      ctx.font = "14px bold italic Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = "white";//"rgba(38,145,31,0.9)";
      ctx.strokeStyle = "white";//"rgba(38,145,31,0.9)";
      ctx.strokeText("2", xRadar - 5, yRadar - 7);
  }
  //ctx.fillStyle = culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
  ctx.fillText("2", xRadar - 5, yRadar - 7);


  //Desenare Pista Aeroport
  ctx.fillStyle = "grey";//culoare_scadere_entitate;
  ctx.strokeStyle = "#4d4d4d";//"white";
  //ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineWidth = curbura;
  if(depasireLimitaStabilitate ){
      ctx.strokeStyle = "#4d4d4d";
      //ctx.fillStyle = "#4d4d4d";

  }
  else {
      //ctx.fillStyle = "white";
      ctx.strokeStyle = "white";
      ctx.fillStyle = "#e96363";
  }
  ctx.strokeRect(rectX+(curbura/2), rectY+(curbura/2), pistaLungime-curbura, pistaLatime-curbura);
  ctx.fillRect(rectX+(curbura/2), rectY+(curbura/2), pistaLungime-curbura, pistaLatime-curbura);

  //ctx.beginPath();
  //ctx.arc(xRadar - razaCerc1, yRadar, razaOrigineAeroport, 0, 2 * Math.PI);
  //ctx.closePath();
  //ctx.fill();
  //ctx.stroke();

  //Desenare linie punctata Pista
  ctx.beginPath();
  ctx.closePath();

  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";

  ctx.setLineDash([3,5]);
  ctx.moveTo(xRadar - razaCerc1, yRadar);
  ctx.lineTo(xRadar, yRadar);
  ctx.stroke();
  ctx.setLineDash([]);

  //Desenare Origine Radar
  if(depasireLimitaStabilitate ){
      ctx.fillStyle = "white";
      ctx.strokeStyle = "white";

  }
  else {
      ctx.fillStyle = "#e96363";//"white";
      ctx.strokeStyle = "#e96363";//"white";
  }

  if(pulsatie_2){
      ctx.beginPath();
      ctx.arc(xRadar, yRadar, razaOrigineRadar, 0, 2 * Math.PI);
      ctx.closePath();
      if(culoare_pulsatie == culoareMaro){
          ctx.fillStyle = culoareMaro;//culoareCrestereMaro;
      }
      else {
          ctx.fillStyle = culoareVerde;//culoareScadere;
      }
      /*
      if(zile_evenimente_actiuni[selectorZi] > -1){
          if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
              ctx.fillStyle = culoareMaro;//culoareCrestereMaro;
          }
          else{
              ctx.fillStyle = culoareVerde;//culoareScadere;
          }
      }*/
  }
  else{
    ctx.beginPath();
    ctx.arc(xRadar, yRadar, razaOrigineRadar, 0, 2 * Math.PI);
    ctx.closePath();
  }
  ctx.fill();

  ctx.beginPath();
  ctx.closePath();


  //Desenare Vant


  ctx.textAlign = "center";
  if(pulsatie_2){
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalp, yStalp + lungimeStalp + 6);
        ctx.fillText(" \u21E8", xStalp, yStalp + lungimeStalp + 6);
    }
    else {
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalp, yStalp + lungimeStalp + 6);
        ctx.fillText("\u21E6 ", xStalp, yStalp + lungimeStalp + 6);
    }
  }
  else {
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalp, yStalp + lungimeStalp + 6);
    }
    else{
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalp, yStalp + lungimeStalp + 6);
    }
  }


  //Desenare Soseta Vant
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "white";//"lightgrey";//"#4d4d4d";
  ctx.fillStyle = "#4d4d4d";


  //desenare stalp soseta
  /*
  ctx.moveTo(xStalp, yStalp);
  ctx.lineTo(xStalp, yStalp - lungimeStalp);
  ctx.stroke();

  ctx.beginPath();
  ctx.closePath();*/

  //vectorXAvion[i] = xRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
  //vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);
  xsos = vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);

  ctx.lineWidth = 3;

  if(vector_r[selectorZi] > 1){
      ctx.strokeStyle = culoareCrestereMaro;
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.strokeStyle = culoareScadere;
      ctx.fillStyle = culoareScadere;
  }


  /*
  if(selectorZi <= (orizont_regresie + orizont_arie)){
    ctx.strokeStyle = culoareCrestereMaro;
    ctx.fillStyle = culoareCrestereMaro;
    xsos = data_3[selectorZi]/2*1000 / scalaPozitieXAvion * 1.5 * 90;
    //console.log(xsos);
    xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
    ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);
  }*/


  if(selectorZi > orizont_regresie + orizont_arie){
      //desenare cerc capat pendul
      //ctx.fillStyle = "white";
      //ctx.fillStyle = "#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalp + xsoseta, yStalp - ysoseta, 3, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.closePath();

      //desenare soseta
      ctx.moveTo(xStalp, yStalp);
      ctx.lineTo(xStalp + xsoseta, yStalp - ysoseta);
      ctx.stroke();


      ctx.beginPath();
      ctx.closePath();

      //desenare cerc baza pendul
      ctx.fillStyle = "white";//"#4d4d4d";
      ctx.beginPath();
      ctx.arc(xStalp, yStalp, 2, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
  }

  //console.log("xsoseta: " + xsoseta);
  //console.log("ysoseta: " + ysoseta);

  //Desenare Raza Radar
  radianiZi = selectorZi * (2 * Math.PI) / 360 * vitezaRadar; //360/8 = 45
  //grade = selectorZi * vitezaRadar;
  //console.log(grade);



  //if(Math.cos(radianiZi))

  /*
  grade = selectorZi % (360 / vitezaRadar);
  //console.log("grade: " + grade);
  //console.log(cadranStart + " " + cadranFinal);
  //console.log(radianiZi);
  if(grade > cadranStart && grade < cadranFinal ){
     //console.log("cadranul 4");
  }*/

  ctx.fillStyle = culoareRadarLinieDetectie;
  ctx.beginPath();
  ctx.moveTo(xRadar, yRadar + 0 );
  ctx.arc(xRadar, yRadar, razaCerc1, radianiZi, radianiZi + Math.PI/6);

  if(pulsatie_2){
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = culoareRadarLinieDetectieCrestereTransparent;//culoareMaro;//culoareCrestereMaro;
    }
    else {
        ctx.fillStyle = culoareRadarLinieDetectieScadereTransparent;//culoareVerde;//culoareScadere;
    }
  }

  ctx.closePath();
  ctx.fill();


  //Desenare traiectorie Avion
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  //ctx.fillStyle = culoareTraiectorieAvionRadar;
  //ctx.strokeStyle = culoareTraiectorieAvionRadar;

  if(vectorXAvion[selectorZi] + xRadar){
      for (let i = (selectorZi - 255); i < selectorZi; i++){
        nuantar = (255 - (( i + 160 - selectorZi) % 255));
        nuantag = nuantar;
        nuantab = nuantar/2;
        transp = 0.0 + i / selectorZi / 2;
        ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";

        ctx.beginPath();
        ctx.arc(vectorXAvion[i] + xRadar, vectorYAvion[i] +yRadar , 1 * (1 + 1 * (selectorZi-i)/selectorZi) + 1.0 * (medieCumulativ[i]/scalaDimensiuneAvion), 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
      }
  }


  //caclul parametrii desenare pulsatie si dimensiune avion
  if(depasireLimitaStabilitate){
      dimensiuneAvion = razaPunctAvionMin + medieCumulativ[selectorZi]/scalaDimensiuneAvion;
  }
  else{
      dimensiuneAvion = razaPunctAvionMin + medieCumulativ[selectorZi]/scalaDimensiuneAvion + 1;
  }


  //desenare pulsatie detectie pe radar
  if(vectorXAvion[selectorZi] + xRadar){
      if((- vectorYAvion[selectorZi]) < razaCerc1 && medieCumulativ[selectorZi] < nivelMaxAfisatRezervor){
          cosAvion = (vectorXAvion[selectorZi])/razaCerc1;
          sinAvion = (vectorYAvion[selectorZi])/razaCerc1;

          distCos = Math.cos(radianiZi + Math.PI/6) - cosAvion;
          distSin = Math.sin(radianiZi + Math.PI/6) - sinAvion;
          dist1 = Math.sqrt(Math.pow(distCos, 2) + Math.pow(distSin, 2));

          distCos = Math.cos(radianiZi + 0) - cosAvion;
          distSin = Math.sin(radianiZi + 0) - sinAvion;
          dist2 = Math.sqrt(Math.pow(distCos, 2) + Math.pow(distSin, 2));

          //console.log("d1: " + dist1);
          //console.log("d2: " + dist2);

          if(dist1 < 0.9 && dist2 < 0.8){
              //console.log("detectie");
              if(pulsatie_radar == 0){
                  pulsatie_radar = temporizare_pulsatie_radar;
                  pulsatie_radar_x = vectorXAvion[selectorZi] + xRadar;
                  pulsatie_radar_y = vectorYAvion[selectorZi] + yRadar;
              }
          }
      }
  }

  ctx.lineWidth = 2;
  if(pulsatie_radar > 0){
      ctx.fillStyle = "rgba(255,255,255," + (0.2 + 0.8 - 0.8 * (temporizare_pulsatie_radar-pulsatie_radar)/temporizare_pulsatie_radar) + ")";
      pulsatie_radar--;
      ctx.beginPath();
      ctx.arc(pulsatie_radar_x, pulsatie_radar_y , razaPunctAvion + (temporizare_pulsatie_radar - pulsatie_radar)/temporizare_pulsatie_radar * razaPunctAvion, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      if(pulsatie_radar > temporizare_pulsatie_radar/3)
          ctx.stroke();
  }

  //desenare Avion pe radar

  //desenare avion partea 1
  if(depasireLimitaStabilitate){
      ctx.lineWidth = 1;
  }
  else{
      ctx.lineWidth = 2;
  }

  if(vectorXAvion[selectorZi] > 0){
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.fillStyle = culoareScadere;
  }
  ctx.strokeStyle = "white";

  ctx.beginPath();
  if(vectorYAvion[selectorZi] + yRadar > 0 ){
      ctx.arc(vectorXAvion[selectorZi] + xRadar, vectorYAvion[selectorZi] + yRadar , dimensiuneAvion, 0, 2 * Math.PI);
  }
  else{
      //evitare iesire margine - ramas margine
      ctx.arc(vectorXAvion[selectorZi] + xRadar, 0 , dimensiuneAvion, 0, 2 * Math.PI);
  }

  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  //console.log(vectorXAvion[selectorZi] + " " + vectorYAvion[selectorZi]);

}

function desenareNivelMagnificareGrafice(){
    ctx.textAlign = "end";
    ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
    ctx.fillText("\u2222:           ", xMagnificareGrafice, yMagnificareGrafice);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
    ctx.fillText("" + Math.round(100 + scala_grafic_2 * 100 * maxValueGrafic2/1400)+ "%", xMagnificareGrafice, yMagnificareGrafice);

    ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("\u2222:         ", xMagnificareGrafice2, yMagnificareGrafice2);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
    ctx.fillText("" + Math.round(100 + maxValue/25 * 100)+ "%", xMagnificareGrafice2, yMagnificareGrafice2);
}

function desenareNivelMagnificareRadar(){
    ctx.textAlign = "start";
    ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
    ctx.fillText("\u2222:         ", xScalaRadar, yScalaRadar);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
    ctx.fillText("" + Math.floor(scalaRadarY*100)/100*100+ "%", xScalaRadar + 18, yScalaRadar);

    /*
    ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("\u2222:         ", xMagnificareGrafice2, yMagnificareGrafice2);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
    ctx.fillText("" + Math.round(100 + maxValue/25 * 100)+ "%", xMagnificareGrafice2, yMagnificareGrafice2);
    */
}

function desenareTextArieSelectata(){
    ctx.textAlign = "end";
    //ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
    ctx.fillText(textArieSelectata, xMagnificareGrafice, yMagnificareGrafice - 32);
}

function desenareGraficRadar(){
    ctx = suprafataGrafica.context;

    desenareEntitateModRadar();
    desenareRadarModRadar();

    desenareZiValoareTrenduri()
    desenareEvenimente();
    desenareNivelMagnificareRadar();
}

function desenareGraficeTrenduri(){


  ctx = suprafataGrafica.context;

  desenareEntitate();
  desenareEvenimente();
  desenareNivelMagnificareGrafice();
  desenareTextArieSelectata();


  //desenare linie referinta Grafic trenduri 1
  //nivel apa
  ctx.fillStyle = culoareLinieReferintaGrafic;
  ctx.fillRect(10, yGrafic_1, lungimeSuprafataGrafica-20, - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue));

  //desenare p+

  //if data_3 value is defined
  if(data_3[selectorZi]){
    ratap_2 = "" + Math.floor(data_3[selectorZi]*1000)/10 + "%";
  }
  else{
    //else take last available value
    ratap_2 = "" + Math.floor(data_3[data_3.length-1]*1000)/10 + "%";
  }

  //desenare dreptunghi ratap
  ctx.fillStyle = culoareLinieGraficP;
  ctx.fillRect(xMagnificareGrafice - 38, yMagnificareGrafice - 28, 38, 14);

  ctx.textAlign = "end";
  ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText(ratap_2, xMagnificareGrafice, yMagnificareGrafice - 16);

  //desenare valoare Ref_a
  ctx.textAlign = "end";
  ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
  ctx.fillText("Referința", lungimeSuprafataGrafica - 15, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 35);
  ctx.fillText("actuală", lungimeSuprafataGrafica - 15, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 21);
  if(data[selectorZi] > medieCumulativ[selectorZi]){
      ctx.fillText("" + Math.floor(medieCumulativ[selectorZi]*10)/10 + "... ", lungimeSuprafataGrafica - 25, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.textAlign = "center";
      ctx.fillStyle = culoareCrestereRosu;
      //ctx.fillStyle = culoareCrestereMaro;
      //if(pulsatie_3){
      if(medieCumulativ[selectorZi] > medieCumulativ[selectorZi-1]){
          ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
      }
      else{
          ctx.font = "16px Helvetica, system-ui, Arial, sans-serif";
      }
      ctx.fillText("\u25B2", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);
      ctx.font = "16px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoarePunctValoriGrafic_3;
      ctx.fillText("\u25BC", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) + 14);
  }
  else{
      ctx.fillText("" + Math.round(medieCumulativ[selectorZi]) + "... ", lungimeSuprafataGrafica - 25, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.textAlign = "center";
      ctx.font = "16px Helvetica, system-ui, Arial, sans-serif";
      //ctx.fillStyle = culoareScadere;
      ctx.fillStyle = culoarePunctValoriGrafic_3;
      ctx.fillText("\u25B2", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.fillStyle = culoareScadere;
      //if(pulsatie_3){
      if(medieCumulativ[selectorZi] < medieCumulativ[selectorZi-1]){
          ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillText("\u25BC", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) + 12);
      }
      else{
          ctx.fillText("\u25BC", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) + 14);
      }


  }




  //desenare linie abscisa grafic
  ctx.fillStyle = culoareLinieReferinta;
  //ctx.fillRect(10, yGrafic_1, lungimeSuprafataGrafica-15, yGrafic_1);
  //ctx.fillRect(10, yGrafic_2, lungimeSuprafataGrafica-15, yGrafic_2);


  ctx.beginPath();
  ctx.moveTo(10, yGrafic_1 + 0 );
  ctx.lineTo(lungimeSuprafataGrafica-10, yGrafic_1 + 0);
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, yGrafic_2 + 0 );
  ctx.lineTo(lungimeSuprafataGrafica-10, yGrafic_2 + 0);
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  ctx.closePath();
  ctx.stroke();

  desenareGraficPVectorR();
  desenarePuncteTrendMedie();
  desenareInfoExplicatii();

  //desenare proiectie
  //ziStart = data_2.length - (orizont_regresie + orizont_arie);
  if(selectorZi > (orizont_regresie + orizont_arie)){
      ziStart = selectorZi - (orizont_regresie);
      ziFinal = selectorZi + orizont_proiectie;
      if(selectorZi > ziStart){
          var y1_1 = 0;
          var x1_1 = 0;
          for (let i = ziStart; i <= ziFinal ; i++) {
              x1_1 = (i-1-selectorZiStart)*incrementX;
              //x1_2 = i*incrementX;

              //yp1 = coefA * Math.pow(bazaR, (i-1));
              yp1 = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (i-1));
              //yp2 = coefA * Math.pow(bazaR, i);

              //console.log("x1_1: " + x1_1 + "x1_2: " +x1_2);
              //console.log("yp1: " + yp1 + "yp2: " +yp2);

              //y1_1 = Math.round(yGrafic_1 - ((data[i-1]*scalaY_trend)/maxValue));
              y1_1 = Math.round(yGrafic_2 - ((yp1*scalaY_trend_2)/maxValueGrafic2));
              //y1_2 = Math.round(yGrafic_2 - ((yp2*scalaY_trend)/maxValue_2));

              //desenare linii conectare puncte valori grafic 1
              /*
              ctx.beginPath();
              ctx.moveTo(12 + x1_1, y1_1);
              ctx.lineTo(12 + x1_2, y1_2);
              ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
              ctx.lineWidth = 2;
              ctx.closePath();
              ctx.stroke();*/

              ctx.beginPath();
              ctx.arc(12 + x1_1, y1_1, 1, 0, 2 * Math.PI);
              //ctx.filStyle = "black";
              if(vector_r[selectorZi] >= 1){
                  ctx.strokeStyle = culoarePuncteProiectieCrestere;//culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
              }
              else{
                  ctx.strokeStyle = culoarePuncteProiectieScadere;//culoare_linie_trend;
              }

              ctx.lineWidth = 1;
              ctx.closePath();
              //ctx.fill();
              ctx.stroke();
          }

          //desenare valoare estimata
          ctx.textAlign = "start";
          ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillStyle = culoarePunctValoriGrafic_3;
          if(vector_r[selectorZi] >= 1){
              ctx.fillStyle = culoarePuncteProiectieCrestere;//culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
          }
          else{
              ctx.fillStyle = culoarePuncteProiectieScadere;//culoare_linie_trend;
          }
          ctx.fillText("" + Math.round(yp1), x1_1 + 19, y1_1 + 8);

          //desenare valoare bazaR
          ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillStyle = culoareTextCompensatorRosu;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
          if(vector_r[selectorZi] >= 1){
            ctx.fillStyle = culoareCrestereMaro;
            ctx.strokeStyle = culoarePuncteProiectieCrestere;
            if((Math.floor(vector_r[selectorZi]*10000))/10000 == 1){
                ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 + " (~1!)", x1_1 + 20, y1_1 + 24);
            }
            else{
                ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 + " (>1!)", x1_1 + 20, y1_1 + 24);
            }

          }
          else{
            ctx.fillStyle = culoareScadere;
            ctx.strokeStyle = culoarePuncteProiectieScadere;
            ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000, x1_1 + 20, y1_1 + 24);
          }

          //desenare punct valoare estimata
          ctx.beginPath();
          ctx.arc(12 + x1_1, y1_1, 4, 0, 2 * Math.PI);
          //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          //desenare valoare eroare totala sst2 (eroare regresie + eroare reziduala = varianta)
          //desenare deviatie standard
          ctx.fillStyle = culoare_linie_trend;
          //ctx.fillText("v=" + varianta2, x1_1 + 20, y1_1 + 38);
          //devstd
          //if(vector_E[selectorZi < 1000])
          ctx.fillText("E=\u00B1" + Math.floor(vector_E[selectorZi]) + " (" + Math.floor(vector_E_procentual[selectorZi]*100) + "%)", x1_1 + 20, y1_1 + 38);
          //}


          //desenare indicator abscisa
          ctx.beginPath();
          ctx.moveTo(12 + x1_1, yGrafic_2);
          ctx.lineTo(12 + x1_1, yGrafic_2 + 4);
          ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          ctx.textAlign = "center";
          ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
          //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
          ctx.fillText(ziFinal, 11 + x1_1 , yGrafic_2 + 21);

          //Afisare data - zi curenta
          data_zi_luna = data_data[ziFinal].split("/");
          zi = data_zi_luna[0];
          luna = data_luni[data_zi_luna[1]-1];
          ctx.fillText(zi + " " + luna, 11 + x1_1, yGrafic_2 + 35);
      }
  }


  //desenare LINIE TREND (pe orizont de timp) grafic 1 (jos)
  if(selectorZi > orizont_trend){
      index1 = selectorZi - orizont_trend;
      index2 = selectorZi - orizont_trend + Math.floor(procent_index2_orizont_trend * orizont_trend);
      //console.log(index2);
  }
  else{
      index1 = 0;
      index2 = 0;
  }

  x_val_1 = (index1 - selectorZiStart) * incrementX;
  y_val_1 = Math.round(yGrafic_1 - ((data[index1]*scalaY_trend_1)/maxValue));
  x_val_2 = (selectorZi - selectorZiStart) * incrementX;
  y_val_2 = Math.round(yGrafic_1 - ((data[selectorZi]*scalaY_trend_1)/maxValue));
  //console.log("1st line: " + y_val_1);

  if(data[index1]>=1){
      procent_variatie_1 = Math.floor((data[selectorZi] - data[index1]) / data[index1] * 100);
      crestere_variatie_1 = Math.floor(Math.round(data[selectorZi]/data[index1]*10))/10;
  }
  else{
      procent_variatie_1 = Math.floor((data[selectorZi] - data[index1]) / 1 * 100);
      crestere_variatie_1 = Math.floor(Math.round(data[selectorZi]/1*10))/10;
  }


  if(data_2[index1]>=1){
      procent_variatie_2 = Math.floor((data_2[selectorZi] - data_2[index1]) / data_2[index1] * 100);
      crestere_variatie_2 = Math.floor(Math.round(data_2[selectorZi]/data_2[index1]*10))/10;
  }
  else{
      procent_variatie_2 = Math.floor((data_2[selectorZi] - data_2[index1]) / 1 * 100);
      crestere_variatie_2 = Math.floor(Math.round(data_2[selectorZi]/1*10))/10;
  }



  if(index1 > 0){
      if (procent_variatie_1>0){
        eticheta_1 = " +" + procent_variatie_1 + "%";
      }
      else{
        eticheta_1 = " " + procent_variatie_1 + "%";
      }

      if (procent_variatie_2>0){
        eticheta_2 = " +" + procent_variatie_2 + "%\u21E7";
        culoareTrend = culoareCrestereRosu;//culoareTextCompensatorFill;
      }
      else{
        eticheta_2 = " " + procent_variatie_2 + "%\u21E9";
        culoareTrend = culoareScadere;
      }

      crestere_1 = crestere_variatie_1 + "x";
      crestere_2 = crestere_variatie_2 + "x";

  }
  else{
    eticheta_1 = "";
    eticheta_2 = "";
    crestere_1 = "";
    crestere_2 = "";
    //ratap_2 = "";
  }


  //punct LINIE TREND grafic 1 - capat dreapta
  ctx.beginPath();
  ctx.arc(12 + x_val_2, y_val_2, 4, 0, 2 * Math.PI);
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

  //punct LINIE TREND grafic 1 - capat stanga
  ctx.beginPath();
  ctx.arc(12 + x_val_1, y_val_1, 4, 0, 2 * Math.PI);
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

  //LINIE TREND - grafic 1 (jos)
  ctx.setLineDash([2, 1]);
  //ctx.beginPath();
  ctx.moveTo(12 + x_val_1, y_val_1);
  ctx.lineTo(12 + x_val_2, y_val_2);
  ctx.strokeStyle = culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();

  //INFO PUNCT Grafic 1 (jos) - dreapta
  ctx.textAlign = "start";
  ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";

  //desenare avion
  if(data[selectorZi] > limita_max_pierderi){
    ctx.fillStyle = culoareCrestereRosu;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoareCrestereRosu;//culoareTextCompensatorFill;
  }
  else{
    ctx.fillStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  }
  ctx.fillText("" + Math.round(data[selectorZi]) + "\u2708", x_val_2 + 20, y_val_2 - 6);


  //ctx.fillStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  //ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText(eticheta_1, x_val_2 + 20, y_val_2 + 24);
  ctx.fillText(crestere_1, x_val_2 + 20, y_val_2 + 10);

  //INFO PUNCT Grafic 1 (jos) - stanga
  ctx.textAlign = "start";
  ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.fillText("" + Math.round(data[index1]), x_val_1 + 20, y_val_1 - 6);


  //LINIE TREND Grafic 2(sus)
  xc2 = x_val_2;
  yc2 = y_val_2;

  y_val_1 = Math.round(yGrafic_2 - ((data_2[index1]*scalaY_trend_2)/maxValueGrafic2));
  y_val_2 = Math.round(yGrafic_2 - ((data_2[selectorZi]*scalaY_trend_2)/maxValueGrafic2));

  xc1 = (x_val_2 - x_val_1) * procent_index2_orizont_trend + x_val_1;
  yc1 = (y_val_2 - y_val_1) * procent_index2_orizont_trend + y_val_1;

  //console.log("2nd line: " + y_val_1);

  //desenare LINIE TREND GRAFIC 2(sus)
  //ctx.beginPath();
  ctx.setLineDash([2, 1]);
  ctx.moveTo(12 + x_val_1, y_val_1);
  ctx.lineTo(12 + x_val_2, y_val_2);
  ctx.strokeStyle = culoareTrend;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();

  //linie conectare grafic 2 cu grafic 1
  dist = Math.pow((xc2 - xc1),2) + Math.pow((yc2 - yc1),2);
  dist = Math.floor(5 * Math.sqrt(dist)/100);
  //console.log(dist);

  //desenare linie conectare grafic 2 cu grafic 1
  //ctx.setLineDash([]);
  ctx.setLineDash([3, 1 + dist]);

  //ctx.setLineDash([1, 10]);
  //ctx.beginPath();
  ctx.moveTo(12 + xc1, yc1);
  ctx.lineTo(12 + xc2, yc2);
  ctx.strokeStyle = culoareTrend;//culoarePunctValoriGrafic_3;//culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();





  //desenare proiectie punct (2) pe abscisa
  ctx.setLineDash([2,4]);
  ctx.moveTo(12 + x_val_2, y_val_2);
  ctx.lineTo(12 + x_val_2, yGrafic_2);
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  //desenare proiectie punct (1) pe abscisa
  ctx.setLineDash([2,4]);
  ctx.moveTo(12 + x_val_1, y_val_1);
  ctx.lineTo(12 + x_val_1, yGrafic_2);
  ctx.strokeStyle = culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);


  //punct linie conectare - mijloc
  ctx.beginPath();
  ctx.arc(12 + xc1, yc1, 4, 0, 2 * Math.PI);
  //ctx.moveTo(12 + xc1 - 1, yc1 + 1);
  //ctx.lineTo(12 + xc1 + 1, yc1 - 1);
  ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

  //INFO GRAFIC 2 sus
  //ctx.textAlign = "start";
  ctx.textAlign = "start";
  ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.fillText("" + Math.round(data_2[selectorZi]), x_val_2 + 20, y_val_2 - 6);
  ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText(crestere_2, x_val_2 + 20, y_val_2 + 10);
  ctx.fillStyle = culoareTrend;
  ctx.fillText(eticheta_2, x_val_2 + 20, y_val_2 + 24);

  if(selectorZi > orizont_trend){

    ctx.fillStyle = culoareLinieGraficP;
    ctx.fillRect(xLegendaDerivate + ident, yLegendaDerivate + 116, 50, 16);

    if(vector_r[selectorZi] >= 1){
        ctx.fillStyle = culoare_crestere_entitate;
    }
    else{
        ctx.fillStyle = culoare_scadere_entitate;
    }
    ctx.fillRect(xLegendaDerivate + ident + 52, yLegendaDerivate + 116, 50, 16);

    //desenare valoare vector_r (in procente %)
    //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";

    //Afisare data - zi precedenta - zi curenta
    data_zi_luna = data_data[selectorZi-1].split("/");
    zi = data_zi_luna[0];
    //luna = data_luni[data_zi_luna[1]-1];
    dataDeAfisat = zi + "-";
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    dataDeAfisat = dataDeAfisat + zi + " " + luna + ":";

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(dataDeAfisat, xLegendaDerivate, yLegendaDerivate + 42);

    //Afisare data - zi proiectie
    data_zi_luna = data_data[selectorZi + orizont_proiectie].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    dataDeAfisat = zi + " " + luna + ":";

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(dataDeAfisat, xLegendaDerivate, yLegendaDerivate + 112);


    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){
      ctx.fillStyle = culoareCrestereRosu;
      if((Math.floor(vector_r[selectorZi]*10000))/10000 == 1){
          ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 /*+ " (~1!)"*/, xLegendaDerivate + ident, yLegendaDerivate + 56);
      }
      else{
          ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 /*+ " (>1!)"*/, xLegendaDerivate + ident, yLegendaDerivate + 56);
      }

      ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoareCrestereRosu;
      text_r = "R=+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 70);
    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000, xLegendaDerivate + ident, yLegendaDerivate + 56);

      ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
      text_r = "R=" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 70);
    }
    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //desenare predictie zi urmatoare
    /*
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("Ziua " + (Math.round(selectorZi) + Math.round(1.0)) + ":", xLegendaDerivate, yLegendaDerivate + 74);
    */

    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){

      ctx.fillStyle = culoareCrestereRosu;
      ctx.fillText("dif=+" + Math.floor(valZiCur * (vector_r[selectorZi] - 1)*10)/10, xLegendaDerivate + ident, yLegendaDerivate + 84);

      text_zi_urmatoare = "" + Math.floor(valZiCur*10)/10 + "+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      //ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      //ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 112);

    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("dif=" + Math.floor(valZiCur * (vector_r[selectorZi] - 1)*10)/10, xLegendaDerivate + ident, yLegendaDerivate + 84);

      text_zi_urmatoare = "" + Math.floor(valZiCur*10)/10 + "" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";

    }

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 98);
    ctx.font = "italic 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("" + Math.floor(valZiCur * vector_r[selectorZi]), xLegendaDerivate + ident, yLegendaDerivate + 130);

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){
        //+
        ctx.fillText("+" + Math.round((yp1 - valZiCur * vector_r[selectorZi])), xLegendaDerivate + ident + 52, yLegendaDerivate + 130);
    }
    else{
        //- (fara semn)
        ctx.fillText("" + Math.round((yp1 - valZiCur * vector_r[selectorZi])), xLegendaDerivate + ident + 52, yLegendaDerivate + 130);
    }

    ctx.font = "italic 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = culoarePunctValoriGrafic_3;
    ctx.fillText("=" + Math.round(yp1) + "", xEntitate + 6, yLegendaDerivate + 130);


    //calcul derivate
    /*
    vr0 = vector_r[selectorZi-16];
    vr1 = vector_r[selectorZi-8];
    vr2 = vector_r[selectorZi];
    d1r1 = (vr1 - vr0)/8;
    d1r2 = (vr2 - vr1)/8;
    d2r2 = (d1r2 - d1r1)/8;*/
    d1r2 = vectorDR[selectorZi];
    d2r2 = vectorD2R[selectorZi];

    //derivata ordin 1 (viteza de crestere sau scadere)
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.textAlign = "start";
    ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(d1r2>0){
        ctx.fillStyle = culoareCrestereRosu;
        ctx.fillText("dR=+" + Math.floor(d1r2*100000)/1000 + "\u21E7", xLegendaDerivate, yLegendaDerivate + 151);
    }
    else {
        ctx.fillStyle = culoareScadere;
        ctx.fillText("dR=" + Math.floor(d1r2*10000)/100 + "\u21E9", xLegendaDerivate, yLegendaDerivate + 151);
    }
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //84, 126, 140

    //derivata ordin 2 (acceleratia - crestere sau scadere)
    ctx.fillStyle = culoarePunctValoriGrafic_3;
    if(d2r2>0){
        ctx.fillText("d\u00B2R=+" + Math.floor(d2r2*10000)/100 /*+ " ▲"*/, xLegendaDerivate, yLegendaDerivate + 165);
    }
    else{
        //if(d1r2<0)
          //ctx.fillStyle = culoareScadere;
        ctx.fillText("d\u00B2R=" + Math.floor(d2r2*10000)/100 /*+ "▼"*/, xLegendaDerivate, yLegendaDerivate + 165);
    }

  }

  //desenare valori grafice (grafic 1 jos, grafic 2 sus)
  //x_valoare = 0;
  for (let i = 0; i <= selectorZi; i++) {

      x_valoare = (i-selectorZiStart)*incrementX;
      //x_valoare += incrementX;
      y_valoare = Math.round(yGrafic_1 - ((data[i]*scalaY_trend_1)/maxValue));
      y_valoare_2 = Math.round(yGrafic_2 - ((data_2[i]*scalaY_trend_2)/maxValueGrafic2));

      //desenare linii conectare puncte grafic 2 sus
      if(i>0){
          //x1_valoare = (i-1)*incrementX;
          x1_valoare = x_valoare - incrementX;
          y1_valoare = Math.round(yGrafic_1 - ((data[i-1]*scalaY_trend_1)/maxValue));
          y1_valoare_2 = Math.round(yGrafic_2 - ((data_2[i-1]*scalaY_trend_2)/maxValueGrafic2));

          //desenare linii conectare puncte valori grafic 2 sus
          if(afisaretrend){
              ctx.beginPath();
              ctx.moveTo(12 + x1_valoare, y1_valoare_2 );
              ctx.lineTo(12 + x_valoare, y_valoare_2);
              if(nrArie==43){
                  if(data_2[i]>limita_regim_liniar_toate){
                    ctx.strokeStyle = culoareCrestereRosu;
                  }
                  else{
                      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
                  }
              }
              else{
                  if(data_2[i]>limita_regim_liniar_zona){
                    ctx.strokeStyle = culoareCrestereRosu;
                  }
                  else{
                      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
                  }
              }

              ctx.lineWidth = 2;
              ctx.closePath();
              ctx.stroke();
          }


          //desenare linii conectare puncte valori grafic 2

          ctx.beginPath();
          ctx.moveTo(12 + x1_valoare, y1_valoare);
          ctx.lineTo(12 + x_valoare, y_valoare);
          if(data[i]>limita_max_pierderi){
            ctx.strokeStyle = culoareCrestereRosu;
            ctx.lineWidth = 3;
          }
          else{
              ctx.strokeStyle = culoarePunctValoriGrafic;//culoarePunctValoriGrafic;
              ctx.lineWidth = 2;
          }

          //ctx.strokeStyle = culoarePunctValoriGrafic;//culoarePunctValoriGrafic;
          //ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();
      }

    }

    //Desenare numar punct (1)
    ctx.textAlign = "end";
    ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareNumarPunct;//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("(1)", 12 + x_val_1, y_val_1 - 8);

    //Desenare numar punct (2)
    ctx.textAlign = "end";
    ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareNumarPunct;//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("(2)", 12 + x_val_2, y_val_2 - 8);

    //punct linie grafic 2 - capat
    ctx.beginPath();
    //ctx.moveTo(12 + x_val_2 - 1, y_val_2 + 1);
    //ctx.lineTo(12 + x_val_2 + 1, y_val_2 - 1);
    ctx.arc(12 + x_val_2, y_val_2, 4, 0, 2 * Math.PI);
    ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    //punct linie grafic 2 - inceput - cerculet
    ctx.beginPath();
    ctx.arc(12 + x_val_1, y_val_1, 4, 0, 2 * Math.PI);
    ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();



    //INFO GRAFIC 2 sus
    //ctx.textAlign = "start";
    ctx.textAlign = "start";
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("" + Math.round(data_2[index1]), x_val_1 + 20, y_val_1 - 6);


    //capat dreapta
    //desenare indicator abscisa
    ctx.beginPath();
    ctx.moveTo(12 + x_valoare, yGrafic_2);
    ctx.lineTo(12 + x_valoare, yGrafic_2 + 4);
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(selectorZi, 12 + x_valoare, yGrafic_2 + 21);

    //Afisare data - zi curenta
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    ctx.fillText(zi + " " + luna, 12 + x_valoare, yGrafic_2 + 35);

    //desenare indicator Zi capat stanga Grafic 2 (sus)
    if(selectorZi > orizont_trend){
      //capat stanga
      //desenare indicator abscisa
      ctx.beginPath();
      ctx.moveTo(12 + x_val_1, yGrafic_2);
      ctx.lineTo(12 + x_val_1, yGrafic_2 + 4);
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText("Ziua " + index1, 12 + x_val_1, yGrafic_2 + 21);

      //Afisare data - start orizont de timp
      data_zi_luna = data_data[index1].split("/");
      zi = data_zi_luna[0];
      luna = data_luni[data_zi_luna[1]-1];
      ctx.fillText(zi + " " + luna, 12 + x_val_1, yGrafic_2 + 35);

      //ctx.setLineDash([]);
      //ctx.closePath();
      //ctx.stroke();
      //ctx.fill();

      //indicator abscisa
      //centru mijloc - index2
      //ctx.beginPath();
      ctx.moveTo(12 + xc1, yGrafic_2);
      ctx.lineTo(12 + xc1, yGrafic_2 + 4);
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
      ctx.lineWidth = 2;
      //ctx.closePath();
      ctx.stroke();


      ctx.textAlign = "center";
      ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText(index2, 12 + xc1, yGrafic_2 + 21);

    }

    //cerculet grafic vector r (in capat)
    if(selectorZi > (orizont_regresie + orizont_arie)){
      if(vector_r_normalizat[selectorZi] >= 0){
          ctx.strokeStyle = culoareCrestereMaro;//culoareTextCompensatorRosu;
          ctx.fillStyle = culoareCerculetRCrestere;

      }
      else {
          ctx.strokeStyle = culoareScadere;
          ctx.fillStyle = culoareCerculetRScadere;
      }


      ctx.beginPath();
      ctx.arc(12 + x_p, y_r, 4, 0, 2 * Math.PI);
      //ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
      ctx.lineWidth = 4;
      ctx.closePath();
      ctx.stroke();
      ctx.fill();

      /*
      ctx.fillStyle = ctx.strokeStyle;//"#80ffff";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(12 + x_p, y_r, 3, 0, 2 * Math.PI);
      //ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
      ctx.closePath();
      ctx.fill();
      //ctx.stroke();*/
    }

    desenareRadar();
    desenareZiValoareTrenduri();

}

function desenareGraficValori(){
    ctx = suprafataGrafica.context;

    //desenare linie limita regim nominal
    ctx.fillStyle = culoareLinieReferintaGrafic;
    ctx.fillRect(10, inaltimeSuprafataGrafica - 10 - ((medieCumulativ[selectorZi]*scalaY)/maxValue), lungimeSuprafataGrafica-15, 2);

    //x_valoare = 0;
    for (let i = 0; i <= selectorZi; i++) {
      x_valoare = (i-selectorZiStart)*incrementX;
      //x_valoare += incrementX;
      y_valoare = Math.round(inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue));
      y_valoare_2 = Math.round(inaltimeSuprafataGrafica - 10 - ((data_2[i]*scalaY_2)/maxValue_2));


      //desenare linie sub valoare grafic - data 2
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, inaltimeSuprafataGrafica - 10);
      ctx.lineTo(10 + x_valoare, y_valoare_2 );
      ctx.strokeStyle = culoareLinieValoriGrafic_2;
      ctx.lineWidth = 1;
      ctx.closePath();
      ctx.stroke();

      //desenare punct valoare grafic_valori_desenat - data_2
      /*
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, y_valoare_2 );
      ctx.lineTo(10 + x_valoare, y_valoare_2 + 2);
      ctx.strokeStyle = culoarePunctValoriGrafic_2;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();*/

      //GRAFIC ORIZONTAL
      //desenare linie sub valoare grafic - data 1
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, inaltimeSuprafataGrafica - 10);
      ctx.lineTo(10 + x_valoare, y_valoare );
      if(data[selectorZi] > medieCumulativ[selectorZi]){
          ctx.strokeStyle = culoareLinieGraficNuantat;
      }
      else{
          ctx.strokeStyle = culoareLinieGraficNuantat2;
      }

      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      //desenare punct valoare grafic_valori_desenat - data_1
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, y_valoare );
      ctx.lineTo(10 + x_valoare, y_valoare + 2);
      ctx.strokeStyle = culoarePunctValoriGrafic;
      ctx.lineWidth = 1;
      ctx.closePath();
      ctx.stroke();

/*

      //GRAFIC VERTICAL
      //desenare linie sub valoare grafic
      x_valoare_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
      x_valoare_2 = Math.round(x_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((x_valoare_2 - x_valoare_1) / 2);
      x_valoare_1 = x_valoare_1 - lungime_segment; //i*incrementX;
      x_valoare_2 = x_valoare_2 - lungime_segment;

      y_valoare = inaltimeSuprafataGrafica - scalaY - 100 - i;
*/
      //maxValue = data[i];
      //x = 10 + i*incrementX;
      //y = inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue);
      //console.log("i=" + i + " " + x + " " + y);
    }

}

function desenareGraficVertical(){
    ctx = suprafataGrafica.context;

    //desenare linie verticala medie
    x_val_1 = lungimeSuprafataGrafica - 95; //i*incrementX;


    if(selectorZi < pragGV1){
        y_val_1 = inaltimeSuprafataGrafica - 180 - selectorZi;
        y_val_2 = y_val_1 - intervalProiectie;
    } else{
        y_val_1 = inaltimeSuprafataGrafica - 178 - 2*pragGV1 + selectorZi;
        y_val_2 = y_val_1 + intervalProiectie;
    }


    //y_val_2 = inaltimeSuprafataGrafica - scalaY - 100 - selectorZi - intervalProiectie;

    /*
    ctx.beginPath();
    ctx.moveTo(x_val_1, y_val_1);
    ctx.lineTo(x_val_1, y_val_2);
    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();*/

    //if(selectorZi > 121 && prag1depasit == false){
      //pragGraficVerticalDepasit = true;
      //directieGraficVertical *= -1;
    //}

    for (let i = 0; i <= selectorZi; i++) {

      //GRAFIC VERTICAL - UMPLERE
      //desenare linie sub valoare grafic
      x_valoare_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
      x_valoare_2 = Math.round(x_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((x_valoare_2 - x_valoare_1) / 2);
      x_valoare_1 = x_valoare_1 - lungime_segment; //i*incrementX;
      x_valoare_2 = x_valoare_2 - lungime_segment;

      if(i < pragGV1){
          y_valoare = inaltimeSuprafataGrafica - 178 - i;
      } else{
          y_valoare = inaltimeSuprafataGrafica - 178 - 2*pragGV1 + i;
      }



      ctx.beginPath();
      ctx.moveTo(x_valoare_1, y_valoare);
      ctx.lineTo(x_valoare_2, y_valoare);


      //schimbare culoare daca s-a depasit capacitatea maxima
      if(procentDinCapacitate > 1 && mod == MOD_REGULATOR){
          ctx.strokeStyle = culoareApa;
      }
      else {
          ctx.strokeStyle = culoareLinieGraficVertical;
      }

      //inversare culor cand se depaseste pragul
      if(i > pragGV1){
        if(ctx.strokeStyle == culoareApa){
          ctx.strokeStyle = culoareLinieGraficVertical;
        }
        else{
          ctx.strokeStyle = culoareApa;
        }
      }

      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      //desenare punct inceput in modul foto
      if(mod==MOD_FOTOGRAFIE){
          ctx.beginPath();
          ctx.moveTo(x_valoare_1, y_valoare);
          ctx.lineTo(x_valoare_1 - 2, y_valoare);
          ctx.strokeStyle = culoarePunctGraficVerticalFoto;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          //desenare punct valoare grafic_valori_desenat_capat dreapta
          ctx.beginPath();
          ctx.moveTo(x_valoare_2, y_valoare);
          ctx.lineTo(x_valoare_2 + 2, y_valoare);
          ctx.strokeStyle = culoarePunctGraficVerticalFoto;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

      }
      else{

        //desenare punct valoare grafic_valori_desenat_capat dreapta
        ctx.beginPath();
        ctx.moveTo(x_valoare_2, y_valoare);
        ctx.lineTo(x_valoare_2 + 1, y_valoare);
        ctx.strokeStyle = culoarePunctGraficVertical;
        ctx.lineWidth = 1;
        ctx.closePath();
        ctx.stroke();
      }

    }

    //linie medie stanga
    lungime_segment_medie = Math.round( ((medieCumulativ[selectorZi]*scalaX)/maxValue) / 2 );
    x_ms_1 = x_val_1 - lungime_segment_medie;
    x_md_1 = x_val_1 + lungime_segment_medie;

    ctx.setLineDash([1, 16]);
    ctx.beginPath();
    if(selectorZi>pragGV1){
      ctx.moveTo(x_ms_1, y_val_1 + 2);
      ctx.lineTo(x_ms_1, y_val_2 + 2);
    }
    else{
      ctx.moveTo(x_ms_1, y_val_1);
      ctx.lineTo(x_ms_1, y_val_2);
    }

    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    //linie medie dreapta
    ctx.beginPath();
    if(selectorZi>pragGV1){
      ctx.moveTo(x_md_1, y_val_1 + 2);
      ctx.lineTo(x_md_1, y_val_2 + 2);
    }
    else{
      ctx.moveTo(x_md_1, y_val_1);
      ctx.lineTo(x_md_1, y_val_2);
    }
    //ctx.strokeStyle = culoareLinieMedieGraficVertical;
    //ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();
    ctx.setLineDash([]);

    //desenare text proiectie
    proiectie = medieCumulativ[selectorZi] * intervalProiectie;

    //Valoare cumulativa
    ctx.textAlign = "center";
    ctx.font = "italic 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareTextCompensatorFill;
    ctx.strokeStyle = culoareTextCompensatorFill;
    ctx.fillText("+" + Math.round(proiectie) + "!", x_val_1, y_val_2 - 4);

    //desenare linie temperatura grade
    ctx.beginPath();
    if (selectorZi<pragGV1){
      ctx.moveTo(x_ms_1, y_val_1);
      ctx.lineTo(x_md_1, y_val_1);
    }
    else{
      ctx.moveTo(x_ms_1, y_val_1 + 2);
      ctx.lineTo(x_md_1, y_val_1 + 2);
    }

    ctx.strokeStyle = culoareCrestereMaro;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    //text linie temperatura
    ctx.textAlign = "center";
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareCrestereMaro;
    ctx.fillText(Math.round(medieCumulativToate[selectorZi]) + "°", x_val_1, y_val_1 - 8);

}

function desenareIndicatorRezervor(){
    ctx = suprafataGrafica.context;

    //ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = "lightgrey";
    //ctx.fillText("(" + Math.floor((1 - val_tot/19173111)*100000)/1000 + "%)", xProiectiiSemnale, yProiectiiSemnale + 44);
    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();

    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.fillStyle = "lightblue";//"hsl(204, 50%, 78%)";//"lightblue";
    ctx.fillRect(xIndRez, yIndRez, latIndRez, lunIndRez);
    ctx.fillStyle = "white";

    val_tot = dataCumulativ[selectorZi] + medieCumulativ[selectorZi] * factor_ampMediu * intervalProiectie2;
    lungimeGolire = val_tot/(19173111/40) * lunIndRez; //25
    ctx.fillRect(xIndRez, yIndRez, latIndRez, lungimeGolire);
    ctx.strokeStyle = culoareApaNivelUltraCritic;
    ctx.lineWidth = 2;
    ctx.moveTo(xIndRez, Math.round(yIndRez + lungimeGolire));
    ctx.lineTo(xIndRez + latIndRez, Math.round(yIndRez + lungimeGolire));
    ctx.stroke();
    //ctx.strokeRect(xIndRez, yIndRez, lunIndRez, latIndRez);
    //console.log(lungimeGolire);

}

function desenareGraficSemnale(){
    ctx = suprafataGrafica.context;

    //desenare linie orizontala medie
    //x_val_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
    //y_val_1 = yGraficSemnale;

    //x_val_1 = xGraficSemnale + Math.round(selectorZi/compresieGraficSemnale);
    //x_val_2 = x_val_1 + intervalProiectieSemnale;
    y_valoare_1 = yGraficSemnale;

    for (let i = 0; i <= selectorZi; i++) {
        if(selectorZi < limitaDerulareGraficeSemnale){
            x_valoare = xGraficSemnale + i/compresieGraficSemnale;
        }
        else{
            x_valoare = xGraficSemnale + (i - (selectorZi - limitaDerulareGraficeSemnale))/compresieGraficSemnale;
        }

        //GRAFIC ORIZONTAL(VERTICAL) - UMPLERE
        //desenare linie sub valoare grafic
         //i*incrementX;
        y_valoare_2 = y_valoare_1 - ((data[i]*scalaXTrend3Orizontal)/maxValue);
        r_val = y_valoare_1 - ((medieCumulativ[i]*scalaXTrend3Orizontal)/maxValue);
        e_val = y_valoare_1 - (((data[i]-medieCumulativ[i])*scalaXTrend3Orizontal)/maxValue);
        //lungime_segment = Math.round((y_valoare_2 - y_valoare_1) / 2);
        //y_valoare_1 = y_valoare_1 - lungime_segment; //i*incrementX;
        //y_valoare_2 = y_valoare_2 - lungime_segment;
        //ySegmentDepasire = Math.round(y_val_1 + (25*scalaXTrend3Orizontal)/maxValue) - lungime_segment;

        //y
        ctx.strokeStyle = "white";//culoarePunctValoriGrafic;//"#00111a";//culoareApa;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x_valoare, y_valoare_2-1);
        ctx.lineTo(x_valoare, y_valoare_2);
        ctx.closePath();
        ctx.stroke();

        //r
        ctx.strokeStyle = "yellow";//culoarePunctValoriGrafic;//"#00111a";//culoareApa;
        ctx.beginPath();
        ctx.moveTo(x_valoare, r_val-1);
        ctx.lineTo(x_valoare, r_val);
        ctx.closePath();
        ctx.stroke();

        //e
        if((data[i]-medieCumulativ[i])>0){
          //ctx.strokeStyle = culoareTextCompensatorRosu;
          ctx.strokeStyle = culoareRosuTemperat;
        }
        else{
          ctx.strokeStyle = culoareCerculetRScadere;//culoareScadere;
        }
        //ctx.strokeStyle = "red";//"#4ddbff";//culoarePunctValoriGrafic;//"#00111a";//culoareApa;
        ctx.beginPath();
        ctx.moveTo(x_valoare, e_val-1);
        ctx.lineTo(x_valoare, e_val);
        ctx.closePath();
        ctx.stroke();


        if(i==selectorZi){
          //cerculet creion y(t)

          if((data[i]-medieCumulativ[i])>0){
            //ctx.strokeStyle = culoareTextCompensatorRosu;
            ctx.strokeStyle = culoareRosuTemperat;
            ctx.fillStyle = culoareRosuTemperat;
          }
          else{
            ctx.strokeStyle = culoareCerculetRScadere;//culoareScadere;
            ctx.fillStyle = culoareCerculetRScadere;//culoareScadere;
          }
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x_valoare, e_val, 4, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
          ctx.fill();

          //afisare valoare eroare
          ctx.textAlign = "start";
          //ctx.font = "italic bold 12px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillText( eroare, x_valoare + 10, e_val + 14);

          ctx.font = "italic bold 10px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillText( "" + Math.round((data[selectorZi] - medieCumulativ[selectorZi])/medieCumulativ[selectorZi]*100) + "%" , x_valoare + 10, e_val + 3);

          //ctx.font = "italic bold 11px Helvetica, system-ui, Arial, sans-serif";
          //ctx.textAlign = "start";
          ctx.lineCap = "round";
          if((data[i]-medieCumulativ[i])>0){

              ctx.beginPath();
              ctx.lineWidth = 1;
              ctx.moveTo(x_valoare, e_val-9);
              ctx.lineTo(x_valoare, e_val);
              ctx.closePath();
              ctx.stroke();

              ctx.beginPath();
              ctx.lineWidth = 2;
              ctx.moveTo(x_valoare-3, e_val-9);
              ctx.lineTo(x_valoare+3, e_val-9);
              ctx.closePath();
              ctx.stroke();
          }
          else{
              ctx.beginPath();
              //ctx.lineCap = "round";
              ctx.lineWidth = 1;
              ctx.moveTo(x_valoare, e_val+9);
              ctx.lineTo(x_valoare, e_val);
              ctx.closePath();
              ctx.stroke();

              ctx.beginPath();
              ctx.lineWidth = 2;
              ctx.moveTo(x_valoare-3, e_val+9);
              ctx.lineTo(x_valoare+3, e_val+9);
              ctx.closePath();
              ctx.stroke();
          }
          ctx.lineCap = "butt";


          ctx.strokeStyle = "white";
          //ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x_valoare, y_valoare_2, 4, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();

          ctx.strokeStyle = "yellow";
          //ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(x_valoare, r_val, 4, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.stroke();
        }
    }


    //desenare proiectie
    if(selectorZi < limitaDerulareGraficeSemnale){
        //x_valoare = xGraficSemnale + i/compresieGraficSemnale;
        xrp1 = xGraficSemnale + (selectorZi)/compresieGraficSemnale;
        xrp2 = xGraficSemnale + (selectorZi + intervalProiectie2)/compresieGraficSemnale;
    }
    else{
        //x_valoare = xGraficSemnale + (i - (selectorZi - 255))/compresieGraficSemnale;
        xrp1 = xGraficSemnale + (limitaDerulareGraficeSemnale)/compresieGraficSemnale;
        xrp2 = xGraficSemnale + (limitaDerulareGraficeSemnale + intervalProiectie2)/compresieGraficSemnale;
    }

    rp_val1 = yGraficSemnale - (medieCumulativ[selectorZi] * scalaXTrend3Orizontal/(maxValue));
    //rp_val2 = yGraficSemnale - (medieCumulativ[selectorZi] * scalaXTrend3Orizontal/(maxValue)) - (intervalProiectie)*factor_amp/compresieGraficSemnale;
    rp_val2 = yGraficSemnale - (medieCumulativ[selectorZi] * factor_ampMediu * scalaXTrend3Orizontal/(maxValue));

    ctx.setLineDash([1, 4]);
    //ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "yellow";

    ctx.moveTo(xrp1, rp_val1);
    ctx.lineTo(xrp2, rp_val2);
    ctx.lineTo(xrp2, yGraficSemnale);
    ctx.lineTo(xrp1, yGraficSemnale);
    ctx.lineTo(xrp1, rp_val1);
    //ctx.closePath();
    ctx.stroke();

    ctx.moveTo(xrp1, rp_val1);
    ctx.lineTo(xrp2, rp_val1);
    ctx.stroke();

    ctx.setLineDash([]);

    //Desenare Valori Proiectie Grafic Semnale
    ctx.textAlign = "start";
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = "white";//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(Math.round(dataCumulativ[selectorZi]), xProiectiiSemnale, yProiectiiSemnale + 5);
    ctx.fillStyle = "yellow";//culoareTextCompensatorFill;
    val_pr = Math.round(medieCumulativ[selectorZi] * factor_ampMediu * intervalProiectie2);
    ctx.fillText("+" + val_pr, xProiectiiSemnale, yProiectiiSemnale + 19);
    ctx.fillStyle = "white";//culoareTextCompensatorFill;
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    val_tot = dataCumulativ[selectorZi] + medieCumulativ[selectorZi] * factor_ampMediu * intervalProiectie2;
    ctx.fillText("=" + Math.round(val_tot), xProiectiiSemnale, yProiectiiSemnale + 33);
    ctx.font = "italic 10px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = "lightgrey";
    ctx.fillText("(" + Math.floor((1 - val_tot/(19173111/40))*100000)/1000 + "%)", xProiectiiSemnale, yProiectiiSemnale + 44);


    //Afisare data

    data_zi_luna_p = data_data[(Math.floor(selectorZi) + intervalProiectie2)].split("/");
    zi_p = data_zi_luna_p[0];
    luna_p = data_luni[data_zi_luna_p[1]-1];

    //Valoare cumulativa
    //ctx.textAlign = "end";

    ctx.fillStyle = "lightgrey";//culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(zi_p + " " + luna_p, xProiectiiSemnale, yProiectiiSemnale - 9);

    /*
    ctx.lineWidth = 1;
    for (let i = selectorZi + 1; i <= selectorZi + intervalProiectie; i++) {

        //y_val_1 = yGraficSemnale;

        //x_val_1 = xGraficSemnale + Math.round(selectorZi/compresieGraficSemnale);
        //x_val_2 = x_val_1 + intervalProiectieSemnale;

        //y_valoare_1 = yGraficSemnale; //i*incrementX;
        //y_valoare_2 = Math.round(y_valoare_1 - ((data[i]*scalaXTrend3Orizontal)/maxValue));
        //r_val = Math.round(y_valoare_1 - ((medieCumulativ[i]*scalaXTrend3Orizontal)/maxValue));
        if(i%10 ==0){
            x_valoare = xGraficSemnale + i/compresieGraficSemnale;
            rp_val = y_valoare_1 - (medieCumulativ[selectorZi] * scalaXTrend3Orizontal/(maxValue)) - (i-selectorZi)*factor_amp/compresieGraficSemnale;
           //r_val = y_valoare_1 - ((medieCumulativ[i]*scalaXTrend3Orizontal)/maxValue);
            //e_val = Math.round(y_valoare_1 - (((data[i]-medieCumulativ[i])*scalaXTrend3Orizontal)/maxValue));
            //r
            ctx.fillStyle = "yellow";//culoarePunctValoriGrafic;//"#00111a";//culoareApa;
            ctx.beginPath();
            ctx.arc(x_valoare, rp_val, 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }
    }*/
    //console.log("selector zi " + selectorZi);
    //console.log(rp_val);
    //console.log(r_val);
    //console.log(scalaXTrend3Orizontal);

}


function desenareGraficOrizontal(){
    ctx = suprafataGrafica.context;

    //desenare linie orizontala medie
    //x_val_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
    y_val_1 = yGrafic_3;

    if(selectorZi > pragGO1){
        x_val_1 = 10 + pragGO1;
    }
    else{
        x_val_1 = 10 + selectorZi;
    }


    x_val_2 = x_val_1 + intervalProiectie2;

    //linie medie stanga
    lungime_segment_medie = Math.round( ((medieCumulativ[selectorZi]*scalaXTrend3Orizontal)/maxValue) / 2 );
    y_ms_1 = y_val_1 - lungime_segment_medie;
    y_md_1 = y_val_1 + lungime_segment_medie;

    /*
    //colorare diferit daca capacitatea a fost depasita
    if(procentDinCapacitate > 1){
        ctx.strokeStyle = culoarePunctValoriGrafic;//"#00111a";//culoareApa;
        //console.log("mod grafice: colorare grafic vertical");
    }
    else{
      ctx.strokeStyle = culoareLinieGraficVertical;
    }*/

    //Punct linie proiectie capat dreapta (3) - sus
    ctx.strokeStyle = "white";//culoarePunctValoriGrafic_3;//"white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x_val_2, y_ms_1, 4, 0, 2 * Math.PI);
    //ctx.fill();
    ctx.closePath();
    ctx.stroke();



    //Punct linie proiectie capat dreapta (3) - jos
    ctx.strokeStyle = "white";//culoarePunctValoriGrafic_3;//"white";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x_val_2, y_md_1, 4, 0, 2 * Math.PI);
    //ctx.fill();
    ctx.closePath();
    ctx.stroke();

    //Desenare numar punct (3)
    ctx.textAlign = "end";
    ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareNumarPunct;//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("(3)", x_val_2, y_ms_1 - 10);

    //ctx.strokeStyle = "white";//culoareLinieMedieGraficVertical;
    //colorare text diferit daca capacitatea a fost depasita

    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.strokeStyle = culoareNumarPunct;//culoarePunctValoriGrafic;
    ctx.lineWidth = 2;
    ctx.setLineDash([2, 8]);


    //ctx.setLineDash([2, 4]);

    //linie medie sus - stanga
    //ctx.beginPath();
    ctx.moveTo(10, y_ms_1);
    ctx.lineTo(x_val_1, y_ms_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie sus - dreapta
    //ctx.beginPath();
    ctx.moveTo(x_val_1, y_ms_1);
    ctx.lineTo(x_val_2, y_ms_1);
    //ctx.closePath();
    ctx.stroke();


    //linie jos - stanga
    //ctx.setLineDash([1, 16]);
    //ctx.beginPath();
    ctx.moveTo(10, y_md_1);
    ctx.lineTo(x_val_1, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie jos -dreapta
    //ctx.setLineDash([1, 16]);
    //ctx.beginPath();
    ctx.moveTo(x_val_1, y_md_1);
    ctx.lineTo(x_val_2, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie capat verticala - stanga
    //ctx.beginPath();
    //ctx.setLineDash([2, 4]);
    ctx.moveTo(10, y_ms_1);
    ctx.lineTo(10, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie capat verticala - dreapta
    //ctx.beginPath();
    //ctx.setLineDash([2, 4]);
    ctx.moveTo(x_val_2, y_ms_1);
    ctx.lineTo(x_val_2, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    ctx.setLineDash([]);

    ctx.beginPath();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    //desenare text proiectie
    proiectie = medieCumulativ[selectorZi] * intervalProiectie2;
    if(x_val_2 < 370){
        xTproiectie = x_val_2;
        yTproiectie = y_val_1;
    }
    else{
        xTproiectie = 140;
        yTproiectie = 370;
    }



    //Afisare data
    data_zi_luna_p = data_data[(Math.floor(selectorZi) + intervalProiectie2)].split("/");
    zi_p = data_zi_luna_p[0];
    luna_p = data_luni[data_zi_luna_p[1]-1];

    //Valoare cumulativa
    ctx.textAlign = "end";

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;

    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("Ziua " + (Math.floor(selectorZi) + intervalProiectie2), xTproiectie - 8, yTproiectie - 9);

    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(zi_p + " " + luna_p, xTproiectie - 8, yTproiectie + 5);

    ctx.textAlign = "start";
    ctx.fillStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    if(pulsatie_2 && culoare_pulsatie == culoareMaro){
        ctx.font = "italic bold 18px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillText(" +" + Math.round(proiectie) + "!", x_val_1 + 5 /*- intervalProiectie2*0.75*/, y_val_1 + 6);

        //desenare linie conectare cerculet r cu grafic orizontal
        ctx.setLineDash([1, 8]);
        ctx.beginPath();
        ctx.moveTo(x_p + 8 - raza_cerculet, y_r);
        ctx.lineTo(x_val_1 + 44, y_val_1 - 16);
        ctx.strokeStyle = culoareGalben;
        ctx.lineWidth = 4;
        ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);

    }
    else{
        ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillText(" +" + Math.round(proiectie) + "!", x_val_1 + 7 /*- intervalProiectie2*0.75*/, y_val_1 + 6);
    }

    //ctx.fillText(" +" + Math.round(proiectie) + "!", x_val_1 + 7 /*- intervalProiectie2*0.75*/, y_val_1 + 6);

    ctx.textAlign = "end";
    //ctx.strokeStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    ctx.fillStyle = culoarePunctValoriGrafic;
    ctx.font = "italic bold 15px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(">" + Math.round(dataCumulativ[selectorZi] + proiectie) + "...", xTproiectie - 8, yTproiectie + 20);
    //ctx.fillStyle = culoarePunctValoriGrafic_3;
    //ctx.fillText("" + Math.round(dataCumulativ[selectorZi]), 10, y_val_1);


    for (let i = 0; i <= selectorZi; i++) {

      //GRAFIC ORIZONTAL(VERTICAL) - UMPLERE
      //desenare linie sub valoare grafic
      y_valoare_1 = y_val_1; //i*incrementX;
      y_valoare_2 = Math.round(y_valoare_1 + ((data[i]*scalaXTrend3Orizontal)/maxValue));
      lungime_segment = Math.round((y_valoare_2 - y_valoare_1) / 2);
      y_valoare_1 = y_valoare_1 - lungime_segment; //i*incrementX;
      y_valoare_2 = y_valoare_2 - lungime_segment;
      //ySegmentDepasire = Math.round(y_val_1 + (25*scalaXTrend3Orizontal)/maxValue) - lungime_segment;

      if(selectorZi > pragGO1){
        x_valoare = 10 + i + pragGO1 - selectorZi;
      }
      else{
        x_valoare = 10 + i;
      }


      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.moveTo(x_valoare, y_valoare_1);
      ctx.lineTo(x_valoare, y_valoare_2);

      //colorare diferit daca capacitatea a fost depasita
      if(procentDinCapacitate > 1){
          ctx.strokeStyle = culoarePunctValoriGrafic;//"#00111a";//culoareApa;
          //console.log("mod grafice: colorare grafic vertical");
      }
      else{
        ctx.strokeStyle = culoareLinieGraficVertical;
      }
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      //desenare capat nuantat
      if(procentDinCapacitate > 1){
          ctx.beginPath();
          ctx.moveTo(x_valoare, y_valoare_1);
          ctx.lineTo(x_valoare, y_valoare_1 - 5);
          ctx.strokeStyle = culoareGalben;
          ctx.closePath();
          ctx.stroke();

          if(data[i]>limita_max_pierderi){
            ctx.beginPath();
            ctx.moveTo(x_valoare, y_valoare_1 + 2);
            ctx.lineTo(x_valoare, yGrafic_3);
            //ctx.lineTo(x_valoare, y_val_1 - 30);
            ctx.strokeStyle = culoareCrestereRosu;
            ctx.closePath();
            ctx.stroke();
          }

          /*
          ctx.beginPath();
          ctx.moveTo(x_valoare, y_valoare_2);
          ctx.lineTo(x_valoare, y_valoare_2 + 4);
          ctx.strokeStyle = culoareGalben;
          ctx.closePath();
          ctx.stroke();*/
      }

      ctx.beginPath();
      ctx.closePath();
      ctx.stroke();




      if(i==selectorZi){
        dist = Math.pow((x_valoare - xc2 - 10),2) + Math.pow((y_valoare_1 - yc2 - 2),2);
        dist = Math.floor(5 * Math.sqrt(dist)/100);
        //console.log(dist);
        //linie conectare
        ctx.setLineDash([1, 1 + dist]);

        //dist = Math.pow((x_valoare - xc2 - 10),2) + Math.pow((y_valoare_1 - yc2 - 2),2);
        //dist = 3 * Math.sqrt(dist)/100;
        //console.log(dist);
        //linie conectare
        //ctx.setLineDash([1, 8 + 2 * dist]);

        //ctx.beginPath();
        ctx.moveTo(12 + xc2, yc2);
        ctx.lineTo(x_valoare + 2, y_valoare_1 - 2);
        ctx.strokeStyle = culoarePunctValoriGrafic;//culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
        ctx.lineWidth = 1;
        //ctx.closePath();
        ctx.stroke();
        ctx.setLineDash([]);


        //colorare diferit daca capacitatea a fost depasita
        if(procentDinCapacitate > 1){
            ctx.strokeStyle = culoarePunctValoriGrafic;//"#00111a";//culoareApa;
            //console.log("mod grafice: colorare grafic vertical");
        }
        else{
          ctx.strokeStyle = culoareLinieGraficVertical;
        }

        //punct linie conectare (sus)
        //ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x_valoare, y_valoare_1, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        //punct (jos)
        //ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x_valoare, y_valoare_2, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

      }
    }

    ctx.textAlign = "end";
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";

    //colorare text diferit daca capacitatea a fost depasita
    if(procentDinCapacitate > 1){
      ctx.fillStyle = "white";
    }
    else{
      ctx.fillStyle = culoarePunctValoriGrafic;
    }

    ctx.fillText("" + Math.round(dataCumulativ[selectorZi]), x_valoare - 12, y_val_1 + 6);
}

function ActualizareSuprafataGrafica() {
    if(!pauza){
        suprafataGrafica.clear();

        if (derulareAutomata){
                if (selectorZi < data.length - 1){
                    selectorZi += 1;
                }
                else{
                    derulareAutomata = false;
                    pauza = true;
                }
                //console.log(slider.getAttribute("value"));
                //slider.setAttribute("value", Math.round(selectorZi));
                slider.value = Math.round(selectorZi);
                procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;

                if(selectorZi > paginare){
                  selectorZiStart += 1;
                  rangeSlider.value = Math.round(selectorZiStart);
                }

        }

        procentDinCapacitate = procentDinCapacitateMax;

        //colorare apa in functie de valoare critica
        nivel = data[selectorZi];

        if (nivel> nivelDepasireCapacitate)
            culoareApa = culoareApaNivelDepasireCapacitate;
        else if (nivel > nivelUltraCritic)
            culoareApa = culoareApaNivelUltraCritic;
        else if (nivel > nivelCritic)
            culoareApa = culoareApaNivelCritic;
        else if (nivel > nivelIntermediar) {
            culoareApa = culoareApaNivelIntermediar;
        }
        else
            culoareApa = culoareApaNivelNormal;

        culoareValoareNivel = culoareApa;
        //culoareLinieGraficVertical = culoareApa;

        //Culoare compensator
        if(data[selectorZi] > medieCumulativ[selectorZi]){
            culoareCompensator = culoareTextCompensatorRosu;
        }
        else{
            culoareCompensator = culoareTextCompensatorFill3;
        }

        valZiCur = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi-1));

        pulsatie = false;
        pulsatie_2 = false;
        for(let j = 0; j < evenimente.length; j++){
            if(data_data[selectorZi] == evenimente[j]){
                pulsatie = true;
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
            if(data_data[selectorZi + 1] == evenimente[j]){
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
            if(data_data[selectorZi - 1] == evenimente[j]){
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
        }

        //calcul factor amplificare
        factor_amp = data[selectorZi] / medieCumulativ[selectorZi];
        if(selectorZi > 6){
            factor_ampMediu = (data[selectorZi] + data[selectorZi-1] + data[selectorZi-2] + data[selectorZi-3] + data[selectorZi-4] + data[selectorZi-5] + data[selectorZi-6])/7 / medieCumulativ[selectorZi];
        }
        else{
            factor_ampMediu = factor_amp;
        }

        pr21 = (medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100;

        /*
        //pulsatie_3 = false;
        if(selectorZi % (orizont_regresie + orizont_arie) == 0){
          pulsatie_3 = true;
        }
        else{
          pulsatie_3 = false;
        }
        //console.log(pulsatie_3);
        */

        actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
        actualizareTabelZone();
        actualizareTabelPozitii();
        actualizareTabelVitezePropagare();
        actualizareTabelAltitudini();
        actualizareTabelTraiectorii();
        actualizareDateZileTabele();
        if(mod == MOD_REGULATOR){
            desenareZiValoareTrenduri();
            desenareGraficValori();
            desenareCompensatorValori();
            desenareGraficVertical();
            desenareVaseComunicante();
            desenareIndicatori();
            desenareEvenimente();
            desenareIndicatorRezervor();
            desenareGraficSemnale();
            desenareAvioaneRegulator();

            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_RADAR){
            desenareGraficRadar();
        }
        else if(mod == MOD_FOTOGRAFIE){//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
            desenareGraficVertical();
            desenareZiValoareTrenduri();
            desenareEvenimente();
            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_HARTA){//MOD_FOTOGRAFIE
            ctx.drawImage(harta, 0, 0);
            desenareAvioaneHarta();
            desenareZiValoareTrenduri();
            desenareEvenimente();
            desenarePendulModHarta();
            //desenareZiValoare();
            //desenareGraficVertical();
            //desenarePuncteGraficOrizontal();
        }
        else{//MOD_GRAFICE
          //desenareZiValoareTrenduri();
          desenareGraficeTrenduri();
          desenareGraficOrizontal();
        }
    }


}

function ActualizareSuprafataGraficaSingulara() {
        suprafataGrafica.clear();
        //slider.setAttribute("value", Math.round(selectorZi));
        slider.value = Math.round(selectorZi);

        procentDinCapacitate = procentDinCapacitateMax;

        //colorare apa in functie de valoare critica
        nivel = data[selectorZi];

        if (nivel> nivelDepasireCapacitate)
            culoareApa = culoareApaNivelDepasireCapacitate;
        else if (nivel > nivelUltraCritic)
            culoareApa = culoareApaNivelUltraCritic;
        else if (nivel > nivelCritic)
            culoareApa = culoareApaNivelCritic;
        else if (nivel > nivelIntermediar) {
            culoareApa = culoareApaNivelIntermediar;
        }
        else
            culoareApa = culoareApaNivelNormal;

        culoareValoareNivel = culoareApa;
        //culoareLinieGraficVertical = culoareApa;

        //Culoare compensator
        if(data[selectorZi] > medieCumulativ[selectorZi]){
            culoareCompensator = culoareTextCompensatorRosu;
        }
        else{
            culoareCompensator = culoareTextCompensatorFill3;
        }

        valZiCur = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi-1));

        pulsatie = false;
        pulsatie_2 = false;
        for(let j = 0; j < evenimente.length; j++){
            if(data_data[selectorZi] == evenimente[j]){
                pulsatie = true;
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
            if(data_data[selectorZi + 1] == evenimente[j]){
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
            if(data_data[selectorZi - 1] == evenimente[j]){
                pulsatie_2 = true;
                culoare_pulsatie = evenimente_tip[j];
            }
        }

        /*
        //pulsatie_3 = false;
        if(selectorZi % (orizont_regresie + orizont_arie)){
          pulsatie_3 = true;
        }
        else{
          pulsatie_3 = false;
        }*/

        //calcul factor amplificare
        factor_amp = data[selectorZi] / medieCumulativ[selectorZi];
        if(selectorZi > 6){
            factor_ampMediu = (data[selectorZi] + data[selectorZi-1] + data[selectorZi-2] + data[selectorZi-3] + data[selectorZi-4] + data[selectorZi-5] + data[selectorZi-6])/7 / medieCumulativ[selectorZi];
        }
        else{
            factor_ampMediu = factor_amp;
        }

        pr21 = (medieCumulativToate[selectorZi] + (factor_ampMediu-1)*orizont_proiectie )/100;

        actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
        actualizareTabelZone();
        actualizareTabelPozitii();
        actualizareTabelVitezePropagare();
        actualizareTabelAltitudini();
        actualizareTabelTraiectorii();
        actualizareDateZileTabele();
        if(mod == MOD_REGULATOR){
            desenareZiValoareTrenduri();
            desenareGraficValori();
            desenareCompensatorValori();
            desenareGraficVertical();
            desenareVaseComunicante();
            desenareIndicatori();
            desenareEvenimente();
            desenareIndicatorRezervor();
            desenareGraficSemnale();
            desenareAvioaneRegulator();
            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_RADAR){
            desenareGraficRadar();
        }
        else if(mod == MOD_FOTOGRAFIE){//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
            desenareGraficVertical();
            desenareZiValoareTrenduri();
            desenareEvenimente();
            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_HARTA){//MOD_FOTOGRAFIE
            ctx.drawImage(harta, 0, 0);
            desenareAvioaneHarta();
            desenareZiValoareTrenduri();
            desenareEvenimente();
            desenarePendulModHarta();
            //desenareZiValoare();
            //desenarePuncteGraficOrizontal();
        }
        else{//MOD_GRAFICE
            //desenareZiValoareTrenduri();
            desenareGraficeTrenduri();
            desenareGraficOrizontal();
        }

}

function actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate) {
    //desenare un procent de maxim 100%
    if (procentDinCapacitate > 1){
      procentDinCapacitate = 1;
    }

    //apa rezervor
    inaltimeApaRezervor =  (inaltimeRezervor * capacitateRezervor) * procentDinCapacitate;
    yApaRezervor = yRezervor + inaltimeRezervor - inaltimeApaRezervor;

    //apa intrare (L1)
    inaltimeApaIntrare1 = inaltimeConductaIntrare * inaltimeApaRezervor / inaltimeRezervor;
    yApaIntrare1 = yConductaIntrare + inaltimeConductaIntrare - inaltimeApaIntrare1;

    //apa intrare (L2)
    lungimeApaIntrare2 = inaltimeApaIntrare1;
    inaltimeApaIntrare2 = inaltimeRezervor - inaltimeApaRezervor - (inaltimeConductaIntrare - inaltimeApaIntrare1);
    yApaIntrare2 = yRezervor + (inaltimeConductaIntrare - inaltimeApaIntrare1);

    // valva conducta intrare (T1)
    xValvaConductaIntrare1 = xRezervor - lungimeValvaConductaIntrare1;
    yValvaConductaIntrare1 = yConductaIntrare - inaltimeApaIntrare1;

    // valva conducta intrare (T2)
    xValvaConductaIntrare2 = xRezervor - (lungimeValvaConductaIntrare2 / 2) - (lungimeValvaConductaIntrare1 / 2);
    yValvaConductaIntrare2 = yValvaConductaIntrare1 - inaltimeValvaConductaIntrare2 + 1;

    //yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - nivelUltraCritic * (inaltimeRezervor * capacitateRezervor)/maxValue;
    nivelMaxIndicator = nivelMaxAfisatRezervor * capacitateRezervor;

    if(medieCumulativ[selectorZi] <= nivelMaxIndicator)
        yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - medieCumulativ[selectorZi] * (inaltimeRezervor * capacitateRezervor)/nivelMaxAfisatRezervor;
    else {
        yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - nivelMaxIndicator * (inaltimeRezervor * capacitateRezervor)/nivelMaxAfisatRezervor;
    }

    //F 1
    xF1 = xValvaConductaIntrare1 + lungimeValvaConductaIntrare1 / 2 - lungimeF1 / 2;
    inaltimeF1 = comandaIdeala[selectorZi] / maxCompensator * scalaGCompensator;
    yF1 = yValvaConductaIntrare2 - inaltimeF1 + 1;

    //Text comanda
    yTextComanda = yF1 - 4;

    // casuta 1
    //xCasuta1 = xValvaConductaIntrare1 + lungimeValvaConductaIntrare1 / 2 - lungimeCasuta1 / 2;
    //yCasuta1 = yValvaConductaIntrare2 - inaltimeCasuta1 - 1;
}

function salvarePreferintaMod() {
  //console.log("se salveaza modul " + mod);
  localStorage.setItem('mod', mod);
  //console.log("se salveaza modul afisaretrend " + afisaretrend);
  localStorage.setItem('afisaretrend', afisaretrend);
}

function setare_mod() {
  if(!localStorage.getItem('mod')) {
    salvarePreferintaMod();
    //console.log("setare mod initial " + mod);
  } else {
    mod = localStorage.getItem('mod');
    //console.log("mod salvat " + mod + " . Se seteaza modul preferat.");
    //actualizareMod();
  }

  if(!localStorage.getItem('afisaretrend')) {
    salvarePreferintaMod();
  } else {
    if(localStorage.getItem('afisaretrend') == "true"){
        afisaretrend = true;
    }
    else{
        afisaretrend = false;
    }
    //afisaretrend = localStorage.getItem('afisaretrend');
    //console.log("s-a incarcat afisare trend: " + afisaretrend)
  }
}


function salvareNrArie() {
  //console.log("se salveaza aria cu numarul " + nrArie);
  localStorage.setItem('nr_arie', nrArie);
}

function salvareModSortare() {
  //console.log("se salveaza aria cu numarul " + nrArie);
  localStorage.setItem('mod_sortare', mod_sortare);
}

function setare_mod_sortare() {
  if(!localStorage.getItem('mod_sortare')) {
    salvareModSortare();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    mod_sortare = parseInt(localStorage.getItem('mod_sortare'));
    //console.log("nrarie salvat " + nr_arie + " . Se seteaza nrrie preferat.");
    //actualizareMod();
  }
  //console.log("mod_sortare=" + mod_sortare);
}

function setare_nr_arie() {
  if(!localStorage.getItem('nr_arie')) {
    salvareNrArie();
    //console.log("setare NrArie initiala " + nr_arie);
  } else {
    nrArie = parseInt(localStorage.getItem('nr_arie'));
    //console.log("nrarie salvat " + nr_arie + " . Se seteaza nrrie preferat.");
    //actualizareMod();
  }
}
