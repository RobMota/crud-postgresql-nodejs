const { Friends } = require("../models");

module.exports = {
	async create(req, res) {
		const { user_id, friend_id } = req.body;
		const friend = await Friends.create({ user_id, friend_id });

		return res.json(friend);
	},
};
