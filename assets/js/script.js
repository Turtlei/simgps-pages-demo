/* ==============================
   REUSABLE COUNTDOWN + PROGRESS
============================== */

function startCountdown(targetDate, ids, progressIds = null) {

  function update() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      setValues(0, 0, 0, 0);
      if (progressIds) updateProgress(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setValues(days, hours, minutes, seconds);

    if (progressIds) {
      updateProgress(days, hours, minutes, seconds);
    }
  }

  function setValues(days, hours, minutes, seconds) {
    if (ids.days) document.getElementById(ids.days).textContent = days;
    if (ids.hours) document.getElementById(ids.hours).textContent = hours;
    if (ids.minutes) document.getElementById(ids.minutes).textContent = minutes;
    if (ids.seconds) document.getElementById(ids.seconds).textContent = seconds;
  }

  function updateProgress(days, hours, minutes, seconds) {
    const setCircle = (id, value, max) => {
      const circle = document.getElementById(id);
      if (!circle) return;

      const circumference = 326;
      const offset = circumference - (value / max) * circumference;
      circle.style.strokeDashoffset = offset;
    };

    setCircle(progressIds.days, days, 30);
    setCircle(progressIds.hours, hours, 24);
    setCircle(progressIds.minutes, minutes, 60);
    setCircle(progressIds.seconds, seconds, 60);
  }

  update();
  setInterval(update, 1000);
}


/* ==============================
   AUTO INIT
============================== */

document.addEventListener("DOMContentLoaded", function () {

  // Coming Soon / Maintenance Countdown
  const hasCountdown = document.getElementById("m_days");

  if (hasCountdown) {
    startCountdown(
      new Date("2026-04-01T00:00:00"), // Ubah sesuai kebutuhan
      {
        days: "m_days",
        hours: "m_hours",
        minutes: "m_minutes",
        seconds: "m_seconds"
      },
      {
        days: "daysCircle",
        hours: "hoursCircle",
        minutes: "minutesCircle",
        seconds: "secondsCircle"
      }
    );
  }

});