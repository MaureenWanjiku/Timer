const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYears = '1 jan 2023';

function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date()
    const totalSeconds = (newYearDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // console.log (days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime (time) {
    // if(time < 10) {
    //     return `0${time}`
    // } else {
    //     return time 
    // }

    // Ternary operator
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval (countdown, 1000);