'use strict';

const { describe } = require('mocha');
const { SpotImage } = require('../models')
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://www.dropbox.com/scl/fi/qe3epyapbw459mu0yemr4/DALL-E-2024-09-25-16.53.53-A-realistic-view-of-a-luxurious-mansion-suitable-for-a-high-end-Airbnb-listing.-The-home-features-sleek-modern-design-with-large-windows-white-marble.webp?rlkey=bnemnnogp0fko9zr0sfa5ldwj&st=sofwlj49&dl=0',
        preview: true
      },
      {
        spotId: 1,
        url: 'https://www.dropbox.com/scl/fi/fh7rw2ibh2u8rfyjhpmkj/DALL-E-2024-09-25-16.53.55-A-realistic-view-of-a-luxurious-mansion-suitable-for-a-high-end-Airbnb-listing.-The-home-features-sleek-modern-design-with-large-windows-white-marble.webp?rlkey=strru60annimtwrvntgs3je9o&st=4r14hydr&dl=0',  
        preview: false
      },
      {
        spotId: 2,
        url: 'https://www.dropbox.com/scl/fi/m4zye9p7h40xplo6xa16i/DALL-E-2024-09-25-16.44.00-A-realistic-photo-of-the-same-mid-range-suburban-house-from-a-different-angle.-The-house-still-features-a-two-story-layout-with-a-neutral-colored-faca.webp?rlkey=lnjdwqmmoedkq5f9cpyf7cr18&st=nc9rez2f&dl=0',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://www.dropbox.com/scl/fi/o584bdt3q0o5awfw3q3gh/DALL-E-2024-09-25-16.43.58-A-realistic-photo-of-the-same-mid-range-suburban-house-from-another-angle.-The-house-features-a-two-story-layout-with-a-neutral-colored-facade-large.webp?rlkey=xxl28tkld2onf90lmubpgc84n&st=i0htgbja&dl=0',
        preview: false
      },
      {
        spotId: 3,
        url: 'https://www.dropbox.com/scl/fi/g6fu7lrir5s12jtu0opc4/DALL-E-2024-09-25-16.49.03-A-realistic-photo-of-a-modern-suburban-house.-The-house-features-a-sleek-contemporary-design-with-large-glass-windows-clean-lines-and-a-minimalist.webp?rlkey=ryf8g7ujxz2zcqlh2j6bhppom&st=wcgg2uik&dl=0',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://www.dropbox.com/scl/fi/v3jqx259cn4wwb0xkpcnj/DALL-E-2024-09-25-16.48.19-A-second-realistic-photo-of-the-same-modern-suburban-house.-The-house-features-a-sleek-contemporary-design-with-large-glass-windows-flat-roof-and-m.webp?rlkey=1asfkxi580d7kjgd395lgas4h&st=26qj0a9e&dl=0',
        preview: false
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    query.tableName = 'SpotImages';
    return queryInterface.bulkDelete({
      spotId: { [ Op.in ]: [1, 2, 3]}
    })
  }
};
