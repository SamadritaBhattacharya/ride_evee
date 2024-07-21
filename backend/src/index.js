
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/index.js');
const customerRoutes = require('./routes/customer.routes.js');

dotenv.config();

const app = express();

connectDB();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
  }));
  
app.use(express.json());

app.use('/api', customerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
