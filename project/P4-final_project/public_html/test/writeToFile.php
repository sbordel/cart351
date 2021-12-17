<?php
//send data from client to server and write to file
if($_SERVER['REQUEST_METHOD'] == 'POST')
{
  //create variables with posted data
   $pageDate = $_POST['pageDate'];

  // write values to file
  $theFile = fopen("files/testInput.txt", "a") or die("Unable to open file!");
  //$txt = "current date:";
  //fwrite($theFile, $txt.$pageDate."\n");
  fwrite($theFile, $pageDate."\n");
  fclose($theFile);
  echo("sucess"); 
exit;
}
?>
<!DOCTYPE html>
<html>
<head>
<title>test: writing 2 php</title>
<!-- get JQUERY -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
</head>
<body>
  <h2 id="clock"></h2>
  <button id="clockData">send clock data to file</button>
<script>
// here we put our JQUERY
$(document).ready (function() {

    //get date, then month 
    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    let currentDate = day + "/" + month ;

    //display month & season 
    console.log(day + " " + month);

    //event.preventDefault();

    let dataFormT = new FormData();

    // append pizza order values to data form
    dataFormT.append(`pageDate`, currentDate);

    // ******* AJAX 
    $.ajax({
      type: "POST",
      url: "writeToFile.php",
      processData: false,//prevents from converting into a query string
      contentType: "application/json; charset=utf-8",
      data: dataFormT,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {
        console.log("success");
      },
      error: function () {
        console.log("error occurred");
      }
      
    });
});
</script>
</body>
</html>
