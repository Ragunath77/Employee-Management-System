import React from "react";
import { Link,useNavigate } from 'react-router-dom'
import './login.css';
import picImage from './Pic.png';

const SignUpComponent = () => {
  const navigate = useNavigate();
  const validateForm = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();
    const confirmPassword = e.target.elements.confirmPassword.value.trim();
    const email = e.target.elements.email.value.trim();

    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    if (username === '' || password === '' || confirmPassword === '' || email === '') {
      errorMessage.textContent = 'All fields are required.';
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

    if (password !== confirmPassword) {
      errorMessage.textContent = 'Passwords do not match.';
      return;
    }
    else{
      navigate("/");
      return;
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
      <div className="si">
          <h2>SIGN UP</h2>
        </div>
        <form id="loginForm" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="username"><b>Username:</b></label>
          <input type="text" id="username" name="username" required placeholder="Enter your username" />

          <label htmlFor="password"><b>Password:</b></label>
          <input type="password" id="password" name="password" required placeholder="Enter your password" />

          <label htmlFor="confirmPassword"><b>Re-enter Password:</b></label>
          <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Re-enter your password" />

          <label htmlFor="email"><b>Email:</b></label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />

          <div className="error" id="error-message"></div>

          <center>
            <button type="submit">Signup</button>
          </center>
          <div className="sign">
            Already a member?<Link to="/">Login</Link>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SignUpComponent;