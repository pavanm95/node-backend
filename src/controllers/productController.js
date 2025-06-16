const { getAllProducts, createProduct } = require('../services/productService');

const getProducts = async (req, res, next) => {
    try {
        const products = await getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
};

const addProduct = async (req, res, next) => {
    try {
        const product = await createProduct(req);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProducts, addProduct };
