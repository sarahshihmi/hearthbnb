'use strict';

const { describe } = require('mocha');
const { Review } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');
const review = require('../models/review');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Review.bulkCreate([
      {
        spotId: 1,
        userId: 2,
        review: 'very posh',
        stars: 5
      },
      {
        spotId: 1,
        userId: 3,
        review: 'a bit over priced',
        stars: 2
      },
      {
        spotId: 2,
        userId: 3, 
        review: 'decent place could be better',
        stars: 3
      },
      {
        spotId: 2,
        userId: 1,
        review: 'not too shabby',
        stars: 3
      },
      {
        spotId: 3,
        userId: 1,
        review: 'you get what you pay for',
        stars: 4
      },
      {
        spotId: 3,
        userId: 2,
        review: 'place with a lot of yellow',
        stars: 2
      }
    ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    return queryInterface.bulkDelete({
      spotId: { [ Op.in ]: [1, 2, 3]}
    })
  }
};
