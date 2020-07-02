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
            15.67, 18.33, 20.67, 18.33,
          ];

let dataCumulativ = [];
let medieCumulativ = [];
let comandaIdeala = [];
var incrementX = Math.round(lungimeSuprafataGrafica / (data.length + 1));

var MOD_FOTOGRAFIE = 0;
var MOD_REGULATOR = 1;
var mod = MOD_FOTOGRAFIE;

var fotografie = new Image();
fotografie.src = "https://euphonicdesign.github.io/reglare-nivel/images/fotografie.jpg";

//---->actualizare versionare script in index

var selectorZi = 0; //data.length - 1;
var maxValue = 0;
var derulareAutomata = true;
var vitezaSimulare = 195;
var scalaY = 78;//55; //grafic valori orizontal
var scalaX = 72; //grafic valori vertical
var valoareReferinta = 15;
var valoareCumulativaTotal = 0;
var kp=1.7;
var ki=0.4;
var kd=0;

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
var culoareRobinet = "orange";
var culoareLinieLimitaRegimNominal = "#cce0ff";
var culoareIndicatorRezervor = "#cce0ff";

var culoareLinieValoriGrafic = "#b3b3b3";
var culoareLinieGraficVertical = "white"//"#8c8c8c";
var culoarePunctGraficVertical = "#999999";//"white";
var culoarePunctGraficVerticalFoto = "#262626";
var culoarePunctValoriGrafic = culoareApaNivelIntermediar;
var culoareTextZi = "#999999";//"#595959";

var culoareTextReferinta = "#76adff";
var culoareLinieReferinta = "#cce0ff";
var culoareLinieReferintaGrafic = "#DDDDDD";//"#cce0ff";

var culoareTextCompensator = "#d9d9d9";
var culoareTextCompensatorFill = "#999999";//#8c8c8c;//"#A9A9A9";
var culoareTextCompensatorFill2 = "#8c8c8c";
var culoareTextCompensatorFill3 = "orange";//"#ff9933";//"#8c8c8c";

var textMaiMare10 = " (>10)";

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

//buton prelucrare
var buton_reluare = document.getElementById('derulare')
buton_reluare.onclick = function() {
    selectorZi = 0;
    slider.setAttribute("value", selectorZi);
    derulareAutomata = true;
    pauza = false;
    //console.log(slider.getAttribute("value"));
    //procentDinCapacitateMax = data[selectorZi]/maxValue;
}

//buton foto
var buton_foto = document.getElementById('foto')
buton_foto.onclick = function() {
    if(mod == MOD_REGULATOR){
      mod = MOD_FOTOGRAFIE;
    }
    else{
      mod = MOD_REGULATOR;
    }
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
    incrementX = Math.round((lungimeSuprafataGrafica) / (data.length + 1)) - 1;
    //console.log(incrementX);

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
      medieCumulativ[i] = Math.round(cumul/(i+1));
      comandaIdeala[i] = Math.round(kp*data[i] + ki*medieCumulativ[i]);
    }

    //Calcul Total
    //console.log(dataCumulativ.length);
    valoareCumulativaTotal = Math.round(dataCumulativ[dataCumulativ.length-1]);
    //console.log(valoareCumulativaTotal);

    //Calcul valoare referinta(medie)
    nr_zile = data.length - 1;
    valoareReferinta = Math.round(valoareCumulativaTotal / nr_zile);
    //console.log(valoareReferinta);

    //generare suprafata
    suprafataGrafica.constructie();
    ctx = suprafataGrafica.context;

    //incarcare imagine
    fotografie.addEventListener("load", loadImage, false);
    function loadImage(e) {
        //ctx.drawImage(fotografie, 0, 0);
    }

    setare_mod();
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
    ctx.strokeText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 96, inaltimeSuprafataGrafica - scalaY - 60);
    ctx.fillText("" + Math.round(dataCumulativ[selectorZi]), lungimeSuprafataGrafica - 96, inaltimeSuprafataGrafica - scalaY - 60);

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
    ctx.fillText("Ref=0", 20, 200);

    //Constante amplificare
    ctx.fillText("Kp=" + kp + " Ki=" + ki + " Kd=" + kd, 20, 220);

    //Eroarea
    //ctx.fillText("Er=" + Math.round(data[selectorZi]), 20, 260);

    //Compensator
    ctx.fillText("C=" + "Kp*" + Math.round(data[selectorZi]) + " + Ki*"+medieCumulativ[selectorZi], 20, 240);

    //Grad atentie
    ctx.fillStyle = culoareTextCompensatorFill2;
    ctx.font = "bold italic 12px system-ui, Arial, sans-serif";
    ctx.fillText("Grad de atentie!", 20, 280);

    //Comanda ideala
    ctx.fillStyle = culoareTextCompensatorFill3;
    ctx.font = "italic bold 18px system-ui, Arial, sans-serif";
    if(comandaIdeala[selectorZi]>10){
        ctx.fillText("C=" + comandaIdeala[selectorZi] + textMaiMare10, 20, 300);
    }
    else{
        ctx.fillText("C=" + comandaIdeala[selectorZi], 20, 300);
    }




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

function desenareGraficValori(){
    ctx = suprafataGrafica.context;

    //desenare linie limita regim nominal
    ctx.fillStyle = culoareLinieReferintaGrafic;
    ctx.fillRect(10, inaltimeSuprafataGrafica - 10 - ((valoareReferinta*scalaY)/maxValue), lungimeSuprafataGrafica-15, 2);


    for (let i = 0; i <= selectorZi ; i++) {
      x_valoare = i*incrementX;
      y_valoare = Math.round(inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue));

      //GRAFIC ORIZONTAL
      //desenare linie sub valoare grafic
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, inaltimeSuprafataGrafica - 10);
      ctx.lineTo(10 + x_valoare, y_valoare );
      ctx.strokeStyle = culoareLinieValoriGrafic;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();

      //desenare punct valoare grafic_valori_desenat
      ctx.beginPath();
      ctx.moveTo(10 + x_valoare, y_valoare );
      ctx.lineTo(10 + x_valoare, y_valoare + 2);
      ctx.strokeStyle = culoarePunctValoriGrafic;
      ctx.lineWidth = 4;
      ctx.closePath();
      ctx.stroke();

      //GRAFIC VERTICAL
      //desenare linie sub valoare grafic
      x_valoare_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
      x_valoare_2 = Math.round(x_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((x_valoare_2 - x_valoare_1) / 2);
      x_valoare_1 = x_valoare_1 - lungime_segment; //i*incrementX;
      x_valoare_2 = x_valoare_2 - lungime_segment;

      y_valoare = inaltimeSuprafataGrafica - scalaY - 100 - i;


      //maxValue = data[i];
      //x = 10 + i*incrementX;
      //y = inaltimeSuprafataGrafica - 10 - ((data[i]*scalaY)/maxValue);
      //console.log("i=" + i + " " + x + " " + y);
    }

}

function desenareGraficVertical(){
    ctx = suprafataGrafica.context;

    for (let i = 0; i <= selectorZi; i++) {
      //GRAFIC VERTICAL - UMPLERE
      //desenare linie sub valoare grafic
      x_valoare_1 = lungimeSuprafataGrafica - 95; //i*incrementX;
      x_valoare_2 = Math.round(x_valoare_1 + ((data[i]*scalaX)/maxValue));
      lungime_segment = Math.round((x_valoare_2 - x_valoare_1) / 2);
      x_valoare_1 = x_valoare_1 - lungime_segment; //i*incrementX;
      x_valoare_2 = x_valoare_2 - lungime_segment;

      y_valoare = inaltimeSuprafataGrafica - scalaY - 100 - i;

      ctx.beginPath();
      ctx.moveTo(x_valoare_1, y_valoare);
      ctx.lineTo(x_valoare_2, y_valoare);
      ctx.strokeStyle = culoareLinieGraficVertical;
      ctx.lineWidth = 2;
      ctx.closePath();
      ctx.stroke();



      //desnear punct inceput in modul foto
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

        actualizareNivelApaInRezervorSiVaseComunicante(procentDinCapacitate);
        if(mod == MOD_REGULATOR){
            desenareVaseComunicante();
            desenareZiValoare();
            desenareCompensatorValori();
            desenareGraficValori();
        }
        else{//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
        }
        desenareGraficVertical();
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
            desenareVaseComunicante();
            desenareZiValoare();
            desenareCompensatorValori();
            desenareGraficValori();
        }
        else{//MOD_FOTOGRAFIE
            ctx.drawImage(fotografie, 0, 0);
        }
        desenareGraficVertical();

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

    //yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - nivelUltraCritic * (inaltimeRezervor * capacitateRezervor)/maxValue;
    yIndicatorRezervor = yRezervor + inaltimeRezervor - inaltimeIndicatorRezervor / 2 - medieCumulativ[selectorZi] * (inaltimeRezervor * capacitateRezervor)/maxValue;

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
