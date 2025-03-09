document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        const fullName = document.getElementById("full-name");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirm-password");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const confirmError = document.getElementById("confirm-error");

        // Validate Name
        if (fullName.value.trim() === "") {
            nameError.style.display = "block";
            isValid = false;
        } else {
            nameError.style.display = "none";
        }

        // Validate Email
        if (!validateEmail(email.value)) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validate Password
        if (password.value.length < 6) {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // Validate Confirm Password
        if (password.value !== confirmPassword.value) {
            confirmError.style.display = "block";
            isValid = false;
        } else {
            confirmError.style.display = "none";
        }

        // If all fields are valid, simulate registration
        if (isValid) {
            alert("Registration Successful!");
            window.location.href = "login.html";
        }
    });

    // Password Strength Checker
    document.getElementById("password").addEventListener("input", function () {
        const passwordStrength = document.getElementById("password-strength");
        const value = this.value;
        if (value.length < 6) {
            passwordStrength.textContent = "Weak Password ❌";
            passwordStrength.style.color = "red";
        } else if (value.match(/[0-9]/) && value.match(/[a-zA-Z]/)) {
            passwordStrength.textContent = "Strong Password ✅";
            passwordStrength.style.color = "green";
        } else {
            passwordStrength.textContent = "Medium Password ⚠️";
            passwordStrength.style.color = "orange";
        }
    });

    // Show/Hide Password
    window.togglePassword = function (id) {
        const field = document.getElementById(id);
        field.type = field.type === "password" ? "text" : "password";
    };

    // Email Validation Function
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
