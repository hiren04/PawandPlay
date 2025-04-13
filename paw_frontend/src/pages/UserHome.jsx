import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserHome = ({ user }) => {
  return (
    <div className="container py-5">
      <div className="card shadow p-4 text-center">
       
        <h2>Welcome, {user?.name}!</h2>
        <p className="text-muted mb-4">Glad to have you back at Paw & Play 🐾</p>

        {/* Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
          <Link to="/book" className="btn btn-sm btn-primary px-4">📅 Book Appointment</Link>
          <Link to="/dashboard" className="btn btn-sm btn-outline-secondary px-4">📋 My Appointments</Link>
        </div>

        <div className="mt-3">
          {/* <h5 className="text-center mb-3">🐾 Our Happy Visitors</h5> */}
          <div id="petCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner rounded shadow">
            <div className="carousel-item active">
                <img
                src="https://images.pexels.com/photos/4587990/pexels-photo-4587990.jpeg"
                className="d-block w-100"
                alt="Dogs playing outside"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
            </div>
            <div className="carousel-item">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5c46480b71069967efff4763/1568843657542-N3XX7PIWVIBT6Z5JA34K/ALLDOGS2.jpg?format=2500w"
                className="d-block w-100"
                alt="Dog running"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
            </div>
            <div className="carousel-item">
                <img
                src="https://www.caninetofive.com/wp-content/uploads/2024/06/447721062_418156657860952_1742716709570031798_n.jpg"
                className="d-block w-100"
                alt="Dogs playing in park"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
            </div>
            <div className="carousel-item">
                <img
                src="https://ferndogtraining.com/wp-content/uploads/2017/03/Daycare-post-feature-image-1-1080x628.jpg"
                className="d-block w-100"
                alt="Puppy with toy"
                style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
            </div>
         </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#petCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#petCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
