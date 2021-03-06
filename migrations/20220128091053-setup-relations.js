"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("clubs", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("bookdiscussions", "clubId", {
      type: Sequelize.INTEGER,
      references: {
        model: "clubs",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn("bookDiscussionComments", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });

    await queryInterface.addColumn(
      "bookDiscussionComments",
      "bookdiscussionId",
      {
        type: Sequelize.INTEGER,
        references: {
          model: "bookdiscussions",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("clubs", "userId");
    await queryInterface.removeColumn("bookdiscussions", "clubId");
    await queryInterface.removeColumn("bookDiscussionComments", "userId");
    await queryInterface.removeColumn(
      "bookDiscussionComments",
      "bookdiscussionId"
    );
  },
};
