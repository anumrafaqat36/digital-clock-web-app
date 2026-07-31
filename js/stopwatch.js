let stopwatchInterval;

let elapsedTime = 0;

let running = false;

function updateStopwatch(){

    elapsedTime++;

    let hours = Math.floor(elapsedTime / 3600);

    let minutes = Math.floor((elapsedTime % 3600) / 60);

    let seconds = elapsedTime % 60;

    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById("stopwatchDisplay").textContent =
    `${hours}:${minutes}:${seconds}`;

}

function startStopwatch(){

    if(!running){

        running = true;

        stopwatchInterval = setInterval(updateStopwatch,1000);

    }

}

function pauseStopwatch(){

    clearInterval(stopwatchInterval);

    running = false;

}

function resetStopwatch(){

    clearInterval(stopwatchInterval);

    running = false;

    elapsedTime = 0;

    document.getElementById("stopwatchDisplay").textContent =
    "00:00:00";

}