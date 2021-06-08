const { check, validationResult } = require('express-validator');

exports.validationController = function (req, res) {
  const errors = validationResult(req);
  const alert = errors.array();
  const value = req.body.username;
  if (!errors.isEmpty()) {
    res.render('register', {
      alert,
    });
  } else {
    res.render('home', {
      value,
    });
    console.log('OK!!');
  }
};
