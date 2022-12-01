
const express = require('express');
const router = express.Router();
const api = require('../api/post');

router.post('/login', api.login);
router.post('/addmovie', api.addMovie);
router.post('/addrating', api.addRating);
router.post('/register', api.register);
router.post('/list', api.list);
router.post('/getuserlistbyname', api.getList);
router.post('/movierating', api.getMovieRating);
router.post('/movieListByUserName', api.movieListByUserName);
router.post('/movieIDByUserName', api.movieIDByUserName);
router.post('/userbyid', api.userById);
router.post('/userbyusername', api.getUserByUsername);

module.exports = router;