// Show/hide password functionality
const showPasswordCheckbox = document.getElementById("showPassword");
const passwordInput = document.getElementById("password");

showPasswordCheckbox.addEventListener("click", () => {
    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

// Example functionality for captcha refresh (this should be dynamic in a real application)
const captchaCode = document.querySelector(".captcha-code");
const refreshButton = document.querySelector(".captcha-refresh");

refreshButton.addEventListener("click", () => {
    const newCaptcha = Math.random().toString(36).substring(2, 8); // Generate random captcha
    captchaCode.textContent = newCaptcha;
});
