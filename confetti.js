// Show popup first
window.onload = () => {
  // Show popup after page loads
  setTimeout(() => {
    document.getElementById("popup").style.display = "flex";
  }, 800);

  // Close popup button triggers confetti
  document.getElementById("closePopup").onclick = () => {
    document.getElementById("popup").style.display = "none";

    // Confetti starts when popup closes
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Continuous confetti for 3 seconds
    let duration = 1 * 1000; // 3 seconds
    let end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 1,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 1,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
};
