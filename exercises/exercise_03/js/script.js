//open modals when clicking sidebar icons
$(document).ready(function () {
  let sizeBtn = $("#size button");
  let shapeBtn = $("#shape button");
  let cheeseBtn = $("#cheese button");
  let veggieBtn = $("#veggie button");
  let sauceBtn = $("#sauce button");
  let sizeBtnVal = "";
  let shapeVal ="";


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
    $("#modal-two").show();
  });

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
      shapeVal = $(this).attr('value') ;
    }
  });
  // when cheese amount is chosen, display next message
  cheeseBtn.click(function (){
    if (cheeseBtn == true);{
      $(".cheese").delay(1000).fadeIn(200);
      $(".cheese").text($(this).attr('value'));
      $(".four").delay(4000).fadeIn(200);
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
      console.log(veggieList);
      };
  // when user clicks the submit button, the array is then displayed as a list of color toppings, then the next question is displayed
  $("#submit").click(function (){
        $(".veggie").text(veggieList + " veggies");
        console.log(veggieList);
        $(".veggie").delay(1000).fadeIn(200);
        $(".veggie").text($(this).attr('value'));
        $(".five").delay(4000).fadeIn(200);
      });
    });
  // when sauce button is selected, end conversation
  sauceBtn.click(function (){
    if (sauceBtn == true);{
      $(".sauce").delay(1000).fadeIn(200);
      $(".sauce").text($(this).attr('value'));
      $(".six").delay(4000).fadeIn(200);
    }
  });


  $("#chat-button-click").click(function(){
    console.log("clicked");
    event.preventDefault();
    console.log(sizeBtnVal); 
    console.log(shapeVal);
    //let dataArray =[];
   // dataArray.push({"size":sizeBtnVal,"shape":shapeVal});
   let dataFormT= new FormData();
   //dataFormT.append("size",sizeBtnVal);
   //dataFormT.append("shape",shapeVal);

   dataFormT.append(`size`, JSON.stringify(sizeBtnVal));



    
   $.ajax({
    type: "POST",
    url: "exercise_e3.php",
    processData: false,//prevents from converting into a query string
    contentType: "application/json; charset=utf-8",
    data:dataFormT,
    contentType: false, //contentType is the type of data you're sending,i.e.application/json; charset=utf-8
    cache: false,
    timeout: 600000,
    success: function (response) {
    //response is a STRING (not a JavaScript object -> so we need to convert)
    console.log("we had success!");
    console.log(response);
  
   },
   error:function(){
  console.log("error occurred");
  }
  });
  

  }); //clicked
});

//close modals when clicking the "x" button
function closeOrder() {
  $("#modal-two").hide();
}; 
function closeChat() {
  $("#modal-one").hide();
  $('.icon-container').hide();
};
