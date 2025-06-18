const Story = require('../models/storyModel');

const getAllStories = async () => {
    return await Story.find();
};

const createStory = async (data) => {
    return await Story.create(data);
};

module.exports = { getAllStories, createStory };
