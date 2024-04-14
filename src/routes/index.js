const express = require('express');

const router = express.Router();

router.use('/v1/api', require('./product/index'));

module.exports = router;


