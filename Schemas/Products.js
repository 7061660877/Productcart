
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    p_name: {
        type: String,
        required: true
    },
    p_price: {
        type: Number,
        required: true
    },
    p_cat: {
        type: String,
        required: true
    },
    p_img: {
        type: String,
        required: true
    }
});

const Products = mongoose.model('products', ProductSchema);
module.exports = Products;

