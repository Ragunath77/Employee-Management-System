import React from "react";
import './login.css';
import picImage from './Pic.png';
import profileImage from './profile.png';

const LoginComponent = () => {
  const validateForm = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (username === '' || password === '') {
      errorMessage.textContent = 'Username and password are required.';
      return;
    }

    if (username.length < 8) {
      errorMessage.textContent = 'Username must be at least 8 characters.';
      return;
    }

    if (username.charAt(0) !== username.charAt(0).toUpperCase()) {
      errorMessage.textContent = 'Username must start with a capital letter.';
      return;
    }

    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters.';
      return;
    }

    errorMessage.style.color = 'green';
    errorMessage.textContent = 'Login successful!';
  };

  return (
    <div className="box">
      <div className="sub">
        <img src={picImage} alt="Placeholder" />
      </div>
      <div className="right">
        <center>
          <div className="pro">
            <img src={profileImage} alt="Profile" />
          </div>
        </center>
        <h2>LOGIN</h2>
        <form id="loginForm" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="username"><b>Username:</b></label>
          <input type="text" id="username" name="username" required placeholder="Enter your username" />

          <label htmlFor="password"><b>Password:</b></label>
          <input type="password" id="password" name="password" required placeholder="Enter your password" />

          <div className="error" id="error-message"></div>

          <center>
            <button type="submit">Login</button>
          </center>
          <div className="sign">
          Not a member? <a href="signup">sign up</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;