function goToTasks() {
  document.getElementById("warningScreen").style.display = "none";
  document.getElementById("lockScreen").classList.remove("hidden");
}

const ACCESS_CODE = "INITIATE";

function checkCode() {
  const input = document.getElementById("codeInput").value;
  const error = document.getElementById("errorMsg");

  if (input.toUpperCase() === ACCESS_CODE) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("invite").classList.remove("hidden");

    const audio = document.getElementById("accessAudio");
    audio.play();
  } else {
    error.textContent = "Invalid access code.";
  }
}
