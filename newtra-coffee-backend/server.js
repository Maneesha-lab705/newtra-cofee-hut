const express = require('express');
const cors = require('cors');
const customerRoutes = require('./routes/customerRoutes');
const coffeeProductRoutes = require('./routes/coffeeProductRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const host = 'localhost';

dotenv.config();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

connectDB();

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong!" });
});


app.listen(PORT, host, () => {
    console.log(`Server is running on http://${host}:${PORT}`);
});

// First, add this route to your server.js or routes file
const mongoose = require('mongoose');
// Assuming you already have your app defined
// app = express();

// Add this new route
// First, add this route to your server.js file
app.get('/api/debug/clean-indexes', async (req, res) => {
  try {
    console.log('Cleaning up indexes...');
    
    // Drop redundant indexes from orders collection
    await mongoose.connection.db.collection('orders').dropIndex('order_id_1');
    await mongoose.connection.db.collection('orders').dropIndex('orderId_1');
    
    console.log('Indexes cleaned up successfully');
    
    // Get remaining indexes to confirm cleanup
    const remainingIndexes = await mongoose.connection.db.collection('orders').indexes();
    
    res.json({ 
      message: 'Indexes cleaned up successfully',
      remainingIndexes: remainingIndexes
    });
  } catch (error) {
    console.error('Error cleaning up indexes:', error);
    res.status(500).json({ error: error.message });
  }
});

app.use('/api/customers', customerRoutes);
app.use('/api/coffeeProduct', coffeeProductRoutes);
app.use('/api/users', userRoutes);
app.use('/api/order', orderRoutes);