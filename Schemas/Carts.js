const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    cust_id: {
        type: String,
        required: true,
    },
    p_data: {
        type: Object,
        required: true,
    },
});

const Carts = mongoose.model('carts', CartSchema);
module.exports = Carts; // Use "Carts" instead of "carts"
