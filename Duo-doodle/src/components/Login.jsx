import React, { useState } from "react";
import "./../styles/Login.css";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isUsernameValid = username.trim().length > 0;
  const isPasswordValid = password.length >= 4;

  const getPasswordStrength = (password) => {
    if (password.length < 4) return "Weak";
    if (password.length < 8) return "Medium";
    return "Strong";
  };

  const handleLogin = () => {
    if (isUsernameValid && isPasswordValid) {
      setIsLoading(true);
      setTimeout(() => {
        onLogin(username); 
        setUsername("");
        setPassword("");
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      
      <div className="login-input">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isUsernameValid && (
          <p className="error-message">Username is required.</p>
        )}
      </div>

      
      <div className="login-input">
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && (
          <p className="error-message">
            Password must be at least 4 characters long.
          </p>
        )}
        <p className="password-strength">
          Strength: {getPasswordStrength(password)}
        </p>
      </div>

      
      <div>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label>Show Password</label>
      </div>

     
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label>Remember Me</label>
      </div>

      
      <a href="/reset-password" className="forgot-password">
        Forgot Password?
      </a>

      
      {isLoading ? (
        <div className="spinner">Loading...</div>
      ) : (
        <button
          className="login-button"
          onClick={handleLogin}
          disabled={!isUsernameValid || !isPasswordValid}
        >
          Login
        </button>
      )}

      <p className="login-message">Welcome to the Drawing Game!</p>
    </div>
  );
}

export default Login;
