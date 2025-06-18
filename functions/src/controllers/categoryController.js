const { getAllCategories, createCategory } = require('../services/categoryService');

const getCategories = async (req, res, next) => {
    try {
        const categories = await getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        next(error);
    }
};

const addCategory = async (req, res, next) => {
    try {
        const category = await createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        next(error);
    }
};

module.exports = { getCategories, addCategory };
