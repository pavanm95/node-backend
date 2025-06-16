const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/user', addUser);

module.exports = router;
