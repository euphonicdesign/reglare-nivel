let data = [];
let data_2 = [];
let data_3 = [];

let dataToate = [];
let data_2Toate = [];

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
            33, 41, 51, 47, 35, 27, 36,
            22, 51, 49, 27, 48, 42, 33,
            23, 45, 47, 41, 42, 54, 31,
            30, 44, 33, 37, 53, 32, 56,
            45, 73, 82, 44, 52, 59, 53,
            56, 68, 66, 73, 75, 63, 60,
            59, 65, 69, 98, 82, 73, 73,
            79, 104, 107, 83,

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
            1392, 	1189, 981,
            805, 1060, 1256, 1504, 1318, 1365, 952,
            755, 1053, 1298, 1365, 1339, 1269, 1150,
            883, 1136, 1271, 1380, 1391, 1311, 1109,
            692, 1111, 1713, 1679, 1527, 1333, 1231,
            808, 1059, 1787, 1639, 1629, 1552, 1438,
            1271, 1470, 2158, 2086, 2343, 2064, 1835,
            1591, 2121, 2958, 3130, 3186, 3517, 2880,
            2069, 3109, 4016, 4013, 4026, 3952, 3920,
            2466, 3400, 4848, 4902, 5028, 4761, 3855,
            2844, 4724, 5343, 6481,


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
            0.057,
            0.059, 0.061, 0.06, 0.055, 0.051, 0.06, 0.059,
            0.058, 0.057, 0.06, 0.063, 0.064, 0.065, 0.065,
            0.066, 0.066, 0.066, 0.066, 0.066, 0.068, 0.07,
            0.074, 0.076, 0.078, 0.081, 0.089, 0.089, 0.079,
            0.091, 0.096, 0.098, 0.103, 0.102, 0.113, 0.128,
            0.119, 0.121, 0.127, 0.131, 0.134, 0.134, 0.141,
            0.141, 0.138, 0.139, 0.136, 0.145, 0.144, 0.143,
            0.144,



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
              '31/5', '1/6', '2/6', '3/6', '4/6', '5/6', '6/6',
              '7/6', '8/6', '9/6', '10/6', '11/6', '12/6', '13/6',
              '14/6', '15/6', '16/6', '17/6', '18/6', '19/6', '20/6',
              '21/6', '22/6', '23/6', '24/6', '25/6', '26/6', '27/6',
              '28/6', '29/6', '30/6', '1/7', '2/7', '3/7', '4/7',
              '5/7', '6/7', '7/7', '8/7', '9/7', '10/7', '11/7',
              '12/7', '13/7', '14/7', '15/7', '16/7', '17/7', '18/7',
              '19/7', '20/7', '21/7', '22/7', '23/7', '24/7', '25/7',
              '26/7', '27/7', '28/7', '29/7', '30/7', '31/7', '1/8',
              '2/8', '3/8', '4/8', '5/8', '6/8', '7/8', '8/8',
              '9/8', '10/8', '11/8', '12/8', '13/8', '14/8', '15/8',
              '16/8', '17/8', '18/8', '19/8', '20/8', '21/8', '22/8',
              '23/8', '24/8', '25/8', '26/8', '27/8', '28/8', '29/8',
              '30/8', '31/8', '1/9', '2/9', '3/9', '4/9', '5/9',
              '6/9', '7/9', '8/9', '9/9', '10/9', '11/9', '12/9',
              '13/9', '14/9', '15/9', '16/9', '17/9', '18/9', '19/9',
              '20/9', '21/9', '22/9', '23/9', '24/9', '25/9', '26/9',
              '27/9', '28/9', '29/9', '30/9', '1/10', '2/10', '3/10',
              '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '10/10',
              '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10',
              '18/10', '19/10', '20/10', '21/10', '22/10', '23/10', '24/10',
              '25/10', '26/10', '27/10', '28/10', '29/10', '30/10', '31/10',
              '1/11', '2/11', '3/11', '4/11', '5/11', '6/11', '7/11',
              '8/11', '9/11', '10/11', '11/11', '12/11', '13/11', '14/11',
              '15/11', '16/11', '17/11', '18/11', '19/11', '20/11', '21/11',
              '22/11', '23/11', '24/11', '25/11', '26/11', '27/11', '28/11',
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
              '7/10',
              '15/10',
              '20/10',
];

let evenimente_actiuni = [
              '15 Apr: limitare',//1/5
              '1 Mai: limitare',//1/5
              '15 Mai: vectorizare', //15/5
              '1 Iun: vectorizare (?)', //1/6
              '15 Iun: vectorizare (??)', //15/6
              '1 Iul: vectorizare (???)', //1/7
              '1 Aug: limitare (...)', //1/8
              '1 Sep: vectorizare (?!)', //1/9
              '15 Sep: vectorizare (...)', //15/9
              '7 Oct: limitare (...)', //15/9
              '15 Oct: limitare (...)', //15/9
              '20 Oct: limitare (...)', //20/9
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
              '7/10',
              '15/10',
              '20/10',
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

              '... cadranul 2... S.O.S.',

              '... cadranul 2... S.O.S.',

              '... cadranul 2... S.O.S.',

              '... cadranul 2... S.O.S.',
];
