
const express = require('express');
const router = express.Router();
const api = require('../api/get');

router.get('/userbyid', api.userById);
router.get('/userbyusername', api.getUserByUsername);
router.get('/users', api.getUsers);
router.get('/usernameexists', api.usernameExists);
router.get('/getuserlists', api.getLists);
router.get('/getuserlistbyname', api.getList);
router.get('/movierating', api.getMovieRating);

module.exports = router;