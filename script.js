function goToTasks() {
  document.getElementById("warningScreen").style.display = "none";
  document.getElementById("taskScreen").classList.remove("hidden");
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
async function submitTasks() {
  const fileInput = document.getElementById("proofFile");
  const status = document.getElementById("uploadStatus");

  if (!fileInput.files.length) {
    status.textContent = "Please upload a photo or video.";
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  status.textContent = "Uploading proof...";

  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.status === "uploaded") {
      status.textContent = "Upload received. Analyzing...";
      
      // small delay for effect
      setTimeout(() => {
        document.getElementById("taskScreen").style.display = "none";
        document.getElementById("lockScreen").classList.remove("hidden");
      }, 2000);
    } else {
      status.textContent = "Upload failed. Try again.";
    }

  } catch (error) {
    status.textContent = "Server error. Make sure backend is running.";
  }
}
