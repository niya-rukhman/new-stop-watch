let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;
let isRunning = false;
function setTime() {
    if (seconds === 59) {
        seconds = 0;
        if (minutes === 59) {
            minutes = 0;
            hours++
        }
        else {
            minutes++;
        }
    }
    else {
        seconds++;
    }
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;


}

function updateUI() {
    document.querySelector('#hours').innerHTML = "0" + hours;
    document.querySelector('#minutes').innerHTML = "0" + minutes;
    document.querySelector('#seconds').innerHTML = "0" + seconds;
}
function start() {
    if (isRunning === false) {
        timer = setInterval(setTime, 1000);
        isRunning = true;
        document.querySelector(".t1").style = "animation: time1 3s infinite;"
        document.querySelector(".t2").style = "animation: time2 3s infinite;"
        document.querySelector(".t3").style = "animation: time3 3s infinite;"
        document.querySelector(".t4").style = "animation: time4 3s infinite;"

    }
}
function stop() {
    clearInterval(timer);
    isRunning = false;
    document.querySelector(".t1").style = "animation: none;"
    document.querySelector(".t2").style = "animation: none;"
    document.querySelector(".t3").style = "animation: none;"
    document.querySelector(".t4").style = "animation: none;"
}
function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    stop();
    updateUI();

}