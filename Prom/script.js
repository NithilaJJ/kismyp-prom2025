// Set the date for the prom
const promDate = new Date("April 25, 2025 18:00:00").getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = promDate - now;

    // Calculate time components
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("time").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("time").innerHTML = "The big day has arrived!";
    }
}, 1000);
