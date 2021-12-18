<?php
//get data from server and send to client
if($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET["getAjaxOnLoad"])){
   //read until end of file
   $theFile = fopen("files/timestamps.txt", "r") or die("Unable to open file!");
   //$i=0;
   /*
   $outArr = array();
   $NUM_ORDERS = 5; // 5 values in pizza order

      while(!feof($theFile)) {
        //create an object to send back
        $packObj = new stdClass();

        for($j=0;$j<$NUM_ORDERS;$j++){
          $str = fgets($theFile);
         //split and return an array
          $splitArr = explode(":",$str);
          if(count($splitArr)>1){
          $key = $splitArr[0];
          $val = $splitArr[1];
          //append the key value pair
          $packObj->$key = trim($val);
          }
        }
        $outArr[]=$packObj;
      }
      fclose($theFile);
      //encode json
      $myJSONObj = json_encode($outArr);
      echo $myJSONObj;
      exit;
      */
}

//send data from client to server and write to file
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  //create variables with posted data
   $timestamp = $_POST['timestamp'];

   
  // write values to file
  $theFile = fopen("files/timestamps.txt", "a") or die("Unable to open file!");
  $txt = "size:";
  fwrite($theFile, $txt.$size."\n");
  fclose($theFile);
  echo("we have successfully saved the order to the file ... "); 
exit;
}
?>

$.ajax({
      url: "exercise_e3.php",
      type: "get", //send it through get method
      data: { getAjaxOnLoad: "fread" }, 
      success: function (response) {
        /*console.log("responded" + response);*/
        //use the JSON .parse function to convert the JSON string into a Javascript object
        parsedJSONArray = JSON.parse(response);
        //output
        for (let i = 0; i < parsedJSONArray.length - 1; i++) {
          //display in modal
          // create container for every order
          let container = $("<div>");
          $(container).addClass("order-container");

          let p1 = $("<p>"); //pizza size
          p1.html("<span>pizza size: </span>" + parsedJSONArray[i].size);
          $(container).append(p1);
          
          let p2 = $("<p>"); //pizza crust
          p2.html("<span>crust shape: </span>" + parsedJSONArray[i].shape);
          $(container).append(p2);
      
          let p3 = $("<p>"); // amount of cheese
          p3.html("<span>amount of cheese: </span>" + parsedJSONArray[i].cheese);
          $(container).append(p3);

          let p4 = $("<p>"); // veggie toppings
          p4.html("<span>veggie toppings: </span>" + parsedJSONArray[i].veggie);
          $(container).append(p4);

          let p5 = $("<p>"); // extra sauce
          p5.html("<span>extra sauce: </span>" + parsedJSONArray[i].sauce);
          $(container).append(p5);

          $('.order-list').append(container); // append order to container
        }
      }
    });