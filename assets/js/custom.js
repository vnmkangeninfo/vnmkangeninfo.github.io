const pinCodes = ["1234", "5678", "9876"]; // Replace this array with your desired PIN codes

function showPopup(popupId) {
  document.getElementById(popupId).style.display = "block";
}

function closePopup() {
  document.getElementById("pin-popup").style.display = "none";
  document.getElementById("success-popup").style.display = "none";
}

function showMainContent() {
  document.getElementById("main-content").style.display = "block";
  closePopup();
}

function checkPin() {
  const enteredPin = document.getElementById("pin-input").value;

  if (pinCodes.includes(enteredPin)) {
    showPopup("success-popup");
  } else {
    alert("Incorrect PIN!");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  showPopup("pin-popup");
});