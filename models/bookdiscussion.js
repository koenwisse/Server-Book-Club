"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookdiscussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookdiscussion.belongsTo(models.club);
      bookdiscussion.hasMany(models.bookDiscussionComment);
    }
  }
  bookdiscussion.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "bookdiscussion",
    }
  );
  return bookdiscussion;
};
