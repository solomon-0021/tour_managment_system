/* -------- DOM ELEMENTS -------- */
const form = document.getElementById('signup-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';
errorMessage.style.textAlign = 'center';
form.prepend(errorMessage);

/* -------- FORM VALIDATION -------- */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    errorMessage.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Name validation (letters and spaces)
    if (!/^[A-Za-z\s]+$/.test(name)) {
        errorMessage.textContent = 'Name must contain only letters and spaces.';
        nameInput.focus();
        return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.focus();
        return;
    }

    // Password validation
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)) {
        errorMessage.textContent =
            'Password must contain at least one number, one uppercase, one lowercase letter, and at least 8 characters.';
        passwordInput.focus();
        return;
    }

    // Simulate successful signup
    alert('Account created successfully!');
    form.reset();
});

/* -------- NAV ACTIVE LINK -------- */
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop();

navLinks.forEach(link => {
    link.classList.toggle(
        'active',
        link.getAttribute('href') === currentPage
    );
});
