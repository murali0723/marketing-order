const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', orderRoutes);

// Database Connection
// mongoose.connect('ENTER YOUR DB', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Database connected'))
//     .catch(err => console.error('Database connection error:', err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
