document.getElementById('jsForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm_password').value;
  const dob = document.getElementById('dob').value;
  const phone = document.getElementById('phone').value.trim();


  document.querySelectorAll('.error-message').forEach(function (errorDiv) {
    errorDiv.classList.add('hidden');
    errorDiv.textContent = '';
  });


  let isValid = true;

  if (!/^[a-z][\w]{3,16}$/.test(username)) { // \w = any letter, number or underscore
    isValid = false;
    const usernameError = document.getElementById('usernameError');
    usernameError.textContent = 'Username must be between 3 and 16 characters and can contain letters, numbers, and underscores.';
    usernameError.classList.remove('hidden');
  }

  // Email validation
  if (!/\S+@\S+\.\S+/.test(email)) {
    isValid = false;
    const emailError = document.getElementById('emailError');
    emailError.textContent = 'Please enter a valid email.';
    emailError.classList.remove('hidden');
  }

  // Password validation (8-20 characters)
  if (password.length < 8 || password.length > 20) {
    isValid = false;
    const passwordError = document.getElementById('passwordError');
    passwordError.textContent = 'Password must be between 8 and 20 characters.';
    passwordError.classList.remove('hidden');
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    isValid = false;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    confirmPasswordError.textContent = 'Passwords do not match.';
    confirmPasswordError.classList.remove('hidden');
  }

  if (!dob) {
    isValid = false;
    const dobError = document.getElementById('dobError');
    dobError.textContent = 'Please select your date of birth.';
    dobError.classList.remove('hidden');
  }

  // Must Contain 10 Digits
  if (!/^\d{10}$/.test(phone)) {
    isValid = false;
    const phoneError = document.getElementById('phoneError');
    phoneError.textContent = 'Phone number mest be exactly 10 digits.';
    phoneError.classList.remove('hidden');
  }

  if (isValid) {
    console.log('Form submitted successfully!');
  }
});
