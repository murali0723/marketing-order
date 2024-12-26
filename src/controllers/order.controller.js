const Order = require('../models/order.models');

const addOrder = async (req, res) => {
    try {
        const { customerName, items, totalPrice } = req.body;

        const newOrder = new Order({
            customerName,
            items,
            totalPrice,
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order created successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error: error.message });
    }
};

module.exports = { addOrder };
