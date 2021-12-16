// original code taken from => https://stackoverflow.com/a/52912248 
window.onload = () => {
    let hour = 0;
    let minute = 0;
    let seconds = 0;
    let totalSeconds = 0;
    let oneDay = (seconds * 60); 
  
    let intervalId = null;
  
    intervalId = setInterval(startTimer, 1000);
    function startTimer() {
      ++totalSeconds;
      hour = Math.floor(totalSeconds / 3600);
      minute = Math.floor((totalSeconds - hour * 3600) / 60);
      seconds = totalSeconds - (hour * 3600 + minute * 60);
  
      console.log(hour + minute + seconds);
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



