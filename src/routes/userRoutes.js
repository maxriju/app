const express = require('express');
const router = express.Router();
const usersController = require('../controllers/userController');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUserH);
router.put('/:userId', usersController.updateUser);
router.delete('/:userId', usersController.deleteUser);

module.exports = router;