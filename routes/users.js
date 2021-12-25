const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
//test

const { csrfProtection, asyncHandler } = require('./utils');
const db = require('../db/models'); //db.Model
const { loginUser, logoutUser } = require('../auth');

const router = express.Router();

/* GET users listing. */
//NOTE //users/login
router.get('/login', csrfProtection, function(req, res, next) {
  res.render('login', {
    csrfToken: req.csrfToken(),
    title: 'Recipeats | Login'
  });
});

const loginValidators = [
  check('username')
  .exists({checkFalsy: true})
  .withMessage('Please provide a username'),

  check('password')
  .exists({checkFalsy: true})
  .withMessage('Please provide password')
]

router.post('/login', csrfProtection, loginValidators, asyncHandler(async function(req, res, next) {
const {username, password} = req.body;

let errors = [];
const validatorErrors = validationResult(req);

if(validatorErrors.isEmpty()) {
  const user = await db.User.findOne({
    where: {
      username,
    }
  })
  if (user !== null) {
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString())
    if (passwordMatch) {
      loginUser(req, res, user);
      return res.redirect('/');
    }
  }
  errors.push('Login failed for the provided email address and password');
} else {
  errors = validatorErrors.array().map((error) => error.msg)
}
res.render('login', {
  title: 'Recipeats | Login',
  errors,
  username,
  csrfToken: req.csrfToken()
})
}));

router.get('/signup', csrfProtection, (req, res, next) => {
  const user = db.User.build();
  res.render('signup', {
    title: 'Recipeats | Sign Up',
    user,
    csrfToken: req.csrfToken()
  });
});

const signupValidators = [
  check('username')
  .exists({checkFalsy: true})
  .withMessage('Please provide a username')
  .isLength({max: 50})
  .withMessage('username must be under 50 characters')
  .custom((value) => {
    return db.User.findOne({ where: { username: value } })
      .then((user) => {
        if (user) {
          return Promise.reject('The provided username is already in use by another account');
        }
      });
  }),

  check('password')
  .exists({checkFalsy: true})
  .withMessage('Please provide a password')
  .isLength({max: 50})
  .withMessage('password must be under 50 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
  .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character (i.e. "!@#$%^&*")'),

  check('confirmPassword')
  .exists({checkFalsy: true})
  .withMessage('Please confirm your password')
  .isLength({max: 50})
  .withMessage('password must be under 50 characters')
  .custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Confirm Password does not match Password');
    }
    return true;
  })



];

router.post('/signup', csrfProtection, signupValidators, asyncHandler(async(req,res) => {
  const {
    username,
    password
  } = req.body;

  const user = db.User.build({
    username
  });

  const validatorErrors = validationResult(req);

  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    user.hashedPassword = hashedPassword;
    await user.save();
    loginUser(req, res, user);
    res.redirect('/');
  } else {
    const errors = validatorErrors.array().map((error) => error.msg);
    res.render('signup',{
      title: 'Recipeats | Sign Up',
      user,
      errors,
      csrfToken: req.csrfToken(),
    });
  }
}));

router.post('/logout', (req, res) => {
  logoutUser(req, res);
  res.redirect('/')
});

router.get('/login/demo', asyncHandler(async(req, res) => {
  try{
    const user = await db.User.findOne({
      where: {
        username: 'demo'
      }
    });

    loginUser(req, res, user);
    res.redirect('/');
  } catch(e) {
    res.redirect('/');
  }
}));

module.exports = router;
