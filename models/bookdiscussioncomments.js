"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookDiscussionComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      BookDiscussionComments.belongsTo(models.user);
      BookDiscussionComments.belongsTo(models.BookDiscussion);
    }
  }
  BookDiscussionComments.init(
    {
      bookDiscussion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BookDiscussionComments",
    }
  );
  return BookDiscussionComments;
};
