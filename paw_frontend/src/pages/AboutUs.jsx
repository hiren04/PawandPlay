import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
          alt="Paw Icon"
          width="80"
        /> */}
        <h2 className="mt-3 fw-bold">About Paw & Play</h2>
        <p className="text-muted fs-4">A home away from home for your pets 🐾</p>
      </div>

      {/* Our Story */}
      <div className="mb-5">
        <h3 className="fw-bold mb-3">Our Story</h3>
        <p className="fs-5 text-muted">
          Paw & Play started with a simple vision: to create a joyful, secure, and engaging space for pets.
          Our founders, lifelong animal lovers, saw the need for a place that felt like home.
          We began as a small in-home setup, welcoming just a handful of pups.
          As our community grew, so did our passion and our facility.
          Every dog and cat here is treated like family.
          We built our space around what pets love most: playtime, companionship, and belly rubs.
          With comfy nap zones and supervised social areas, they can thrive.
          Our team is trained not just in safety, but in compassion and fun.
          Over the years, we’ve become a trusted name in pet care.
          And we’re still growing — one wagging tail at a time.
        </p>
      </div>

      {/* Image of Dogs & Cats */}
      <div className="text-center mb-5">
        <img
          src="https://t4.ftcdn.net/jpg/06/39/51/71/360_F_639517150_Zs2jMesABu86FYrO8EzIKnuVreWSbG3o.jpg"
          alt="Cats and dogs playing"
          className="img-fluid rounded shadow"
          style={{ maxHeight: '500px', objectFit: 'cover' }}
        />
      </div>

      {/* Our Mission */}
      <div>
        <h3 className="fw-bold mb-3">Our Mission</h3>
        <p className="fs-5 text-muted">
          Our mission is to make every pet feel like they’re right where they belong.
          We provide a safe, clean, and happy space that encourages play, comfort, and socialization.
          We strive to support pet parents with trustworthy care they can count on.
          Our trained staff monitors pets with love, attention, and empathy.
          We believe pets deserve mental stimulation, physical activity, and cuddles too.
          We promote positive behavior and peaceful rest routines.
          Every visit should feel like a reunion — tails wagging and hearts full.
          We aim to build lifelong relationships with our furry guests and their families.
          At Paw & Play, it’s more than daycare — it’s connection.
          Because your pets aren’t just animals — they’re family.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
