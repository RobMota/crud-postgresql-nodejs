const { AvatarFiles } = require("../models");

module.exports = {
	async create(req, res) {
		const { originalname: name, filename: path } = req.file;
		const file = await AvatarFiles.create({
			name,
			path,
		});
		return res.json(file);
	},
};
