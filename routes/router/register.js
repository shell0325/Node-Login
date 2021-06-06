const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({ extended: false });
const { check, validationResult } = require('express-validator');

router.get('/register', (req, res, next) => {
  res.render('register');
});

router.post(
  '/home',
  urlencodeParser,
  [
    check('username', '３文字以上入力してください')
      .exists()
      .isLength({ min: 3 })
      .not()
      .isEmpty(),
    check('email', 'Email is not valid').isEmail().normalizeEmail(),
    check('password')
      .isLength({ min: 7 })
      .withMessage('7文字以上入力してください'),
    check('password1')
      .custom((value, { req }) => {
        if (req.body.password1 !== req.body.password) {
          console.log('異なります');
          throw new Error('パスワードが異なります');
        } else {
          return true;
        }
      }),
  ],
  (req, res) => {
    const value = req.body.username;
    const errors = validationResult(req);
    const alert = errors.array();
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
  }
);

module.exports = router;
