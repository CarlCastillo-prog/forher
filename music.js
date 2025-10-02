document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");
  const bgMusic = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  // Close popup and start music
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";

    bgMusic.play().catch(err => console.log("Autoplay blocked:", err));
    musicBtn.disabled = false; 
    musicBtn.style.cursor = "pointer";  // 👈 change to pointer when enabled
    musicBtn.textContent = "⏸";

    // Attach click event only after popup closes
    musicBtn.addEventListener("click", toggleMusic);

    launchConfetti();
  });

  function toggleMusic() {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "⏸";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "▶";
    }
  }
});
