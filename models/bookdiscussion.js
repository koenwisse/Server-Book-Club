"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookDiscussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookDiscussion.hasMany(models.BookDiscussionComments);
      BookDiscussion.belongsTo(models.club);
    }
  }
  BookDiscussion.init(
    {
      bookId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },

      clubId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "BookDiscussion",
    }
  );
  return BookDiscussion;
};
