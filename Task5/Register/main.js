let form = document.querySelector(".inputs");
let firstName = document.getElementById("firstName");
let surName = document.getElementById("surName");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let password = document.querySelectorAll("input[type='password']")[0];
let confirmPassword = document.querySelectorAll("input[type='password']")[1];
let messageDiv = document.getElementById("message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

let fname = firstName.value;
let sname = surName.value;
let mail = email.value;
let g = gender.value;
let pass = password.value;
let cpass = confirmPassword.value;

if (pass !== cpass) {
        messageDiv.style.display = "block";
        messageDiv.style.backgroundColor = "#ffe6e6";
        messageDiv.style.border = "2px solid red";
        messageDiv.style.color = "red";
        messageDiv.innerHTML = "Passwords do not match!";
        return;
    }

messageDiv.style.display = "block";
messageDiv.style.backgroundColor = "#e6f7ff";
messageDiv.style.border = "2px solid #0F4D68";
messageDiv.style.color = "#0F4D68";

messageDiv.innerHTML = `
        <h2> Welcome, ${fname} ${sname}</h2>
        <p>Email: ${mail}</p>
        <p>Gender: ${g}</p>
        <p>Your account has been created successfully</p>
    `;
});