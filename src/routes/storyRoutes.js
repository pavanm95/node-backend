const express = require('express');
const { getStories, addStory } = require('../controllers/storyController');

const router = express.Router();

router.get('/stories', getStories);
router.post('/story', addStory);

module.exports = router;
