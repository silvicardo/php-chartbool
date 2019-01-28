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

  <!-- Dopo aver incluso il file del db sfruttiamo un forEach
  per popolare l'html con id e classi che serviranno il JS
  per i canvas e il css per il mostrare/nascondere
  i containers con i grafici -->

  <div id="main_container" class="<?php echo $_GET['level']; ?>">

    <?php foreach ($graphs as $graphName => $graph) { ?>

      <div class="container <?php echo $graph['access']; ?>">

        <canvas id="<?php echo $graphName; ?>">

        </canvas>

      </div>

    <?php } ?>

  </div>
  
  <script src="dist/app.js" charset="utf-8"></script>

</body>
</html>
