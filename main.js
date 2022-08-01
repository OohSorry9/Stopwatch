const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const start = document.getElementById('start');
const pause = document.getElementById('stop');
const reset = document.getElementById('reset');
var miniseconds = 0;
var seconds = 0;
var hours = 0;

var Interval;


function startTime(){
    miniseconds++;
    if(miniseconds<9){
        second.innerText = "0" + miniseconds;
    }
    if (miniseconds>9) {
        second.innerText = miniseconds;
    }
    if (miniseconds>=99) {
        seconds++;
        minute.innerText = "0" + seconds;
        miniseconds = 0
    }

    if (seconds > 9) {
        minute.innerText = seconds;
    }

    if (seconds>=60) {
        seconds = 0
        minute.innerText = "0" + seconds;
        hours++;
        hour.innerText = "0" + hours;
    }
    if (hours > 9) {
        hour.innerText = hours;
    }

}

start.addEventListener('click', () =>{
    clearInterval(Interval);
    Interval = setInterval(startTime, 10)
})

pause.addEventListener('click',() => {
    clearInterval(Interval);
})

reset.addEventListener('click', () => {
    clearInterval(Interval);
    miniseconds = 0;
    seconds = 0;
    hours = 0;
    second.innerText = "0" + miniseconds;
    minute.innerText = "0" + seconds;
    hour.innerText = "0" + hours;
})
