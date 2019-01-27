//Progetto: php-chartbool
var $ = require('jquery');
var Chart = require('chart.js');

 console.log('test js');

 $(document).ready(function () {

   $.getJSON('http://localhost/GENNAIO/php-chartbool/data.php',function (graphsJSON) {

    //puntatori jQuery
    var monthCanvas = $('#monthCanvas');
    var agentCanvas = $('#agentCanvas');

    //aggiungo titoli per grafico ad ogni oggetto del Json
    addTitlesTo(graphsJSON);

    console.log(graphsJSON);

    //CREAZIONE CHARTS

    //CHARTS --> MESE
    var byMonthChart = generateGraph(graphsJSON.fatturato, monthCanvas);

    //CHARTS --> VENDITORE
    var byAgentChart = generateGraph(graphsJSON.fatturato_by_agent, agentCanvas);

  });

  //FUNZIONI
  
  function addTitlesTo(chartsJson) {
    //estraggo come array i titoli dei grafici--> ['fatturato', 'fatturato_by_agent']
    var chartsTitles = [];
    for (var key in chartsJson) {
      chartsTitles.push(key);
    }
    //li aggiungo come proprietà title al rispettivo
    //oggetto del JSON input
    for (var i = 0; i < chartsTitles.length; i++) {
      chartsJson[chartsTitles[i]].title = chartsTitles[i];
    }

    return chartsJson;
  }

  function generateGraph(data, canvas) {

     var chartData = (data.type === 'line') ? setupChartDataFor('line', data) : setupChartDataFor('pie', data);

     return new Chart( canvas, chartData);
  }

  function setupChartDataFor(graphType, inputData) {
    //COLORI
    var backgroundColors = ['rgb(0,128,0)','rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(238,130,238'];
    //GESTIONE LABELS E DATA
    var labels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];

    var data = inputData.data;

    if (inputData.type === 'pie') {
      labels = [];
      data = [];
      for (var key in inputData.data) {
          labels.push(key);
          data.push(inputData.data[key]);
      }
    }
    //CREAZIONE OGGETTO DATA
    var chartData = {
        type: inputData.type,
        data: {
          labels: labels,
          datasets: [{
             label: inputData.title,
              data: data,
              backgroundColor: backgroundColors,
          }]
        }
    }
    //ADATTAMENTO OGGETTO PER GRAFICO A LINEA
     if (inputData.type === 'line') {
       chartData.options = {};
       chartData.data.datasets[0].borderColor = ['lightgreen'];
       chartData.data.datasets[0].backgroundColor = ['green'];
       chartData.data.datasets[0].linetension = 0.5;
       chartData.data.datasets[0].fill = true;
     }

     console.log(chartData);

    return chartData;

  }

});
