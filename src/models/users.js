"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Users extends Model {
		static associate(models) {
			this.belongsTo(models.AvatarFiles, { foreignKey: "avatar_file_id" });
		}
	}
	Users.init(
		{
			name: DataTypes.STRING,
			email: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "Users",
		}
	);
	return Users;
};
