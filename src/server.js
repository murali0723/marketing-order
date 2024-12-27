const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/order.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes); // Updated route for clarity

// Database Connection
const DB_URI = 'mongodb+srv://ddinfotechwork:aefhfo4IqVz1TlLv@cluster0.96wge.mongodb.net/orderdata?retryWrites=true&w=majority&appName=Cluster0'; 
// // Replace 'orderDB' with your database name
mongoose
    .connect(DB_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection error:', err.message);
        process.exit(1); // Exit process if database connection fails
    });

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});