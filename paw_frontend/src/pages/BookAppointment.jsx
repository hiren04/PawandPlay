import React, { useState } from 'react';
import axios from 'axios';
import '../assets/Signup.css'; // for blurred paw & layout
import { useNavigate } from 'react-router-dom';

const BookAppointment = ({ user }) => {
  const [form, setForm] = useState({
    petName: '',
    petType: '',
    breed: '',
    age: '',
    date: '',
    dropOff: '',
    pickUp: '',
    instructions: ''
  });
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [booked, setBooked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const today = new Date().toISOString().split('T')[0];
    if (form.date <= today) {
      setErrorMessage('❌ Stay date must be greater than today.');
      return; 
    }

    const drop = form.dropOff;
    const pick = form.pickUp;
  
    if (drop >= pick) {
      setErrorMessage('❌ Drop-off time cannot be later than or equal to pick-up time.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/appointments/book', {
        ...form,
        userId: user._id
      });

      setBooked(true);
      setErrorMessage('');
      setMessage('🐶 Thank you! Your appointment has been booked.🐾');
      setTimeout(() => navigate('/dashboard'), 1500);

      setForm({
        petName: '',
        petType: '',
        breed: '',
        age: '',
        date: '',
        dropOff: '',
        pickUp: '',
        instructions: ''
      });
    } catch (err) {
      setErrorMessage('Something went wrong. Try again.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg rounded-4 p-4" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="text-center mb-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Dog Paw"
            width="80"
          />
          <h2 className="mt-2">Book Appointment</h2>
          <p className="text-muted">Schedule your pet's stay 🐾</p>
        </div>

        {!booked ? (
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label>Pet Name</label>
              <input
                name="petName"
                className="form-control"
                onChange={handleChange}
                value={form.petName}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Pet Type</label>
              <select
                name="petType"
                className="form-control"
                onChange={handleChange}
                value={form.petType}
                required
              >
                <option value="">Select</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="col-md-6">
              <label>Breed</label>
              <input
                name="breed"
                className="form-control"
                onChange={handleChange}
                value={form.breed}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
                onChange={handleChange}
                value={form.age}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Date of Stay</label>
              <input
                type="date"
                name="date"
                className="form-control"
                min={new Date().toISOString().split('T')[0]}
                onChange={handleChange}
                value={form.date}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Drop-off Time</label>
              <input
                type="time"
                name="dropOff"
                className="form-control"
                onChange={handleChange}
                value={form.dropOff}
                required
              />
            </div>
            <div className="col-md-6">
              <label>Pick-up Time</label>
              <input
                type="time"
                name="pickUp"
                className="form-control"
                onChange={handleChange}
                value={form.pickUp}
                required
              />
            </div>
            <div className="col-md-12">
              <label>Special Instructions</label>
              <textarea
                name="instructions"
                className="form-control"
                onChange={handleChange}
                value={form.instructions}
                rows="3"
              />
            </div>
            <button className="btn btn-primary w-100 py-2">Book Appointment</button>
          </form>
        ) : (
          <div className="alert alert-success text-center mt-3">
            {message && <div className="alert alert-info">{message}</div>}
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-danger text-center mt-3">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAppointment;
