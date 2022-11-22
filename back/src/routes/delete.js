
const express = require('express');
const router = express.Router();
const api = require('../api/delete');

router.put('/deleteUser', api.deleteUser);
router.put('/deleteList', api.deleteList);
router.put('/deleteMovie', api.deleteMovie);

module.exports = router;