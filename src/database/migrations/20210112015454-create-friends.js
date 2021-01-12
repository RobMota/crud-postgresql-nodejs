"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Friends", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			user_id: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "Users", key: "id" },
			},
			friend_id: {
				allowNull: true,
				type: Sequelize.INTEGER,
				references: { model: "Users", key: "id" },
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Friends");
	},
};
