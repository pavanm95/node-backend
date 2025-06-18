const { getAllStories, createStory } = require('../services/storyService');

const getStories = async (req, res, next) => {
    try {
        const stories = await getAllStories();
        res.status(200).json(stories);
    } catch (error) {
        next(error);
    }
};

const addStory = async (req, res, next) => {
    try {
        const story = await createStory(req.body);
        res.status(201).json(story);
    } catch (error) {
        next(error);
    }
};

module.exports = { getStories, addStory };
