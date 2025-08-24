const form = document.getElementById("registerForm");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let isValid = true;

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email) {
        emailError.innerText = "Email is required.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.innerText = "Please enter a valid email.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Username Validation
    const username = document.getElementById("username").value.trim();
    const usernameError = document.getElementById("usernameError");
    const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
    if (!username) {
        usernameError.innerText = "Username is required.";
        usernameError.style.display = "block";
        isValid = false;
    } else if (!usernameRegex.test(username)) {
        usernameError.innerText = "Username must be at least 3 characters (letters/numbers only).";
        usernameError.style.display = "block";
        isValid = false;
    } else {
        usernameError.style.display = "none";
    }

    // Password Validation
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById("passwordError");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password) {
        passwordError.innerText = "Password is required.";
        passwordError.style.display = "block";
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        passwordError.innerText = "Password must be at least 8 characters, contain uppercase, lowercase, number, and special character.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    const confirmError = document.getElementById("confirmError");
    if (!confirmPassword) {
        confirmError.innerText = "Confirm password is required.";
        confirmError.style.display = "block";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmError.innerText = "Passwords do not match.";
        confirmError.style.display = "block";
        isValid = false;
    } else {
        confirmError.style.display = "none";
    }

    if (isValid) {
        try {
            const response = await fetch("https://test-api-v1-vert.vercel.app/v1/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, username, password }),
            });

            const data = await response.json();
            console.log("API Response:", data);

            if (response.ok) {
                alert(" Registered successfully!");
            } else {
                alert("API Error: " + data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert(" Something went wrong. Please try again.");
        }
    }
});