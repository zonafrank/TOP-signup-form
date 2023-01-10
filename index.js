const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const submitButton = document.getElementById("submit-button");
const form = document.getElementById("form");
const passwordErrorElem = document.getElementById("password-error");

submitButton.addEventListener("click", submitForm);
confirmPasswordInput.addEventListener("keyup", (e) => {
  const { value } = e.target;
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== passwordInput.value[i]) {
      passwordErrorElem.innerText = "passwords do not match";
      passwordErrorElem.classList.remove("hide");
      passwordErrorElem.classList.add("show");
    } else {
      passwordErrorElem.innerText = "";
      passwordErrorElem.classList.remove("show");
      passwordErrorElem.classList.add("hide");
    }
  }
});

function validateFormInputs() {
  let firstNameIsValid = firstNameInput.checkValidity();
  let lastNameIsValid = lastNameInput.checkValidity();
  let emailIsValid = emailInput.checkValidity();
  let phoneNumberIsValid = phoneNumberInput.checkValidity();
  let passwordIsValid = phoneNumberInput.checkValidity();
  let confirmPasswordIsValid = confirmPasswordInput.checkValidity();
  let passwordConfirmationPassed =
    passwordInput.value === confirmPasswordInput.value;

  const allChecks = [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    phoneNumberIsValid,
    passwordIsValid,
    confirmPasswordIsValid,
    passwordConfirmationPassed
  ];

  return allChecks.every((item) => item);
}

function submitForm(e) {
  e.preventDefault();
  const inputsAreValid = validateFormInputs();
  if (inputsAreValid) {
    form.submit();
  } else {
    throw new Error("Invalid input");
  }
}
