import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    // hero banner
    <div className="bg-light">
      <section className="hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Paws & Play Daycare</h1>
            <p>A safe, fun, and loving environment for your furry friends while you're away!</p>
            <a href="/book" className="hero-button" onClick={goToLogin}>Book an Appointment</a>
          </div>
        </div>
      </section>

      {/* about us section */}
      <section className="about-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Image */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/images/about-us.jpg"
                alt="Happy pet at daycare"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Right: Text */}
            <div className="col-md-6">
              <h2 className="text-orange mb-4">About Us</h2>
              <p className="text-muted">
                Welcome to Paw and Play, the ultimate haven for your furry friends!
                Whether you're traveling for a few days or need a long-term stay, we provide a safe, fun, and comfortable environment for your dog.

                Our premium dog boarding services ensure that your pet feels right at home, no matter how long their stay.
                But that’s not all! Paw and Play offers a range of pet care services, including grooming, training, playtime, and personalized care to keep your pup happy and healthy. With experienced staff, a secure facility, and plenty of love, we guarantee a stress-free experience for both you and your pet.

                Book your dog's stay today and let them enjoy the best care at Paw and Play!
              </p>
              <p className="text-muted">
                From playtime to personalized care, we go the extra mile to ensure
                your pet feels at home. Your peace of mind is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* our services */}
      {/* Our Services Section */}
      <section className="py-5 bg-light services-section">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold text-dark">Our Services</h2>
          <div className="row g-4">
            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/dog-boarding.jpg"
                  className="card-img-top"
                  alt="Dog Boarding"
                />
                <div className="card-body">
                  <h5 className="card-title">Dog Boarding</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="/images/dog-daycare.jpg"
                  className="card-img-top"
                  alt="Dog Day Care"
                />
                <div className="card-body">
                  <h5 className="card-title">Dog Day Care</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/pet-store.jpg"
                  className="card-img-top"
                  alt="Pet Store"
                />
                <div className="card-body">
                  <h5 className="card-title">Pet Store</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/emergency.jpg"
                  className="card-img-top"
                  alt="Emergency Centre"
                />
                <div className="card-body">
                  <h5 className="card-title">Emergency Centre</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/grooming.jpg"
                  className="card-img-top"
                  alt="Grooming and Spa"
                />
                <div className="card-body">
                  <h5 className="card-title">Grooming and Spa</h5>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="../images/training.jpg"
                  className="card-img-top"
                  alt="Training"
                />
                <div className="card-body">
                  <h5 className="card-title">Training</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* why choose us  */}

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
          <div className="accordion accordion-flush" id="whyChooseUsAccordion">
            {/* Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  🐾 Experienced and Passionate Team
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#whyChooseUsAccordion"
              >
                <div className="accordion-body text-muted">
                  Our staff isn't just trained—they’re true animal lovers. With years of experience in handling pets of all kinds, our team understands animal behavior and provides gentle, compassionate care tailored to each pet’s needs. We create lasting bonds with your pets so they feel right at home every time.
                </div>
              </div>
            </div>

            {/* Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  🏠 Safe and Comfortable Environment
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#whyChooseUsAccordion"
              >
                <div className="accordion-body text-muted">
                  Safety is our top priority. Our facility is built with secure indoor and outdoor spaces, ensuring your pets can play, rest, and explore in complete safety. Cleanliness is maintained to the highest standard, and every nook is designed for comfort, relaxation, and peace of mind.
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  🎾 Engaging and Fun Activities
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#whyChooseUsAccordion"
              >
                <div className="accordion-body text-muted">
                  Boredom? Not here! We offer structured playtimes, agility games, socializing sessions, and mentally stimulating activities to keep your pet physically and emotionally fulfilled. Whether they love chasing balls or snuggling during storytime, there’s something fun for every furry personality.
                </div>
              </div>
            </div>

            {/* Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  💼 All-in-One Pet Care Services
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#whyChooseUsAccordion"
              >
                <div className="accordion-body text-muted">
                  From daycare and overnight boarding to grooming, training, and wellness checks, we’ve got everything covered. Our holistic approach means you don’t have to run around for different services—your pet receives complete care under one loving roof.
                </div>
              </div>
            </div>

            {/* Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  💖 Personalized Attention and Special Care
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#whyChooseUsAccordion"
              >
                <div className="accordion-body text-muted">
                  We know every pet is different. That’s why we tailor our care routines based on your pet’s age, health, behavior, and preferences. Whether they need medication, extra cuddle time, or a quiet space, we ensure their individual needs are met with love and patience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="text-center py-5 bg-white shadow-sm">
        <div className="container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="Paw & Play Logo"
            width="90"
            className="img-fluid rounded-circle shadow-lg mb-4"
          />
          <h1 className="mt-3 display-4 fw-bold text-dark">Welcome to Paw & Play</h1>
          <p className="lead text-muted">
            The perfect daycare for your furry friend 🐶🐱
          </p>

          <div className="mt-4">
            <button
              className="btn btn-primary btn-lg me-3 px-4 shadow-sm transition-transform duration-300 transform hover:scale-105"
              onClick={goToLogin}
            >
              Get Started
            </button>
            <button
              className="btn btn-outline-secondary btn-lg px-4 shadow-sm transition-transform duration-300 transform hover:scale-105"
              onClick={goToLogin}
            >
              Book a Visit
            </button>
          </div>
        </div>
      </section>

    

     
    </div>
  );
};

export default Home;
