const express = require('express');
const { getCategories, addCategory } = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/category', addCategory);

module.exports = router;
