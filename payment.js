
const form = document.querySelector('.payment-form');
const cardNumberInput = document.getElementById('cardNumber');
const expiryInput = document.getElementById('expiry');
const cvvInput = document.getElementById('cvv');

const subtotalEl = document.querySelector('.summary-pricing .detail-row span:last-child');
const totalEl = document.querySelector('.summary-pricing .total-amount span:last-child');

// Dynamic price variables
let basePrice = 150;   // can later fetch from booking
let taxRate = 0.10;    // 10%

// Calculate payment
function calculatePayment() {
    const tax = basePrice * taxRate;
    const total = basePrice + tax;

    subtotalEl.textContent = `$${basePrice.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
}

// Initial calculation
calculatePayment();

/* -------- VALIDATION -------- */
function isValidCardNumber(value) {
    return /^\d{16}$/.test(value);
}

function isValidExpiry(value) {
    if (!/^\d{2}\/\d{2}$/.test(value)) return false;
    const [month] = value.split('/').map(Number);
    return month >= 1 && month <= 12;
}

function isValidCVV(value) {
    return /^\d{3,4}$/.test(value);
}

expiryInput.addEventListener('input', () => {
    if (expiryInput.value.length === 2 && !expiryInput.value.includes('/')) {
        expiryInput.value += '/';
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!isValidCardNumber(cardNumberInput.value.trim())) {
        alert('Invalid card number');
        return;
    }
    if (!isValidExpiry(expiryInput.value.trim())) {
        alert('Invalid expiry date');
        return;
    }
    if (!isValidCVV(cvvInput.value.trim())) {
        alert('Invalid CVV');
        return;
    }

    processPayment();
});

// Payment simulation
function processPayment() {
    const button = document.querySelector('.large-btn');
    button.disabled = true;
    button.textContent = 'Processing...';

    setTimeout(() => {
        alert(`Payment successful!\nTotal Paid: ${totalEl.textContent}`);
        button.disabled = false;
        button.textContent = 'Confirm & Pay';
        form.reset();
    }, 2000);
}
