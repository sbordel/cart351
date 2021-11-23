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

  $("#modal-one").show();
  $('.icon-container').show();
  $("#modal-two").hide();
  
  $(".one").delay(2000).fadeIn(200);

  $("#chat-btn").click(function () {
    $("#modal-one").show();
    $('.icon-container').show();
  });

  $("#order-btn").click(function () {

     $.ajax({
    url: "exercise_e3.php",
    type: "get", //send it through get method
    data: {getAjaxOnLoad: "fread"}, //parameter (no form data)
    success: function(response) {
    console.log("responded" +response);
    //use the JSON .parse function to convert the JSON string into a Javascript object
   let parsedJSONArray = JSON.parse(response);
    console.log(parsedJSONArray);
    //output
    for(let i=0; i< parsedJSONArray.length-1;i++){
      //display in modal
      console.log(parsedJSONArray[i]);
      //i.shape or i.size
    }
    }
  }); 
    $("#modal-two").show();

  });

  //close modals when clicking the "x" button
  function closeOrder() {
    $("#modal-two").hide();
  }; 
  function closeChat() {
    $("#modal-one").hide();
    $('.icon-container').hide();
  };

  // when pizza size is chosen, display next message
  sizeBtn.click(function (){
    if (sizeBtn == true);{
      $(".size").delay(1000).fadeIn(200);
      $(".size").text("I would like a " + $(this).attr('value') + " pizza pls");
      sizeBtnVal = $(this).attr('value'); 
      $(".two").delay(4000).fadeIn(200);
    }
  });
    // when pizza shape is chosen, display next message
  shapeBtn.click(function (){
    if (shapeBtn == true);{
      $(".shape").delay(1000).fadeIn(200);
      $(".shape").text("a " + $(this).attr('value') + " shaped crust");
      $(".three").delay(4000).fadeIn(200);
      shapeBtnVal = $(this).attr('value') ;
    }
  });
  // when cheese amount is chosen, display next message
  cheeseBtn.click(function (){
    if (cheeseBtn == true);{
      $(".cheese").delay(1000).fadeIn(200);
      $(".cheese").text($(this).attr('value'));
      $(".four").delay(4000).fadeIn(200);
      cheeseBtnVal = $(this).attr('value'); 
    }
  });
  //when veggie buttons are selected, push its corresponding values in an array called "veggieArray"
  veggieBtn.click(function (){
      if (veggieBtn.pressed);{
      veggieArray.push($(this).attr('value'));

      if (veggieArray.length == 2){
        veggieList = veggieArray.join(" and ");
      }
      else {
        veggieList = veggieArray.join(", ");
      };
      };
  // when user clicks the submit button, the array is then displayed as a list of color toppings, then the next question is displayed
  $("#submit").click(function (){
        $(".veggie").text(veggieList + " veggies");
        $(".veggie").delay(1000).fadeIn(200);
        $(".veggie").text($(this).attr('value'));
        $(".five").delay(4000).fadeIn(200);
        veggieBtnVal = veggieList + " veggies"; 
      });
    });
  // when sauce button is selected, end conversation
  sauceBtn.click(function (){
    if (sauceBtn == true);{
      $(".sauce").delay(1000).fadeIn(200);
      $(".sauce").text($(this).attr('value'));
      $(".six").delay(4000).fadeIn(200);
      sauceBtnVal = $(this).attr('value'); 
    }
  });

  
  
  $("#chat-button-click").click(function(){
    console.log("clicked");
    event.preventDefault();
    console.log(sizeBtnVal); 
    console.log(shapeBtnVal);
    console.log(cheeseBtnVal); 
    console.log(veggieBtnVal);
    console.log(sauceBtnVal); 

   let dataFormT= new FormData();

   // convert values into strings
   dataFormT.append(`size`, sizeBtnVal);
   dataFormT.append(`shape`, shapeBtnVal);
   //dataFormT.append(`cheese`, JSON.stringify(cheeseBtnVal));
   //dataFormT.append(`veggie`, JSON.stringify(veggieBtnVal));
   //dataFormT.append(`sauce`, JSON.stringify(sauceBtnVal));

   //$size = dataFormT.get('size');
   //console.log($size);

 

   // ******* AJAX 
   $.ajax({
    type: "POST",
    url: "exercise_e3.php",
    processData: false,//prevents from converting into a query string
    contentType: "application/json; charset=utf-8",
    data: dataFormT,
    contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
    cache: false,
    timeout: 600000,
    success: function (response) {
    //response is a STRING (not a JavaScript object -> so we need to convert)
    console.log("pizza order is successful!");
    console.log(response);
  
   },
   error:function(){
  console.log("error occurred");
  }
  });
  }); //clicked
});
