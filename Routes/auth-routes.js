const express = require('express');
const router = express.Router();

const authController = require('../Controller/auth-controller');

router.route('/').get(authController.login);
router.route('/signup').post(authController.signUp);

module.exports = router;