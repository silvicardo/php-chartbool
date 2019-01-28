//Progetto: php-chartbool
var $ = require('jquery');
var Chart = require('chart.js');

$(document).ready(function () {

   $.getJSON('http://localhost/GENNAIO/php-chartbool/getRoute.php',function (graphsJSON) {

    //puntatori jQuery
    var monthCanvas = $('#fatturato');
    var agentCanvas = $('#fatturato_by_agent');
    var teamCanvas = $('#team_efficiency');

    //aggiungo titoli per grafico ad ogni oggetto del Json
    addTitlesTo(graphsJSON);

    // console.log(graphsJSON);

    //CREAZIONE CHARTS

    //CHARTS --> MESE
     var byMonthChart = generateGraph(graphsJSON.fatturato, monthCanvas);

    //CHARTS --> VENDITORE
     var byAgentChart = generateGraph(graphsJSON.fatturato_by_agent, agentCanvas);

    //CHARTS --> TEAM
    var byTeamChart = generateGraph(graphsJSON.team_efficiency, teamCanvas);

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
    //DATI STATICI
    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    var backgroundColors = ['rgb(0,128,0)','rgb(255,0,0)', 'rgb(238,130,238', 'rgb(255,255,0)'];

    //ARRAY PER GRAFICO DA RIEMPIRE CON IL NOSTRO DB
    var dataLabels = [];
    var datasetsData = [];
    var datasetsLabels = [];

    //RIEMPIMENTO ARRAY PER CASISTICA
    if (inputData.title === 'fatturato') {
      datasetsData.push(inputData.data);
      datasetsLabels.push(inputData.title);
    } else {
      for (var key in inputData.data) {
          datasetsLabels.push(key);
          datasetsData.push(inputData.data[key]);
      }
    }

    //CREAZIONE OGGETTO DATA
    var chartData;
    //in base al tipo di grafico()
    if (inputData.type === 'pie') {//torta
      chartData = {
          type: inputData.type,
          data: {
            labels: datasetsLabels,
            datasets: [{
               label: inputData.title,
                data: datasetsData,
                backgroundColor: backgroundColors,
            }],
          }
      };
    } else {//linea(supporta più lineee per i team)
      chartData = {
          options: {},
          type: inputData.type,
          data: {
            labels: months,//mesi
            datasets: [],
          }
        };
      for (var i = 0; i < datasetsLabels.length; i++) {
        var dataset = {
            label: (inputData.title === 'fatturato') ? inputData.title : datasetsLabels[i],
            data: datasetsData[i],
            borderColor: backgroundColors[i],
            linetension: 0.5,
        };
        chartData.data.datasets.push(dataset);
      }
    }

    return chartData;

  }

});
