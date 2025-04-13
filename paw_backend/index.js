const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const appointmentRoutes = require('./routes/appointments');


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('API is running 🐾');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
