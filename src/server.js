const app = require("./app");
var http = require("http").createServer(app);


options={
	cors:true,
	origins:["http://127.0.0.1:4001"],
 }


var io = require("socket.io")(http, options);
const PORT = 4001;


io.on("connection", (socket) => {
	console.log("A user connected");
	socket.on("chat.message", (data) => {
		console.log("[SOCKET] Chat.message => ", data);
		io.emit('chat.message', data)
	});
	socket.on("disconnect", () => {
		console.log("[SOCKET] => Disconnect ");
	});
});

http.listen(PORT, () => console.log("Running at port ", PORT));
