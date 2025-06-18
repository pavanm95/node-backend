const Category = require('../models/categoryModel');

const getAllCategories = async () => {
    return await Story.find();
};

const createCategory = async (data) => {
    return await Story.create(data);
};

module.exports = { getAllCategories, createCategory };
