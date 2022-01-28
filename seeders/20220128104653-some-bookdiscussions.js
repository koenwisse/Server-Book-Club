"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bookdiscussions",
      [
        {
          bookId: 1,
          clubId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 2,
          clubId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 3,
          clubId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 4,
          clubId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bookdiscussions", null, {});
  },
};
