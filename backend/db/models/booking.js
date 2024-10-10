'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: 'userId'
      });
      Booking.belongsTo(models.Spot, {
        foreignKey: 'spotId'
      })
    }
  }
  Booking.init({
    spotId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        pastDate(value){
          const currentDate = new Date()
          currentDate.setHours(0,0,0,0)

          if (new Date(value) < currentDate) {
            throw new Error('Start date cannot be in the past.');
          }
         
        }
      }
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate(value) {
        if (value <= this.startDate) throw new Error ('The end date can not be before or on the start date')
      }
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};