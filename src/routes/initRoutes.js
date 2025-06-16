const express = require('express');
const { initApi } = require('../controllers/initController');

const router = express.Router();

router.get('/', initApi);

module.exports = router;