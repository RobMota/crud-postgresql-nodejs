const { Comments } = require("../models");

module.exports = {
	async create(req, res) {
		const [userExist] = await Comments.findAll({
			limit: 1,
			where: { user_id: req.params.id },
			order: [["created_at", "DESC"]],
		});

		const { content } = req.body;
		const comments = await Comments.create({
			content,
			user_id: userExist.user_id,
			post_id: userExist.post_id + 1,
		});

		return res.json(comments);
	},
};
