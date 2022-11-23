
const express = require('express');
const router = express.Router();
const api = require('../api/post');

router.post('/login', api.login);
router.post('/addmovie', api.addMovie);
router.post('/register', api.register);
router.post('/list', api.list);

module.exports = router;