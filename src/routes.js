const express = require("express");
const routes = express();
const multer = require("multer");
const config = require("./config/multer");
const UserController = require("./controllers/UserController");
const AvatarController = require("./controllers/AvatarController");
const FriendController = require("./controllers/FriendController");
const CommentController = require("./controllers/CommentController");

const upload = multer(config);
routes.get("/user", UserController.index);
routes.post("/user", UserController.create);
routes.put("/user/:id", UserController.update);
routes.delete("/user/:id", UserController.delete);

routes.post("/friend", FriendController.create);

routes.post("/post/:id", CommentController.create);

routes.post("/avatar", upload.single("file"), AvatarController.create);
module.exports = routes;
