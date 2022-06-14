module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'games',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        game_state: {
          allowNull: false,
          type: Sequelize.JSONB,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('games');
  },
};
