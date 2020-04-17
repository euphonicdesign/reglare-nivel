var lungimeSuprafataGrafica = 600;
var inaltimeSuprafataGrafica = 500;

let data = [0.67,2.33,3.67,3.67,3.33,4.33,5.33,
            7.67,6.67,13.33,15,16.67,21.33,18.67,
            18,8,13.67,20.33,24,25,24.33,
            25.67,20.33,20.67,22,
            30, 30, 25, 30,
          ];

selectorZi = 0; //data.length - 1;
maxValue = 0;
derulareAutomata = true;

//rezervor
var lungimeRezervor = lungimeSuprafataGrafica / 3;
var inaltimeRezervor = inaltimeSuprafataGrafica * 1.5 / 3;
var xRezervor = lungimeSuprafataGrafica/2 - lungimeRezervor/2;
var yRezervor = inaltimeSuprafataGrafica/4;

var capacitateRezervor = 0.8;
var procentDinCapacitateMax = 0.2;
var incrementVariatieSimulare = 0.005;

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

// valva
var lungimeValva = lungimeRezervor / 15;

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

// valva conducta intrare (T1)
var lungimeValvaConductaIntrare1 = lungimeConductaIntrare / 15;
var inaltimeValvaConductaIntrare1 = inaltimeConductaIntrare;
var xValvaConductaIntrare1 = xRezervor - lungimeValvaConductaIntrare1;
var yValvaConductaIntrare1 = yConductaIntrare - inaltimeApaIntrare1;

// valva conducta intrare (T2)
var lungimeValvaConductaIntrare2 = inaltimeValvaConductaIntrare1;
var inaltimeValvaConductaIntrare2 = lungimeValvaConductaIntrare1;
var xValvaConductaIntrare2 = xRezervor - (lungimeValvaConductaIntrare2 / 2) - (lungimeValvaConductaIntrare1 / 2);
var yValvaConductaIntrare2 = yValvaConductaIntrare1 - inaltimeValvaConductaIntrare2;

var slider = document.getElementById("myRange");
slider.setAttribute("max", data.length - 1);
slider.setAttribute("value", selectorZi);

slider.oninput = function() {
    selectorZi = this.value;
    procentDinCapacitateMax = data[selectorZi]/maxValue;
}

//captura apasare taste
const input = document.querySelector('html');
input.onkeydown = modificaNivel;

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

    //generare suprafata
    suprafataGrafica.start();
}

var suprafataGrafica = {
    canvas : document.createElement("canvas"),

    //generare suprafata grafica
    start : function() {
        //setare dimensiuni suprafata grafica
        this.canvas.width = lungimeSuprafataGrafica;
        this.canvas.height = inaltimeSuprafataGrafica;

        //setare context suprafata grafica
        this.context = this.canvas.getContext("2d");

        //inserare suprafata grafica in pagina
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        //setare interval de actualizare
        this.interval = setInterval(ActualizareSuprafataGrafica, 200);

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

    //conducta intrare
    ctx.fillRect(xConductaIntrare, yConductaIntrare, lungimeConductaIntrare, inaltimeConductaIntrare);

    //conducta iesire
    ctx.fillStyle = "#005ce6";
    ctx.fillRect(xConductaIesire, yConductaIesire, lungimeConductaIesire, inaltimeConductaIesire);

    //apa intrare (L1)
    ctx.fillStyle = "#005ce6";
    ctx.fillRect(xApaIntrare1, yApaIntrare1, lungimeApaIntrare1, inaltimeApaIntrare1);

    //apa intrare (L2)
    ctx.fillStyle = "#005ce6";
    ctx.fillRect(xApaIntrare2, yApaIntrare2, lungimeApaIntrare2, inaltimeApaIntrare2);

    //valva conducta intrare (T1)
    ctx.fillStyle = "orange";
    ctx.fillRect(xValvaConductaIntrare1, yValvaConductaIntrare1, lungimeValvaConductaIntrare1, inaltimeValvaConductaIntrare1);

    //valva conducta intrare (T2)
    ctx.fillStyle = "orange";
    ctx.fillRect(xValvaConductaIntrare2, yValvaConductaIntrare2, lungimeValvaConductaIntrare2, inaltimeValvaConductaIntrare2);

    //apa rezervor
    ctx.fillStyle = "#005ce6";
    ctx.fillRect(xApaRezervor, yApaRezervor, lungimeApaRezervor, inaltimeApaRezervor);

}

function desenareZiValoare() {
    ctx = suprafataGrafica.context;
    ctx.fillStyle = "orange";

    ctx.font = "30px Arial";
    ctx.strokeText("Ziua " + selectorZi, 10, 50);

    ctx.fillStyle = "#005ce6";
    ctx.font = "30px Arial";
    ctx.fillText(Math.round(data[selectorZi]), lungimeSuprafataGrafica / 2 - 10, yRezervor - 15);
}

function desenareGraficValori(){
    ctx = suprafataGrafica.context;

    //desenare abscisa
    //ctx.moveTo(5, inaltimeSuprafataGrafica - 10);
    //ctx.lineTo(lungimeSuprafataGrafica-5, inaltimeSuprafataGrafica - 10)
    //ctx.stroke();

    incrementX = lungimeSuprafataGrafica / data.length;
    scalaY = 55;

    for (let i = 0; i < data.length; i++) {
      ctx.moveTo(10 + i*incrementX, inaltimeSuprafataGrafica - 10);
      ctx.lineTo(10 + i*incrementX, inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue) );
      ctx.stroke();
      //maxValue = data[i];
    }
}

function ActualizareSuprafataGrafica() {
    suprafataGrafica.clear();
    if (derulareAutomata){
            if (selectorZi < data.length - 1)
                    selectorZi += 1;
            else{
                derulareAutomata = 0;
            }

            procentDinCapacitateMax = data[selectorZi]/maxValue;
            slider.setAttribute("value", selectorZi);
    }
    procentDinCapacitate = procentDinCapacitateMax
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

}
