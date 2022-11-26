
const express = require('express');
const router = express.Router();
const api = require('../api/delete');

router.put('/deleteuser', api.deleteUser);
router.put('/deletelist', api.deleteList);
router.put('/deletemovie', api.deleteMovie);

module.exports = router;