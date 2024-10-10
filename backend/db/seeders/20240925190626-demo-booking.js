'use strict';

const { describe } = require('mocha');
const { Booking } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Booking.bulkCreate([
      {
        spotId: 1, 
        userId: 2,
        startDate: new Date('2025-01-01'),
        endDate: new Date('2025-01-07')
      },
      {
        spotId: 1, 
        userId: 2,
        startDate: new Date('2025-01-20'),
        endDate: new Date('2025-02-01')
      },
      {
        spotId: 1,
        userId: 3,
        startDate: new Date('2025-03-01'),
        endDate: new Date('2025-03-10')
      },
      {
        spotId: 2,
        userId: 1,
        startDate: new Date('2025-03-11'),
        endDate: new Date('2025-03-20')
      },
      {
        spotId: 2,
        userId: 1,
        startDate: new Date('2025-03-21'),
        endDate: new Date('2025-03-30')
      },
      {
        spotId: 2,
        userId: 3,
        startDate: new Date('2025-04-01'),
        endDate: new Date('2025-04-10')
      },
      {
        spotId: 3,
        userId: 1,
        startDate: new Date('2025-04-11'),
        endDate: new Date('2025-04-20')
      },
      {
        spotId: 3, 
        userId: 2,
        startDate: new Date('2025-04-21'),
        endDate: new Date('2025-04-20')
      },
      {
        spotId: 3, 
        userId: 1,
        startDate: new Date('2025-05-01'),
        endDate: new Date('2025-05-10')
      }
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    return queryInterface.bulkDelete(options, {
      spotId: { [ Op.in ]: [1, 2, 3]}
    })
  }
};
