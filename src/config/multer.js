const multer = require("multer");
const { resolve, extname } = require("path");
const crypto = require("crypto");

module.exports = {
	storage: multer.diskStorage({
		destination: resolve(__dirname, "..", "..", "temp", "upload"),
		filename: (request, file, callback) => {
			crypto.randomBytes(16, (error, response) => {
				if (error) {
					return callback(error);
				}
				callback(null, response.toString("hex") + extname(file.originalname));
			});
		},
	}),
};
