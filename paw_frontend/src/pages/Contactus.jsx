import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <img src="https://cdn-icons-png.flaticon.com/512/616/616408.png" alt="Paw Icon" width="80" />
        <h2 className="mt-3 fw-bold">Contact Paw & Play</h2>
        <p className="text-muted fs-5">We'd love to hear from you! 🐾</p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="mb-3 fs-2">📍</div>
            <h5>Address</h5>
            <p className="text-muted">123 Paw Street<br />Dogtown, ON, Canada</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="mb-3 fs-2">📞</div>
            <h5>Phone</h5>
            <p className="text-muted">(123) 456-7890</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm text-center p-3">
            <div className="mb-3 fs-2">📧</div>
            <h5>Email</h5>
            <p className="text-muted">
              <a href="mailto:contact@pawandplay.com" className="text-decoration-none">
                contact@pawandplay.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h5 className="mb-3">📍 Find Us on the Map</h5>
        <div className="ratio ratio-16x9 rounded shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.492537251086!2d-80.25903258450004!3d43.139386779141446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c646671bfa98d%3A0x8a6f3f6c54f2e313!2sBrantford%2C%20ON!5e0!3m2!1sen!2sca!4v1616186730739!5m2!1sen!2sca"
            title="Paw & Play Location"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
