// Alarm Variables
let alarmSound = new Audio();

let alarmTime = null;
let alarmInterval = null;

// ==========================
// Set Alarm
// ==========================

function setAlarm() {

    alarmTime = document.getElementById("alarmTime").value;

    if (alarmTime === "") {

        alert("Please select a time.");
        return;

    }

    // Selected Sound
    const selectedSound =
        document.getElementById("alarmSound").value;

    alarmSound.src = "assets/sounds/" + selectedSound;

    document.getElementById("alarmStatus").textContent =
        "⏰ Alarm set for " + alarmTime;

    clearInterval(alarmInterval);

    alarmInterval = setInterval(checkAlarm, 1000);

}

// ==========================
// Check Alarm
// ==========================

function checkAlarm() {

    const now = new Date();

    const currentTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

    if (currentTime === alarmTime) {

        clearInterval(alarmInterval);

        alarmSound.loop = true;

        alarmSound.play().catch(error => {
            console.log(error);
        });

        document.getElementById("alarmStatus").textContent =
            "⏰ Alarm is Ringing!";

        document.getElementById("alarmPopup").style.display =
            "flex";

    }

}

// ==========================
// Stop Alarm
// ==========================

function stopAlarm() {

    alarmSound.pause();

    alarmSound.currentTime = 0;

    document.getElementById("alarmPopup").style.display =
        "none";

    document.getElementById("alarmStatus").textContent =
        "✅ Alarm stopped.";

    alarmTime = null;

}

// ==========================
// Snooze
// ==========================

function snoozeAlarm() {

    alarmSound.pause();

    alarmSound.currentTime = 0;

    document.getElementById("alarmPopup").style.display =
        "none";

    const now = new Date();

    now.setMinutes(now.getMinutes() + 5);

    alarmTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

    document.getElementById("alarmStatus").textContent =
        "😴 Snoozed until " + alarmTime;

    clearInterval(alarmInterval);

    alarmInterval = setInterval(checkAlarm, 1000);

}

// ==========================
// Clear Alarm
// ==========================

function clearAlarm() {

    clearInterval(alarmInterval);

    alarmTime = null;

    alarmSound.pause();

    alarmSound.currentTime = 0;

    document.getElementById("alarmPopup").style.display =
        "none";

    document.getElementById("alarmStatus").textContent =
        "❌ No alarm set.";

}

// ==========================
// Preview Selected Sound
// ==========================

function previewSound() {

    const selectedSound =
        document.getElementById("alarmSound").value;

    const preview =
        new Audio("assets/sounds/" + selectedSound);

    preview.play();

}