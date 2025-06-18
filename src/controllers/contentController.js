const { getAllContents, createContent } = require('../services/contentService');

const getContents = async (req, res, next) => {
    try {
        const contents = await getAllContents();
        res.status(200).json(contents);
    } catch (error) {
        next(error);
    }
};

const addContent = async (req, res, next) => {
    try {
        const content = await createContent(req);
        res.status(201).json(content);
    } catch (error) {
        next(error);
    }
};

module.exports = { getContents, addContent };
