<?php
  //send data from client to server and write to file
  if($_SERVER['REQUEST_METHOD'] == 'POST')
  {
  //create variables with posted data
  $pageDate = $_POST['pageDate'];

  //read first
  $theFile = fopen("files/timestamps.txt", "r") or die("Unable to open file!");
  $str = fgets($theFile);
  //split and return an array
  $splitArr = explode("/",$str);
 
  $prevDay = $splitArr[0];
  $prevMonth = $splitArr[1];
  fclose($theFile);

  // write values to file
  $theFile = fopen("files/timestamps.txt", "w") or die("Unable to open file!");
  fwrite($theFile, $pageDate."\n");
  fclose($theFile);

  //create an object to send back
  $packObj = new stdClass();
  $monthKey = "month";
  $dayKey = "day";
  $outArr = array();
  $packObj->$dayKey = trim($prevDay);
  $packObj->$monthKey = trim($prevMonth);
   
  $outArr[]=$packObj;

  $myJSONObj = json_encode($outArr);
  echo $myJSONObj;

 exit;
}
?>
<!-- ** HTML START ** -->
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>garden ~ ~ ~</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- librairies -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="js/libs/CamanJS-4.1.1/dist/caman.full.min.js"></script>
  <!-- script -->
  <script src="js/script.js"></script>
  <!--<script src="js/caman.js"></script>-->
  <!-- style -->
  <link type="text/css" rel="stylesheet" href="css/style.css">
</head>

<body class="garden">

  <!--  ~ static garden ~  -->
  <div id="garden-canvas">

   <img id="water-anim" src="assets/watering.gif" alt="watering can pouring water on the garden">

    <div id="garden-imgs">
      <img id="garden-img" src="assets/gardencollage2.png" alt="garden made out of flower collage">
    </div>
  </div>

  <!-- GARDEN BUTTONS ==> modals -->
  <div class="modal-container">
    <!-- garden modal: plant -->
    <div class="garden-modal" id="one">
      <h1>~plant~</h1>
      <div class="inline-modal">
        <div id="img-upload">
          <br>
          <p>drop an image below to add a new plot to the garden!</p>
          <br>
          </div>
        </div>
          <span class="close-modal">☒</span>
      </div>
    </div>

    <!-- garden modal: fertilize -->
    <div class="garden-modal" id="two">
      <h1>~fertilizer~</h1>
      <div class="inline-modal">
        <div class="column" id="col-1">
          <input type="button" name="fertilizer" value="#">
          <input type="button" name="fertilizer" value="( )">
          <input type="button" name="fertilizer" value="+">
          <input type="button" name="fertilizer" value="%">
        </div>
        <div class="column" id="col-2">
          <input type="button" name="fertilizer" value="@">
          <input type="button" name="fertilizer" value="?">
          <input type="button" name="fertilizer" value="~">
          <input type="button" name="fertilizer" value="=">
        </div>
        <div class="column" id="col-2">
          <input type="button" name="fertilizer" value="$">
          <input type="button" name="fertilizer" value="*">
          <input type="button" name="fertilizer" value="/">
          <input type="button" name="fertilizer" value="^">
        </div>
      </div>
      <span class="close-modal">☒</span>
    </div>

    <!-- garden modal: liquid sunshine -->
    <div class="garden-modal" id="three">
      <h1>~liquid sunshine~</h1>
      <div class="inline-modal">
        <div class="column" id="col-1">
          <input type="button" name="sunshine" value="#f4ed09">
          <br>
          <input type="button" name="sunshine" value="#f89a1e">
          <br>
          <input type="button" name="sunshine" value="#ef5090">
          <br>
          <input type="button" name="sunshine" value="#00bde5">
        </div>
        <div class="column" id="col-2">
          <input type="button" name="sunshine" value="#00a25f">
          <br>
          <input type="button" name="sunshine" value="#50b847">
          <br>
          <input type="button" name="sunshine" value="#ee144e">
          <br>
          <input type="button" name="sunshine" value="#005fab">
        </div>
      </div>
      <span class="close-modal">☒</span>
    </div>

  <table>
    <div class="page-logo">
      <img id="logo-one" src="assets/drops-logo.png" alt="water drops">
    </div>

    <!-- return button -->
    <div class="page-return">
    <a class="back-button" href="javascript:history.back()">◅</a>
    </div>
    <tr>

      <!-- ** table start ** -->
      <td class="page">
      </td>
      <td>
        <!-- GARDEN BUTTONS ==> button side bar -->
        <table class="sub">
          <!-- garden button: plant -->
          <tr>
            <td><button class="garden-button" id="plant-btn">
                <picture>
                  <source srcset="assets/plantx1.png" media="(max-width: 1700px)">
                  <source srcset="assets/plantx2.png">
                  <img src="assets/plantx2.png" alt="plant" style="width:auto;">
                </picture>
              </button></td>
          </tr>

          <!-- garden button: fertilizer -->
          <tr>
            <td><button class="garden-button" id="fertilize-btn">
                <picture>
                  <source srcset="assets/fertilizerx1.png" media="(max-width: 1700px)">
                  <source srcset="assets/fertilizerx2.png">
                  <img src="assets/fertilizerx2.png" alt="fertilize" style="width:auto;">
                </picture>
              </button></td>
          </tr>

          <!-- garden button: water -->
          <tr>
            <td><button class="garden-button" id="water-btn">
                <picture>
                  <source srcset="assets/waterx1.png" media="(max-width: 1700px)">
                  <source srcset="assets/waterx2.png">
                  <img src="assets/waterx2.png" alt="water" style="width:auto;">
                </picture>
              </button></td>
          </tr>

          <!-- garden button: liquid sunshine -->
          <tr>
            <td><button class="garden-button" id="sun-btn">
                <picture>
                  <source srcset="assets/liquidsunx1.png" media="(max-width: 1700px)">
                  <source srcset="assets/liquidsunx2.png">
                  <img src="assets/liquidsunx2.png" alt="liquid sunshine" style="width:auto;">
                </picture>
              </button></td>
          </tr>
          <tr>

            <!-- button side bar: action description -->
            <td id="tb-footer">
              <h1 class="button-name"></h1>
              <br>
              <p class="button-info"></p>
          </tr>
        </table>
        <!-- ** table end ** -->
      </td>
      <h2 id="date-info"><span></span><span> → </span><span>~</span></h2>
    </tr>
  </table>

</body>
</html>
