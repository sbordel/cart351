$(document).ready(function () {
    //get date, then month 
    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDate();
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
});

// original code taken from => https://stackoverflow.com/a/52912248 
window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
  
    let intervalId = null;
  
    intervalId = setInterval(startTimer, 1000);
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds / 3600);
      minute = Math.floor((totalSeconds - hour * 3600) / 60);
      seconds = totalSeconds - (hour * 3600 + minute * 60);
    }
  
    document.getElementById('Displaytimetaken').addEventListener('click', () => {
      if (totalSeconds >= 15){
        console.log("a day has passed");
      }
      else {
        console.log(minute + "minutes" + seconds + "seconds");
      }
      reset();
    });

    function reset() {
      totalSeconds = 0;

    }
  }
