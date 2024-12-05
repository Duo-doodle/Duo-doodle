import React, { useState } from "react";
import "./../styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isUsernameValid = username.trim().length > 0;
  const isPasswordValid = password.length >= 4;

  const handleLogin = () => {
    if (isUsernameValid && isPasswordValid) {
      onLogin(username); 
      setUsername(""); 
      setPassword(""); 
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-input">
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        {!isUsernameValid && (
          <p className="error-message">Username is required.</p>
        )}
      </div>
      <div className="login-input">
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && (
          <p className="error-message">
            Password must be at least 4 characters long.
          </p>
        )}
      </div>
      <button
        className="login-button"
        onClick={handleLogin}
        disabled={!isUsernameValid || !isPasswordValid}
      >
        Login
      </button>
      <p className="login-message">Welcome to the Drawing Game!</p>
    </div>
  );
}

export default Login;
