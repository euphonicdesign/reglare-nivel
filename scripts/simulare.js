var lungimeSuprafataGrafica = 600;
var inaltimeSuprafataGrafica = 500;


let data = [0.67,2.33,3.67,3.67,3.33,4.33,5.33,
            7.67,6.67,13.33,15,16.67,21.33,18.67,
            18,8,13.67,20.33,24,25,24.33,
            25.67, 20.33, 20.67, 22.00, 23.00, 18.67, 15.00,
            15.67, 17.00, 22.00, 24.67, 25.33, 23.00, 22.33,
            27.00, 26.33, 25.00, 22.33, 28.67, 31.33, 32.00,
            21.00, 19.67, 18.67, 26.00, 24.33, 23.67, 22.67,
            25.33, 24.67, 25.33, 21.33, 24.67, 18.00, 21.67,
            17.00, 17.00, 15.00, 14.67, 14.67, 11.00, 9.67,
            9.33, 12.67, 13.33, 13.33, 10.67, 10.00, 11.33,
            11.00, 13.00, 8.67, 8.67, 6.67, 9.67, 10.00,
            9.00, 8.67, 9.00, 11.33, 11.67, 11.67, 10.33,
            13.67, 15.67, 15.33, 13.67, 15.33, 15.67, 16.33,
            13.00, 13.00, 13.00, 14.33, 14.00, 13.33, 11.33,
            15.67, 18.33, 20.67, 18.33, 17.67, 19.00, 21.33,
            21.00, 20.00, 22.67, 22.33, 22.00, 16.00, 18.00,
            16.67, 18.00, 20.00, 22.67, 23.33, 19.00, 19.00,
            18.33, 16.67, 21.67, 25.00, 29.33, 25.33, 21.33,
            20.33, 18.67, 24.67, 27.33, 32.67, 34.67, 36.67,
            36.33, 29.67, 33.67, 36.00, 44.67, 45.33, 46.00,
            44.67, 37.67, 35.00, 35.67, 43.67, 46.67, 49.00,
            43.67,



          ];

let data_2 = [52.00, 89.33, 131.67, 157.67, 151.00, 176.67, 182.00,
              243.67, 220.00, 264.33, 233.33, 262.00, 312.67, 384.33,
              375.33, 291.33, 268.00, 299.00, 381.67, 350.00, 409.67,
              366.00, 388.67, 296.33, 305.33, 358.00, 396.00, 400.67,
              346.33, 289.67, 274.67, 321.33, 386.67, 391.67, 308.33,
              313.33, 307.33, 327.00, 314.00, 300.33, 317.00, 251.33,
              307.67, 315.00, 368.33, 314.67, 329.00, 324.67, 341.33,
              287.67, 259.00, 215.67, 213.33, 219.67, 219.67, 234.00,
              208.00, 199.67, 162.33, 172.00, 183.00, 173.67, 156.67,
              161.67, 190.33, 190.67, 174.67, 169.33, 184.33, 179.67,
              155.33, 138.67, 128.00, 137.33, 169.67, 195.33, 207.00,
              190.67, 167.00, 153.00, 155.33, 192.67, 218.33, 244.67,
              272.33, 253.67, 245.33, 253.67, 305.00, 328.33, 323.33,
              321.67, 297.00, 258.33, 260.33, 331.67, 397.33, 398.67,
              342.33, 295.00, 316.00, 327.67, 388.00, 398.67, 428.67,
              409.00, 352.33, 346.00, 400.67, 522.00, 587.00, 634.67,
              582.00, 522.33, 502.00, 563.67, 685.00, 739.00, 821.67,
              818.33, 779.00, 814.00, 901.67, 1045.33, 1087.00, 1171.67,
              1174.33, 1169.33, 1125.00, 1145.67, 1229.67, 1277.67, 1292.00,
              1198.33, 1041.00, 1043.33, 1121.33, 1295.33, 1344.00, 1357.67,
              1291.00, 1091.33, 1046.33, 1136.33, 1361.33, 1428.00, 1399.00,
              1276.67,


            ];

let data_3 = [0.04, 0.04, 0.05, 0.05, 0.07, 0.08, 0.09,
              0.1, 0.11, 0.12, 0.12, 0.12, 0.12, 0.12,
              0.12, 0.12, 0.11, 0.11, 0.1, 0.1, 0.1,
              0.1, 0.1, 0.09, 0.09, 0.09, 0.08, 0.08,
              0.08, 0.08, 0.08, 0.07, 0.07, 0.07, 0.06,
              0.06, 0.05, 0.05, 0.04, 0.04, 0.04, 0.04,
              0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
              0.04, 0.04, 0.03, 0.03, 0.03, 0.03, 0.03,
              0.03, 0.03, 0.03, 0.03, 0.02, 0.02, 0.02,
              0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02,
              0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02,
              0.02, 0.02, 0.02, 0.02, 0.02, 0.02, 0.02,
              0.02, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03,
              0.03, 0.03, 0.03, 0.03, 0.03, 0.03, 0.04,
              0.04, 0.03, 0.03, 0.03, 0.03, 0.03, 0.03,
              0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
              0.04, 0.04, 0.04, 0.04, 0.04, 0.04, 0.04,
              0.04, 0.04, 0.05, 0.05, 0.05, 0.05, 0.05,
              0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05,
              0.06, 0.06, 0.06, 0.07, 0.07, 0.07, 0.07,
              0.07, 0.07, 0.07, 0.07,

            ];

let data_data = [
              '23/3', '24/3', '25/3', '26/3', '27/3', '28/3', '29/3',
              '30/3', '31/3', '1/4', '2/4', '3/4', '4/4', '5/4',
              '6/4', '7/4', '8/4', '9/4', '10/4', '11/4', '12/4',
              '13/4', '14/4', '15/4', '16/4', '17/4', '18/4', '19/4',
              '20/4', '21/4', '22/4', '23/4', '24/4', '25/4', '26/4',
              '27/4', '28/4', '29/4', '30/4', '1/5', '2/5', '3/5',
              '4/5', '5/5', '6/5', '7/5', '8/5', '9/5', '10/5',
              '11/5', '12/5', '13/5', '14/5', '15/5', '16/5', '17/5',
              '18/5', '19/5', '20/5', '21/5', '22/5', '23/5', '24/5',
              '25/5', '26/5', '27/5', '28/5', '29/5', '30/5', '31/5',
              '1/6', '2/6', '3/6', '4/6', '5/6', '6/6', '7/6',
              '8/6', '9/6', '10/6', '11/6', '12/6', '13/6', '14/6',
              '15/6', '16/6', '17/6', '18/6', '19/6', '20/6', '21/6',
              '22/6', '23/6', '24/6', '25/6', '26/6', '27/6', '28/6',
              '29/6', '30/6', '1/7', '2/7', '3/7', '4/7', '5/7',
              '6/7', '7/7', '8/7', '9/7', '10/7', '11/7', '12/7',
              '13/7', '14/7', '15/7', '16/7', '17/7', '18/7', '19/7',
              '20/7', '21/7', '22/7', '23/7', '24/7', '25/7', '26/7',
              '27/7', '28/7', '29/7', '30/7', '31/7', '1/8', '2/8',
              '3/8', '4/8', '5/8', '6/8', '7/8', '8/8', '9/8',
              '10/8', '11/8', '12/8', '13/8', '14/8', '15/8', '16/8',
              '17/8', '18/8', '19/8', '20/8', '21/8', '22/8', '23/8',
              '24/8', '25/8', '26/8', '27/8', '28/8', '29/8', '30/8',
              '31/8', '1/9', '2/9', '3/9', '4/9', '5/9', '6/9',
              '7/9', '8/9', '9/9', '10/9', '11/9', '12/9', '13/9',
              '14/9', '15/9', '16/9', '17/9', '18/9', '19/9', '20/9',
              '21/9', '22/9', '23/9', '24/9', '25/9', '26/9', '27/9',
              '28/9', '29/9', '30/9', '1/10', '2/10', '3/10', '4/10',
              '5/10', '6/10', '7/10', '8/10', '9/10', '10/10', '11/10',
              '12/10', '13/10', '14/10', '15/10', '16/10', '17/10', '18/10',
              '19/10', '20/10', '21/10', '22/10', '23/10', '24/10', '25/10',
              '26/10', '27/10', '28/10', '29/10', '30/10', '31/10', '1/11',
              '2/11', '3/11', '4/11', '5/11', '6/11', '7/11', '8/11',
              '9/11', '10/11', '11/11', '12/11', '13/11', '14/11', '15/11',
              '16/11', '17/11', '18/11', '19/11', '20/11', '21/11', '22/11',
              '23/11', '24/11', '25/11', '26/11', '27/11', '28/11', '29/11',
              '30/11', '1/12', '2/12', '3/12', '4/12', '5/12', '6/12',
              '7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12',
              '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12',
              '21/12', '22/12', '23/12', '24/12', '25/12', '26/12', '27/12',
              '28/12', '29/12', '30/12', '31/12', '1/1', '2/1', '3/1',
              '4/1', '5/1', '6/1', '7/1', '8/1', '9/1', '10/1',
              '11/1', '12/1', '13/1', '14/1', '15/1', '16/1', '17/1',
              '18/1', '19/1', '20/1', '21/1', '22/1', '23/1', '24/1',
              '25/1', '26/1', '27/1', '28/1', '29/1', '30/1', '31/1',
              '1/2', '2/2', '3/2', '4/2', '5/2', '6/2', '7/2',
              '8/2', '9/2', '10/2', '11/2', '12/2', '13/2', '14/2',
              '15/2', '16/2', '17/2', '18/2', '19/2', '20/2', '21/2',
              '22/2', '23/2', '24/2', '25/2', '26/2', '27/2', '28/2',
              '1/3', '2/3', '3/3', '4/3', '5/3', '6/3', '7/3',
              '8/3', '9/3', '10/3', '11/3', '12/3', '13/3', '14/3',
              '15/3', '16/3', '17/3', '18/3', '19/3', '20/3', '21/3',
              '22/3', '23/3', '24/3', '25/3', '26/3', '27/3', '28/3',
              '29/3', '30/3', '31/3', '1/4', '2/4', '3/4', '4/4',
              '5/4', '6/4', '7/4', '8/4', '9/4', '10/4', '11/4',
              '12/4', '13/4', '14/4', '15/4', '16/4', '17/4', '18/4',
              '19/4', '20/4', '21/4', '22/4', '23/4', '24/4', '25/4',
              '26/4', '27/4', '28/4', '29/4', '30/4', '1/5', '2/5',
              '3/5', '4/5', '5/5', '6/5', '7/5', '8/5', '9/5',
              '10/5', '11/5', '12/5', '13/5', '14/5', '15/5', '16/5',
              '17/5', '18/5', '19/5', '20/5', '21/5', '22/5', '23/5',
              '24/5', '25/5', '26/5', '27/5', '28/5', '29/5', '30/5',
            ];

let data_luni = [
              "Ian",
              "Feb",
              "Mar",
              "Apr",
              "Mai",
              "Iun",
              "Iul",
              "Aug",
              "Sep",
              "Oct",
              "Noi",
              "Dec",
            ];

let dataCumulativ = [];
let medieCumulativ = [];
let comandaIdeala = [];
let proiectie = [];
let vector_r = [];
let vector_r_normalizat = [];
let vector_coefA = [];
let vector_E = [];
//var incrementX = Math.round(lungimeSuprafataGrafica / (data.length + 1));
var incrementX = 2.8;

var MOD_FOTOGRAFIE = 0;
var MOD_REGULATOR = 1;
var MOD_GRAFICE = 2;
var mod = MOD_FOTOGRAFIE;

var fotografie = new Image();
fotografie.src = "https://euphonicdesign.github.io/reglare-nivel/images/fotografie.jpg";

//---->actualizare versionare script in index

var selectorZi = 0; //data.length - 1;
var maxValue = 0;
//var maxValueAfisareRezervor = 32;
var maxValue_2 = 0;
var maxValue_3 = 0; //p+
var maxValue_4 = 0; //vector_r_normalizat
var maxValueProiectie = 0;

var maxCompensator = 0;
var derulareAutomata = true;
var vitezaSimulare = 165;
var scalaY = 65;//55; //grafic valori orizontal - regulator grafic jos - rosu
var scalaY_2 = 95;//55; //grafic valori orizontal - regulator grafic jos - gri

var scala_grafic_2 = 1.4; //scalare suplimentara grafic 2 sus 1.5 = 150%

var scalaY_trend_2 = 160; // grafic sus
var scalaY_trend_3 = 80; // grafic sus - p+
var scalaY_trend_4 = 40; // grafic sus - vector_r_normalizat
var scalaY_trend_1 = 90; // grafic jos (mijloc)

var scalaX_trend = 72;
//SCALA GRAFIC VERTICAL/ORIZONTAL
var scalaX = 110; //grafic valori vertical - cumulativ - foto, trend, regulator
var scalaGCompensator = 50;
var yGrafic_2 = 190;
var yGrafic_1 = yGrafic_2 + 150;
var yGrafic_3 = yGrafic_1 + 85;

var yLegendaDerivate = yGrafic_3 - 100;
var xLegendaDerivate = 450;
var ident = 10;
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

var xc2 = 0;
var yc2 = 0;

var culoare_linie_trend = "#999999";//"#b3b3b3";
var culoareRezervor = "grey";
var nivelDepasireCapacitate = 35;
var nivelUltraCritic = 25;
var nivelCritic = 20;
var nivelIntermediar = 15;
var culoareApaNivelNormal = "#005ce6";
var culoareApaNivelIntermediar = "#003d99";
var culoareApaNivelCritic = "#001f4d";
var culoareApaNivelUltraCritic = "#001433";
var culoareApaNivelDepasireCapacitate = "#000a1a";
var culoareApa = culoareApaNivelNormal;
var culoareValoareNivel = culoareApa;
//var culoareRobinet = "orange";
var culoareLinieLimitaRegimNominal = "#cce0ff";
var culoareIndicatorRezervor = "#cce0ff";

var culoareLinieValoriGrafic = "#b3b3b3";
var culoareLinieValoriGrafic_2 = "#cccccc";//"#bfbfbf";
var culoareLinieGraficNuantat = "#d88d8d";//"#d88d8d";
var culoareLinieGraficNuantat2 = "white";
var culoareLinieGraficVertical = "white";//"#8c8c8c";
var culoareLinieLegatura = "#999999";
var culoareLinieGraficP = "#ffffe6";
var culoareTextGraficP = "#ffcf66";
var culoareGraficVectorR = "#996633";//"#ac7339";
var culoareCerculetR = "#99d6ff";//"#33adff";//"#80ffff";
var culoarePuncteProiectieCrestere = "#33adff";
var culoarePuncteProiectieScadere = culoare_linie_trend;

var culoarePunctGraficVertical = "#999999";//"white";
var culoarePunctGraficVerticalFoto = "#262626";
var culoarePunctValoriGrafic = culoareApaNivelIntermediar;
var culoarePunctValoriGrafic_2 = "white";//"grey";//"culoareApaNivelNormal"; //"#999999";
var culoarePunctValoriGrafic_3 = "#737373";//"#808080";
var culoareNumarPunct = "#b3b3b3";//"#404040";
var culoareTextZi = "#999999";//"#595959";


var culoareTextReferinta = "#76adff";
var culoareLinieReferinta = "#cce0ff";
var culoareLinieReferintaGrafic = "#d9d9d9";//"#DDDDDD";//"#cce0ff";

var culoareTextCompensator = "#d9d9d9";
var culoareCompensator = "orange";
var culoareTextCompensatorFill = "#999999";//#8c8c8c;//"#A9A9A9";
var culoareTextCompensatorFill2 = "#8c8c8c";
var culoareTextCompensatorFill3 = "orange";//"#ff9933";//"#8c8c8c";
var culoareTextCompensatorRosu = "#c45454";//"#be4141";//"#ff1a1a";//"red";
var culoareF = "#999999";
var culoareCrestere = culoareTextCompensatorRosu;
var culoareScadere = "green";
var culoareTrend = culoarePunctValoriGrafic_3;

var culoareLinieMedieGraficVertical = culoareTextCompensatorFill; //"grey";

var textMaiMare10 = " (>10!)";//" (>10)";

var intervalProiectie = 90; //zile

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
var yLegenda = 230;
var xLegenda = 20;
var yl1 = yLegenda + 20;
var yl2 = yLegenda + 40;
var yl3 = yLegenda + 60;
var yl4 = yLegenda + 80;
var yl5 = yLegenda + 100;

var grafic_valori_desenat = false;
var pauza = false;


var slider = document.getElementById("myRange");
slider.setAttribute("max", data.length - 1);
slider.setAttribute("value", selectorZi);

slider.oninput = function() {
    selectorZi = Math.round(this.value);
    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
    pauza = false;
    /*
    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }*/

    //slider.setAttribute("value", selectorZi);
    //console.log(selectorZi);
    //console.log(slider.getAttribute("value"));
}

//captura apasare taste
const input = document.querySelector('html');
input.onkeydown = modificaNivel;

function restart(){
    //console.log("pagina se va reincarca");
    location.reload();
    return false;
}

//buton prelucrare
var buton_reluare = document.getElementById('derulare')
buton_reluare.onclick = function() {
    restart();
    /*selectorZi = 0;
    slider.setAttribute("value", selectorZi);
    derulareAutomata = true;
    pauza = false;*/

    //console.log(slider.getAttribute("value"));
    //procentDinCapacitateMax = data[selectorZi]/maxValue;
}

//buton foto
var buton_foto = document.getElementById('foto')
buton_foto.onclick = function() {
    //if(mod == MOD_REGULATOR || mod == MOD_GRAFICE){
      mod = MOD_FOTOGRAFIE;
    /*}
    else{
      mod = MOD_REGULATOR;
    }*/
    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}

var buton_grafice = document.getElementById('grafice')
buton_grafice.onclick = function() {
    //if(mod == MOD_REGULATOR || mod == MOD_FOTOGRAFIE){
      mod = MOD_GRAFICE;
    /*}
    else{
      mod = MOD_REGULATOR;
    }*/
    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}

var buton_rezervor = document.getElementById('rezervor')
buton_rezervor.onclick = function() {

    mod = MOD_REGULATOR;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
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
          if (selectorZi < data.length - 1)
            selectorZi += 1;

    }

    if(e.code === "Space") {
        pauza = !pauza;
    }

    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
    slider.setAttribute("value", selectorZi);
}

function start() {
    //incrementX = 2.9;
    //incrementX = Math.round((lungimeSuprafataGrafica) / (data.length + 1)) - 2;
    //console.log(incrementX);

    //prelucrare date
    /*
    for (let i = 0; i < data.length; i++) {
        if (data[i]>maxValue)
          maxValue = data[i];
    }*/
    maxValue = Math.max(...data);
    maxValue_2 = Math.max(...data_2);
    maxValue_3 = Math.max(...data_3); //p+


    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;

    //construire vector date cumulative
    for (let i = 0; i < data.length; i++) {
      cumul = 0;

      for (let j = 0; j <= i ; j++) {
        cumul = cumul + data[j];
      }

      dataCumulativ[i] = cumul;
      medieCumulativ[i] = Math.round(cumul/(i+1));
      comandaIdeala[i] = Math.round(kp*data[i] + ki*medieCumulativ[i] + (kd * medieCumulativ[i] * intervalProiectie));
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

    //Calcul Parametrii Predictie (coefA,bazaR)
    generare_vector_r_coefA();
    maxValue_4 = Math.max(...vector_r_normalizat);
    calcul_parametrii_Predictie();
    maxValueProiectie = coefA * Math.pow(bazaR, data_2.length - 1 + orizont_proiectie);
    //console.log(maxValueProiectie);

    maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2; //- Math.abs(Math.floor((maxValue_2 - maxValueProiectie) * 0.7));
    //console.log("maxValue_2: " + maxValue_2);
    //console.log("maxValueProiectie: " + maxValueProiectie);
    //console.log("maxValueGrafic2 (max): " + maxValueGrafic2);

    setare_mod();
}

function generare_vector_r_coefA(){
    n = orizont_regresie;
    //console.log(n);
    //console.log(data_2.length);
    for(let k = 0; k < n; k++){
      vector_r[k] = 0;
      vector_r_normalizat[k] = 0;
      vector_coefA[k] = 0;
      vector_E[k] = 0;
    }

    for(let k = n; k <= data_2.length; k++){
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
          sumY += Math.log(data_2[i]);
          sumY_raw += data_2[i];

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
}

function calcul_parametrii_Predictie(){
    n = orizont_regresie;
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
    console.log("orizont r: " + orizont_regresie);
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

function desenareVaseComunicante() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = culoareRezervor;

    //culoare implicita
    ctx.strokeStyle = culoareTextCompensator;
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

function desenareZiValoareTrenduri(){
    ctx = suprafataGrafica.context;
    //ctx.fillStyle = "orange";
    //culoare implicita
    ctx.strokeStyle = culoareTextZi;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";

    //Ziua
    //ctx.font = "30px Arial";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    //ctx.fillText("Ziua " + selectorZi, 10, 50);
    ctx.strokeText("Ziua " + selectorZi, 10, 50);
}

function desenareZiValoare() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = "orange";
    //culoare implicita
    ctx.strokeStyle = culoareTextZi;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";

    //Ziua
    //ctx.font = "30px Arial";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    //ctx.fillText("Ziua " + selectorZi, 10, 50);
    ctx.strokeText("Ziua " + selectorZi, 10, 50);

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
    ctx.fillStyle = culoareTextReferinta;
    ctx.font = "bold 30px Helvetica, Arial, sans-serif";
    //ctx.font = "bold 30px system-ui, Helvetica, Arial, sans-serif";
    ctx.fillText("" + medieCumulativ[selectorZi], lungimeSuprafataGrafica - 450, yIndicatorRezervor);
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
    ctx.fillText("Ref=0", xLegenda, yLegenda);

    //Constante amplificare
    ctx.fillText("Kp=" + kp + " Ki=" + ki + " Kd=" + kd, xLegenda, yl1);

    //Eroarea
    //ctx.fillText("Er=" + Math.round(data[selectorZi]), 20, 260);

    //Compensator
    ctx.fillText("C=" + "Kp*" + Math.round(data[selectorZi]) + "+Ki*"+medieCumulativ[selectorZi] + "+Kd*" + medieCumulativ[selectorZi] * intervalProiectie, xLegenda, yl2);

    //Grad atentie
    //ctx.fillStyle = culoareTextCompensatorFill;
    //ctx.font = "italic 12px system-ui, Arial, sans-serif";
    ctx.fillText("Grad de atentie:", xLegenda, yl3);

    //Comanda ideala C
    //ctx.fillStyle = culoareTextCompensatorFill;
    //ctx.font = "italic 12px system-ui, Arial, sans-serif";
    //ctx.fillText("C=" + comandaIdeala[selectorZi], 20, yl4);
    if(comandaIdeala[selectorZi]>10){
        ctx.fillText("C=" + comandaIdeala[selectorZi] + textMaiMare10, xLegenda, yl4);
    }
    else{
        ctx.fillText("C=" + comandaIdeala[selectorZi], xLegenda, yl4);
    }

    //Afisare data - zi curenta
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    ctx.fillText(zi + " " + luna, xLegenda, yl5);

    //Comanda ideala
    ctx.fillStyle = culoareCompensator;
    ctx.textAlign = "center";
    ctx.font = "italic bold 23px system-ui, Arial, sans-serif";
    ctx.fillText(comandaIdeala[selectorZi] + "!", xTextComanda, yTextComanda);



    /*
    if(comandaIdeala[selectorZi]>10){
        ctx.fillText("C=" + comandaIdeala[selectorZi] + textMaiMare10, 20, 115);
    }
    else{
        ctx.fillText("C=" + comandaIdeala[selectorZi], 20, 115);
    }*/


    //ctx.fillText("Kp*" + Math.round(data[selectorZi]), 20, 260);
    //ctx.fillText("+ Ki*"+valoareReferinta, 20, 280);

    /*
    //Valoare cumulativa
    ctx.textAlign = "center";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    ctx.strokeText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 96, inaltimeSuprafataGrafica - scalaY - 60);

    //Nivelul apei
    ctx.textAlign = "start";
    ctx.fillStyle = culoareValoareNivel;
    ctx.font = "bold 38px Helvetica, Arial, sans-serif";
    ctx.fillText(Math.round(data[selectorZi]), xApaRezervor + lungimeApaRezervor - 50, yApaRezervor - 4);
    */
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
  for (let i = 0; i <= selectorZi; i++) {
      x_p = i*incrementX;
      y_p = Math.round(yGrafic_2 - ((data_3[i]*scalaY_trend_3)/maxValue_3));
      //y_r = Math.round(yGrafic_2 - ((vector_r[i]*scalaY_trend_4)/maxValue_4));
      // normalizat in jurul lui 1
      y_r = Math.round(yGrafic_2 - ((vector_r_normalizat[i]*scalaY_trend_4)/maxValue_4));
      //console.log("zi " + i + ": " + (vector_r[i]*1000 - 1000) );

      //desenare punct valoare grafic_valori_desenat - data_3 - p+
      ctx.beginPath();
      ctx.moveTo(12 + x_p, yGrafic_2 - 2);
      ctx.lineTo(12 + x_p, y_p - 2);
      ctx.strokeStyle = culoareLinieGraficP;//culoarePunctValoriGrafic;
      ctx.lineWidth = 4;
      ctx.closePath();
      ctx.stroke();

      //desenare punct valoare grafic_valori_desenat - vector_r
      if(i > orizont_regresie){
          ctx.beginPath();
          ctx.arc(12 + x_p, y_r, 2, 0, 2 * Math.PI);
          //ctx.moveTo(12 + x_p, y_r - 1);
          //ctx.lineTo(12 + x_p, y_r + 1);
          if(vector_r_normalizat[i] >= 0){
              ctx.strokeStyle = culoareGraficVectorR;//culoareTextCompensatorRosu;
              ctx.fillStyle = culoareGraficVectorR;//culoareGraficVectorR;
          }
          else {
              ctx.strokeStyle = culoareScadere;
              ctx.fillStyle = culoareScadere;
          }
          ctx.lineWidth = 1;
          ctx.closePath();
          ctx.stroke();
          //ctx.fill();


          /*
          ctx.beginPath();
          ctx.arc(12 + x1_1, y1_1, 1, 0, 2 * Math.PI);
          //ctx.filStyle = "black";
          if(vector_r[selectorZi] > 1){
              ctx.strokeStyle = culoarePuncteProiectieCrestere;//culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
          }
          else{
              ctx.strokeStyle = culoarePuncteProiectieScadere;//culoare_linie_trend;
          }

          ctx.lineWidth = 1;
          ctx.closePath();
          //ctx.fill();
          ctx.stroke();*/

      }
    }
}

function desenareGraficeTrenduri(){
  ctx = suprafataGrafica.context;

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

  //desenare proiectie
  //ziStart = data_2.length - orizont_regresie;
  if(selectorZi > orizont_trend){
      ziStart = selectorZi - orizont_regresie;
      ziFinal = selectorZi + orizont_proiectie;
      if(selectorZi > ziStart){
          var y1_1 = 0;
          var x1_1 = 0;
          for (let i = ziStart; i <= ziFinal ; i++) {
              x1_1 = (i-1)*incrementX;
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
              if(vector_r[selectorZi] > 1){
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
          ctx.fillStyle = culoarePunctValoriGrafic_3;
          ctx.fillText("" + Math.round(yp1), x1_1 + 19, y1_1 + 8);

          //desenare valoare bazaR
          ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          //ctx.fillStyle = culoareTextCompensatorRosu;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
          if(vector_r[selectorZi] > 1){
            ctx.fillStyle = culoareGraficVectorR;
            ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*1000))/1000 + " (>1!)", x1_1 + 20, y1_1 + 24);
          }
          else{
            ctx.fillStyle = culoareScadere;
            ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*1000))/1000, x1_1 + 20, y1_1 + 24);
          }


          //desenare valoare eroare totala sst2 (eroare regresie + eroare reziduala = varianta)
          //desenare deviatie standard
          ctx.fillStyle = culoare_linie_trend;
          //ctx.fillText("v=" + varianta2, x1_1 + 20, y1_1 + 38);
          //devstd
          ctx.fillText("E=" + Math.floor(vector_E[selectorZi]), x1_1 + 20, y1_1 + 38);


          //desenare punct valoare estimata
          ctx.beginPath();
          ctx.arc(12 + x1_1, y1_1, 4, 0, 2 * Math.PI);
          ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          //desenare indicator abscisa
          ctx.beginPath();
          ctx.moveTo(12 + x1_1, yGrafic_2 + 3);
          ctx.lineTo(12 + x1_1, yGrafic_2 + 7);
          ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          ctx.textAlign = "start";
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

  x_val_1 = index1 * incrementX;
  y_val_1 = Math.round(yGrafic_1 - ((data[index1]*scalaY_trend_1)/maxValue));
  x_val_2 = selectorZi*incrementX;
  y_val_2 = Math.round(yGrafic_1 - ((data[selectorZi]*scalaY_trend_1)/maxValue));
  //console.log("1st line: " + y_val_1);

  procent_variatie_1 = Math.floor((data[selectorZi] - data[index1]) / data[index1] * 100);
  procent_variatie_2 = Math.floor((data_2[selectorZi] - data_2[index1]) / data_2[index1] * 100);
  crestere_variatie_1 = Math.floor(data[selectorZi]/data[index1]*10)/10;
  crestere_variatie_2 = Math.floor(data_2[selectorZi]/data_2[index1]*10)/10;



  if(index1 > 0){
      if (procent_variatie_1>0){
        eticheta_1 = " +" + procent_variatie_1 + "%";
      }
      else{
        eticheta_1 = " " + procent_variatie_1 + "%";
      }

      if (procent_variatie_2>0){
        eticheta_2 = " +" + procent_variatie_2 + "%";
        culoareTrend = culoareCrestere;//culoareTextCompensatorFill;
      }
      else{
        eticheta_2 = " " + procent_variatie_2 + "%";
        culoareTrend = culoareScadere;
      }

      crestere_1 = crestere_variatie_1 + "x";
      crestere_2 = crestere_variatie_2 + "x";

      //if data_3 value is defined
      if(data_3[selectorZi]){
        ratap_2 = "(p+:" + Math.round(data_3[selectorZi]*100) + "%)";
      }
      else{
        //else take last available value
        ratap_2 = "(p+:" + Math.round(data_3[data_3.length-1]*100) + "%)";
      }


  }
  else{
    eticheta_1 = "";
    eticheta_2 = "";
    crestere_1 = "";
    crestere_2 = "";
    ratap_2 = "";
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
  ctx.fillStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.fillText("" + Math.round(data[selectorZi]), x_val_2 + 20, y_val_2 - 6);
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
  ctx.setLineDash([1, 1 + dist]);

  //ctx.setLineDash([1, 10]);
  //ctx.beginPath();
  ctx.moveTo(12 + xc1, yc1);
  ctx.lineTo(12 + xc2, yc2);
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.beginPath();
  ctx.closePath();
  ctx.stroke();



  //Desenare numar punct (2)
  ctx.textAlign = "end";
  ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoareNumarPunct;//culoareTextCompensatorFill;
  //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.fillText("(2)", 12 + x_val_2, y_val_2 - 8);

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
    ctx.fillRect(xLegendaDerivate + ident, yLegendaDerivate + 45, 50, 12);
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(ratap_2, xLegendaDerivate + ident, yLegendaDerivate + 56);

    //desenare valoare vector_r (in procente %)
    //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";

    //Afisare data - zi curenta
    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni[data_zi_luna[1]-1];
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(zi + " " + luna + "", xLegendaDerivate, yLegendaDerivate + 42);


    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] > 1){
      ctx.fillStyle = culoareGraficVectorR;
      ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 + " (>1!)", xLegendaDerivate + ident, yLegendaDerivate + 70);

      text_r = "R=+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 84);
    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*1000))/1000, xLegendaDerivate + ident, yLegendaDerivate + 70);

      text_r = "R=" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 84);
    }
    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //desenare predictie zi urmatoare
    /*
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("Ziua " + (Math.round(selectorZi) + Math.round(1.0)) + ":", xLegendaDerivate, yLegendaDerivate + 74);
    */

    if(selectorZi < (data.length - orizont_regresie)){
      //valoarea actuala
      valZiCur = data_2[selectorZi];
    }
    else{
      //media din predictie
      valZiCur = coefA * Math.pow(bazaR, (selectorZi-1));
      //console.log(Math.round(coefA * Math.pow(bazaR, (selectorZi-1))));
      //console.log("test");
    }

    if(vector_r[selectorZi] > 1){

      ctx.fillStyle = culoareGraficVectorR;
      ctx.fillText("dif=+" + Math.round(valZiCur * (vector_r[selectorZi] - 1)), xLegendaDerivate + ident, yLegendaDerivate + 98);

      text_zi_urmatoare = "" + Math.round(valZiCur) + "+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%=" + Math.round(valZiCur * vector_r[selectorZi]);
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 112);

    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("dif=" + Math.round(valZiCur * (vector_r[selectorZi] - 1)), xLegendaDerivate + ident, yLegendaDerivate + 98);

      text_zi_urmatoare = "" + Math.round(valZiCur) + "" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%=" + Math.round(valZiCur * vector_r[selectorZi]);
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 112);
    }

    //calcul derivate
    vr0 = vector_r[selectorZi-8];
    vr1 = vector_r[selectorZi-4];
    vr2 = vector_r[selectorZi];
    d1r1 = (vr1 - vr0)/4;
    d1r2 = (vr2 - vr1)/4;
    d2r2 = (d1r2 - d1r1)/4;

    //derivata ordin 1 (viteza de crestere sau scadere)
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(d1r2>0){
        ctx.fillStyle = culoareCrestere;
        ctx.fillText("dR=+" + Math.floor(d1r2*100000)/1000 + "(>0!)", xLegendaDerivate, yLegendaDerivate + 140);
    }
    else {
        ctx.fillStyle = culoareScadere;
        ctx.fillText("dR=" + Math.floor(d1r2*10000)/100 + " (<0)", xLegendaDerivate, yLegendaDerivate + 140);
    }
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //84, 126, 140

    //derivata ordin 2 (acceleratia - crestere sau scadere)
    ctx.fillStyle = culoarePunctValoriGrafic_3;
    if(d2r2>0){
        ctx.fillText("d2R=+" + Math.floor(d2r2*10000)/100 + "(^)", xLegendaDerivate, yLegendaDerivate + 154);
    }
    else{
        if(d1r2<0)
          ctx.fillStyle = culoareScadere;
        ctx.fillText("d2R=" + Math.floor(d2r2*10000)/100 + "", xLegendaDerivate, yLegendaDerivate + 154);
    }

  }

  //desenare valori grafice (grafic 1 jos, grafic 2 sus)
  for (let i = 0; i <= selectorZi; i++) {
      x_valoare = i*incrementX;
      y_valoare = Math.round(yGrafic_1 - ((data[i]*scalaY_trend_1)/maxValue));
      y_valoare_2 = Math.round(yGrafic_2 - ((data_2[i]*scalaY_trend_2)/maxValueGrafic2));

      //desenare linii conectare puncte grafic 2 sus
      if(i>0){
          x1_valoare = (i-1)*incrementX;
          y1_valoare = Math.round(yGrafic_1 - ((data[i-1]*scalaY_trend_1)/maxValue));
          y1_valoare_2 = Math.round(yGrafic_2 - ((data_2[i-1]*scalaY_trend_2)/maxValueGrafic2));

          //desenare linii conectare puncte valori grafic 1
          ctx.beginPath();
          ctx.moveTo(12 + x1_valoare, y1_valoare_2 );
          ctx.lineTo(12 + x_valoare, y_valoare_2);
          ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();

          //desenare linii conectare puncte valori grafic 2
          ctx.beginPath();
          ctx.moveTo(12 + x1_valoare, y1_valoare);
          ctx.lineTo(12 + x_valoare, y_valoare);
          ctx.strokeStyle = culoarePunctValoriGrafic;//culoarePunctValoriGrafic;
          ctx.lineWidth = 2;
          ctx.closePath();
          ctx.stroke();
      }
    }

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

    //Desenare numar punct (1)
    ctx.textAlign = "end";
    ctx.font = "italic 12px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareNumarPunct;//culoareTextCompensatorFill;
    //ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("(1)", 12 + x_val_1, y_val_1 - 8);

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
    ctx.moveTo(12 + x_valoare, yGrafic_2 + 3);
    ctx.lineTo(12 + x_valoare, yGrafic_2 + 7);
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
      ctx.moveTo(12 + x_val_1, yGrafic_2 + 3);
      ctx.lineTo(12 + x_val_1, yGrafic_2 + 7);
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

      ctx.beginPath();
      ctx.closePath();
      ctx.stroke();

      //centru mijloc - index2
      ctx.beginPath();
      ctx.moveTo(12 + xc1, yGrafic_2 + 3);
      ctx.lineTo(12 + xc1, yGrafic_2 + 7);
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText(index2, 12 + xc1, yGrafic_2 + 21);

    }

    //cerculet grafic vector r (in capat)
    if(selectorZi > orizont_regresie){
      if(vector_r_normalizat[selectorZi] >= 0){
          ctx.strokeStyle = culoareGraficVectorR;//culoareTextCompensatorRosu;
          ctx.fillStyle = culoareCerculetR;

      }
      else {
          ctx.strokeStyle = culoareScadere;
          ctx.fillStyle = culoareLinieGraficP;
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

}

function desenareGraficValori(){
    ctx = suprafataGrafica.context;

    //desenare linie limita regim nominal
    ctx.fillStyle = culoareLinieReferintaGrafic;
    ctx.fillRect(10, inaltimeSuprafataGrafica - 10 - ((medieCumulativ[selectorZi]*scalaY)/maxValue), lungimeSuprafataGrafica-15, 2);


    for (let i = 0; i <= selectorZi; i++) {
      x_valoare = i*incrementX;
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
    y_val_1 = inaltimeSuprafataGrafica - 178 - selectorZi;
    y_val_2 = y_val_1 - intervalProiectie;
    //y_val_2 = inaltimeSuprafataGrafica - scalaY - 100 - selectorZi - intervalProiectie;

    /*
    ctx.beginPath();
    ctx.moveTo(x_val_1, y_val_1);
    ctx.lineTo(x_val_1, y_val_2);
    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();*/

    //linie medie stanga
    lungime_segment_medie = Math.round( ((medieCumulativ[selectorZi]*scalaX)/maxValue) / 2 );
    x_ms_1 = x_val_1 - lungime_segment_medie;
    x_md_1 = x_val_1 + lungime_segment_medie;

    ctx.setLineDash([1, 16]);
    ctx.beginPath();
    ctx.moveTo(x_ms_1, y_val_1);
    ctx.lineTo(x_ms_1, y_val_2);
    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    //linie medie dreapta
    ctx.beginPath();
    ctx.moveTo(x_md_1, y_val_1);
    ctx.lineTo(x_md_1, y_val_2);
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

    for (let i = 0; i <= selectorZi; i++) {

      //GRAFIC VERTICAL - UMPLERE
      //desenare linie sub valoare grafic
      x_valoare_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
      x_valoare_2 = Math.round(x_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((x_valoare_2 - x_valoare_1) / 2);
      x_valoare_1 = x_valoare_1 - lungime_segment; //i*incrementX;
      x_valoare_2 = x_valoare_2 - lungime_segment;

      y_valoare = inaltimeSuprafataGrafica - 178 - i;

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
}

function desenareGraficOrizontal(){
    ctx = suprafataGrafica.context;

    //desenare linie orizontala medie
    //x_val_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
    y_val_1 = yGrafic_3;

    //y_val_1 = inaltimeSuprafataGrafica - 178 - selectorZi;
    //y_val_2 = y_val_1 - intervalProiectie;
    x_val_1 = 10 + Math.floor(selectorZi);
    x_val_2 = x_val_1 + intervalProiectie;

    //console.log("Selzi: " + selectorZi);
    //console.log(x_val_1 + " " + x_val_2);

    //y_val_2 = inaltimeSuprafataGrafica - scalaY - 100 - selectorZi - intervalProiectie;

    /*
    ctx.beginPath();
    ctx.moveTo(x_val_1, y_val_1);
    ctx.lineTo(x_val_1, y_val_2);
    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();*/

    //linie medie stanga
    lungime_segment_medie = Math.round( ((medieCumulativ[selectorZi]*scalaX)/maxValue) / 2 );
    y_ms_1 = y_val_1 - lungime_segment_medie;
    y_md_1 = y_val_1 + lungime_segment_medie;

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


    ctx.strokeStyle = "white";//culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.setLineDash([2, 4]);

    //ctx.beginPath();
    ctx.moveTo(x_val_1, y_ms_1);
    ctx.lineTo(x_val_2, y_ms_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie dreapta
    //ctx.setLineDash([1, 16]);
    //ctx.beginPath();
    ctx.moveTo(x_val_1, y_md_1);
    ctx.lineTo(x_val_2, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    //linie medie capat verticala
    //ctx.beginPath();
    ctx.setLineDash([2, 4]);
    ctx.moveTo(x_val_2, y_ms_1);
    ctx.lineTo(x_val_2, y_md_1);
    //ctx.closePath();
    ctx.stroke();

    ctx.setLineDash([]);

    //desenare text proiectie
    proiectie = medieCumulativ[selectorZi] * intervalProiectie;

    //Afisare data
    data_zi_luna_p = data_data[(Math.floor(selectorZi) + intervalProiectie)].split("/");
    zi_p = data_zi_luna_p[0];
    luna_p = data_luni[data_zi_luna_p[1]-1];

    //Valoare cumulativa
    ctx.textAlign = "start";

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;

    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("Ziua " + (Math.floor(selectorZi) + intervalProiectie), x_val_2 + 8, y_val_1 - 7);

    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(zi_p + " " + luna_p, x_val_2 + 8, y_val_1 + 7);

    ctx.textAlign = "start";
    ctx.fillStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("+" + Math.round(proiectie) + "!", x_val_2 - 78, y_val_1 + 6);

    ctx.textAlign = "start";
    //ctx.strokeStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    ctx.fillStyle = culoarePunctValoriGrafic;
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(">" + Math.round(dataCumulativ[selectorZi] + proiectie) + "...", x_val_2 + 8, y_val_1 + 24);
    //ctx.fillStyle = culoarePunctValoriGrafic_3;
    //ctx.fillText("" + Math.round(dataCumulativ[selectorZi]), 10, y_val_1);

    for (let i = 0; i <= selectorZi; i++) {

      //GRAFIC ORIZONTAL(VERTICAL) - UMPLERE
      //desenare linie sub valoare grafic
      y_valoare_1 = y_val_1; //i*incrementX;
      y_valoare_2 = Math.round(y_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((y_valoare_2 - y_valoare_1) / 2);
      y_valoare_1 = y_valoare_1 - lungime_segment; //i*incrementX;
      y_valoare_2 = y_valoare_2 - lungime_segment;

      x_valoare = 10 + i;

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

        //punct linie conectare (sus)
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x_valoare, y_valoare_1, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();

        //punct (jos)
        ctx.strokeStyle = "white";
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
                if (selectorZi < data.length - 1)
                        selectorZi += 1;
                else{
                    derulareAutomata = false;
                    pauza = true;
                }
                //console.log(slider.getAttribute("value"));
                slider.setAttribute("value", selectorZi);
                procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;

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


        actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
        if(mod == MOD_REGULATOR){
            desenareGraficValori();
            desenareCompensatorValori();
            desenareVaseComunicante();
            desenareZiValoare();
            desenareGraficVertical();
            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_FOTOGRAFIE){//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
            desenareGraficVertical();
            //desenarePuncteGraficOrizontal();
        }
        else{//MOD_GRAFICE
          desenareZiValoareTrenduri();
          desenareGraficeTrenduri();
          desenareGraficOrizontal();
        }
    }
}

function ActualizareSuprafataGraficaSingulara() {
        suprafataGrafica.clear();
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


        actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
        if(mod == MOD_REGULATOR){
            desenareGraficValori();
            desenareCompensatorValori();
            desenareVaseComunicante();
            desenareZiValoare();
            desenareGraficVertical();
            //desenarePuncteGraficOrizontal();
        }
        else if(mod == MOD_FOTOGRAFIE){//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
            desenareGraficVertical();
            //desenarePuncteGraficOrizontal();
        }
        else{//MOD_GRAFICE
            desenareZiValoareTrenduri();
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
}
