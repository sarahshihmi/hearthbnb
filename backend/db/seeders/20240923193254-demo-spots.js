'use strict';

const { describe } = require('mocha');
const { Spot } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Spot.bulkCreate([
      {
        address: '1778 Park Place',
        city: 'Monopoly',
        state: 'Monopolis',
        country: 'USA',
        lat: 7.28934,
        lng: 23.77924,
        name: 'Purple Palace',
        description: 'High end luxury living',
        price: 3200.23,
        ownerId: 1
      },
      { 
        address: '223 Oriental Avenue',
        city: 'Monopoly',
        state: 'Monopolis',
        country: 'USA',
        lat: 7.28842,
        lng: 23.7822,
        name: 'Orange Home',
        description: 'affordable fun for the family',
        price: 200.50,
        ownerId: 2
      },
      {
        address: '715 Marvin Gardens',
        city: 'Monopoly',
        state: 'Monopolis',
        country: 'USA',
        lat: 7.28693,
        lng: 23.78333,
        name: 'Yellow Yard',
        description: 'Higher end location',
        price: 800.00,
        ownerId: 3
      }
    ], { validate: true})
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Purple Palace', 'Orange Home', 'Yellow Yard'] }
    }, {})
  }
};
