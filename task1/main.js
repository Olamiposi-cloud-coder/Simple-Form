function validateForm() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let gender = document.querySelector('input[name="gender"]:checked');
	let password = document.getElementById("password").value;

	// Check if any fields are empty
	if (name === "" || email === "" || phone === "" || gender === null || password === "") {
		let errorMessage = document.getElementById("error-message");
		errorMessage.innerHTML = "Please fill in all fields.";
		return false;
	}

	// Check email format
	var emailRegex = /^\S+@\S+\.\S+$/;
	if (!email.match(emailRegex)) {
		let errorMessage = document.getElementById("error-message");
		errorMessage.innerHTML = "Please enter a valid email address.";
		return false;
	}

	// Clear any error messages
	let errorMessage = document.getElementById("error-message");
	errorMessage.innerHTML = "";

	// Display success message
	let successMessage = document.getElementById("success-message");
	successMessage.innerHTML = "Form submitted successfully.";
	return true;
}
