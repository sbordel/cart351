//open modals when clicking sidebar icons
$(document).ready(function () {
  let sizeBtn = $("#size button");
  let shapeBtn = $("#shape button");
  let cheeseBtn = $("#cheese button");
  let veggieBtn = $("#veggie button");
  let sauceBtn = $("#sauce button");

  let sizeBtnVal = "";
  let shapeBtnVal = "";
  let cheeseBtnVal = "";
  let veggieBtnVal = "";
  let sauceBtnVal = "";

  let veggieArray = [];
  let veggieList;

  let parsedJSONArray;

  $("#modal-one").show();
  $('.icon-container').show();
  $("#modal-two").hide();

  $(".one").delay(2000).fadeIn(200);

  $("#chat-btn").click(function () {
    $("#modal-one").show();
    $('.icon-container').show();
    $("#modal-two").hide();
  });

  $("#order-btn").click(function () {
    $("#modal-two").show();
    $("#modal-one").hide();
    $('.icon-container').hide();
  });

  $("#order-btn").one('click',function () {
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
    $("#modal-two").show();
  });

  // when pizza size is chosen, display next message
  sizeBtn.click(function () {
    if (sizeBtn == true); {
      $(".size").delay(1000).fadeIn(200);
      $(".size").text("I would like a " + $(this).attr('value') + " pizza pls");
      sizeBtnVal = $(this).attr('value');
      $(".two").delay(4000).fadeIn(200);
    }
  });
  // when pizza shape is chosen, display next message
  shapeBtn.click(function () {
    if (shapeBtn == true); {
      $(".shape").delay(1000).fadeIn(200);
      $(".shape").text("a " + $(this).attr('value') + " shaped crust");
      $(".three").delay(4000).fadeIn(200);
      shapeBtnVal = $(this).attr('value');
    }
  });
  // when cheese amount is chosen, display next message
  cheeseBtn.click(function () {
    if (cheeseBtn == true); {
      $(".cheese").delay(1000).fadeIn(200);
      $(".cheese").text($(this).attr('value'));
      $(".four").delay(4000).fadeIn(200);
      cheeseBtnVal = $(this).attr('value');
    }
  });
  //when veggie buttons are selected, push its corresponding values in an array called "veggieArray"
  veggieBtn.click(function () {
    if (veggieBtn.pressed); {
      veggieArray.push($(this).attr('value'));

      if (veggieArray.length == 2) {
        veggieList = veggieArray.join(" and ");
      }
      else {
        veggieList = veggieArray.join(", ");
      };
    };
    // when user clicks the submit button, the array is then displayed as a list of color toppings, then the next question is displayed
    $("#submit").click(function () {
      $(".veggie").text(veggieList + " veggies");
      $(".veggie").delay(1000).fadeIn(200);
      $(".veggie").text($(this).attr('value'));
      $(".five").delay(4000).fadeIn(200);
      veggieBtnVal = veggieList + " veggies";
    });
  });
  // when sauce button is selected, end conversation
  sauceBtn.click(function () {
    if (sauceBtn == true); {
      $(".sauce").delay(1000).fadeIn(200);
      $(".sauce").text($(this).attr('value'));
      $(".six").delay(4000).fadeIn(200);
      sauceBtnVal = $(this).attr('value');
    }
  });

  //when order button is clicked, store order data into variables
  //then append to data form
  $("#chat-button-click").click(function () {
    console.log("clicked");
    event.preventDefault();

    let dataFormT = new FormData();

    // append pizza order values to data form
    dataFormT.append(`size`, sizeBtnVal);
    dataFormT.append(`shape`, shapeBtnVal);
    dataFormT.append(`cheese`, cheeseBtnVal);
    dataFormT.append(`veggie`, veggieBtnVal);
    dataFormT.append(`sauce`, sauceBtnVal);

    // ******* AJAX 
    $.ajax({
      type: "POST",
      url: "exercise_e3.php",
      processData: false,//prevents from converting into a query string
      contentType: "application/json; charset=utf-8",
      data: dataFormT,
      contentType: false,
      cache: false,
      timeout: 600000,
      success: function (response) {
        console.log("pizza order is successful!");
        console.log(response);
      },
      error: function () {
        console.log("error occurred");
      }
      
    });
    $("#modal-one").delay(2000).fadeOut(200);
    $('.icon-container').delay(2000).fadeOut(200);
  });
});
