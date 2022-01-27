'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userClub extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  userClub.init({
    userId: DataTypes.INTEGER,
    clubId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userClub',
  });
  return userClub;
};