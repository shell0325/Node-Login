const { check } = require('express-validator');
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({ extended: false });

module.exports = [
  urlencodeParser,
  check('username','３文字以上入力してください').exists().isLength({ min: 3 }),
  check('email','メールアドレスは使用できません').isEmail().normalizeEmail(),
  check('password','パスワードは７文字以上入力してください').isLength({ min: 7 }),
  check('password1').custom((value, { req }) => {
    if (req.body.password1 !== req.body.password) {
      console.log('異なります');
      throw new Error('パスワードが異なります');
    } else {
      return true;
    }
  }),
];

