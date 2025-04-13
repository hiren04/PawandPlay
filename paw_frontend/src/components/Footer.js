import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 ">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3 fw-bold">Paws & Play</h5>
            <p>
              Providing a loving, safe, and playful home away from home for your furry companions.
            </p>
            <p><i className="bi bi-geo-alt-fill me-2"></i>123 Woof Lane, Brantford, ON</p>
            <p><i className="bi bi-envelope-fill me-2"></i>info@pawsandplay.ca</p>
            <p><i className="bi bi-telephone-fill me-2"></i>(123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3 fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none">About Us</Link></li>
              <li><Link to="/book" className="text-white text-decoration-none">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3 fw-bold">Services</h5>
            <ul className="list-unstyled">
              <li>Dog Day Care</li>
              <li>Dog Boarding</li>
              <li>Grooming & Spa</li>
              <li>Training & Socializing</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-3 fw-bold">Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-facebook me-2"></i>Facebook</a></li>
              <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-instagram me-2"></i>Instagram</a></li>
              <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-twitter-x me-2"></i>Twitter</a></li>
              <li><a href="#" className="text-white text-decoration-none"><i className="bi bi-linkedin me-2"></i>LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 pt-3 border-top border-light">
          <p className="mb-0">&copy; {new Date().getFullYear()} Paws & Play Daycare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
