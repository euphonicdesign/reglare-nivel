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
            9.33,  
          ];

let dataCumulativ = [];

//---->actualizare versionare script in index

var selectorZi = 0; //data.length - 1;
var maxValue = 0;
var derulareAutomata = true;
var vitezaSimulare = 200;
var scalaY = 55;
var valoareReferinta = 25;

var nivelUltraCritic = 25;
var nivelCritic = 20;
var nivelIntermediar = 15;
var culoareApaNivelNormal = "#005ce6";
var culoareApaNivelIntermediar = "#003d99";
var culoareApaNivelCritic = "#001f4d";
var culoareApaNivelUltraCritic = "#001433";
var culoareApa = culoareApaNivelNormal;
var culoareValoareNivel = culoareApa;
var culoareRobinet = "orange";
var culoareLinieLimitaRegimNominal = "#cce0ff";
var culoareIndicatorRezervor = "#cce0ff";

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


var slider = document.getElementById("myRange");
slider.setAttribute("max", data.length - 1);
slider.setAttribute("value", selectorZi);

slider.oninput = function() {
    selectorZi = this.value;
    procentDinCapacitateMax = data[selectorZi]/maxValue;

    //slider.setAttribute("value", selectorZi);
    //console.log(selectorZi);
    //console.log(slider.getAttribute("value"));
}

//captura apasare taste
const input = document.querySelector('html');
input.onkeydown = modificaNivel;

//buton prelucrare
var buton_reluare = document.querySelector('button')
buton_reluare.onclick = function() {
    selectorZi = 0;
    slider.setAttribute("value", selectorZi);
    derulareAutomata = true;
    //console.log(slider.getAttribute("value"));
    //procentDinCapacitateMax = data[selectorZi]/maxValue;

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

    procentDinCapacitateMax = data[selectorZi]/maxValue;
    slider.setAttribute("value", selectorZi);
}

function start() {
    //prelucrare date
    for (let i = 0; i < data.length; i++) {
        if (data[i]>maxValue)
          maxValue = data[i];
    }

    procentDinCapacitateMax = data[selectorZi]/maxValue;

    //construire vector date cumulative
    for (let i = 0; i < data.length; i++) {
      cumul = 0;

      for (let j = 0; j <= i ; j++) {
        cumul = cumul + data[j];
      }

      dataCumulativ[i] = cumul;
      //console.log(dataCumulativ[i]);
    }


    //generare suprafata
    suprafataGrafica.constructie();
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
    ctx.fillStyle = "grey";

    //rezervor
    ctx.fillRect(xRezervor, yRezervor, lungimeRezervor, inaltimeRezervor);

    //indicator rezervor
    ctx.fillStyle = culoareIndicatorRezervor;
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
    ctx.fillStyle = culoareRobinet;
    ctx.fillRect(xValvaConductaIntrare1, yValvaConductaIntrare1, lungimeValvaConductaIntrare1, inaltimeValvaConductaIntrare1);

    //valva conducta intrare (T2)
    ctx.fillStyle = culoareRobinet;
    ctx.fillRect(xValvaConductaIntrare2, yValvaConductaIntrare2, lungimeValvaConductaIntrare2, inaltimeValvaConductaIntrare2);

    //apa rezervor
    ctx.fillStyle = culoareApa;
    ctx.fillRect(xApaRezervor, yApaRezervor, lungimeApaRezervor, inaltimeApaRezervor);

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

function desenareZiValoare() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = "orange";

    //Ziua
    ctx.font = "30px Arial";
    ctx.strokeText("Ziua " + selectorZi, 10, 50);


    //Valoare cumulativa
    ctx.font = "30px Arial";
    ctx.strokeText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 120, inaltimeSuprafataGrafica - scalaY - 80);

    //Nivelul
    ctx.fillStyle = culoareValoareNivel;
    ctx.font = "30px Arial";
    ctx.fillText(Math.round(data[selectorZi]), lungimeSuprafataGrafica / 2 - 10, yRezervor - 15);
}

function desenareGraficValori(){
    ctx = suprafataGrafica.context;
    ctx.strokeStyle = 'black';

    incrementX = lungimeSuprafataGrafica / data.length;


    for (let i = 0; i < data.length; i++) {
      ctx.moveTo(10 + i*incrementX, inaltimeSuprafataGrafica - 10);
      ctx.lineTo(10 + i*incrementX, inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue) );
      ctx.stroke();
      //maxValue = data[i];
    }

    //desenare linie limita regim nominal
    ctx.fillStyle = culoareLinieLimitaRegimNominal;
    ctx.fillRect(10, inaltimeSuprafataGrafica - 10 - ((valoareReferinta*scalaY)/maxValue), lungimeSuprafataGrafica-15, 2);

}


function ActualizareSuprafataGrafica() {
    suprafataGrafica.clear();
    if (derulareAutomata){
            if (selectorZi < data.length - 1)
                    selectorZi += 1;
            else{
                derulareAutomata = false;
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

    actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
    desenareVaseComunicante();
    desenareZiValoare();
    desenareGraficValori();
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
    yValvaConductaIntrare2 = yValvaConductaIntrare1 - inaltimeValvaConductaIntrare2;

    yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - nivelUltraCritic * (inaltimeRezervor * capacitateRezervor)/maxValue;

    // casuta 1
    //xCasuta1 = xValvaConductaIntrare1 + lungimeValvaConductaIntrare1 / 2 - lungimeCasuta1 / 2;
    //yCasuta1 = yValvaConductaIntrare2 - inaltimeCasuta1 - 1;


}
