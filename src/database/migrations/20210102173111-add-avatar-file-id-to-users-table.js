"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn("Users", "avatar_file_id", {
			type: Sequelize.INTEGER,
			references: { model: "AvatarFiles", key: "id" },
			onUpdate: "CASCADE",
			onDelete: "SET NULL",
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn("Users", "avatar_file_id");
	},
};
