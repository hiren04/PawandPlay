import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/Signup.css'; // ✅ reuse the same CSS file for styling

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      onLogin(res.data.user);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      setMessage('Login successful');
      // ✅ Role-based redirection
      if (res.data.user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/home');
      }
    } catch (err) {
      setMessage(err.response?.data?.message || 'Invalid credentials');
    }
  };

  return (
    <div className="login-bg container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-5 rounded-4" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Dog Paw"
            width="80"
            className="mb-3"
          />
          <h2 className="mt-2">Login</h2>
          <p className="text-muted">Welcome back to PawCare 🐶</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              className="form-control form-control-lg"
              placeholder="your@email.com"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              className="form-control form-control-lg"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="btn btn-primary w-100 py-2 fs-5 shadow-sm transition-transform duration-300 transform hover:scale-105"
            type="submit"
          >
            Login
          </button>
        </form>
        {message && <div className={`alert mt-3 ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
      </div>
    </div>
  );
};

export default Login;
