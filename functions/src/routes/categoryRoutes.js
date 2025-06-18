const express = require('express');
const { getCategories, addCategory } = require('../controllers/categoryController');

const router = express.Router();

router.get('/categories', getCategories);
router.post('/addCategory', addCategory);

module.exports = router;
