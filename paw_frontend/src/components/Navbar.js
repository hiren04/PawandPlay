import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🐶 Paw & Play
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Show for non-logged-in users */}
            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/whychooseus">Why Choose Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-5" to="/contactus">Contact Us</Link>
                </li>
              </>
            ) : (
              <>
                {/* Show for regular users */}
                {user.role === 'user' && (
                  <>
                 
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/dashboard">My Appoinments</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-5" to="/book">Book Appointment</Link>
                    </li>
                  </>
                )}

                {/* Logout shown for all logged-in users */}
                <li className="nav-item">
                  <button className="btn btn-outline-danger btn-sm ms-2" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
