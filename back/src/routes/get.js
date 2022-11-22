
const express = require('express');
const router = express.Router();
const api = require('../api/get');

router.get('/userbyid', api.userById);
router.get('/userbyusername', api.getUserByUsername);
router.get('/users', api.getUsers);
router.get('/usernameExists', api.usernameExists);
router.get('/getMovie', api.getMovie);
router.get('/getuserlists', api.getLists);
router.get('/getuserlistbyname', api.getList);

module.exports = router;