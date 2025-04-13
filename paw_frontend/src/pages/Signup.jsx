import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', form);
      setMessage(res.data.message);
      setTimeout(() => navigate('/login'), 100); // Wait 1s before redirect
    } catch (err) {
      setMessage(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="sign-up-bg container-fluid d-flex justify-content-center align-items-center vh-100  ">
      <div className="card shadow-lg p-5 rounded-4" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center mb-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Dog Paw"
            width="80"
            className="mb-3"
          />
          <h2 className="mt-2">Sign Up</h2>
          <p className="text-muted">Create an account to book Pet daycare 🐶</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              name="name"
              className="form-control form-control-lg"
              placeholder="Your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              name="email"
              type="email"
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
              className="form-control form-control-lg"
              placeholder="••••••••"
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn btn-primary w-100 py-2 fs-5" type="submit">
            Register
          </button>
        </form>
        {message && <div className={`alert mt-3 ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
      </div>
    </div>
  );
};

export default Signup;
