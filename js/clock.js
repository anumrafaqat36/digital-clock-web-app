let is24Hour = true;

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let period = "";

    if (!is24Hour) {

        period = hours >= 12 ? " PM" : " AM";

        hours = hours % 12;

        if (hours === 0) {
            hours = 12;
        }
    }

    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds + period;

    const days = [
        "Sunday","Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday"
    ];

    const months = [
        "January","February","March","April",
        "May","June","July","August",
        "September","October","November","December"
    ];

    document.getElementById("date").textContent =
        `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

function toggleFormat() {

    is24Hour = !is24Hour;

    const btn = document.getElementById("formatBtn");

    btn.textContent = is24Hour ? "24H" : "12H";

    updateClock();
}

updateClock();

setInterval(updateClock,1000);