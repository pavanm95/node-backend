const express = require('express');
const multer = require('multer');
const { getProducts, addProduct } = require('../controllers/productController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/products', getProducts);
router.post('/product', upload.single('image'), addProduct);

module.exports = router;
