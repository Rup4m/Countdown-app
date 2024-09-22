let interval;

document.getElementById("startButton").addEventListener("click", function () {
    const countdownName = document.getElementById("countdownName").value;
    const dateInput = document.getElementById("dateInput").value;
    
    if (!countdownName || !dateInput) {
        alert("Please enter a countdown name and select a date!");
        return;
    }
    
    const countdownDate = new Date(dateInput).getTime();
    document.getElementById("countdownTitle").innerText = countdownName;
    document.getElementById("timer").classList.remove("hidden");

    clearInterval(interval); // Clear any existing timer
    updateTimer(countdownDate); // Initial call
    interval = setInterval(() => updateTimer(countdownDate), 1000);
});

function updateTimer(countdownDate) {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days >= 0 ? days : "0";
    document.getElementById("hours").innerText = hours >= 0 ? hours : "0";
    document.getElementById("minutes").innerText = minutes >= 0 ? minutes : "0";
    document.getElementById("seconds").innerText = seconds >= 0 ? seconds : "0";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.container').innerHTML = "<h1>Time's Up!</h1>";
    }
}
