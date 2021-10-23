$.getJSON('../json/daysData.json', function (data) {
  dataFromJSON = data;
  console.log(dataFromJSON);

  for (let j = 0; j < dataFromJSON.length; j++) {
  }

});
$(document).ready(function () {
  
// get today's day and display it in text
let day = new Date();
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
});
