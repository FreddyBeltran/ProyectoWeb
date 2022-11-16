
const express = require('express');
const router = express.Router();
const api = require('../api/delete');

router.put('/deleteUser', api.deleteUser);

module.exports = router;