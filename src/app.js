//Progetto: php-chartbool
var $ = require('jquery');
var Chart = require('chart.js');

$(document).ready(function () {

   $.getJSON('http://localhost/GENNAIO/php-chartbool/getRoute.php',function (graphsJSON) {

    //CREAZIONE CHARTS
    generateGraphsFrom(graphsJSON);

  });

  //FUNZIONI

  function generateGraphsFrom(chartsJson) {
    //Sfruttando la chiave dell'oggetto ad
    //ogni proprietà del JSON
    //1. aggiungiamo la proprietà title ad ogni oggetto
    //2. passiamo a generateGraph
    //-> l'oggetto contenente i dati del grafico completo di titolo
    //-> il puntatore jQuery (corrispondente all'id + il titolo)

    for (var chartName in chartsJson) {
      chartsJson[chartName].title = chartName;
      generateGraph(chartsJson[chartName], $('#' + chartsJson[chartName].title));
    }
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
