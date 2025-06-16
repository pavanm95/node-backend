const { getAllUsers, createUser } = require('../services/userService');

const getUsers = async (req, res, next) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const addUser = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

module.exports = { getUsers, addUser };
