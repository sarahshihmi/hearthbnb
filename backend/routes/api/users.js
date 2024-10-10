// backend/routes/api/users.js
const express = require('express');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const { Op } = require('sequelize'); 

const router = express.Router();

const validateSignup = [
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Invalid email'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Username is required'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    // check('password')
    //   .exists({ checkFalsy: true })
    //   .isLength({ min: 6 })
    //   .withMessage('Password must be 6 characters or more.'),
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('First Name is required'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Last Name is required'),
    handleValidationErrors
  ];

// Sign up
router.post(
    '/',
    validateSignup,
    async (req, res) => {
      const { email, password, username, firstName, lastName } = req.body; 

      const existingUser = await User.findOne({
        where: {
          [Op.or]: [{ email }, { username }]
        }
      });

      if (existingUser) {
        const errors = {};
        if (existingUser.email === email) {
          errors.email = 'User with that email already exists';
        }
        if (existingUser.username === username) {
          errors.username = 'User with that username already exists';
        }
  
        return res.status(500).json({
          message: 'User already exists',
          errors
        });
      }
      const hashedPassword = bcrypt.hashSync(password);
      const user = await User.create({ email, username, hashedPassword, firstName, lastName }); 
  
      const safeUser = {
        id: user.id,
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        username: user.username,
      };
  
      await setTokenCookie(res, safeUser);
      res.status(201)
      return res.json({
        user: safeUser
      });
    }
  );

module.exports = router;

