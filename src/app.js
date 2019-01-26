//Progetto: php-chartbool
var $ = require('jquery');
var Chart = require('chart.js');

 console.log('test js');

 $(document).ready(function () {

   $.get('http://localhost/GENNAIO/php-chartbool/data.php',function (phpDataAsJson) {
     console.log(phpDataAsJson)
     var monthsLabels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre','Novembre', 'Dicembre'];
     var monthsEarnings = JSON.parse(phpDataAsJson);
     var borderColors = 'lightgreen';
     var backgroundColors = 'green';
     var options = {};
     var data = {
                 labels: monthsLabels,
                 datasets: [{
                   label: 'Sales per month',
                   data: monthsEarnings,
                   fill: true,
                   borderColor: borderColors,
                   backgroundColor: backgroundColors,
                   lineTension: 0.5,
                   }],
                 };

     var chartMesi =  new Chart( $('#monthChart'), { type: 'line', data, options: options });
   });


});
