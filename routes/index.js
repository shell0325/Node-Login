const express = require('express');
const router = express.Router();
const indexRouter2 = require('./router/router');

router.use('/', indexRouter2);

module.exports = router;
