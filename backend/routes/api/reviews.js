const express = require('express')
const router = express.Router()
const { requireAuth, restoreUser } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation');
const { Sequelize } = require('sequelize')
const { Review, ReviewImage, User, Spot } = require('../../db/models');
const {check} = require('express-validator');

router.use(handleValidationErrors)

const validateReview = [
    check('review')
        .exists({ checkFalsy: true})
        .withMessage('Review text is required'),
    check('stars')
        .exists({ checkFalsy: true})
        .isInt({min: 1, max: 5})
        .withMessage('Stars must be an integer from 1 to 5'),
        handleValidationErrors
];


router.get('/current', restoreUser, requireAuth, async(req, res)=> {
    const userId = req.user.id
    const reviews = await Review.findAll({
        where:{
            userId: userId,
        },
        include: [
            {
                model: User,
                attributes:['id', 'firstName', 'lastName']
            },
            {
                model: Spot,
                    attributes: {
                         include: [
                            [Sequelize.literal(`(SELECT "url" FROM "SpotImages" as image
                            WHERE image.preview = true LIMIT 1)`), 'previewImage']
                        ],
                    exclude: ['createdAt', 'updatedAt']
                }
            },
            {
                model: ReviewImage,
                attributes: ['id', 'url']
            }
        ],
    })
    res.json({Reviews:reviews})
})

router.post('/:reviewId/images', restoreUser, requireAuth, async(req, res) => {
        const reviewId = parseInt(req.params.reviewId);
        const user = req.user;
        const url = req.body.url;
        const review = await Review.findOne({
            where: {
                id: reviewId
            }
        });

        if (!review) {
            return res.status(404).json({
              message: "Review couldn't be found",
            });
          }

        if (review.userId !== user.id) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        };

        const newImage = await ReviewImage.create({
            reviewId: reviewId,
            url: url
        });

        return res.status(201).json(newImage);
})

router.put('/:reviewId', restoreUser, requireAuth, validateReview, async (req, res) => {
  try {
    const reviewId = parseInt(req.params.reviewId, 10);
    const user = req.user;
    const { review, stars } = req.body;

    const existingReview = await Review.findOne({
      where: { id: reviewId },
      include: [{
        model: User,
        attributes: ['id', 'firstName', 'lastName'],
      }],
    });

    if (!existingReview) {
      return res.status(404).json({
        message: "Review couldn't be found",
      });
    }

    if (existingReview.userId !== user.id) {
      return res.status(403).json({
        message: 'Forbidden',
      });
    }

    existingReview.review = review;
    existingReview.stars = stars;
    await existingReview.save();

    const updatedReview = await Review.findOne({
      where: { id: reviewId },
      include: [{
        model: User,
        attributes: ['id', 'firstName', 'lastName'],
      }],
    });

    return res.json(updatedReview);
  } catch (error) {
    console.error("Error updating review:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
  
router.delete('/:reviewId',restoreUser, requireAuth, async(req, res)=> {
    const reviewId = parseInt(req.params.reviewId);
    const userId = req.user.id;
    const review = await Review.findOne({where: {id:reviewId}});

    if (!review) {
        return res.status(404).json({
          message: "Review couldn't be found",
        });
    }
    if (review.userId !== userId) {
        return res.status(403).json({
          message: 'Forbidden',
        });
    }

    await review.destroy()
    return res.json({ message: "Successfully deleted" })
})

module.exports = router;