window.onload = function () {
    // Show splash screen initially, then transition to choice screen
    setTimeout(() => {
        document.getElementById("splashScreen").classList.add("hidden");
        document.getElementById("choiceScreen").classList.remove("hidden");
    }, 2000); // Show splash screen for 2 seconds
};

// Function to show login form screen based on user type
function showLoginForm(userType) {
    document.getElementById("choiceScreen").classList.add("hidden");
    document.getElementById("formScreen").classList.remove("hidden");
    document.getElementById("loginTab").click();
}

// Function to toggle between login and signup forms
function showTab(tab) {
    if (tab === 'login') {
        document.getElementById("loginTab").style.backgroundColor = "#2e2e2e";
        document.getElementById("signupTab").style.backgroundColor = "transparent";
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("signupForm").classList.add("hidden");
    } else {
        document.getElementById("signupTab").style.backgroundColor = "#2e2e2e";
        document.getElementById("loginTab").style.backgroundColor = "transparent";
        document.getElementById("signupForm").classList.remove("hidden");
        document.getElementById("loginForm").classList.add("hidden");
    }
}
