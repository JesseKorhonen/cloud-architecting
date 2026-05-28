const express = require('express');
const router = express.Router();
const UserController = require('../controllers/usercontroller');
router.post('/registerUser', UserController.registerUser);
router.post('/login', UserController.authenticateUser);
module.exports = router;
