"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "BookDiscussions",
      [
        {
          // bookId: "1",
          clubId: "1",
          startDate: "20-Feb-2021",
          endDate: "01-March-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // bookId: "1",
          clubId: "2",
          startDate: "21-Feb-2021",
          endDate: "01-March-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // bookId: "1",
          clubId: "3",
          startDate: "21-Feb-2021",
          endDate: "01-March-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // bookId: "1",
          clubId: "4",
          startDate: "20-Feb-2021",
          endDate: "01-March-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          // bookId: "1",
          clubId: "5",
          startDate: "20-Feb-2021",
          endDate: "01-March-2021",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
