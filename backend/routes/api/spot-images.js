const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Sequelize } = require('sequelize')

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models');
const { User, ReviewImage } = require('../../db/models');
const { Review } = require('../../db/models');
const { describe } = require('mocha');
const spot = require('../../db/models/spot');

const router = express.Router();


router.get('/:spotId', async (req, res) => {
    const { spotId } = req.params;
  
    // Fetch the spot details along with associated SpotImages
    const spot = await Spot.findByPk(spotId, {
      include: [
        {
          model: SpotImage,
          attributes: ['url', 'preview']  // Include only necessary fields
        },
        {
          model: User,  // Include the Owner information if needed
          as: 'Owner',
          attributes: ['firstName', 'lastName']
        }
      ]
    });
  
    if (!spot) {
      return res.status(404).json({ message: "Spot not found" });
    }
  
    return res.json(spot);
  });
  
router.delete('/:imageId', restoreUser, requireAuth, async(req, res) => {
    const imageId = parseInt(req.params.imageId);
    const user = req.user;
    const spotImg = await SpotImage.findOne({where:{id:imageId}});
    if(!spotImg) return res.status(404).json({message: "Spot Image couldn't be found"});
    const spot = await Spot.findOne({where:{id: spotImg.spotId}});
    if(spot.ownerId !== user.id) return res.status(403).json({message:'forbidden'});
    
    spotImg.destroy();
    return res.json({message: "Successfully deleted"});
})
module.exports = router