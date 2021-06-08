const express = require('express');
const router = express.Router();
const validation = require('./validator');
const controller = require('../../controller/controller')

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post('/home', validation,  (req, res) => {
  controller.validationController(req,res)
})

module.exports = router;
