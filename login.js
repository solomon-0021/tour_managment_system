

/* -------- DOM ELEMENTS -------- */
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

/* -------- FORM VALIDATION -------- */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMessage.textContent = '';

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters.';
        passwordInput.focus();
        return;
    }

    // Simulate successful login
    alert('Login successful!');
    form.reset();
});

/* -------- HELPER FUNCTION -------- */
function isValidEmail(email) {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* -------- NAV ACTIVE LINK -------- */
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.toggle(
        'active',
        link.getAttribute('href') === currentPage
    );
});
