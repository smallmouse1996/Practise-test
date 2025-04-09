import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you might use React Router for navigation

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required');
    } else {
      // Submit the form or handle login
      console.log('Username:', username);
      console.log('Password:', password);
      setError(''); // Clear error message if login is successful
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Đăng Nhập</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Tên đăng nhập</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">Đănd nhập</button>
      </form>

      {/* Forgot Password link */}
      <div className="forgot-password-container">
        <Link to="/quen-mat-khau" className="forgot-password-link">Quên mật khẩu?</Link>
      </div>

      {/* Sign Up Button */}
      <div className="signup-container">
        <p>Bạn chưa có tài khoản?</p>
        <Link to="/dang-ky" className="signup-button">Sign Up</Link>
      </div>
    </div>
  );
}

export default LoginPage;
