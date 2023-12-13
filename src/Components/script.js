function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';
    if (username === '' || password === '') {
        errorMessage.textContent = 'Username and password are required.';
        return false; 
    }
    if (username.length < 8) {
        errorMessage.textContent = 'Username must be at least 8 characters.';
        return false;
    }
    if (username.charAt(0) !== username.charAt(0).toUpperCase()) {
        errorMessage.textContent = 'Username must start with a capital letter.';
        return false;
    }
    if (password.length < 8) {
        errorMessage.textContent = 'Password must be at least 8 characters.';
        return false;
    }
    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Login successful!';
    return false;
}
