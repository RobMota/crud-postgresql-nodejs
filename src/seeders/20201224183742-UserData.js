"use strict";
const faker = require("faker");

module.exports = {
	up: (queryInterface, Sequelize) => {
		let data = [];
		let amount = 50;
		let date = new Date()


		while (amount--) {
			data.push({
				name: faker.name.findName(),
				email: faker.internet.email(),
				created_at: date,
				updated_at: date
			});
		}

		return queryInterface.bulkInsert("Users", data, {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Users", null, {});
	},
};
