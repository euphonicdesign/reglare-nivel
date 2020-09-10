var lungimeSuprafataGrafica = 600;
var inaltimeSuprafataGrafica = 500;

var contorVectorizare = 0;
var contorLimitare = 0;

var contorVectorizare2 = 0;
var contorLimitare2 = 0;


var culoare_canvas = "#EFEFEF";

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
var culoareCrestereRosu = culoareTextCompensatorRosu;
var culoareScadere = "green";

var culoare_scadere_entitate = "#a9d6a9";//"#9fdf9f";
var culoare_crestere_entitate = "#a8d3f0";//"#99d6ff";
var culoareLinieGraficP = "#ffffe6";
var culoareTextGraficP = "#ffcf66";
var culoareGraficVectorR = "#996633";//"#ac7339";
var culoareGalben = culoareLinieGraficP;
var culoareRosu = "#e4b4b4";//"#d78e8e";//culoareCrestere;//culoareGraficVectorR;//"brown";
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
var culoareRadarLinieDetectieAccentuat = "rgba(255,255,255,1.0)";
var culoareRadarLinieDetectieCrestere = "rgba(153,102,51,1)";
var culoareRadarLinieDetectieScadere = "rgba(169,214,169,1)";
var culoareRadarLinieDetectieCrestereTransparent = "rgba(153,102,51,0.7)";
var culoareRadarLinieDetectieCadran1Transparent = "rgba(153,102,51,0.2)";
var culoareRadarLinieDetectieScadereTransparent = "rgba(38,145,31,0.7)";//"rgba(169,214,169,0.7)";
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


let data = [];
let data_2 = [];
let data_3 = [];

let data_10 = [
            0, 	0,
            2, 	5, 	4, 	2, 	4, 	7, 	5,
            11, 	4, 	25, 	16, 	9, 	39, 	8,
            7, 	9, 	25, 	27, 	20, 	28, 	25,
            24, 	12, 	26, 	28, 	15, 	13, 	17,
            17, 	17, 	32, 	25, 	19, 	25, 	23,
            33, 	23, 	19, 	25, 	42, 	27, 	27,
            9, 	23, 	24, 	31, 	18, 	22, 	28,
            26, 	20, 	30, 	14, 	30, 	10, 	25,
            16, 	10, 	19, 	15, 	10, 	8, 	11,
            9, 	18, 	13, 	9, 	10, 	11, 	13,
            9, 	17, 	0, 	9, 	11, 	9, 	10,
            8, 	8, 	11, 	15, 	9, 	11, 	11,
            19, 	17, 	10, 	14, 	22, 	11, 	16,
            12, 	11, 	16, 	16, 	10, 	14, 	10,
            23, 	22, 	17, 	16, 	20, 	21, 	23,
            19, 	18, 	31, 	18, 	17, 	13, 	24,
            13, 	17, 	30, 	21, 	19, 	17, 	21,
            17, 	12, 	36, 	27, 	25, 	24, 	15,
            22, 	19, 	33, 	30, 	35, 	39, 	36,
            34, 	19, 	48, 	41, 	45, 	50, 	43,
            41, 	29, 	35, 	43, 	53, 	44, 	50,
            37, 	38, 	45, 	32, 	48, 	42, 	37,
            39,
            37, 58, 54, 38, 48, 32, 39,
            43, 60, 40, 44, 47, 38, 43,
            33, 41, 51, 47,


];

let data_20 = [
            31, 	59, 	66, 	143, 	186, 	144, 	123,
            263, 	160, 	308, 	192, 	293, 	215, 	278,
            445, 	430, 	251, 	193, 	360, 	344, 	441,
            265, 	523, 	310, 	333, 	246, 	337, 	491,
            360, 	351, 	328, 	190, 	306, 	468, 	386,
            321, 	218, 	401, 	303, 	277, 	362, 	262,
            327, 	165, 	431, 	349, 	325, 	270, 	392,
            312, 	320, 	231, 	226, 	190, 	224, 	245,
            190, 	267, 	167, 	165, 	155, 	196, 	198,
            127, 	145, 	213, 	213, 	146, 	165, 	197,
            191, 	151, 	124, 	141, 	119, 	152, 	238,
            196, 	187, 	189, 	125, 	145, 	196, 	237,
            222, 	275, 	320, 	166, 	250, 	345, 	320,
            320, 	330, 	315, 	246, 	214, 	321, 	460,
            411, 	325, 	291, 	269, 	388, 	326, 	450,
            420, 	416, 	391, 	250, 	397, 	555, 	614,
            592, 	698, 	456, 	413, 	637, 	641, 	777,
            799, 	889, 	767, 	681, 	994, 	1030, 	1112,
            1119, 	1284, 	1120, 	1104, 	1151, 	1182, 	1356,
            1295, 	1225, 	1075, 	823, 	1232, 	1309, 	1345,
            1378, 	1350, 	1145, 	779, 	1215, 	1415, 	1454,
            1415, 	1328, 	1087, 	733, 	1014, 	1409, 	1346,
            1392, 	1189, 961,
            805, 1060, 1256, 1504, 1318, 1365, 952,
            755, 1053, 1298, 1365, 1339, 1269, 1150,
            883, 1136, 1271, 1389, 
          ];


let data_30 = [
            0.037, 	0.038,
            0.039, 	0.046, 	0.056, 	0.059, 	0.082, 	0.092, 	0.094,
            0.112, 	0.114, 	0.122, 	0.124, 	0.120, 	0.115, 	0.126,
            0.118, 	0.111, 	0.105, 	0.099, 	0.104, 	0.099, 	0.100,
            0.093, 	0.097, 	0.089, 	0.088, 	0.082, 	0.082, 	0.078,
            0.078, 	0.073, 	0.075, 	0.074, 	0.067, 	0.066, 	0.052,
            0.051, 	0.049, 	0.039, 	0.037, 	0.035, 	0.034, 	0.036,
            0.039, 	0.039, 	0.044, 	0.042, 	0.042, 	0.039, 	0.039,
            0.035, 	0.033, 	0.032, 	0.032, 	0.030, 	0.029, 	0.029,
            0.029, 	0.027, 	0.026, 	0.025, 	0.023, 	0.022, 	0.020,
            0.019, 	0.020, 	0.019, 	0.018, 	0.018, 	0.020, 	0.018,
            0.018, 	0.017, 	0.018, 	0.017, 	0.018, 	0.016, 	0.018,
            0.019, 	0.020, 	0.020, 	0.022, 	0.022, 	0.023, 	0.024,
            0.026, 	0.025, 	0.026, 	0.027, 	0.028, 	0.030, 	0.031,
            0.031, 	0.032, 	0.032, 	0.031, 	0.033, 	0.040, 	0.033,
            0.033, 	0.032, 	0.035, 	0.034, 	0.034, 	0.030, 	0.038,
            0.040, 	0.036, 	0.036, 	0.039, 	0.040, 	0.040, 	0.041,
            0.041, 	0.043, 	0.044, 	0.042, 	0.042, 	0.042, 	0.042,
            0.044, 	0.046, 	0.045, 	0.048, 	0.049, 	0.046, 	0.048,
            0.045, 	0.046, 	0.047, 	0.047, 	0.048, 	0.056, 	0.058,
            0.061, 	0.063, 	0.070, 	0.071, 	0.071, 	0.067, 	0.065,
            0.074, 	0.070, 	0.064, 	0.066, 	0.065, 	0.064, 	0.065,
            0.064, 	0.063, 	0.061, 	0.060,  0.060,  0.061,  0.059,
            0.057,  0.059,  0.059,  0.057,  0.057,  0.057,  0.057,
            0.057,  0.055,  0.055,  0.057,  0.062,  0.068,  0.055,

];



let data_data = [ '22/3',
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

let data_luni_lung = [
              "Ianuarie",
              "Februarie",
              "Martie",
              "Aprilie",
              "Mai",
              "Iunie",
              "Iulie",
              "August",
              "Septembrie",
              "Octombrie",
              "Noiembrie",
              "Decembrie",
            ];

let evenimente = [
              '15/4',
              '1/5',
              '15/5',
              '1/6',
              '15/6',
              '1/7',
              '1/8',
              '1/9',
              '15/9',
];

let evenimente_actiuni = [
              '15 Aprilie: limitare',//1/5
              '1 Mai: limitare',//1/5
              '15 Mai: vectorizare', //15/5
              '1 Iun: vectorizare (?)', //1/6
              '15 Iun: vectorizare (??)', //15/6
              '1 Iul: vectorizare (???)', //1/7
              '1 Aug: limitare (...)', //1/8
              '1 Sep: vectorizare (?!)', //1/9
              '7: vectorizare (...)', //15/9
];

let info_date = [
              '15/4',
              '1/5',
              '15/5',
              '1/6',
              '15/6',
              '1/7',
              '1/8',
              '1/9',
              '15/9',
];

let info_explicatii = [
              'Măsurile de prevenție au avut efect. Numărul și \
              \nrata de propagare au început să scadă.', //1/5

              'Numărul și rata de propagare continuă să scadă.', //1/5

              'O mare parte din măsurile preventive au fost eliminate. \
              \nIn următoarele 90 de zile se vor pierde încă 1710 \
              \nfără o atenție deosebită.', //15/5

              'Rata de propagare este în creștere!', //1/6

              'Atât rata de propagare cât și numărul de propagări \
              \nsunt în creștere!', //15/6

              'Creșterea este accelerată!', //1/7

              'Măsurile preventive au fost luate mult prea târziu... \
              \nSistemul a intrat in regim de suprasarcină... \
              \nPierderile sunt enorme!', //1/8

              'Măsurile actuale de prevenție sunt insuficiente. \
              \nValoarea curentă a referinței a depășit 22! \
              \nEa trebuie setată la valoarea 0...', //1/9

              '... .',
];


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
]

var raza_cerculet = 5;
var raza_pulsatie = 0;

let evenimente_contor = [];
let zile_contor_vectorizare = [];
let zile_contor_limitare = [];
let zile_evenimente_actiuni = [];
let zile_info_explicatii = [];

var xTextZi = 10;
var yTextZi = 50;
var xTextEveniment = xTextZi; //+ 130;
var yTextEveniment = yTextZi + 20;
var xCerculeteAcumulate = xTextZi + 0; //+ 130;
var yCerculeteAcumulate = yTextZi + 35;

var xTextInfoExplicatii = xTextZi;
var yTextInfoExplicatii = yTextZi + 195;




var indicatorZiEveniment = false;
var semn = "+";

let dataCumulativ = [];
let medieCumulativ = [];
let comandaIdeala = [];
let proiectie = [];
let vector_r = [];
let vector_r_normalizat = [];
let vector_coefA = [];
let vector_E = [];
let vector_E_procentual = [];
let vector_valZiCurenta = [];
let vectorXAvion = [];
let vectorYAvion = [];
let vectorDR = [];
let vectorD2R = [];
let vectorContorZileRadar = [];


//var incrementX = Math.round(lungimeSuprafataGrafica / (data.length + 1));
var incrementX = 3;

var MOD_FOTOGRAFIE = 0;
var MOD_REGULATOR = 1;
var MOD_GRAFICE = 2;
var mod = MOD_FOTOGRAFIE;

var fotografie = new Image();
fotografie.src = "https://euphonicdesign.github.io/reglare-nivel/images/fotografie.jpg";

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
var scalaY = 65;//55; //grafic valori orizontal - regulator grafic jos - rosu
var scalaY_2 = 95;//55; //grafic valori orizontal - regulator grafic jos - gri

var scala_grafic_2 = 0.9; //scalare suplimentara grafic 2 sus 1.5 = -150%

var scalaY_trend_2 = 160; // grafic sus
var scalaY_trend_3 = 80; // grafic sus - p+
var scalaY_trend_4 = 40; // grafic sus - vector_r_normalizat
var scalaY_trend_1 = 90; // grafic jos (mijloc)

var scalaEntitate = 70;

var scalaX_trend = 72;
//SCALA GRAFIC VERTICAL/ORIZONTAL
var scalaX = 120; //grafic valori vertical - cumulativ - foto, trend, regulator
var scalaGCompensator = 50;
var yGrafic_2 = 190;
var yGrafic_1 = yGrafic_2 + 150;
var yGrafic_3 = yGrafic_1 + 85;

var yLegendaDerivate = yGrafic_3 - 103;
var xLegendaDerivate = 440 - 12 - 30;
var ident = 9;

var xMagnificareGrafice = lungimeSuprafataGrafica - 15;
var yMagnificareGrafice = yGrafic_2 - 7;

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

//entitate
var xEntitate = 558 - 12 - 8;
var yEntitate = 468;

//radar
var vitezaRadar = 8; // 45 zile
var cadranStart = (360 / vitezaRadar) * 2 / 4 - 30/360 * (360 / vitezaRadar); // al treilea cadran (cadr IV)
var cadranFinal = (360 / vitezaRadar) * 3 / 4 - 30/360 * (360 / vitezaRadar); // al treilea cadran (cadr IV)

var razaCerc1 = 18 + 4 * 5;
var razaCerc2 = 12 + 2 * 5;
var razaCerc3 = 5 + 1 + 1;
var razaOrigineRadar = 4 + 1 + 1;
var razaOrigineAeroport = 2 + 2 + 2 + 0;
var xRadar = xEntitate + 12;//lungimeSuprafataGrafica - 32;//30;//110;//200;
var yRadar = 376 + 18; //120;//96;//76;
var razaPunctAvion = 3 + 1 + 1 + 0;
var razaPunctAvionMin = 4;
var scalaDimensiuneAvion = 10;
var scalaPozitieXAvion = 100; //nescalat ar fi 1000; 100 scalat de 10 ori
var maxRadarY = 1100;
var contorSens = 0;
var sensRadar = +1;
var xStalp = xRadar - razaCerc1 - razaCerc3*3;
var yStalp = yRadar;
var lungimeStalp = 22;
var lungimeSoseta = 18;



var curbura = 5;
var pistaLungime = razaCerc1 + curbura;
var pistaLatime = razaOrigineAeroport / 2 + curbura + 2;
var rectX = xRadar - pistaLungime;
var rectY = yRadar - pistaLatime / 2;


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
buton_afisaretrend.onclick = function() {
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
        if(scala_grafic_2 < 1.3){
            scala_grafic_2 += 0.1;
            maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
            ActualizareSuprafataGraficaSingulara();
            //console.log(scala_grafic_2);
        }
    }
}

var buton_scalare_minus = document.getElementById('scalare_minus');
buton_scalare_minus.onclick = function() {
    if(mod == MOD_GRAFICE){
        if(scala_grafic_2 > 0.5){
          scala_grafic_2 -= 0.1;
          maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2;
          ActualizareSuprafataGraficaSingulara();
          //console.log(scala_grafic_2);
        }
    }
}

//buton foto
var buton_foto = document.getElementById('foto');
var buton_rezervor = document.getElementById('rezervor');
var buton_grafice = document.getElementById('grafice');

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
}

buton_foto.onclick = function() {
    mod = MOD_FOTOGRAFIE;

    resetare_dim_butoane();
    buton_foto.style.height = b_grafice_height;
    buton_foto.style.width = b_grafice_width;

    salvarePreferintaMod();

    if (pauza == true){
        ActualizareSuprafataGraficaSingulara();
    }
}


buton_grafice.onclick = function() {
    //if(mod == MOD_REGULATOR || mod == MOD_FOTOGRAFIE){
    mod = MOD_GRAFICE;
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
    resetare_dim_butoane();
    buton_rezervor.style.height = b_grafice_height;
    buton_rezervor.style.width = b_grafice_width;

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
          if (selectorZi < (data.length - 1))
            selectorZi += 1;
    }

    if(e.code === "Space") {
        pauza = !pauza;
    }

    procentDinCapacitateMax = data[selectorZi]/nivelMaxAfisatRezervor;
    //slider.setAttribute("value", selectorZi);
    slider.value = Math.round(selectorZi);
    ActualizareSuprafataGraficaSingulara();
}

function prelucrareDate(){
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
    for (let i = 0; i < data.length; i++) {
        cumul = 0;

        for (let j = 0; j <= i ; j++) {
          cumul = cumul + data[j];
        }

        dataCumulativ[i] = cumul;
        medieCumulativ[i] = Math.round(cumul/(i+1));
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
    maxValueR = Math.max(...vector_r);
    calcul_parametrii_Predictie();
    maxValueProiectie = coefA * Math.pow(bazaR, data_2.length - 1 + orizont_proiectie);
    //console.log(maxValueProiectie);

    maxValueGrafic2 = Math.max(maxValue_2, maxValueProiectie) * scala_grafic_2; //- Math.abs(Math.floor((maxValue_2 - maxValueProiectie) * 0.7));
    //console.log("maxValue_2: " + maxValue_2);
    //console.log("maxValueProiectie: " + maxValueProiectie);
    //console.log("maxValueGrafic2 (max): " + maxValueGrafic2);


    for(let i=0; i < data_2.length; i++ ){
        if(i>orizont_regresie){
          vector_valZiCurenta[i] = vector_coefA[i] * Math.pow(vector_r[i], (i-1));
          vector_E_procentual[i] = vector_E[i] / vector_valZiCurenta[i];
        }
        else {
          vector_valZiCurenta[i] = 0;
          vector_E_procentual[i] = 0;
        }
    }
    maxValZiCur = Math.max(...vector_valZiCurenta);

    //calcul traiectorie avion Radar

    for(let i=0; i < data_2.length; i++ ){
        if(i>orizont_regresie){
          //vector_valZiCurenta[i] = vector_coefA[i] * Math.pow(vector_r[i], (i-1));
          //vector_E_procentual[i] = vector_E[i] / vector_valZiCurenta[i];

          //var xAvion = xRadar + vector_r[selectorZi]/maxValueR * (razaCerc1);
          vectorXAvion[i] = xRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
          vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);

        }
        else {
          //vector_valZiCurenta[i] = 0;
          //vector_E_procentual[i] = 0;
          vectorXAvion[i] = xRadar + (data_3[i]/2 * 1000) / scalaPozitieXAvion * (razaCerc1);  // p+
          vectorYAvion[i] = yRadar - (data_2[i]) / maxRadarY /*maxValZiCur*/ * (razaCerc1);

          //raza_pop = data_2[selectorZi]/maxValZiCur * scalaEntitate;
        }
    }


    //var valZiCurV = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi-1));


    setare_mod();

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
    } else{
        buton_foto.style.height = b_grafice_height;
        buton_foto.style.width = b_grafice_width;
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

    //calcul vectorContorZileRadar
    /*
    var contorRadar = 0;
    for(let i=0; i < data_2.length; i++ ){
        if(vector_r[i] >= 1){
            contorRadar += 1;
        }
        else{
            contorRadar -= 1;
        }
        vectorContorZileRadar[i] = contorRadar;
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
        ctx.beginPath();
        ctx.arc(xCerculeteAcumulate + raza_cerculet, yCerculeteAcumulate, raza_cerculet, 0, 2 * Math.PI);
        ctx.closePath();

        ctx.lineWidth = 2;
        ctx.fillStyle = culoareMaro; //culoareVerde
        ctx.strokeStyle = culoareCrestereMaro;//evenimente_tip[nr_ev];//culoareScadere
        ctx.fill();
        ctx.stroke();

        //desenare
        ctx.textAlign = "start";
        ctx.font = "bold 14px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillStyle = culoareCrestereMaro;
        ctx.fillText(zile_contor_vectorizare[selectorZi] + "\u279A", xCerculeteAcumulate + 8 + raza_cerculet, yCerculeteAcumulate + raza_cerculet);

        //desenare cerculet limitare verde
        ctx.beginPath();
        ctx.arc(xCerculeteAcumulate + 40 + raza_cerculet, yCerculeteAcumulate, raza_cerculet, 0, 2 * Math.PI);
        ctx.closePath();

        //ctx.lineWidth = 2;
        ctx.fillStyle = culoareVerde;
        ctx.strokeStyle = culoareScadere;
        ctx.fill();
        ctx.stroke();

        //desenare
        //ctx.textAlign = "start";
        //ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
        ctx.fillStyle = culoareScadere;
        ctx.fillText(zile_contor_limitare[selectorZi] + "\u2798", xCerculeteAcumulate + 48 + raza_cerculet, yCerculeteAcumulate + raza_cerculet);
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

function desenareZiValoare() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = culoareTextZi;
    //culoare implicita
    ctx.strokeStyle = culoareTextZi;
    ctx.lineWidth = 1;
    ctx.textAlign = "start";

    //Ziua
    //ctx.font = "30px Arial";
    ctx.font = "italic bold 30px Helvetica, Arial, sans-serif";
    //ctx.fillText("Ziua " + selectorZi, 10, 50);
    ctx.strokeText("Ziua " + selectorZi, 10, 50);

    data_zi_luna = data_data[selectorZi].split("/");
    zi = data_zi_luna[0];
    luna = data_luni_lung[data_zi_luna[1]-1];
    ctx.font = "italic 16px Helvetica, Arial, sans-serif";
    ctx.fillText( "(" + zi + " " + luna + ")", xTextZi, yTextZi + 22);


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
    ctx.fillText("Ref=0 (actuală=" + medieCumulativ[selectorZi] + "...)" , xLegenda, yLegenda);

    //Constante amplificare
    ctx.fillText("Kp=" + kp + " Ki=" + ki + " Kd=" + kd, xLegenda, yl1);

    //Eroarea
    //ctx.fillText("Er=" + Math.round(data[selectorZi]), 20, 260);

    //Compensator
    ctx.fillText("C=" + "Kp*" + Math.round(data[selectorZi]) + "+Ki*"+medieCumulativ[selectorZi] + "+Kd*" + medieCumulativ[selectorZi] * intervalProiectie, xLegenda, yl2);

    //Grad atentie
    //ctx.fillStyle = culoareTextCompensatorFill;
    //ctx.font = "italic 12px system-ui, Arial, sans-serif";
    ctx.fillText("Grad de atenție:", xLegenda, yl3);

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
    y_r = Math.round(yGrafic_2 - ((vector_r_normalizat[i]*scalaY_trend_4)/maxValue_4));

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
    if(i > orizont_regresie){
        ctx.beginPath();
        if(plin && pulsatie_2/*raza_pulsatie == 1*/){
            ctx.arc(12 + x_p, y_r, raza_cerculet + raza_pulsatie + 2, 0, 2 * Math.PI);
        }
        else {
            ctx.arc(12 + x_p, y_r, raza_cerculet + raza_pulsatie, 0, 2 * Math.PI);
        }

        //ctx.moveTo(12 + x_p, y_r - 1);
        //ctx.lineTo(12 + x_p, y_r + 1);
        if(vector_r_normalizat[i] >= 0){
            ctx.strokeStyle = culoareCrestereMaro;//culoareGraficVectorR;//culoareTextCompensatorRosu;
            //ctx.fillStyle = culoareGraficVectorR;//culoareGraficVectorR;
        }
        else {
            ctx.strokeStyle = culoareScadere;
            //ctx.fillStyle = culoareScadere;
        }
        ctx.closePath();

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
            ctx.stroke();
        }
    }
  }
}

function desenarePuncteTrendMedie(){
  //x_medie = 0; //(orizont_regresie + 1)
  for (let i = (orizont_regresie + 1); i <= selectorZi; i++) {
      //x_medie += incrementX;
      //if(i > (orizont_regresie + 1)){
      x_medie = (i - selectorZiStart)*incrementX;

      y_medie = Math.round(yGrafic_2 - ((vector_valZiCurenta[i]*scalaY_trend_2)/maxValueGrafic2));

      ctx.beginPath();
      ctx.arc(12 + x_medie, y_medie, 3, 0, 2 * Math.PI);
      ctx.fillStyle = "grey";
      ctx.strokeStyle = "aqua";
      if(vector_r[i] >= 1){
          ctx.fillStyle = culoareMedieCrestere;//culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
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

function desenareEntitate(){
    raza_pop = valZiCur/maxValZiCur * scalaEntitate;
    valZiUrm = vector_coefA[selectorZi] * Math.pow(vector_r[selectorZi], (selectorZi + orizont_proiectie - 1));

    if(selectorZi>orizont_regresie){
        raza_transmisie = valZiUrm/maxValZiCur * scalaEntitate;
    }
    else{
        //raza_transmisie = 0;
        valZiUrm = data_2[selectorZi] * Math.pow((1 + data_3[selectorZi]/2), (orizont_proiectie - 1));
        raza_transmisie = valZiUrm/maxValZiCur * scalaEntitate;

        raza_pop = data_2[selectorZi]/maxValZiCur * scalaEntitate;
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
    ctx.setLineDash([]);

    //cerculet grafic vector r (in capat)
    /*
    if(selectorZi > orizont_regresie){
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
          ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillStyle = culoareTextZi;//culoarePunctValoriGrafic_3;


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

function desenareRadar(){

  ctx.lineWidth = 2;
  ctx.fillStyle = culoareRadarCercuri;
  ctx.strokeStyle = culoareRadarCercuri;//"#ffbb33";//culoareGraficVectorR;

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
  ctx.arc(xRadar, yRadar, razaCerc1, Math.PI, Math.PI * 3/2);
  ctx.closePath();
  ctx.fill();

  /*
  ctx.fillStyle = culoareRadarLinieDetectieCadran1Transparent;
  ctx.beginPath();
  ctx.moveTo(xRadar,yRadar);
  ctx.arc(xRadar, yRadar, razaCerc1, Math.PI * 3/2, Math.PI * 4/2);
  ctx.closePath();
  ctx.fill();*/

  //Cerc 2 mijloc
  ctx.beginPath();
  ctx.arc(xRadar, yRadar, razaCerc2, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.stroke();



  //Desenare Axe radar
  ctx.strokeStyle = culoareRadarCercuri;
  ctx.moveTo(xRadar - razaCerc1, yRadar);
  ctx.lineTo(xRadar + razaCerc1, yRadar);
  ctx.stroke();

  ctx.moveTo(xRadar, yRadar - razaCerc1);
  ctx.lineTo(xRadar, yRadar + razaCerc1);
  ctx.stroke();

  //Cerc 3 interior
  ctx.strokeStyle = "#4d4d4d";
  ctx.fillStyle = "#4d4d4d";
  ctx.beginPath();
  ctx.arc(xRadar, yRadar, razaCerc3, 0, 2 * Math.PI);
  ctx.closePath();
  ////if(pulsatie)
    ////ctx.stroke();
  ctx.fill();
  ctx.stroke();
  //ctx.beginPath();
  //ctx.closePath();


  //Desenare Pista Aeroport
  ctx.fillStyle = "grey";//culoare_scadere_entitate;
  ctx.strokeStyle = "#4d4d4d";//"white";
  //ctx.lineWidth = 3;
  ctx.lineJoin = "round";
  ctx.lineWidth = curbura;
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
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
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



  if(pulsatie_2){
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    //ctx.fillStyle = culoarePunctValoriGrafic_3;;
    if(culoare_pulsatie == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalp, yStalp - lungimeStalp - 6);
        ctx.fillText(" \u21E8", xStalp, yStalp - lungimeStalp - 6);
    }
    else {
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalp, yStalp - lungimeStalp - 6);
        ctx.fillText("\u21E6 ", xStalp, yStalp - lungimeStalp - 6);
    }
  }
  else {
    ctx.font = "bold 18px Helvetica, system-ui, Arial, sans-serif";
    if(evenimente_tip[zile_evenimente_actiuni[selectorZi]] == culoareMaro){
        ctx.fillStyle = "rgba(204,153,102,0.8)";
        ctx.fillText("\u21E8", xStalp, yStalp - lungimeStalp - 6);
    }
    else{
        ctx.fillStyle = "rgba(38,145,31,0.6)";//culoareScadere;
        ctx.fillText("\u21E6", xStalp, yStalp - lungimeStalp - 6);
    }
  }


  //Desenare Soseta Vant
  ctx.lineJoin = "round";
  ctx.lineWidth = 2;
  ctx.strokeStyle = "#4d4d4d";
  ctx.fillStyle = "#4d4d4d";


  //desenare stalp soseta
  ctx.moveTo(xStalp, yStalp);
  ctx.lineTo(xStalp, yStalp - lungimeStalp);
  ctx.stroke();

  ctx.beginPath();
  ctx.closePath();

  //vectorXAvion[i] = xRadar + vector_r_normalizat[i] / scalaPozitieXAvion * (razaCerc1);
  //vectorYAvion[i] = yRadar - vector_valZiCurenta[i] / maxRadarY /*maxValZiCur*/ * (razaCerc1);
  xsos = vector_r_normalizat[selectorZi] / scalaPozitieXAvion * 1.5 * 90;
  xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
  ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);

  ctx.lineWidth = 4;

  if(vector_r[selectorZi] > 1){
      ctx.strokeStyle = culoareCrestereMaro;
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.strokeStyle = culoareScadere;
      ctx.fillStyle = culoareScadere;
  }

  if(selectorZi <= orizont_regresie){
    ctx.strokeStyle = culoareCrestereMaro;
    ctx.fillStyle = culoareCrestereMaro;
    xsos = data_3[selectorZi]/2*1000 / scalaPozitieXAvion * 1.5 * 90;
    //console.log(xsos);
    xsoseta = lungimeSoseta * Math.sin(xsos * Math.PI * 2 / 360);
    ysoseta = lungimeSoseta * Math.cos(xsos * Math.PI * 2 / 360);
  }

  //desenare cerc baza soseta
  //ctx.fillStyle = "#4d4d4d";

  ctx.beginPath();
  ctx.arc(xStalp, yStalp - lungimeStalp, 4, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  //desenare cerc capat soseta
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(xStalp + xsoseta, yStalp - lungimeStalp + ysoseta, 2, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.closePath();

  //desenare soseta
  ctx.moveTo(xStalp, yStalp - lungimeStalp);
  ctx.lineTo(xStalp + xsoseta, yStalp - lungimeStalp + ysoseta);
  ctx.stroke();


  ctx.beginPath();
  ctx.closePath();


  //console.log("xsoseta: " + xsoseta);
  //console.log("ysoseta: " + ysoseta);

  //Desenare Raza Radar
  radianiZi = selectorZi * (2 * Math.PI) / 360 * vitezaRadar; //360/8 = 45

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

  for (let i = (selectorZi - 255); i < selectorZi; i++){
    nuantar = (255 - (( i + 160 - selectorZi) % 255));
    nuantag = nuantar;
    nuantab = nuantar/2;
    transp = 0.0 + i / selectorZi / 2;
    ctx.fillStyle = "rgba(" + nuantar + "," + nuantag + "," + nuantab +", " + transp + ")";

    ctx.beginPath();
    ctx.arc(vectorXAvion[i], vectorYAvion[i] , 1 * (1 + 1 * (selectorZi-i)/selectorZi) + 1.0 * (medieCumulativ[i]/scalaDimensiuneAvion), 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();

  }


  //desenare Avion pe radar
  if(vectorXAvion[selectorZi] - xRadar > 0){
      ctx.fillStyle = culoareCrestereMaro;
  }
  else{
      ctx.fillStyle = culoareScadere;
  }
  ctx.strokeStyle = "white";
  ctx.lineWidth = 1;

  dimensiuneAvion = razaPunctAvionMin + medieCumulativ[selectorZi]/scalaDimensiuneAvion;
  //console.log(dimensiuneAvion);

  ctx.beginPath();
  ctx.arc(vectorXAvion[selectorZi], vectorYAvion[selectorZi] , dimensiuneAvion, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

}

function desenareNivelMagnificareGrafice(){
    ctx.textAlign = "end";
    ctx.font = "14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoareTextZi;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
    ctx.fillText("\u2222:         ", xMagnificareGrafice, yMagnificareGrafice);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("" + (100 + (100 - Math.round(scala_grafic_2*10000)/100)) + "%", xMagnificareGrafice, yMagnificareGrafice);
}

function desenareGraficeTrenduri(){


  ctx = suprafataGrafica.context;

  desenareEvenimente();
  desenareEntitate();
  desenareNivelMagnificareGrafice();


  //desenare linie referinta Grafic trenduri 1
  ctx.fillStyle = culoareLinieReferintaGrafic;
  ctx.fillRect(10, yGrafic_1, lungimeSuprafataGrafica-20, - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue));

  //desenare valoare Ref_a
  ctx.textAlign = "end";
  ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareDreptunghiReferintaGraficTrenduri;//culoare_linie_trend;//culoarePunctValoriGrafic_3;
  ctx.fillText("Ref. actual\u0103", lungimeSuprafataGrafica - 15, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 21);
  if(data[selectorZi] > medieCumulativ[selectorZi]){
      ctx.fillText("" + Math.round(medieCumulativ[selectorZi]) + "... ", lungimeSuprafataGrafica - 25, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) - 4);

      ctx.textAlign = "center";
      ctx.fillStyle = culoareCrestereRosu;
      //ctx.fillStyle = culoareCrestereMaro;
      if(pulsatie_3){
          ctx.font = "18px Helvetica, system-ui, Arial, sans-serif";
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
      if(pulsatie_3){
          ctx.font = "18px Helvetica, system-ui, Arial, sans-serif";
          ctx.fillText("\u25BC", lungimeSuprafataGrafica - 18, yGrafic_1 - ((medieCumulativ[selectorZi]*scalaY_trend_1)/maxValue) + 16);
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
  //ziStart = data_2.length - orizont_regresie;
  if(selectorZi > orizont_trend){
      ziStart = selectorZi - orizont_regresie;
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
          ctx.fillText("E=" + Math.floor(vector_E[selectorZi]) + " (" + Math.floor(vector_E_procentual[selectorZi]*100) + "%)", x1_1 + 20, y1_1 + 38);

          //desenare indicator abscisa
          ctx.beginPath();
          ctx.moveTo(12 + x1_1, yGrafic_2);
          ctx.lineTo(12 + x1_1, yGrafic_2 + 4);
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

  x_val_1 = (index1 - selectorZiStart) * incrementX;
  y_val_1 = Math.round(yGrafic_1 - ((data[index1]*scalaY_trend_1)/maxValue));
  x_val_2 = (selectorZi - selectorZiStart) * incrementX;
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
        eticheta_2 = " +" + procent_variatie_2 + "%\u21E7";
        culoareTrend = culoareCrestereRosu;//culoareTextCompensatorFill;
      }
      else{
        eticheta_2 = " " + procent_variatie_2 + "%\u21E9";
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
  //desenare avion
  ctx.fillText("" + Math.round(data[selectorZi]) + "\u2708", x_val_2 + 20, y_val_2 - 6);
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

    ctx.fillStyle = culoareLinieGraficP;
    ctx.fillRect(xLegendaDerivate + ident + 8, yLegendaDerivate + 114, 50, 16);

    if(vector_r[selectorZi] >= 1){
        ctx.fillStyle = culoare_crestere_entitate;
    }
    else{
        ctx.fillStyle = culoare_scadere_entitate;
    }
    ctx.fillRect(xLegendaDerivate + ident + 60, yLegendaDerivate + 114, 50, 16);

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(ratap_2, xLegendaDerivate + ident, yLegendaDerivate + 56);

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
    ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(dataDeAfisat, xLegendaDerivate, yLegendaDerivate + 42);


    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){
      ctx.fillStyle = culoareCrestereRosu;
      if((Math.floor(vector_r[selectorZi]*10000))/10000 == 1){
          ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 /*+ " (~1!)"*/, xLegendaDerivate + ident, yLegendaDerivate + 70);
      }
      else{
          ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000 /*+ " (>1!)"*/, xLegendaDerivate + ident, yLegendaDerivate + 70);
      }

      ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoareCrestereRosu;
      text_r = "R=+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 84);
    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("r=" + (Math.floor(vector_r[selectorZi]*10000))/10000, xLegendaDerivate + ident, yLegendaDerivate + 70);

      ctx.font = "italic bold 14px Helvetica, system-ui, Arial, sans-serif";
      text_r = "R=" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      ctx.fillText(text_r, xLegendaDerivate + ident, yLegendaDerivate + 84);
    }
    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //desenare predictie zi urmatoare
    /*
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("Ziua " + (Math.round(selectorZi) + Math.round(1.0)) + ":", xLegendaDerivate, yLegendaDerivate + 74);
    */

    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){

      ctx.fillStyle = culoareCrestereRosu;
      ctx.fillText("dif=+" + Math.floor(valZiCur * (vector_r[selectorZi] - 1)*10)/10, xLegendaDerivate + ident, yLegendaDerivate + 98);

      text_zi_urmatoare = "" + Math.floor(valZiCur*10)/10 + "+" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";
      //ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      //ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 112);

    }
    else{
      ctx.fillStyle = culoareScadere;
      ctx.fillText("dif=" + Math.floor(valZiCur * (vector_r[selectorZi] - 1)*10)/10, xLegendaDerivate + ident, yLegendaDerivate + 98);

      text_zi_urmatoare = "" + Math.floor(valZiCur*10)/10 + "" + ((Math.floor((vector_r[selectorZi] - 1)*10000))/100) + "%";

    }

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText(text_zi_urmatoare, xLegendaDerivate + ident, yLegendaDerivate + 112);
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("  =" + Math.floor(valZiCur * vector_r[selectorZi] * 1)/1, xLegendaDerivate + ident, yLegendaDerivate + 128);

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    if(vector_r[selectorZi] >= 1){
        //+
        ctx.fillText("+" + Math.round((yp1 - valZiCur * vector_r[selectorZi]) * 1)/1, xLegendaDerivate + ident + 60, yLegendaDerivate + 128);
    }
    else{
        //- (fara semn)
        ctx.fillText("" + Math.round((yp1 - valZiCur * vector_r[selectorZi]) * 1)/1, xLegendaDerivate + ident + 60, yLegendaDerivate + 128);
    }

    ctx.font = "italic 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillStyle = culoarePunctValoriGrafic_3;
    ctx.fillText("" + Math.round(yp1) + "", xEntitate + 12, yLegendaDerivate + 128);


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
        ctx.fillText("dR=+" + Math.floor(d1r2*100000)/1000 + "\u21E7", xLegendaDerivate, yLegendaDerivate + 150);
    }
    else {
        ctx.fillStyle = culoareScadere;
        ctx.fillText("dR=" + Math.floor(d1r2*10000)/100 + "\u21E9", xLegendaDerivate, yLegendaDerivate + 150);
    }
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";

    //84, 126, 140

    //derivata ordin 2 (acceleratia - crestere sau scadere)
    ctx.fillStyle = culoarePunctValoriGrafic_3;
    if(d2r2>0){
        ctx.fillText("d\u00B2R=+" + Math.floor(d2r2*10000)/100 /*+ " ▲"*/, xLegendaDerivate, yLegendaDerivate + 164);
    }
    else{
        //if(d1r2<0)
          //ctx.fillStyle = culoareScadere;
        ctx.fillText("d\u00B2R=" + Math.floor(d2r2*10000)/100 /*+ "▼"*/, xLegendaDerivate, yLegendaDerivate + 164);
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

          //desenare linii conectare puncte valori grafic 1
          if(afisaretrend){
              ctx.beginPath();
              ctx.moveTo(12 + x1_valoare, y1_valoare_2 );
              ctx.lineTo(12 + x_valoare, y_valoare_2);
              ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
              ctx.lineWidth = 2;
              ctx.closePath();
              ctx.stroke();
          }


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
    if(selectorZi > orizont_regresie){
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
    proiectie = medieCumulativ[selectorZi] * intervalProiectie;

    //Afisare data
    data_zi_luna_p = data_data[(Math.floor(selectorZi) + intervalProiectie)].split("/");
    zi_p = data_zi_luna_p[0];
    luna_p = data_luni_lung[data_zi_luna_p[1]-1];

    //Valoare cumulativa
    ctx.textAlign = "start";

    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;

    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("Ziua " + (Math.floor(selectorZi) + intervalProiectie), x_val_2 + 8, y_val_1 - 7);

    //ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText(zi_p + " " + luna_p, x_val_2 + 8, y_val_1 + 7);

    ctx.textAlign = "center";
    ctx.fillStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    if(pulsatie_2){
        ctx.font = "italic bold 18px Helvetica, system-ui, Arial, sans-serif";
    }
    else{
        ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    }

    ctx.fillText(" +" + Math.round(proiectie) + "!", x_val_2 - 48, y_val_1 + 6);

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

      //desenare capat nuantat
      if(procentDinCapacitate > 1){
          ctx.beginPath();
          ctx.moveTo(x_valoare, y_valoare_1);
          ctx.lineTo(x_valoare, y_valoare_1 - 5);
          ctx.strokeStyle = culoareGalben;
          ctx.closePath();
          ctx.stroke();

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

        //pulsatie_3 = false;
        if(selectorZi % orizont_regresie == 0){
          pulsatie_3 = true;
        }
        else{
          pulsatie_3 = false;
        }
        //console.log(pulsatie_3);


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

        //pulsatie_3 = false;
        if(selectorZi % orizont_regresie){
          pulsatie_3 = true;
        }
        else{
          pulsatie_3 = false;
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
