function checkMobileValidity() {
  let mobileInput = document.getElementById("telephone");
  let mobileValidity = mobileInput.validity;

  if (mobileValidity.patternMismatch) {
    mobileInput.setCustomValidity("Please enter correct pattern");
  } else {
    mobileInput.setCustomValidity("");
  }

  let mobileError = document.getElementById("telephoneError");

  if (mobileInput.checkValidity()) {
    mobileError.innerHTML = "";
  } else {
    mobileError.innerHTML = mobileInput.validationMessage;
  }
}