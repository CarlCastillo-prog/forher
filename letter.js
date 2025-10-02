const popup = document.getElementById("popup");
    const envelope = document.getElementById("envelope");

    // Show popup when page loads
    window.onload = () => {
      if (popup) {
        popup.classList.add("show");
        envelope.classList.add("disabled");
      }
    };

    function closePopup() {
      if (popup) {
        popup.classList.remove("show");
        envelope.classList.remove("disabled");
      }
    }

    // Add event listener to close button
    const closeBtn = document.getElementById("closePopup");
    if (closeBtn) {
      closeBtn.addEventListener("click", closePopup);
    }

    // Toggle envelope open/close
    envelope.addEventListener("click", () => {
      if (popup && popup.classList.contains("show")) {
        return;
      }
      envelope.classList.toggle("open");
    });
