
const express = require('express');
const router = express.Router();
const api = require('../api/post');

router.post('/register', api.register);
router.post('/login', api.login);
router.post('/changePassword', api.changePassword);
router.post('/changeUsername', api.changeUser);

module.exports = router;