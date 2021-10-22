$(document).ready(function () {
  //hide asterix for unanswered questions
  $("#span").hide();

  // wait for user to fill in form and press submit
  $("#submit-button").click(function (event) {
    // calculate value of each answer
    let sky_color = parseInt(document.getElementById("sky-color").value);
    if (isNaN(sky_color) == true) {
      $("#skycolor-span").show();
    }
    else {
      $("#skycolor-span").hide();
    };
    let sky = parseInt(document.getElementById("sky").value);
    if (isNaN(sky) == true) {
      $("#sky-span").show();
    }
    else {
      $("#sky-span").hide();
    };
    let wind = parseInt(document.getElementById("wind").value);
    if (isNaN(wind) == true) {
      $("#wind-span").show();
    }
    else {
      $("#wind-span").hide();
    };
    let rain = parseInt(document.getElementById("rain").value);
    if (isNaN(rain) == true) {
      $("#rain-span").show();
    }
    else {
      $("#rain-span").hide();
    };
    let tired = parseInt(document.getElementById("tired").value);
    if (isNaN(tired) == true) {
      $("#tired-span").show();
    }
    else {
      $("#tired-span").hide();
    };
    let cat_mood = parseInt(document.getElementById("cat-mood").value);
    if (isNaN(cat_mood) == true) {
      $("#cat-span").show();
    }
    else {
      $("#cat-span").hide();
    };
    let assignment_due = parseInt(document.getElementById("assignment-due").value);
    if (isNaN(assignment_due) == true) {
      $("#assignment-span").show();
    }
    else {
      $("#assignment-span").hide();
    };
    let breakfast = parseInt(document.getElementById("breakfast").value);
    if (isNaN(breakfast) == true) {
      $("#breakfast-span").show();
    }
    else {
      $("#breakfast-span").hide();
    };

    let total = sky_color + sky + wind + rain + tired + cat_mood + assignment_due + breakfast;
    console.log(total);

    //check if total is equal to NaN
    if (isNaN(total) == true) {
      console.log('error');
      $("#error-message").css('display', 'block');
    }
    else {
      $("#error-message").css('display', 'none');
      location.href = "#result-container";
    }
    
    let result_wrapper = $(".result-wrapper");
    let happy_img = $("#happy-img");
    let sad_img = $("#sad-img");
    let neutral_img = $("#neutral-img");
    //display result container, then append and display result 
    let resContainer = $("#result-container");
    $(resContainer).empty();
    result_wrapper.css('display', 'block');
    //sad
    if (total >= 25 && total <= 32) {
      sad_img.css('display', 'block');
      neutral_img.css('display', 'none');
      happy_img.css('display', 'none');
    }
    //neutral
    else if (total >= 14 && total <= 24) {
      neutral_img.css('display', 'block');
      sad_img.css('display', 'none');
      happy_img.css('display', 'none');
    }
    //happy
    else if (total >= 7 && total <= 13) {
      happy_img.css('display', 'block');
      sad_img.css('display', 'none');
      neutral_img.css('display', 'none');
    }
    //display result
    $(".result-fig").appendTo(resContainer);
  });
})

