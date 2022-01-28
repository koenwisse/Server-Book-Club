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
      // @Swen just to be sure, we need to delete bookId from DB table BookDiscusion and arrange that in our endpoint (instead of in DB table) right?
      // bookId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      // },
      clubId: {
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
