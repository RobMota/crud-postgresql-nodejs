const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (req, res) => {
	return res.json({ message: "Hello World" });
});

module.exports = app;
