const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  petName: { type: String, required: true },
  petType: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  date: { type: String, required: true },
  dropOff: { type: String, required: true },
  pickUp: { type: String, required: true },
  instructions: { type: String },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
  

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
