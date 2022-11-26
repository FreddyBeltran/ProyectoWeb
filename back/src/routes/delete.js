
const express = require('express');
const router = express.Router();
const api = require('../api/delete');

router.delete('/deleteuser', api.deleteUser);
router.delete('/deletelist', api.deleteList);
router.delete('/deletemovie', api.deleteMovie);

module.exports = router;