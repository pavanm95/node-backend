const initApi = async (req, res, next) => {
    try {
        const currentTime = new Date().toLocaleTimeString();
        res.json(`API Connected - ${currentTime}`);
    } catch (error) {
        next(error);
    }
};

module.exports = { initApi };