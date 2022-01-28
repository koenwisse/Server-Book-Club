"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookDiscussionComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      bookDiscussionComment.belongsTo(models.bookdiscussion);
      bookDiscussionComment.hasMany(models.user);
    }
  }
  bookDiscussionComment.init(
    {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "bookDiscussionComment",
    }
  );
  return bookDiscussionComment;
};
