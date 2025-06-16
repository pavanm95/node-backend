const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    productImgName: {type: String },
    productImgUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);