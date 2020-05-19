var express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/usersControllers')

/* GET users listing. */
router.get('/register', usersControllers.register);
router.post('register', usersControllers.register)
router.get('/login', usersControllers.login);
router.get('/profile', usersControllers.profile);

module.exports = router;
