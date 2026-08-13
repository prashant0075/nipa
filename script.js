const form = document.getElementById("loginForm");

const userId = document.getElementById("userId");

const password = document.getElementById("password");

const message = document.getElementById("message");

const togglePassword =
    document.getElementById("togglePassword");

const forgotPassword =
    document.getElementById("forgotPassword");


// ======================================
// TEMPORARY LOGIN CREDENTIALS
// ======================================

const TEMP_USER_ID = "admin";

const TEMP_PASSWORD = "admin123";


// ======================================
// SHOW / HIDE PASSWORD
// ======================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "🙈";

    } else {

        password.type = "password";

        togglePassword.textContent = "🔑";

    }

});


// ======================================
// LOGIN
// ======================================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    const enteredUserId =
        userId.value.trim();

    const enteredPassword =
        password.value;


    // Empty User ID
    if (enteredUserId === "") {

        message.textContent =
            "Please enter your user ID.";

        message.style.color = "red";

        userId.focus();

        return;

    }


    // Empty Password
    if (enteredPassword === "") {

        message.textContent =
            "Please enter your password.";

        message.style.color = "red";

        password.focus();

        return;

    }


    // ==================================
    // CHECK LOGIN
    // ==================================

    if (
        enteredUserId === TEMP_USER_ID &&
        enteredPassword === TEMP_PASSWORD
    ) {

        // Save login information
        sessionStorage.setItem(
            "loggedInUser",
            enteredUserId
        );


        // Open dashboard
        window.location.href =
            "dashboard.html";

    }

    else {

        message.textContent =
            "Invalid user ID or password.";

        message.style.color = "red";

    }

});


// ======================================
// FORGOT PASSWORD
// ======================================

forgotPassword.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        message.textContent =
            "For demo use: admin / admin123";

        message.style.color = "#0869b9";

    }
);