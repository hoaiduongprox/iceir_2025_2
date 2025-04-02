function updateCountdown() {
    const targetDate = new Date("September 28, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("days-label").innerText = "Day";
        document.getElementById("hours-label").innerText = "Hour";
        document.getElementById("minutes-label").innerText = "Minute";
        document.getElementById("seconds-label").innerText = "Second";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / (1000));
    
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
    
    document.getElementById("days-label").innerText = days <= 1 ? "Day" : "Days";
    document.getElementById("hours-label").innerText = hours <= 1 ? "Hour" : "Hours";
    document.getElementById("minutes-label").innerText = minutes <= 1 ? "Minute" : "Minutes";
    document.getElementById("seconds-label").innerText = seconds <= 1 ? "Second" : "Seconds";
}

updateCountdown();
setInterval(updateCountdown, 1000);