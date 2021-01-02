module.exports = {
	dialect: "postgres",
	host: "localhost",
	username: "postgres",
	password: "docker",
	database: "crud-nodesql",
	define: {
		timestamps: true,
		underscored: true,
		underscoredAll: true,
		freezeTableName: true,
	},
};
