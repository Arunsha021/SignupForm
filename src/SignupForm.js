import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Perform signup logic (e.g., send data to backend API)

    // Clear form inputs
    setEmail('');
    setBusinessName('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto',backgroundColor:'burlywood' }}>
      <h2 style={{ textAlign: 'center',backgroundColor:'aquamarine' }}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ display: 'block', width: '95%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="text"
          placeholder="Business Name"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          style={{ display: 'block', width: '95%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', width: '95%', marginBottom: '10px', padding: '8px' }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ display: 'block', width: '95%', marginBottom: '10px', padding: '8px' }}
        />
        <button type="submit" style={{ display: 'block', width: '100%', padding: '8px', backgroundColor: '#4caf50', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
