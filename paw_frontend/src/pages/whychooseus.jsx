import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const whychooseus = () => {
  return (
    
    <div className="bg-light pt-5">
      {/* <section className="hero-banner">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Paws & Play Daycare</h1>
            <p>A safe, fun, and loving environment for your furry friends while you're away!</p>
          </div>
        </div>
      </section> */}
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4">Choosing Paws & Play</h1>
        <div className="row align-items-center mb-5">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/images/about-us.jpg"
              alt="Pets at Paws & Play"
              className="img-fluid rounded shadow"
            />
          </div>
          {/* Text */}
          <div className="col-md-6">
            <p className="fs-5 text-muted">
              At Paws & Play, we believe pets are family — and they deserve a space that feels like home.
              Whether it's for a day, a week, or just a groom and cuddle session, we make sure your furry friend is cared for with love and respect.
            </p>
            <p className="fs-5 text-muted">
              With experienced caretakers, safe play zones, personalized routines, and 24/7 support,
              we’re more than a daycare — we’re your pet’s second family.
            </p>
            <p className="fs-5 text-muted">
              Join hundreds of happy pet parents who trust us to keep their companions active, healthy, and loved!
            </p>
          </div>
        </div>

        {/* Why Choose Us Accordion Section */}
        <div className="mt-5">
          <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
          <div className="accordion accordion-flush" id="aboutAccordion">
            {[
              {
                title: '🐾 Passionate & Certified Team',
                content:
                  'Our caretakers are professionally trained and genuinely love animals. We build trust with every pet we care for.',
              },
              {
                title: '🏠 Safe & Hygienic Spaces',
                content:
                  'We maintain top-tier cleanliness and safety. Our facility is secure, pet-friendly, and full of cozy corners.',
              },
              {
                title: '🎾 Daily Fun & Enrichment',
                content:
                  'Your pet will never be bored! Playgroups, toys, enrichment games, and outdoor time are all part of the experience.',
              },
              {
                title: '💖 Personalized Attention',
                content:
                  'Each pet has their own routine, comfort items, and needs. We tailor our services to fit your pet’s lifestyle.',
              },
            ].map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`flush-heading${index}`}>
                  <button
                    className="accordion-button collapsed fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#flush-collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`flush-collapse${index}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`flush-collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`flush-heading${index}`}
                  data-bs-parent="#aboutAccordion"
                >
                  <div className="accordion-body text-muted">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default whychooseus;
