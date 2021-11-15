//open modals when clicking sidebar icons
$(document).ready(function () {
  let sizeBtn = $("#size button");
  let shapeBtn = $("#shape button");
  let cheeseBtn = $("#cheese button");
  let veggieBtn = $("#veggie button");
  let sauceBtn = $("#sauce button");


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

  sizeBtn.click(function (){
    if (sizeBtn == true);{
      $(".size").delay(1000).fadeIn(200);
      $(".size").text("I would like a " + $(this).attr('value') + " pizza pls");
      $(".two").delay(4000).fadeIn(200);

    }
  });
  shapeBtn.click(function (){
    if (shapeBtn == true);{
      $(".shape").delay(1000).fadeIn(200);
      $(".shape").text("a " + $(this).attr('value') + " shaped crust");
      $(".three").delay(4000).fadeIn(200);
    }
  });
  cheeseBtn.click(function (){
    if (cheeseBtn == true);{
      $(".cheese").delay(1000).fadeIn(200);
      $(".cheese").text($(this).attr('value'));
      $(".four").delay(4000).fadeIn(200);
    }
  });
});


//close modals when clicking the "x" button
function closeOrder() {
  $("#modal-two").hide();
}; 
function closeChat() {
  $("#modal-one").hide();
  $('.icon-container').hide();
};
