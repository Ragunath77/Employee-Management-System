import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import picImage from './Pic.png';
import profileImage from './profile.png';

const LoginComponent = () => {
  const navigate = useNavigate();
  const validateForm = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    const validUsername = 'Ragunath@777';
    const validPassword = 'Ragunath@777';

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

    if (username === validUsername && password === validPassword) {
      navigate("/home");
      return;
    }
    else{
      errorMessage.textContent = 'Invalid username or password.';
    }

  };
  const inlineStyles = {
    margin: 0,
    overflow: 'hidden',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(120deg, #2980b9, #8e44ad)',
  };

  return (
    <div style={inlineStyles}>
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
            Not a member? <Link to="Sign">signup</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginComponent;
