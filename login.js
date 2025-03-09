document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");

        // Validate Email
        if (!validateEmail(email.value)) {
            emailError.style.display = "block";
            isValid = false;
        } else {
            emailError.style.display = "none";
        }

        // Validate Password
        if (password.value.trim() === "") {
            passwordError.style.display = "block";
            isValid = false;
        } else {
            passwordError.style.display = "none";
        }

        // If all fields are valid, simulate login
        if (isValid) {
            alert("Login Successful!");
            if (document.getElementById("remember-me").checked) {
                localStorage.setItem("userEmail", email.value);
            } else {
                localStorage.removeItem("userEmail");
            }
            window.location.href = "index.html";
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

    // Auto-fill email if remembered
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("remember-me").checked = true;
    }
});
