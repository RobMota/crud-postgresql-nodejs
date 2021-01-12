"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Friends extends Model {
		static associate(models) {
			this.belongsTo(models.Users, { foreignKey: "user_id" });
		}
	}
	Friends.init(
		{
			user_id: DataTypes.INTEGER,
			friend_id: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Friends",
		}
	);
	return Friends;
};
