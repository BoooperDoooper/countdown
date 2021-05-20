const initialWeek = document.querySelector("#weeks");
const initialDays = document.querySelector("#days");
const initialHour = document.querySelector("#hours");
const initialMinute = document.querySelector("#minutes");
const initialSeconds = document.querySelector("#seconds");
const changeAlt = document.querySelector("#changeAlt");
const input = document.querySelector("input[name='input']");
const dayOfWeek = document.getElementById("dayOfWeek");

var initialDay = '24 June 2021';
var newDate = undefined;

changeAlt.addEventListener("click", () => {
    newDate = input.value;
    // dayDate = ((input.value).split(' '))[0];
    initialDay = new Date(newDate);
    switch (initialDay.getDay()) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
      }
    dayOfWeek.innerHTML = day;
});


function countdown() {
    const initialDate = new Date(initialDay);
    const currentDate = new Date()
    
    var milliseconds = initialDate - currentDate;

    var weeks = Math.floor(milliseconds/604800000)
    var days = Math.floor(milliseconds/86400000 - weeks*7);
    var hours = Math.floor(milliseconds/3600000) - (weeks*7 + days)*24;
    var minutes = Math.floor(milliseconds/60000) - ((weeks*7 + days)*24 + hours)*60;
    var seconds = Math.floor(milliseconds/1000) - (((weeks*7 + days)*24 + hours)*60 + minutes)*60;


    initialWeek.innerHTML = weeks;
    initialDays.innerHTML = days;
    initialHour.innerHTML = hours;
    initialMinute.innerHTML = minutes;
    initialSeconds.innerHTML = seconds;

    if (seconds < 10) {
        initialSeconds.innerHTML = '0' + seconds;
    }
    if (minutes < 10) {
        initialMinute.innerHTML = '0' + minutes;
    }
    if (hours < 10) {
        initialHour.innerHTML = '0' + hours;
    }
    if (days < 10) {
        initialDays.innerHTML = '0' + days;
    }
    if (weeks < 10) {
        initialWeek.innerHTML = '0' + weeks;
    }
    
}
// Initial Call
countdown();

// Set the time Interval
setInterval(countdown, 1000);