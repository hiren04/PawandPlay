import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = ({ user }) => {
  const [appointments, setAppointments] = useState([]);
  const [editingAppt, setEditingAppt] = useState(null);
  const [editForm, setEditForm] = useState({});

  const isFutureDate = (apptDate) => {
    const today = new Date().toISOString().split('T')[0];
    return apptDate >= today;
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      if (user?._id) {
        try {
          const res = await axios.get(`http://localhost:5000/api/appointments/user/${user._id}`);
          setAppointments(res.data);
        } catch (err) {
          console.error('Error fetching appointments:', err);
        }
      }
    };

    fetchAppointments();
  }, [user]);

  return (
    <div className="container py-5">
      <div className="card shadow-lg rounded-4 p-4 mb-4 text-center" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div className="text-center mb-3">
          <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Dog Paw" width="80" />
        </div>

        {user ? (
          <>
            {/* <p className="fs-5"><strong>Welcome:</strong> {user.name}</p> */}
            <p className="fs-6 text-muted"><strong>Email:</strong> {user.email}</p>
          </>
        ) : (
          <p className="text-danger">Unauthorized. Please login.</p>
        )}
      </div>

      {appointments.length > 0 && (
        <div className="card shadow-lg rounded-4 p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h4 className="mb-3 text-center">Your Appointments 🐾</h4>
          <ul className="list-group">
            {appointments.map((appt) => (
              <li className="list-group-item shadow-sm mb-3" key={appt._id}>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{appt.petName}</strong> ({appt.petType}, {appt.breed}, Age: {appt.age})<br />
                    <small>Date: {appt.date} | Drop-off: {appt.dropOff} | Pick-up: {appt.pickUp}</small><br />
                    <span className={`badge mt-2 bg-${appt.status === 'accepted' ? 'success' : appt.status === 'rejected' ? 'danger' : 'secondary'}`}>
                      {appt.status}
                    </span>
                    {appt.instructions && (
                      <div className="mt-2">
                        <em>Note:</em> {appt.instructions}
                      </div>
                    )}
                  </div>
                  {isFutureDate(appt.date) && appt.status === 'pending' && (
                    <div className="btn-group ms-3">
                      <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => {
                          setEditingAppt(appt);
                          setEditForm(appt);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={async () => {
                          if (window.confirm('Are you sure you want to cancel this appointment?')) {
                            await axios.delete(`http://localhost:5000/api/appointments/${appt._id}`);
                            setAppointments((prev) => prev.filter(a => a._id !== appt._id));
                          }
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Edit Appointment Modal */}
      {editingAppt && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content p-3 rounded-4">
              <h5 className="modal-title mb-3">Edit Appointment</h5>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const today = new Date().toISOString().split('T')[0];
                  if (editForm.date < today) {
                    alert('Date must be today or later.');
                    return;
                  }
                  if (editForm.dropOff >= editForm.pickUp) {
                    alert('❌ Drop-off time cannot be later than or equal to pick-up time.');
                    return;
                  }
                  try {
                    const res = await axios.put(`http://localhost:5000/api/appointments/${editingAppt._id}`, editForm);
                    setAppointments((prev) =>
                      prev.map((a) => (a._id === res.data._id ? res.data : a))
                    );
                    setEditingAppt(null);
                  } catch (err) {
                    alert('Error updating appointment');
                  }
                }}
              >
                <div className="mb-2">
                  <label>Date of Stay</label>
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    value={editForm.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setEditForm({ ...editForm, date: e.target.value })}
                  />
                </div>
                <div className="mb-2">
                  <label>Drop-off Time</label>
                  <input
                    type="time"
                    name="dropOff"
                    className="form-control"
                    value={editForm.dropOff}
                    onChange={(e) => setEditForm({ ...editForm, dropOff: e.target.value })}
                  />
                </div>
                <div className="mb-2">
                  <label>Pick-up Time</label>
                  <input
                    type="time"
                    name="pickUp"
                    className="form-control"
                    value={editForm.pickUp}
                    onChange={(e) => setEditForm({ ...editForm, pickUp: e.target.value })}
                  />
                </div>
                <div className="mb-2">
                  <label>Special Instructions</label>
                  <textarea
                    name="instructions"
                    className="form-control"
                    rows="2"
                    value={editForm.instructions}
                    onChange={(e) => setEditForm({ ...editForm, instructions: e.target.value })}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary me-2" onClick={() => setEditingAppt(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-success">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
