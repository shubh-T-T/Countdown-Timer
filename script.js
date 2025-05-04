const startBtn = document.getElementById("startBtn");
const countdownDisplay = document.getElementById("countdownDisplay");
const message = document.getElementById("message");

let interval;

startBtn.addEventListener("click", () => {
  const targetDate = new Date(document.getElementById("datetime").value);
  if (isNaN(targetDate)) {
    alert("Please select a valid date and time.");
    return;
  }

  if (interval) clearInterval(interval);

  interval = setInterval(() => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(interval);
      countdownDisplay.innerHTML = "00 Days 00 Hours 00 Minutes 00 Seconds";
      message.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    message.textContent = "";
  }, 1000);
});
