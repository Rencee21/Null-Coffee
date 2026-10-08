let users = {
    "Admin@gmail.com": "Admin#123", // Predefined user
    "Admin1@gmail.com": "Admin1",   // Example user for the presentation
};

function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorElement = document.getElementById('login-error');

    if (users[email] && users[email] === password) {
        errorElement.textContent = '';
        alert('Login Successful!');
        window.location.href = 'index.html'; // Example redirect
    } else {
        errorElement.textContent = 'Invalid email or password. Please try again.';
    }
}

function validateSignup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const errorElement = document.getElementById('signup-error');

    if (email in users) {
        errorElement.textContent = 'Email already exists. Please log in.';
    } else if (email && password) {
        users[email] = password; // Save user credentials
        errorElement.textContent = '';
        alert('Signup Successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login
    } else {
        errorElement.textContent = 'Please fill out both fields.';
    }
}
