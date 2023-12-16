const express = require('express');

const UsersController = require('../controller/users.js');

const router = express.Router();

//Read - READ - Get All Users
router.get('/', UsersController.getAllUsers);

//Create - Create - new users - 
router.post('/', UsersController.createNewUsers);

//Patch - Update data users
router.patch('/:idUser', UsersController.updateUsers);

//Delete - User
router.delete('/:idUser', UsersController.deleteUser);

module.exports = router;