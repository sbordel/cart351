<?php
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["getAjaxOnLoad"]))
{
   var_dump(json_decode($size, true));
   $shape = $_GET['shape'];
   $cheese = $_GET['cheese'];
   $veggie = $_GET['veggie'];
   $sauce = $_GET['sauce'];

  $theFile = fopen("files/pizzaOrders.txt", "a") or die("Unable to open file!");
  $txt = "pizza size:";
  fwrite($theFile, $txt.$size);
  $txt2 = "\ncrust shape:\n";
  fwrite($theFile, $txt2.$shape);
  $txt3 = "\namount of cheese:\n";
  fwrite($theFile, $txt3.$cheese);
  $txt4 = "\nveggie toppings:\n";
  fwrite($theFile, $txt4.$veggie);
  $txt5 = "\nsauce:\n";
  fwrite($theFile, $txt5.$sauce);

  fclose($theFile);
  echo("we have successfully saved the order to the file ... ");
   // exit
exit;
}
?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>cart351:: exercise 3</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link type="text/css" rel="stylesheet" href="style.css">
  
</head>

<body>
<a id="file" href="exercise_02.zip"><img id="file-img" src="assets/link-icon.png"
      alt="download compressed files here"></a>
  <div class="page-content">
    <!-- LOGO -->
    <div id="page-logo"><img id="img-logo" src="assets/pp-logo-50.png" alt="pizza palooza logo"></div>
    <!-- MODAL NAV -->
    <nav id="page-btns">
      <a class="pg-btn" id="chat-btn" href="#"><img class="img-btn" src="assets/pizza-chat.png" alt="chat with customer service"></a>
      <br>
      <a class="pg-btn" id="order-btn" href="#"><img class="img-btn" src="assets/pizza-cart.png" alt="see past orders"></a></nav>

    <!-- CHAT ICON CONTAINER -->
    <section class="icon-container">
      <img class="icon" id="bot-icon" src="assets/bot-icon-d.png" alt="bot icon" title="bot icon">
      <img class="icon" id="client-icon" src="assets/bunny-icon-d.png" alt="client icon" title="client icon">
    </section>

    <!-- CHAT MODAL CONTAINER -->
    <section id="modal-container">
      <div class="chat-window" id="modal-one">
        <span id="close-window" onclick="closeChat()">✕</span>
        <div class="chat-inline">
          <div id="chat-title">pizza order bunnybot</div>

          <!-- chat container -->
          <div class="chat-box">
            <div class="chat-bubble">
              <!-- question 1 -->
              <div class="bubble one" id="bot">
                <p>
                HellooO and welcome to <i>Pizza Palooza</i>! What size pizza can I get for you today?
                </p>
                <span>(choose one)</span>
                <br><br>
                <div class="options" id="size">
                  <button value="smoll">small</button>
                  <button value="medium">medium</button>
                  <button value="big">big</button>
                  <button value="huge">huge</button>
                </div>
              </div>
              <p class="bubble size" id="client"></p>

              <!-- question 2 -->
              <div class="bubble two" id="bot">
                What shape would you like your crust to be?
                <br>
                <span>(choose one)</span>
                <br><br>
                <div class="options" id="shape">
                  <button class="othr-btn" value="circle">●</button>
                  <button class="othr-btn" value="heart">♥</button>
                  <button class="othr-btn" value="square">■</button>
                  <button class="othr-btn" value="triangle">▲</button>
                </div>
              </div>
              <p class="bubble shape" id="client">_________</p>

              <!-- question 3 -->
              <div class="bubble three" id="bot">
                How much cheeze on your pizza?
                <br>
                <span>(choose one)</span>
                <br><br>
                <div class="options" id="cheese">
                  <button value="no cheeze">no cheese</button>
                  <button value="normal amount">normal amount</button>
                  <button value="lotsa cheeze">lots of cheese</button>
                </div>
              </div>
              <p class="bubble cheese" id="client">_________</p>
              <!-- question 4 -->
              <div class="bubble four" id="bot">
                What color would you like your veggie toppings to be?
                <br>
                <span>(choose as many as you want, then press "⏎")</span>
                <br><br>
                <div>
                  <div class="options" id="veggie">
                    <button class="othr-btn" id="red-op" value="red"></button>
                    <button class="othr-btn" id="green-op" value="green"></button>
                    <button class="othr-btn" id="orange-op" value="orange"></button>
                    <button class="othr-btn" id="white-op" value="white"></button>
                    <button class="othr-btn" id="yellow-op" value="yellow"></button>
                  </div>
                  <br>
                  <button class="othr-btn" id="submit">⏎</button>
                </div>
              </div>
              <p class="bubble veggie" id="client">______, ______ and _______</p>

              <!-- question 5 --> 
              <div class="bubble five" id="bot">
                Any extra saucy topping?
                <br>
                <span>(choose one)</span>
                <br><br>
                <div class="options" id="sauce">
                  <button value="creamy sauce">creamy sauce</button>
                  <button value="hot sauce">hot sauce</button>
                  <button value="sweet & spicy sauce">sweet & spicy sauce</button>
                  <button value="ketchup">ketchup</button>
                  <button value="no thanks">no thanks</button>
                </div>
              </div>
              <p class="bubble sauce" id="client">_______ please</p>
              <p class="bubble six" id="bot">Your pizza order is complete!! You can click on the "ORDER" button below to save your order ⬇
              <br><br>
              Thank you for ordering with <i>Pizza Palooza</i> ;></p>
            </div>
          </div>
          <!-- submit button -->
          <div class="chat-footer" id="chat-button-click"><a id="chat-button" href="#">order</a></div>
        </div>
        </div>
        </div>
    </section>
    <section id="modal-container"> 
    <div class="chat-window" id="modal-two">
      <span id="close-window" onclick="closeOrder()">✕</span>
      <div class="chat-inline">
        <div id="chat-title">past orders</div>
        <!-- chat container -->
        <div class="chat-box">
        </div>
      </div>
      </div>
    </section>
  </div>
  <script src="js/script.js"></script>
</body>

</html>