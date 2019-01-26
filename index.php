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
   <!-- MODO 2: script nell'html o in file separato, catturo l'array numerico data di php
      stampandone in una stringa JS la versione json.
      Tramite JSON.parse rendiamo leggibile come array JS per
      generare come classico il grafico
      -->
   <?php include 'data.php'; ?>

   <div id="main_container">
        <div class="container">
           <canvas id="monthChart">

           </canvas>
        </div>
   </div>


 	<!-- <script src="dist/app.js" charset="utf-8"></script> -->

  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
  <script>
  $(document).ready(function(){

   var monthsLabels = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre','Novembre', 'Dicembre'];
   var dataFromPhp = '<?php echo json_encode($data); ?>';
   var monthsEarnings = JSON.parse(dataFromPhp);
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
