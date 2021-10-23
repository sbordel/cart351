
let dayData;
let dayNum;
let dayWeather;
let dayCatmood;
let dayAssign;
let dayConstruct;

$.getJSON('../json/daysData.json', function (data) {
  dataFromJSON = data;
  for (let j = 0; j < dataFromJSON.length; j++) {
  }
  dayData = dataFromJSON.DayElements;
});

$(document).ready(function () {
  // get today's day and display it in text
  let day = new Date();
  dayNum = day.getDay()
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  let today = weekday[day.getDay()];
  console.log(today);
  $("#todayDate").text(today);

  $("button").click(function () {
    //get property value of every json object 
    dayWeather = dayData[dayNum].Weather;
    dayCatmood = dayData[dayNum].Cat_Mood;
    dayAssign = dayData[dayNum].Assignment_Due;
    dayConstruct = dayData[dayNum].Construction;

    //check what day of the week it is:
    //if today is Sunday or Saturday=> 
    if (weekday == 0 || 6) {
      let result = "Everything is aligned because its the weekend!!!";
      document.getElementById("message-one").innerHTML = result;
      $("#main-header").hide();
      $("#weekend-result").show();
    }
    //if today is a weekday=> 
    else {
      let result = "Some elements are not totally aligned...";
      document.getElementById("message-two").innerHTML = result;
      $("#main-header").hide();
      $("#weekday-result").show();
    }
    //if today is a day between Monday and Friday=>
    //check the value of all the properties corresponding to that day's object
    //display images according to the values
    switch (dayWeather) {
      case "Bad":
        $("#weather-img").attr("src","assets/cloud.png");
        break;
      case "Good":
        $("#weather-img").attr("src","assets/sun.png");
    };
    switch (dayCatmood) {
      case "Annoying":
        $("#cat-img").attr("src","assets/evil.png");
        break;
      case "Calm":
        $("#cat-img").attr("src","assets/angel.png");
    };
    switch (dayAssign) {
      case "Yes":
        $("#assign-img").attr("src","assets/assignment.png");
        break;
      case "No":
        $("#assign-img").attr("src","assets/noassignment.png");
    };
    switch (dayConstruct) {
      case "Yes":
        $("#construct-img").attr("src","assets/noise.png");
        break;
      case "No":
        $("#construct-img").attr("src","assets/sleep.png");
    };
  }
  )
});


