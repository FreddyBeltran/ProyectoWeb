
const express = require('express');
const router = express.Router();
const api = require('../api/put');

router.put('/changepassword', api.changePassword);
router.put('/changeusername', api.changeUser);
router.put('/changerating', api.changeRating);

module.exports = router;