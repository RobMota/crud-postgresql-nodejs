const express = require("express");
const routes = require("./routes");
const app = express();
const cors = require("cors");
const { resolve } = require("path");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(resolve(__dirname, "..", "temp", "upload")));

app.get("/",);

module.exports = app;
