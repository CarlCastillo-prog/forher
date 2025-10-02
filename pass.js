let input = [];
const correctCode = [0, 9, 0, 9, 2, 5]; // Set your passcode
const redirectUrl = "nextpage.html"; // Change to your target site

const dots = document.querySelectorAll('.dot');
const unlockBtn = document.getElementById('unlockBtn');
const hint = document.getElementById('hint');
const requiredLength = correctCode.length;

function press(num) {
  if (input.length < requiredLength) {
    input.push(num);
    updateDots();
  }
  updateUnlockButton();
}

function backspace() {
  input.pop();
  updateDots();
  updateUnlockButton();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index < input.length);
  });
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  return a.every((val, i) => val === b[i]);
}

function updateUnlockButton() {
  // Enable unlock only when full length is reached
  unlockBtn.disabled = input.length !== requiredLength;
}

function unlock() {
  if (arraysEqual(input, correctCode)) {
    // Correct password → redirect
    window.location.href = redirectUrl;
  } else {
    // Wrong password → reset + show hint
    wrongFeedback();
  }
}

function wrongFeedback() {
  hint.textContent = "The hint will be the day you said YES";
  const lockArea = document.querySelector('.lock');
  lockArea.classList.add('shake');
  setTimeout(() => lockArea.classList.remove('shake'), 350);
  input = [];
  updateDots();
  updateUnlockButton();
}

// Add shake animation CSS dynamically
(function injectShakeStyle(){
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes shakeX {
      0% { transform: translateX(0); }
      20% { transform: translateX(-8px); }
      40% { transform: translateX(8px); }
      60% { transform: translateX(-6px); }
      80% { transform: translateX(6px); }
      100% { transform: translateX(0); }
    }
    .shake { animation: shakeX 0.35s cubic-bezier(.36,.07,.19,.97); }
  `;
  document.head.appendChild(style);
})();
