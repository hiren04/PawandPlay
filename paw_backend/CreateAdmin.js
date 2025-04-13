require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const existingAdmin = await User.findOne({ email: 'admin@pawcare.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    const admin = new User({
      name: 'Admin',
      email: 'admin@pawandplay.com',
      password: 'admin123',
      role: 'admin'
    });

    await admin.save();
    console.log('✅ Admin created successfully!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Error creating admin:', err);
    process.exit(1);
  });
