"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bookDiscussionComments",
      [
        {
          comment: "super",
          userId: 1,
          bookdiscussionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "super",
          userId: 1,
          bookdiscussionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "super",
          userId: 1,
          bookdiscussionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "super",
          userId: 1,
          bookdiscussionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bookDiscussionComments", null, {});
  },
};
