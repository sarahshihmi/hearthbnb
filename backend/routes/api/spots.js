const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Sequelize } = require('sequelize')

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { SpotImage } = require('../../db/models');
const { User, ReviewImage, Booking } = require('../../db/models');
const { Review } = require('../../db/models');
const { describe } = require('mocha');
const spot = require('../../db/models/spot');


const router = express.Router();


const validateSpot = [
    check('address')
        .exists({ checkFalsy: true})
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true})
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true})
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true})
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true})
        .withMessage('Latitude must be within -90 and 90'),
    check('lng')
        .exists({ checkFalsy: true})
        .withMessage('Longitude must be within -180 and 180'),
    check('name')
        .exists({ checkFalsy: true})
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true})
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true})
        .withMessage('Price per day must be a positive number'),
    handleValidationErrors
];

const ValidateReview = [
    check('review')
        .exists({ checkFalsy: true})
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true })
        .isInt({min: 1, max: 5})
        .withMessage('Stars must be an integer from 1 to 5'),
        handleValidationErrors
];

const validateQuery = [
    check('page')
    .optional({ checkFalsy: true })
    .isInt({ min: 1})
    .withMessage('Page must be greater than or equal to 1'),
  check('size')
    .optional({ checkFalsy: true })
    .isInt({ min: 1, max: 20})
    .withMessage('Size must be between 1 and 20'),
  check('minLat')
    .optional({ checkFalsy: true })
    .isFloat({ min: -90, max: 90})
    .withMessage('Minimum latitude is invalid'),
  check('maxLat')
    .optional({ checkFalsy: true })
    .isFloat({ min: -90, max: 90})
    .withMessage('Maximum latitude is invalid'),
  check('minLng')
    .optional({ checkFalsy: true })
    .isFloat({ min: -180, max: 180})
    .withMessage('Minimum longitude is invalid'),
  check('maxLng')
    .optional({ checkFalsy: true })
    .isFloat({ min: -180, max: 180})
    .withMessage('Maximum longitude is invalid'),
  check('minPrice')
    .optional({ checkFalsy: true })
    .isFloat({ min: 0 })
    .withMessage('Minimum price must be greater than or equal to 0'),
  check('maxPrice')
    .optional({ checkFalsy: true })
    .isFloat({ min: 0 })
    .withMessage('Maximum price must be greater than or equal to 0'),

    handleValidationErrors 
]



//creating new spot image
router.post('/:spotId/images', restoreUser, requireAuth, async (req, res) => {
    const spotid = parseInt(req.params.spotId)
    const  user  = req.user
    const { url, preview } = req.body;
    //find spot
    const spot = await Spot.findOne({
        where: {id: spotid}
    })
    //check if spot exists
    if (!spot) {
        res.status(404).json({message: "Spot couldn't be found"})
    }
    //authorize user
    if (spot.ownerId !== user.id) {
        return res.status(403).json({message: 'Forbidden'})
    }
    //create new image
    const newImg = await SpotImage.create({
        spotId: spotid,
        url: url,
        preview: preview
    })
    //create
    return res.status(201).json(newImg);
})

router.get('/current', restoreUser, requireAuth, async (req, res) => {
  console.log('[Server] Handling request to /spots/current');  // Log to confirm /current is matched

  const user = req.user;

  try {
    const spots = await Spot.scope('addRatings', 'addPreview').findAll({
      where: { ownerId: user.id },
    });

    console.log('[Server] Fetched spots:', spots);
    return res.json({ Spots: spots });
  } catch (error) {
    console.error('Error fetching user spots:', error);
    return res.status(500).json({ message: 'Internal Server Error', details: error.message });
  }
});

router.get('/:spotId/reviews', async (req, res) => {
  console.log('[Server] Handling request to /:spotId/reviews');  // Log when reviews route is being called

  const spotid = parseInt(req.params.spotId);
  const spot = await Spot.findOne({ where: { id: spotid } });
  if (!spot) return res.status(404).json({ message: "Spot couldn't be found" });

  const reviews = await Review.findAll({
    where: { spotId: spotid },
    include: [
      {
        model: User,
        attributes: ['id', 'firstName', 'lastName'],
      },
      {
        model: ReviewImage,
        attributes: ['id', 'url'],
      },
    ],
  });
  return res.json({ Reviews: reviews });
});


// backend/routes/api/spots.js



router.post('/:spotId/reviews', restoreUser, requireAuth, ValidateReview, async (req, res) => {
  try {
      const user = req.user;
      const spotId = parseInt(req.params.spotId);
      const { review, stars } = req.body;

      // Validate spot existence
      const spot = await Spot.findOne({ where: { id: spotId } });
      if (!spot) {
          return res.status(404).json({ message: "Spot couldn't be found" });
      }

      // Check if the user has already reviewed this specific spot
      const existingReview = await Review.findOne({
          where: {
              userId: user.id,
              spotId: spotId
          }
      });

      if (existingReview) {
          return res.status(403).json({ message: 'User already has a review for this spot' });
      }

      // Create the new review
      const newReview = await Review.create({
          userId: user.id,
          spotId: spotId,
          review: review,
          stars: stars
      });

      // Fetch the new review with associated User
      const reviewWithUser = await Review.findOne({
          where: { id: newReview.id },
          include: [{
              model: User,
              attributes: ['id', 'firstName', 'lastName']
          }]
      });

      return res.status(201).json(reviewWithUser);
  } catch (error) {
      console.error("Error posting review:", error);
      // Handle Sequelize validation errors
      if (error.name === 'SequelizeValidationError') {
          const validationErrors = error.errors.map(err => err.message);
          return res.status(400).json({ message: "Validation error", errors: validationErrors });
      }
      return res.status(500).json({ message: "Internal server error" });
  }
});


router.get('/:id/bookings', requireAuth, async(req, res) => {
  const userId = req.user.id;
  const spot = await Spot.findByPk(req.params.id);

  if (!spot) {
    return res.status(404).json({
      "message": "Spot couldn't be found"
    })
  };

  let booking;
  if (userId !== spot.ownerId) {
    booking = await Booking.findAll({
      where: {
        spotId: req.params.id
      },
      attributes: ['spotId', 'startDate', 'endDate']
    })
  } else {
    booking = await Booking.findAll({
      where: {
        spotId: req.params.id
      },
      include: {
        model: User,
        attributes: ['id', 'firstName', 'lastName']
      }
    })
  };

  return res.json({
    "Bookings": booking
  })
});

router.post('/:id/bookings', requireAuth, async(req, res) => {

  const userId = req.user.id;
  const spot = await Spot.findByPk(req.params.id);
  const {startDate, endDate} = req.body;

  if (!spot) {
    return res.status(404).json(
      {
        "message": "Spot couldn't be found"
      }
    )
  };

  if (userId === spot.ownerId) {
    return res.status(403).json({
      "message": "Forbidden"
    })
  };

  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);

  if (newEndDate <= newStartDate) {
    return res.status(400).json({
      message: "Bad Request",
      errors: {
        endDate: "endDate cannot be on or before startDate"
      }
    });
  }

  const bookings = await Booking.findAll({
    where: {
      spotId: req.params.id,
      [Op.or]: [
        {
          startDate: {
            [Op.between]: [newStartDate, newEndDate]
          }
        },
        {
          endDate: {
            [Op.between]: [newStartDate, newEndDate]
          }
        },
        {
          [Op.and]: [
            {
              startDate: {
                [Op.lte]: newStartDate
              }
            },
            {
              endDate: {
                [Op.gte]: newEndDate
              }
            }
          ]
        }
      ]
    }
  });

  let message = 'Sorry, this spot is already booked for the specified dates';
  let errors = {};

  for (let booking of bookings) {
    if (newStartDate >= booking.startDate && newStartDate <= booking.endDate) {
      errors.startDate = "Start date conflicts with an existing booking";
    }
    if (newEndDate >= booking.startDate && newEndDate <= booking.endDate) {
      errors.endDate = "End date conflicts with an existing booking";
    }
    if (newStartDate < booking.startDate && newEndDate > booking.endDate) {
      errors.startDate = "Start date conflicts with an existing booking";
      errors.endDate = "End date conflicts with an existing booking";
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(403).json({
      message,
      errors
    });
  }

  const newBooking = await Booking.create({
    userId,
    spotId: spot.id,
    startDate: newStartDate,
    endDate: newEndDate
  });

  return res.status(201).json(newBooking);
})


router.get('/:spotId', async (req, res) => {
    const spotid = parseInt(req.params.spotId);
   const spot = await Spot.scope('addAllImages', 'addOwner').findOne({
        where: {id: spotid},
        attributes: {
            include: [
              [
                Sequelize.fn('COUNT', Sequelize.col('Reviews.id')),
                'numReviews',
              ],
              [
                Sequelize.fn('AVG', Sequelize.col('Reviews.stars')),
                'avgStarRating',
              ],
            ],
          },
          include: [
            {
                model: Review,
                attributes: []
            },
        ],
          group: ['Spot.id', 'SpotImages.id', 'Owner.id'],
   })
    if (!spot) {
    return res.status(404).json({message: "Spot couldn't be found"})
   }
    return res.json(spot);
});

router.put('/:spotId', restoreUser, requireAuth, validateSpot, async(req, res) => {
    const user = req.user;
    const spotId = parseInt(req.params.spotId);
    const { address, city, state, country, lat, lng, name, description, price} = req.body;
    const spot = await Spot.findOne({
        where: {id: spotId}
    });

    if (!spot) return res.status(404).json({message:"Spot couldn't be found"})

    if (spot.ownerId !== user.id) {
        return res.status(403).json('forbidden')
    }

    spot.update({
        address: address, city: city, state: state, country: country,
        lat: lat, lng: lng, name: name, description: description, price: price
    })

    return res.json(spot)
})

router.delete('/:spotId', restoreUser, requireAuth, async (req, res) => {
    const user = req.user;
    const spotId = parseInt(req.params.spotId)
    const spot = await Spot.findOne({
        where: {id: spotId}
    })

    if(!spot) return res.status(404).json({message:"Spot couldn't be found"})
    if(spot.ownerId !== user.id) return res.status(403).json({message: 'forbidden'})

    spot.destroy();
    return res.json({message:'Successfully deleted'})
})



router.get('/', validateQuery, async (req, res) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    if (!size || size > 20) size = 20;
    if(!page){page = 1}else {page=size*(page-1)};


    let where = {};

    if (minLat && maxLat) {
      where.lat = {[Op.between]: [minLat, maxLat]};
    } else if (minLat) {
      where.lat = {[Op.gte]: minLat};
    } else if (maxLat) {
      where.lat = {[Op.lte]: maxLat};
    };
  
    if (minLng && maxLng) {
      where.lng = {[Op.between]: [minLng, maxLng]};
    } else if (minLng) {
      where.lng = {[Op.gte]: minLng};
    } else if (maxLng) {
      where.lng = {[Op.lte]: maxLng};
    };
  
    if (minPrice && maxPrice) {
      where.price = {[Op.between]: [minPrice, maxPrice]};
    } else if (minPrice) {
      where.price = {[Op.gte]: minPrice}
    } else if (maxPrice) {
      where.price = {[Op.lte]: maxPrice}
    };

    const spot = await Spot.scope('addRatings', 'addPreview').findAll({
        where,
        group: ['Spot.id'],
    });

    return res.json(
        {Spots: spot, page: page, size: size}
    )

});

router.post(
  '/',
  restoreUser,
  requireAuth,
  validateSpot,
  async (req, res) => {
    const user = req.user;
    const {
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      description,
      price,
      previewImageUrl,
      imageUrls = []
    } = req.body;

    try {
      // Create the spot
      const spot = await Spot.create({
        ownerId: user.id,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
      });

      console.log('Spot created:', spot.id);  // Log the newly created spot ID

      // Add the preview image if provided
      if (previewImageUrl) {
        try {
          const previewImage = await SpotImage.create({
            spotId: spot.id,
            url: previewImageUrl,
            preview: true,
          });
          console.log('Preview Image created:', previewImage);  // Log the preview image creation
        } catch (imageError) {
          console.error('Error creating preview image:', imageError);
        }
      }

      // Add additional images if provided
      for (let url of imageUrls) {
        if (url) {
          try {
            const spotImage = await SpotImage.create({
              spotId: spot.id,
              url,
              preview: false,
            });
            console.log('Additional Image created:', spotImage);  // Log the additional image creation
          } catch (imageError) {
            console.error('Error creating additional image:', imageError);
          }
        }
      }

      // Fetch the spot details along with images to return to the client
      const spotWithImages = await Spot.findByPk(spot.id, {
        include: [
          {
            model: SpotImage,
            attributes: ['id', 'url', 'preview']
          }
        ]
      });

      return res.status(201).json(spotWithImages);
    } catch (err) {
      console.error('Error creating spot:', err);
      return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  }
);




module.exports = router;