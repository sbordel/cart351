
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
    //if today is Sunday or Saturday=> display a message
    if (weekday == 0 || 6) {
      let result = "Everything is alligned on the weekend!!!";
      document.getElementById("message").innerHTML = result;
      $("#weekend-result").show();
    }
    //if today is a day between Monday and Friday=>
    //check the value of all the properties corresponding to that day's object
    //display images according to the values
    switch (dayWeather) {
      case "Bad":
        console.log("bad");
        break;
      case "Good":
        console.log("good");
    };
    switch (dayCatmood) {
      case "Annoying":
        console.log("annoying");
        break;
      case "Calm":
        console.log("calm");
    };
    switch (dayAssign) {
      case "Yes":
        console.log("yes");
        break;
      case "No":
        console.log("no");
    };
    switch (dayConstruct) {
      case "Yes":
        console.log("yes");
        break;
      case "No":
        console.log("no");
    };

  }
  )
});


