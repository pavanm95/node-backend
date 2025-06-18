const express = require('express');
const multer = require('multer');
const { getContents, addContent } = require('../controllers/contentController');

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/contents', getContents);
router.post('/content', upload.single('image'), addContent);

module.exports = router;
