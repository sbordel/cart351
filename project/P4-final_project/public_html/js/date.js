$(document).ready(function () {
    //get date, then month 
    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    let currentDate = day + "/" + month ;
    getSeason();

    //get season according to month
    function getSeason() {
        if (month <= 5 && 3 <= month) {
            return 'spring';
        } else if (month <= 8 && 6 <= month) {
            return 'summer';
        } else if (month <= 11 && 9 <= month) {
            return 'fall';
        } else {
            return 'winter';
        }
    };

    console.log(day);

    //display month & season 
    $("#date-info span:first-child").text(month + "/12");
    $("#date-info span:last-child").text(getSeason());


  //display month & season 
  console.log(day + " " + month);

  //event.preventDefault();

  let dataFormT = new FormData();

  // append pizza order values to data form
  dataFormT.append(`pageDate`, currentDate);

  // ******* AJAX 
  $.ajax({
    type: "POST",
    url: "../garden.php",
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




