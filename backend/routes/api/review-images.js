const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Sequelize } = require('sequelize');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, ReviewImage } = require('../../db/models');
const { Review } = require('../../db/models');
const { describe } = require('mocha');
const spot = require('../../db/models/spot');

const router = express.Router();


router.delete('/:imageId', restoreUser, requireAuth, async(req, res) => {
   const imageId = parseInt(req.params.imageId);
   const user = req.user;
   const reviewImg = await ReviewImage.findOne({where: {id:imageId}});
   if (!reviewImg) return res.status(404).json({message:"Review Image couldn't be found"});
   const review = await Review.findOne({where: {id: reviewImg.reviewId}});
   if (review.userId !== user.id) return res.status(403).json({message:'forbidden'});
    
    reviewImg.destroy();
    return res.json({message: 'Successfully deleted'});
});



module.exports = router