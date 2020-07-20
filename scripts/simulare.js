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
            18.33,

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
              818.33,
            ];

let dataCumulativ = [];
let medieCumulativ = [];
let comandaIdeala = [];
let proiectie = [];
var incrementX = Math.round(lungimeSuprafataGrafica / (data.length + 1));

var MOD_FOTOGRAFIE = 0;
var MOD_REGULATOR = 1;
var MOD_GRAFICE = 2;
var mod = MOD_FOTOGRAFIE;

var fotografie = new Image();
fotografie.src = "https://euphonicdesign.github.io/reglare-nivel/images/fotografie.jpg";

//---->actualizare versionare script in index

var selectorZi = 0; //data.length - 1;
var maxValue = 0;
var maxValue_2 = 0;
var maxCompensator = 0;
var derulareAutomata = true;
var vitezaSimulare = 165;
var scalaY = 65;//55; //grafic valori orizontal
var scalaY_2 = 95;//55; //grafic valori orizontal
var scalaY_trend = 100;
var scalaX_trend = 72;
var scalaX = 72; //grafic valori vertical
var scalaGCompensator = 50;
var yGrafic_2 = 190;
var yGrafic_1 = yGrafic_2 + scalaY_trend + 50;
var yGrafic_3 = yGrafic_1 + 85;
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

var xc2 = 0;
var yc2 = 0;

var culoare_linie_trend = "#999999";//"#b3b3b3";
var culoareRezervor = "grey";
var nivelUltraCritic = 25;
var nivelCritic = 20;
var nivelIntermediar = 15;
var culoareApaNivelNormal = "#005ce6";
var culoareApaNivelIntermediar = "#003d99";
var culoareApaNivelCritic = "#001f4d";
var culoareApaNivelUltraCritic = "#001433";
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

var culoarePunctGraficVertical = "#999999";//"white";
var culoarePunctGraficVerticalFoto = "#262626";
var culoarePunctValoriGrafic = culoareApaNivelIntermediar;
var culoarePunctValoriGrafic_2 = "white";//"grey";//"culoareApaNivelNormal"; //"#999999";
var culoarePunctValoriGrafic_3 = "#737373";//"#808080";
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
    selectorZi = this.value;
    procentDinCapacitateMax = data[selectorZi]/maxValue;
    pauza = false;

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

    procentDinCapacitateMax = data[selectorZi]/maxValue;
    slider.setAttribute("value", selectorZi);
}

function start() {
    incrementX = 3;
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

    procentDinCapacitateMax = data[selectorZi]/maxValue;

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
    calcul_parametrii_Predictie();

    //construire proiectie



    setare_mod();
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

    for(let i = zi_start; i < data_2.length; i++){
      //console.log(i);
      //SumX
      sumX += i;

      //SumY(SumLn(y))
      sumY += Math.log(data_2[i]);

      //SumXY(SumXLn(y))
      sumXY += i*Math.log(data_2[i]);

      //SumX^2
      sumX2 += i*i;

      //data_2[i];
    }

    m = (n*sumXY - sumX*sumY) / (n*sumX2 - sumX*sumX);
    b = (sumY - m*sumX) / n;

    bazaR = Math.exp(m);
    coefA = Math.exp(b);

    yp = coefA * Math.pow(bazaR, 110);

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

    for (let i = 0; i <= selectorZi ; i++) {
      x_valoare = i*incrementX;
      y_valoare = Math.round(inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue));
      y_valoare_2 = Math.round(inaltimeSuprafataGrafica - 10 - ((data_2[i]*scalaY_2)/maxValue_2));

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

function desenareGraficeTrenduri(){
  ctx = suprafataGrafica.context;

  //desenare linie abscisa grafic
  ctx.fillStyle = culoareLinieReferinta;
  //ctx.fillRect(10, yGrafic_1, lungimeSuprafataGrafica-15, yGrafic_1);
  //ctx.fillRect(10, yGrafic_2, lungimeSuprafataGrafica-15, yGrafic_2);

  ctx.beginPath();
  ctx.moveTo(10, yGrafic_1 + 5 );
  ctx.lineTo(lungimeSuprafataGrafica-10, yGrafic_1 + 5);
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  ctx.closePath();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10, yGrafic_2 + 5 );
  ctx.lineTo(lungimeSuprafataGrafica-10, yGrafic_2 + 5);
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  ctx.closePath();
  ctx.stroke();


  //desenare proiectie
  ziStart = data_2.length - orizont_regresie;
  ziFinal = data_2.length + Math.floor(orizont_regresie / 2) + 1;
  if(selectorZi > ziStart){
      var y1_1 = 0;
      var x1_1 = 0;
      for (let i = ziStart; i <= ziFinal ; i++) {
          x1_1 = (i-1)*incrementX;
          //x1_2 = i*incrementX;

          yp1 = coefA * Math.pow(bazaR, (i-1));
          //yp2 = coefA * Math.pow(bazaR, i);

          //console.log("x1_1: " + x1_1 + "x1_2: " +x1_2);
          //console.log("yp1: " + yp1 + "yp2: " +yp2);

          //y1_1 = Math.round(yGrafic_1 - ((data[i-1]*scalaY_trend)/maxValue));
          y1_1 = Math.round(yGrafic_2 - ((yp1*scalaY_trend)/maxValue_2));
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
          ctx.strokeStyle = culoare_linie_trend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
          ctx.lineWidth = 1;
          ctx.closePath();
          //ctx.fill();
          ctx.stroke();
      }

      //desenare valoare bazaR
      ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoare_linie_trend;//culoarePunctValoriGrafic_3;
      ctx.fillText("r=" + (Math.floor(bazaR*100))/100, x1_1 + 18, y1_1 + 4);
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
  y_val_1 = Math.round(yGrafic_1 - ((data[index1]*scalaY_trend)/maxValue));
  x_val_2 = selectorZi*incrementX;
  y_val_2 = Math.round(yGrafic_1 - ((data[selectorZi]*scalaY_trend)/maxValue));
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
  }
  else{
    eticheta_1 = "";
    eticheta_2 = "";
    crestere_1 = "";
    crestere_2 = "";
  }


  //punct LINIE TREND grafic 1 - capat dreapta
  ctx.beginPath();
  ctx.arc(12 + x_val_2, y_val_2, 4, 0, 2 * Math.PI);
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

  //LINIE TREND - grafic 1 (jos)
  ctx.setLineDash([1, 2]);
  ctx.beginPath();
  ctx.moveTo(12 + x_val_1, y_val_1);
  ctx.lineTo(12 + x_val_2, y_val_2);
  ctx.strokeStyle = culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

  //INFO PUNCT Grafic 1 (jos)
  ctx.textAlign = "start";
  ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.strokeStyle = culoarePunctValoriGrafic;//culoareTextCompensatorFill;
  ctx.fillText("" + Math.round(data[selectorZi]), x_val_2 + 16, y_val_2 - 6);
  ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText(eticheta_1, x_val_2 + 16, y_val_2 + 24);
  ctx.fillText(crestere_1, x_val_2 + 16, y_val_2 + 10);


  //LINIE TREND Grafic 2(sus)
  xc2 = x_val_2;
  yc2 = y_val_2;

  y_val_1 = Math.round(yGrafic_2 - ((data_2[index1]*scalaY_trend)/maxValue_2));
  y_val_2 = Math.round(yGrafic_2 - ((data_2[selectorZi]*scalaY_trend)/maxValue_2));

  xc1 = (x_val_2 - x_val_1) * procent_index2_orizont_trend + x_val_1;
  yc1 = (y_val_2 - y_val_1) * procent_index2_orizont_trend + y_val_1;

  //console.log("2nd line: " + y_val_1);

  //desenare LINIE TREND GRAFIC 2(sus)
  ctx.beginPath();
  ctx.moveTo(12 + x_val_1, y_val_1);
  ctx.lineTo(12 + x_val_2, y_val_2);
  ctx.strokeStyle = culoareTrend;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
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
  ctx.setLineDash([1, 1 + dist]);

  //ctx.setLineDash([1, 10]);
  //ctx.beginPath();
  ctx.moveTo(12 + xc1, yc1);
  ctx.lineTo(12 + xc2, yc2);
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareLinieLegatura;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 1;
  //ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);

  //punct linie grafic 2 - capat
  ctx.beginPath();
  //ctx.moveTo(12 + x_val_2 - 1, y_val_2 + 1);
  //ctx.lineTo(12 + x_val_2 + 1, y_val_2 - 1);
  ctx.arc(12 + x_val_2, y_val_2, 4, 0, 2 * Math.PI);
  ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
  ctx.lineWidth = 2;
  ctx.closePath();
  ctx.stroke();

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
  ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
  ctx.fillText("" + Math.round(data_2[selectorZi]), x_val_2 + 16, y_val_2 - 6);
  ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
  ctx.fillText(crestere_2, x_val_2 + 16, y_val_2 + 10);

  ctx.fillStyle = culoareTrend;
  ctx.fillText(eticheta_2, x_val_2 + 16, y_val_2 + 24);

  //desenare valori grafice (grafic 1 jos, grafic 2 sus)
  for (let i = 0; i <= selectorZi ; i++) {
      x_valoare = i*incrementX;
      y_valoare = Math.round(yGrafic_1 - ((data[i]*scalaY_trend)/maxValue));
      y_valoare_2 = Math.round(yGrafic_2 - ((data_2[i]*scalaY_trend)/maxValue_2));

      //desenare punct valoare grafic_valori_desenat - data_2
      /*
      ctx.beginPath();
      ctx.moveTo(12 + x_valoare, y_valoare_2 );
      ctx.lineTo(12 + x_valoare, y_valoare_2 + 1);
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
      ctx.lineWidth = 4;
      ctx.closePath();
      ctx.stroke();*/

      //desenare linii conectare puncte grafic 2 sus
      if(i>0){
          x1_valoare = (i-1)*incrementX;
          y1_valoare = Math.round(yGrafic_1 - ((data[i-1]*scalaY_trend)/maxValue));
          y1_valoare_2 = Math.round(yGrafic_2 - ((data_2[i-1]*scalaY_trend)/maxValue_2));


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

      //desenare punct valoare grafic_valori_desenat - data_1
      /*
      ctx.beginPath();
      ctx.moveTo(12 + x_valoare, y_valoare );
      ctx.lineTo(12 + x_valoare, y_valoare + 1);
      ctx.strokeStyle = culoarePunctValoriGrafic;
      ctx.lineWidth = 4;
      ctx.closePath();
      ctx.stroke();*/
    }

    //punct linie grafic 2 - inceput - cerculet
    ctx.beginPath();
    ctx.arc(12 + x_val_1, y_val_1, 4, 0, 2 * Math.PI);
    ctx.strokeStyle = culoareTrend;//culoareTextCompensatorFill;//culoare_linie_trend;//culoarePunctValoriGrafic;
    ctx.lineWidth = 2;
    ctx.closePath();
    ctx.stroke();

    //desenare indicator Zi capat stanga Grafic 2 (sus)
    if(selectorZi > orizont_trend){
      //capat stanga
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

      //capat dreapta
      ctx.beginPath();
      ctx.moveTo(12 + x_valoare, yGrafic_2 + 3);
      ctx.lineTo(12 + x_valoare, yGrafic_2 + 7);
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoarePunctValoriGrafic;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      ctx.textAlign = "center";
      ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
      ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
      ctx.fillText(selectorZi, 12 + x_valoare, yGrafic_2 + 21);

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

}

function desenareGraficValori(){
    ctx = suprafataGrafica.context;

    //desenare linie limita regim nominal
    ctx.fillStyle = culoareLinieReferintaGrafic;
    ctx.fillRect(10, inaltimeSuprafataGrafica - 10 - ((medieCumulativ[selectorZi]*scalaY)/maxValue), lungimeSuprafataGrafica-15, 2);


    for (let i = 0; i <= selectorZi ; i++) {
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
    ctx.fillText("+" + Math.round(proiectie), x_val_1, y_val_2 - 4);

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
      ctx.strokeStyle = culoareLinieGraficVertical;
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


    ctx.strokeStyle = culoareLinieMedieGraficVertical;
    ctx.lineWidth = 2;
    ctx.setLineDash([1, 16]);

    ctx.beginPath();
    ctx.moveTo(x_val_1, y_ms_1);
    ctx.lineTo(x_val_2, y_ms_1);
    ctx.closePath();
    ctx.stroke();

    //linie medie dreapta
    //ctx.setLineDash([1, 16]);
    ctx.beginPath();
    ctx.moveTo(x_val_1, y_md_1);
    ctx.lineTo(x_val_2, y_md_1);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.closePath();
    //ctx.stroke();

    //desenare text proiectie
    proiectie = medieCumulativ[selectorZi] * intervalProiectie;

    //Valoare cumulativa
    ctx.textAlign = "start";
    ctx.font = "italic bold 16px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoarePunctValoriGrafic_3;//culoareTextCompensatorFill;
    ctx.fillText("+" + Math.round(proiectie), x_val_2, y_val_1 + 6);
    ctx.font = "italic 14px Helvetica, system-ui, Arial, sans-serif";
    ctx.fillText("Ziua " + (Math.floor(selectorZi) + intervalProiectie), x_val_2, y_val_1 + 22);
    ctx.fillStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    ctx.strokeStyle = culoareTextCompensatorRosu;//culoareTextCompensatorFill;
    ctx.fillText("=" + Math.round(dataCumulativ[selectorZi] + proiectie) + "...", x_val_2, y_val_1 + 38);

    for (let i = 0; i <= selectorZi; i++) {

      //GRAFIC VERTICAL - UMPLERE
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
      ctx.strokeStyle = culoareLinieGraficVertical;
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

        //punct linie conectare
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x_valoare, y_valoare_1, 4, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
      }


      /*
      //desenare punct inceput in modul foto
      if(mod==MOD_FOTOGRAFIE){
        /*
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
        ctx.moveTo(x_valoare, y_valoare_2);
        ctx.lineTo(x_valoare, y_valoare_2 + 1);
        ctx.strokeStyle = culoarePunctGraficVertical;
        ctx.lineWidth = 1;
        ctx.closePath();
        ctx.stroke();
      }
      */

    }
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
                procentDinCapacitateMax = data[selectorZi]/maxValue;

        }
        procentDinCapacitate = procentDinCapacitateMax;

        //colorare apa in functie de valoare critica
        nivel = data[selectorZi];

        if (nivel > nivelUltraCritic)
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

        if (nivel > nivelUltraCritic)
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
    //apa rezervor
    inaltimeApaRezervor =  (inaltimeRezervor * capacitateRezervor) * procentDinCapacitateMax;
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
    yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - medieCumulativ[selectorZi] * (inaltimeRezervor * capacitateRezervor)/maxValue;

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
