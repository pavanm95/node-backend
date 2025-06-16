const User = require('../models/userModel');

const getAllUsers = async () => {
    return await User.find();
};

const createUser = async (data) => {
    return await User.create(data);
};

module.exports = { getAllUsers, createUser };
