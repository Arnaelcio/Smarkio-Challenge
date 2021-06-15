"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Comments", [
      {
        name: "Arnaelcio",
        comment: "Primeiro comentário de Arnaelcio ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Arnaelcio2",
        comment: "Segundo comentário de Arnaelcio ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Comments", null, {});
  },
};
