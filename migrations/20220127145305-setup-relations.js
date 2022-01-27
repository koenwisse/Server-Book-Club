"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("clubs", "adminId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn(
      "BookDiscussionComments",
      "BookDiscussionId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "BookDiscussions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("clubs", "adminId");
    await queryInterface.removeColumn(
      "BookDiscussionComments",
      "BookDiscussionId"
    );
  },
};
