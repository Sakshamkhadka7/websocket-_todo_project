import app from "./src/app.js";
import { envConfig } from "./src/config/config.js";
import connectDb from "./src/config/db.js";
import { Server } from "socket.io";

// post - on
// get - emit
// request -- socket
// api -- event

function startServer() {
  connectDb();
  const PORT = envConfig.port || 4000;
  const server = app.listen(PORT, () => {
    console.log(`Port is running on ${PORT} server `);
  });

  const io = new Server(server, {
    cors: {
      origin: "*",
    },
  }); // it attached websocket to HTTP request and allows client to upgrade individual connections from HTTP to Websocket

  io.on("connection", (socket) => { // io is global connection which is listen by every event while socket is specific event  
    console.log("CONNECTED");
    console.log(socket.id)

    socket.on("list", (data) => {
      console.log("LIST EVENT RECEIVED");
      console.log(data);
      socket.emit("response",{
        message:'Data is recieved',
      })
    });
  });
}

startServer();
