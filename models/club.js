"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class club extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //one-to-many
      club.belongsTo(models.user);
      club.hasMany(models.bookdiscussion);
      //many-to-many
      club.belongsToMany(models.user, {
        through: "userClub",
        foreignKey: "clubId",
      });
    }
  }
  club.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      joinCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "club",
    }
  );
  return club;
};
