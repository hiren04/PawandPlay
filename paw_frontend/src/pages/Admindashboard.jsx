import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = ({ user }) => {
  const [appointments, setAppointments] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [showUpcomingOnly, setShowUpcomingOnly] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');



  const filteredAppointments = appointments.filter((appt) => {
    const matchStatus = statusFilter === 'all' ? true : appt.status === statusFilter;
  
    const today = new Date();
    const appointmentDate = new Date(appt.date);
    const matchUpcoming = !showUpcomingOnly || appointmentDate >= today;
  
    const matchSelectedDate = !selectedDate || appt.date === selectedDate;
  
    return matchStatus && matchUpcoming && matchSelectedDate;
  });
  

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/appointments/status/${id}`, {
        status: newStatus
      });
  
      // Update state
      setAppointments((prev) =>
        prev.map((appt) => (appt._id === res.data._id ? res.data : appt))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };
  

  useEffect(() => {
    const fetchAll = async () => {
      if (user?.role === 'admin') {
        try {
          const res = await axios.get('http://localhost:5000/api/appointments/all');
          setAppointments(res.data);
        } catch (err) {
          console.error('Error fetching appointments:', err);
        }
      }
    };

    fetchAll();
  }, [user]);

  if (user?.role !== 'admin') {
    return <div className="text-center mt-5 text-danger">❌ Access Denied: Admins only</div>;
  }

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">All Appointments (Admin View)</h3>
        <div className="mb-3 d-flex justify-content-between flex-wrap gap-2">
            {/* Status Filter */}
            <select
              className="form-select w-auto"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>

            {/* Upcoming Filter */}
            <select
              className="form-select w-auto"
              value={showUpcomingOnly ? 'upcoming' : 'all'}
              onChange={(e) => setShowUpcomingOnly(e.target.value === 'upcoming')}
            >
              <option value="all">All Dates</option>
              <option value="upcoming">Upcoming Only</option>
            </select>
            {/* 📅 Date Filter */}
            <input
              type="date"
              className="form-control w-auto"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              max="9999-12-31"
            />

{selectedDate && (
  <button
    className="btn btn-sm btn-outline-secondary ms-2"
    onClick={() => setSelectedDate('')}
  >
    Clear Date Filter
  </button>
)}

          </div>
        {filteredAppointments.length === 0 ? (
          <p>No appointments to show.</p>
        ) : (
          
          <ul className="list-group">
             {filteredAppointments.map((appt) => (
             <li
             className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
             key={appt._id}
           >
             <div className="w-75">
               <strong>{appt.petName}</strong> ({appt.petType}, {appt.breed})<br />
               Age: {appt.age} | Date: {appt.date} | {appt.dropOff} – {appt.pickUp}<br />
               Booked by: {appt.userId?.name} ({appt.userId?.email})
               {appt.instructions && (
                 <div><em>Note:</em> {appt.instructions}</div>
               )}
             </div>
           
             <div className="d-flex flex-column align-items-end justify-content-between">
               <span className={`badge mb-2 bg-${appt.status === 'accepted' ? 'success' : appt.status === 'rejected' ? 'danger' : 'secondary'}`}>
                 {appt.status}
               </span>
           
               {/* ✅ Action buttons for pending only */}
               {appt.status === 'pending' && (
                 <div className="btn-group">
                   <button
                     className="btn btn-sm btn-success"
                     onClick={() => handleStatusChange(appt._id, 'accepted')}
                   >
                     Accept
                   </button>
                   <button
                     className="btn btn-sm btn-danger"
                     onClick={() => handleStatusChange(appt._id, 'rejected')}
                   >
                     Reject
                   </button>
                 </div>
               )}
             </div>
           </li>
           
            
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
