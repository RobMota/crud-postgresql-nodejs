const { Users } = require("../models");

module.exports = {
	//List
	async index(req, res) {
		const user = await Users.findAll();
		return res.send(user);
	},

	//Create
	async create(req, res) {
		const { name, email } = req.body;
		const user = await Users.create({ name, email });
		return res.json(user);
	},

	//update
	async update(req, res) {
		const { id } = req.params;
		const { name, email, avatar_file_id } = req.body;
		const user = await Users.findOne({ where: { id } });

		await user.update({ name, email, avatar_file_id });

		return res.json(user);
	},

	//Delete
	async delete(req, res) {
		const { id } = req.params;
		const user = await Users.findOne({ where: { id } });
		user.destroy();
		return res.json({ message: "Deleted" });
	},
};
