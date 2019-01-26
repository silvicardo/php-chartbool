<!DOCTYPE html>
 <html lang="en" dir="ltr">
 <head>
 	<meta charset=utf-8>
 	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
 	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
   <link rel="stylesheet" href="dist/app.css">
   <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 	<title>php-chartbool</title>
 </head>
 <body>
   <!-- MODO 1: script nell'html, catturando l'array numerico data
      dall'attributo data-labels nel tag canvas di chart.js. in cui
      stampiamo in precedenza con php la versione json dell'array data.
      Lo script poi legge e parsa il $data rendendolo utilizzabile per
      generare come classico il grafico
      -->
   <?php include 'data.php'; ?>

   <div id="main_container">
        <div class="container">
           <canvas id="monthChart" data-sales="<?php echo $data; ?>">

           </canvas>
        </div>
   </div>


 	<!-- <script src="dist/app.js" charset="utf-8"></script> -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
  <script>
  $(document).ready(function(){

   var monthsLabels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre','Novembre', 'Dicembre'];
   var monthsEarnings = JSON.parse($('#monthChart').attr('data-sales'));
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
  </script>

 </body>
 </html>
