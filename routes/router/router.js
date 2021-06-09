const express = require('express');
const router = express.Router();
const homeRouter = require('./home');
const loginRouter = require('./login');
const registerRouter = require('./register');

router.use(loginRouter);
router.use(homeRouter);
router.use(registerRouter);

module.exports = router;
