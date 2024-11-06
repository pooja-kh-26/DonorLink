// Get the elements for Donor and Blood Bank buttons
const donorButton = document.querySelector("#donorButton");
const bloodBankButton = document.querySelector("#bloodBankButton");

// Event listeners to navigate to the respective login/signup page
donorButton.addEventListener("click", () => {
    window.location.href = "auth.html?user=donor"; // Redirect to auth page for Donors
});

bloodBankButton.addEventListener("click", () => {
    window.location.href = "auth.html?user=bloodbank"; // Redirect to auth page for Blood Banks
});

// Get the URL query parameters
const params = new URLSearchParams(window.location.search);
const userType = params.get("user"); // Get 'user' query parameter

// Set the user type on the page to differentiate between Donor and Blood Bank
const userTypeText = document.querySelector("#userTypeText");

if (userType === "donor") {
    userTypeText.textContent = "Donor Login/Signup"; // Show Donor specific text
} else if (userType === "bloodbank") {
    userTypeText.textContent = "Blood Bank Login/Signup"; // Show Blood Bank specific text
}

// Switching between login and signup forms
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

// Switch to Signup Form
signupBtn.onclick = () => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
};

// Switch to Login Form
loginBtn.onclick = () => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
};

// Signup Link Click to Switch Forms
signupLink.onclick = () => {
    signupBtn.click();
    return false;
};

// Form Validation for Login and Signup
function validateForm(form) {
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    let isValid = true;

    if (email === "" || password === "") {
        isValid = false;
        alert("All fields must be filled!");
    }

    return isValid;
}

// Form Submit for Login or Signup
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (validateForm(form)) {
            alert("Form submitted successfully!");
            // Redirect to the respective dashboard after successful login/signup
            if (userType === "donor") {
                window.location.href = 'donor.html'; // Redirect to Donor Dashboard
            } else if (userType === "bloodbank") {
                window.location.href = 'bloodbank.html'; // Redirect to Blood Bank Dashboard
            }
        }
    });
});

// For Donor and Blood Bank Navigation from the Dashboard
const donorLink = document.querySelector(".donor-link");
const bloodbankLink = document.querySelector(".bloodbank-link");

donorLink.addEventListener('click', function () {
    window.location.href = "donor.html";
});

bloodbankLink.addEventListener('click', function () {
    window.location.href = "bloodbank.html";
});

// Example dynamic data display in dashboards (for future enhancements)
const updateDashboard = () => {
    const dashboardContent = document.querySelector('.dashboard-content');

    // Dynamic data can be fetched and displayed based on user type
    if (userType === "donor") {
        dashboardContent.innerHTML = `<h3>Welcome to the Donor Dashboard!</h3>`;
    } else if (userType === "bloodbank") {
        dashboardContent.innerHTML = `<h3>Welcome to the Blood Bank Dashboard!</h3>`;
    }
};

// Update Dashboard on page load
document.addEventListener('DOMContentLoaded', updateDashboard);

// Event listeners to navigate to the respective login/signup page
donorButton.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#457b9d";  // Change color to #457b9d on click
    window.location.href = "auth.html?user=donor"; // Redirect to auth page for Donors
});

bloodBankButton.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#457b9d";  // Change color to #457b9d on click
    window.location.href = "auth.html?user=bloodbank"; // Redirect to auth page for Blood Banks
});

