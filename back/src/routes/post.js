
const express = require('express');
const router = express.Router();
const api = require('../api/post');

router.post('/register', api.register);
router.post('/login', api.login);

module.exports = router;