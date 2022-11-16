
const express = require('express');
const router = express.Router();
const api = require('../api/put');

router.put('/register', api.register);

module.exports = router;