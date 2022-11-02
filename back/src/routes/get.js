
const express = require('express');
const router = express.Router();
const api = require('../api/get');

router.get('/userbyid', api.userById);
router.get('/users', api.getUsers);
router.get('/userExists', api.userExists);
router.get('/getMovie', api.getMovie);

module.exports = router;