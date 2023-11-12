const password = document.querySelector("#password");
const passwordC = document.querySelector("#passwordR");
const passwordMessage = document.querySelector("#passwordMessage");

passwordC.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
  if (password.value !== passwordC.value) {
    passwordMessage.textContent = "❗Passwords DO NOT MATCH!";
    passwordMessage.style.visibility = "show";
    passwordC.style.backgroundColor = "#fff0f3";
    passwordC.value = "";
    passwordC.focus();
  } else {
    passwordMessage.style.display = "none";
    passwordC.style.backgroundColor = "#fff";
    passwordC.style.color = "#000";
  }
}

//rating value

const showRangeValue = document.querySelector("#showRangeValue");
const rangeInput = document.querySelector("#rangeInput");

// RANGE event listener
rangeInput.addEventListener("change", displayRatingValue);
rangeInput.addEventListener("input", displayRatingValue);

function displayRatingValue() {
  showRangeValue.innerHTML = rangeInput.value;
}