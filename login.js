
document.addEventListener("DOMContentLoaded", function () {
    const correctUsername = "Kittapas";
    const correctPassword = "630910304";

    const loginForm = document.getElementById("loginForm");
    const loginButton = document.getElementById("loginButton");
    const loginMessage = document.getElementById("loginMessage");

    loginButton.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;

        if (usernameInput === correctUsername && passwordInput === correctPassword) {
            loginMessage.textContent = "Your username and password are correct! You are logged in.";
        } else {
            loginMessage.textContent = "Your username or password is incorrect! Please try again.";
        }

        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    });
});