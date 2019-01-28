<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset=utf-8>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800" rel="stylesheet">
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

    <nav>
      <h1>
        <i class="fas fa-chart-pie"></i>
        Sales Panel
        <i class="fas fa-chart-line"></i>
      </h1>
    </nav>

    <div class="charts">

      <?php foreach ($graphs as $graphName => $graph) { ?>

        <div class="container <?php echo $graph['access']; ?>">

          <h2><?php echo str_replace('_', ' ', $graphName); ?></h2>

          <canvas id="<?php echo $graphName; ?>">

          </canvas>

        </div>

      <?php } ?>

    </div><!-- chiusura div 'charts'-->

  </div><!-- chiusura div 'main_container'-->

  <script src="dist/app.js" charset="utf-8"></script>

</body>
</html>
