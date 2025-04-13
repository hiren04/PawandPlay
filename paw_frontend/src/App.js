import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookAppointment from './pages/BookAppointment';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/Admindashboard';
import Home from './pages/Home';
import Footer from './components/Footer'; // ✅ Import Footer
import 'bootstrap/dist/js/bootstrap.bundle.min';
import WhyChooseUs from './pages/whychooseus';
import UserHome from './pages/UserHome';
import Contactus from './pages/Contactus';
import AboutUs from './pages/AboutUs';

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <Router>
      <Navbar user={user} setUser={setUser} /> {/* ✅ Navbar stays at top */}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={user?.role === 'user' ? <Dashboard user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/book"
          element={user?.role === 'user' ? <BookAppointment user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={user?.role === 'admin' ? <AdminDashboard user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/home"
          element={user?.role === 'user' ? <UserHome user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/whychooseus" element={<WhyChooseUs />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>

      <Footer /> {/* ✅ Footer at bottom on all pages */}
    </Router>
  );
}

export default App;
