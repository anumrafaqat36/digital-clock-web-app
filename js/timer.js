let timer;
let totalSeconds = 0;
let timerRunning = false;

function updateTimerDisplay(){

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2,"0");
    seconds = String(seconds).padStart(2,"0");

    document.getElementById("timerDisplay").textContent =
    `${minutes}:${seconds}`;

}

function startTimer(){

    if(timerRunning) return;

    if(totalSeconds === 0){

        const min = parseInt(document.getElementById("timerMinutes").value) || 0;
        const sec = parseInt(document.getElementById("timerSeconds").value) || 0;

        totalSeconds = min * 60 + sec;

    }

    if(totalSeconds <= 0) return;

    timerRunning = true;

    updateTimerDisplay();

    timer = setInterval(()=>{

        totalSeconds--;

        updateTimerDisplay();

        if(totalSeconds <= 0){

            clearInterval(timer);

            timerRunning = false;

            alert("⏰ Time's Up!");

        }

    },1000);

}

function pauseTimer(){

    clearInterval(timer);

    timerRunning = false;

}

function resetTimer(){

    clearInterval(timer);

    timerRunning = false;

    totalSeconds = 0;

    document.getElementById("timerMinutes").value="";
    document.getElementById("timerSeconds").value="";

    updateTimerDisplay();

}

updateTimerDisplay();