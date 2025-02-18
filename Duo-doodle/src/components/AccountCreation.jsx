import { useState } from "react";

const AccountCreation = () => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('') 
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes('@')) newErrors.email = 'Invalid email address';
    if (username.length < 3) newErrors.username = 'Username must be at least 4 characters';
    if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(email, username, password);
  }

  return (
    <section className="account-section">
      <h2>Create Account</h2>
      
      <form onSubmit={handleSubmit} className="account-form">
        
        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="Email"></input>
        
        <label>Username:</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" name="Username"></input>
        
        <label>Password:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="Password"></input>

        <button type="submit" className="account-button">Create!</button>

      </form>

    </section>
  )}
}


export default AccountCreation