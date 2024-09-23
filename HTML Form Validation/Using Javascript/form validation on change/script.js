// Function to validate inputs
function validateInput(input) {
    const id = input.id;
    const value = input.value.trim();
    let errorMessage = '';

    if (value === '') {
        errorMessage = 'This field is required.';
    }

    if (id === 'username') {
        if (!/^[a-zA-Z0-9_]{3,16}$/.test(value)) {
            errorMessage = 'Username must be 3-16 characters long and contain letters, numbers, or underscores.';
        }
    }

    if (id === 'email') {
        if (!/\S+@\S+\.\S+/.test(value)) {
            errorMessage = 'Please enter a valid email address.';
        }
    }

    if (id === 'password') {
        if (value.length < 8 || value.length > 20) {
            errorMessage = 'Password must be between 8 and 20 characters long.';
        }
    }

    if (id === 'confirm_password') {
        const password = document.getElementById('password').value;
        if (value !== password) {
            errorMessage = 'Passwords do not match.';
        }
    }

    if (id === 'phone') {
        if (!/^\d{10}$/.test(value)) {
            errorMessage = 'Phone number must be exactly 10 digits.';
        }
    }

    const errorDiv = document.getElementById(id + 'Error');
    if (errorMessage) {
        errorDiv.textContent = errorMessage;
        errorDiv.classList.remove('hidden');
        input.setCustomValidity(errorMessage);
    } else {
        errorDiv.textContent = '';
        errorDiv.classList.add('hidden');
        input.setCustomValidity('');
    }
}

document.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('input', function () {
        validateInput(input);
    });
});

// Form submission validation
document.getElementById('liveValidationForm').addEventListener('submit', function (event) {
    let formIsValid = false;

    document.querySelectorAll('input').forEach(function (input) {
        validateInput(input);
        if (!input.checkValidity()) {
            formIsValid = false;
        }
    });

    if (!formIsValid) {
        event.preventDefault();
    }
});
