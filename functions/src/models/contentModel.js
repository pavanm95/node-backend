const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    name: { type: String, required: true },
    description: { type: String, required: true },
    contentName: {type: String, required: true},
    contentUrl: { type: String, required: true},
}, { timestamps: true });

module.exports = mongoose.model('Content', contentSchema);