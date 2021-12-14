$(document).ready(function () {
    //get date, then month 
    const d = new Date();
    let month = d.getMonth() + 1;
    let day = d.getDay();
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