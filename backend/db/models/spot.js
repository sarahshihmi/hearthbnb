'use strict';
const { Sequelize } = require('sequelize')
const { Model } = require('sequelize');
const { SpotImage } = require('./spotimage')
module.exports = (sequelize, DataTypes) => {
  class Spot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spot.belongsTo(models.User, {as: 'Owner', foreignKey: 'ownerId' });
      Spot.hasMany(models.Booking, { foreignKey: 'spotId' });
      Spot.hasMany(models.Review, { foreignKey: 'spotId' });
      Spot.hasMany(models.SpotImage, { foreignKey: 'spotId' });

      Spot.addScope('addAllImages', {
        include: [
                {
                  model: models.SpotImage,
                  attributes: ["id", "url", "preview"]
                }
            ]
      })

      Spot.addScope('addOwner', {
         include: [
            {
              model: sequelize.models.User,
              as: 'Owner',
              attributes: ['id', 'firstName', 'lastName']
            }
          ]
      });

      // Spot.addScope('addPreview', {
      //   attributes: {
      //     include: [
      //       [Sequelize.literal(`(SELECT "url"
      //                             FROM SpotImages as images
      //                             WHERE
      //                               images.preview = true)`),
      //                             'previewImage',
      //                           ]
      //     ]
      //   }
      // })
    };
    // async numRev() {
    //   const { Review } = sequelize.models;

    //   const stats = await Review.findAll({
    //     where: {spotId: this.id},
    //     attributes: [
    //       [Sequelize.fn('COUNT', Sequelize.col('Review.id')), 'numReviews'],
    //       [Sequelize.fn('AVG', Sequelize.col('Review.stars')), 'avgStarRating']
    //     ]
    //   })
    //   return {numReviews: stats.numReviews, avgStarRating: stats.avgStarRating}
    // }

    


}
  Spot.init(
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'Street address is required',
          },
          notEmpty: {
            args: [true],
            msg: 'Street address is required',
          },
        },
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'City is required',
          },
          notEmpty: {
            args: [true],
            msg: 'City is required',
          },
        },
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'State is required',
          },
          notEmpty: {
            args: [true],
            msg: 'State is required',
          },
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'Country is required',
          },
          notEmpty: {
            args: [true],
            msg: 'Country is required',
          },
        },
      },
      lat: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate: {
          min: {
            args: [-90],
            msg: 'Latitude must be between -90 and 90',
          },
          max: {
            args: [90],
            msg: 'Latitude must be between -90 and 90',
          },
        },
      },
      lng: {
        type: DataTypes.NUMERIC,
        allowNull: false,
        validate: {
          min: {
            args: [-180],
            msg: 'Longitude must be between -180 and 180',
          },
          max: {
            args: [180],
            msg: 'Longitude must be between -180 and 180',
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'The name of spot is required',
          },
          notEmpty: {
            args: [true],
            msg: 'The name of spot is required',
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: [true],
            msg: 'A description of spot is required',
          },
          notEmpty: {
            args: [true],
            msg: 'A description of spot is required',
          },
        },
      },
      price: {
        type: DataTypes.NUMERIC,
        validate: {
          min: {
            args: [0.01],
            msg: 'The price must be greater than 0',
          },
        },
      },
      ownerId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Spot',
      scopes: {

        addRatings: {
          attributes: {
            include: [
              [
                Sequelize.fn('COUNT', Sequelize.col('Reviews.id')),
                'numReviews',
              ],
              [
                Sequelize.fn('AVG', Sequelize.col('Reviews.stars')),
                'avgRating',
              ],
            ],
          },
          include: [
            {
              model: sequelize.models.Review,
              attributes: [],
            },
          ],
          group: ['Spot.id']
        }, 

        addPreview: {
          attributes: {
            include: [
              [Sequelize.literal(`(SELECT "url"
                        FROM "SpotImages" AS image
                        WHERE
                            image.preview = true
                        LIMIT 1)`),
                            'previewImage',
              ],
            ]
          }
        },
      }
    }
  );
  return Spot;
};