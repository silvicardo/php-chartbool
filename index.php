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
   <?php include 'data.php'; ?>
   <div id="main_container" class="<?php echo $_GET['level']; ?>">
        <div class="container <?php echo $graphs['fatturato']['access']; ?>">
           <canvas id="monthCanvas">

           </canvas>
        </div>
        <div class="container <?php echo $graphs['fatturato_by_agent']['access']; ?>">
           <canvas id="agentCanvas">

           </canvas>
        </div>
        <div class="container <?php echo $graphs['team_efficiency']['access']; ?>">
           <canvas id="teamCanvas">

           </canvas>
        </div>
   </div>
 	<script src="dist/app.js" charset="utf-8"></script>

 </body>
 </html>
