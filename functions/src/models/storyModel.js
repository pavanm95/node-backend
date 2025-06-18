const mongoose = require('mongoose');
const categoryModel = require('./categoryModel');

const storySchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    nameEn: { type: String, required: true },
    nameSi: { type: String, required: true },
    phraseOneEn: { type: String, required: true },
    phraseOneSi: { type: String, required: true },
    phraseOneContent: { type: String},
    phraseTwoEn: { type: String, required: true },
    phraseTwoESi: { type: String, required: true },
    phraseTwoContent: { type: String },
    phraseThreeEn: { type: String, required: true },
    phraseThreeSi: { type: String, required: true },
    phraseThreeContent: { type: String },
    category: { type: String, ref: 'Category', required: true },
    subCategory: { type: String, ref: 'Category', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema);