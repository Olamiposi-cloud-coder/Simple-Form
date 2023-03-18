const form = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const genderInput = document.querySelector("#gender");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit-button");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!nameInput.value.trim()) {
    showError(nameInput, "Name is required");
  } else {
    removeError(nameInput);
  }

  if (!emailInput.value.trim()) {
    showError(emailInput, "Email is required");
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, "Invalid email format");
  } else {
    removeError(emailInput);
  }

  if (!phoneInput.value.trim()) {
    showError(phoneInput, "Phone number is required");
  } else if (!isValidPhone(phoneInput.value.trim())) {
    showError(phoneInput, "Invalid phone number format");
  } else {
    removeError(phoneInput);
  }

  if (!genderInput.value.trim()) {
    showError(genderInput, "Gender is required");
  } else {
    removeError(genderInput);
  }

  if (!passwordInput.value.trim()) {
    showError(passwordInput, "Password is required");
  } else {
    removeError(passwordInput);
  }

  if (
    nameInput.value.trim() &&
    isValidEmail(emailInput.value.trim()) &&
    isValidPhone(phoneInput.value.trim()) &&
    genderInput.value.trim() &&
    passwordInput.value.trim()
  ) {
    successMessage.innerText = "Form submitted successfully!";
    successMessage.style.display = "block";
    form.reset();
  }
});

function showError(input, message) {
  const errorMessage = input.nextElementSibling;
  errorMessage.innerText = message;
  input.classList.add("error");
}

function removeError(input) {
  const errorMessage = input.nextElementSibling;
  errorMessage.innerText = "";
  input.classList.remove("error");
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isValidPhone(phone) {
  const re = /^\d{10}$/;
  return re.test(phone);
}


// Display success message
	// let successMessage = document.getElementById("success-message");
	// successMessage.innerHTML = "Form submitted successfully.";
	// return true;