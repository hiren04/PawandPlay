const express = require('express');
const Appointment = require('../models/Appointment');
const User = require('../models/User');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/user/:userId', async (req, res) => {
    try {
      const appointments = await Appointment.find({ userId: req.params.userId });
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching appointments', error: err.message });
    }
  });
  

// Book a new appointment
router.post('/book', async (req, res) => {
  const {
    userId,
    petName,
    petType,
    breed,
    age,
    date,
    dropOff,
    pickUp,
    instructions
  } = req.body;

  try {
    const appointment = new Appointment({
      userId,
      petName,
      petType,
      breed,
      age,
      date,
      dropOff,
      pickUp,
      instructions
    });

    await appointment.save();
    // Get user email
    const user = await User.findById(userId);

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "canadacare08@gmail.com", 
        pass: "hazd gckp fvar oxyz",
      }
    });

    const mailOptions = {
      from: '"Paw & Play" <pawandplay@gmail.com>',
      to: user.email,
      subject: '🐾 Appointment Confirmation – Paw & Play',
      html: `
        <h2>Hi ${user.name},</h2>
        <p>Your appointment has been successfully booked! Here's a summary:</p>
        <ul>
          <li><strong>Pet:</strong> ${petName} (${petType}, ${breed}, Age ${age})</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Drop-off:</strong> ${dropOff}</li>
          <li><strong>Pick-up:</strong> ${pickUp}</li>
          ${instructions ? `<li><strong>Note:</strong> ${instructions}</li>` : ''}
        </ul>
        <p>We can’t wait to meet your furry friend! 🐶</p>
        <p>— Paw & Play Team</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Cancel (delete) an appointment
router.delete('/:id', async (req, res) => {
    try {
      await Appointment.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Appointment cancelled successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Error cancelling appointment', error: err.message });
    }
  });

  // Update an appointment
router.put('/:id', async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('userId');

    // Send confirmation email after edit
    const transporter = require('nodemailer').createTransport({
      service: 'gmail',
      auth: {
        user: "canadacare08@gmail.com", // Replace with your email
        pass: "hazd gckp fvar oxyz",
      }
    });

    const mailOptions = {
      from: '"Paw & Play" <pawandplay@gmail.com>',
      to: updated.userId.email,
      subject: '✏️ Appointment Updated – Paw & Play',
      html: `
        <h2>Hi ${updated.userId.name},</h2>
        <p>Your appointment has been successfully updated! Here's your updated schedule:</p>
        <ul>
          <li><strong>Pet:</strong> ${updated.petName} (${updated.petType}, ${updated.breed}, Age ${updated.age})</li>
          <li><strong>Date:</strong> ${updated.date}</li>
          <li><strong>Drop-off:</strong> ${updated.dropOff}</li>
          <li><strong>Pick-up:</strong> ${updated.pickUp}</li>
          ${updated.instructions ? `<li><strong>Note:</strong> ${updated.instructions}</li>` : ''}
        </ul>
        <p>We’ll be ready to welcome your pet! 🐶</p>
        <p>— Paw & Play Team</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json(updated);
  } catch (err) {
    console.error('Edit error:', err.message);
    res.status(500).json({ message: 'Error updating appointment', error: err.message });
  }
  });

  // Admin ------------------------------------------------------------------
router.get('/all', async (req, res) => {
    try {
      const appointments = await Appointment.find().populate('userId', 'name email');
      res.status(200).json(appointments);
    } catch (err) {
      res.status(500).json({ message: 'Server error', error: err.message });
    }
  });

  // Admin: Update appointment status
router.put('/status/:id', async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    ).populate('userId');

    // ✅ Send rejection email
    if (req.body.status === 'rejected') {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "canadacare08@gmail.com", // Replace with your email
        pass: "hazd gckp fvar oxyz",
        }
      });

      const mailOptions = {
        from: '"Paw & Play" <pawandplay@gmail.com>',
        to: updated.userId.email,
        subject: '❌ Appointment Cancelled – Paw & Play',
        html: `
          <h2>Hi ${updated.userId.name},</h2>
          <p>We regret to inform you that your recent appointment request for your pet <strong>${updated.petName}</strong> on <strong>${updated.date}</strong> has been <strong>cancelled</strong> due to unforeseen circumstances.</p>
          <p>Please feel free to contact us at <strong>(123) 456-7890</strong> for more information or assistance.</p>
          <p>We're here to help and hope to serve you soon under better circumstances.</p>
          <p>— Paw & Play Team 🐾</p>
        `
      };

      await transporter.sendMail(mailOptions);
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error('Failed to update status:', err.message);
    res.status(500).json({ message: 'Failed to update status', error: err.message });
  }
});
 
  
  

module.exports = router;
