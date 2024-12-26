const express = require('express');
const { addOrder } = require('../controllers/order.controller');

const router = express.Router();

// Route to add a new order
router.post('/orders', addOrder);

module.exports = router;
