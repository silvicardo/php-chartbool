<!DOCTYPE html>
 <html lang="en" dir="ltr">
 <head>
 	<meta charset=utf-8>
 	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet">
 	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
   <link rel="stylesheet" href="dist/app.css">
 	<title>php-chartbool</title>
 </head>
 <body>
   <!-- MODO 3: script in html o file separato,
      l'array numerico data di php viene codificato come JSON e
      stampato alla fine del file data.php.
      Tramite chiamata Ajax all'url di data.php ottengo come response
      il JSON preparatomi da Php e con JSON.parse rendiamo leggibile come array JS per
      generare come classico il grafico
      -->

   <div id="main_container">
        <div class="container">
           <canvas id="monthChart">

           </canvas>
        </div>
   </div>
 	<script src="dist/app.js" charset="utf-8"></script>

 </body>
 </html>
