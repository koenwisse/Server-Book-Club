"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "clubs",
      [
        {
          name: "Teja Club",
          joinCode: "join the club",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Koen Club",
          userId: 2,
          joinCode: "join the club",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Susana Club",
          userId: 2,
          joinCode: "join the club",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Andre Club",
          joinCode: "join the club",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("clubs", null, {});
  },
};
