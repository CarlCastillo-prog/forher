document.addEventListener('DOMContentLoaded', () => {
  const timeDisplay = document.getElementById("timeTogether");

  // 💡 Set anniversary date: September 9, 2025 at 4:00 PM
  // JS months are 0-based (0 = January, so 8 = September)
  const anniversaryDate = new Date(2025, 8, 9, 16, 0, 0);

  function updateTimeTogether() {
    const now = new Date();
    let diff = now - anniversaryDate;

    if (diff < 0) {
      timeDisplay.textContent = "Our journey hasn’t started yet ";
      return;
    }

    // Convert to units
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    timeDisplay.innerHTML = `
      <span class="time-unit">${years} years</span><span class="time-unit">${months} months</span><span class="time-unit">${days} days</span><br>
      <span class="time-unit">${hours} hours</span><span class="time-unit">${minutes} minutes</span><span class="time-unit">${seconds} seconds</span>
    `;
  }

  updateTimeTogether();
  setInterval(updateTimeTogether, 1000); // update every second
});
